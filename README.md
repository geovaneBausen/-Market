# Desenvolvimento de uma Aplicação Web com React  -  刀Market -  

## Funcionalidade

A aplicação web desenvolvida tem como objetivo simular uma **loja virtual**, oferecendo uma interface interativa com funcionalidades de **busca de produtos através da API do Mercado Livre**, **visualização detalhada de itens**, **simulação de envio de um formulário** e **navegação intuitiva**. Todos esses recursos foram implementados utilizando a biblioteca React, garantindo que os usuários possam explorar os produtos de forma eficiente.

### Como a API do Mercado Livre é Utilizada

A aplicação utiliza a API do Mercado Livre para buscar e exibir produtos:

- **Função `fetchProducts`**: Faz uma requisição à API do Mercado Livre para buscar produtos baseados no termo de pesquisa (query), converte a resposta em JSON e retorna a lista de produtos encontrada. Exemplo: `fetchProducts("celular")` retorna os resultados da busca por "celular" no Mercado Livre.
- **Função `fetchItem`**: Faz uma requisição à API do Mercado Livre para obter informações detalhadas sobre um item específico, usando o `itemId` fornecido. Exemplo: `fetchItem("MLB123456")` retorna os detalhes do item com o ID "MLB123456" no Mercado Livre.

![imagem1](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/apiId.png)
![imagem2](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/apiQuery.png)

## Páginas

- **Página Inicial**: Lista de produtos do Mercado Livre.
- **Página de Cadastro**: Permite que usuários simulem um envio de formulário para criação de conta.
- **Página Sobre**: Informações sobre o site e sua proposta.
- **Página de Item**: Detalhes específicos de um produto.
- **Página Não Encontrada**: Mensagem exibida quando a página solicitada não existe.

![imagem2](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/rotas.png)

A aplicação foi estruturada com base em componentes reutilizáveis, organizados em pastas e conectados através do React Router.

## Componentização

O projeto foi estruturado utilizando componentes reutilizáveis, facilitando a manutenção e expansão da aplicação. A divisão em componentes permite que diferentes partes da aplicação sejam desenvolvidas e testadas de forma isolada, promovendo uma arquitetura mais modular e escalável.

![imagem2](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/componentes.png)

## Estilização e Design

A aplicação foi estilizada com CSS Modules, priorizando a responsividade e uma experiência visual moderna. A modularização do CSS garante o escopo local dos estilos, evitando conflitos de nomenclatura e promovendo um desenvolvimento mais organizado. Boas práticas de design foram aplicadas para garantir uma interface intuitiva e funcional em diferentes tamanhos de tela, desde desktops até dispositivos móveis.
*Ipad Mini*
![imagem2](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/ipadMini.png)
*Iphone pro max 14*
![imagem2](https://github.com/geovaneBausen/-Market/blob/main/public/imagens/iphone14Promax.png)
## Hooks e Efeitos

O hook **`useState`** é amplamente utilizado para gerenciar o estado local em vários componentes, incluindo:

- **Busca**: Armazena o termo de busca digitado pelo usuário.
- **Contador**: Mantém o valor do contador e atualiza-o a cada clique no botão.
- **Formulário**: Gerencia os dados do formulário e a lista de usuários submetidos.
- **Cabeçalho**: Controla a visibilidade do menu de navegação.
- **Listagem de Itens**: Armazena itens recebidos da API, itens filtrados e controla o estado de carregamento.

O hook **`useEffect`** é utilizado para:

- **Formulário**: Exibir a tabela de usuários no console após cada atualização da lista de usuários.
- **Listagem de Itens**: Buscar itens da API quando o componente é montado e atualizar os estados com os dados recebidos.

Isso garante que a interface se atualize conforme necessário e mantenha uma experiência de usuário interativa e eficiente.

## Publicação

A aplicação foi publicada na plataforma Vercel, permitindo acessibilidade online para testes e demonstração das funcionalidades. O link para acesso ao projeto está disponível abaixo:

[Link para o projeto](https://seu-link-para-o-projeto.vercel.app)




