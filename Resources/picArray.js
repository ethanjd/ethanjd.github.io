var picArray;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		var picArrayJSON = xhttp.responseText;
		picArray = JSON.parse(picArrayJSON);
		picArray = picArray.pictures;
		fetchJSON(picArray);
	}
};
xhttp.open("GET", "https://api.myjson.com/bins/dl9n6", true);
xhttp.send();
