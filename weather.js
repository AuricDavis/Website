let url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=5b269cb43b021859efb882bb3e9b017c";


function updateTodayWeather() {
    
    //---------------------
    // This is where you would get references to all
    // HTML elements that you want to update with new data
    // based on the results of the asynchronous API call you make below
    //---------------------
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            //---------------------
            console.log("Successful...");
            // console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------
            // console.log(this.response);
            
            let weatherDataDays = JSON.parse(this.response)
            // console.log(weatherDataDays.list);
            // console.log(weatherDataDays.list.length);
            // console.log(weatherDataDays.list[0].main);
            console.log(weatherDataDays);

            let today = new Date();

            let dayElement = document.querySelector('#day');
            dayElement.innerText = today;
            let conditionsElement = document.querySelector('#conditions');
            conditionsElement.innerText = weatherDataDays.weather[0].main;
            let currentTempElement = document.querySelector('#currentTemp');
            currentTempElement.innerText = weatherDataDays.main.temp;
            let highTempElement = document.querySelector('#highTemp')
            highTempElement.innerText = weatherDataDays.main.temp_max;
            let lowTempElement = document.querySelector('#lowTemp');
            lowTempElement.innerText = weatherDataDays.main.temp_min;

            // let dayData = [];

            // for(let counter = 0; counter < weatherDataDays.list.length; counter++) {



            //     let currentDay = weatherDataDays.list[counter];
            //     console.log(currentDay.main.temp);
                


            // }

        } else {
            
            //---------------------
            console.log("failure...")
            // error message for user that API is down
            //---------------------
            
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
        
//---------------------
// Make sure you call the function to begin the request for information
// In the weather widget, you will want to call this function using the
// onClick event of the form submit button
updateTodayWeather();
//---------------------