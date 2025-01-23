document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('error');

    // Validate inputs
    if (!username || !password) {
        errorElement.textContent = 'Please enter both username and password.';
        return;
    }

    // Simple username and password check (for demonstration purposes)
    if (username === 'Nilesh' && password === '12345') {
        errorElement.textContent = ''; // Clear any previous error messages
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('home').classList.remove('hidden');
        document.getElementById('Nilesh').classList.remove('msghide');
    } else {
        // Reload the page if credentials are invalid
        errorElement.textContent = 'Invalid username or password';
        setTimeout(() => {
            window.location.reload(); // Reload the page after 2 seconds (optional delay for user to see the error)
        }, 2000); // Adjust the time as needed
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('home').classList.add('hidden');
    document.getElementById('loginForm').reset();
    document.getElementById('error').textContent = '';
    
});
