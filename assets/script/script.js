//Para contribuir, insira um objeto com suas informações dentro do array
//De preferência uma foto quadrada para seguir o padrão
//Pestar atenção nas letras maiúsculas e minúsculas no githubUser
//Caso não tenha página pessoal, pode deixar em branco (personalWebpage: "",)

//Array com os objetos de cada pessoa cadastrada
array = [
	{
		name: 'Adam Teodoro',
		specialty: 'Fullstack(nodejs, angular, react, js, ts, mobiledev)',
		class: 'C017',
		githubUser: 'AdamTeodoro',
		image: 'https://avatars.githubusercontent.com/u/66885644?s=400&u=08da0bb89477df9db6a76a68f8a7dff928a1a42b&v=4',
		likedIn: 'https://github.com/AdamTeodoro',
		personalWebpage:
			'https://github.com/AdamTeodoro',
	},
	{
		name: 'Douglas Volcato',
		specialty: 'Fullstack',
		class: 'C017',
		githubUser: 'DouglasVolcato',
		image: 'https://avatars.githubusercontent.com/u/106124397?v=4',
		likedIn: 'https://www.linkedin.com/in/douglasvolcato/',
		personalWebpage:
			'https://douglasvolcato.github.io/portfolio-DouglasVolcato/',
	},
	{
		name: 'Renato Tenório',
		specialty: 'Fullstack',
		class: 'C017',
		githubUser: 'RenatoTl',
		image: 'https://avatars.githubusercontent.com/u/103604513?v=4',
		likedIn: 'https://www.linkedin.com/in/renato-ten%C3%B3rio-93a972156/',
		personalWebpage: '',
	},
	{
		name: 'Vanderlei Miguel',
		specialty: 'Fullstack',
		class: 'C017',
		githubUser: 'vanderleimiguel',
		image: 'https://avatars.githubusercontent.com/u/102632196?v=4',
		likedIn: 'https://www.linkedin.com/in/vanderleimiguel/',
		personalWebpage: 'https://vanderleimiguel.herokuapp.com/',
	},
	{
		name: 'Tiago Lelis',
		specialty: 'Fullstack with more backEnd experience',
		class: 'C013',
		githubUser: 'magura13',
		image: 'https://avatars.githubusercontent.com/u/97927253?v=4',
		likedIn: 'https://www.linkedin.com/in/tiago-lelis-240286161/',
		personalWebpage: 'https://github.com/magura13',
	},
	{
		name: 'Raul Mariaci Neto',
		specialty: 'Full Stack Developer',
		class: 'C017',
		githubUser: 'raulmn00',
		image: 'https://avatars.githubusercontent.com/u/106101973?v=4',
		likedIn: 'https://www.linkedin.com/in/raul-mariaci-neto/',
		personalWebpage:
			'https://raulmn00.github.io/Projeto-Um-Modulo-Dois-Portifolio/',
	},
	{
		name: 'Jardejane Feitosa Lima',
		specialty: 'Full Stack Developer',
		class: 'C017',
		githubUser: 'Jardejane',
		image: 'https://avatars.githubusercontent.com/u/106411484?v=4',
		likedIn: 'https://www.linkedin.com/in/jardejane-feitosa-lima-60a6851a4/',
		personalWebpage: 'https://jardejane.github.io/Perfil/portifolio/portifolio.html',
	},
	{
		name: 'Wanderson Gomes dos Santos',
		specialty: 'Backend Developer',
		class: 'C005',
		githubUser: 'wandersonDeve',
		image: 'https://avatars.githubusercontent.com/u/81826043?s=96&v=4',
		likedIn: 'https://www.linkedin.com/in/wandersongsantos/',
		personalWebpage: 'https://github.com/wandersonDeve',
	}
];

//Função para mostrar os cards com base no array de cadastros
function showCards() {
	for (let item of array) {
		for (let i of document.querySelector('header').children) {
			i.style.display = 'none';
		}

		//Inserir o header no HTML
		document.querySelector('header').insertAdjacentHTML(
			'beforeend',
			`
		<div class='title'>
			<img src="./assets/pictures/pageLogo.png" alt="Logo Page" />
			<h1>AMIGOS BLUE</h1>
		</div>
      `
		);

		//Inserir os cards no HTML
		document.querySelector('main').insertAdjacentHTML(
			'beforeend',
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
	for (let n of document.querySelectorAll('.card')) {
		n.style.display = 'none';
	}
	for (let i of document.querySelector('header').children) {
		i.style.display = 'none';
	}

	//Inserir header modificado no HTML
	document.querySelector('header').insertAdjacentHTML(
		'beforeend',
		`
		<a class="exitButton" href="./index.html">
			<div class="menu-complete-info" onclick="showCards()">
				<img src="./assets/pictures/pageLogoRed.png" alt="Logo Page" />
				<h1>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
					</svg>
					Voltar
				</h1>
			</div>
		</a>
    `
	);

	//Inserir página com mais informações no HTML
	document.querySelector('main').insertAdjacentHTML(
		'beforeend',
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

			<div class="social-networks">
				<div class="social-item">
					<a href="https://github.com/${
						array[position].githubUser
					}" target="_blank"><img src="./assets/pictures/githubLogo.png" alt="Github"></a> 
				<div class="social-item">
						<a href="${
						array[position].likedIn
					}" target="_blank"><img src="./assets/pictures/linkedInLogo.jpg" alt="LinkedIn"></a>
				</div>
				<div class="social-item">
					${getPersonalWebpage(position)}
				</div>
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
	return '';
}

//Consumir api do Github e buscar repositórios
async function getRepositorys(user) {
	const fetchApi = await fetch(`https://api.github.com/users/${user}/repos`);
	const data = await fetchApi.json();

	data.forEach((repo) => {
		document.querySelector('.repositoryList').insertAdjacentHTML(
			'beforeend',
			`
    <section>
      <div>${repo.name}</div> <a href="${repo.svn_url}" target="_blank"><button>Ver repositório</button></a>
    </section>
    `
		);
	});
}
