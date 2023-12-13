---
title: Glossary
description: Frame data, knockback, and character terminology.
authors:
- Sector 7-G
---

## Effective Weight

### Knockback Adjust

The standard "weight" stat. Dictates how far a move hits a character by functioning as a multiplier in the knockback formula.

{{< library/cast-comparison knockbackAdjustment >}}

### Air Friction

Affects horizontal speed and mitigates knockback horizontally during hitstun (slows movement through the air after a hit). Also affects Drift DI. Higher stat = better horizontal survivability.

{{< library/cast-comparison airFriction "Measured in pixels per frame per frame (Unconfirmed)" >}}

### Hitstun Gravity Accel

Speed characters accelerate downwards due to gravity while in hitstun. Higher stat = better survivability off the top, worse low % survivability off the bottom (before [Max Fall Speed](#max-fall-speed) is reached).

{{< library/cast-comparison hitstunGravityAccel "Measured in pixels per frame per frame" >}}

### Max Fall Speed

Maximum fall speed without fastfall. Can be superceded by knockback, at which point [Hitstun Gravity Accel](#hitstun-gravity-accel) stops increasing speed.

{{< library/cast-comparison maxFallSpeed "Measured in pixels per frame" >}}

## Grounded Movement

### Initial Dash / Run

> Upon initiating a dash (for >1 frame), characters will first be locked into [Initial Dash](#initial-dash-time). Initial dash's full duration will play out even if the movement stick/key is released, unless the dash is cancelled by jump, dash attack, parry, a special attack, or a dash in the opposite direction ("Dash Dancing").

> If the dash is simply continued, characters will enter [Run](#run-speed). Inputting the opposite direction while running instead results in a [Run Turn](#run-turn-time). Run can also be cancelled with crouch, or simply [stopped](#run-stop-time) by releasing the movement stick/key.

#### Initial Dash Time
	
Number of frames a character's initial dash lasts.

{{< library/cast-comparison initialDash.time >}}

#### Initial Dash Speed

Initial speed when starting a dash.

{{< library/cast-comparison initialDash.speed "Measured in pixels per frame" >}}

#### Run Speed

Constant run velocity after initial dash.

{{< library/cast-comparison run.speed "Measured in pixels per frame" >}}

#### Run Stop Time

Number of frames the run stop animation lasts after ending a run.

{{< library/cast-comparison run.stop.time >}}

#### Run Turn Time

Number of frames it takes each character to turn out of run.

{{< library/cast-comparison run.turn.time >}}

#### Run Turn Accel

Slows characters down during turn around in run. 

{{< library/cast-comparison run.turn.accel "Measured in pixels per frame per frame" >}}

### Walk

#### Walk Speed

Maximum velocity when walking.

{{< library/cast-comparison walk.speed "Measured in pixels per frame" >}}

#### Walk Acceleration

Acceleration when beginning to walk.

{{< library/cast-comparison walk.accel "Measured in pixels per frame per frame" >}}

#### Walk Turn Time

> Each character has a universal 6 frame walk turn animation.

### Ground Friction

How much characters slow down at any point on the ground.

{{< library/cast-comparison groundFriction "Measured in pixels per frame per frame (Unconfirmed)" >}}

### Waveland

#### Waveland Time

Number of frames characters slide in the waveland animation.

{{< library/cast-comparison waveland.time >}}

#### Waveland Friction

Replaces [Ground Friction](#ground-friction) during wavelands.

{{< library/cast-comparison waveland.friction >}}

## Aerial Movement

### Air Acceleration

A character's aerial drift when holding left/right in the air while not in hitstun.

{{< library/cast-comparison airAccel "Measured in pixels per frame per frame" >}}

### Max Air Speed

Maximum horizontal speed in the air while not in hitstun. Can be superceded by [Max Jump Horizontal Speed](#max-jump-horizontal-speed).

{{< library/cast-comparison maxAirSpeed "Measured in pixels per frame" >}}

#### Max Jump Horizontal Speed

Maximum horizontal speed maintained when going from a grounded to aerial state. Can be faster than [Max Air Speed](#max-air-speed) stat. For example: Maypul has air speed {{< library/stat maypul maxAirSpeed >}}, but max jump horizontal speed {{< library/stat maypul maxJumpHorizontalSpeed >}}, so she can get off stage faster than she can get back.

{{< library/cast-comparison maxJumpHorizontalSpeed "Measured in pixels per frame" >}}

### Fullhop / Shorthop

#### Jumpsquat

> When jumping off the ground, each character undergoes a universal 5 frame "Jumpsquat" animation before actually leaving the ground. Holding jump for these full 5 frames results in a [Fullhop](#fullhop-speed), while releasing jump sooner results in a [Shorthop](#shorthop-speed).

#### Shorthop Speed
	
Starting vertical velocity for a shorthop. Velocity goes down due to [Gravity Acceleration](#gravity-acceleration).

{{< library/cast-comparison shorthop.speed "Measured in pixels per frame" >}}

#### Fullhop Speed
	
Starting vertical velocity for a fullhop. Velocity goes down due to [Gravity Acceleration](#gravity-acceleration).

{{< library/cast-comparison fullhop.speed "Measured in pixels per frame" >}}

> Ranno's Super Jump, performed by crouching into a fullhop, has a starting vertical velocity of {{< library/stat ranno superJump.speed >}}.

### Double Jump Speed
	
Starting vertical velocity for a double jump. Velocity goes down due to [Gravity Acceleration](#gravity-acceleration).

{{< library/cast-comparison doubleJump.speed "Measured in pixels per frame" >}}

> Absa's {{< library/stat absa doubleJump.speed >}} value means she dips during the start of her double jump. She has a separate, unique Double Jump Acceleration stat with a value of {{< library/stat absa doubleJump.accel >}} pixels per frame per frame which accelerates her upwards.

> Wrastor's triple and quadruple jumps have starting vertical velocities of {{< library/stat wrastor tripleJump.speed >}} and {{< library/stat wrastor quadrupleJump.speed >}}, respectively. Mollo's triple jump has a speed of {{< library/stat mollo tripleJump.speed >}}.

### Gravity Acceleration

Speed characters accelerate downwards due to gravity while not in hitstun, until [Max Fall Speed](#max-fall-speed) is reached.

{{< library/cast-comparison gravityAccel "Measured in pixels per frame per frame" >}}

### Fastfall Speed

Fall speed in fastfall.

{{< library/cast-comparison fastfallSpeed "Measured in pixels per frame" >}}

### Land Time

Default amount of landing lag frames. 

{{< library/cast-comparison landTime >}}

### Pratfall

Commonly referred to as special fall or freefall, pratfall is an airborne state a character can enter in which they are unable to act, most commonly entered by using a recovery move or being parried. Can be cancelled with [Walljump](#walljump).

#### Pratfall Acceleration

Multiplier to [Air Acceleration](#air-acceleration) that restricts horizontal control during pratfall.

{{< library/cast-comparison pratfall.accel >}}

#### Pratfall Land Time

Number of frames characters are unable to act after landing from pratfall. Specific moves or circumstances may result in this value increasing or decreasing.

{{< library/cast-comparison pratfall.landTime >}}

### Walljump

#### Vertical Walljump Speed
	
Starting vertical velocity for a walljump.

{{< library/cast-comparison walljump.speed.vertical "Measured in pixels per frame" >}}

#### Horizontal Walljump Speed
	
Starting horizontal velocity for a walljump.

{{< library/cast-comparison walljump.speed.horizontal "Measured in pixels per frame" >}}

#### Wallcling

> Maypul and Ori are able to wallcling, holding their position on the wall for up to {{< library/stat maypul wallcling.max >}} frames before walljumping.

## Knockback Data

### Damage

The amount of % that an attack hitbox deals. The amount of % a character has after being dealt this damage influences [knockback](#knockback), [hitstun](#hitstun), and [hitpause](#hitpause).

### Angle

The base launch angle at which a hitbox sends its target flying, with 0° being straight horizontally in the direction the attacker is facing and 90° being straight upwards.

> Attacks listed as having a 361° angle, known as the "Sakurai Angle," have a special property. Moves with this angle send grounded opponents at a 40° angle, and aerial opponents at a 45° angle.

#### Angle Flippers

A value that determines if and how the base launch angle is affected by the relative positioning of the two characters. Let's run through the definitions of all 10, plus some notable examples:

- **{{< code 0 >}}:** Sends at the exact knockback angle every time.
- **{{< code 1 >}}:** Sends away from the center of the attacker or projectile.
  - [Zetterburn Shine](/library/zetterburn#neutral-special), [Forsburn Combust](/library/forsburn#down-special)
- **{{< code 2 >}}:** Sends toward the center of the attacker or projectile.
- **{{< code 3 >}}:** Horizontal knockback is reversed if the enemy is behind the center of the hitbox.
- **{{< code 4 >}}:** Horizontal knockback is reversed if the enemy is in front of the center of the hitbox.
  - [Wrastor Down Air](/library/wrastor#down-air), [Sylvanos Down Strong](/library/sylvanos#down-strong)
- **{{< code 5 >}}:** Horizontal knockback is reversed.
- **{{< code 6 >}}:** Horizontal knockback is reversed if the enemy is behind the attacker or projectile.
  - [Maypul Neutral Air](/library/maypul#neutral-air), [Orcane Forward Tilt](/library/orcane#forward-tilt)
- **{{< code 7 >}}:** Horizontal knockback is reversed if the enemy is in front of the attacker or projectile.
- **{{< code 8 >}}:** Sends away from the center of the hitbox.
- **{{< code 9 >}}:** Sends toward the center of the hitbox.
- **{{< code 10 >}}:** Sends in the direction the attacker is moving.
  - [Zetterburn Up Special](/library/zetterburn#up-special) (Final Hit)

### Knockback

The initial speed at which a hitbox sends its target flying, measured in pixels per frame. Calculated by the following formula:

> **Base_Knockback**{{< code " + (" >}}**Knockback_Scaling**{{< code " × " >}}[Percent_After_Hit](#damage){{< code " × " >}}[Knockback_Adjust](#knockback-adjust){{< code " × 0.12)" >}}

- Base Knockback and Knockback Scaling are hitbox properties, displayed as "Base | Scaling" on Library character pages.
- [Knockback Adjust](#knockback-adjust) is the basic weight stat of the character being attacked. 

### Hitstun

The number of frames a character is stunned, unable to perform basic actions, after being hit by an attack hitbox. Calculated by the following formula:

> **Hitstun_Multiplier**{{< code " × ((" >}}**Base_Knockback**{{< code " × 2.4 × (" >}}[Knockback_Adjust](#knockback-adjust){{< code " - 1)) + (" >}}**Knockback_Scaling**{{< code " × " >}}[Percent_After_Hit](#damage){{< code " × " >}}[Knockback_Adjust](#knockback-adjust){{< code " × 0.312))" >}}

- The vast majority of hitboxes have a Hitbox Multiplier of {{< code 1 >}}.
- Base Knockback and Knockback Scaling are hitbox properties, displayed as "Base | Scaling" on Library character pages.
- [Knockback Adjust](#knockback-adjust) is the basic weight stat of the character being attacked. 

### Hitpause

The number of frames that both characters experience a pause/freeze-frame effect when a hitbox connects. Calculated by the following formula:

> **Base_Hitpause**{{< code " + (" >}}**Hitpause_Scaling**{{< code " × " >}}[Percent_After_Hit](#damage){{< code " × 0.05) + " >}}**Extra_Hitpause**

- Base Hitpause and Hitpause Scaling are hitbox properties, displayed as "Base | Scaling" on Library character pages.
- The vast majority of hitboxes do not have Extra Hitpause.

> If the game calculates that the attacked character will be KO'd on all even angled DI possibilities (not accounting for possible ledge techs or interference from other hitboxes/objects), a "galaxy" effect will play, locking that move into 20 frames of hitpause.

#### ASDI Modifier

Modifier of the default 10 pixels you are able to travel during hitpause with ASDI.

### More

#### Force Flinch

Unique property which changes how characters react to attacks. Flinch replaces hitstun if the knockback applied is too low to lift a character off the ground, and unlike hitstun will not scale with damage. Force flinch values can prevent moves from lifting characters off the ground at any percent, make them unable to cause the flinch state even if the attack is crouch cancelled, or cause them to be crouch cancelllable at any percent.

- **{{< code 1 >}}:** Forces the flinch state, unless the attack is crouch cancelled.
- **{{< code 2 >}}:** Cannot cause flinch, even if crouch cancelled.
- **{{< code 3 >}}:** Can always be crouch cancelled, regardless of percent.

#### Hit Lockout

Amount of frames after hitpause ends in which a character cannot be hit again. This value is mostly used on kill moves for characters who have projectiles that may interfere with their opponents' knockback.

#### Priority

If multiple hitboxes collide with a target on the same frame, the target will be hit by the hitbox with the higher priority value. This is relevant on moves with multiple hitboxes that are active at the same time.

#### Untechable

A property that prevents a character from being able to tech on the ground when hit. [Etalus Up Air](/library/etalus#up-air) has a unique untechable property that prevents characters from being able to land on a platform during hitstun. Zetterburn and Shovel Knight have untechable moves that force the missed tech state on their opponent.

#### TODO:
> Match char pages and yaml data files to this ordering as final step
