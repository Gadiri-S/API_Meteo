

let api = function (city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0fcabc1688b55061c76b3658d0ebc215`
        ).then(function(res){

            if(res.ok){
                return res.json();
                
            }}
        

        ).then(function(value){
            console.log(value)
            const {icon} = value.weather[0];

            document.getElementById("city").innerHTML=value.name+", "+value.sys.country
            document.getElementById("temperature").innerHTML=value.main.temp+" ° C"
            document.getElementById("weather").innerHTML=`<img src="icons/${icon}.png">`+" "+value.weather[0].main
            document.getElementById("wind").innerHTML=" "+value.wind.speed+" km/h"


           
        }

        ).catch(function(err){
            console.log("Erreur!")
        });
       
};

document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    let city = document.getElementById("input").value;
    api(city)
});


api("koundara");




