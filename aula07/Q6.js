let opcao;
do {
    opcao = prompt('Digite uma opção:\n1 - Olá\n2 - Data atual\n3 - Seu nome\nsair - Encerrar');
    switch (opcao) {
        case '1':
            console.log('Olá!');
            break;
        case '2':
            console.log('08/10/2025');
            break;
        case '3':
            let nome = prompt('Digite seu nome:');
            console.log('Seu Nome é: ' + nome);
            break;
        case 'sair':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida.');
    }
} while (opcao !== 'sair');