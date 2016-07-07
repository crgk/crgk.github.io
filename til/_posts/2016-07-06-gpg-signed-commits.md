---
title: GPG Signed Commits
---

Turns out I didn't know a lot of things related to this one.

- You can sign git commits with your GPG key
- You can tell GitHub what your GPG key is
- You can manage GPG keys with [GPGSuite](https://gpgtools.org/)

## Super-abbreviated steps

1) Generate a GPG key: `$ gpg --gen-key` (or use GPG Suite)
2) Copy the key id: `$ gpg --list-secret-keys --keyid-format LONG`
3) Tell git: `$ git config --global user.signingkey 3AA5C34371567BD2`
4) Tell GitHub: Profile menu > Settings > SSH and GPG keys > New GPG key
5) Sign your commit: `$ git commit -S`
6) (optional) Tell git to sign by default: `$ git config commit.gpgsign true`
 
## But... why?

Because once you see how totally legit a verified commit looks, you'll feel like a fraud if you keep making unverified commits.

![verified-commit](/img/verified-commit.png)
 
---
SOURCE:

GitHub has a full guide: <https://help.github.com/articles/generating-a-gpg-key/>

