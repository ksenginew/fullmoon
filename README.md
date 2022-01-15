_This is the main branch of the repo, which contains the latest stable release. For the ongoing development, see the [develop branch](https://github.com/ksenginew/fullmoon/tree/develop)._

# Fullmoon

> Front-end framework with a built-in dark mode and full customizability using CSS variables; great for building dashboards and tools.

-   **Built-in dark mode**—Fullmoon comes with a built-in, toggleable dark mode, which is one of its most important and defining features.
-   **Fully customizable using CSS variables**—The framework is built entirely using CSS variables (also known as CSS custom properties). There are close to _1,500 CSS variables_, which means that almost everything can be customized by overriding a property, making it very easy to theme Fullmoon to fit your brand. [Learn more about customization](https://www.gethalfmoon.com/docs/customize/).
-   **Great for building dashboards and tools**—The components have a very standard look and feel to them, making them suitable for dashboards and tools. Moreover, a lot of importance is placed on components such as forms, navbars, sidebars, dropdowns, toasts, shortcuts, etc. and there are also _tons of utilities_ available.
-   **Optional JS library**—Many of the components found in Fullmoon are built to work without JavaScript. However, the framework still comes with a powerful JavaScript library with no extra dependencies, such as jQuery.
-   **Bootstrap like classes**—The class names should be instantly familiar to anyone who has used Bootstrap.
-   **Cross-browser compatibility**—Fully supports almost all the browsers under the sun, including really old ones like Internet Explorer 11.

To learn more, go to [the documentation](https://www.gethalfmoon.com/docs/introduction/).

## Quickstart

The quickest way to get started with Fullmoon is by using the CDN to include the following files:

```html
<!-- Fullmoon CSS -->
<link
    href="https://cdn.jsdelivr.net/npm/fullmoon@0.0.1/css/fullmoon.min.css"
    rel="stylesheet"
/>

<!-- Fullmoon JS -->
<script src="https://cdn.jsdelivr.net/npm/fullmoon@0.0.1/js/fullmoon.umd.js"></script>
```

**Pleast note**, the JS file should be placed at the end of the `<body>` tag. Otherwise, some things may not work as expected. For example, using the `onclick="..."` event to call one of Fullmoon's built-in methods will not work **unless** the JS file is placed at the end of the `<body>` tag.

## Using npm

```
npm install fullmoon
```

After installation, the required CSS and JS file can be imported in the following way as a ES module.

```javascript
// Include CSS file
import 'fullmoon/dist/css/fullmoon.min.css';

// Import JS library
import fullmoon from 'fullmoon';
```

Or import it as a commonjs(default NodeJs modules) module.

```javascript
// Include CSS file
require('fullmoon/dist/css/fullmoon.min.css');

// Import JS library
const fullmoon = require('fullmoon');
```

Please note that manual initialization is required for some components, that is, after the DOM is loaded, the following method needs to be called:

```javascript
// Call this method after the DOM has been loaded
fullmoon.onDOMContentLoaded();
```

This initializes all of the components that require JavaScript, such as dropdowns, custom file inputs, shortcuts, etc.

In this way, Fullmoon can be used with frameworks that use the virtual DOM, such as React and Vue. For instance, in the case of Vue, the `fullmoon.onDOMContentLoaded()` method would be called inside the `mounted()` hook of your component.

## Using React

If you are using React to call the built-in methods, such as `fullmoon.toggleSidebar()`, please make sure the call is made in a way that binds the correct context. There are two ways to do this:

1.  Using an anonymous method:

    ```html
    <button className="btn" type="button" onClick={() =>
    fullmoon.toggleSidebar()}>
    ```

2.  Using `bind`:

    ```html
    <button
        className="btn"
        type="button"
        onClick="{fullmoon.toggleSidebar.bind(fullmoon)}"
    ></button>
    ```

You can find more details in the [React documentation](https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all).

## License

fullmoon is licensed under the [MIT](https://github.com/ksenginew/fullmoon/license) license.

## Copyright

Copyright 2022, Kavindu Santhusa
