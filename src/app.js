const alertService = new AlertService();

$(() => $('[data-toggle="tooltip"]').tooltip());

function showModal() {
    $('#warn-modal').modal({ show: true });
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
    
    alertService.hideAlerts();
    numbers.shift();
    if (type === 'div' && parseFloat(numbers[0].value) === 0) {
        alertService.showError('Cannot divide by zero!');
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
    
    setClassNames(col, form_group, input);
    setExtraInfo(input, label);   

    col.appendChild(form_group);
    form_group.appendChild(label);
    form_group.appendChild(input);

    $('.row')[0].appendChild(col);
}

function setClassNames(col, form_group, input) {
    col.className = 'col';
    form_group.className = 'form-group';
    input.className = 'form-control number';
}

function setExtraInfo(input, label) {
    input.placeholder = 'Numbers only...';
    input.type = 'number';
    label.innerText = `Number ${getAllNumbers().length+1}`;
}