// Events
$(() => $('[data-toggle="tooltip"]').tooltip());
$(document).ready(showModal);
$('#add-number').click(addNumber);
$('#sum').click(() => calculate('sum'));
$('#sub').click(() => calculate('sub'));
$('#div').click(() => calculate('div'));
$('#mul').click(() => calculate('mul'));

// Modal
function showModal() {
    $('#warn-modal').modal({ show: true });
}

// Handlers
function showResult(res) {
    $('.alert-info')[0].innerHTML = `Result is <strong>${res}</strong>`;
    $('.alert-info')[0].style.display = 'block';
}

function showError(msg) {
    $('.alert-danger')[0].innerText = msg;
    $('.alert-danger')[0].style.display = 'block';
}

function hideAlerts() {
    $('.alert-info')[0].style.display = 'none';
    $('.alert-danger')[0].style.display = 'none';
}

function checkNaN(res) {
    if (isNaN(res)) {
        showError('Please input at least a second number.');
    } else {
        showResult(res);
    }
}

function getAllNumbers() {
    return [... document.querySelectorAll('.number')];
}

function calculate(type) {
    const numbers = getAllNumbers();
    let res = parseFloat(numbers[0].value);
    const types = {
        sum: number => res += parseFloat(number.value),
        sub: number => res -= parseFloat(number.value),
        div: number => res /= parseFloat(number.value),
        mul: number => res *= parseFloat(number.value)
    }
    
    hideAlerts();
    numbers.shift();
    if (type === 'div' && parseFloat(numbers[0].value) === 0) {
        showError('Cannot divide by zero!');
    } else {
        numbers.forEach(types[type]);
        checkNaN(res);
    }
}

function addNumber() {
    $('#div')[0].disabled = true;
    
    const col = document.createElement('div');
    const form_group = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    col.className = 'col';
    form_group.className = 'form-group';
    input.className = 'form-control number';
    input.placeholder = 'Numbers only...';
    input.type = 'number';
    label.innerText = `Number ${getAllNumbers().length+1}`;

    col.appendChild(form_group);
    form_group.appendChild(label);
    form_group.appendChild(input);

    $('.row')[0].appendChild(col);
}