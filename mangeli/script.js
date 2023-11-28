
console.log("O arquivo script.js está sendo carregado.");
// gerenciamento da pagina login para principal---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if (localStorage.getItem('coiso')){
    document.getElementById('secreta').style.display = 'block';
    document.getElementById('container-entrada').style.display = 'none';
} else {
    document.getElementById('secreta').style.display = 'none';
    document.getElementById('paginaprincipal').style.display = 'none';
    document.getElementById('containerAtletas').style.display = 'none';
    document.getElementById('containerAtletas2').style.display = 'none';
    document.getElementById('containerAtletas3').style.display = 'none';
    document.getElementById('teste').style.display = 'none';
    document.getElementById('botoesContainer').style.display = 'none';
    document.getElementById('espacamento').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('parteoculta').style.display = 'block';
}




const verificaSenha = () => {
    console.log("verifica senha.");
    const entrada = document.getElementById("entrada").value;
    const senha = '7c696c1d197c5a7a6a5fd485c352d565';

    if (hex_md5(entrada) === senha){
        localStorage.setItem('coiso', 'qualquer valor');
        window.location.reload(true);
    } else {
        alert('Senha incorreta!');
    }
}

const limpaCoiso = () => {
    localStorage.removeItem('coiso');
    window.location.reload(true);
}

// definição de constantes gerais---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const containerAtletas = document.getElementById('containerAtletas');
const containerAtletas2 = document.getElementById('containerAtletas2');
const containerAtletas3 = document.getElementById('containerAtletas3');


const botoesContainer = document.getElementById('botoesContainer')
const meuBotao = document.getElementById('meuBotao');
const meuBotao2 = document.getElementById('meuBotao2');
const meuBotao3 = document.getElementById('meuBotao3');


const endpointMasculino = 'https://botafogo-atletas.mange.li/masculino';
const endpoint = 'https://botafogo-atletas.mange.li/feminino';
const endpoint3 = 'https://botafogo-atletas.mange.li/all';




// botão 3 em 1---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {
    $('#meuBotao4').on('click', function() {
      $('#botoesContainer').toggleClass('escondido');
    });
  
    $('#botoesContainer button').on('click', function() {
      $('#botoesContainer').addClass('escondido');
    });
  });
  $(document).ready(function() {
    $('#meuBotao4').on('click', function() {
      $(this).toggleClass('clicado');
    });
  });



// atletas femea-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchAtletas = async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        data.forEach(atleta => {
            const divAtleta = document.createElement('div');
            divAtleta.classList.add('atleta');

            const imagemAtleta = document.createElement('img');
            imagemAtleta.src = atleta.imagem;
            imagemAtleta.alt = `Foto de ${atleta.nome}`;

            const nomeAtleta = document.createElement('p');
            nomeAtleta.innerText = atleta.nome;

            const botaoAtleta = document.createElement('button');
            botaoAtleta.innerText = 'Detalhe'; // Texto do botão (defina o texto desejado)
            botaoAtleta.setAttribute('data-id', atleta.id); // Define o atributo data-id com o ID do atleta





            botaoAtleta.addEventListener('click', () => {
                const atletaID = botaoAtleta.getAttribute('data-id');
                window.location.href = `detalhes.html?id=${atletaID}`;
            });



            

            divAtleta.appendChild(imagemAtleta);
            divAtleta.appendChild(nomeAtleta);
            divAtleta.appendChild(botaoAtleta);

            containerAtletas.appendChild(divAtleta);
        });
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados dos atletas:', error);
        alert('Ocorreu um erro ao buscar os dados dos atletas: ' + error);
    }
        
        meuBotao.removeEventListener('click', fetchAtletas);
};


const limparDadosAtletas = () => {
    const containerAtletas = document.getElementById('containerAtletas'); 
    const atletas = containerAtletas.querySelectorAll('.atleta'); // Assume que os elementos dos atletas têm a classe 'atleta'

    atletas.forEach(atleta => {
        atleta.remove(); // Remove o conteúdo específico de cada atleta dentro do contêiner
    });
};

meuBotao.addEventListener('click', function() {
    limparDadosAtletas();
    limparDadosAtletas2();
    limparDadosAtletas3(); // Limpa apenas os dados dos atletas
    fetchAtletas(); // Chama a função para buscar novos dados
});






// atletas macho---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const fetchAtletasMasculinos = async () => {
      try {
          const response = await fetch(endpointMasculino);
          const data = await response.json();
  
          data.forEach(atleta => {
              const divAtleta = document.createElement('div');
              divAtleta.classList.add('atleta');
  
              const imagemAtleta = document.createElement('img');
              imagemAtleta.src = atleta.imagem;
              imagemAtleta.alt = `Foto de ${atleta.nome}`;
  
              const nomeAtleta = document.createElement('p');
              nomeAtleta.innerText = atleta.nome;
  
              const botaoAtleta = document.createElement('button');
              botaoAtleta.innerText = 'Detalhe'; // Texto do botão (defina o texto desejado)
              botaoAtleta.setAttribute('data-id', atleta.id); // Define o atributo data-id com o ID do atleta





              

              botaoAtleta.addEventListener('click', () => {
                const atletaID = botaoAtleta.getAttribute('data-id');
                window.location.href = `detalhes.html?id=${atletaID}`;
            });



  
              divAtleta.appendChild(imagemAtleta);
              divAtleta.appendChild(nomeAtleta);
              divAtleta.appendChild(botaoAtleta);
  
              containerAtletas2.appendChild(divAtleta);
          });
      } catch (error) {
          console.error('Ocorreu um erro ao buscar os dados dos atletas:', error);
          alert('Ocorreu um erro ao buscar os dados dos atletas: ' + error);
      }
          
      meuBotao2.removeEventListener('click', fetchAtletasMasculinos);
  };
  
  
  
  const limparDadosAtletas2 = () => {
    const containerAtletas2 = document.getElementById('containerAtletas2'); 
    const atletas = containerAtletas2.querySelectorAll('.atleta'); // Assume que os elementos dos atletas têm a classe 'atleta'

    atletas.forEach(atleta => {
        atleta.remove(); // Remove o conteúdo específico de cada atleta dentro do contêiner
    });
};

meuBotao2.addEventListener('click', function() {
    limparDadosAtletas();
    limparDadosAtletas2();
    limparDadosAtletas3(); // Limpa apenas os dados dos atletas
    fetchAtletasMasculinos(); // Chama a função para buscar novos dados
});
  





// atletas todos---------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
const fetchAtletas3 = async () => {
    try {
        const response = await fetch(endpoint3);
        const data = await response.json();

        data.forEach(atleta => {
            const divAtleta = document.createElement('div');
            divAtleta.classList.add('atleta');

            const imagemAtleta = document.createElement('img');
            imagemAtleta.src = atleta.imagem;
            imagemAtleta.alt = `Foto de ${atleta.nome}`;
            

            const nomeAtleta = document.createElement('p');
            nomeAtleta.innerText = atleta.nome;

            const botaoAtleta = document.createElement('button');
            botaoAtleta.innerText = 'Detalhe'; // Texto do botão (defina o texto desejado)
            botaoAtleta.setAttribute('data-id', atleta.id); // Define o atributo data-id com o ID do atleta

            botaoAtleta.addEventListener('click', () => {
                const atletaID = botaoAtleta.getAttribute('data-id');
                window.location.href = `detalhes.html?id=${atletaID}`;
            });

            divAtleta.appendChild(imagemAtleta);
            divAtleta.appendChild(nomeAtleta);
            divAtleta.appendChild(botaoAtleta);

            containerAtletas3.appendChild(divAtleta);
        });
    } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados dos atletas:', error);
        alert('Ocorreu um erro ao buscar os dados dos atletas: ' + error);
    }
    meuBotao3.removeEventListener('click', fetchAtletas3);
};





const limparDadosAtletas3 = () => {
    const containerAtletas3 = document.getElementById('containerAtletas3');
    const atletas = containerAtletas3.querySelectorAll('.atleta'); // Assume que os elementos dos atletas têm a classe 'atleta'

    atletas.forEach(atleta => {
        atleta.remove(); // Remove o conteúdo específico de cada atleta dentro do contêiner
    });
};

meuBotao3.addEventListener('click', function() {
    limparDadosAtletas();
    limparDadosAtletas2();
    limparDadosAtletas3(); // Limpa apenas os dados dos atletas
    fetchAtletas3(); // Chama a função para buscar novos dados
});









