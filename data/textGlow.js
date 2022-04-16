let r = 255, g = 0, b = 0;
let text = document.getElementsByName('textglowing')
let box = document.getElementsByName('boxglowing')

function colorChange(){
    return setInterval(()=>{
        if(r == 255 && g == 0 && b < 255) b++;
        else if(r > 0 && g == 0 && b == 255) r--;
        else if(r == 0 && g < 255 && b == 255) g++;
        else if(r == 0 && g == 255 && b > 0) b--;
        else if(r < 255 && g == 255 && b == 0) r++;
        else if(r == 255 && g > 0 &&  b == 0)  g--;
        
        color_str = r.toString(16).padStart(2,0).concat(
            g.toString(16).padStart(2,0),
            b.toString(16).padStart(2,0)
        )
        color_str = "#".concat(color_str)
        for(const t of text){
            t.style.color = color_str
        }
        for(const b of box){
            b.style.boxShadow = color_str+" 0px 0px 50px"
        }
    },5)
}
let toggle;
let toggleFlag = false;
function toggleColorChange(){
    if(toggleFlag){
        toggleFlag = false;
        clearInterval(toggle)
        for(const t of text){
            t.style.color = "#000000"
        }
        for(const b of box){
            b.style.boxShadow = "none"
        }
    }
    else{
        toggleFlag = true;
        toggle = colorChange()
    }
}