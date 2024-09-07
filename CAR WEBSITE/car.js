function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill out all fields.');
    }

    return false; // Prevent form submission for demo purposes
}

function filterCars() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const carItems = document.querySelectorAll('.car-item');

    carItems.forEach(item => {
        const carName = item.getAttribute('data-name').toLowerCase();
        if (carName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
