var request = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://restcountries.eu/rest/v2/all';
request.open(method, url, false);
request.onload = function () {
  const data = JSON.parse(this.response)
const cap = data.filter((item)=>{
return item.capital.length<5;
})
for( var i in cap){
console.log(cap[i].capital);
}
const upper = data.map((item)=>{
return item.name.toUpperCase();
})
console.log(upper);
const findName = data.find((item)=>{
return item.name === 'India';
})
console.log(findName);
};
request.send();

