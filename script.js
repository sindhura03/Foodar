var coordinates;
var requests = 0;

//Variables for cityChecker
var cityElem = "cityCheck";
var cityButton = "cityChecker";
var cityInput = "cityZip";
var restaurants = [];

//FOR TEMPLATE
function updateCity(){
	var btn = g(cityButton);
	if (btn != null){
		
		btn.addEventListener("click", function(e){
			
			var value = g(cityInput).value;
			
			if (value != null && value == '40000'){
				g(cityElem).innerHTML = "City is available.";
				g(cityElem).className = "green";
			}else {
				g(cityElem).innerHTML = "City is not yet in our system.";
				g(cityElem).className += " red";
			}
			
			e.preventDefault();
		});
	}
}


/*	updates the navigation bar with number
	of requests that the user has submitted.
*/
function updateRequests(){
	var elem = g("requests");
	if (elem != null){
		elem.innerHTML = "( " + requests + " )" ;
	}
}

function populateRestaurants(){
	restaurants = [
		'Applebees',
		'Burger King',
		'Pizza Hut',
		'McDonalds',
		'Dominos'
	];
	
	var input = g("restaurant");
	
	if (input != null){
		input.addEventListener("keyup", function(e){
			console.log("possible restaurants...");
			
			var value = this.value;
			console.log("value: " + value);
			
			//list possible restaurants
			for (i=0; i < restaurants.length; i++){
				var r = restaurants[i];
				if (value != null && value != "" && r.startsWith(value)){
					console.log("Restaurant: " + r);
				}
			}
			
		});
	}
	
}

function g(id){
	return document.getElementById(id);
}


function loginUser(){
	//Check for Web Storage API support
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage/sessionStorage.
	} else {
		// Sorry! No Web Storage support..
	}
	
	
	if (localStorage.getItem("address_state") == null){
		var username = "username";
		var email = "user@example.com";
		var phone = "1234567890";
		var address_street = "#";
		var address_city = "Troy";
		var address_state = "Michigan";
		var address_zipcode = "48084";
		
		localStorage.setItem("address_street", address_street);
		localStorage.setItem("address_city", address_city);
		localStorage.setItem("address_state", address_state);
		localStorage.setItem("address_zipcode", address_zipcode);
		localStorage.setItem("username", username);
		localStorage.setItem("phone", phone);
		localStorage.setItem("email", email);
		localStorage.setItem("username", username);
	} else {
		//localStorage.address = null;
		//localStorage.removeItem("user");
		
		var address = localStorage.getItem("address_street");
		
		var elem = g("address");
		
		if (elem != null){
			elem.value = address;
		} else {
			//do nothing
			//more than likely this method was executed on another page
			//or the element id is a different name
		}
		
	}
}


updateRequests();
updateCity();
populateRestaurants();
loginUser();