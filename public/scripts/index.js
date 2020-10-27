
document.getElementById('search').addEventListener('submit' , (e)=>{
e.preventDefault()
let input = document.getElementById('searchInput').value.trim()
    console.log(input)
fetch(`/find?string=${input}`).then((response)=>{
           
    window.location.reload();

    response.then((data)=>{
        if (data.error){
            
            console.log('Error sending response')

            return
        }
       console.log(data)
    })
 })

})

document.getElementById('showAll').addEventListener('click' , ()=>{
    fetch('/searchAll').then((response)=>{
        window.location.reload();

    })

})