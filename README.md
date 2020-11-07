# Template for your next React app

Production ready lightweight React starter.

If you plan to use React in production and don't like `create-react-app` after you eject.

Primarily aimed at **client side single page apps**.

To create a new project based on this template using <a href="https://github.com/Rich-Harris/degit" target="_blank">degit</a>:

```bash
  npx degit halafi/quickact react-app
  cd react-app
```

## Get started

Install the dependencies...

```bash
  cd react-app
  yarn
```

...then start:

```bash
  yarn start
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running.

## 🔧 What's included

- [x] Client Side Rendering
- [x] Hot Module Replacement (HMR)
- [x] Webpack Dev Server
- [x] Webpack Production (+ gzip)
- [x] TypeScript
- [x] Eslint
- [x] Prettier
- [x] Browserslist
- [x] Editorconfig
- [x] Styled Components (might change this to [linaria](https://github.com/callstack/linaria))
- [x] Normalize
- [x] Babel + Polyfills (CoreJS 3)
- [x] Jest (without coverage and component testing setup)
- [x] Lib: date-fns

### ❔ What might be included in the future
- [ ] [Rome](https://github.com/romefrontend/rome) (once it is more mature and not just a linter could replace Eslint, Webpack, Babel...)
- [ ] Routing
- [ ] Code Splitting
- [ ] PWA, Workbox

### ❌ What is probably not going to be included
- [ ] Stylelint
- [ ] Server Side Rendering
- [ ] Prerendering (for pre-rendering on steroids check out [Elderjs](https://github.com/elderjs/elderjs))
- [ ] Helmet / SEO
