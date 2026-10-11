async function func(){
    let response=await fetch('Info.txt')
    let text=await response.text()
    console.log(text)
    document.getElementById('para').innerHTML=text
}
func()