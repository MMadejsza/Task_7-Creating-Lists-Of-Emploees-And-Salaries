function getElement(el) {
    return document.getElementById(el);
}

const calculateButton = getElement('calculate');
calculateButton.addEventListener("click", mainFunction);

class Employee {
    constructor(name, surname, hours, rate, payment) {
        this.name = name;
        this.surname = surname;
        this.hours = hours;
        this.rate = rate;
        this.payment = payment;
    }
}

const workersList = [];

function mainFunction() {
    const name = getElement('name').value
    const surname = getElement('surname').value
    const hours = getElement('hours').value
    const rate = getElement('rate').value
    const payment = calculatePayment(hours, rate);

    const worker = new Employee(name, surname, hours, rate, payment);
    // console.log('Worker Details:', worker);
    workersList.push(worker);

    displayConfirmation(worker);
}

function calculatePayment(hours, rate) {
    let base = hours * rate;
    if (hours > 160) {
        return `&pound${base * 1.1}`;
    } if (hours < 120) {
        return `&pound${base * 0.9}`;
    } else {
        return `&pound${base}`;
    }

}

function displayConfirmation(worker) {
    const description = createElement("div", "class", "description");
    const par = createElement('p', 'class', 'result');
    const payment = createElement('p', 'class', 'result');

    par.innerHTML =
        `<p> Name: ${worker.name} </br>
    Surname: ${worker.surname}</p>
    `
    payment.innerHTML = `<p>Upcoming Salary: ${worker.payment}</p>`

    description.appendChild(par);
    description.appendChild(payment);

    getElement('worker').appendChild(description);

}

function createElement(el, tag, name) {
    const element = document.createElement(el);
    element.setAttribute(tag, name);
    return element;
}