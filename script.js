let result = []
let low = []
let num = 100
document.querySelector('button[type="submit"]').addEventListener('click', () => {
    let links = document.querySelector('input[type="textarea"]').value.split('http')
    if (links.length > num) {
        for (let i = 0; i < links.length; i++) {
            if (links[i].length > 10) {
                if (i < num) {
                    low.push('http' + links[i])
                } else {
                    result.push(low)
                    low = []
                    num += 100
                }
            }
        }

        createPage(0)

        document.querySelector('.pagination').innerHTML = ''
        for (let i = 0; i < result.length; i++) {
            document.querySelector('.pagination').innerHTML += `
            <div class="pagination__page" id="page-${i}">${i + 1}</div>`
        }
        document.querySelector('#page-0').classList.add('active')

        document.querySelectorAll('.pagination__page').forEach(el => {
            el.addEventListener('click', () => {
                createPage(el.id.slice(-1))
                document.querySelector('.active').classList.remove('active')
                el.classList.add('active')
            })
        })
    }
})

function createPage(number) {
    document.querySelector('.gallery').innerHTML = ''

    for (let i = 0; i < result[number].length; i++) {
        document.querySelector('.gallery').innerHTML += `
            <div class="gallery__item">
                <div class="gallery__img">
                    <img src="${result[number][i]}" alt="">
                </div>
            </div>
            `
        document.querySelectorAll('.gallery__item').forEach(el => {
            el.addEventListener('click', () => {
                window.open(el.querySelector('img').getAttribute('src'))
            })
        })
    }
}