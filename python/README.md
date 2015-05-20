# Python

 - [Style Guide](#style-guide)
 - [Automatic Formatting](#automatic-formatting)
 - [Linting](#linting)

## Style Guide
The styleguide and code standards to use are defined in the PEP8 standards of Python.


### Required Reading

 - [Style guide][https://www.python.org/dev/peps/pep-0008/]

[]: 

- - -

## Automatic Formatting

There is a [python script][http://pypi.python.org/pypi/pep8] that checks python code for adherance to the standards. This can be used when there is 
no IDE available for testing.  

### Editor Plugins

**Vim**
There is a [plugin][http://www.vim.org/scripts/script.php?script_id=2914] for use with VIM. Use with the pep8.py script described above 


**Eclipse**
Install the PyDev extension, this will enforce the PEP8 standard. 


**IntelliJ**
Supported and enforced by default, also with PyCharm a specialized IDE based on IntelliJ


- - -

## Linting

Use [PyLint][http://www.pylint.org/] for this. The library is a python lib and is therefor installable by pip. 

**Vim**
Use the [plugin][http://www.vim.org/scripts/script.php?script_id=891] 



**Eclipse**

It is part of the PyDev extension. 

**IntelliJ**

Supported and enforced by default. 
