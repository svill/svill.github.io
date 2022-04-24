window.onload = function () {
    var subscribeForm = document.getElementById("subscribe-form");
    var subscribeSpinner = document.getElementById("subscribe-spinner");
    var subscribeComplete = document.getElementById("subscribe-complete");
    var subscribeEmail = document.getElementById("subscribe-email");
    var questionForm = document.getElementById("question-form");
    var questionSpinner = document.getElementById("question-spinner");
    var questionComplete = document.getElementById("question-complete");
    var question = document.getElementById("question");

    function subscribeFormSubmit(event) {
        var url = "https://script.google.com/macros/s/AKfycbxv359mcPKLUgKTr7GDFw1jSwnqcmdnzGaXh6KAEKnJXUZfPWCN6PnORH5I3G3vh2cMZg/exec";
        var request = new XMLHttpRequest();
        request.open('POST', url, true);

        request.onload = function () {
            // request successful
            subscribeSpinner.style.display = "none";
            subscribeComplete.style.display = "block";
            question.style.display = "block";
        };

        request.onerror = function () {
            // request failed
            subscribeSpinner.style.display = "none";
            subscribeForm.style.display = "block";
        };

        request.send(new FormData(event.target)); // create FormData from form that triggered event

        subscribeForm.style.display = "none";
        subscribeSpinner.style.display = "block";

        event.preventDefault();
    }

    function questionFormSubmit(event) {
        var url = "https://script.google.com/macros/s/AKfycbxPtffuRUc0326biGvi4FGgYXeqXmPT9Hzxzh3jjBirRHpwHK8Fq0RJ5gMuKN__CrmH/exec";
        var request = new XMLHttpRequest();
        request.open('POST', url, true);

        request.onload = function () {
            // request successful
            questionForm.style.display = "none";
            questionSpinner.style.display = "none";
            questionComplete.style.display = "block";
        };

        request.onerror = function () {
            // request failed
            questionSpinner.style.display = "none";
            questionForm.style.display = "block";
            questionComplete.style.display = "none";
        };

        var formData = new FormData(event.target);
        formData.append("Email", subscribeEmail.value);

        request.send(formData); // create FormData from form that triggered event

        questionForm.style.display = "none";
        questionSpinner.style.display = "block";
        questionComplete.style.display = "none";

        event.preventDefault();
    }

    subscribeForm.addEventListener("submit", subscribeFormSubmit);
    questionForm.addEventListener("submit", questionFormSubmit);
}