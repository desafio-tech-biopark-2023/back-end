## Desafio Tech - Biopark 2023

## 💻 Sobre o projeto

Esse desafio teve como proposta desenvolver um sistema para facilitar a gestao dos apartamentos entregues no ecossistema Biopark.

O sistema foi baseado nos requisitos e premissas apresentadas pelos criadores do desafio.

- O sistema permite cadastrar edifícios e apartamentos
- O sistema permite visualizar a disponibilidade dos apartamentos
- É possível alugar um apartamento para um locatário
- É possível visualizar o locatário do apartamento

Foram adicionados os seguintes extras:

- É possível se cadastrar como pessoa física e jurídica em ambos os casos(Locador ou Locatário) 
- Visualização de dados sobre os alugueis como valor, pessoa que alugou, prazo de início e termino de contrato e o apartamento alugado.


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [ReactJS]()
- [NodeJS]()
- [Typescript]()
- [Express]()
- [PostgreSQL]()
- [Vercel]()
- [Git]()
- [Github]()

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado o [Git](https://git-scm.com) em sua máquina. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a API localmente na sua máquina (Back End)

```bash
# Clone este repositório
$ git clone https://github.com/desafio-tech-biopark-2023/back-end.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd back-end

# Crie um banco de dados PostgreSQL em sua máquina com o nome de sua preferência

### Após clonar o repositorio para a sua maquina, é preciso adicionar um arquivo chamado .env e colocar as seguintes informações nele

SECRET_KEY=sua_secret_key

POSTGRES_HOST=localhost
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_PORT=sua_porta_postgres
POSTGRES_DB=_seu_banco_de_dados_postgres


# Instale as dependências
$ yarn

### Após ter todas as dependências instaladas você poderá rodar as migrações afim de persistir as tabelas no banco de dados atráves do seguinte comando `yarn typeorm migration:run -d src/data-source.ts`

### Se até aqui deu tudo certo, rode o comando `yarn dev` para iniciar o servidor e poder consumir a API

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```


### 🧭 Rodando a aplicação web localmente na sua máquina (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/desafio-tech-biopark-2023/front-end.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd front-end

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:5173
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sob a licença MIT.

Feito com ❤️ por Patrick Cordeiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/patrickcordeiro/)

