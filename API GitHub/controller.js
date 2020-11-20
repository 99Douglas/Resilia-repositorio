class Controller {
    constructor() {
        let botao = document.getElementById('botaoBuscar');

        botao.addEventListener("click", function() {

            console.log('cliquei')

            let usuario = document.getElementById('usuario');
            usuario = usuario.value;

            console.log('criando controller')

            let controller = new Controller();
            controller.localizandoUsuario(usuario);
            controller.localizandoRepositorio(usuario);

        });
    };

    localizandoUsuario (usuario) {

        console.log('criando model usuario')

        let model = new Model();
        model.requisicaoGithub(usuario);

        console.log('criando view usuario')
        
        let view = new View();
        view.mostraUsuario(model)
        
    };

    localizandoRepositorio(usuario) {

        console.log('criando model repositorio')

        let model = new Model();
        model.requisicaoRepositorio(usuario);

        console.log('criando view usuario')

        let mostrar = new View();
        mostrar.mostraRepositorio(model);
    }

}