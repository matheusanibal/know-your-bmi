function meuEscopo() {
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const calculo = document.getElementById('calculo')
    
    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const altura2 = (altura.value * altura.value)/10000 ;
        let IMC = peso.value/altura2
        let texto;
        if (IMC < 18.5)  {
            texto = ('Você está abaixo do peso')
        } else if (IMC >= 18.5 && IMC <= 24.9){
            texto = ('Peso normal')
        } else if (IMC >= 25 && IMC <= 29.9){
            texto = ('Sobre peso')
        } else if (IMC >= 30 && IMC <= 34.9){
            texto = ('Cuidado, você está em obesidade grau 1')
        }
        else if (IMC >= 35 && IMC <= 39.9){
            texto = ('Você está em obesidade grau 2')
        }
        else if (IMC >= 40){
            texto = ('Você está em obesidade grau 3')
        }
        let result = {
            peso: peso.value,
            altura: altura.value
        }
        console.log(result);
        console.log(IMC);
        calculo.innerHTML = `IMC = ${IMC.toFixed(2)}. ${texto}.`;
          
    }
    document.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
