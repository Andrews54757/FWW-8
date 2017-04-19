var binary = [160, 1, 45]; // large array of 8 bit numbers; 598
var results = [];
var cache = [128,4224,528512,67637376]
for (var i = 0; i < binary.length; i ++) {
  var current = binary[i];
  if (current & 0x80) { // first bitwise digit is 1.
    var count = (current & 0x60) >> 5; // number of bytes
    var number = current & 0x1F; // starting number
    for (var j = 0; j <= count; j++) { // loop
      i++
      current = binary[i];
      if (current & 0x80) throw "Improperly encoded! Expected 0, not 1 for continuation bytes"; // double check
      number = number * 128; // bit shift simulation - Normal bit shifts wont work
      number += current; // bit or simulation
      
    }
    results.push(number + cache[count])
  } else {
    results.push(current)
  }
  
}
