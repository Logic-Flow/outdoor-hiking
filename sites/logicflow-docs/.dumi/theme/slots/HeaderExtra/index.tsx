import { ReactComponent as IconDown } from '@ant-design/icons-svg/inline-svg/outlined/down.svg';
import React, { type FC } from 'react';
import './index.less';

const HeaderExtra: FC = () => {
  return (
    <div className="dumi-default-lang-select dumi-version-select">
      <select
        value={process.env.DUMI_VERSION}
        onChange={(e) => {
          if (e.target.value !== process.env.DUMI_VERSION) {
            // window.open('https://v1.d.umijs.org/', '_blank');
          }
        }}
      >
        <option value={process.env.DUMI_VERSION}>
          {process.env.DUMI_VERSION}
        </option>
        <option value="1.2.x">1.2.x</option>
        <option value="1.1.x">1.1.x</option>
        <option value="1.0.x">1.0.x</option>
        <option value="0.7.x">0.7.x</option>
      </select>
      <IconDown />
    </div>
  );
};

export default HeaderExtra;
