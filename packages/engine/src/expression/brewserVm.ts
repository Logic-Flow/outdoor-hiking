import {
  ErrorCode,
  WarningCode,
  getErrorMsg,
  getWarningMsg,
} from '../constant/logCode';

const runInBrowserContext = async (code: string, globalData = {}) => {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  if (!document || !document.body) {
    console.error(getErrorMsg(ErrorCode.NO_DOCUMENT_BODY));
  }
  document.body.appendChild(iframe);

  const iframeWindow = iframe.contentWindow as any;
  const iframeEval = iframeWindow.eval;
  Object.keys(globalData).forEach((key: string) => {
    iframeWindow[key] = globalData[key];
  });

  let res = null;
  try {
    res = iframeEval.call(iframeWindow, code);
  } catch (e) {
    console.warn(getWarningMsg(WarningCode.EXPRESSION_EXEC_ERROR), { code, globalData, e });
  }
  document.body.removeChild(iframe);
  return res;
};

export {
  runInBrowserContext,
};
