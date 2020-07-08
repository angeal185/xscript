# xscript

The as close as it gets to vanilla js speed template engine


![cd-img] ![dep-img] ![sz-img]

[![NPM Version][npm-img]][npm-url] ![lic-img]

# Documentation

- [About](#about)
- [Installation](#installation)
- [Setup](#setup)
- [Element basic](#element-basic)
- [Element attributes](#element-attributes)
- [Element events](#element-events)
- [Element nested](#element-nested)
- [Element reference](#element-reference)
- [Nested text nodes](#nested-text-nodes)
- [Nested functions](#nested-functions)

# about

xscript was created to be as close as it gets to vanilla js speed.

xscript works directly with the dom to allow you to produce event driven html. Each element/node is only ever created once. This created element/node is from then onward cloned at each call for increased speed.

* xscript works directly with the dom
* less than 1kb in size
* no regex/unsafe functions
* about as close to using vanilla js speed as it gets.

# Installation

npm

stable release

```sh
$ npm install xscript --save
```

dev release

git
```sh
$ git clone https://github.com/angeal185/xscript.git
```

browser

```html
<html>
  <head>
    <meta charset="utf-8">
    <script src="/path/to/xscript.mjs" type="module"></script>
    <!-- or -->
    <script src="/path/to/xscript.js"></script>
  </head>
</html>
```

# Setup

The `cpre` variable within xscript could optionally contain a list of tags for elements
that you want to pre-clone. The tag name `txt` is reserved and should not
be used if creating custom tags;

```js
// xscript.mjs || xscript.js

//pre-clone elements
cpre = ['div']

```

each element is only ever created once. from then on, it will be cloned.


# API

```js

/**
 *  @x(tag, ...arguments)
 *  @param {string} tag ~ html tag
 *  @param {object|string|function} arguments
 **/

```

# element basic

```js
// create a basic element with text

let item = x('p', 'example plain text');

console.log(item)
// <p>example plain text</p>

document.body.append(item)

```

# element attributes
```js
// create an element with multiple attributes

let item = x('input', {
  id: 'testid',
  class: 'class1 class2 class3',
  type: 'text',
  placeHolder: 'example attributes',
  style: 'color:red;background:black'
})

console.log(item)
// <input id="testid" class="class1 class2 class3" type="text" style="color:red;background:black" placeholder="example attributes">

```

# element events
```js

let item = x('p', {
  id: 'testid',
  class: 'class1 class2 class3',
  onclick: function(){
    console.log('item clicked!');
  },
  onmouseover: function(){
    console.log('item mouseover!');
  }
})

console.log(item.click())
// item clicked!
console.log(item.onmouseover());
// item mouseover!
```

# element nested
```js

let items = x('p',
  x('p', 'level 2.1'),
  "some text",
  x('p', 'level 2.2',
    x('p', 'level 3',
      x('p', 'level 4.1'),
      function(){
        // some function element
        return x('p', 'level 4.2')
      },
      x('p', 'level 4.3'),
      function(){
        return 'some function text node'
      }
    )
  ),
  'level 1'
)

document.body.append(items);
```

# element reference

once created, an node can be referenced like any other js node.

```js

let item = x('p')
item.id = 'testid';
item.textContent = 'click me';

let somefunction = function(){
  item.removeEventListener('click', somefunction);
  item.textContent = 'clicked'
  somefunction = item = null;
  console.log(somefunction, item)
}

item.addEventListener('click', somefunction, false)

document.body.append(item);

```

# nested text nodes
```js

let items = x('p',
  'prepended text',
  x('p', 'basic 1', 'basic 2', () => 'basic 3'),
  'nested text',
  x('p', 'basic 4', 'basic 5', () => 'basic 6'),
  'appended text text'
);

console.log(items);
/*
<p>
    "prepended text"
    <p>"basic 1" "basic 2" "basic 3"</p>
    "nested text"
    <p>"basic 4" "basic 5" "basic 6"</p>
    "appended text text"
</p>
*/
```

# nested functions

* functions should only return element or text nodes.

```js

let items = x('p',
  () => 'you',
  () => 'can',
  () => 'add',
  () => 'as',
  () => 'many',
  () => x('p','as'),
  () => 'you',
  () => 'want',
  () => 'wherever',
  () => 'you',
  () => 'want',
);

console.log(items);

```

[cd-img]: https://app.codacy.com/project/badge/Grade/e306036b67264c03a4a0f3e346c677af
[npm-img]: https://badgen.net/npm/v/xscript?style=flat-square
[dep-img]:https://badgen.net/david/dep/angeal185/xscript?style=flat-square
[sz-img]:https://badgen.net/packagephobia/publish/xscript?style=flat-square
[lic-img]: https://badgen.net/github/license/angeal185/xscript?style=flat-square
[npm-url]: https://npmjs.org/package/xscript
