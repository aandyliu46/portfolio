document.addEventListener("DOMContentLoaded", function(){

        let form_errors = [];

        const nameField = document.getElementById("namefield");
        const allowedNamePattern = /^[a-zA-Z]+$/;
        let noNameError = true;
        nameField.addEventListener("input", function(){
            const errorMsg = document.getElementById("error-message");
            if (!allowedNamePattern.test(nameField.value)){
                // usernameField.classList.add("invalid");
                errorMsg.textContent = "Only letters are allowed.";
                errorMsg.style.display = "grid";
                setTimeout(() => {
                    errorMsg.style.display = "none";
                    // usernameField.classList.remove("invalid");
                }, 2000);
                if (noNameError) {
                    form_errors.push({
                        field: "namefield",
                        error: "Only letters are allowed."
                    });
                    noNameError = false;
                }
            }
        });

        const comments = document.getElementById("comments");
        const charCountDisplay = document.getElementById("charCount");
        const maxLength = comments.maxLength;

        // only ascii, so no emojis.
        const allowedCommentPattern = /^[\x00-\x7F]*$/;
        let notInField = true;
        comments.addEventListener("input", function() {
            const errorMsg = document.getElementById("error-message");
            if (!allowedCommentPattern.test(comments.value)){
                if (notInField) {
                    form_errors.push({
                        field: "comments",
                        error: "Only ASCII characters are allowed."
                    });
                    notInField = false;
                }
                errorMsg.textContent = "Only ascii are allowed in comments";
                errorMsg.style.display = "grid";
                setTimeout(() => {
                    errorMsg.style.display = "none";
                }, 2000);
            }
            const charCount = comments.value.length;
            // const remainingChars = maxLength - charCount;
            charCountDisplay.textContent = `${charCount} / ${maxLength} characters used`;
        });

    // On form submit, attach the form_errors as JSON to the server
    const form = document.getElementById("contactform");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        if (form_errors.length > 0) {

            const formErrorsJSON = JSON.stringify(form_errors);
            const errorsInput = document.createElement("input");
            errorsInput.type = "hidden";
            errorsInput.name = "form-errors";
            errorsInput.value = formErrorsJSON;
            form.appendChild(errorsInput);

            form.submit();
        }
    });

});