class View {


    mostraUsuario(model) {

        console.log('mostrando usuario')

        let foto = document.createElement('img')
        let nome = document.createElement('h2')

        foto.src = model.fotoUsuario
        nome.textContent = model.nomeUsuario

        console.log(nome)

        document.body.appendChild(foto);
        document.body.appendChild(nome);

    }

    mostraRepositorio(model) {

        console.log('mostrando repositorios')

        let repositorios = model.repositorios

        for(let repositorio of repositorios) {
        let repositoriosHTML = document.createElement('div');
        repositoriosHTML.classList.add('repositorios');

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

        document.body.appendChild(repositoriosHTML);

        console.log(repositoriosHTML);

        }

        
    }

}