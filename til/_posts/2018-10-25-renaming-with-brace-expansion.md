---
layout: post
title: Renaming Files with Brace Expansion
author: Chad Knight
---

Without [brace expansion][_brace_expansion]:

```zsh
mv src/io/github/crgk/til/posts/IPost.java src/io/github/crgk/til/posts/Post.java
```

But because `zsh` continues to be awesome:

```zsh
mv src/io/github/crgk/til/posts/{IPost,Post}.java
```

---
SOURCE: [stackexchange](https://unix.stackexchange.com/questions/132235/quickest-way-to-rename-files-without-retyping-directory-path#132237)

[_brace_expansion]: http://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html

