---
title: /etc/paths.d/
---

You can add items to your `$PATH` by creating files in `/etc/paths.d/`.

The files should have one path per line. Paths from all files in the directory will be added to your path on shell startup.

When the install steps for a tool tell me to add `export PATH="$PATH:/some/bs/bin"` to my `.bashrc`, I get irrationally angry.

Or maybe it's perfectly rational:

* `export` is mutating global state
* `echo $PATH` is unreadable
* too lazy to find and edit my dotfiles, much less maintain them
* never remember to `source` the first time after making changes

As long as you're okay with changing `PATH` system-wide, this is a game-changer. I can't see a reason not to do this `/etc/paths.d/` thing on my work Macbook.  

I'm so pumped for the next stupid thing I install. 

---
SOURCE: 

[`man path_helper`](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/path_helper.8.html)

I don't remember what tipped me off to it today  ¯\\\_(ツ)\_/¯

