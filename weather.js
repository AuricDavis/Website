function loadDoc() {
    
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
            console.log(this.responseText);
            // This is where you would update the HTML elements above
            // with the data you pull from the API call response
            // document.getElementById("demo").innerHTML = this.responseText;
            //---------------------
            
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
loadDoc();
//---------------------