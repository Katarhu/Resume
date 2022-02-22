const rope = document.querySelector('.header-rope');
const header = document.querySelector('.header');

rope.onclick = (event)=>{
    parseInt(header.style.top) == 0 ? header.style.top = '-50px' : header.style.top = '0px';
    rope.style.animation = 'none';  
    event.layerX > rope.clientWidth / 2 ? rope.style.transform = 'rotate(-15deg)' : rope.style.transform = 'rotate(15deg)'
    setTimeout(()=>{
        rope.style.transform = 'rotate(0)';
        
    },500)
}

