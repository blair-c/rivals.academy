---
title: Glossary
description: Frame data, knockback, and character terminology.
authors:
- Sector 7-G
---

## Effective Weight

### Knockback Adjust

The standard "weight" stat. Dictates how far a move hits a character by functioning as a multiplier in the knockback formula.

{{< library/cast-comparison "knockbackAdjustment" >}}

### Gravity Acceleration

Relative speed characters accelerate downwards due to gravity while not in hitstun.

{{< library/cast-comparison "gravityAccel" "Measured in pixels per frame per frame" >}}

#### Hitstun Gravity Acceleration

Speed characters accelerate downwards due to gravity while in hitstun (affects vertical KOs).

{{< library/cast-comparison "hitstunGravityAccel" "Measured in pixels per frame per frame" >}}

### Air Friction

Affects horizontal speed and mitigates knockback horizontally during hitstun (slows movement through the air after a hit). Also affects inward Drift DI.

{{< library/cast-comparison "airFriction" "Measured in pixels per frame per frame (Unconfirmed)" >}}

### Air Acceleration

A character's aerial drift when holding left/right in the air. Does not affect Drift DI.

{{< library/cast-comparison "airAccel" "Measured in pixels per frame per frame" >}}

### Max Fall Speed

Maximum fall speed without fastfall.

{{< library/cast-comparison "maxFallSpeed" "Measured in pixels per frame" >}}

#### Fastfall Speed

Maximum fall speed in fastfall.

{{< library/cast-comparison "fastfallSpeed" "Measured in pixels per frame" >}}

### Land Time

Default amount of landing lag frames. 

{{< library/cast-comparison "landTime" >}}

## Ground Movement

### Ground Friction

How much characters slow down at any point on the ground.

{{< library/cast-comparison "groundFriction" "Measured in pixels per frame per frame (Unconfirmed)" >}}

### Dash / Run

#### Initial Dash Speed

Initial speed when starting a dash.

{{< library/cast-comparison "initialDash.speed" "Measured in pixels per frame" >}}

#### Initial Dash Time
	
Number of frames after a dash input during which attacks register as dash attacks. This also determines dash dance length.

{{< library/cast-comparison "initialDash.time" >}}

#### Run Speed

Constant run velocity after initial dash.

{{< library/cast-comparison "run.speed" "Measured in pixels per frame" >}}

#### Run Stop Time

Number of frames the run stop animation lasts after ending a run.

{{< library/cast-comparison "run.stop.time" >}}

#### Run Turn Time

Number of frames it takes each character to turn out of run.

{{< library/cast-comparison "run.turn.time" >}}

#### Run Turn Accel

Slows characters down during turn around in run. 

{{< library/cast-comparison "run.turn.accel" "Measured in pixels per frame per frame" >}}

### Walk

#### Walk Speed

Maximum velocity when walking.

{{< library/cast-comparison "walk.speed" "Measured in pixels per frame" >}}

#### Walk Acceleration

Acceleration when beginning to walk.

{{< library/cast-comparison "walk.accel" "Measured in pixels per frame per frame" >}}

#### Walk Turn Time

Universal number of 6 frames in the walk turn animation.

### Waveland

#### Waveland Time

Number of frames characters slide in the waveland animation.

{{< library/cast-comparison "waveland.time" >}}

#### Waveland Friction

Replaces [Ground Friction](#ground-friction) during wavelands.

{{< library/cast-comparison "waveland.friction" >}}

## Aerial Movement

### Max Air Speed

Maximum horizontal speed in the air while not in hitstun. Can be superceded by [Max Jump Horizontal Speed](#max-jump-horizontal-speed).

{{< library/cast-comparison "maxAirSpeed" "Measured in pixels per frame" >}}

#### Max Jump Horizontal Speed

Maximum horizontal speed maintained when going from a grounded to aerial state. Can be faster than [Max Air Speed](#max-air-speed) stat. For example: Maypul has air speed 6, but max jump horizontal speed 8, so she can get off stage faster than she can get back.

{{< library/cast-comparison "maxJumpHorizontalSpeed" "Measured in pixels per frame" >}}

### Fullhop Speed
	
Starting vertical velocity for a fullhop. Velocity goes down due to gravity.

{{< library/cast-comparison "fullhop.speed" "Measured in pixels per frame" >}}

### Shorthop Speed
	
Starting vertical velocity for a shorthop. Velocity goes down due to gravity.

{{< library/cast-comparison "shorthop.speed" "Measured in pixels per frame" >}}

### Double Jump Speed
	
Starting vertical velocity for a double jump. Velocity goes down due to gravity.

{{< library/cast-comparison "doubleJump.speed" "Measured in pixels per frame" >}}

> Absa's -1 value means she dips during the start of her double jump. She has a separate, unique Double Jump Acceleration stat with a value of -1.4 which accelerates her upwards.

### Walljump

#### Vertical Walljump Speed
	
Starting vertical velocity for a walljump.

{{< library/cast-comparison "walljump.speed.vertical" "Measured in pixels per frame" >}}

#### Horizontal Walljump Speed
	
Starting horizontal velocity for a walljump.

{{< library/cast-comparison "walljump.speed.horizontal" "Measured in pixels per frame" >}}

#### Wallcling

> Maypul and Ori are able to wallcling, holding their position on the wall for up to 60 frames before walljumping.

### Pratfall

#### Pratfall Acceleration

Multiplier to [Air Acceleration](#air-acceleration) that restricts horizontal control during prat/special/free fall.

{{< library/cast-comparison "pratfall.accel" >}}

#### Pratfall Land Time

Number of frames characters are unable to act after landing from prat/special/free fall.

{{< library/cast-comparison "pratfall.landTime" >}}
