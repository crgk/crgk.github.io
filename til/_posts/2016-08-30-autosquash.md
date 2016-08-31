---
title: git rebase --autosquash
---

If you start a commit message with "squash!", git's interactive rebase will automatically mark that commit to be squashed.

# Riveting example

```bash
$ git log

commit f3c9e55396c2294e672de91d1d26f0949f05ce53
Author: Chad Knight <chadrknight@gmail.com>
Date:   Tue Aug 30 21:24:42 2016 -0500

    squash! autosquash post
    
    - add source

commit 66240d95cacca5f7a5b82d2bf4e9042debdbd85e
Author: Chad Knight <chadrknight@gmail.com>
Date:   Tue Aug 30 21:23:47 2016 -0500

    squash! autosquash post
    
    - add workflow steps

commit 3dccb7c58937977fd8563cf5e145e17f480b9d28
Author: Chad Knight <chadrknight@gmail.com>
Date:   Tue Aug 30 21:18:31 2016 -0500

    autosquash post
```

```bash
$ git rebase master -i --autosquash

pick 3dccb7c autosquash post
squash 66240d9 squash! autosquash post
squash f3c9e55 squash! autosquash post

# Rebase 1ee84ec..f3c9e55 onto 1ee84ec (3 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

```bash
[[ remove all the extra lines from the final message ]]
```

```bash
Rebasing (2/3)

Rebasing (3/3)

[detached HEAD 901f6df] autosquash post
 Date: Tue Aug 30 21:18:31 2016 -0500
 1 file changed, 27 insertions(+)
 create mode 100644 til/_posts/2016-08-30-autosquash.md
Successfully rebased and updated refs/heads/autosquash.
```

```bash
$ git log

commit 901f6df8c3aa74e611f5d33fb4188354fa1784fe
Author: Chad Knight <chadrknight@gmail.com>
Date:   Tue Aug 30 21:18:31 2016 -0500

    autosquash post
    
    - add workflow steps
    - add source
```

# Add an alias

`git config --global alias.squash "rebase master -i --autosquash"`


# New workflow

1. Branch off master
2. Make your first set of changes
3. Commit with the title of your eventual PR
4. Make more changes
5. Commit with "squash! " and the original title again, with details about the commit below
6. Repeat as needed
7. Merge in updated master as needed
8. `git squash`
9. Push and PR


# Fixup

You can also use "fixup!" if you want to automatically drop the message from that commit while squashing.


---

SOURCE: [`git rebase --help`](https://git-scm.com/docs/git-rebase)

