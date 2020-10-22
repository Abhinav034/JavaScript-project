document.querySelector('form').addEventListener('submit' , (e)=>{
    e.preventDefault()
    const itemCategory = document.getElementById('itemCat').value
    const itemDescription = document.getElementById('itemDesp').value
    const sellerInfo = document.getElementById('sellerInfo').value
    const contactInfo = document.getElementById('contactInfo').value
    const price = document.getElementById('price').value

     const userObj = {
         categeory: itemCategory,
         description: itemDescription,
         sellerInfo: sellerInfo,
         contactInfo: contactInfo,
         price: price

         // username: 
         // soluout : False
     }

    
       fetch(`/form?info=${JSON.stringify(userObj)}`).then((response)=>{
           

            response.then((data)=>{
                if (data.error){
                    
                 console.log('Error sending response !')

                    return
                }
               alert('Data Entered')
            })
})

})