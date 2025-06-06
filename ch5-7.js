var alertfruit = function() {
    alert('your choice is ' + this.fruit);
};
fruits.forEach(function(fruit) {
    var $li = document.createElement("li");
    $li.innerText = fruit;
    $li.addEventListener("click", alertfruit);
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertfruit(fruits[1]); 
