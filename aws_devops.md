# 221010
## make sure have nvm and node
- `nvm --version`
    - 0.39.1
- check if `node --version`
    - v16.15.1
- `nvm install 16.15.1`

## building on aws amplify
- delete node_modules and old package-lock.json
- `npm cache clean --force`
- `npm install`
- verify works locally with `npm start`
- `npm ci` errors:
    - fix explicitly within package.json
