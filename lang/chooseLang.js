function setLang(name){
    var texts = window[name];
    for (let elem in texts) {
        document.getElementById(elem).innerHTML = texts[elem];
    }
}

setLang();

var langs = Array.from(document.getElementsByClassName('choose-language'));
langs.forEach(function(item, i, arr){
    item.addEventListener('click', function() {
        setLang(item.id);
    })

})