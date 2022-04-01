function preloader(){
    $(() =>{

        setInterval(() =>{
            
            let p = $('.preloader');
            p.css('opacity', 0);
        
            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 700
            );
        }, 700);
    });
}
preloader();

window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
function toggle(){
    var header =document.querySelector("header");
    header.classList.toggle("active");
}

//

const options = document.querySelectorAll('option');
console.log(options);

const minPrice = 1000;
let totalPriceElement = document.querySelector('#price');
// console.log(totalPriceElement);

const optionType = document.querySelectorAll('option[name="type"]');
console.log(optionType);
const optionAdapt = document.querySelectorAll('option[name="adapt"]');
// console.log(optionAdapt);
const optionTime = document.querySelectorAll('option[name="time"]');
// console.log(optionTime);

function calculeted(){
    let totalPrice = minPrice * 1;
    console.log(totalPrice);

    for (const option of optionType){
        if(option.selected){
            totalPrice = totalPrice * parseFloat(option.value);
        }
    }
    for (const option of optionAdapt){
        if(option.selected){
            totalPrice = totalPrice * parseFloat(option.value);
        }
    }
    for (const option of optionTime){
        if(option.selected){
            totalPrice = totalPrice * parseFloat(option.value);
        }
    }

    const formatter = new Intl.NumberFormat('ru');
	totalPriceElement.innerText = formatter.format(totalPrice);  
}
calculeted();

