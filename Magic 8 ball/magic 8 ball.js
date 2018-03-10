function getWord(){
  
  var words = ["Yes" , "No" , "Maybe" , "Ask Again" , "Heck Ya" , "It is certain" , "It is decidedly so" , "Without a doubt" , "Yes definitely" , "You may rely on it" , "As I see it, yes" , "Most likely" , "Outlook good" , "Yep" , "Signs point to yes" , "Reply hazy try again" , "Ask again later" , "Better not tell you now" , "Cannot predict now" , "Concentrate and ask again" , "Don't count on it" , "My reply is no" , "My sources say no" , "Outlook not so good" , "Very doubtful"]
  
  var choice = Math.floor(Math.random() * words.length)
  
  return words[choice]
}


function putWord(){
  
             
  document.getElementById("answer").innerHTML = getWord()
  document.getElementById("ball").style.animation = "shake 2s"

  
  setTimeout(function(){


    document.getElementById("ball").style.animation = ""
    document.getElementById("answer").innerHTML = "Answer"

  } , 1000)
  
}
  


console.log(getWord())