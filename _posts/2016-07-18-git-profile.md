---
title: git-profile.sh
subtitle: or "How I Don't Know Anything About Computers"
---

Ever since [I learned how to do signed git commits](/til/2016/07/06/gpg-signed-commits.html), I've been battling with managing my multiple (2!) git users. Each of my personal projects has commits from my work account because I'm not smart enough to do `git config user.email chadrknight@gmail.com` each time I set up a new repo. 

It used to just be a mild goof, but now that I'm proving my identity on each commit I author, I really don't want to eff it up. This is suddenly a problem, since I need my `signingkey` to be correct in my personal projects, and there's no way I can remember that value if I can't remember to set my email.

When I set up [mutiple users with GitHub](https://gist.github.com/jexchan/2351996), I also created multiple git config files for myself. I must not have known what I was doing, since there isn't anything to associate those files with my various git projects. I still have to `export GIT_CONFIG=` in order to switch between them.

That kinda sucks, and is exactly the kinda thing somebody would write a tool for, but I can't find any existing solutions.

**Hell yes**. I finally found a problem I'm interested in solving. Let's do this.

> 3 hours of learning how to make a Haskell project using `stack` later...

Alright, so you can't export environment variables from within a program. I definitely should have known that.

It turns out [nvm](https://github.com/creationix/nvm) manages to doalmost exactly what I want to do. After reading their code a bit, the approach comes down to an alias to source a shell file with exports in it.

That's way more boring than I was hoping. And kinda gross.

But I can actually do that instead of getting bogged down with tools and trying to learn a new language.

And so, without further ado, I present `git-profile.sh`:

<script src="https://gist.github.com/crgk/3d589e2ae77675ceb84565e0e7cc4378.js"></script>

__You can tell I think it's good because there's twice as much documentation as there is code.__

Next up: I want to automatically switch to the correct profile when I enter a git project. Might be looking in to a zsh plugin. After that: an npm module, of course! I'm gonna call it `gum` because it doesn't look like that's taken yet somehow so back off.

