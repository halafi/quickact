## ⚛️ Quickact

Production ready lightweight React starter.

If you don't like `create-react-app` after you eject.

Just shallow clone and setup as a new repo:

1. `git clone --depth=1 --branch=master git@github.com:halafi/quickact.git newProjectName`
2. `rm -rf ./newProjectName/.git`
3. Update all dependencies to latest versions if applicable with e.g. [npm-check-updates](https://github.com/tjunnone/npm-check-updates): `ncu -u`
4. `npm i`

Start developing. That's it.

## Deploy with Docker as on-demand SSR and static asset server

Not recommended, unless you really want server and cannot pre-render majority of your pages.

1. `docker build --tag quickact:1.0 .`
2. `docker run --publish 8080:3000 --detach --name qa quickact:1.0`

or

1. `docker-compose up`

## Deploy only static files located in dist folder with CDN

1. `npm run build`

you can use Netlify or setup github pages for your repository

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
- [x] Routing
- [x] Server Side Rendering

### ❔ What might be included in the future
- [ ] Prerendering
- [ ] Helmet
- [ ] Code Splitting
- [ ] PWA, Workbox

### ❌ What is not going to be included
- [ ] Stylelint
