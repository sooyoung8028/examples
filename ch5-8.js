fruits.forEach(function(fruit) {
    var $li = document.createElement("li");
    $li.innerText = fruit;
    $li.addEventListener('click', alertfruit.bind(null, fruit));
    $ul.appendChild($li);
});
