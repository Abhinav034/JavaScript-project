
document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()
    const itemCategory = document.getElementById('itemCat').value
    const itemDescription = document.getElementById('itemDesp').value
    const photo = document.getElementById('photo').value
    const url = encodeURIComponent(photo)
    const contactInfo = document.getElementById('contactInfo').value
    const price = document.getElementById('price').value

     const userObj = {
         categeory: itemCategory,
         description: itemDescription,
         imageURL: url,
         contactInfo: contactInfo,
         price: price

         // username: 
         // soluout : False
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