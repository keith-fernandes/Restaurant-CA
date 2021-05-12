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

// https://www.w3resource.com/javascript/form/password-validation.php
// https://www.w3schools.com/howto/howto_js_password_validation.asp


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

