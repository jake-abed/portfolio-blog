---
layout: '../../layouts/BlogLayout.astro'
title: "Gettin' Ziggy With It: Learning Zig With Ziglings"
pubDate: 2025-01-14
description:
  'Manage memory? Hell nah, I just want to write vanilla JS until my eyes bleed
  and my wife leaves me.'
author: 'Jake Abed'
tags:
  ['portfolio', 'lexers', 'language design', 'blogging', 'learning in public']
---

# Gettin' Ziggy With It: Lexers & Ziglings

Published on: 2025-02-10

Okay, so I played around with Odin earlier and had a great time. There are a lot
of things to love about it. For example, what's not too love about the walrus
operator (`:=`) and the four-eyes operator (`::`) for assignment? It's heavenly.

But everyone and their mother keeps crowing about Zig lately. Zig this. Zig
that. Zig cured my depression. Zig got me a job. Zig solved world hunger. Zig
replaced my therapist and my the hole in my life that my father left. Like jesus
f@!#&^g christ, I get it.

## Why I Tried Zig

Two simple reasons:

1. Error handling In Zig is cool!
2. I want to compare it to Odin.

### Zig Handles Errors Sanely

Zig feels like the best parts of Go's error system with some of the tedium and
poor behavior excised. For example, errors as values makes sense. That is great.
It's one of Go's best features. If `if err != nil` boilerplate kinda sucks, but
it's not the bigger problem. The bigger problem is passing around tuples of
desired values and errors.

Zig's error unions feel like a refined version of the idea. A return value can
be an error value or the desired return value. I tried explaining to my partner
with this analogy:

> Let's say you have a recipe for a cake. You know at the end of the recipe, if
> you follow the steps and they all go okay, you'll get a cake, right? Okay, but
> with the recipe also told you all the possible wrong versions of the cake you
> could get too!? You might end up with a burnt cake if the temp in the oven is
> wrong. You could get a brick cake if you work it too much and make it tough.

It's inelegant, but this does make it make sense reasonably well.

### Zig vs. Odin

Simply put, how can you understand the difference between two languages if you
haven't used them. Is this a great use of my unemployed time? I think it is, but
this probably is not making anyone want to hire me. I should probably be making
a Pinterest clone in React or some other clout chasing exercise, but I want to
follow my heart.

## Hair Pulling Madness

I got a swift kick in the pants within 30 minutes of writing some Zig. Let's
take a look at the `nextToken` method I wrote on the Lexer and breakdown what
went wrong:

```zig
    pub fn nextToken(self: *Lexer) token.Token {
        var tok: token.Token = undefined;

        self.skipWhitespace();

        switch (self.ch) {
            '=' => {
                if (self.peekChar() == '=') {
                    const ch = self.ch;
                    self.readChar();
                    var l = [_]u8{ ch, ch };
                    var l = [_]u8{ ch, self.ch };
                    const literal = l[0..];
                    tok = token.Token{
                        .type = token.TokenType.EQ,
                        .literal = literal,
                        .line = self.line,
                        .col = self.col,
                    };
                } else {
                    var l = [_]u8{self.ch};
                    const literal = l[0..];
                    tok = newToken(
                        token.TokenType.ASSIGN,
                        literal,
                        self.line,
                        self.col,
                    );
                    tok = self.newToken(token.TokenType.ASSIGN, literal);
                }
            },
            //... more similar cases...
            else => {
                var l = [_]u8{0};
                const literal = l[0..];
                tok = token.Token{
                    .type = token.TokenType.ILLEGAL,
                    .literal = literal,
                    .line = self.line,
                    .col = self.col,
                };
            },
        }

        self.readChar();
        return tok;
    }
```

10 points to anyone who can spot the problem with this code, because it's a big
honking issue. I couldn't figure it out at first, so let's step away from the
Lexer for a second.

## Enter Ziglings

It was clear that just reading the docs and [zig.guide](https://zig.guide/) were
not quite enough for me. My background it low-level languages is too weak.

Fortunately, there exists an amazing way to pick up Zig and quickly learn some
of the low-level concepts that Zig is trying to address:
[Ziglings!](https://ziglings.org/) It features over 100 exercises that gently
increase in difficulty. Just fix the small programs in each file and run
`zig build` to see if you succeeded.

I'm not 100% finished yet, but it already got me comfortable enough that I was
able to go back and figure out what in the unholy hell I was doing wrong
earlier.

## Enter The Arena

You see, everything I was doing was almost completely on the stack. I believe
that my issue was simple and frustrating: in the main file, I would initialize a
Lexer (cool, no big deal) and then ask it to loop over the lexer until an `EOF`
token is found (also chill, easy enough). But when I'd go to take a look at what
was inside the tokens I had generated, the line, column, and type were
perfect... But the token literal!??! It might just be `[]const u8` with two `0`
bytes. What the f$%k!?!

My understanding now is that the when the `newToken` call was clearing up the
`[]const u8` strings, which are basically a pointer and a length, were having
their contents freed. So I was keeping the pointer and grabbing (drumroll,
please)... `00000000` AKA `0` AKA `NUL`.

![Ric Flair Go Woo!](https://i.ytimg.com/vi/r7G7z3_8ea4/maxresdefault.jpg)

The fix was fairly simple: make an arena allocator and pass it into the Lexer
upon intialization. Anytime you make a string, just `std.mem.Allocator.dupe` the
sucker onto the heap and you're good.

An arena is a good choice here because we are fine just dumping all the contents
of the Lexer onto the heap for now and then just freeing the whole shebang once
we're done with the Lexer and Tokens. There are clearly performance
optimizations that could be made, but just getting it to work is a huge deal for
me.

## What's Next?

I have two things:

1. My new game OctoDive is well under way and I need to kick it into high gear.
   I like the idea and it's shaping up quite nicely.
2. There's an idea that I've been mulling about that I might want to try, but
   the complexity is pretty high and it's a fair bit of mixing up different
   details that I have yet to broach in development. Audio streaming,
   efficiently storing and converting large audio files, and payments for users.
   It's scary to know all the work that can go into a project and then dive in.
   Sometimes it better to be stupid and naive.
