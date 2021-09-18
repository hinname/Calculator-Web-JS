const limpar = {
  C() {
    document.getElementById("tela").value = 0;
    document.getElementById("lastEntry").innerHTML = "";
  
  },

  CE() {
    document.getElementById("tela").value = 0;
  },
  
  last() {
    //display = document.getElementById("tela").value;
    //display = display.slice(0, -1);
    document.getElementById("tela").value = document.getElementById("tela").value.slice(0, -1);
  
    if(document.getElementById("tela").value === "") {
      document.getElementById("tela").value = 0;
    }
  }
}


function addNum(numero) {
  display = document.getElementById("tela");

  if(display.value === "0") {
    display.value = ""
  }
  
  display.value += numero;
}

function addDot() {
  display = document.getElementById("tela");

  for(char of display.value) {
    if(char === ".") {
      return;
    }
  }

  display.value += ".";
}

function addPosNeg() {
  display = document.getElementById("tela")

  if(display.value === "0") {
    return
  }

  if(display.value[0] === "-"){
    display.value = display.value.slice(1)
    return
  }

  display.value = "-" + display.value;
}

const operation = {
  oneDividedBy() {
    display = document.getElementById("tela")
  
    display.value =  1 / display.value
  },
  
  percentage() {
    display = document.getElementById("tela")
  
    display.value = display.value / 100;
  }
}


