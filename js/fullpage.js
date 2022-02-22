document.addEventListener('wheel', eventHandler)
document.addEventListener('keydown', eventHandler)


const modalWindow = document.querySelector('.modal-window');
const controls = document.querySelector('.controls');
const goUp = document.querySelector('.goUp');
const goDown = document.querySelector('.goDown');

goUp.addEventListener('click', ()=>{scrollFunc('Up')})
goDown.addEventListener('click', ()=>{scrollFunc('Down')});

windowHeight = window.innerHeight
documentHeight = document.body.scrollHeight

let scrollPositionY = window.scrollY;
let switchVar = true

function eventHandler(event){
    if(event.keyCode == 38 || event.deltaY < 0) scrollFunc('Up');
    if(event.keyCode == 40 || event.deltaY > 0) scrollFunc('Down');
}

function scrollFunc(Direction){
    if(switchVar){
        switchVar = !switchVar;
        scrollWindow(Direction); 
    }
}

function scrollWindow(Direction){
    if((Direction == 'Up' && scrollPositionY == 0) || (Direction == 'Down' && scrollPositionY >= documentHeight - windowHeight)) {
        switchVar = true;
        return;
    }

    modalWindow.style.left = '-500px';
    controls.style.opacity = 0;
    setTimeout(()=>{modalWindow.style.display = 'none';}, 250);

    if(Direction == 'Up') scrollUp();
    if(Direction == 'Down') scrollDown();

    setTimeout(()=>{ 
        switchVar = true;
        controls.style.opacity = 1;
    }, 500)
}

function scrollUp(){
    scrollPositionY -= windowHeight;
    scrollPositionY < 0 ? scrollPositionY = 0 : window.scrollTo(0, scrollPositionY)
}
function scrollDown(){
    scrollPositionY += windowHeight;
    scrollPositionY == documentHeight - windowHeight ? header.style.top = 0 : 0;
    scrollPositionY > documentHeight - windowHeight ? scrollPositionY = documentHeight - windowHeight : window.scrollTo(0, scrollPositionY)
}

function moveScreen(event){
    if(scrollPositionY == event.target.getAttribute('value') * windowHeight) return;
    scrollPositionY = event.target.getAttribute('value') * windowHeight;
    controls.style.opacity = 0;
    switchVar = false;
    setTimeout(()=>{
        switchVar = true;
        controls.style.opacity = 1;
    }, 500)
    window.scrollTo(0,  scrollPositionY);
}