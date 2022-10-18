let numbers =  Number(prompt(message:"nhập n số  nguyên tố đầu tien:" ));
let count = 0 , commonDivisorNum = 0;
for (let i = 1; i < 1000; i++) {
    if (count < numbers) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                commonDivisorNum++;
            }
        }
        if (  commonDivisornum  === 2) {
            documnet.write( i + "<br>" );
            count ++;
        }
        commonDivisornum = 0;
    } else {
        break;
    }