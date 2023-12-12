
if ! [ -x "$(command -v pnpm)" ]; then
    echo 'Error: pnpm is not installed. install pnpm...' >&2
    npm install -g pnpm
fi

pnpm install
pnpm build

cd sites/logicflow-docs
rm -rf ./dist
pnpm build