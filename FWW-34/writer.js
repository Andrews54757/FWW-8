var numbers = [4397, 60000];
var results = [];

for (var i = 0; i < numbers.length; i++) {
    var current = numbers[i];
    var num;
    if (current < 128) {
        results.push(current)
    } else {;

        var cache = [268963968, 805834880, 1879576704, 4027060352, 8322027648, 16911962240, 34091831424, 68451569792, 137171046528, 274610000000, 549487906944, 1099243720832, 2198755348608, 4397778604160, 8795825115264, 17591918137472, 35184104181888, 70368476270720, 140737220448384, 281474708803712, 562949685514368, 1125899638935680, 2251799545778304, 4503599359463552, 9007198986834048, 18014398241575040, 36028796751057024, 72057593770020990, 144115187807948930, 288230375883804800, 576460752035516540, 1152921504338940000]
        if (current < 4224) {
            num = current - 128
            var len = 1;
        } else if (current < 528512) {
            num = current - 4224
            var len = 2;
        } else if (current < 268963968) {
            num = current - 528512
            var len = 3;
        } else {
            num = current - 268963968



            var len = 4;
        }

        var add = 128 + ((len - 1) << 5);

        var r = results.length;
        for (var k = 0; k < len; k++) {
            results[r + len - k] = num & 0x7F; // last 7 bits
            num = Math.floor(num / 128) // right shift
        }
        results[r] = num + add;
    }
}
