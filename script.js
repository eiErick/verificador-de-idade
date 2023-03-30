function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var aniversario = document.getElementsByName("radano")

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'imagens/homem-bebe.jpg')

            } else if (idade <= 11) {
                //criança
                img.setAttribute('src', 'imagens/homem-crianca.jpg')

            } else if (idade <= 18) {
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')

            } else if (idade <= 60) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')

            }

        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 2) {
                //bebe
                img.setAttribute('src', 'imagens/mulher-bebe.jpg')

            } else if (idade <= 11) {
                //criança
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')

            } else if (idade <= 18) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')

            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')

            } else {
                //idosa
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')

            }
        }

        if (aniversario[1].checked) {
            var idade = idade - 1
        }
        
        if (idade <= 1) {
            res.innerHTML = `Detectamos ${genero} com ${idade} ano`
        } else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        }

        res.appendChild(img)
    }
}