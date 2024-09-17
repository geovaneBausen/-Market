import style from "./sobre.module.css";
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className={style.container}>
      <div className={style.cardPrincipal}>
        <div className={style.sobrenos}>
          <h2 className={style.subtitulo}>
            DESENVOLVIMENTO DE UMA APLICAÇÃO WEB COM REACT
          </h2>

          {/* Seção "Funcionalidade" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Funcionalidade</h3>
            <p className={style.paragrafo}>
              A aplicação web desenvolvida tem como objetivo simular uma <b>loja virtual</b>, oferecendo uma interface interativa com funcionalidades de <b>busca de produtos através da api do mercado livre</b>, <b>visualização detalhada de itens</b>, <b>simulação de envio de um formulário</b> e <b>navegação intuitiva</b>. Todos esses recursos foram implementados utilizando a biblioteca React, garantindo que os usuários possam explorar os produtos de forma eficiente.
            </p>

            <p className={style.imagemDescricao}>
              Como a API do Mercado Livre é utilizada para buscar e exibir produtos.
            </p>
            <div className={style.imagemContainer}>
              <img src="./imagens/apiQuery.png" alt="API Query" className={style.imagem} />
              <img src="./imagens/apiId.png" alt="API ID" className={style.imagem} />
            </div>

            <p className={style.paragrafo}>
              <b>A função fetchProducts</b> faz uma requisição à API do Mercado Livre para buscar produtos baseados no termo de pesquisa (query), converte a resposta em JSON e retorna a lista de produtos encontrada. Ao ser chamada com um termo, por exemplo, fetchProducts("celular"), ela vai retornar os resultados da busca por "celular" no Mercado Livre.
            </p>
            <p className={style.paragrafo}>
              Já a <b>função fetchItem</b> faz uma requisição à API do Mercado Livre para obter informações detalhadas sobre um item específico, usando o itemId fornecido. Converte a resposta em JSON e retorna os dados do item. Ao ser chamada com um ID de item, por exemplo, fetchItem("MLB123456"), a função retornará os detalhes do item com o ID "MLB123456" no Mercado Livre.
            </p>
          </div>

          {/* Seção "Paginas" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Paginas</h3>
            <p className={style.paragrafo}>
              <strong>Página Inicial:</strong> Lista de produtos do Mercado Livre. <br />
              <strong>Página de Cadastro:</strong> Permite que usuários simulem um envio de formulário para criação de conta. <br />
              <strong>Página Sobre:</strong> Informações sobre o site e sua proposta. <br />
              <strong>Página de Item:</strong> Detalhes específicos de um produto. <br />
              <strong>Página Não Encontrada:</strong> Mensagem exibida quando a página solicitada não existe.
            </p>

            <p className={style.imagemDescricao}>
              A aplicação foi estruturada com base em componentes reutilizáveis, organizados em pastas e conectados através do React Router.
            </p>
            <div className={style.imagemContainer}>
              <img src="./imagens/rotas.png" alt="Rotas" className={style.imagem} />
            </div>
          </div>

          {/* Seção "Componentização" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Componentização</h3>
            <p className={style.paragrafo}>
              O projeto foi estruturado utilizando componentes reutilizáveis, facilitando a manutenção e expansão da aplicação.
            </p>

            <div className={style.imagemContainer}>
              <img src="./imagens/componentes.png" alt="Componentes" className={style.imagem} />
            </div>
          </div>

          {/* Seção "Estilização e Design" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Estilização e Design</h3>
            <p className={style.paragrafo}>
              A aplicação foi estilizada com CSS Modules, priorizando a responsividade e uma experiência visual moderna. A modularização do CSS garante o escopo local dos estilos, evitando conflitos de nomenclatura e promovendo um desenvolvimento mais organizado. Boas práticas de design foram aplicadas para garantir uma interface intuitiva e funcional em diferentes tamanhos de tela, desde desktops até dispositivos móveis.
            </p>
            <div className={style.imagemContainer}>
              <img src="./imagens/iphone14ProMax.png" alt="Iphone 14 ProMax" className={style.imagem} />
              <p className={style.imagemDescricao}>Ipad Mini</p>
              <img src="./imagens/ipadMini.png" alt="Ipad Mini" className={style.imagem} />
              <p className={style.imagemDescricao}>Iphone 14 ProMax</p>
            </div>
          </div>

          {/* Seção "Hooks e Efeitos" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Hooks e Efeitos</h3>
            <p className={style.paragrafo}>
              O hook <b>useState</b> é amplamente utilizado para gerenciar o estado local em vários componentes como:
              <ul className={style.listaSemBolinha}>
                <li><b>Busca</b>: Armazena o termo de busca digitado pelo usuário.</li>
                <li><b>Contador</b>: Mantém o valor do contador e atualiza-o a cada clique no botão.</li>
                <li><b>Formulário</b>: Gerencia os dados do formulário e a lista de usuários submetidos.</li>
                <li><b>Cabeçalho</b>: Controla a visibilidade do menu de navegação.</li>
                <li><b>Listagem de Itens</b>: Armazena itens recebidos da API, itens filtrados e controla o estado de carregamento.</li>
              </ul>
              O hook <b>useEffect</b> é utilizado para:
              <ul className={style.listaSemBolinha}>
                <li><b>Formulário</b>: Exibir a tabela de usuários no console após cada atualização da lista de usuários.</li>
                <li><b>Listagem de Itens</b>: Buscar itens da API quando o componente é montado e atualizar os estados com os dados recebidos.</li>
              </ul>
              Isso garante que a interface se atualize conforme necessário e mantenha uma experiência de usuário interativa e eficiente.
            </p>
          </div>

          {/* Seção "Publicação" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Publicação</h3>
            <p className={style.paragrafo}>
              A aplicação foi publicada na plataforma Vercel, permitindo acessibilidade online para testes e demonstração das funcionalidades. O link para acesso ao projeto está disponível abaixo:
            </p>
            <a href="https://market-rho-one.vercel.app/" className={style.link}>KatanaMarket</a>
          </div>

          {/* Seção "Documentação" */}
          <div className={style.secao}>
            <h3 className={style.tituloSecao}>Documentação</h3>
            <p className={style.paragrafo}>
              O projeto está no GitHub, com instruções para instalação e execução da aplicação.
            </p>
            <div className={style.linkContainer}>
              <Link to="https://github.com/geovaneBausen/-Market/tree/main" target="_blank" rel="noopener noreferrer">
                <Icon icon="fe:github" className={style.githubIcon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
