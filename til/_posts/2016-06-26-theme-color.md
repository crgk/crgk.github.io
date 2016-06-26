---
title: theme-color
---

To change the URL/title bar of your web page when viewed on mobile, you just need to add a `meta` tag to the `head`:

```html
<meta name="theme-color" content="{{ page.theme_color }}">
```

Of course, it isn't standard and you have to do something different for the various vendors ಠ\_ಠ

```html
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="{{ page.theme_color }}">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="{{ page.theme_color }}">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

And since I decided to use that template variable, I've also added a default for `theme_color` in `config.yml`:

```diff
defaults:
  - 
    scope:
      path: ""
    values:
      author: "Chad Knight"
+++   theme_color: "#306090"
 
``` 

---

SOURCE:

[Google Developers \| Color browser elements](https://developers.google.com/web/fundamentals/design-and-ui/browser-customization/theme-color)
