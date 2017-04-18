# FWW-8
FWW-8  Better that UTF-8

# Encoding

### FWW-8:5 Storage: Storage: ~8657571968

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
