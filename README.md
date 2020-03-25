## ⚛️ Quickact

Production ready lightweight React starter.
Optimized for one-man SPA projects.

Just shallow clone and setup as a new repo:

1. `git clone --depth=1 --branch=master git@github.com:halafi/quickact.git new` (or branch `--branch=typescript` if you want types)
2. `rm -rf ./new/.git`
3. Update all dependencies to latest versions if applicable with e.g. [npm-check-updates](https://github.com/tjunnone/npm-check-updates): `ncu -u`
4. `npm i`

Start developing. That's it.

### 🔧 What's included and what's not

- [x] Client Side Rendering
- [x] Hot Module Replacement (HMR)
- [x] Webpack Dev Server
- [x] Webpack Production (+ gzip)
- [x] Eslint
- [x] Editorconfig
- [x] Prettier
- [x] Styled Components, reflexbox
- [x] Normalize
- [x] Babel + Polyfills (CoreJS 3)
- [x] Google Fonts - Roboto 400,700 (not optimized for page speed insights)
- [x] Jest (without coverage)
- [x] pre-installed: ramda
- [x] pre-installed: date-fns
- [x] TypeScript (optional)
- [ ] Flow
- [ ] Stylelint
- [ ] Gulp
- [ ] Enzyme
- [ ] Code Splitting
- [ ] Routing
- [ ] Helmet
- [ ] Server Side Rendering
- [ ] Prerendering
