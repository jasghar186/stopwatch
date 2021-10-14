$("document").ready(function(){
    // set variables 
    var vminutes = 0 ;
    var vseconds = 0 ;
    var minutes = $(".minute") ;
    var seconds = $(".second") ;
    var startbtn = $(".startbtn") ;
    var stopbtn = $(".stopbtn") ;
    var resetbtn = $(".resetbtn") ;
    var container = $(".container")
    var interval ;

    //    buttons events

    startbtn.on("click",function(){
        interval = setInterval(startwatch, 30);
    })
    stopbtn.on("click",stopwatch) ;
    resetbtn.on("click",resetwatch)

    //    set both html
    minutes.html(vminutes) ;
    seconds.html(vseconds) ;

    // start button function

    function startwatch(){
        container.removeClass("blink")
     vseconds++ ;
     seconds.html(vseconds) ;
     if(vseconds <= 9){
       seconds.html("0"+vseconds)
     }
     if(vseconds >= 10){
        seconds.html(vseconds)
      }
     if(vseconds >= 99){
        vminutes++ ;
         minutes.html(vminutes+"<sub style='color:white;'>s</sub>")
         vseconds = 0
     } 
    }

    // stop button function
    function stopwatch(){
        clearInterval(interval) ;
        container.addClass("blink")
    }

    // reset button function
    function resetwatch(){ 
        vseconds = 0 ;
        vminutes = 0 ;
        seconds.html(vseconds) ;
        minutes.html(vminutes) ;  
        container.removeClass("blink")
        clearInterval(interval) ;
    }
})