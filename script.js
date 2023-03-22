const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click', () => {
    document.querySelector('.img-2').classList.add('show');
    document.querySelector('.img-2').classList.remove('hide');
    document.querySelector('.img-1').classList.remove('show');
    document.querySelector('.img-1').classList.add('hide');
    document.querySelector('.img-3').classList.add('hide');
})

prev.addEventListener('click', () => {
    document.querySelector('.img-3').classList.add('show');
    document.querySelector('.img-3').classList.remove('hide');
    document.querySelector('.img-1').classList.remove('show');
    document.querySelector('.img-1').classList.add('hide');
    document.querySelector('.img-2').classList.add('hide');
})