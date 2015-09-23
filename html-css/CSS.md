# CSS

For the purposes of this document, unless otherwise indicated "CSS" means CSS, SASS, SCSS and LESS.

 - [Style Guide](#style-guide)
  - [BEM](#bem)
  - [SASS](#sass)
  - [Bootstrap](#bootstrap)
  - [Fix'its & tips](#fixits--tips)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide

### BEM

[bem-site]: http://getbem.com/
[bem-projects]: https://en.bem.info/

The **Block**, **Element**, **Modifier** methodology (commonly referred to as [BEM](bem-site)) is a popular naming convention for classes in HTML and CSS.

It's not our intention to use the [BEM project framework](bem-projects) as this goes well beyond the boundaries of CSS naming conventions.

Here is an example of the [BEM](bem-site) from [BEM 101](bem-101)

```CSS
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```

How the above is used in HTML. Note how easy it is to decipher what is being defined and the probable rendering.

```HTML
<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn-price">$9.99</span>
  <span class="btn-text">Subscribe</span>
</a>
```

A smart part of BEM is that everything is a class and nothing is nested. That makes CSS specificity very flat and low, which is a good idea. It means you won't end up fighting with yourself over specificity.

However, Bootstrap is NOT written exactly with this in mind, or in the BEM syntax. 

Format of rules inside selectors will be enforced by the use of [CSSComb](css-comb).

#### When not to use it

BEM benefits developers deciphering code. But what about other users? One user that comes to mind is a Designer who updates content through a CMS. Using BEM would require them to have clear documentation on how to implement styles; documentation we would have to write!

For these users I would simplify some elements; tables being a classic example. Rather than adding classes to `table`, `th` and `td`, it would be easier for the user to apply one class to handle all the styling.

This has been used in the styling of the table in the style guide as an example. 

```HTML
  <table cellspacing="0" cellpadding="0" class="table table--standard">
    <thead>
      <tr><th>...
    
        </th>
      </tr>
    </tfoot>
  </table>
```

#### Required Reading

 - [Main BEM site](bem-site)
 
 - [Modular CSS with SASS and BEM article](sass-bem-article) is a good starter for the concepts

[sass-bem-article]: http://mathayward.com/modular-css-with-sass-and-bem/

 - [BEM 101](bem-101) on CSS Tricks, which is another 'starter'
 
[bem-101]: https://css-tricks.com/bem-101/

 - [Mixing SASS, BEM and Bootstrap hints](sass-bem-bs) 

[sass-bem-bs]: http://andersonorui.com/2014/08/08/bootstrap-sass-bem/

- - -

### Stylus

[Stylus](stylus)

[stylus]: https://learnboost.github.io/stylus/

[Stylus for Bootstrap](bootstrap-stylus)

[bootstrap-stylus]:https://github.com/maxmx/bootstrap-stylus

- - -

### SASS

[Convert SASS to Stylus](convert-sass-stylus)

[convert-sass-stylus]: http://sass2stylus.com/

The above example of BEM written in SASS

```SASS
/* Block component */
.btn {

  /* Element that depends upon the block */ 
  &__price {}

  /* Modifier that changes the style of the block */
  &--orange {} 
  &--big {}
}
```

Outputs:

```CSS
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```
#### Mixins - A list of whats in it

 - **Set a rem font size with pixel fallback**
 - **Cross browser opacity**: This mixin ensures cross browser opacity all the way down to Internet Explorer 5.
 - **Visually hide an element**: When you hide an element with display: none, that prevents screen readers from reading it to the user. Sometimes that’s fine, but in other cases this will make the site harder for those users to navigate.
 - **Placeholder text**: Style the text colour
 - **Transitions**: For all browsers, accepting any arguments
 - **Margin helpers**: Set margins top, bottom, left, right and other combinations as percentages based on variables
 - **Nav arrows**: Render an arrow with a given direction, width, height, stroke weight, colour and hover colour

#### Helpers - A list of whats available
- **Margins** We have the following available: 
  - Use the **xs**, **sm**, **md**, **lg** and **xl** to set the size of the margin
  - Example: `margin-left-xs`  `margin-right-sm` `margin-top-md` `margin-bottom`lg and `margin-left-x` 
  - Use **left**, **right**, **top** and **bottom** 
  - For uniform margins for top and bottom, or left and right, use margin-horizontal-**xx**, or margin-vertical-**xx**.
- **Hyphenation**: Add the class `.hyphenate` to handle the breaking of large words across lines


- - -

### Bootstrap

Add a reference to your SASS variables file into the main import file of Bootstrap. This is a manual tweak to the Bootstrap files, but once done, your variables will overwrite all of the declared Bootstrap ones.  

#### Accessibility

At the time of this writing, Bootstrap has an average accessibility rating. To improve on this, add the [Paypal BS Acessibility plugin](paypal-accessibility-bs)

[paypal-accessibility-bs]: https://github.com/paypal/bootstrap-accessibility-plugin 

- - -

### Fix'its & tips

 - Working on an older App? Create a link to an external CSS file in your APP. This way designers can update the file and work more dynamically and avoid build requests and time waiting. 



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
