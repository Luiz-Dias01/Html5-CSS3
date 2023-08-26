//mostrar as horas
//ddca9f
//9b5e3f
//0b1a1f
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var corpo = window.document.getElementsByTagName('body')


function carregar() {
    var agr = new Date()
    var hora = agr.getHours()
    

    if (hora > 0 && hora < 12) {
        
        msg.innerHTML = `Bom dia agora são <strong>${hora}H am<strong>`
        img.src = '/exercicos/Hora/midias/imagens/manha.png'
        document.body.style.background = '#ddca9f' // para colorir o fundo do a tag body

    }
    else if (hora < 18) {
        
        msg.innerHTML = `Boa Tarde agora são <strong>${hora}H pm<strong>`
        img.src = '/exercicos/Hora/midias/imagens/tarde.png'
        document.body.style.background = '#9b5e3f'

    }
    else if (hora >= 18 && hora < 24) {

        msg.innerHTML = `Boa Noite agora são <strong>${hora}H pm<strong> `
        img.src = '/exercicos/Hora/midias/imagens/noite.png'
        document.body.style.background = '#0b1a1f'

    }
    else {

        console.log('[ERROR] horario invalido')

    }
   
}


