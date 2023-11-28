



// botao sair---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


                      // Função para redirecionar para index.html
function redirecionarParaIndex() {
    window.location.href = "index.html#paginaprincipal";
}

// Adicionando evento de clique ao botão dentro do elemento com ID 'secreta'
const botaoSair = document.querySelector('#secreta button');
botaoSair.addEventListener('click', redirecionarParaIndex);









const url = "https://botafogo-atletas.mange.li";
const params = new URLSearchParams(window.location.search);
const atletaID = params.get('id');
// Obter o ID do atleta da URL









const preenche = (atleta) => {
    const container = document.createElement('div');
    container.classList.add('atleta');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');
    const altura = document.createElement('p'); // Novo elemento para altura
    

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    descricao.innerHTML = atleta.descricao;
    altura.innerText = `Altura: ${atleta.altura}m`; // Exemplo de acesso à altura (se existir na API)

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);
    container.appendChild(altura); // Adicionando a altura ao container

    document.body.appendChild(container);
}

const pegarAtletaPorID = async (id) => {
    try {
        const resposta = await fetch(`${url}/${id}`);
        const atleta = await resposta.json();
        preenche(atleta);
    } catch (error) {
        console.error('Ocorreu um erro ao buscar o atleta:', error);
        alert('Ocorreu um erro ao buscar o atleta: ' + error);
    }
};

pegarAtletaPorID(atletaID);
