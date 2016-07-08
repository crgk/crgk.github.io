---
title: You didn't ask, but this is why I use vim.
---

We all like to think we'll be the one to defy the stereotype. Yet here I am, sharing unsolicited opinions about vim. It turns out it was as inevitable as me "getting into vinyl". I can no more stay silent about vim than I can enjoy sushi with cream cheese in it.

You chose to read this, and that's all the invitation I need.

# My Declaration of Vim Dependence 

When I started using vim, I had no good reasons. So I didn't bring it up because a) I kinda sucked at it, and b) I would not be able to defend myself if asked why.

But now, I've gone through my first rites of passage. I know the navigation, and routinely catch myself trying to `hjkl` my way around other applications. I've uninstalled some of the plugins I installed based on some guy's blog. I've thought really hard about writing my own syntax highlighting plugin before googling and finding the one I want. I almost remember the shortcuts to vim-surround without looking them up.

Most crucially, though, I have found a feature that really excites me and makes me want to preach about it. 

# Enter: `recording @q`

Not sure if everybody else does this, but whenever I make a mistake while typing in the terminal, I tend to just mash whatever key I understand to be "cancel". Sometimes in vim, my brain insists that this key is `q`.

In vim, `q` starts **`recording`**. Not knowing this, I would sometimes get irrationally upset that my status bar says **``recording @q``** for no reason. Luckily, hitting `q` again shuts that nonsense up.

After a couple months of this happening at least once an hour, I decided to learn what the heck vim was talking about. And then I found a perfect use for it. And now I'm a vim convert.

# Run it back, vim.

When you press `q` and then another key, you tell vim to start recording your key presses and save off that sequence. So if I press `qa`, I'm asking vim to record my actions and store it off as `a`. You press `q` again to finish, then `@a` to replay your actions.

In every other mouse-heavy editor or IDE I've used, this would not be very useful. It would amount to an inconvenient copy/paste replacement.

But since you do all your navigation, yanking, deleting, text entry, and other vim-wizardy with the keyboard, this recording can be __very__ powerful.

# My example

I had a tedious refactor coming up. For reasons, we wanted to change a dozen or so very similar functions in very similar ways. I don't want to open this up to code review, but the situation started out something like this:

```java
public Apple getApple() {
    String fruitName = "apple";
    return fruits.getFruit(fruitName);
}

public Orange getOrange() {
    String fruitName = "orange";
    return fruits.getFruit(fruitName);
}

...12 more times...
```

and we wanted it to become more like this:

```java
public Apple getApple() {
    return fruits.getApple();
}

public Orange getOrange() {
    return fruits.getOrange();
}

...12 more stupid times...
```
> I repeat: I do not want to hear if you think this code is dumb.

Writing this commit would've been boring, mindless, error-prone work. Between selecting, deleting, and making sure I had the right fruit names, it would not have been fun.

But with vim recording, the whole thing took 30 key presses:

```
/getFruit[ENTER]

qankddk2wyiwnviwpq13@a
```

Which translates to:

```
prepare a search for "getFruit"

start recording in register "a"

    go to the next occurrence of "getFruit"

    go up one line (to the "fruitName = ..." line)

    delete that line

    go up one line

    move two words to the right (cursor is on the method name)

    copy the method name

    go back to the occurrence of "getFruit"

    replace "getFruit" with the method name

stop recording

replay recording "a" 13 times
```

BOOM. REFACTORED.

# No going back

So, that's it. I can't use anything but vim. Even if emacs or Sublime has the same exact feature, I am happily dependent on vim.

And the best part is, now I get to write little mini programs in order to write bigger programs more efficiently! I get to write errors in the thing that's supposed to help me fix bugs! I get to move my premature optimization to before I even change the code!

Heck yeah.

