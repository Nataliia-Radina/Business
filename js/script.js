$(document).ready(function () {

	$('#contact-form').submit(function(){
        validateForm();
 	});

function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var mes = document.getElementById('mes');
    if (name == null || name == '' || email == null || email == '' || mes == null || mes == '') {
	        alert("Please fill in all the fields")
        return false;
    } 
    return true;
    }

});
