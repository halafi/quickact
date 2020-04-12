## ⚛️ Quickact

Production ready lightweight React starter.

If you don't like `create-react-app` after you eject.

Just shallow clone and setup as a new repo:

1. `git clone --depth=1 --branch=master git@github.com:halafi/quickact.git newProjectName`
2. `rm -rf ./newProjectName/.git`
3. Update all dependencies to latest versions if applicable with e.g. [npm-check-updates](https://github.com/tjunnone/npm-check-updates): `ncu -u`
4. `npm i`

Start developing. That's it.

### 🔧 What's included

- [x] Client Side Rendering
- [x] Hot Module Replacement (HMR)
- [x] Webpack Dev Server
- [x] Webpack Production (+ gzip)
- [x] TypeScript
- [x] Eslint
- [x] Prettier
- [x] Browserslist
- [x] Editorconfig
- [x] Styled Components + Styled System using rebass
- [x] Normalize
- [x] Babel + Polyfills (CoreJS 3)
- [x] Jest (without coverage and component testing setup)
- [x] Lib: ramda
- [x] Lib: date-fns

### ❔ What might be included in the future
- [ ] Routing
- [ ] Helmet
- [ ] Code Splitting
- [ ] PWA, Workbox

### ❌ What is probably not going to be included
- [ ] Stylelint
- [ ] Server Side Rendering
- [ ] Prerendering