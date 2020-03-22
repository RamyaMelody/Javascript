async function getCountry() {
    var countries = await fetch("https://restcountries.eu/rest/v2/all");
    return await countries.json();
}
async function getWeather(id, capital) {
    var weather = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + capital + "&appid=4b8257af63d0f5bda3a3f065cac5a035");
    var weather = await weather.json();
    document.getElementById("cell" + id).innerHTML = weather.main.temp;
    //return await weather.json();
}
async function result() {
    var country = await getCountry()
    for (i = 0; i < country.length; i++) {
        if (country[i].capital != "") {
            //alert(country[i].capital)


            var row = table.insertRow();
            var cell0 = row.insertCell(0);
            cell0.style.width = "100px"
            cell0.innerHTML = country[i].name;

            var cell1 = row.insertCell(1);
            cell1.style.width = "100px"
            cell1.innerHTML = country[i].capital;

            var img = document.createElement('img');
            var cell2 = row.insertCell(2);
            cell2.style.width = "100px"
            img.src = country[i].flag;
            img.id = "img" + i;
            img.style.width = "60%";
            //img.style.height = "15%";
            cell2.appendChild(img);

            var cell3 = row.insertCell(3);
            cell3.id = "cell" + i;
            //alert(cell3.id)



            (function (i) {
                img.onclick = function () {
                    getWeather(i, country[i].capital);
                }
            })(i);

        }
    }
}

result();
