Instruções para rodar o projeto localmente:
Para o código rodar localmente é necessário ter o banco de dados no MYSQL (com o laragon ligado), e os dois códigos rodando no VSCODE (com npm run dev), tanto o do front-end quanto o do back-end. E a partir do front-end vai ser liberado um link com a interface do projeto.

Descrição do TEMA escolhido pelo grupo.
 Escolhemos o tema “Petshop” porque já fizemos alguns trabalhos sobre, então estamos familiarizados e gostamos da interface. O nome do nosso Pet Shop é “Catshop”, porque CAT é gato em inglês e nossa criatividade é limitada. 

Descrição do tema escolhido e das funcionalidades implementadas.
Inicialmente pensamos em quais funcionalidades seriam necessárias em um petshop, e concluímos que precisaria de uma para os produtos, uma para cadastrar os produtos, uma para os usuários e cadastrar os usuários (que no nosso caso se chama “Donos”), além disso também uma para os animais, para os funcionários e para as consultas. Os valores de cada funcionalidade foram estabelecidos conforme a necessidade, separamos dessa forma: 
Produtos: Tainara
id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(255),
    preco DECIMAL(10,2),
    data_producao DATE,
    imagem VARCHAR(300)
Donos: Narriane
 id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nomeDono VARCHAR(255),
    nomeAnimal VARCHAR(255),
    CPF VARCHAR(255),
    telefone VARCHAR(255),
    dataCadastro DATE,
    imagem VARCHAR(255)
Funcionários: Clara
id BIGINT primary key auto_increment,
    nomeFuncionario VARCHAR(50),
    areaEspecializacao VARCHAR(50),
    email VARCHAR(300),
    telefone VARCHAR(300),
    imagem VARCHAR(300;
Animais: Katiely
id BIGINT PRIMARY KEY AUTO_INCREMENT,
 nomeAnimal VARCHAR (50),
 peso DECIMAL(10,2),
 Idade VARCHAR (50),
 Raça VARCHAR (50),
 ConsultaRealizada VARCHAR (50)
Consultas: Nicolle Santana
id BIGINT primary key auto_increment,
    dataConsulta VARCHAR(50),
    nomePaciente VARCHAR(50),
    tipoConsulta VARCHAR(300),
    veterinario VARCHAR(50)
 
E as funcionalidades de cadastrar produtos e donos foi dividido igualmente: Cadastrar donos - Katiely, Narriane e Nicolle; Cadastrar produtos - Tainara e Clara 
