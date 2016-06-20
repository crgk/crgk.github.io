---
layout: post
title: SECURITY NOW
subtitle: Security now, sanity later.
teaser: I'm really proud of the car metaphor in this one. Even my fiancee liked it.
author: Chad Knight
---

---
I wrote this as part of an article for work, but it got too hostile and ranty to be of any value there. However, being of low value, it is a perfect candidate for my personal blog!

---

<br/>
If you're building software of any value, you need security. And you need it now - not "eventually" or "before release" - **now**.

![security-now](/img/serenity-now.gif)
<center><cite>"Security now!!"</cite></center>

<br/>
Software developers apparently have a tendency to put off security until the last thing before they ship. Which, in any other industry, would be crazy behavior.

_It's also crazy behavior in software._

## Inevitable Car Metaphor

Let’s say we’re designing a car and forget to consider how to lock the doors. We unveil our fully-functional prototype, and the convo with stakeholders goes like this:

**looks good, ready to start production?**
Yep, just need to add anti-theft and we're good to go.
**...it doesn't have anti-theft yet?**

At this point, the stakeholders are thinking

> **YOU HAVEN'T THOUGHT AT ALL ABOUT HOW TO KEEP THIS CAR IN THE POSSESSION OF THE OWNER?! WTF. NO.**

and the design team is thinking

> idk it's just alarms and locks right? we'll just tack that on

No, you won't, because you can't "tack that on". You're casually talking about redoing the doors, electronics, and potentially the entire key/ignition system, pretty much from scratch.

Stakeholders can't believe you. Your car basically has 4 giant holes where it needs doors. Work is set back by months or years. You are probably fired.

Rough.

But if this car is software? Sure, it’s possible to get those doors locked without scrapping any previous work. There are infinite options, in fact. It's software, and anything is possible! 

## Let’s brainstorm some fixes

* Provide a bunch of chains with each new car. Driver wraps and locks vehicle when exiting (works for bikes). 
* Create a service to follow all drivers around with a shipping container. Place container at destination, driver parks car inside.
* Weld all doors shut. Add an entry hatch with proper lock on roof.
* Update terms and conditions. Liability void if owner is not in vehicle.
* Add sensors to latches. Alert owner when car is opened. Report car stolen if owner does not confirm car access.
* Put a locked valve on the fuel line. Car can not start unless owner enters PIN in mobile app _(note: mobile app not yet developed)_

The metaphor is sufficiently stretched, but the point stands. Hacking security onto a finished product is bad and inherently ends up in less-than-ideal protection. This is **absolutely** true for software systems, as much and possibly more so than physical products.

Yet it still seems like software engineers frequently need the reminder: **just because you can "make it work", doesn’t mean you should.**
