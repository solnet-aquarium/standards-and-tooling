# PHP

 - [Style Guide](#style-guide)
 - [Overview](#overview)
   - [Formatting](#formatting)
   - [Global](#global)
   - [Naming](#naming)
   - [Declarations](#declarations)
   - [Blocks](#blocks)
   - [File and Folder](#file-and-folder)
 - [Required Reading](#required-reading)
 - [Further Optional Reading](#further-optional-reading)
 - [Automatic Formatting](#automatic-formatting)

## Style Guide

Solnet follows the [FIG](http://www.php-fig.org/psr/) set of standards for PHP. In regard to coding standards, this is largely covered by [PSR-1](http://www.php-fig.org/psr/psr-1/) and [PSR-2](http://www.php-fig.org/psr/psr-2/). Please ensure that you are familiar with at least both of these standards. But familiarizing yourself with the entire accepted [PSR](http://www.php-fig.org/psr/) standard will not hurt, as this document may mature to encompass them.

For Silverstripe projects, [Silverstripe's own conventions](http://docs.silverstripe.org/en/3.0/misc/coding-conventions/) are observed <b>as long as there is no conflict with PSR</b>. PSR is always the canonical standard for PHP code and code format.

### Overview

#### Formatting
* Code MUST use 4 spaces for indenting, not tabs.
* All PHP files MUST use the Unix LF (linefeed) line ending.
* All PHP files MUST end with a single blank line.
* *For existing code, do NOT edit code beyond the immediate working area for the sake of formatting. Maintaining commit history is more important. This should just be approached on a common sense basis. E.G. it is OK to re-format and entire foreach loop if you are only changing the contents of the loop. (since you understand the logic and can safely "own" it). But one should reformat an entire existing file just for coding standards.*

#### Global
* No shorthand PHP opening tags (<?)
* No shorthand PHP echo opening tags (<?=)
* No closing PHP tag in any PHP file
* Namespacing is optional (but encouraged for new projects)

#### Naming
* Class names MUST be declared UpperCamelCase
* All constants MUST be declared UPPER_CASE with underscores separating words
* Method names MUST be declared lowerCamelCase()
* Static properties MUST be declared as $lower_case with underscores separating words
* All other properties MUST be declared as $lowerCamelCase

#### Declarations
* Visibility MUST be declared on all properties and methods
* abstract and final MUST be declared before the visibility
* static MUST be declared after the visibility.

#### Blocks
* Opening braces for classes MUST go on the next line, and closing braces MUST go on the next line after the body.
* Opening braces for methods MUST go on the next line, and closing braces MUST go on the next line after the body.
* All blocks MUST have an opening and closing brace. The exception to this rule is ternary conditionals that appear on one line.

#### File and Folder
* All directories containing primary PHP buisiness logic or Parsable Silverstripe template files (e.g. /mysite/code/MyFeature/ and modules) MUST be UpperCamelCase
* All directories that may be referenced directly in a URL MUST be alllowercase (all lower case with no word separators). (e.g. /themes/mytheme/css/)
* All Silverstripe modules MUST follow [Silverstripe module structure](http://docs.silverstripe.org/en/2.4/topics/directory-structure/)
* PHP file names are to be UpperCamelCase as per their containing PHP classes.
* Silverstripe template files MUST be UpperCamelCase. The exception being sub-action extension templates which can be UpperCamelCase_lowercase.
* JavaScript and CSS should follow the standards defined for both. But generally both files and containing directories SHOULD be hyphen-snake-case.

### Required Reading
* PSR-1: http://www.php-fig.org/psr/psr-1/
* PSR-2: http://www.php-fig.org/psr/psr-2/
* Silverstripe Conventions: http://docs.silverstripe.org/en/3.0/misc/coding-conventions/
* Silverstripe Directory Structure: http://docs.silverstripe.org/en/3.1/getting_started/directory_structure/

### Further Optional Reading
* PSR-0: http://www.php-fig.org/psr/psr-0/
* PSR-3: http://www.php-fig.org/psr/psr-3/
* PSR-4: http://www.php-fig.org/psr/psr-4/
* PSR-7: http://www.php-fig.org/psr/psr-7/

## Automatic Formatting

### Editor Plugins

**Vim**

https://github.com/dericofilho/vim-phpfmt

**Eclipse**

http://www.phpsrc.org/projects/pti/wiki/Installation

**IntelliJ**

https://github.com/dericofilho/php.tools/blob/master/PHPStorm.md
