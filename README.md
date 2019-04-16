# Galart
O nosso primeiro site <3 

## Ferramentas necessárias para contribuir com o projeto

- [NodeJS](https://nodejs.org/en/);
- [Git](https://git-scm.com/);
- [MongoDB-Community](https://www.mongodb.com/download-center/community);
- [Visual-Studio-Code](https://code.visualstudio.com/)

## Dicas sobre Git e Github



**- Configurando o Git depois de instalar**

Depois que estiver instalado o Git, configure seu nome e seu e-mail (coloque os mesmos usados na conta do Github). Para isso:

1 - Clique com o direito em uma pasta qualquer;

2 - Selecione a opção "Git Bash Here";

3 - Escreva (ou copie e cole) os dois comandos a seguir no terminal aberto:

```
git config --global user.name "Seu nome aqui" (aperte Enter)
git config --global user.email "seu e-mail aqui" (aperte Enter)
```

Pronto, tudo configurado!



**- O que fazer quando você já instalou as ferramentas, mas ainda não tem o projeto no pc?**

1 - Crie uma pasta no seu computador;

2 - Clique com o botão direito nela e selecione a opção Git Bash Here;

3 - Com o Git bash aberto digite Git Clone e informe o caminho do seu repositório.

4 - Abra o codigo baixado com o VSCODE  clicando em File > Open Folder

5 - Entre na pasta Galart e digite o comando no terminal do VSCODE : npm install

6 - Agora abra o cmd e digite npm  install node  

7 - Depois digite npm install nodemon --global

9 - Feito os passo a cima vá nas propriedades do meu computador.

7 - Clique em configurações avançadas.

8 - Selecione Variavel de Ambiente

9 - Clique em Path coloque o caminho onde está instalado o node e o npm 

10 - Para descobrir o caminho onde o npm foi instalado digite no cmd npm config get prefix

11 - Cole o local dentro do path e clique em ok.

12 - Execute o programa colocando node app ou nodemon app


## Atualizar Repositório

### Configurar o Repositório Remoto Upstream


Para sincronizar mudanças que você faz no seu fork, você precisa configurar um link remoto que aponta para o repositório upstream.
Para isso, especifique um novo repositório upstream como remoto, ele será sincronizado com o fork. Use o comando:

git remote add upstream https://github.com/dono_original/repositorio_original.git

Você pode confirmar se deu certo com o comando:

git remote -v



### Manter Seu Repositório Atualizado


Após essa configuração, para manter tudo atualizado basta seguir os passos abaixo.
Primeiramente, use o comando fetch (buscar) para atualizar o seu projeto:

git fetch upstream

Por fim, faça o merge das alterações de upstream/master no seu branch local (master):

git merge upstream/master

Agora você pode commitar novas atualizações e fazer o git push para o Github.
Não se esqueça de sempre realizar esses passos fetch e merge antes de começar a trabalhar no projeto.
