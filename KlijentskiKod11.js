var i = 0;
function change() {
    var doc = document.getElementById("background");
    var color = ["lightyellow", "lightgreen", "lightblue", "aquamarine"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 1000);


function myFunction() {
    alert("Welcome!");
}


function changeText() {
    var p1 = document.getElementById("p1");
    var id1 = p1.id;
    p1.style.backgroundColor = "white";
    p1.style.fontSize = "30px";
    p1.innerHTML = "Text has changed!";
}

var slika = document.getElementById("img1");
slika.onmouseover = function () {
    img1.src = "do.jpg"
}

function selectGender() {
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var poruka = document.getElementById("span1");
    if (r1.checked) {
        poruka.innerHTML = "Selected Gender: Male";
    }
    else if (r2.checked) {
        poruka.innerHTML = "Selected Gender: Female";
    }
    else {
        poruka.innerHTML = "You didn't select Gender!";
    }
}

var p2 = document.getElementById("p2");
function newLocation() {
    window.location.assign("novastrana.html")
}
function nazad() {
    window.history.back()
}

function showInput() {
    var inputValue1 = document.getElementById("TextIme").value;
    var inputValue2 = document.getElementById("TextPrezime").value;
    var inputValue3 = document.getElementById("FavouriteAnimal").value;
    document.getElementById("output").innerHTML = inputValue1 + "<br>" + inputValue2 + "<br>" + inputValue3;

}



