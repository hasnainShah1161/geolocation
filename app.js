

//creating objct of the GET class
let getClassObj  = new GeoLocation;

//getClassObj.getLoc().then(data => console.log(data))


//getClassObj.getLoc()



document.getElementById('searchBtn').addEventListener('click',searchLocation);

function searchLocation(e){

  
     getClassObj.getLoc().then(response => {

     //const formattedAddress = response.results[0].formatted_address;
     console.log(response)
        // when there is no match found
     
        if (response.status === 'ZERO_RESULTS'){
       
        
             //selecting parent container
        const  parentContainer = document.querySelector('#parentContainer');
        //where we want to put the div
        const child = document.querySelector('#searchContainer');
        
        const div = document.createElement('div');
  
        div.className = 'alert alert-danger col-md-9 mx-auto';

        div.appendChild(document.createTextNode('NO RESULTS FOUND FOR THIS SEARCH'));
        
        parentContainer.insertBefore(div,child);

        setTimeout(() => {
          
          div.remove();
        }, 2000);
  
    
        
        }
      
      

     const addressComponents = response.results[0].address_components;
     const containerLocation = document.querySelector('.containerLocation');

     let latitude = response.results[0].geometry.location.lat;

     let longitude = response.results[0].geometry.location.lng;

      //to clear the existing screen
      if (containerLocation !==''){

        containerLocation.innerHTML = '';
     }
    
    
     addressComponents.forEach(singleIteration => {
        
      
     containerLocation.innerHTML +=`<ul class = "list-group" >
     <li class = "list-group-item lead">Type:${singleIteration.types}</li>
     <li class = "list-group-item lead">Full_Name:${singleIteration.long_name}</li>
    
     </ul>`
    });

    containerLocation.innerHTML += `<ul class ="list-group">
    <li class ="list-group-item lead">Formatted_address:${response.results[0].formatted_address}</li>
    <li class ="list-group-item lead">Longitude:${longitude}</li>
    <li class ="list-group-item lead">Latitude:${latitude}</li>
     `
    });

 //to clear the screen when input field is empty
  const search = document.getElementById('search').value;
 if(search === ''){
   containerLocation.remove();
 }

   
e.preventDefault();



}

