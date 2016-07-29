This is a fork of [tjvr/scratchblocks](https://github.com/tjvr/scratchblocks) which supports Node.js and can be used with bundlers like browserify and webpack. See [PR 187 @ tjvr](https://github.com/tjvr/scratchblocks/pull/187).

[![Screenshot](http://scratchblocks.github.io/screenshot.png)](https://scratchblocks.github.io/#when%20flag%20clicked%0Aclear%0Aforever%0Apen%20down%0Aif%20%3C%3Cmouse%20down%3F%3E%20and%20%3Ctouching%20%5Bmouse-pointer%20v%5D%3F%3E%3E%20then%0Aswitch%20costume%20to%20%5Bbutton%20v%5D%0Aelse%0Aadd%20(x%20position)%20to%20%5Blist%20v%5D%0Aend%0Amove%20(foo)%20steps%0Aturn%20ccw%20(9)%20degrees)


# Install

If you are going to use scratchblocks with Node.js, install the [Cairo dependencies](https://github.com/Automattic/node-canvas#installation) first.

```
npm install arve0/scratchblocks
```

# Usage

## Node
```js
var scratchblocks = require('scratchblocks');
var fs = require('fs');

var svg = scratchblocks(`
when flag clicked
`);

fs.writeFileSync('out.svg', svg);
```

**Note:** If you intend to distribute SVG cross-platform, they may not look right on all systems. This is because text sizes are calculated with the [font available on the system](http://fontfamily.io/Lucida_Grande,Lucida_Sans_Unicode,Verdana,Arial,sans-serif;) you build the SVG.

## Browser
```html
<script src="path/to/browser/scratchblocks.min.js"></script>
<script>scratchblocks.renderMatching('pre.blocks');</script>
```

`scratchblocks.renderMatching` will replace all code blocks with SVGs.

**Note:**  Browser-build is found in the [browser-folder](browser).

The standard build contains all translations for the [Scratch forum](https://scratch.mit.edu/discuss/) and size is about 200k.

If want to save size and only need one translation:

1. clone this repo
2. fetch translation with `npm run translations -- language_code`
3. repackage with `npm run browser-bundle && npm run browser-min`

## Bundlers
For bundlers like browserify and webpack which respects the [`browser` hint in `package.json`](https://github.com/defunctzombie/package-browser-field-spec), `require('scratchblocks')` will point to the UMD-build `browser/scratchblocks.js`. If you instead want to compile scratchblocks yourself, use the entry-point [`browser/index.js`](browser/index.js):

```js
var scratchblocks = require('scratchblocks/browser/index.js');
```

Make sure you use some sort of unreachable branch removal, **or it will not work**. If unreachable branches are not removed, you will get the error message `TypeError: DOMParser is not a constructor` because of [variable declaration hoisting](http://www.w3schools.com/js/js_hoisting.asp).

## Inline blocks

To use blocks inside paragraphs:

```html
<p>Paragraph with <code class="b">stamp</code> block.</p>
```

use the `inline` option:

```js
scratchblocks.renderMatching('code.b', { inline: true });
```

## Markdown

Inline code in your markdown like this:

    ```blocks
    when flag clicked
    go to x:(-50) y:(0)
    ```

Then use [markdown-it](https://github.com/markdown-it/markdown-it) or similar, and hook into the `highlight` option:

```js
var md = require('markdown-it')({
  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (str, lang) {
    if (lang === 'blocks') {
      return scratchblocks(str);  // returns SVG as a string
    }
    // other languages
    return '';
  }
});
```


# Translations

Translations are fetched from the [Scratch translation server](http://translate.scratch.mit.edu).

In node, all languages in [`src/locales`](src/locales) will be loaded. If you want to fetch a specific language, use `npm run translations -- languageCode`. As of now, languages for the Scratch forum are included:

```js
var FORUM_LANGS = ['de', 'es', 'fr', 'zh_CN', 'pl', 'ja', 'nl' , 'pt', 'it',
                   'he', 'ko', 'nb', 'tr', 'el', 'ru', 'ca', 'id'];
```

This is also true for the browser-build. So you can fetch the languages you want and repackage with `npm run browser-bundle && npm run browser-min`.

If you want all languages, use `npm run translations -- all`.

Please note that scratchblocks **requires** some [additional words](src/locales/extra_aliases.js) which aren't in Scratch itself (mainly the words used for the flag and arrow images).


# Development

This should set you up and start a http-server for development:

```
npm install
npm start
```

Then open `http://localhost:8080/`

For more details, see [`CONTRIBUTING.md`](.github/CONTRIBUTING.md).


# Credits

[This is a fork.](https://github.com/tjvr/scratchblocks)

I will try to keep it updated with tjvr/scratchblocks. PRs are welcome.
