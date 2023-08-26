function verificar() {
    
    var data = new Date()
    var anoatual = data.getFullYear()
    var idadeform = window.document.getElementById('idade')
    var res = document.querySelector('div#res')
    //var img = window.document.getElementById('imagem')

    if (idadeform.value.length == 0 || Number(idadeform.value) > anoatual) {
        window.alert('Verifique as respostas, pois, pode haver informações erradas!!')
    } else{
        var fsex = window.document.getElementsByName ('radsex')
        var idade = anoatual - Number(idadeform.value)
        //res.innerHTML = `Idade calculada! Esse ano você fará ou ja tem: ${idade} anos`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        var espaço = window.document.getElementById('espaço')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) {
                //bebe
                //img.src = '../midias/imagens/infantil.png'
                img.setAttribute('src', 'infantil.png')
            } else if (idade < 16) {
                //criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21) {
                //joven
                //img.src = '../midias/imagens/joven.png'
                img.setAttribute('src', 'joven.png')
            } else if (idade < 45) {
                //adulto
                //img.src = '../midias/imagens/adulto.png'
                img.setAttribute('src', 'adulto.png')
            } else if (idade < 60) {
                //meia idade
                //img.src = '../midias/imagens/meia-idade.png'
                img.setAttribute('src', 'meia-idade.png')
            } else {
                //idoso
                //img.src = '../midias/imagens/idoso.png'
                img.setAttribute('src', 'idoso.png')
            }

        }else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) {
                //bebe
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 16) {
                //criança
                img.setAttribute('src', 'criança-f.png')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'joven-f.png')
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else if (idade < 60) {
                //meia idade
                img.setAttribute('src', 'meia-idade-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) ${genero} e tem ou fará ${idade} anos `
        res.appendChild(img)
        
    }


}



