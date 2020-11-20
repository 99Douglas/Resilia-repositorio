class View {


    mostraUsuario(model) {

        console.log('mostrando usuario')

        let foto = document.getElementById('foto')
        let nome = document.getElementById('nome')

        foto.src = model.fotoUsuario
        nome.textContent = model.nomeUsuario

    }

    mostraRepositorio(model) {

        let repo = document.getElementById('repositorios')

        repo.innerText = "";

        console.log('mostrando repositorios')

        let repositorios = model.repositorios

        for(let repositorio of repositorios) {

        let repositoriosHTML = document.createElement('div');
        repositoriosHTML.classList.add('repositorio');

        let linkRepositorio = document.createElement('a');
        linkRepositorio.classList.add('linkRepositorio');
        linkRepositorio.href = repositorio.html_url;
        repositoriosHTML.appendChild(linkRepositorio);

        let nomeRepositorio = document.createElement('p');
        nomeRepositorio.classList.add('nomeRepositorio');
        nomeRepositorio.textContent = repositorio.name;
        linkRepositorio.appendChild(nomeRepositorio);

        let linguagemRepositorio = document.createElement('p')
        linguagemRepositorio.classList.add('linguagemRepositorio');
        linguagemRepositorio.textContent = repositorio.language;
        repositoriosHTML.appendChild(linguagemRepositorio);

        repo.appendChild(repositoriosHTML);

        console.log(repositoriosHTML);

        }

        
    }

}