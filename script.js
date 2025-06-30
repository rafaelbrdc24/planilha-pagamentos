document.addEventListener('DOMContentLoaded', () => {
    const aluguelInput = document.getElementById('aluguel');
    const cartaoItauInput = document.getElementById('cartaoItau');
    const internetInput = document.getElementById('internet');
    const aguaInput = document.getElementById('agua');
    const luzInput = document.getElementById('luz');
    const gasInput = document.getElementById('gas');
    const ativarGasCheckbox = document.getElementById('ativarGas');
    const cartaoCreditoInput = document.getElementById('cartaoCredito');
    const calcularBtn = document.getElementById('calcular');
    const limparBtn = document.getElementById('limpar');
    const totalGastosSpan = document.getElementById('totalGastos');

    // Função para calcular o total
    function calcularTotal() {
        let total = 0;

        // Soma os valores dos campos
        total += parseFloat(aluguelInput.value) || 0;
        total += parseFloat(cartaoItauInput.value) || 0;
        total += parseFloat(internetInput.value) || 0;
        total += parseFloat(aguaInput.value) || 0;
        total += parseFloat(luzInput.value) || 0;
        total += parseFloat(cartaoCreditoInput.value) || 0;

        // Adiciona o valor do gás somente se o checkbox estiver marcado e o campo não estiver desabilitado
        if (ativarGasCheckbox.checked && !gasInput.disabled) {
            total += parseFloat(gasInput.value) || 0;
        }

        // Atualiza o display do total
        totalGastosSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Função para limpar os campos e resetar o total
    function limparCampos() {
        aluguelInput.value = '400';
        cartaoItauInput.value = '100';
        internetInput.value = '100';
        aguaInput.value = '0';
        luzInput.value = '0';
        gasInput.value = '120';
        ativarGasCheckbox.checked = false; // Desmarca o checkbox
        gasInput.disabled = true; // Desabilita o campo de gás
        cartaoCreditoInput.value = '0';
        totalGastosSpan.textContent = 'R$ 0,00';
    }

    // Event Listener para o checkbox de Gás
    ativarGasCheckbox.addEventListener('change', () => {
        if (ativarGasCheckbox.checked) {
            gasInput.disabled = false; // Habilita o campo
        } else {
            gasInput.disabled = true; // Desabilita o campo
            gasInput.value = '120'; // Opcional: reseta o valor para o padrão ao desabilitar
        }
        calcularTotal(); // Recalcula o total quando o status do gás muda
    });

    // Event Listeners para os botões
    calcularBtn.addEventListener('click', calcularTotal);
    limparBtn.addEventListener('click', limparCampos);

    // Event Listeners para recalcular o total ao digitar nos campos
    // Usamos 'input' para capturar mudanças em tempo real
    aluguelInput.addEventListener('input', calcularTotal);
    cartaoItauInput.addEventListener('input', calcularTotal);
    internetInput.addEventListener('input', calcularTotal);
    aguaInput.addEventListener('input', calcularTotal);
    luzInput.addEventListener('input', calcularTotal);
    gasInput.addEventListener('input', calcularTotal);
    cartaoCreditoInput.addEventListener('input', calcularTotal);

    // Inicializa o cálculo ao carregar a página para mostrar os valores padrão
    calcularTotal();
});