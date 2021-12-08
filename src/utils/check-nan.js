function checkNaN(res) {
    if (isNaN(res)) {
        alertService.showError('Please input at least a second number.');
    } else {
        alertService.showResult(res);
    }
}
