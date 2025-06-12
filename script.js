const display = document.getElementById('display');
const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;

        if (valor === 'C') {
            display.value = '';
        }
        
        else if (valor == '←') {
            display.value = display.value.slice(0, -1);
        }

        else if (valor == '='){
            try {
                display.value = eval(display.value.replace(/x/g, '*'));   
            }
            catch (e) {
                display.value = 'error'; 
            }
        }
        
        else {
            display.value += valor;
        }
    });
});
