
document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()
    const itemCategory = document.getElementById('itemCat').value.trim()
    const itemDescription = document.getElementById('itemDesp').value.trim()
    const photo = document.getElementById('photo').value.trim()
    const url = encodeURIComponent(photo)
    const contactInfo = document.getElementById('contactInfo').value.trim()
    const price = document.getElementById('price').value.trim()

     const userObj = {
         categeory: itemCategory,
         description: itemDescription,
         imageURL: url,
         contactInfo: contactInfo,
         price: price
     }
     var obj = JSON.stringify(userObj)
     console.log(obj)
    
       fetch(`/form?info=${JSON.stringify(userObj)}`).then((response)=>{
           
        alert("form");
        window.location.href = "http://localhost:3000/index.html"

            response.then((data)=>{
                if (data.error){
                    
                 console.log('Error sending response !')

                    return
                }
               alert('Data Entered')
            })

})
    
        
    
})