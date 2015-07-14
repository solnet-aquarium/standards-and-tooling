# CSS

For the purposes of this document, unless otherwise indicated "CSS" means CSS, SASS, SCSS and LESS.

 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide

### BEM

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS.

Format of rules inside selectors will be enforced by the use of [CSSComb](css-comb).

#### Required Reading

 - [Modular CSS with SASS and BEM article](sass-bem-article) is a good starter for the concepts

[sass-bem-article]: http://mathayward.com/modular-css-with-sass-and-bem/

 - [BEM 101](bem-101) on CSS Tricks, which is another 'starter'
 
[bem-101]: https://css-tricks.com/bem-101/

 - [Mixing SASS, BEM and Bootstrap hints](sass-bem-bs) 

[sass-bem-bs]: http://andersonorui.com/2014/08/08/bootstrap-sass-bem/



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
