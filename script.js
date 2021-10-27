// let str = " ";
// function start(n) {
//     // alert(n);
//     matches(n)
// }
// start(n = prompt("Введите количество спичек"));
// function matches() {
//     for (let i = 0; i < n; i++) {
//         str += " | ";
//     }
//     alert(n + str);
// }
// while (n > 0) {
//     alert("Your turn!");
//     let m = prompt("Get the matches!");
//     if (isNaN(m) || m < 0 || m > 3) {
//         break;
//     }
//     n -= m;
//     // let str = " ";
//     // for (let i = 0; i < n; i++) {
//     //     str += "| ";
//     // }
//     // alert(n + str);
//     matches(n)
//     if (n <= 0) {
//         alert("you win!");
//         break;
//     }
//     alert("my turn!");
//     let rand = Math.floor(Math.random() * 3) + 1;
//     n -= rand;
//     matches(n)
//     // alert(n + str);
// }

function start(ques1 = prompt("Введите начальное количество спичек")) {
    // let ques1 = prompt("Введите начальное количество спичек");
    function show() {
        let str = " ";
        for (let i = 0; i < ques1; i++) {
            str += " | ";
        }
        alert(ques1 + str);
    }
    show()
    while (ques1 > 0) {
        alert("Твоя очередь");
        let ques2 = prompt("Сколько спичек вы хотите забрать?");
        if (isNaN(ques2) || ques2 < 0 || ques2 > 3) {
            alert("Ошибка");
            break;
        }
        else {
            ques1 -= ques2;
            show()
            if (ques1 <= 0) {
                alert("Ты выиграл!");
                break;
            } else {
                alert("Теперь моя очередь");
                let rand = Math.floor(Math.random() * 3) + 1;
                ques1 -= rand;
                show()
            }
        }
    }
    return;
}