document.getElementById("avoid").addEventListener("click", function(event){
    event.preventDefault()
  });
function Calcular (){

    let Massa = document.getElementById("Massa").value;
    let Altura = document.getElementById("Altura").value;
    let IMC = Massa /(Altura * Altura );
    if(Massa == 0){
        document.getElementById("Resultado").innerHTML = "É necessario o preenchimento da massa"
    }
    if(Altura == 0){
        document.getElementById("Resultado").innerHTML = "É necessario o preenchimento da altura"
    }
        else if(IMC <= 16.9) {
        document.getElementById("Resultado").innerHTML = "Muito abaixo do peso";
    }
            else if(IMC <= 18.4 && IMC >= 17) {
        document.getElementById("Resultado").innerHTML = "Abaixo do peso";
    }
            else if(IMC <=24.9 && IMC >=18.5) {
        document.getElementById("Resultado").innerHTML = "Peso normal";
    }
                else if(IMC <= 29.9 && IMC >= 25 ) {
        document.getElementById("Resultado").innerHTML = "Muito abaixo do peso";
    }
                    else if(IMC <= 34.9 && IMC >= 30) {
        document.getElementById("Resultado").innerHTML = "Obesidade grau I";
    }
                        else if(IMC <= 40 && IMC >= 35) {
        document.getElementById("Resultado").innerHTML = "Obesidade grau II";
    }
                             else if(IMC > 40.0) {
        document.getElementById("Resultado").innerHTML = "Obesidade grau III";
    }
}
