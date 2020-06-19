var check = function checkForm(form) {
    // testing first and last name
    var name = /^[A-Z][a-z]+/;
    if(!name.test(form.firstname.value)) {
      alert("Must start with a capital and only alphabet allowed.");
      form.firstname.focus();
      return false;
    }
    if(!name.test(form.lastname.value)) {
        alert("Must start with a capital and only alphabet allowed.");
        form.lastname.focus();
        return false;
    }
    // testing username
    var username=/^[a-zA-Z]{1,}/;
    if(!username.test(form.username.value)) {
        alert("Must begin with a letter and have at least 6 characters.");
        form.username.focus();
        return false;
    }
    // testing password
    var password = /^[\.\*\+\?\[\{\(\)\}\]\$\^\/\\](\w){1,5}/
    if(!password.test(form.password.value)) {
        alert("Must begin with special character, have at least 1 letter and 1 digit, and be exactly 6 characters long.");
        form.password.focus();
        return false;
    }
    if (age == "") {
        alert("Age cannot be empty.");
        form.age.focus();
        return false;
    }
    // if all input is valid
    alert("Success!");
    return true;
}

function valid() {
    if (check == true) {
        document.forms["signup"].submit();
    }
}
