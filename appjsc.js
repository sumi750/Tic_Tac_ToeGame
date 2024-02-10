let re = document.querySelector('#reload');


const cp = () =>{

    let n = 9;
    const temp = "1234567890abcdefghijklmnopqrstuvwxyz@ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let genrate = '';
    for(let i=1; i<=n; i++){
        genrate +=temp[Math.floor(Math.random()*temp.length)];
    
    }
    
    let opt = document.querySelector('.hello');
    
    opt.innerText = ` ${genrate}`;
    
    

    let sub = document.querySelector("#submit");
    sub.addEventListener("click", () =>{
        let tick = document.querySelector(".hide");
        let me = document.querySelector("#input-cap");
        // sub.innerText = "hello";
        if(me.innerText === genrate){
            tick.classList.remove("hide2");

        }
    });

    
}

re.addEventListener("click", cp);


// tick.classList.remove("hide2");
