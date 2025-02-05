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

I'll talk about this more, but look at this crap:

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

I'm going to **hell** for this...
