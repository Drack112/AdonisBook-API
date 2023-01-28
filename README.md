<p align="center">
  <a href="https://adonisjs.com/" target="blank"><img src="https://ph-files.imgix.net/500aee69-72a2-44e9-831d-f630fa591840.png" width="200" alt="Adonis Logo" /></a>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

<a id="-tecnologias"></a>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![AdonisJS](https://img.shields.io/badge/adonisjs-%23220052.svg?style=for-the-badge&logo=adonisjs&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<a id="-projeto"></a>

## 💻 Projeto

Esse projeto é apenas um conjunto de testes que envolve o Adonis em relação a criação de uma API rest com funções parecidas do facebook, criar usuários com servidores de email, upload de avatares, sistema de seguidor e etc. Esse projeto tem apenas como finalidade ser um aprendizado com o framework.

<a id="-como-executar"></a>

## 🚀 Como executar

### 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `< Docker & Node>`
- Você tem uma máquina `< Windows / Linux / Mac >`.
- Você possui um `< Editor de código ou IDE / Gerenciador de banco de dados >`.

### ☕ Pequena ajuda

Preencha o arquivo `.env.example` com as informações cobradas e depois renomeie para `.env`.

```env
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=Cg50m3JwFK4StZY98W96IbgSi-2LiNzC
DRIVE_DISK=local
DB_CONNECTION=pg
APP_URL=${HOST}:${PORT}

PG_HOST=localhost
PG_PORT=5432
PG_USER=lucid
PG_PASSWORD=123
PG_DB_NAME=lucid

PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=123

SMTP_HOST=localhost
SMTP_PORT=587
SMTP_USERNAME=<username>
SMTP_PASSWORD=<password>
CACHE_VIEWS=false
```

Agora com o projeto Adonis em mãos e configurado, rode o comando install do seu gerenciador de pacotes para instalar todos os requerimentos:

```bash
npm install // yarn install // pnpm install
```

### Se lembre de ter o Docker rodando :ocean:

E então, rode o comando `docker-compose up -d`.

Agora você pode acessar [http://localhost:3333/](http://localhost:3333/) do seu navegador.

<a id="licença"></a>

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE.md) para mais detalhes.

---

#### _Sinta-se livre para colaborar, toda ajuda é bem vinda ;)_
