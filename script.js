function showPrompt() {
    let Val = prompt('�� ������� �����������?');
    if (Val == "���") {
        alert('���������� �����, �� ��������! ��� ������ ������ :) ��������� �������� �� ���?!');
    }
    else if (Val == "���") {
        alert('� ������� ����� ������ �� �����?');
    }
    else if (Val == "no") {
        alert('�, �� �� ��������� ����������!');
    }
    else if (Val == "No") {
        alert('���, �� ��� �� �������?');
    }
    else {
        alert('���������� ��� ��� :(');
    }
}

function ToTen() {
    var sum = 0;
    var i = 1;
    while (i <= 10) {
        sum += i++;
        alert("�����:" + sum);
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
