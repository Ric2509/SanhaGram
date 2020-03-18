var sel1 = 1
var sel2 = 1
var sel3 = 1
var s = [];
var s1 = [];
var s2 = [];
var topoconversa = document.createElement("div");
var chat = document.createElement("div");
var fundoconversa = document.createElement("div");

function selecionastarred() {
    var a = document.getElementsByClassName("far fa-star estrelinha1")
    var i;
    var selconv = a.length;
    if (sel1 == 1) {
        document.getElementById('estrelinha').className = "fas fa-star";

        for (i = 0; i < selconv; i++) {
            if (a[i].parentElement.getAttribute("h") == "0") {

                a[i].parentElement.style.height = "0%";
                a[i].parentElement.style.marginBottom = "0%";
                a[i].parentElement.style.opacity = "0";
                a[i].parentElement.style.visibility = "hidden";
                a[i].parentElement.setAttribute("h", "1");
            }
        }
        sel1 = 0;
    }
    else {
        document.getElementById('estrelinha').className = "far fa-star";
        var l = document.getElementsByClassName('textarea');
        l[0].value = "";
        for (i = 0; i < selconv; i++) {
            if (a[i].parentElement.getAttribute("h") == "1") {
                a[i].parentElement.style.height = "8%";
                a[i].parentElement.style.marginBottom = "2%";
                a[i].parentElement.style.opacity = "1";
                a[i].parentElement.style.visibility = "visible";
                a[i].parentElement.setAttribute("h", "0");
            }
        }
        selecionatext(l[0]);
        sel1 = 1;
    }
}

function selecionatext(valor) {
    var a = document.getElementsByClassName("textocorpo");
    var b = document.getElementsByClassName("textocorpo1")
    var i;
    var selconv = a.length;

    for (i = 0; i < selconv; i++) {
        if (a[i].innerText != "") {
            s1[i] = b[i].innerText.toLowerCase();
            s[i] = a[i].innerText.toLowerCase();
        }
        if ((s[i].startsWith(valor.value.toLowerCase()) || (s1[i].startsWith(valor.value.toLowerCase()))) && (a[i].parentElement.getAttribute("h") == "0")) {
            a[i].parentElement.style.height = "8%";
            a[i].parentElement.style.marginBottom = "2%";
            a[i].parentElement.style.opacity = "1";
            a[i].parentElement.style.visibility = "visible";
            a[i].parentElement.setAttribute("p", "0");
        }
        else if (!s[i].startsWith(valor.value.toLowerCase()) && (a[i].parentElement.getAttribute("h") == "0")) {
            a[i].parentElement.style.height = "0%";
            a[i].parentElement.style.marginBottom = "0%";
            a[i].parentElement.style.opacity = "0";
            a[i].parentElement.style.visibility = "hidden";
            a[i].parentElement.setAttribute("p", "1");
        }
    }

}

function selecionastarred1(valor) {
    if (sel3 == 1) {
        valor.className = "fas fa-star estrelinha1";
        sel3 = 0;
    }
    else {
        valor.className = "far fa-star estrelinha1";
        sel3 = 1;
    }
}


function minimizatela(valor) {
    if (sel2 == 1) {
        document.getElementById("conversas").style.height = "0%";
        sel2 = 0;
    }
    else {
        document.getElementById("conversas").style.height = "100%";
        sel2 = 1;
    }
}

function mostrarconversa(valor) {
    var a = document.getElementsByClassName("corpoconversa");
    var b = document.getElementsByClassName("corpoconversa active");
    var c = document.getElementById("chat");

    var i;
    var j;
    var selconv = a.length;
    var selconv1 = b.length;
    if (valor == b[0]) {

    }
    else {
        for (j = 0; j < selconv1; j++) {
            if (b[j] != valor) {
                b[j].className = "corpoconversa desactive";
            }
        }
        for (i = 0; i < selconv; i++) {
            if (a[i] == valor) {
                a[i].className = "corpoconversa active";
            }
        }
    }
    topoconversa.position="relative";
    topoconversa.width="1229px";
    topoconversa.height="11%";
    topoconversa.background ="red";
    c.appendChild(topoconversa);
}

