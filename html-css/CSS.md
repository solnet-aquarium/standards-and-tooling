# CSS

Please note that this is going through a review of Methodologies and frameworks

For the purposes of this document, unless otherwise indicated "CSS" means CSS, SASS, SCSS and LESS.

 - [Style Guide](#style-guide)


## Style Guide

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