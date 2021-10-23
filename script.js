// let n = 13;
// let str = " ";
// for (let i = 0; i < n; i++) {
//     str += "|";
// }
// alert(n + str);
// while (n > 0) {
//     alert("You turn!");
//     let m = prompt("Get the matches");
//     if (isNaN(m) || m < 0 || m > 3) {
//         break;
//     }
//     n -= m;
//     let str = " ";
//     for (let i = 0; i < n; i++) {
//         str += "| ";
//     }
//     alert(n + str);
//     if (n <= 0) {
//         alert("You win!");
//         break;
//     }
//     alert("My turn");
//     let rand = Math.floor(Math.random() * 3) + 1;
//     n -= rand;
//     for (let i = 0; i < n; i++) {
//         str += "| ";
//     }
//     alert(n + str);
// }

// let n = prompt("Введите общее количество спичек");
// let str = " ";
// function show(n) {
//     for (let i = 0; i < n; i++) {
//         str += "| ";
//     }
//     alert(n + str)
// }
// show(n);
// while (n > 0) {
//     alert("You turn!");
//     let m = prompt("Get the matches");
//     if (isNaN(m) || m < 0 || m > 3) {
//         break;
//     }
//     n -= m;
//     let str = " ";
//     for (let i = 0; i < n; i++) {
//         str += "| ";
//     }
//     if (n % 4 == 0) {
//         alert("You win!");
//         break;
//     }
//     else {
//         alert(n + str);
//     }
//     if (n <= 0) {
//         alert("You win!");
//         break;
//     }
//     alert("My turn");
//     let rand = Math.floor(Math.random() * 3) + 1;
//     n -= rand;
//     for (let i = 0; i < n; i++) {
//         str += "| ";
//     }

//     if (n % 4 == 0) {
//         alert("I win!");
//         break;
//     }
//     else {
//         alert(n + str);
//     }
// }