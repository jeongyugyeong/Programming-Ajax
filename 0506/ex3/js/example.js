var table = 3; //계산에 사용될 숫자
var operator = 'operator'; //계산의 종류
var i = 1; //카운터 변수에 1을 설정한다.
var msg = ''; //메세지

// fuction choice() {
//     if(confirm('덧셈을 할까요?')) {
//         return 'addition';
//     }else {
//         return 'operator';
//     }
// }

if (operator === 'addiction') {
    //덧셈을 수행한다.
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
        i++;
    }
} else {
    //곱셈을 수행한다.
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }
}

//페이지에 메세지를 출력한다.
var el = document.getElementById('blackboard');
el.innerHTML = msg;
