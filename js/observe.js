const sections = document.querySelectorAll('.intersected');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "250px"
};


const observer = new IntersectionObserver(observerHandler, options);

function observerHandler(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        setTimeout(()=>{
            entry.target.classList.add('appeared');
        }, 150)
    });
}

sections.forEach(section => observer.observe(section))