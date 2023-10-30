const node_for_click = document.getElementById("for_click")

function find_edit(){
    const span1=document.getElementsByTagName("span")[1]
    console.log(span1.innerText)
    span1.innerText = "Brigadina"

    const span2=document.getElementsByTagName("span")[2]
    console.log(span2.innerText)
    span2.innerText = "Valeriia"

    const span3=document.getElementsByTagName("span") [4]
    console.log(span3.innerText)
    span3.innerText = "MMIV"

}
node_for_click.addEventListener("click",find_edit)
