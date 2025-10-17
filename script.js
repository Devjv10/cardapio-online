const carrinho = [];
const numeroWhatsApp = "5583987073314";
//  Produtos:
/* const produtos = [
    { id: 1, nome: "DUPLO PICANHA", preco: 22.00, imagem: "img/duplo-picanha.png" },
    { id: 2, nome: "CHEDDAR EM DOBRO", preco: 18.00, imagem: "img/cheddar.png" },
    { id: 3, nome: "X-SALADA", preco: 16.00, imagem: "img/x-salada.png" },
    { id: 4, nome: "EGG BURGUER", preco: 14.00, imagem: "img/egg-burguer.png" },
   
] */

/*  let botoes = document.querySelectorAll('.adicionar-carrinho')
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        
    });
});
function total(){
    valorTotalElemento.value

}   */
/*  let botoes = document.querySelectorAll('.adicionar-carrinho')
const listaPedido = document.getElementById("lista-pedido");
const valorTotalElemento = document.getElementById("valor-total");
const finalizarCompraBtn = document.getElementById("finalizar-compra");

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const item = botao.parentElement;
        const nome = item.querySelector('h2').textContent;
        const precoTexto = item.querySelector('.preco').textContent;
        const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));

        // Adiciona na lista do carrinho
        const li = document.createElement('li');
        li.textContent = `${nome} - R$${preco.toFixed(2)}`;
        listaPedido.appendChild(li);

        // Atualiza total
        total += preco;
        valorTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
          // Mostra botão finalizar
        if(total > 0){
            btnFinalizar.style.display = 'block';
        }
    });
}); */
const botoes = document.querySelectorAll('.adicionar-carrinho');
const listaPedido = document.getElementById('lista-pedido');
const valorTotal = document.getElementById('valor-total');
const btnFinalizar = document.getElementById('finalizar-compra');

let total = 0;
let itensCarrinho = [];

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const item = botao.parentElement;
        const nome = item.querySelector('h2').textContent;
        const precoTexto = item.querySelector('.preco').textContent; // 
        const preco = parseFloat(precoTexto.replace('R$', ''));

        // Adiciona na lista visual
        const li = document.createElement('li');
        li.textContent = `${nome} - R$${preco.toFixed(2)}`;
        listaPedido.appendChild(li);

        // Atualiza total
        total += preco;
        valorTotal.textContent = `R$ ${total.toFixed(2)}`;

        
        itensCarrinho.push({ nome, preco });

         
        btnFinalizar.style.display = 'block';
    });
});
btnFinalizar.addEventListener('click', () => {
    if (itensCarrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
}

    
    let mensagem = '🍔 *NOVO PEDIDO DE CARDÁPIO WEB* 🍔\n\n*Itens:*\n';
    let totalPedido = 0;


   
    const contagemItens = itensCarrinho.reduce((acc, item) => {
        
        acc[item.nome] = (acc[item.nome] || 0) + 1;
        return acc;
    }, {});
    
    // 2. Montar a lista de itens e calcular o total
    Object.keys(contagemItens).forEach(nomeItem => {
        const quantidade = contagemItens[nomeItem];
        
        // Encontra o preço do item (apenas um no carrinho)
        const itemUnico = itensCarrinho.find(item => item.nome === nomeItem);
        const itemPreco = itemUnico ? itemUnico.preco : 0;

        const subtotal = quantidade * itemPreco;
        totalPedido += subtotal;
        
        const precoFormatado = itemPreco.toFixed(2).replace('.', ',');
        mensagem += `* ${quantidade}x ${nomeItem} (R$ ${precoFormatado} cada)\n`;
    });

    const totalFormatado = totalPedido.toFixed(2).replace('.', ',');
    mensagem += `\n*TOTAL DO PEDIDO: R$ ${totalFormatado}*`;
    mensagem += `\n\n_Por favor, informe seu endereço e forma de pagamento._`;
    
    // 3. Codificar a mensagem e montar o link
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${5583987073314}?text=${mensagemCodificada}`;
    
    // 4. Abrir o WhatsApp
    window.open(linkWhatsApp, '_blank');

})