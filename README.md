# Projeto de Template React

Este é um projeto de template configurado com as principais bibliotecas para o desenvolvimento de uma aplicação React moderna e escalável. Este template inclui gerenciamento de estado, rotas, e uma configuração opcional com **Tailwind CSS** para estilização.

## Stack Principal

-   **React**: Biblioteca para criação de interfaces de usuário.
-   **Tanstack React Query**: Gerenciamento de estado assíncrono e cache de dados do servidor.
-   **Tanstack React Router**: Gerenciamento de rotas declarativo no React.
-   **Axios**: Cliente HTTP para realizar requisições à API.
-   **Vite**: Ferramenta de build rápida e otimizada para desenvolvimento front-end.
-   **Tailwind CSS**: Framework de estilização utilitário para configuração rápida de CSS (opcional).

## Funcionalidades

-   Gerenciamento de estado de dados do servidor com React Query.
-   Gerenciamento de rotas com Tanstack React Router.
-   Configuração pronta para consumir APIs com Axios.
-   Configuração de **ESLint** com plugins específicos para React e TypeScript.
-   Suporte a TypeScript para uma tipagem estática.
-   Configuração opcional de **Tailwind CSS** para estilização.

## Estrutura de Pastas

```plaintext
src/
├── assets/             # Arquivos de imagem, ícones, etc...
├── components/         # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── routes/             # Configuração das rotas com React Router
├── services/
│   ├── api/            # Configuração da instância do Axios
│   ├── constants/      # Constantes do projeto
│   ├── hooks/          # Hooks customizados
│   ├── types/          # Tipagens e objetos Zod
│   └── utils/          # Funções utilitárias do projeto

```

## Bibliotecas e Plugins

### Dependências

-   **@tanstack/react-query**: `^5.59.19`
-   **@tanstack/react-router**: `^1.78.3`
-   **axios**: `^1.7.7`
-   **react**: `^18.3.1`
-   **react-dom**: `^18.3.1`

### Dependências de Desenvolvimento

-   **@vitejs/plugin-react-swc**: `^3.5.0`
-   **autoprefixer**: `^10.4.20`
-   **eslint**: `^9.13.0`
-   **eslint-plugin-react-hooks**: `^5.0.0`
-   **postcss**: `^8.4.47`
-   **tailwindcss**: `^3.4.14`
-   **typescript**: `~5.6.2`

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests. Toda contribuição é bem-vinda!
