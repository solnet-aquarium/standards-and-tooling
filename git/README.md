# git

Git should be used for all projects.

 - [Commits](#commits)
 - [Commit messages](#commit-messages)
 - [Git-flow](#git-flow)
 - [Github-flow](#github-flow)
 - [Tooling](#tooling)

## Commits

 - A single commit should be thought of as a "changeset" and as such should contain only changes that are related or required in order for the changeset to be an atomic unit of work
 - Commit often and early

## Commit messages

 - Commit messages should describe the changeset that the committed files represent:
  > Implemented basic authentication for wibbles as they wobble around the flibbly wibbler

 - Where a commit is related to an artefact that exists in the real world, i.e. a JIRA ticket, the commit should be prefixed with the artefact's identifier, and the title or portion of the title, and an optional clarification:
 
  > JIRA-253 Network restrictions should only be mandatory if wobbles are flobbing around the wibbly
 - Single word or unintelligible commit messages are not acceptable for any reason

## Git Flow

*Large projects with standard release frequency*

Git-flow is the standard branching model to be used. In some edge cases, Github-flow may be used.

Learn about the [Git-flow][gitflow-workflow] model and how to implement it. View the [Git-flow cheatsheet][git-flow-cheatsheet]

> The Gitflow Workflow defines a strict branching model designed around the project release. While somewhat more complicated than the Feature Branch Workflow, this provides a robust framework for managing larger projects.

 -- [Vincent Driessen][gitflow-workflow]

> The general idea behind git-flow is to have several separate branches that always exist, each for a different purpose: master, develop, feature, release, and hotfix.
The process of feature or bug development flows from one branch into another before it’s finally released.

 -- Nicholas Zakas

### Required reading

 - [Gitflow Workflow][gitflow-workflow]
 - [A successful Git branching model][git-flow-successful-branching-model]
 - [Git-flow cheatsheet][git-flow-cheatsheet]

---

[gitflow-workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
[gitflow-general]: http://www.nczonline.net/blog/2013/05/21/github-workflows-inside-of-a-company/
[git-flow-successful-branching-model]: http://nvie.com/posts/a-successful-git-branching-model/
[git-flow-cheatsheet]: http://danielkummer.github.io/git-flow-cheatsheet/
## Github Flow

*Smaller projects or those with continuous deployments*

Learn about the [Github-flow][github-flow] model and how to implement it.

> GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub Flow works.

 -- Github Flow

### Required reading

 - [Github Flow][github-flow]

[github-flow]: https://guides.github.com/introduction/flow/ 

---

## Tooling

### CLI

You should be competent with the git CLI. Learn about the [git CLI][git-cli].

#### Required reading

 - [Git CLI Tutorial][git-cli]

[git-cli]: http://git-scm.com/docs/gittutorial

### GUI programs

#### Smartgit

 - Linux / OS X / Windows
 - Full support for graphical merging
 - Git-flow built in
 - [Download][smartgit]

> SmartGit is a graphical Git and Mercurial client which can also connect to SVN repositories. SmartGit runs on Linux, Mac OS X (10.7 or newer) and Windows (Vista or newer). Git and Mercurial (Hg) are distributed version control system (DVCS).

[smartgit]: http://www.syntevo.com/smartgit/

