# JavaScript
 
 - [Quick Setup](#quick-setup)
 - [Style Guide](#style-guide)
 - [Linting](#linting)
  - Editor Plugins: *[Vim](#vim-1), [Eclipse](#eclipse-1), [Intellij](#intellij-1), [Sublime Text 3](#sublime-text-3-1)*
 - [Release Management](#release-management) 
 - [Pre-commit Hooks](#pre-commit-hooks)

## Quick Setup

1. Ensure your local project folder has been setup as a git repository
2. Ensure [NodeJS is installed][nodejs-install] on your development machine
3. Open a Terminal (OS X / Linux) or Command Prompt (Windows) and navigate to your project directory 
4. Execute the following commands

    ```Bash
    npm init # Follow the prompt to completion
    npm install --save-dev eslint gulp gulp-eslint gulp-filter git-guppy husky
    ```
5. Copy the [ESLint][eslintrc] configuration files into your project's root directory. It should be named `.eslintrc`
6. Add the following lines to your `package.json` file, located at the root of your project directory. Note that if a `scripts` property exists already, the `precommit` line should be added to it. Otherwise, add the entire `scripts` property as below. Note that this file *must* be valid JSON, else nothing will work.

    ```JSON
      "scripts": {
        "precommit": "node_modules/.bin/gulp pre-commit"
       }
    ```
7. Copy the [Gulpfile][gulpfile] to your project root

The project should now be setup to lint and check the formatting of all JavaScript code committed. 

[nodejs-install]: https://nodejs.org/download/
[eslintrc]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/config/.eslintrc

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

### Editor Plugins

## Linting

ESLint must be used to lint JS files on save. Installation:

`npm install -g eslint `

If it isn't present already, add a [eslintrc][eslint-config] file at the root of your project, with the filename `.eslintrc`.

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

[eslint-rules]: http://eslint.org/docs/user-guide/configuring.html#configuring-rules

### Editor Plugins

##### Vim

Use [scrooloose/syntastic][syntastic]. NeoBundle is the recommended Vim package manager.

Add this to your .vimrc

```VimL
NeoBundleLazy 'scrooloose/syntastic', { 'autoload': { 'filetypes': ['javascript'] } }
  let g:syntastic_javascript_checkers=['eslint']
```

##### Eclipse

*Enable ESLint Linting*

1. Right click on the project and choose `Properties`, Choose `Tern > Validation > ESLint`. 
2. Ensure "Enable" is checked.
3. Check "Use config files", browse and find the `.eslintrc` file in your project

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
npm install --save-dev eslint gulp gulp-eslint gulp-filter husky git-guppy
```

And include a gulpfile that has at least the `pre-commit` step and associated require statements found in this [gulpfile][gulpfile].

This is a minimum requirement. Your project lead may choose to extract these tasks into separate runners and simply call the runner instead.

[husky]: https://github.com/typicode/husky
[gulpfile]: https://raw.githubusercontent.com/solnetdigital/standards-and-tooling/master/javascript/scripts/gulpfile.js
