var elList, addLink, newEl, newText, counter, listItems; //변수를 선언한다.

elList = document.getElementById('list'); //목록을 가져온다
addLink = document.querySelector('a'); //아이템을 추가하는 버튼을 가져온다
counter = document.getElementById('counter'); //아이템의 개수를 출력할 요소를 가져온다

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = list.getElementByTagName('li').length;
    counter.innerHTML = listitems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);