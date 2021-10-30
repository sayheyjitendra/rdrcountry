

const apiUrl = 'https://extreme-ip-lookup.com/json/?key=ROlrCwxVidWKSfRddSJN'

let savedCountry;

const btn = document.getElementById('buy')

async function getCountry(){
   const response = await fetch(apiUrl)
   const data = await response.json();
   const {country} = data;

   function india(){
    location.href = "http://amazon.in"
   }


   if(country == "India"){
   
   btn.classList.add('hide')
 
   }

}
getCountry()

















