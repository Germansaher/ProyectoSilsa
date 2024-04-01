function callback(entries){
    console.log("Llamado al callback")
}

const options ={
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const observer = new IntersectionObserver(callback, options);
const element = document.querySelector('.mapa');

observer.observe(mapa);