class AlertService {
    showResult(res) {
        $('.alert-info')[0].innerHTML = `Result is <strong>${res}</strong>`;
        $('.alert-info')[0].style.display = 'block';
    }
    
    showError(msg) {
        $('.alert-danger')[0].innerText = msg;
        $('.alert-danger')[0].style.display = 'block';
    }
    
    hideAlerts() {
        $('.alert-info')[0].style.display = 'none';
        $('.alert-danger')[0].style.display = 'none';
    }
}