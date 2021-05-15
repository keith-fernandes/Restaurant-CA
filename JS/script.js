// JAVA SCRIPT
// -------> Geting data users <--------------

document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};

// ----------> calculating menus <-------------
//--->menu total<-------

var total_items = 14;
        function CalculateItemsValue(){
            var total = 0;

            for (let i = 1; i <= total_items; i++) {
               itemID =document.getElementById("qnt_" + i);
               total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                
            }
            document.getElementById('ItemsTotal').innerHTML = "€" + total;
        }
        document.querySelectorAll('[id^="qnt_"]').forEach(item => {
            item.addEventListener('keyup', CalculateItemsValue);
        });

 //-----> menu of starters <--------       
var total_start = 4;
    function CalculateStartersValue(){
    var total = 0;
    for (let i = 1; i <= total_start; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('StartersTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateStartersValue);
});

 //-----> menu of main menu <--------
var total_menu = 8;
function CalculateMainMenuValue(){
    var total = 0;
    for (let i = 5; i <= total_menu; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('MenuTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateMainMenuValue);
});

 //-----> menu of drinks <--------
var total_drink = 11;
function CalculateDrinksValue(){
    var total = 0;
    for (let i = 9; i <= total_drink; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('DrinksTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateDrinksValue);
});

 //-----> menu of desssert <--------
var total_dessert = 14;
function CalculateDessertValue(){
    var total = 0;
    for (let i = 12; i <= total_dessert; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('DessertTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateDessertValue);
});

 //-----> menu of vegetarian <--------
// var total_items;
function CalculateVegetarianValue(){
    var total = 0;
    
    for (let i = 1; i <= 8; i++) {
    if(i == 3 || i == 4 || i== 8){
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
}
    document.getElementById('VegTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateVegetarianValue);
});

 //-----> menu of non-veg <--------
// var total_nonv = 5;
function CalculateNonVegetarianValue(){
    var total = 0;

    for (let i = 1; i <= 7; i++) {
        if(i!=3 && i!=4 ){
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    } 
}
    document.getElementById('NonVegTotal').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateNonVegetarianValue);
});


//---------> Validator Password <------
function validatorPswd() {
    var pass = document.getElementById("pswd").value;
    var chara = /(?=(?:.*?[!@#$%*()_+^&}{:;?.]))/g;
    var lCase = /(?=(?=.*[a-z]))/g;
    var uCase = /(?=(?=.*[A-Z]))/g;
    

    do {
        if (pass == "") {
            document.getElementById("message").innerHTML = "-> Enter a password, please!";
            return false;
        }

        else if (pass.length < 8) {
            document.getElementById("message").innerHTML = "-> Password must be at least 8 characters";
            return false;
        }

        else if (!pswd.value.match(lCase)) {
            document.getElementById("message").innerHTML = "-> Password must have: •Capital letter, •Lower case, •Number and •Special Character";
            return false;
        }
        else if (!pswd.value.match(uCase)) {
            document.getElementById("message").innerHTML = "-> Password must have: •Capital letter, •Lower case, •Number and •Special Character";
            return false;
        }
        else if (!pswd.value.match(chara)) {
            document.getElementById("message").innerHTML = "-> Password must have: •Capital letter, •Lower case, •Number and •Special Character";
            return false;
        }
        else {
            alert("Correct, go ahead!");
            return true;
        }
    } while (pass != true);
}

// --------> reference of validator password <-------------
// https://www.w3resource.com/javascript/form/password-validation.php
// https://www.w3schools.com/howto/howto_js_password_validation.asp


var HeightScreen=$(window).height();
$('Slide').height(HeightScreen);


$(function () {
	$('.box').hover(
		function () {
			var overlay = $(this).find('.box-overlay');
			overlay.removeClass(overlay.data('return')).addClass(overlay.data('hover'));
		},
		function () {
			var overlay = $(this).find('.box-overlay');		
			overlay.removeClass(overlay.data('hover')).addClass(overlay.data('return'));

		}
	);
});	


$(document).ready(function() {
    $(".cs-text-cut").lettering('words');
});

