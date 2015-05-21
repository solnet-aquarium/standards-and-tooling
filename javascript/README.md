# JavaScript

 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide

The [Google JavaScript Style Guide][google-style-guide] has been adopted as the company standard. Read it, learn 
it, do it.

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

If it isn't present already, add a [jscsrc][jscs-config] file at the root of your project, with the filename 
`.jscsrc`.

### Editor Plugins

**Vim**

Use [Chiel92/vim-autoformat][vim-autoformat]. NeoBundle is the recommended Vim package manager.

Add this to your `.vimrc`

```VimL
NeoBundleLazy 'Chiel92/vim-autoformat', { 'autoload': { 'filetypes': ['javascript'] } }
  let g:formatprg_js = 'jscs'
  autocmd BufWritePre,FileWritePre *.js silent! :Autoformat<CR>
```

**Eclipse**

**TODO**

**IntelliJ**

**TODO**

**Sublime Text 3**

First you will need to install SublimeLinter using Package Control. Use the
[SublimeLinter documentation][sublime-linter-documentation] to do this.

Search for the package SublimeLinter-jscs in Package Control and install it.

Note that you may have to add linting user preferences in order to begin using linting if you haven't already.

[vim-autoformat]: https://github.com/Chiel92/vim-autoformat
[sublime-linter-documentation]: https://sublimelinter.readthedocs.org/en/latest/installation.html#installing-via-pc
[sublime-text-3-jscs]: https://packagecontrol.io/packages/SublimeLinter-jscs

- - -

## Linting

JSCS must be used to lint JS files on save. Installation:

`npm install -g jscs`

If it isn't present already, add a [jscsrc][jscs-config] file at the root of your project, with the filename `.jscsrc`.

### Editor Plugins

**Vim: [scrooloose/syntastic][syntastic]**

Add this to your `.vimrc`

```VimL
let g:syntastic_javascript_checkers=['jscs']
```

**Eclipse**

**TODO**

**IntelliJ**

**TODO**

[syntastic]: https://github.com/scrooloose/syntastic
[jscs-config]: https://github.com/solnetdigital/standards-and-tooling/blob/master/javascript/config/jscs.json
