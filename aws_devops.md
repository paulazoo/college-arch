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
- delete node_modules and old package-lock.json again
- `npm cache clean --force` again
- `npm install` again
- verify `npm ci` works this time
- ready to push to github/deploy on aws amplify

## todo:
- point google domain
- push updated api that communicates with aws website
- eventually: host college-arch-api outside of heroku as well