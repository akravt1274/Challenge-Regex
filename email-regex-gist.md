# Regular Expression Tutorial: Matching an Email

Regular expression, or regex, is a sequence of characters that specifies a match pattern in text. 

Regular expressions are incredibly useful in programming and text processing for pattern matching, text replacement, input validation, or data extraction. 

In this tutorial, we will examine the "Matching an Email" regular expression for validating email addresses. 

    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

## Table of Contents

- [Anchors](#anchors)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [Character Escapes](#character-escapes)
- [Quantifiers](#quantifiers)
- [Summary](#summary)

## Regex Components

Now let's break down the components in the "Matching an Email" regex.

A regex is considered a literal, so the pattern must be wrapped in slash characters (/).

    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

### Anchors

The characters ^ and $ are both considered to be anchors:

    ^ asserts position at start of the string,

    $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any).

### Grouping Constructs

Grouping constructs in regular expressions are powerful tools that allow to capture a matched subexpression: *( subexpression )*. The subexpression is any valid regular expression pattern. Captures that use parentheses are numbered automatically from left to right based on the order of the opening parentheses in the regular expression.

In the "Matching an Email" regex, there are 3 grouping constructs:

    First group: ([a-z0-9_\.-]+) matches the username part of the email (before the @).

    Second group: ([\da-z\.-]+) matches the domain part of the email (between the @ and the .).

    Third group: ([a-z\.]{2,6}) matches the top-level domain (after the .).

For the email **example.user@domain.com**, the regex would match as follows:

    example.user matches the first group.
    domain matches the second group.
    com matches the third group.

### Bracket Expressions

Bracket expressions ([]) are a way to specify a set of characters that needs to match. 

In the “Matching an Email” regex example, the bracket expressions as follows:

    [a-z0-9_\.-] matches the username part of the email, which can include a lowercase letter between a-z, a number between 0-9, underscore, dot, or hyphen characters.

    [\da-z\.-] matches the domain name, which can include a digit (equivalent to [0-9]), a lowercase letter between a-z, dot, or hyphen characters.

    [a-z\.] matches the domain extension, which can include a lowercase letter between a-z and dot character.

### Character Classes

A character class in a regex defines a set of characters, any one of which can occur in an input string to fulfill a match.

    \d matches any Arabic numeral digit (equivalent to the bracket expression [0-9]).

    @ matches the literal @ symbol.  

    \. matches the literal . character

### Character Escapes

The backslash (\) in a regex escapes a character that otherwise would be interpreted literally.

    \. matches the dot character

### Quantifiers

Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found. 

In the “Matching an Email” regex example /^([a-z0-9_\.-]+)@([\da-z\.-]**+**)\.**([a-z\.]{2,6})**$/ , the + quantifier means one or more of the preceding element, and the {2,6} quantifier means that this string has to be between 2 and 6 characters.

The following examples match:

- example.user@domain.uk
- example.user@domain.com
- example.user@domain.museum 

The following example doesn't match:

- example.user@domain.museums

## Summary

The "Matching an Email" regex is used to validate email addresses by ensuring they follow the pattern of **example.user@domain.com**

The "Matching an Email" regex can be validated here: https://akravt1274.github.io/Challenge-Regex/

![alt text](/assets/image.png)

![alt text](/assets/image-1.png)

## Author

I'm a participant ina coding bootcamp, eager to deepen my knowledge of pragramming and strive to become an exceptional programmer. My github is https://github.com/akravt1274.
