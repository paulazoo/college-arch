# 230501
## make sure have nvm and node
- `nvm --version`
    - 0.39.1
- check if `node --version`
    - v16.15.1
- if node doesn't exist error, `nvm install 16.15.1`

## building on aws amplify
- using us-east-2.console.aws.amazon.com
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
    - Amplify automatically deploys with pushes to github

## changes to close/open up application
- disabled or not disabled Mentor and Fellow Apply buttons
    - lines 133 and 149 of Apply.js
- Fellowship Applications open now
    - line 184 and 185 of Landing.js
    - line 267 of Landing.js
- dates changing
    - search and replace for "july"
- class year changing
    - search for "class year to change"

## Env vars on aws website
AWS Amplify>All apps>college-arch>App settings:Environment variables

## Image types for loading from Amplify
AWS Amplify>All apps>college-arch>Rewrites and redirects
    - </^[^.]+$|.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>
    - also no capitalized PNG or JPG or etc assets. oh but git doesn't detect renames...