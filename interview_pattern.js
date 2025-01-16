// to print the following star CanvasPattern
//        *
//       * *
//      *****

let n = 3;
// for number of rows
for (let i = 1; i <= n; i++) {
    let row = " ";
    // for space 
    for (let j = 1; j <= n - i; j++) {
        row = row + " ";
    }
    // for printing *
    for (let k = 1; k <= (2 * i - 1); k++) {
        if (i == n || k == 1 || k == (2 * i - 1)) {
            row = row + "*";
        }
        else {
            row += " ";
        }
    }
    console.log(row);
}