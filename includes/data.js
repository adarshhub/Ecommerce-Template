var Product = function(id, tag, description, price, img){
		this.tag = tag;
		this.ID= id;
		this.description = description;
		this.price = price;
		this.img = img;
	}

var data= {
		products: [new Product(1, "MarQ AC Inverter", "    1 Ton : Great for small sized rooms (upto 90 sq ft)<br/><br/>\
													    3 Star : For energy savings upto 15% (compared to Non-Inverter 1 Star)<br/><br/>\
													    Auto Restart: No need to manually reset the settings post power-cut<br/><br/>\
													    Copper : Energy efficient, best in class cooling with easy maintenance.<br/><br/>\
													    Sleep Mode: Auto-adjusts the temperature to ensure comfort during your sleep", 26999, "ac.jpeg"),
		 new Product(2, "Googles", "    Frame Size: Free Size (One Size Fits All)<br/><br/>\
									    Lens Color: Black, Blue<br/><br/>\
									    Features: UV Protection<br/><br/>\
									    Purpose: Driving, Running, Style<br/><br/>\
									    Frame Color: Black", 399, "googles.jpeg"),
		  new Product(3, "HP Acer Laptop", "    Intel Core i5 Processor (8th Gen)<br/><br/>\
											    8 GB DDR4 RAM<br/><br/>\
											    Linux/Ubuntu Operating System<br/><br/>\
											    1 TB HDD<br/><br/>\
											    15.6 inch Display", 34999, "hp2.jpg"),
		   new Product(4, "Female Dress", "    Length: Maxi/Full Length<br/><br/>\
											    Fabric: Rayon<br/><br/>\
											    Occasion: Casual<br/><br/>\
											    Sleeveless Printed Dress<br/><br/>\
											    Belt Included", 999, "dress.jpeg"),
		   new Product(5, "Apple Iphone X", "4 GB RAM | 32 GB ROM | Expandable Upto 256 GB <br/><br/>\
				    						6.3 inch FHD+ Display <br/><br/>\
				    						16MP + 2MP Dual Rear Camera | 16MP Front Camera<br/><br/>\
				    						3260 mAh Li-ion Battery<br/><br/>\
				    						Qualcomm Snapdragon 450 Processor", 49999, "phone1.jpeg"),
		  new Product(6, "Apple Iphone 8 new", "64 GB ROM |<br/><br/>\
												    5.5 inch Retina HD Display<br/><br/>\
												    12MP + 12MP Dual Rear Camera | 7MP Front Camera<br/><br/>\
												    lithium-ion Battery<br/><br/>\
												    A11 Bionic Chip with 64-bit Architecture,<br/> Neural Engine,<br/> Embedded M11 Motion Coprocessor Processor", 34999, "phone2.jpeg"),
		   new Product(7, "Sports Watch", "    Watch Movement: QUARTZ<br/><br/>\
											    Water Resistant<br/><br/>\
											    Display Type: Digital<br/><br/>\
											    Strap: Multicolor, SILICONE<br/><br/>\
											    Scratch Resistant", 3100, "watch.jpeg"),
		   new Product(8, "Nova Trimmer", "    Ideal For: Men<br/><br/>\
										    For Body Grooming, Beard & Moustache<br/><br/>\
										    Power Source: Battery<br/><br/>\
										    Blade Material: Stainless Steel<br/><br/>\
										    Washable Head", 599, "trimmer 2.jpeg"),
		  new Product(9, "Color T Shirt", "    Fabric: Cotton<br/><br/>\
											    Regular Fit Henley T-shirt<br/><br/>\
											    Pattern: Solid<br/><br/>\
											    Sleeve Type: Narrow Full Sleeve", 399, "t shirt.jpeg"),
		   new Product(10, "Wooden Guitar", "    Brand:\
											        Medellin<br/><br/>\
											    Model Number:\
											        MED-NAT-C<br/><br/>\
											    Type:\
											        Acoustic Guitar<br/><br/>\
											    Number of Strings:\
											        6<br/><br/>\
											    Body Material:\
											        Linden Wood<br/><br/>\
											    Fretboard Material:\
											        Rosewood<br/><br/>\
											    String Material:\
											        Stainless Steel<br/><br/>\
											        If you are a music lover and a fan of acoustic guitars in particular, then this 38 inch guitar from the house of Juarez is a must buy. Great quality and impeccable styling are just some of the features. Manufactured by a leading brand, this basic acoustic guitar is highly attractive to look at, courtesy its stylised looks.", 999, "guitar image.jpeg"),
		   new Product(11, "Travel Bag", "    Duffel Strolley Bag<br/><br/>\
    											Cabin Size<br/><br/>\
    											For Men & Women<br/><br/>\
    											Material: Polyester<br/><br/>\
    											Number of Compartments: 2", 3880, "travel bag.jpeg"),
		  new Product(12, "Puma Shoe", "General<br/><br/>\
									    Model Name: \
									        Poise Perf IDP<br/><br/>\
									    Ideal For: \
									        Men<br/><br/>\
									    Occasion: \
									        Casual<br/><br/>\
									    Inner Material: \
									        PU<br/><br/>\
									    Outer Material:\
									        PU<br/><br/>\
									Product Details<br/><br/>\
									    Sole Material:\
									        Rubber<br/><br/>\
									    Season:\
									        SS 18", 1200, "Puma Shoe.jpeg"),
		  new Product(13, "The Subtle Art of Not Giving a F*ck", "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better, happier people. For decades, weve been told that positive thinking is the key to a happy, rich life. Fuck positivity, Mark Manson says. Lets be honest, shit is fucked and we have to live with it. In his wildly popular Internet blog, Manson doesnt sugarcoat or equivocate. He tells it like it is-a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving his antidote to the coddling, lets-all-feel-good mindset that has infected. American society and spoiled a generation, rewarding them with gold medals just for showing up.<br /><br /> By <strong>Mark Mansion</strong> ", 199, "book.jpeg"),
		  new Product(14, "Centuary Mattresses Flexi HR 5 inch", "    Length: 78 inch, Width: 60 inch, Thickness: 5 inch (6 ft 6 in x 5 ft x 5 in) <br /><br />\
    																Support Type: High Resilience (HR)<br /><br />\
    																 Foam|Support Subtype: Standard Foam<br /><br />\
    																Comfort Layer: PU Foam<br /><br />\
    																Mattress Features: NA", 2899, "mattress.jpeg"),
		   new Product(15, "Canon EOS 1300D DSLR", "    18 megapixel APS-C CMOS sensor & DIGIC 4+,<br /> Wi Fi and NFC supported,<br /> 9 point AF with 1 centre cross type AF point<br /><br />\
    													Effective Pixels: 18 MP<br /><br />\
    													Sensor Type: CMOS<br /><br />\
    													WiFi Available", 24000, "cannon.jpeg"),
		   new Product(16, "Link DIR-816 Wireless","     Type: Wireless Without Modem<br/><br/>\
													    750 Mbps Speed<br/><br/>\
													    Frequency: 5 GHz, 2.4 GHz<br/><br/>\
													    External Antenna<br/><br/>\
													    <strong> Lightning-Fast</strong><br/>\
														This wireless router gives you lightning fast speed of up to 750 Mbps and ensures ultimate wireless performance", 1700, "dlink.jpeg"),
		   new Product(17, "Asus Zenfone Max Pro M1"," 2 GB RAM | 16 GB ROM | Expandable Upto 64 GB<br/><br/>\
													    5.5 inch HD Display<br/><br/>\
													    13MP Rear Camera | 5MP Front Camera<br/><br/>\
													    5000 mAh Li-Polymer Battery<br/><br/>\
													    Qualcomm Snapdragon 410 Quad Core 1GHz Processor", 74999, "zenfone.jpeg"),
		   new Product(18, "MSI Gamming Laptop","  Intel Core i5 Processor (8th Gen)<br/><br/>\
												    8 GB DDR4 RAM<br/><br/>\
												    64 bit Windows 10 Operating System<br/><br/>\
												    1 TB HDD<br/><br/>\
												    15.6 inch Display", 56999, "msilaptop.jpeg")]
	}

var CartItem = function(ID ,tag, quantity, price){
		this.ID = ID;
		this.tag = tag;
		this.quantity = quantity;
		this.price = price;
	}

var items = [];
var quantity = [];


var storedItemsArray = JSON.parse(sessionStorage.getItem("items"));
var storedQuantityArray = JSON.parse(sessionStorage.getItem("quantity"));


if (storedItemsArray) {
	var i;
	for ( i = 0; i < storedItemsArray.length; i++) {
             items.push(storedItemsArray[i]); 
	}
	for ( j = 0; j < storedQuantityArray.length; j++) {
             quantity.push(storedQuantityArray[j]); 
	}
} 










