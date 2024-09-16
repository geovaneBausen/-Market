import { useState } from "react";
import style from "./sobre.module.css";

function Sobre() {
  return (
    <div className={style.container}>
      <div className={style.cardPrincipal}>
        <div className={style.sobrenos}>
          <div>
            <h2 className={style.subtitulo}>
              DESENVOLVIMENTO DE UMA APLICAÇÃO WEB COM REACT
            </h2>

            {/* Seção "Funcionalidade" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Funcionalidade</h3>
              <p className={style.paragrafo}>
                A aplicação web desenvolvida tem como objetivo simular uma <b>loja virtual</b>, oferecendo uma interface interativa com funcionalidades de <b>busca de produtos da api do mercado livre</b>, <b>visualização detalhada de itens</b>, <b>simulação de envio de um formulário</b> e <b>navegação intuitiva</b>. Todos esses recursos foram implementados utilizando a biblioteca React, garantindo que os usuários possam explorar os produtos de forma eficiente.
              </p>

              <div className={style.imagemContainer}>
                <p className={style.imagemDescricao}>
                  Como a API do Mercado Livre é utilizada para buscar e exibir produtos.
                </p>
                <img src="./imagens/apiQuery.png" alt="Logo" className={style.imagem} />
                <img src="./imagens/apiid.png" alt="Logo" className={style.imagem} />

              </div>

            </div>

            {/* Paginas*/}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Paginas</h3>
              <p className={style.paragrafo}>
                <strong>Página Inicial:</strong> Lista de produtos do Mercado Livre. <br />
                <strong>Página de Cadastro:</strong> Permite que usuários simulem um envio de formulário para criação de conta. <br />
                <strong>Página Sobre:</strong> Informações sobre o site e sua proposta. <br />
                <strong>Página de Item:</strong> Detalhes específicos de um produto. <br />
                <strong>Página Não Encontrada:</strong> Mensagem exibida quando a página solicitada não existe.
              </p>

              <div className={style.imagemContainer}>
                <p className={style.imagemDescricao}>
                  A aplicação foi estruturada com base em componentes reutilizáveis, organizados em pastas e conectados através do React Router.
                </p>
                <img src="./imagens/rotas.png" alt="Logo" className={style.imagem} />

              </div>

            </div>

            {/* Seção "Componentização" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Componentização</h3>
              <p className={style.paragrafo}>
                O projeto foi estruturado utilizando componentes reutilizáveis, facilitando a manutenção e expansão da aplicação.
              </p>

              <div className={style.imagemContainer}>

                <img src="./imagens/componentes.png" alt="Logo" className={style.imagem} />

              </div>
            </div>

            {/* Seção "Estilização e Design" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Estilização e Design</h3>
              <p className={style.paragrafo}>
                A aplicação foi estilizada com CSS Modules, priorizando a responsividade e uma experiência visual moderna. A modularização do CSS garante o escopo local dos estilos, evitando conflitos de nomenclatura e promovendo um desenvolvimento mais organizado. Boas práticas de design foram aplicadas para garantir uma interface intuitiva e funcional em diferentes tamanhos de tela, desde desktops até dispositivos móveis.
              </p>
              <div className={style.imagemContainer}>

                <img src="./imagens/componentes.png" alt="Logo" className={style.imagem} />

              </div>
            </div>

            {/* Seção "Gerenciamento de Estado" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Gerenciamento de Estado</h3>
              <p className={style.paragrafo}>
                O gerenciamento de estado foi feito utilizando o hook <b>useState</b> do React, permitindo que a interface responda dinamicamente às ações dos usuários. Arrays de objetos, representando os produtos, são manipulados e atualizados conforme o usuário interage com a aplicação. Esse gerenciamento eficiente do estado garante que as informações exibidas estejam sempre atualizadas.
              </p>
            </div>

            {/* Seção "Publicação" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Publicação</h3>
              <p className={style.paragrafo}>
                A aplicação foi publicada na plataforma Vercel, permitindo acessibilidade online para testes e demonstração das funcionalidades. O link para acesso ao projeto está disponível abaixo:
              </p>
              <a href="https://api.mercadolibre.com/sites/MLB/search?q=livro">
                https://api.mercadolibre.com/sites/MLB/search?q=livro
              </a>
            </div>

            {/* Seção "Documentação" */}
            <div className={style.secao}>
              <h3 className={style.tituloSecao}>Documentação</h3>
              <p className={style.paragrafo}>
                O projeto está devidamente documentado no GitHub, com instruções claras para instalação e execução da aplicação. Além disso, o código-fonte está bem organizado, com comentários explicativos e arquivos bem estruturados, garantindo a facilidade de compreensão e manutenção.
              </p>
              <p className={style.paragrafo}>
                Data de Entrega: a definir. Formato de Entrega: Repositório no GitHub com o código da aplicação, instruções de execução, link para a aplicação publicada e o arquivo .zip do source enviado via AVA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
