# Documentação do Projeto

## Componentes

### Busca
- **`fetchProducts`**: Função que busca produtos na API do Mercado Livre com base em uma consulta.
- **`Busca`**: Componente de busca que recebe uma função `onSearch` do componente pai e permite que o usuário digite um termo de pesquisa e envie o formulário para iniciar a busca.

### Listagem de Itens
- **`fetchItem`**: Função que busca informações detalhadas sobre um item específico na API do Mercado Livre.
- **`ItemCard`**: Componente que exibe um único item da lista de produtos, com informações como título, preço, quantidade disponível e link para a página de detalhes.
- **`ListagemDeItens`**: Componente pai que busca itens da API, exibe uma barra de busca e renderiza a lista de itens usando o componente `ItemCard`.

### Menu de Navegação
- **`MenuNav`**: Componente que renderiza o menu de navegação.

### Cabeçalho
- **`Header`**: Componente que contém o logotipo, nome da loja e o botão hambúrguer para abrir o menu de navegação.

### Formulário
- **`Form`**: Componente que renderiza um formulário com campos para entrada de dados do usuário.

### Página de Item
- **`ItemPage`**: Componente que exibe informações detalhadas sobre um item específico, como descrição, atributos e botão de compra.

### Outros Componentes
- **`Botao`**: Componente genérico que representa um botão.
- **`Loading`**: Componente que exibe um ícone de carregamento enquanto os dados estão sendo buscados.

## Organização do Código
- Os componentes são organizados em pastas com base em sua funcionalidade.
- Os componentes são conectados usando o React Router.

## Estilização
- Os componentes são estilizados usando CSS Modules.
- O CSS é modularizado para garantir o escopo local dos estilos e evitar conflitos de nomenclatura.
- As melhores práticas de design são aplicadas para uma interface intuitiva e responsiva.

## Hooks e Efeitos

### Hooks
- **`useState`**: Gerencia o estado local dos componentes (por exemplo, termo de busca, dados do formulário, itens exibidos).
- **`useEffect`**: Executa efeitos colaterais (por exemplo, buscar dados da API quando o componente é montado, exibir usuários no console após a atualização da lista).

### Efeitos
- Buscar itens da API quando a `ListagemDeItens` é montada.
- Exibir a tabela de usuários no console após cada atualização da lista de usuários no formulário.
- Atualizar os estados com os dados recebidos da API.

## Publicação
- O projeto está publicado na plataforma Vercel para acessibilidade online.

## Documentação
- A documentação do projeto está disponível no [GitHub](https://github.com/geovaneBausen).
