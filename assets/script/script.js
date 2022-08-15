//Para contribuir, insira um objeto com suas informações dentro do array
//De preferência uma foto quadrada para seguir o padrão
//Pestar atenção nas letras maiúsculas e minúsculas no githubUser
//Caso não tenha página pessoal, pode deixar em branco (personalWebpage: "",)

//Array com os objetos de cada pessoa cadastrada
array = [
  {
    name: "Douglas Volcato",
    specialty: "Fullstack",
    class: "C017",
    githubUser: "DouglasVolcato",
    image: "https://avatars.githubusercontent.com/u/106124397?v=4",
    likedIn: "https://www.linkedin.com/in/douglasvolcato/",
    personalWebpage:
      "https://douglasvolcato.github.io/portfolio-DouglasVolcato/",
  },
  {
    name: "Renato Tenório",
    specialty: "Fullstack",
    class: "C017",
    githubUser: "RenatoTl",
    image: "https://avatars.githubusercontent.com/u/103604513?v=4",
    likedIn: "https://www.linkedin.com/in/renato-ten%C3%B3rio-93a972156/",
    personalWebpage: "",
  },
];

//Função para mostrar os cards com base no array de cadastros
function showCards() {
  for (let item of array) {
    for (let i of document.querySelector("header").children) {
      i.style.display = "none";
    }

    //Inserir o header no HTML
    document.querySelector("header").insertAdjacentHTML(
      "beforeend",
      `
      <div>
        <img src="./assets/pictures/pageLogo.png" alt="Logo Page" />
        <h1>Amigos Blue</h1>
      </div>
      `
    );

    //Inserir os cards no HTML
    document.querySelector("main").insertAdjacentHTML(
      "beforeend",
      `
      <div
      class="card"
      onclick='showInfo(${array.indexOf(item)})'>
      <img
        src=${item.image}
        alt="image"
      />
      <div class="info">
        <p class="name">${item.name}</p>
        <p class="speciality">${item.specialty}</p>
        <p class="class">${item.class}</p>
      </div>
  
    </div>
      `
    );
  }
}

//Função acima sendo chamada, mostrando os cards
showCards();

//Função para mostrar mais informações quando clicado no card
function showInfo(position) {
  //"for of" para limpar a página de outros cards e header
  for (let n of document.querySelectorAll(".card")) {
    n.style.display = "none";
  }
  for (let i of document.querySelector("header").children) {
    i.style.display = "none";
  }

  //Inserir header modificado no HTML
  document.querySelector("header").insertAdjacentHTML(
    "beforeend",
    `
    <a class="exitButton" href="./index.html">
      <div onclick="showCards()">
        <img src="./assets/pictures/pageLogoRed.png" alt="Logo Page" />
        <h1 style="color:red">Voltar</h1>
      </div>
    </a>
    `
  );

  //Inserir página com mais informações no HTML
  document.querySelector("main").insertAdjacentHTML(
    "beforeend",
    `
   
    <div class="completeInfo">
      <div class="introduction">
        <img src=${array[position].image} alt="image"/>

        <div class="info">
          <p class="name">Nome: ${array[position].name}</p>
          <p class="speciality">Especialidade: ${array[position].specialty}</p>
          <p class="class">Classe: ${array[position].class}</p>
        </div>

      </div>

      <div class="socialNetworks">
        <a href="https://github.com/${
          array[position].githubUser
        }" target="_blank"><img src="./assets/pictures/githubLogo.png" alt="Github"></a> 
        <a href="${
          array[position].likedIn
        }" target="_blank"><img src="./assets/pictures/linkedInLogo.jpg" alt="LinkedIn"></a>
        ${getPersonalWebpage(position)}
      </div>

      <div class="githubApi">
        <h2>Projetos</h2>

        <div class="repositoryList">
        </div>

      </div>
    </div>
    `
  );

  //Função assíncrona para consumir a api do GitHub e mostrar os repositórios
  //Função definida mais abaixo
  getRepositorys(array[position].githubUser);
}

//Mostrar imagem com link para página pessoal(ou não mostrar, caso não haja um link no cadastro)
function getPersonalWebpage(position) {
  const webpageLink = array[position].personalWebpage;
  if (webpageLink)
    return `<a href="${webpageLink}" target="_blank"><img src="./assets/pictures/personalSiteLogo.png" alt="Personal site"></a>`;
  return "";
}

//Consumir api do Github e buscar repositórios
async function getRepositorys(user) {
  const fetchApi = await fetch(`https://api.github.com/users/${user}/repos`);
  const data = await fetchApi.json();

  data.forEach((repo) => {
    document.querySelector(".repositoryList").insertAdjacentHTML(
      "beforeend",
      `
    <section>
      <div>${repo.name}</div> <a href="${repo.svn_url}" target="_blank"><button>Ver repositório</button></a>
    </section>
    `
    );
  });
}
