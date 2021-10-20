// function matches(n, str = " ") {
//     for (let i = 0; i < n; i++) {
//         str += "   |";
//     }
//     alert(n + str);
// }
// matches(n = prompt("Введите количество спичек"))

function matches(n, str = " ") {
    for (let i = 0; i < n; i++) {
        str += "   |";
    }
    alert(n + str);
    while (n > 0) {
        alert("You turn!");
        let m = prompt("Get the matches");
        if (isNaN(m) || m < 0 || m > 3) {
            return;
        }
        n -= m;
        let str = " ";
        for (let i = 0; i < n; i++) {
            str += "   |";
        }
        if (n % 4 == 0) {
            alert("You win!");
            return;
        }
        else {
            alert(n + str);
        }
        if (n <= 0) {
            alert("You win!");
            return;
        }
        alert("My turn");
        let rand = Math.floor(Math.random() * 3) + 1;
        n -= rand;
        for (let i = 0; i < n; i++) {
            str += "   | ";
        }

        if (n % 4 == 0) {
            alert("I win!");
            return;
        }
        else {
            alert(n + str);
        }
    }
}
matches(n = prompt("Введите количество спичек"))
