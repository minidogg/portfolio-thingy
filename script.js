(async()=>{
    const style = document.createElement("style")
    document.body.appendChild(style)
    var x = 0
    var y = 0

    var xa = 5/60
    var ya = 5/60

    var centerX = window.innerWidth/2
    var centerY = window.innerHeight/2

    function getPos(ev){
        centerX = window.innerWidth/2
        centerY = window.innerHeight/2

        xa = (ev.clientX-centerX)/(window.innerWidth/50)/60
        ya = (ev.clientY-centerY)/(window.innerHeight/50)/60
    }
    document.addEventListener("mousemove",getPos)
    document.addEventListener("mousedown",getPos)
    document.addEventListener("pointerdown",getPos)
    document.addEventListener("pointermouse",getPos)


    setInterval(()=>{
        x+=xa
        y+=ya

        x = x % 100
        y = y % 100

        style.innerHTML = `
            body{
                background-position: ${x}vw ${y}vh;
            }
        `
    },1000/60)

    Array.from(document.querySelectorAll('*:not(body):not(html):not(div):not(section):not(ul)')).forEach((e)=>{
        let el = e
        // el.style.backgroundColor = "green"
        el.style.width = el.getBoundingClientRect().width+"px"
        el.style.height = el.getBoundingClientRect().height+"px"
        el.addEventListener("mouseover",()=>{
            el.style.fontFamily = "Arial"
        })
        el.addEventListener("mouseout",()=>{
            el.style.fontFamily = ""
            el.style.width = el.getBoundingClientRect().width+"px"
            el.style.height = el.getBoundingClientRect().height+"px"
        })
    })
})()
