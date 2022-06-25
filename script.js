var btn= document.getElementById('btn')
btn.onclick= async function (){
    let a=await fetch("http://127.0.0.1:8000")
    let b=await a.json()
    console.log(b)
}
