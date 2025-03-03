document.addEventListener("DOMContentLoaded", function(){

    let form_errors = [];

    const nameField = document.getElementById("namefield");
    const allowedNamePattern = /^[a-zA-Z]+$/;

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
        }
    });

    const comments = document.getElementById("comments");
    const charCountDisplay = document.getElementById("charCount");
    const maxLength = comments.maxLength;

    // only ascii, so no emojis.
    const allowedCommentPattern = /^[\x00-\x7F]*$/;
    comments.addEventListener("input", function() {
        const errorMsg = document.getElementById("error-message");
        if (!allowedCommentPattern.test(comments.value)){
            // usernameField.classList.add("invalid");
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

});