const limpar = {
  C() {
    document.getElementById("tela").value = 0;
    document.getElementById("lastEntry").innerHTML = "";
    document.getElementById("operation").innerHTML = "";

    operation.sinal = ""
  
  },

  CE() {
    document.getElementById("tela").value = 0;
  },
  
  last() {
    //display = document.getElementById("tela").value;
    //display = display.slice(0, -1);
    document.getElementById("tela").value = document.getElementById("tela").value.slice(0, -1);
  
    if(document.getElementById("tela").value === "" || document.getElementById("tela").value === "-") {
      document.getElementById("tela").value = 0;
    }
  }
}

const add = {
  num(numero) {
    display = document.getElementById("tela");
  
    if(display.value === "0") {
      display.value = ""
    }
    
    display.value += numero;
  },

  dot() {
    display = document.getElementById("tela");
  
    for(char of display.value) {
      if(char === ".") {
        return;
      }
    }
  
    display.value += ".";
  },
  posNeg() {
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
}

const operation = {

  sinal: "",
  
  oneDividedBy() {
    display = document.getElementById("tela")
  
    display.value =  1 / display.value
  },
  
  percentage() {
    display = document.getElementById("tela")
  
    display.value = display.value / 100;
  },

  squared() {
    display = document.getElementById("tela")

    display.value = Math.pow(display.value, 2);
  },

  squareRooted() {
    display = document.getElementById("tela")

  
    display.value = Math.pow(display.value, 1/2);
  
    if(display.value === "NaN") {
      alert("Não é possível fazer raiz quadrada de número negativo")
      display.value = 0;
    }
    
  },

  equal() {
    display = document.getElementById("tela")

    result = document.getElementById("lastEntry").innerHTML + this.sinal + display.value

    display.value = eval(result)
    
    document.getElementById("lastEntry").innerHTML = "";
    document.getElementById("operation").innerHTML = "";
    this.sinal = ""
  },

  basics(sinal) {
    display = document.getElementById("tela")

    if(this.sinal != "") {
      alert("Operação já selecionada! CLique no igual para o resultado")
      return
    }
    
    this.sinal = sinal
    document.getElementById("lastEntry").innerHTML += display.value;
    document.getElementById("operation").innerHTML += this.sinal

    limpar.CE()
  }
}


