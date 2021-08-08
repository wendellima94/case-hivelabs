# Projeto desenvolvido para o teste da HiveLabs.

## [✔] Representa o que esta funcionando como pedido no teste:

* [✔] Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.
   
   ▪ Se nickname já existe, retornar status e mensagem de erro.  

* [✔] Listar todos os usuários cadastrados filtrados pelos campos nome e/ou sobrenome, filtrados por parâmetros de consulta: retorna um array de usuários.
 
* [✔] Listar um usuário pelo nickname passado como parâmetro: retorna um único usuário com nome, sobrenome e nickname.

* [✔] Alterar o sobrenome e o endereço do usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas 
informações.
* [✔] Alterar o nickname de um usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
  
  ▪ Se o nickname passado já existir, deve retornar status e mensagem de erro.  

* [✔] Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso.
***
## Especificações da aplicação:

 Foram usadas para o desenvolvimento `Typescript`, `Express` ,  `MongoDB`,  `bcryptjs`, `ts-node-dev`.
 
 Padrão do projeto foi feito com o **design pattern** `MVC`.
 ***
 
 ## Como rodar a aplicação:
1. Ultilize as variavéis de ambiente enviadas por email no arquivo `.env` para realizar a ligação com o banco de dados.
2. Instale as depencias com o comando `yarn install`. 
 3. Rode o script com **ts-node-dev** ultilizando o comando `yarn dev`.
 4. Ele iniciará na porta 3333 ou 4000, será exibido um **console** informando a rota iniciada.
***
## As rotas:

### Método de criação:
`/signup `  Cria um novo usuário, um exemplo do formato de envio do body em `JSON `(**pelo postman**).

#### Exemplo na imagem a baixo:

![image](https://user-images.githubusercontent.com/72635601/128646952-edde1e83-3df7-4bcc-a8df-8cf9ecd8c5fa.png)
---
### Métodos de pesquisa de usuário:

* `/finduser/:name`  Listar todos os usuários cadastrados filtrados pelos campos **nome** e retornará todos usuários com o mesmo nome.
* `/finduserbynickname/:nickname`  Retornará o usuário com o **nickname** inserido no parametro da url.
---

### Métodos de atualizão de dados no cadastro:
 
* `/updatelastnameandaddress/:_id`  Atualiza os dados nos campos de **sobrenome** e **endereço** pelos parametros inseridos na url.

#### Exemplo na imagem a baixo:

![image](https://user-images.githubusercontent.com/72635601/128647467-6f2802f8-1c3d-48bd-bc23-a4515335b7b8.png)
 ---

* `/updatenickname/:_id`  Atualiza o campo de **nickname** pelo parametro inserido na url.

#### Exemplo na imagem a baixo:

![image](https://user-images.githubusercontent.com/72635601/128647518-7e52f332-1a3f-413a-b59f-c6f9f59ed7e5.png)

---

### Método para deletar um usuário cadastrado:

`/delete/:_id`  Deleta um usuário pelo **id** inserido no parametro da url
