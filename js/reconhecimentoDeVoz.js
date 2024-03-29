const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    
    if (Number.isNaN(parseInt(chute))) {
        exibeChute('Diga novamente')
        verificaSeOChutePossuiUmValorValido(chute)
        return
    }


    exibeChute(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
        <div class="mensagem__resultado">Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())