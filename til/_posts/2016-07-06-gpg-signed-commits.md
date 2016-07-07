---
title: GPG Signed Commits
---

Turns out I didn't know a lot of things related to this one.

- You can sign git commits with your GPG key
- You can tell GitHub what your GPG key is
- You can manage GPG keys with [GPGSuite](https://gpgtools.org/)

Super-short version:

1) Generate a GPG key: `$ gpg --gen-key` (or use GPG Suite)
2) Copy the key id:
<pre>
$ gpg --list-secret-keys --keyid-format LONG
/Users/yourname/.gnupg/secring.gpg
----------------------------------
sec 4096R/<b>153CEB48A23BB0B6</b> 2016-02-02 [expires: 2020-02-02]
uid                        Chad Knight <chad.knight@knight.club>
ssb 4096R/83FB46CEA228D990 2016-02-02

</pre>
(use the `sec` line, just the part after the `4096R/`
3) Tell git: `$ git config --global user.signingkey 3AA5C34371567BD2`
4) Tell GitHub: Profile menu > Settings > SSH and GPG keys > New GPG key
5) Sign your commit: `$ git commit -S`
6) (optional) Tell git to sign by default: `$ git config commit.gpgsign true`
 
GitHub provides a full guide, linked below.

---
SOURCE:

GitHub has everything I know about GPG keys right here: <https://help.github.com/articles/generating-a-gpg-key/>

