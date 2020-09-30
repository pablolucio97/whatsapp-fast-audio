
const getHeader = setInterval(() => {
    const header = document.querySelector('._1QUKR')
    if(header){
        console.log(header) 
        const fastButton = document.createElement('button')
        const fastButtonContent = document.createTextNode('2x')
        fastButton.addEventListener('click', () => {
            const getAudio = document.querySelectorAll('audio')
            getAudio.forEach((audio) => {
                audio.playbackRate = 2
            })
        })
        fastButton.appendChild(fastButtonContent)
        fastButton.classList.add('fast-button')
        header.appendChild(fastButton)
        clearInterval(getHeader)
    }
}, 1000)
