var transition = function(target){

	var home = document.getElementById("homePage");
	var account = document.getElementById("accountPage");
	var cart = document.getElementById("cartPage");
	var about = document.getElementById("aboutPage");

	switch(target){

		case 'home':
			home.style.display ="block";
			account.style.display ="none";
			cart.style.display ="none";
			about.style.display = "none";
			break;

		case 'cart':
			home.style.display ="none";
			account.style.display ="none";
			cart.style.display ="block";
			about.style.display = "none";
			break;

		case 'account':
			home.style.display ="none";
			account.style.display ="block";
			cart.style.display ="none";
			about.style.display = "none";
			break;
		case 'about':
			home.style.display ="none";
			account.style.display ="none";
			cart.style.display ="none";
			about.style.display = "block";
			break;
		default :
			home.style.display ="block";
			account.style.display ="none";
			cart.style.display ="none";
			about.style.display = "none";

	}
}

var checkTransition =(function(){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var where = url.searchParams.get("where");

	if (where) {
		transition(where);
	}
})();



var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex + n -1);
}

function currentSlide(n){
	showSlides(n-1);
}

function showSlides(x) {
	slideIndex =x;
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  	}
  	
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length-1}
    
    slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	slideIndex++;
    setTimeout(function(){ showSlides(slideIndex) }, 6000); 
} 

var slideClick =function(id){
	var temp = data.products.length -id +1;
	window.location = 'includes/product/product.html?id='+temp;
}


var ProductController =(function(){
	

	var html = '<div class="product" id="%id%"><img class="productImg" src="products/%img%"><div class="productTag"> %tag% </div><div class="productPrice">Price: RS %price% </div><div class="addToCart" onclick="addToCart(event)"><button>Add to Cart</button></div></div>';

	var addItem = function(product){
		var newHtml, temp = html;
	
		newHtml = temp.replace('%img%',product.img);
		newHtml = newHtml.replace('%id%',product.ID);
		newHtml = newHtml.replace('%price%',product.price);
		newHtml = newHtml.replace('%tag%',product.tag);

		document.querySelector(".products").insertAdjacentHTML('beforeend',newHtml);
	}

	for (var i = 0; i < data.products.length; i++) {
		addItem(data.products[i]);
	}

	document.querySelector(".products").addEventListener('click',function(e){
		var id = parseInt(e.target.parentNode.id);
		if (id != NaN && id) {
			window.location = 'includes/product/product.html?id='+id;
		}
	});

	return {
		data
	}
})();


var cart = (function(pc){

	
	var total =0;
	var homePage = document.getElementById("homePage");
	var cartPage = document.getElementById("cartPage");
	var products = pc.data.products;


	var checkoutbtn = document.getElementById("checkoutbtn");
	var noItemText =  document.getElementById("noItem");
	var clearCart = document.getElementById("clearCartbtn");

	var hideDisplay = function(){
		
		if (items.length != 0) {
			noItemText.style.display = "none";
			clearCart.style.display = "block";
			checkoutbtn.style.visibility = "visible";

			document.getElementById('clearCartbtn').addEventListener('click',function(){
				sessionStorage.clear();
				items = [];
				quantity = [];
				addItem();
			});
			
		} else {
			noItemText.style.display = "block";
			clearCart.style.display = "none";
			checkoutbtn.style.visibility = "hidden";
			document.querySelector(".totalPrice #amount").innerHTML = 0;
		}
	}
	
	 var changeButton= function(){
		var button = document.querySelectorAll(".addToCart button");
		var id;
		for (var i = button.length - 1; i >= 0; i--) {
			
			id = button[i].parentNode.parentNode.id;
			
			if (items.indexOf(id) != -1) {

				button[i].value= "Add More";
				button[i].innerHTML= "Add More";
				button[i].innerText= "Add More";
				button[i].style.backgroundColor = "#4CAF50";;
			}
			else {
				button[i].value= "Add to Cart";
				button[i].innerHTML= "Add to Cart";
				button[i].innerText= "Add to Cart";
				button[i].style.backgroundColor ="#FF4500";;
			}
		}
	}

	document.querySelector('.cartItems').addEventListener('click',function(e){
		var id = parseInt(e.target.parentNode.parentNode.id);
		var className = e.target.className
		var strId = id+"";
		
		if (id && className == "removeItem") {
			deleteItem(id);
		} else if (id && className == "plus") {
			quantity[items.indexOf(strId)]++;
		
			cartChanged();
		} else if (id && className == "minus") {

			quantity[items.indexOf(strId)]--;
			if (quantity[items.indexOf(strId)] == 0) {
				deleteItem(id);
			} else {
				cartChanged();
			}
		}

	}); 

	

	html = '<div class="cartItem" id=%id%><div class="itemTag"> %itemTag% </div><div><button class="removeItem">X</button></div><div class="updown"><button class="plus">+</button><button class="minus">-</button></div><div class="itemPrice"> Price: %itemPrice% </div><div class="itemQuantity"> Quantity: %itemQuantity% </div></div>';

	var addIteminUI = function(cartItem){
		var newHtml, temp = html;
	
		newHtml = temp.replace('%itemTag%',cartItem.tag);
		newHtml = newHtml.replace('%itemPrice%',cartItem.price);
		newHtml = newHtml.replace('%id%',cartItem.ID);
		newHtml = newHtml.replace('%itemQuantity%',cartItem.quantity);
		total = total + cartItem.price;
		document.querySelector(".cartItems").insertAdjacentHTML('beforeend',newHtml);
		document.querySelector(".totalPrice #amount").innerHTML = total;
		
	}

	var addItem = function(){
		var id;
			var temproduct;

			var myNode = document.querySelector(".cartItems");
			while (myNode.firstChild) {
    			myNode.removeChild(myNode.firstChild);
    			total = 0;
			}
			hideDisplay();

			for (var i = 0; i < items.length; i++) {
				id= items[i];
				temproduct = products[id-1];
				addIteminUI(new CartItem(id, temproduct.tag, quantity[i],temproduct.price * quantity[i]));
			}
	}

	var deleteItem = function(id){
		for (var i = 0; i < items.length ; i++) {
			if (id == items[i]) {
				items.splice(i,1);
				quantity.splice(i,1);
				break;
			}
		}
		
		cartChanged();
	}

	var cartChanged = function(){
			window.sessionStorage.setItem("items", JSON.stringify(items));
			window.sessionStorage.setItem("quantity", JSON.stringify(quantity));
			addItem();
			changeButton();
	}

	if(items.length != 0){
		addItem();
	} else{
		changeButton();
	}

	hideDisplay();
	changeButton();
	
	return {

		insideCart : function(id){
			
			if (items.indexOf(id) != -1) {
				quantity[items.indexOf(id)]++;
			} else {
				items.push(id);
				quantity.push(1);
			}
			cartChanged();
				
		},

		items,
		quantity
	}
})(ProductController);

var addToCart = function(event){
	
	var id =event.target.parentNode.parentNode.id;
	cart.insideCart(id);
}

