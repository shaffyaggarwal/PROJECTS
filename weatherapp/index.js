window.addEventListener("load" , ()=> {
    let long ;
    let lat ;
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureSection=document.querySelector(".temperature");
    let temperatureSpan=document.querySelector(".temperature span");
    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                console.log(position);
                long=position.coords.longitude;
                lat=position.coords.latitude;
                let api=`https://api.darksky.net/forecast/613759100ddc17a5f8631cd3ac1af1da/${lat},${long}`;
                fetch(api)
                .then(response=>{
                        return response.json();
                })
                .then(data=>{
                    console.log(data);
                    const {temperature,summary,icon} = data.currently;
                     temperatureDegree.textContent=temperature;
                     temperatureDescription.textContent=summary;
                    locationTimezone.textContent= data.timezone;
                    setIcons(icon, document.querySelector(".icon"));
                   
                    farenToCel(temperature);
                });
            });
    }
    else{
        alert("THIS IS NOT WORKING");
    }


    function setIcons(icon,iconID){
        const skycons =new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);

    }


    function farenToCel(temp){
        let celsius = (temp-32)*(5/9)
        temperatureSection.addEventListener("click", ()=>{
            if(temperatureSpan.textContent=="F"){
                temperatureSpan.textContent="C";
                temperatureDegree.textContent = Math.floor(celsius);
            }
            else{
                temperatureSpan.textContent="F"
                temperatureDegree.textContent=temp;
            }
         });

     }
   
   
});