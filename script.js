function showPrompt() {
    let Val = prompt('Вы хороший программист?');
    if (Val == "Нет") {
        alert('Совершенно верно, ты бездарен! Иди смотри легаси :) Тернарный оператор на что?!');
    }
    else if (Val == "нет") {
        alert('С большой буквы писать не учили?');
    }
    else if (Val == "no") {
        alert('О, да вы бездарный англичанин!');
    }
    else if (Val == "No") {
        alert('Сэр, вы что из америки?');
    }
    else {
        alert('Попробуйте еще раз :(');
    }
}

function ToTen() {
    var sum = 0;
    var i = 1;
    while (i <= 10) {
        sum += i++;
        alert("Сумма:" + sum);
    }
} 

function ShowTen() {
    let i = 1;
    while (i < 11) { 
        alert(i);
        i++;
    }
}

function ForSevenNo() {
    for (let i = 1; i < 11; i++) { 
        if (i == 7) {
            continue;
        }
        alert(i);
    }
}
