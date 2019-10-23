
//this function will get random companies from the api data
function getApiData(url)
{
    axios.get(url).then((response) =>{
        structureObjectData(getRandomCompanies(response.data));
           
        });
}
//This function will filter out any objects that do not have names
function checkName(item)
{
    return item.name !== ""
}
//this function will getRandom Companies from the api data
function getRandomCompanies(data)
 {  
     //this filters the function and returns an array of objects that have names
    let filteredData = data.filter(checkName);
    let randomArray = [];
    
    //loop 100 times and get 100 random companies
   for(let i = 0; i < 100; i++)
   {
       let random =  Math.floor(Math.random() * filteredData.length);
       randomArray.push(filteredData[random]);
   }

   return randomArray
 }

 // this function will structure the objects for only the data we need to use 
 function structureObjectData(array)
 {
       let newArray = array.map( item => ({symbol: item.symbol,name: item.name, id:item.iexId}));
       console.log(newArray);
       return newArray
 }

 


 getApiData("https://api.iextrading.com/1.0/ref-data/symbols");