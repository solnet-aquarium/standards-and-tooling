# JavaScript
 
 - [Quick Setup](#quick-setup)
 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
  - Editor Plugins: *[Vim](#vim), [Eclipse](#eclipse), [Intellij](#intellij), [Sublime Text 3](#sublime-text-3)*

 - [Linting](#linting)
  - Editor Plugins: *[Vim](#vim-1), [Eclipse](#eclipse-1), [Intellij](#intellij-1), [Sublime Text 3](#sublime-text-3-1)*
 - [Release Management](#release-management) 
 - [Pre-commit Hooks](#pre-commit-hooks)

## Quick Setup

1. Ensure your local project folder has been setup as a git repository
2. Ensure [NodeJS is installed][nodejs-install] on your development machine
2. Open a Terminal (OS X / Linux) or Command Prompt (Windows) and navigate to your project directory 
3. Execute the following commands

    ```Bash
    npm init # Follow the prompt to completion
    npm install --save-dev jscs eslint gulp gulp-eslint gulp-filter gulp-jscs git-guppy husky
    ```
4. Copy the [JSCS][jscsrc] and [ESLint][eslintrc] configuration files into your project's root directory. They should be named `.jscsrc` and `.eslintrc` respectively
5. Add the following lines to your `package.json` file, located at the root of your project directory. Note that if a `scripts` property exists already, these lines should be added to it. Otherwise, add the entire `scripts` property as below

```JSON
  "scripts": {
    "precommit": "npm run node_modules/.bin/gulp pre-commit"
   }
```

[nodejs-install]: https://nodejs.org/download/
[eslintrc]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/config/.eslintrc
[jscsrc]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/config/.jscsrc

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

##### Toggling Rules

In legacy projects, where refactoring could have unknown side effects or be otherwise impossible, use of inline flags is allowed.

```JavaScript
// Code here will be linted with JSCS.
/*jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
// Code here will be ignored by JSCS.
/*jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
```

For a list of rules, see [JSCS Rules][eslint-rules]. Note that this should be used as sparingly as possible and never for an entire file.

[jscs-rules]: http://jscs.info/rules.html

### Editor Plugins

##### Vim

Use [Chiel92/vim-autoformat][vim-autoformat]. NeoBundle is the recommended Vim package manager.

Add this to your `.vimrc`

```VimL
NeoBundleLazy 'Chiel92/vim-autoformat', { 'autoload': { 'filetypes': ['javascript'] } }
  let g:formatprg_js = 'jscs'
  autocmd BufWritePre,FileWritePre *.js silent! :Autoformat<CR>
```

##### Eclipse

JSCS formatting is provided through the Tern.js plugin. 

*Install Tern JS Plugin*

1. Drag the "install" button from the [Tern js plugin][tern-js-plugin] page onto your Eclipse workspace, follow the 
wizard to completion.
2. Convert your project to a "Tern" project by right-clicking on the project folder from within the Eclipse
Project Explorer and choosing `Configure -> Convert to a Tern Project`.

*Enable JSCS Formatting*

1. Right click on the project and choose `Properties`, type "Formatting" into properties dialog's search bar, choose 
"Formatting". 
2. Click "Configure workspace settings". Choose "Import", and import the file [JSCS Formatting XML][jscs-xml].

*Enable JSCS Formatting on Save*

Open Eclipse Preferences. Type "Save" in the preferences dialog's search box. Choose `JavaScript -> Editor -> Save Actions`.
Enable "Perform the selected actions on save". Enable "Format source code".

*Strip Whitespace on Save*

1. Open Eclipse Preferences. Type "Save" in the preferences dialog's search box. 
2. Choose `JavaScript -> Editor -> Save Actions`.
3. Enable "Additional actions". Click "Configure". 
4. Click "Code organizing". Enable "Remove trailing whitespace".

[jscs-xml]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/config/jscs.xml

##### IntelliJ

Use the [jscs][jscs-webstorm] plugin.

*Installation*

1. Download the [jscs][jscs-webstorm] plugin
2. `File > Settings`, choose `Plugins`
3. Click `Install plugin from disk...`, select the zip file you downloaded
4. Restart IDE
5. `File > Settings`, search "node". Click `Node.js and NPM`. Ensure node.js is installed.
6. Click `+`, install jscs
7. In the settings sidebar, click `JSCS`
8. Ensure `enable` is checked
9. Set the JSCS package path to your project's `node_modules/jscs` directory
10. Select "Configuration file", set it to the `.jscsrc` file in your project

*Autoformat on Save*

Import the [autoformat on save][jscs-webstorm-autoformat-on-save] macro, or [create one yourself][jscs-webstorm-create-format-macro].

[jscs-webstorm]: https://plugins.jetbrains.com/plugin/7554?pr=phpStorm
[jscs-webstorm-autoformat-on-save]: https://github.com/solnetdigital/standards-and-tooling/raw/master/javascript/config/webstorm-save-and-format-macro-keymap.jar
[jscs-webstorm-create-format-macro]: http://stackoverflow.com/a/26001409/187954

##### Sublime Text 3

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

See the [SublimeJSCSFormatter][sublime-jscs-formatter] documentation for further instructions.

[vim-autoformat]: https://github.com/Chiel92/vim-autoformat
[sublime-text-3-jscs]: https://packagecontrol.io/packages/SublimeLinter-jscs
[sublime-jscs-formatter]: https://github.com/TheSavior/SublimeJSCSFormatter

- - -

## Linting

ESLint & JSCS must be used to lint JS files on save. Installation:

`npm install -g eslint jscs`

If it isn't present already, add a [eslintrc][eslint-config] file at the root of your project, with the filename `.eslintrc`.

Follow the JSCS guide above for details regarding JSCS config.

##### Toggling Rules

In legacy projects, where refactoring could have unknown side effects or be otherwise impossible, use of inline flags is allowed.

```JavaScript
// Code here will be linted with ESLint.
/*eslint-disable no-alert, no-console */
// Code here will be ignored by ESLint.
/*eslint-enable no-alert no-console */

// OR

// Use the following to disable ESLint for a single line
// eslint-disable-line no-console
```

For a list of rules, see [ESLint Rules][eslint-rules]. Note that this should be used as sparingly as possible and never for an entire file.

Follow the JSCS guide above for details regarding JSCS rule management.

[eslint-rules]: http://eslint.org/docs/user-guide/configuring.html#configuring-rules

### Editor Plugins

##### Vim

Use [scrooloose/syntastic][syntastic]. NeoBundle is the recommended Vim package manager.

Add this to your .vimrc

```VimL
NeoBundleLazy 'scrooloose/syntastic', { 'autoload': { 'filetypes': ['javascript'] } }
  let g:syntastic_javascript_checkers=['eslint', 'jscs']
```

##### Eclipse

**TODO**

##### IntelliJ

Webstorm comes with ESLint linting support out of the box. Follow the [Webstorm IDE ESLint guide][webstorm-eslint] to set it up.

[webstorm-eslint]: https://www.jetbrains.com/webstorm/help/using-javascript-code-quality-tools.html#d204469e452

##### Sublime Text 3

First you will need to install SublimeLinter using Package Control. Use the
[SublimeLinter documentation][sublime-linter-documentation] to do this.

Search for the package SublimeLinter-eslint in Package Control and install it.

Search for the package SublimeLinter-hscs in Package Control and install it.

Note that you may have to add linting user preferences in order to begin using linting if you haven't already.

[syntastic]: https://github.com/scrooloose/syntastic
[sublime-linter-documentation]: https://sublimelinter.readthedocs.org/en/latest/installation.html#installing-via-pc
[eslint-config]: https://github.com/solnetdigital/standards-and-tooling/blob/master/javascript/config/eslint.json
[tern-js-plugin]: https://github.com/angelozerr/tern.java/blob/master/README.md

## Release Management

[Semantic Release][semantic-release] must be used to manage releases of public or private NPM modules.

[semantic-release]: https://github.com/boennemann/semantic-release  

## Pre-commit Hooks

Pre commit hooks must be used to ensure only quality code is committed to a project. the following hook should be added to all projects, as it will check **only** code that is to be committed, and therefore can help to incrementally fix the JavaScript in a legacy project.

Use [husky][husky] to ensure pre-commit hooks are installed when the developer runs `npm install`.

Projects that include a JavaScript component must have at least the following modules installed (paste the command in a terminal / command prompt from the project root directory to install them):

```
npm install --save-dev eslint jscs gulp gulp-eslint gulp-jscs gulp-filter husky git-guppy
```

And include a gulpfile that has at least the `pre-commit` step and associated require statements found in this [gulpfile][gulpfile].

This is a minimum requirement. Your project lead may choose to extract these tasks into separate runners and simply call the runner instead.

[husky]: https://github.com/typicode/husky
[gulpfile]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/scripts/gulpfile.js
