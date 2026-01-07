---
layout: '../../layouts/BlogLayout.astro'
title: 'The Logical Next Step: A Gameboy Emulator in Rust'
pubDate: 2025-08-3
description:
  'The next step in my journey and it makes sense. Maybe aside from the Rust
  part. No actual memory management, what is this crap?'
author: 'Jake Abed'
tags:
  [
    'portfolio',
    'emulation',
    'rust',
    'gameboy',
    'blogging',
    'learning in public',
  ]
---

# The Logical Next Step: A Gameboy Emulator in Rust

> Note: Between work and other projects, the Gameboy Emulator project has taken
> a backseat for me. I've left this blog here in all its glory though.

After getting my Chip-8 emulator written in Zig, I asked myself... what's the
next step? Chip-8 is often seen as the first step in learning emulation, despite
not being a true "emulator", but the second step is less well-defined. A little
research lead me to two standard choices:

1. NES emulation - The classic, the OG, what many think of when they think
   "8-bit".
2. Gameboy emulation - The ultimate 8-bit console and probably the last.

Thinking it over, the choice was purely personal for me. I grew up with a
Gameboy by my side, playing **"Pokémon Red Version"** and **"The Legend of
Zelda: Link's Awakening"** as much as I reasonably could. There were NES games
that I played, but nowhere near as much as the Gameboy. Jumping up to 16-bit
consoles, such as the SNES, is a bit more of a complexity jump, so the Gameboy
was the logical and reasonable choice.

## Weapon of Choice

I have little self control. I am interested in language design. I **_had_**
never used Rust. Oops... I decided to learn Rust.

A couple of evenings picking over [Rustlings](https://rustlings.rust-lang.org/)
and I felt like I was as ready to roll as I would ever be. The language is
notably more complex than Zig, but the LSP and compiler are generally super
helpful, so it's a fair trade in my opinion. Time to write a Gameboy emulator.
**_HELL YEAH, BROTHER!!!_**

## Resources?

Except, wait a second... Where do you start with a Gameboy emulator? The short
answer: the [PanDocs](https://gbdev.io/pandocs/). The long answer is a little
more complex and unsatisfying for a noob:

You see, the Chip-8 is an onboarding point, so the resources are **_very_**
beginner friendly. The default resources spend more time answering simple
questions or explaining context in a granular way. As for the Gameboy, the
resources assume you have a greater depth **_and_** breadth of knowledge as to
basic operations and behaviors.

## Update: on hold for now

Life happened and other projects are cooking. I decided to take a pause on this
project for several reasons.

1. I wasn't finding Rust fun. This is ultimately the big kicker. Whenever I
   wrote Zig, I felt super happy. To confirm this suspicion, I went back and
   worked on my Zig Lexer. Aside from some time spent figuring out updates, it
   was just more pleasant to write.
2. I've been working. There's only so many hours in the day and I'm not sure I'm
   trying to get hired somewhere else writing Rust. I began asking myself, how
   worth it is this project right now?
3. Making games is higher priority for me right now. Enough said, right?

Someday I will return to this project, but for now it's going into the temporary
graveyard for it to be eventually dug out and re-animated.
