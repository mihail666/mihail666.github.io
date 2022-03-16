function preloader(){
    $(() =>{

        setInterval(() =>{
            
            let p = $('.preloader');
            p.css('opacity', 0);
        
            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );
        }, 1000);
    });
}
preloader();

window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})