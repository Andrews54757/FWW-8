var numbers = [4397,60000];
var results = [];

for (var i = 0; i < numbers.length; i ++) {
var current = numbers[i];
var num;
if (current < 128) {
results.push(current)
} else {;

var cache = [128,4224,528512,67637376]
if (current < 4224) {
num = current - 128
var len = 1;
} else if (current < 528512) {
num = current - 4224
var len = 2;
} else if (current < 67637376) {
num = current - 528512
var len = 3;
} else {
num = current - 67637376
var len = 4;
}

var add = 128 + ((len - 1) << 5);

var r = results.length;
for (var k=0; k < len; k++) {
results[r + len - k] = num & 0x7F; // last 7 bits
num = Math.floor(num / 128) // right shift
}
results[r] = num + add;
}
}
