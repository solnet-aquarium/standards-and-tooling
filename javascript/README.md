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

JSCS formatting is provided through the Tern.js plugin. 

*Install Tern JS Plugin*

Drag the "install" button from the [Tern js plugin][tern-js-plugin] page onto your Eclipse workspace, follow the 
wizard to completion.

Convert your project to a "Tern" project by right-clicking on the project folder from within the Eclipse
Project Explorer and choosing `Configure -> Convert to a Tern Project`.

*Enable JSCS Formatting*

Right click on the project and choose `Properties`, type "Formatting" into properties dialog's search bar, choose 
"Formatting". Click "Configure workspace settings". Choose "Import", and import the file [JSCS Formatting XML][jscs-xml].

*Enable JSCS Formatting on Save*

Open Eclipse Preferences. Type "Save" in the preferences dialog's search box. Choose `JavaScript -> Editor -> Save Actions`.
Enable "Perform the selected actions on save". Enable "Format source code". 

*Strip Whitespace on Save* 

Open Eclipse Preferences. Type "Save" in the preferences dialog's search box. Choose `JavaScript -> Editor -> Save Actions`.
Enable "Additional actions". Click "Configure". Click "Code organizing". Enable "Remove trailing whitespace".

[jscs-xml]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/config/jscs.xml

**IntelliJ**

**TODO**

**Sublime Text 3**

SublimeJSCSFormatter should be used to automatically format JavaScript code using JSCS.

This plugin can be installed via Package Control using the search term "JSCS Formatter".

The default configuration must be changed to ensure code is formatted on save.
Modify the settings within the `Preferences -> Package Settings -> JSCS Formatter -> Settings - User file`,
adding the following object to the root preferences JSON:

```JSON
{
  "format_on_save": true
}
```

See the [SublimeJSCSFormatter][sublime-jscs-formatter] documetation for further instructions.

[vim-autoformat]: https://github.com/Chiel92/vim-autoformat
[sublime-text-3-jscs]: https://packagecontrol.io/packages/SublimeLinter-jscs

- - -

## Linting

JSCS must be used to lint JS files on save. Installation:

`npm install -g jscs`

If it isn't present already, add a [jscsrc][jscs-config] file at the root of your project, with the filename `.jscsrc`.

**Toggling Rules**

In legacy projects, where refactoring could have unknown side effects or be otherwise impossible, use of inline flags is allowed.

```JavaScript
// Code here will be linted with JSCS.
// jscs:disable specificRule
// Code here will be ignored by JSCS.
// jscs:enable specificRule
```

For a list of rules, see [JSCS Rules][jscs-rules]. Note that this should be used as sparingly as possible and never for an entire file.

[jscs-rules]: http://jscs.info/rules.html

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

**Sublime Text 3**

First you will need to install SublimeLinter using Package Control. Use the
[SublimeLinter documentation][sublime-linter-documentation] to do this.

Search for the package SublimeLinter-jscs in Package Control and install it.

Note that you may have to add linting user preferences in order to begin using linting if you haven't already.

[syntastic]: https://github.com/scrooloose/syntastic
[sublime-linter-documentation]: https://sublimelinter.readthedocs.org/en/latest/installation.html#installing-via-pc
[jscs-config]: https://github.com/solnetdigital/standards-and-tooling/blob/master/javascript/config/jscs.json
[tern-js-plugin]: https://github.com/angelozerr/tern.java/blob/master/README.md
