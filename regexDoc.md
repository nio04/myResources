> # create regex for js

# literal creation :

`const regex = \[regex]\[flags] `

# create with object :

`const regex = new regExp("pattern", "flags")`

---

> # js method for searching

1. match()
   `string.match(/nishat/gi)`
   return an array with matched results.
2. replace()
   `string.replace(/patterns/gi, replaceWith)`
   replace all matches
3. test()
   `regExp.test(string)`
   returns true, if a match found
   "regExp" = regular expression in a "regExp" var

> # flags

4. g - looks for all matches
5. i - case in-sensitive
6. s - makes "." to match new lines

> # character class

1. \d digit from 0 to 9
2. \t includes space, tab, newLine
3. \w alphabet, digit, underScore
4. \D any charcter except \d
5. \S any character except \s
6. \W anything but \w

> # anchrors : string start and end

1. ^ match for begining of the text
2. $ match for ending of the text
3. flags : m, with anchors : (^ $) cause matches for start & end of the line

> # word boundary :
>
> get to find stand-alone word
> `/\bjava\b/gi`
> match: java
> no-match : javascript
> note : without \b, from "javascript" > "java" is matched

> # escape special character

1. escape from regex literal:
   1. by using \ (backSlash symbol)
2. escape from New object regex :
   1. by using "\\" (double backSlash)

> # sets and range

1. defining several character within square bracket [] means, search for any character among given

ex: [aeo] means any of three character > a, e, o

2. ## range :
   1. square brackets[] also contains ranges
      ex: [a-z0-9] means get a character from "a" to "z" or 0 to 9
   2. exclude range[]
      ex: [^nm] any character except "n" or "m"
   3. all special characters are allowed without escaping
      ex: [.,] means looks for either dot or comma (no need to escape)

> # quantifier

# 1. quantity {n}

      1. exact count: \d{5} means 5 \d
      2. range: \d{3,5} means 3 to 5 \d
      3. specific to unlimit: \d{3,} means 3 to unlimit

# 2. quantifier

      1. + : one or more
      2. ? : zero or one
      3. * : zero or more
      4. . : any charcacter except new line

> # capturing group
