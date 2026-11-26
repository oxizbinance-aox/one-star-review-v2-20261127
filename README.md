# One-Star Review of Something Essential — v2

[![Bounty](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/oxizbinance-aox/one-star-review-v2-20261127/rank.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/oxizbinance-aox/one-star-review-v2-20261127/reward.svg)](https://make.fun/c/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

## The review

> My phone died at 2% while I was lost. In the rain. One star.

Sixty characters. Three beats of bad luck, each one landing harder than
the last: the battery gives up at two percent, you are already lost, and
then the sky opens. The phone is the thing everyone depends on and nobody
notices until it quits — and it always quits at the exact moment you need
it most. That is the whole joke, and the whole complaint, in one breath.

## Why this line

The previous entry in this bounty reviewed gravity as an idea — clever
wordplay, but an abstract truth rather than a moment you can see. This
version does the opposite: it drops you into a single scene you have
probably lived yourself. A dying phone, an unfamiliar street, rain. You
can picture it in one second because you have been there. The last phrase
does the twisting — "In the rain" turns a bad day into a worse one, right
before the one-star verdict lands.

## How it is checked

`main.ts` holds the review and grades it against the rules the line was
built for:

- no more than 70 characters (it is 60),
- it closes with the words "One star.",
- the twist sits in the last phrase before that closing verdict.

Run it with Node:

```sh
node main.ts
```

It prints the review, the character count, and one check per rule. If any
rule fails it exits with an error instead of claiming success.
