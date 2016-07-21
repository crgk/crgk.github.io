---
title: git Author vs. Committer
---

The "author" of a git commit is not necessarily the same as its "committer".

[Apparently](http://stackoverflow.com/questions/18750808/difference-between-author-and-committer-in-git), this is because sometimes the person who commits code is not the same person who wrote it. Patches are the most apparent scenario.

You can control author and committer by setting the `$GIT_AUTHOR_EMAIL` and `$GIT_COMMITTER_EMAIL` environment variables. (Environment variables supercede values from config files, but not arguments such as `--author`).

You can view these values for past commits:

```
$ git log --pretty=full

commit 5dd3c9dd153eb3fd6270ba6fc80a08d7bb4522ce
Author: Chad Knight <chadrknight@gmail.com>
Commit: Chad Knight <chadrknight@gmail.com>

    vimbang

commit ffc751b1bb0aff72e1d7dd27c64af52c7ba18513
Author: Chad Knight <chadrknight@gmail.com>
Commit: Chad Knight <chadrknight@gmail.com>

    attempting to sign as crgk
```

__Sidebar: This was a great usecase for vim's `:r!`, which [I learned about recently.](http://crgk.github.io/til/2016/07/18/vimbang.html)__

I learned about this because in my attempts to be smart and sign commits with two different keys, I ended up making commits as two different versions of myself. This shows up on GitHub like so:

![crgk-as-chadknight-wf](/img/crgk-as-chadknight-wf.png)

Obviously that is unacceptable. The fix: make sure your committer and author emails are the same.


---
SOURCE:

This [criminally under-recognized StackOverflow answer](http://stackoverflow.com/a/30335845)

