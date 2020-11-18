class Model {
    constructor() {
        this._fotoUsuario = "";
        this._nomeUsuario = "";
        this._repositorios = "";
    }

    requisicaoGithub(usuario) {

        console.log('fazendo requisicao usuario')

        let pedido = new XMLHttpRequest();

        pedido.open("GET", `https://api.github.com/users/${usuario}`, false);

        pedido.addEventListener("load", () => {
            if(pedido.status == 200) {
                let github = JSON.parse(pedido.responseText);

                this._fotoUsuario = github.avatar_url
                this._nomeUsuario = github.login
            };
        });

        pedido.send();

    };

    requisicaoRepositorio(usuario) {

        console.log('fazendo requisicao repositorios')

        let pedido = new XMLHttpRequest();

        pedido.open("GET", `https://api.github.com/users/${usuario}/repos`, false);

        pedido.addEventListener("load", () =>{
            if(pedido.status == 200) {
                let repositorios = JSON.parse(pedido.responseText)

                this._repositorios = repositorios
            };
        });

        pedido.send();

    };


    get fotoUsuario () {
        return this._fotoUsuario;
    };

    get nomeUsuario () {
        return this._nomeUsuario;
    };

    get repositorios () {
        return this._repositorios;
    }
}