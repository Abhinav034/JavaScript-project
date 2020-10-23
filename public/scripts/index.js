
    fetch("/home").then((response)=>{

    });


document.getElementById('search').addEventListener('submit' , (e)=>{
e.preventDefault()
let input = document.getElementById('searchInput').value
    console.log(input)
fetch(`/find?string=${input}`).then((response)=>{
           
    console.log(response)
    response.then((data)=>{
        if (data.error){
            
            console.log('Error sending response')

            return
        }
       console.log(data)
    })
 })

})