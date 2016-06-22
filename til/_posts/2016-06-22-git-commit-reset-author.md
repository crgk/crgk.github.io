---
title: git commit --reset-author 
---

I noticed today that a streak of my commits on a branch all thought they were made on the same day. I knew this wasn't true, so I investigated.

First thought was that maybe `git` was using the time when my `tmux` session started. That was incorrect.

Then I remembered that my workflow on this branch was using `git commit -c HEAD` so I could reuse parts of my commit message. (I like to put a header with the ticket number and title on my work commits, in case we need to come back to the original ticket that justified a change.)

It made sense, then, that `git` was reusing the commit date as well. This is where I get really proud of myself: like a real adult, I used `git commit -h` and found out how to fix my issue _without using the Internet._

Mindblowing stuff, I know.

Anyway, the fix is to add `--reset-author`, and `git` recognizes that your new commit is being made by you, right now. 
  

---
SOURCE:

`git commit -h`

