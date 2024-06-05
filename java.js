let lastScrollTop = 0;
const header = document.getElementById('header');
const threshold = 50;

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) > threshold) {
        header.classList.remove('#hidden');
    } else {
        header.classList.add('#hidden');
    }

    lastScrollTop = scrollTop;
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


function calcular(){
    var ancho = document.getElementById('ancho').value;
    var alto = document.getElementById('alto').value;

    if(ancho !== '' && alto !==''){
        var bmi = ancho / ((alto/100)**2);
        var total = document.getElementById('total');
        total.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);


        if(bmi < 18.5){
            total.innerHTML += ' - Bajo de Peso';
        }else if(bmi < 25){
            total.innerHTML += ' - Peso Normal';
        }else if(bmi < 30){
            total.innerHTML += ' - Sobrepeso';
        }else{
            total.innerHTML += ' - Obesidad';
        }
    }
}

function openMenuUno(evt, bebidaname) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(bebidaname).style.display = "block";
    evt.currentTarget.className += " active";
}

function openMenudos(evt, bebidaname1) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(bebidaname1).style.display = "block";
    evt.currentTarget.className += " active";
}

function openMenuTres(evt, bebidanamedos) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(bebidanamedos).style.display = "block";
  evt.currentTarget.className += " active";
}

function supreme() {
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}