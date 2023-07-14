---
title: Pomme Tech
description: Basic and not-so-basic Pomme techniques
authors:
- Kyb
tags:
- beginner
- intermediate
- advanced
- pomme
---

## Float

Her signature mechanic, float is the cornerstone of ~~Peach~~Pomme's movement in all aspects of play. To start a float, you can either hold the jump button until Pomme reaches the  apex of the jump, or press down on the stick while holding the jump button to float sooner.

{{< video float-basics >}}

### Ground Float

Holding down before inputting jump lets you start float as soon as you leave the ground. Letting go of jump during this "ground float" will end your float on the following frame, which can be used to cancel aerials instantly. Ground float aerials are great to start combos and apply relatively safe pressure.

{{< video ground-float >}}

Note: If you use a controller, most Pomme players recommend binding one of your shoulder buttons to Jump. This will allow you to easily use the right stick for float aerials without needing to switch to a claw grip.

### Fastfall

Fastfall can be buffered before starting a float by pressing down before pressing jump, or while floating by pressing down then letting go of jump shortly after (during the global Rivals buffer window). You can also start an aerial during a float and fastfall after that.

{{< video float-ff-aerial >}}

### DJ Protection

Rivals has a hidden mechanic called double jump protection which restores your double jump if you Up Special or airdodge upwards within 4 frames of double jumping. Uniquely, Pomme can start a float within this window to the same effect. This can be used to your advantage to get a bit extra vertical distance for free, or use the horizontal momentum reset you get from a double jump to switch directions.

{{< video float-djp >}}

### Float Storage

Pomme can initiate a float as long as her remaining float time is more than 0 frames. This is relevant as the conditions for updating her remaining float time vary:

* Initiating and continuing a float: Float time is reduced by 1 on every frame while floating
* Letting go of jump while floating: instantly sets it to 0
* Getting hit while floating: instantly sets it to 0
* Airdodging while floating: instantly sets it to 0
* Using Up Special into a note field: Float time will be set to the minimum between 45 frames and current remaining float time
* Float time is refreshed back to 2 seconds upon landing on stage or a platform

Importantly, remaining float time does not get updated and just remains at however many frames were remaining when:

* Starting a Neutral Special _charge_ while floating
* Starting an Up Special while floating
* Starting a Down Special while floating

All of these three effectively _pause_ a float without setting Pomme’s remaining float time to 0 like letting go of jump would do. This is useful in just allowing you to continue floating after the animation of those moves end. However, letting go of jump during the animation of the move will instead _store_ the remaining float time you had to use later. We usually call this “float storage”.

{{< video float-storage >}}

## Note Field

The note field of Pomme’s Down Special is her best tool for recovering and by far her most misunderstood move, so let's clear some things up.

### Omnifloat

Down Special sets down a note field that empowers Pomme’s float, increasing her air acceleration significantly and letting her float in any direction instead of just horizontally (we call it “omnifloat”). This on its own can lead to some extended aerial combos or tricky neutral baits.

{{< video note-field-combos >}}

Additionally, you can actually initialize omnifloat by holding jump+up rather than jump+down. Combined with [double jump protection](#dj-protection), you can use the initial momentum boost upwards you get from a double jump and then float upwards to get a slightly faster movement upwards in the note field, all without spending your double jump.

{{< video note-field-djp >}}

### Up Special & Field

Once per airtime (resetting on walljump or when she is hit), Pomme can Up Special into note field to empower the Up Special, which replenishes her float (see [float storage](#float-storage)) and stops her from going into pratfall. Up Special becomes empowered as long as Pomme's hurtbox touches any point of a note field at any point during the Up Special animation. Using Up Special again after this only gives her a minor boost upwards into pratfall without a hitbox.

{{< video note-field-recovery >}}

This example recovery didn’t require using a double jump, so you can see the potential for many creative recoveries with these tools. Pomme also has really good low recovery and ledgedash options too!

### Moving Note Field

Note field usually has a cooldown that doesn’t let you Down Special again while a note field is already out. However, the game allows you to refresh the duration of an existing note field by using Down Special inside a note field, and moving out of the existing note field during this Down Special animation will reposition the note field.

{{< video moving-note-field >}}

A note field that is too far offstage will also move towards the stage by itself. Horizontally, the note field will always try to approach the stage until one of its corners is touching or contained within the stage ground's edges (not overhanging platforms). Vertically, it’s more of a mystery, but it will try to get away from the edge of the screen and closer to the stage.

![A note field that has aligned itself with the edge of the stage and thus stopped moving](offstage-note-field.png)

## Fair Momentum Boost

When Pomme uses Forward Air she gets pushed to the opposite direction she’s facing, granting her a unique movement option that she can use while jumping or floating. This momentum boost is applied on top of Pomme’s current horizontal speed, so it has more or less effect based on your current speed, similar to Orcane’s Fair. Using Fair while moving forward you will barely push you back, while it while moving backwards it will push you back a lot more.

{{< video fair-boost-momentum >}}

### Fair Boost Slide

Fair boost has the highest speed right when the attack starts (exactly 1 frame before the hitbox comes out), and the speed quickly decreases after that. Combining this with Pomme’s low ground friction means that landing during the earlier frames of a Fair boost makes Pomme slide on the ground much faster than running or wavedashing.

{{< video fair-boost-go-brr >}}

Fair boost slide is also relatively lenient to edgecancel, which is a fun movement and pressure option.

{{< video fair-edgecancel >}}

## Note Charge Cancel

Pomme can cancel out of charging a stack of notes at any moment by pressing parry. Cancelling note charge always makes her actionable faster than simply letting go of special, so canceling note charge is strictly better in all situations and an invaluable tool for Pomme players.

Charging notes during a float will pause the active float and make Pomme drop while charging the notes. Once Pomme stops charging notes, she will resume the float with the same remaining time she had before she started charging notes (given she’s still holding Jump). This makes canceling out of note charge even more valuable to keep your verticality. This uses the same principle as [float storage](#float-storage) covered earlier, but instantly continuing the float rather than storing it.

{{< video float-note-cancel >}}

For some reason, holding parry cancels all subsequent note charges without needing to press parry again.

{{< video funny-note-cancel >}}

### Turning Around

Reversing note charge cancel can also serve as a quick way to turn around in the air. One application of this is in recovery, turning around to Fair boost towards the stage after being knocked off.

{{< video note-cancel-recovery >}}

Pomme can also turn herself around by utilizing the cooldown on three of her special moves. Inputting a turnaround Neutral Special, Side Special, or Down Special while the move is on cooldown will turn Pomme around without any animation, startup, or endlag.

{{< video cooldown-turnarounds >}}

## Vince

Pomme’s Side Special (Vince my beloved) can be hit back by the opponent to have his command grab canceled. Fully charging Side Special makes Vince invulnerable to all attacks, allowing the command grab to always go through even if Vince is hit. This a great tool especially for edgeguarding, as Vince getting hit will make the opponent go through hitpause and then grab them, allowing you to get an easy follow up.

{{< video full-charge-vince >}}

Pomme can charge Side Special while floating, even during a note field omnifloat, so you can utilize this mechanic during recoveries.

{{< video floating-vince >}}

Vince is also a buggy mess and listing out all interactions here would be an entire book so I encourage you to test them out. :\)

## Bonus Techs

### JC Down Tilt

Pomme can jump cancel out of Down Tilt for some reason lol

{{< video jc-dtilt >}}

### DACUS

All characters in Rivals other than Wrastor can perform a Dash Attack Cancel Up Strong by inputting a Dash Attack then an Up Strong in quick succession. Pomme’s burst movement from Dash Attack combined with her low ground friction makes hers pretty significant.

{{< video dacus >}}

### Up Special KB Angle

All linking hits of Pomme's Up Special before the final launcher have an angle flipper of 2, which makes the knockback angle a line that starts from the center of the enemy hurtbox and points towards the center of Up Special’s hitbox. This can cause very funny edgeguard situations where using Up Special from below an opponent and wall jumping to cancel the final hit may end up killing the opponent from the bottom blastzone.

![Up Special linking hits sending a Zetterburn towards Pomme](upb-angle.png)

"Did you know that Pomme's name is short for Pomegranate? This is a reference to Peach, a similar character from Melee whose name is also a fruit that starts with P."