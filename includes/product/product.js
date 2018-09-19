var checkInCart = function(ID){
	var button = document.querySelector(".addToCartbtn");
	
	if (items.indexOf(ID) != -1) {

				button.value= "Add More";
				button.innerHTML= "Add More";
				button.innerText= "Add More";
				button.style.backgroundColor = "#4CAF50";
			}
			else {
				button.value= "Add to Cart";
				button.innerHTML= "Add to Cart";
				button.innerText= "Add to Cart";
				button.style.backgroundColor ="#FF4500";
			}
}

	var url_string = window.location.href;
	var url = new URL(url_string);
	var ID = url.searchParams.get("id");
	var title, description, price;

	title = document.getElementById('productName');
	description = document.getElementById('description');
	price = document.getElementById('price');

	if (ID) {
		var product = data.products[ID-1];
		title.innerHTML = product.tag;
		description.innerHTML = product.description;
		price.innerHTML ="RS "+ product.price;
		document.querySelector(".image").src = "../../products/"+product.img;
		checkInCart(product.ID);	
	}


var transition = function(where){
	window.location = "../../Ecommerce.html?where="+ where;
	//transition(where);
}



function addToCart(){

	var id = data.products[ID - 1].ID;
			
	if (items.indexOf(id) != -1) {
		quantity[items.indexOf(id)]++;
	} else {
		items.push(id);
		quantity.push(1);
	}
	
	window.sessionStorage.setItem("items", JSON.stringify(items));
	window.sessionStorage.setItem("quantity", JSON.stringify(quantity));

	checkInCart(id);

}

