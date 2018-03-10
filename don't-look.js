


function start() {
  while true {
    
    setTimeout(function(){

      document.getElementById("trap").style.display = "none"

    } , 1000)

    
    
    setTimeout(function(){
      
      document.getElementById("trap").style.display = ""
      
    } , 1000)
  }
}

start()