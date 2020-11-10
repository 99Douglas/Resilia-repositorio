class ApodController {

    constructor() {
        let botao = document.getElementById('botao')
        botao.addEventListener("click", function() {
            let apod = new ApodController();
            apod.apod2();
        })
    }

    apod() {

        console.log('criando apod')

        let apodPrincipal = new ApodModel();
        apodPrincipal.pedido();

        let aparece = new ApodView();
        aparece.mostraApod(apodPrincipal);
    }

    apod2() {
        let apodNovaData = new ApodModel();
        apodNovaData.novaApod();

        let aparece = new ApodView();
        aparece.mostraApod(apodNovaData);
    }

}