# CSS

For the purposes of this document, unless otherwise indicated "CSS" means CSS, SASS, SCSS and LESS.

 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide

### BEM

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

Here is an example of the BEM from [BEM 101](bem-101)

```CSS
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```

How the above is used in HTML. Note how is it easy to decipher what is being defined and the probable rendering.

```HTML
<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
```

A smart part of BEM is that everything is a class and nothing is nested. That makes CSS specificity very flat and low, which is a good idea. It means you won't end up fighting with yourself over specificity.

However, Bootstrap is NOT written with this in mind, or in the BEM syntax. 

Format of rules inside selectors will be enforced by the use of [CSSComb](css-comb).

#### Required Reading

 - [Modular CSS with SASS and BEM article](sass-bem-article) is a good starter for the concepts

[sass-bem-article]: http://mathayward.com/modular-css-with-sass-and-bem/

 - [BEM 101](bem-101) on CSS Tricks, which is another 'starter'
 
[bem-101]: https://css-tricks.com/bem-101/

 - [Mixing SASS, BEM and Bootstrap hints](sass-bem-bs) 

[sass-bem-bs]: http://andersonorui.com/2014/08/08/bootstrap-sass-bem/

- - -

### Bootstrap

Add a reference to your SASS variables file into the main import file of Bootstrap. This is a manual tweak to the Bootstrap files, but once done, your variables will overwrite all of the declared Bootstrap ones.  



- - -

## Automatic Formatting

[CSSComb](css-comb) must be used to automatically format CSS code.

[csscomb]: https://github.com/csscomb/csscomb.js

### Editor Plugins

**Vim**

**TODO**

**Eclipse**

**TODO**

**IntelliJ**

**TODO**

**Sublime**

Sublime has a plugin for CSSComb [Sublime CSSComb](Sublime-CSSComb)
[Sublime-CSSComb]: https://github.com/csscomb/sublime-csscomb

**Command Line**

[CSSComb](CSSComb) can be installed using npm (NodeJS).

[CSSComb]: http://csscomb.com/
```
npm -g install csscomb
```

- - -

## Linting

**Vim**

**TODO**

**Eclipse**

**TODO**

**IntelliJ**

**TODO**

**Sublime**

The SublimeLinter package has a linter for [SublimeLinter-csslint](SublimeLinter-csslint) and understands it's config.
[SublimeLinter-csslint]: https://github.com/SublimeLinter/SublimeLinter-csslint

**Command line**

[CSSLint](CSSLint) can be installed using npm (NodeJS).
[CSSLint]: https://github.com/CSSLint/csslint
```
npm -g install csslint
```
