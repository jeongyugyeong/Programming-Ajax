function query() {
    var ret = confirm("go to naver?");
    return ret;
}

function noAction(e) {
    e.preventDefault();
}

var link = document.getElementById('link');
link.addEventListener('click', query, false);
var no_Action = document.getElementById('no_action');
no_Action.addEventListener('click', noAction, false);
