

function show(){
    var getInp = document.querySelector('#inp')
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${getInp.value}&units=metric&appid=fc7434138bc285562f7d2843c0384fe9`)
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        var getDiv = document.querySelector('#div')
        console.log(data)
        getDiv.innerHTML = `<div class="text-warning text-center row " style="width: 25rem; opacity: ">
    <h4 class="card-title col-12 m-4 p-1 ">City : ${data.name}</h4>
    <h4 class="card-text col-12 m-4 p-1">Temperature : ${data.main.temp}°C</h4>
    <h4 class="card-text col-12 m-4 p-1 ">Feels Like : ${data.main.feels_like}°C</h4>
    <h4 class="card-text col-12 m-4 p-1 ">Humidity : ${data.main.humidity}%</h4> 
    
</div>`
         
    
    })
    .catch(function(err){
        console.log(err)
    })
}