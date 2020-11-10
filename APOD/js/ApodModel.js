class ApodModel {
    constructor() {
        this._fotoApod = "";
        this._dataApod = "";
        this._tituloApod = "";
        this._descricaoApod = "";
    }

    pedido() {

        console.log('fazendo pedido')

        let pedido = new XMLHttpRequest();

        pedido.addEventListener("load", () => {
            if(pedido.status == 200) {
                let apod = JSON.parse(pedido.responseText);

                this._fotoApod = apod.hdurl;
                this._dataApod = apod.date;
                this._tituloApod = apod.title;
                this._descricaoApod = apod.explanation;
            }
        });

        pedido.open("GET", "https://api.nasa.gov/planetary/apod?api_key=NsMXsR1PNZOHoohGUV1VC7bamiZqJq3IzDhLiNZj", false);

        pedido.send();
    }

    novaApod() {

        let novaData = document.getElementById('dataNovaApod')
        
        let pedido = new XMLHttpRequest();

        pedido.addEventListener("load", () => {
            if(pedido.status == 200) {
                let apod = JSON.parse(pedido.responseText);

                this._fotoApod = apod.hdurl;
                this._dataApod = apod.date;
                this._tituloApod = apod.title;
                this._descricaoApod = apod.explanation;
            }
        });

        pedido.open("GET", "https://api.nasa.gov/planetary/apod?api_key=NsMXsR1PNZOHoohGUV1VC7bamiZqJq3IzDhLiNZj" + "&date=" + novaData.value, false);

        pedido.send();
    }

    get fotoApod () {
        return this._fotoApod;
    }

    get dataApod () {
        return this._dataApod;
    }

    get tituloApod () {
        return this._tituloApod;
    }

    get descricaoApod () {
        return this._descricaoApod;
    }
}