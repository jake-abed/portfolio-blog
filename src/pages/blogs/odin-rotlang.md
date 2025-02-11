---
layout: '../../layouts/BlogLayout.astro'
title: 'Making A Rotlang Lexer In Odin'
pubDate: 2025-01-14
description:
  "What's a 'Rotlang' you ask? Glad you asked. It's a language with brainrot
  syntax. Why Odin? What's with all the questions?"
author: 'Jake Abed'
tags:
  ['portfolio', 'lexers', 'language design', 'blogging', 'learning in public']
---

# Making a Rotlang Lexer In Odin

Published on: 2025-02-04

A few months ago I was putzing around in a Discord server and the topic of
language design got brought up. I've always been curious about the topic, but
never took the leap. Someone recommended that I check out
[Writing An Interpreter In Go](https://interpreterbook.com/) by Thorsten Ball.

Holy hell, what a good recommendation. The book perfectly balances accessibility
and deep explanation. You make a fairly complete language within the book,
although it admittedly relies heavily on using Go for _some_ of its magic.

## Cool, Why Are You Telling Me This?

A while ago someone on the internet made
[PyGyat](https://github.com/shamith09/pygyat) AKA "Python With Rizz" AKA a
Python preprocessor that replaces keywords and syntax in Python with gen Z brain
rot vocabulary. It's pretty funny, but something about it bugged me. Some of the
keywords were **too** long. Now, I get it... you're not really gonna use PyGyat
in production or whatever? But what if you made a practical RotLang? Memey and
dumb, but also oddly practical?

> By the way, in my mind that's what a RotLang is: a joke language made up of
> brain rot terminology.

## Enter Odin

Okay, truthfully... there's no super clear reason I went with Odin; I just
wanted to try Odin. The C with bits of Pascal & Go sprinkled in really just made
sense to me.

So I thought, hey, I can just knock out a lexer and spit out some tokens really
easily, right? No need to build the whole thing, but tokenization is a good step
to get to for defining language syntax.

## Just Put The Fries In The Bag, Bro...

Okay, heres the main file of the program feature a snippet of code:

```zig
main :: proc() {
	s := `aight bet isBlueMeth = cook(color) {
	    uh (color == "blue") {
			send yee
		} tho {
		    send nah
		}
	};`


	l := lexer.init(s)

	for l.ch != 0 {
		fmt.println(lexer.NextToken(l))
	}
}
```

Nothing crazy, right? `lexer.init(s)` return the pointer to a Lexer struct. We
then just run a loop that lexes the input until we hit the EOF character at the
end. This goofy, but fairly C-like syntax pumps out the following tokens:

```bash
Token{Type = "CONST", Literal = "aight"}
Token{Type = "LET", Literal = "bet"}
Token{Type = "IDENT", Literal = "isBlueMeth"}
Token{Type = "ASSIGN", Literal = "="}
Token{Type = "FUNC", Literal = "cook"}
Token{Type = "LPAREN", Literal = "("}
Token{Type = "IDENT", Literal = "color"}
Token{Type = "RPAREN", Literal = ")"}
Token{Type = "LBRACE", Literal = "{"}
Token{Type = "IF", Literal = "uh"}
Token{Type = "LPAREN", Literal = "("}
Token{Type = "IDENT", Literal = "color"}
Token{Type = "EQ", Literal = "=="}
Token{Type = "STRING", Literal = "blue"}
Token{Type = "RPAREN", Literal = ")"}
Token{Type = "LBRACE", Literal = "{"}
Token{Type = "RETURN", Literal = "send"}
Token{Type = "TRUE", Literal = "yee"}
Token{Type = "RBRACE", Literal = "}"}
Token{Type = "ELSE", Literal = "tho"}
Token{Type = "LBRACE", Literal = "{"}
Token{Type = "RETURN", Literal = "send"}
Token{Type = "FALSE", Literal = "nah"}
Token{Type = "RBRACE", Literal = "}"}
Token{Type = "RBRACE", Literal = "}"}
Token{Type = "SEMICOLON", Literal = ";"}
Token{Type = "EOF", Literal = ""}
```

I'm probably going to **hell** for this aren't I? If I keep working on this I'll
probably go crazy.

## What's Going On With This Lexer?

There's really nothing special or magical happening here: it's a pretty
threadbare lexer. You may notice that we're not even tracking line number or any
useful data that a parser could use to flag syntax errors. Just vomitting out
tokens and literals.

Frankly, the best thing about this was using Odin: it feels exactly like C, but
with a lot of Quality of Life features stapled on (like an actual Array data
structure & Go-like type inference) that make working in it relatively fast.
Take a look at the Lexer struct and the subsequent init procedure (function):

```zig
Lexer :: struct {
	input:        string,
	position:     int,
	readPosition: int,
	ch:           byte,
}

init :: proc(inp: string) -> ^Lexer {
	l := new(Lexer)
	l^ = Lexer{}
	l.input = inp
	l.position = 0
	l.readPosition = 0
	l.ch = 0
	readChar(l)
	return l
}
```

It was an easy adjustment overall: methods are not a thing in Odin, but as far
as I remember, they're just syntactic sugar in Go. Just pass in a pointer to a
struct as the first argument and you're golden. Also, notice that `^` character?
That's the pointer dereference operator! It isn't too big of a shift for me
since it reminded me of the pin operator in Elixir a tiny bit (okay, not the
same thing really, but let me have that).

Anyway, that's about it for now. I'll be back soon with some updates on Lore and
talking about making your first CLI with no experience probably. Or maybe
talking about DeepSeek-R1... Unless I get arrested for using it, lol.

-Jake
