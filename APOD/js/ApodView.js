class ApodView {
    mostraApod(model) {
        console.log('mostrando apod')
        let fotoApod = document.getElementById('fotoApod');
        let dataApod = document.getElementById('dataApod');
        let tituloApod = document.getElementById('tituloApod');
        let descricaoApod = document.getElementById('descricaoApod');

        fotoApod.src = model.fotoApod;
        dataApod.innerText = model.dataApod;
        tituloApod.innerText = model.tituloApod;
        descricaoApod.innerText = model.descricaoApod;
    }
}