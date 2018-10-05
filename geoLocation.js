

class GeoLocation {
    constructor (){
        
        this.key ='AIzaSyBDbs4msfdGLRHh0TSDKOukB5nTF6cWeyk';
    }

async getLoc(){

   const address = document.getElementById('search').value

    //const address = document.getElementById('search').value;
     
   const   geoLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.key}`)

   const response = await geoLocation.json()
  
   return response;
   
    }
    

}

// creating objct of class

//  const getObj = new Get;

//  getObj.getLoc()
 
//  .then(data => console.log(data))

//  getObj.getLoc().then(data => console.log(data.results[0].formatted_address))