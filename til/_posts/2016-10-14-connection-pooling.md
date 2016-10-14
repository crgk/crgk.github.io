---
title: Connection Pooling
---

If you're building a Java Web application that interacts with SQL, you are most likely using JDBC.

Today I learned, by virtue of having not learned it earlier like I should have, that you neither want to create a new Connection on every request, nor should you reuse a single Connection for all requests.

After trying to build the sweet spot myself, I realized of course there's a pattern for this, and it's called Connection Pooling. A pool of connections is made available, and you can grab one whenever you need to send a statement to your DB.

*Filed under:* things I should have learned 8 years ago.


---

SOURCE: like the 5th Stack Overflow question I read. (Is it just me or are there Java experts keeping this stuff secret and then judging people who ask questions?)
