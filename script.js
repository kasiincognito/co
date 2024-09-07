var welcome = document.getElementById("welcome")
content1 = ">>System initialisation...."
content2 = ">>coding.exe version: 1.1 Welcome from Kasi's Dev community, if you are also a Junior developer this is a space fo ya. Commands will be availaible in next version."
content3 = ">>Initialising shutdown sequence: bye bye!"
var text1 = document.getElementById("text1")
var text2 = document.getElementById("text2")
var text3 = document.getElementById("text3")
var interval  = 10

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

animate(content1, welcome) //Je ne sais pas optimiser cette partie, aidez Kasi
setTimeout(function(){
    animate(content2, text1)
    setTimeout(function(){
        animate(content3, text2)
    }, content2.split("").length * 30 + interval)
}, content1.split("").length * 30 + interval)


