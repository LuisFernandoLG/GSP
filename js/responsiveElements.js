export const responsive = (id, mediaQuery, mobileContent, deskoptContent)=>{
    let breakPoint = window.matchMedia(mediaQuery);
    
    const callback = (e)=>{
        if( e.matches ){
            document.querySelector(id).innerHTML = mobileContent;
        }else{
            document.querySelector(id).innerHTML = deskoptContent;
        }
    }

    breakPoint.addListener( callback );
    callback( breakPoint );
    
}
