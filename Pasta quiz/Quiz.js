document.getElementById("Enviar").addEventListener("click", function(event){
    event.preventDefault()
});

function Nota()
{

    //Analisa se as questões foram preenchidas
    if (Q.Quest1[0].checked == false && 
        Q.Quest1[1].checked == false &&
        Q.Quest1[2].checked == false
        ||
        Q.Quest2[0].checked == false && 
        Q.Quest2[1].checked == false && 
        Q.Quest2[2].checked == false 
        ||
        Q.Quest3[0].checked == false &&
        Q.Quest3[1].checked == false &&
        Q.Quest3[2].checked == false 
        ||
        Q.Quest4[0].checked == false && 
        Q.Quest4[1].checked == false && 
        Q.Quest4[2].checked == false
        ||
        Q.Quest5[0].checked == false &&
        Q.Quest5[1].checked == false &&
        Q.Quest5[2].checked == false){

        alert("Por favor, preencha todas as questões.");
    }
   
    let Q1= parseInt(document.querySelector('input[name="Quest1"]:checked').value);
    let Q2= parseInt(document.querySelector('input[name="Quest2"]:checked').value);
    let Q3= parseInt(document.querySelector('input[name="Quest3"]:checked').value);
    let Q4= parseInt(document.querySelector('input[name="Quest4"]:checked').value);
    let Q5= parseInt(document.querySelector('input[name="Quest5"]:checked').value);

    let Resultado= Q1 + Q2 + Q3 + Q4 + Q5;

    if( Resultado == 5)
    {
        alert ("Muito Bem! 5/5");
    }
    if( Resultado == 4)
    {
        alert("Bom, mas pode melhorar. Sei que você consegue! 4/5");
    }
    if(Resultado == 3)
    {
        alert ("Razoavel, que tal tentar denovo? 3/5");
    }
    if( Resultado == 2)
    {
        alert("Sei que você é capaz! Continue tentando! 2/5");
    }
    if(Resultado == 1)
    {
        alert("Melhore isso vamos vamos! 1/5");
    }
    if(Resultado == 0)
    {
        alert("Não tem problema, tente mais uma vez! 0/5");
    }
}