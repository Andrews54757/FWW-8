# FWW-8
FWW-8  Better that UTF-8


# Features:

1. One-byte codes are used for the ASCII values 0 through 127, so ASCII text is valid FWW-8. FWW-8 multi-byte chars however, cannot be read by a ASCII interpreter.
2. The first byte indicates whether there are more than one byte. If so, the next two bits are used to determine the length. This makes FWW-8 a prefix code: reading from a stream can instantaneously decode each individual fully received sequence, without first having to wait for either the first byte of a next sequence or an end-of-stream indication.
3. The leading bytes for multi-byte charactors and the continuation bytes do not share values (continuation bytes start with 0 while multi-bytes leaders start with 1). It means that the start of a character can be found from a random position by backing up at most 5 (Or 34) bytes to find the leading byte.
4. Tons of space. FWW-8:5 can store over 8.6 billion numbers. FWW-8:34 can store over 3.4 duovigintillion numbers.

# Encoding

### FWW-8:5 Storage: Storage: ~8,657,571,968

| # Of Bytes | Bits |  Byte 1  |  Byte 2  |  Byte 3  |  Byte 4  |  Byte 5  |
|:----------:|:----:|:--------:|:--------:|:--------:|:--------:|:--------:|
| 1          | 7    | 0xxxxxxx |          |          |          |          |
| 2          | 12   | 100xxxxx | 0xxxxxxx |          |          |          |
| 3          | 19   | 101xxxxx | 0xxxxxxx | 0xxxxxxx |          |          |
| 4          | 26   | 110xxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx |          |
| 5          | 33   | 111xxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx |

### FWW-8:34 - Storage: >3.478045403107056e+69

| # Of Bytes | Bits |  Byte 1  |  Byte 2  |  Byte 3  |  Byte 4  |  Byte 5  |    ...    |
|:----------:|:----:|:--------:|:--------:|:--------:|:--------:|:--------:|:---------:|
| 1          | 7    | 0xxxxxxx |          |          |          |          |           |
| 2          | 12   | 100xxxxx | 0xxxxxxx |          |          |          |           |
| 3          | 19   | 101xxxxx | 0xxxxxxx | 0xxxxxxx |          |          |           |
| 4          | 26   | 110xxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx |          |           |
| 5          | 28   | 11100000 | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx |           |
| 6          | 35   | 11100001 | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx  |
| 7          | 42   | 11100010 | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx  |
| ...        | ...  | 111yyyyy | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx  |
| 34         | 231  | 11111111 | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx | 0xxxxxxx  |                               

# UTF8 Comparison - Storage: 1,112,064
## Features (From wikipedia)
1. Backward compatibility: One-byte codes are used for the ASCII values 0 through 127, so ASCII text is valid UTF-8. Bytes in this range are not used anywhere else, so UTF-8 text can be processed by software that can handle extended ASCII but only applies special meaning to ASCII characters, as it will not accidentally see those ASCII characters in the middle of a multi-byte character.
2. Clear indication of byte sequence length: The first byte indicates the number of bytes in the sequence. This makes UTF-8 a prefix code: reading from a stream can instantaneously decode each individual fully received sequence, without first having to wait for either the first byte of a next sequence or an end-of-stream indication. The length of multi-byte sequences is easily determined as it is simply the number of high-order 1s in the leading byte.
3. Self-synchronization: The leading bytes and the continuation bytes do not share values (continuation bytes start with 10 while single bytes start with 0 and longer lead bytes start with 11). This means a search will not accidentally find the sequence for one character starting in the middle of another character. It also means the start of a character can be found from a random position by backing up at most 3 bytes to find the leading byte.

## Encoding

| # Of Bytes | Bits |  Byte 1  |  Byte 2  |  Byte 3  |  Byte 4  |
|:----------:|:----:|:--------:|:--------:|:--------:|:--------:|
|1	|7	|	0xxxxxxx			|
|2	|11	|	110xxxxx	|10xxxxxx		|
|3	|16	|	1110xxxx	|10xxxxxx	|10xxxxxx	|
|4	|21	|	11110xxx	|10xxxxxx|	10xxxxxx	|10xxxxxx|

