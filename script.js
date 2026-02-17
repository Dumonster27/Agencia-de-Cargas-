function enviarWhatsApp() {
    const meuNumero = "5514981264900"; 
    
    // Captura os valores
    const nome = document.getElementById('nome').value;
    const whats = document.getElementById('whatsapp').value;
    const doc = document.getElementById('documento').value;
    const veiculo = document.getElementById('veiculo').value;
    const frutas = document.getElementById('experiencia').value;
    const verduras = document.getElementById('verduras').value; // CAMPO NOVO

    // Validação básica
    if (nome === "" || whats === "") {
        alert("Por favor, preencha o nome e o WhatsApp.");
        return;
    }

    // Montagem da mensagem
    const mensagem = `🦅 *NOVO CADASTRO - ÁGUIA DOURADA* %0A%0A` +
                     `👤 *Motorista:* ${nome}%0A` +
                     `📱 *WhatsApp:* ${whats}%0A` +
                     `📄 *Doc/ANTT:* ${doc}%0A` +
                     `🚚 *Veículo:* ${veiculo}%0A` +
                     `🍎 *Frutas:* ${frutas}%0A` +
                     `🥬 *Verduras:* ${verduras}`;

    const url = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${mensagem}`;
    
    window.open(url, '_blank');
}
