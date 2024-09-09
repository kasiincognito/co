var welcome = document.getElementById("welcome")
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
content1 = ">>System initialising......"
content2 = ">>coding.exe version : 1.2 - Hello from Kasi's dev community, if you are fascinated by the world of programming, this space is for you!"
content3 = ">>We are waiting for your support to enable commands: Bye Bye!!"
var interval  = 10
var counter = "_"
var audio = document.getElementById("audio")

function animate(insert, out){ //une fonction que j'ai crée pour avoir un effet de ligne de commande sur les textes
    var outList = out.textContent.split("")
    var insertList = insert.split("")
    if(outList.length < insertList.length){
        out.textContent += insertList[outList.length]
        setTimeout(function (){
            animate(insert, out)
        }, 30)
    }
}

audio.play()
setTimeout(function(){
    animate(content1, welcome) //Je ne sais pas optimiser cette partie, aidez Kasi
    setTimeout(function(){
        animate(content2, text1)
        setTimeout(function(){
            animate(content3, text2)
        }, 9400)
    }, 5000)
}, 3000)
