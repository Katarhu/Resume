document.addEventListener('wheel', scrollFunc)
windowHeight = window.innerHeight
documentHeight = document.body.scrollHeight

let scrollPositionY = window.scrollY;
let switchVar = true

function scrollFunc(event){
    if(switchVar){
        switchVar = !switchVar
        scrollWindow(event.deltaY) 
    }
}

function scrollWindow(deltaY){
    deltaY < 0 ? scrollUp() : scrollDown() 
    setTimeout(()=>{ 
        switchVar = true;
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
    scrollPositionY = event.target.getAttribute('value') * windowHeight;
    window.scrollTo(0,  scrollPositionY);
}