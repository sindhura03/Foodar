var form = document.getElementById("form");
		
form.addEventListener("change", updateFormTotals);

function updateFormTotals(){
	var result = 0;
	console.log("updating total...");
	
	//get style
	var styleArr = document.getElementsByClassName("food-style");
	for (i=0; i < styleArr.length; i++){
		if (styleArr[i].checked){
			result = Number(styleArr[i].value);
		}
	}
	//get tip
	var styleArr = document.getElementsByClassName("food-tip");
	for (i=0; i < styleArr.length; i++){
		if (styleArr[i].checked && result>0){
			result *= (1 + styleArr[i].value / 100);
		}
	}
	
	//keep only two decimal places
	result = result.toFixed(2);
	
	var totalElem = document.getElementById("total");
	totalElem.innerHTML = result;
}