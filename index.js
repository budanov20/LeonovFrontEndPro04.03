

let name = prompt("Enter name"),
    surname = prompt("Enter surname"),
    age = +(prompt("Enter your age")),
    city = prompt("Enter your city");

    let man = {
        name,
        surname,
        age,
        city
    };

    let isAllowed = confirm("Do you allow to show your data?");



    isAllowed ? console.log(`Имя пользователя ${man.name} Фамилия ${man.surname}`) : alert("You banned showing your data");
