document.querySelector('button[type="submit"]').addEventListener('click', () => {
    let links = document.querySelector('input[type="textarea"]').value.split('http')
    for (let i = 0; i < links.length; i++) {
        if (links[i].length > 5) {
            document.querySelector('.gallery').innerHTML += `
            <div class="gallery__item">
                <div class="gallery__img">
                    <img src="http${links[i]}" alt="">
                </div>
            </div>
            `
        }
    }
    document.querySelectorAll('.gallery__item').forEach(el => {
        el.addEventListener('click', () => {
            window.open(el.querySelector('img').getAttribute('src'))
        })
    })
})