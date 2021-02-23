export const barSpy = ()=>{
    const $barSpy = document.querySelector(".barSpy")    

    window.addEventListener("scroll", (e)=>{
        let fullHeightPage = document.body.clientHeight;
        let visibleHeightPage = window.innerHeight;
        let scrollY = window.pageYOffset
        
        let x = scrollY + visibleHeightPage

        let p = (x*100)/fullHeightPage

        $barSpy.style.width = `${p}%`
    })

}