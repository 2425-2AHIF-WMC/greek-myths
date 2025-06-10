document.addEventListener('DOMContentLoaded',  () => {
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    subscribeBtn.addEventListener('click',() => {
        let emailInput = document.getElementById('email').value;
        let nameInput = document.getElementById('name').value;
        addNewSubscriber(emailInput,nameInput);

        (function(){
            emailjs.init({
                publicKey: "XHs6gzcDr6Zbs-fYh",
            });
        })();
        
        let templateParams = {
            email: emailInput,
            name: nameInput,
        };

        emailjs.send('service_GreekMyths', 'template_NewsLetter', templateParams).then(
            (response) => {
        console.log('SUCCESS!', response.status, response.text);
            alert("Thanks for signing up!");
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    });
});

function addNewSubscriber(email,name) {
    const data = {
        email: email,
        name: name
    };

    fetch("http://localhost:3000/newsLetterSubscribers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(() => (
        console.log("successfully added to server")
    ));
}