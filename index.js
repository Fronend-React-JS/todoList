let storedItem = localStorage.getItem("storedItem");

function save() {
    
    let Item = document.getElementById("input").value;
    localStorage.setItem("storedItem", Item);
    document.getElementById("savedText").innerHTML = Item + " SAQLANDI";
}

function get() {
    localStorage.getItem("storedItem");
    document.getElementById("openText").innerHTML = storedItem + "OPEN"
}