function loginCheck(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    console.log(email);
    console.log(password);

    let predefinData = {
        trMayOo : 'may.wytu@gmail.com',
        trLoki  : 'winsandymyint@gmail.com',
        email : 'khins4642@gmail.com',
        password : 12345678
    };
    console.log(predefinData.email);
    console.log(predefinData.password);
    console.log(password.toString().length);
    console.log(email.toString().length);

    
    if(email.toString().length >=1 || password.toString().length >= 1){
    
        if(email.match(mailformat)){

            if(email.match(mailformat) && password.toString().length >= 8){
                    
                if((email== predefinData.email || email == predefinData.trMayOo || email == predefinData.trLoki)  && password==predefinData.password){
                    console.log("email and password is equal");
                    window.location ="../Final_project/adminPanal.html";
                }
                else{
                    console.log("no");
                    window.location ="../Final_project/invalid.html";
                }
            }
            else{

                alert('Please Fill. The password is at least 8 Characters');
            }

        }
        else{
            alert('Check Your Email');
        }
    }
    else{
        alert("Email and Password is Required.");
    }
    
    
}