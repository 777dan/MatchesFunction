
function matches(n) {
    let str = " ";
    // for (let i = 0; i < n; i++) {
    //     str += "   |";
    // }
    alert(n + str);
    function choose(m) {
        while (n > 0) {
            alert("You turn!");
            m = prompt("Get the matches")
            n -= m;
            for (let i = 0; i < n; i++) {
                str += "   |";
            }
            if (isNaN(m) || m < 0 || m > 3) {
                break;
            }
            if (n % 4 == 0) {
                alert("You win!");
                break;
            }
            else {
                alert(n + str);
            }
            if (n <= 0) {
                alert("You win!");
                break;
            }
            alert("My turn");
            let rand = Math.floor(Math.random() * 3) + 1;
            n -= rand;
            if (n % 4 == 0) {
                alert("I win!");
                break;
            }
            else {
                alert(n + str);
            }
        }
    }
    choose()
}
matches(n = prompt("Введите количество спичек"));