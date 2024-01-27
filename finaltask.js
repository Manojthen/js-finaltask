var request=XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((a)=>{
    if(a.region==='Asia'){
        return a.name;
    }
})
console.log(asia);}

//calcuatethe popuation

var request=XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    const populate=countryData.filter((element)=>{
    return Element.population<200000;
})    
console.log(populate);} 


// name the capital

var request=XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    countryData.array.forEach(element => {
        console.log(element.name,element.capital.element.flag)
    })};




var request=XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    const populate=countryData.reduce((acc,element)=>{
       return acc+element.population;
    })
console.log(population);}   



var request=XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var countryData=JSON.parse(this.response);
    for(i=0;i<DataTransfer.length;i++){
        if(data[i].currencise[0].code==="USD")
        {
            console.log("name:",data[i].currencies[0].code)
        }
    }

}    








