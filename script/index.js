//  Створіть сторінку коментарів та стилізуйте її як сторінка відгуків. 
//  За допомогою методів перебору виведіть на сторінку коментарі, пошту, номер коментаря та автора
//  Дані тут : https://jsonplaceholder.typicode.com/comments

console.log(data);

function createElement(tagName, text, className) {
    const element = document.createElement(tagName);
    element.textContent = text;
    element.classList.add(className); 
    
    return element
}


data.forEach(function(element) {
    const {name, email, id, body} = element; 
    const arr = [createElement ("div", id, "number"), createElement ("div", name, "name"),createElement ("div", email, "email"),createElement ("div", body, "review")]

    document.querySelector(".root").append(...arr); 

    let userNumber = document.querySelector("#userNumber")
    userNumber.innerHTML = `Number: ${id}`;

    let userName = document.querySelector("#user")
    userName.innerHTML = `Name: ${name}`;

    let emailUser = document.querySelector("#email");
    emailUser.innerHTML = `Email: ${email}`;

    let reviewUser = document.querySelector("#review");
    reviewUser.innerHTML = `Review: ${body}`;


})


document.querySelector(".root").prepend(userName, emailUser, reviewUser); 
