var binary = []; // large array of 8 bit numbers;
var results = [];

for (var i = 0; i < binary.length; i ++) {
  var c = binary[i];
  if (c & 0x80) { // first digit is 1.
    var count = c & 0x80;
    var d = c & 0x1F;
    for (i++; i <= count; i++) {
      c = binary[i];
      if (c & 0x80) throw "Improperly encoded! Expected 0, not 1 for continuation bytes";
      d = d * 128; // bit shift simulation - Normal bit shifts wont work
      d += c & 0x1F; // bit or simulation
      
    }
    results.push(d)
  } else {
    results.push(c)
  }
  
}

return results
