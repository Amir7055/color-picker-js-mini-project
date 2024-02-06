// // project requerment
// * change background color by genarating random rgb color by click a button
// * Also display the hex code to a diseble input field 
// *add a toast message 
// step 1- (creat onload handeler create)
// global var
let copyDive=null;

window.onload=()=>{
    main();
}
function main(){
    const containerPart = document.querySelector("#container");
    const inputColector = document.querySelector("#output");
    const changePart = document.querySelector(".btn");
    const copyPart = document.querySelector(".copy-btn");

    changePart.addEventListener("click",()=>{
        bgcolorhext=randomhexColor()
        containerPart.style.backgroundColor=bgcolorhext;
        inputColector.value=bgcolorhext;
    })
    copyPart.addEventListener("click",function(){
       window.navigator.clipboard.writeText(inputColector.value) 
        if(copyDive!==null){
            copyDive.remove()
            copyDive=null;

        }
        if(validHexacode(inputColector.value)){
            gettoastmessege(`${inputColector.value} is copied`);
        }else{
            alert("Its not a valid color code")
        }
       

    })

    inputColector.addEventListener("keyup",function(e){
        const color = e.target.value;
        if(color && validHexacode(color)){
            containerPart.style.backgroundColor=color;
        } 
    })
 
}
    




// step - 2(create random rgb color function )
function randomhexColor(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const gettoastmessege=(masg)=>{
    copyDive=document.createElement('div')
    copyDive.innerHTML=masg;
    copyDive.className="toast-message toast-message-slide-in"

    copyDive.addEventListener('click',function(){
        copyDive.classList.remove("toast-message-slide-in");
        copyDive.classList.add("toast-message-slide-out")
        copyDive.addEventListener("animationend",function(){
            copyDive.remove()
            copyDive=null;
        })
    })
    document.body.appendChild(copyDive)

}

/**
 * 
 * @param {string} color 
 */

function validHexacode(color){

    if(color.length!==7) return false;
    if(color[0]!=='#') return false;
    color =color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(color);

}

// step - 3( collect all necessary referanse)

// step - 4(handel the click event)
