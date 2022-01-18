# 🌝 Fullmoon CSS

Front-end framework with a built-in dark mode and
full customizability using CSS variables; great
for building dashboards and tools.

> This is the **activly developing** fork of [halfmoon](https://www.gethalfmoon.com),
> Once halfmoon became active. We could merge both.

in active development. 
- 🌚 **Dark mode with toggle option.**
- 🛠️ **[Customization](https://www.gethalfmoon.com/docs/customize/) with CSS variables.**
- 📋 **Prefect for dashboard and tools.**
- ♨️ **Optional JavaScript library.**
- 👢 **Bootstrap like classes.**
- 🌐 **Modern but with Cross browser support.**

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/containers/).

## Quickstart
Looking to quickly add Fullmoon to your project?
Use jsDelivr, a free open source CDN or a Node package manager (npm, pnpm or yarn).

### Using CDN
When you only need to include Fullmoon’s compiled
CSS or JS, you can use jsDelivr.

```html
<!-- Fullmoon CSS -->
<link
    href="https://cdn.jsdelivr.net/npm/fullmooncss@0.0.1/css/fullmoon.min.css"
    rel="stylesheet"
/>

<!-- Fullmoon JS -->
<script src="https://cdn.jsdelivr.net/npm/fullmooncss@0.0.1/js/fullmoon.umd.js"></script>
```

**Pleast note**, the JS file should be placed at
the end of the `<body>` tag.

### Using a package manager

```
npm install fullmooncss
# or pnpm add fullmooncss
# or yarn add fullmooncss
```

After installation, the required CSS and JS file
can be imported in the following way as a ES module.

```javascript
// Include CSS file
import 'fullmooncss/dist/css/fullmoon.min.css';

// Import JS library
import fullmoon from 'fullmooncss';
```

Or import it as a commonjs(default NodeJs modules)
module.

```javascript
// Include CSS file
require('fullmooncss/dist/css/fullmoon.min.css');

// Import JS library
const fullmoon = require('fullmooncss');
```

## Initialization

Please note that manual initialization is required
for some components, that is, after the DOM is loaded, the following method needs to be called:

```javascript
// Call this method after the DOM has been loaded
fullmoon.onDOMContentLoaded();
```

This initializes all of the components that require
JavaScript, such as dropdowns, custom file inputs,
shortcuts, etc.

In this way, Fullmoon can be used with frameworks
that use the virtual DOM, such as React and Vue.
For instance, in the case of Vue, the
`fullmoon.onDOMContentLoaded()` method would be
called inside the `mounted()` hook of your
component.

### Using React

If you are using React to call the built-in methods,
such as `fullmoon.toggleSidebar()`, Don't assign
them directly as event handlers.

```diff
- <button className="btn" type="button" onClick={fullmoon.toggleSidebar}>
+ <button className="btn" type="button" onClick={() => fullmoon.toggleSidebar()}>
```

See [React documentation](https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all).

## Contributing
_This is the main branch of the repo, which
contains the latest stable release. For the ongoing
development, see the [develop branch](https://github.com/ksenginew/fullmoon/tree/develop)._

## License

Fullmoon is licensed under the [MIT](https://github.com/ksenginew/fullmoon/license) license.

## Copyright

Copyright 2022, Kavindu Santhusa
