function storeFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}
