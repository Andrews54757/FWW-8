var numbers = [4397];
var results = [];

for (var i = 0; i < numbers.length; i ++) {
var current = numbers[i];
if (current < 128) { // one byte

results.push(current);

} else if (current < 4224) { // two bytes
var c = current - 128;

var b = c & 0x7F

var d = Math.floor((c - b) / 128);
results.push(d + 128)
results.push(b)
} else if (current < 528512) { // three bytes
var c = current - 4224;

var b = c & 0x7F;
var f = Math.floor((c - b) / 128) & 0x7F;
var d = Math.floor((c - b) / 256);
results.push(d + 160)
results.push(f)
results.push(b)

} else if (current < 67637376) { // Four bytes
var c = current - 528512;

var b = c & 0x7F; // last byte
var g = Math.floor((c - b) / 128) & 0x7F;
var f = Math.floor((c - b) / 256) & 0x7F;
var d = Math.floor((c - b) / 512); // first byte
results.push(d + 160)
results.push(f)
results.push(g)
results.push(b)

} else { // five bytes
var c = current - 67637376;
  
var b = c & 0x7F; // last byte
var g = Math.floor((c - b) / 128) & 0x7F;
var f = Math.floor((c - b) / 256) & 0x7F;
var h = Math.floor((c - b) / 512) & 0x7F;
var d = Math.floor((c - b) / 1024); // first byte
results.push(d + 160)
results.push(h);
results.push(f)
results.push(g)
results.push(b)

}


}

console.log(results)


