function generateInputFields(numFields) {
    var container = document.getElementById('inputContainer');
    inputContainer.innerHTML = "";
    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = "field" + i;
        container.appendChild(input);
    }
}

function validateForm() {
    var inputs = document.querySelectorAll('#inputContainer input');
    for (var i = 0; i < inputs.length; i++){
        if (inputs[i].value === "") {
            alert("Please fill in all fields");
            return false;
        }
    }
    return true;
}

var numFields = document.getElementById("numFields");
numFields.addEventListener("change", function() {
    generateInputFields(this.value);
});

var form = document.getElementById("dynamicForm");
form.addEventListener("submit", function(event) {
    if (!validateForm()) {

    }
});