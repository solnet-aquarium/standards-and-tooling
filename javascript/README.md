# JavaScript

 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide

The [Google JavaScript Style Guide][google-style-guide] has been adopted as the company standard. Read it, learn it, do it.

### Angular JS

[johnpapa's Angular JS Style Guide][angular-style-guide] has been adopted as the company standard.  


### Required Reading

 - [Google JavaScript Style Guide][google-style-guide]
 - [johnpapa's Angular JS Style Guide][angular-style-guide]

[google-style-guide]: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[angular-style-guide]: https://github.com/johnpapa/angular-styleguide

- - -

## Automatic Formatting

JSCS must be used to format JS files on save. Installation:

`npm install -g jscs`

### Editor Plugins

#### Vim: [Chiel92/vim-autoformat][vim-autoformat]

Add this to your `.vimrc`

```VimL
let g:formatprg_js = 'jscs'
autocmd BufWritePre,FileWritePre *.js silent! :Autoformat<CR>
```

#### Eclipse

**TODO**

#### IntelliJ

**TODO**

[vim-autoformat]: https://github.com/Chiel92/vim-autoformat

- - -

## Linting

JSCS must be used to lint JS files on save. Installation:

`npm install -g jscs`

### Editor Plugins

#### Vim: [scrooloose/syntastic][syntastic]

Add this to your `.vimrc`

```VimL
let g:syntastic_javascript_checkers=['jscs']
```

#### Eclipse

**TODO**

#### IntelliJ

**TODO**

[syntastic]: https://github.com/scrooloose/syntastic
