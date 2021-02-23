export const lazyLoad = () => {
    const sections = document.querySelectorAll(".section")
    const header = document.querySelector(".header");
    const welcome = document.querySelector(".welcome")
    const lazyLoadElements = [ ...sections, header, welcome ]

    
    const callback = (entries) => {
        entries.forEach(entry => {

            if( entry.isIntersecting ){
                
                entry.target.classList.add("show")
            }
            else {
                // entry.target.classList.remove("show")
                
            }
                //No appears
        });
    };

    const observer = new IntersectionObserver(callback, {});
    lazyLoadElements.forEach( element => observer.observe(element) )
};
