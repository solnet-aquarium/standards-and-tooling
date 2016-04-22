# CSS

Please note that this is going through a review of Methodologies and frameworks

For the purposes of this document, unless otherwise indicated "CSS" means CSS, SASS, SCSS and LESS.

 - [Style Guide](#style-guide)


## Style Guide

### Bootstrap is dead - long live Bootstrap mixins - or any others

I'm voting for a dropping of the Bootstrap framework. However, in my next project I will be adding all of the Bootstrap mixins. The idea is the familiarity and a good reference. However, I'm sure Compass or Bourbon can probably provide the same support.

### Inverted Triangle CSS methodology and OOCSS

To be continued...



### Reserved words

open, active, visible

These are reserved for use as modifier classes and not to have any default declarations assigned. 

An example:
```
.component1 {
  display: none;
}

.component1.open {
  display: block;
}
```
The reason for not assigning declarations to the .open class, we don't know how you will 'open' the component. It could be via display, or max-height or height. The above way allows you to customise it per component.

Reserved words will be toggled by JS to change the state of a component.