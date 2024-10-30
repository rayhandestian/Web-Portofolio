document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Clear error messages
        const errorMessages = document.querySelectorAll('.text-red-500');
        errorMessages.forEach(error => {
            error.classList.add('hidden');
        });

        // Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            const nameError = document.getElementById('name-error');
            nameError.textContent = 'Who are you?';
            nameError.classList.remove('hidden');
            isValid = false;
        }

        // Email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            const emailError = document.getElementById('email-error');
            emailError.textContent = "What's your email?";
            emailError.classList.remove('hidden');
            isValid = false;
        }

        // Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            const messageError = document.getElementById('message-error');
            messageError.textContent = 'At least say hi!';
            messageError.classList.remove('hidden');
            isValid = false;
        }

        // Dropdown
        const dropdown = document.getElementById('who-dropdown').value;
        if (dropdown === '') {
            const dropdownError = document.getElementById('who-dropdown-error');
            dropdownError.textContent = 'What are you?';
            dropdownError.classList.remove('hidden');
            isValid = false;
        }

        // No Spam Checkbox
        const spamCheckbox = document.getElementById('spam-checkbox').checked;
        if (!spamCheckbox) {
            const spamError = document.getElementById('spam-checkbox-error');
            spamError.textContent = "I'm not reading it if it's a spam.";
            spamError.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });
});
