document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelector('.messages');
    const messageForm = document.querySelector('.message-form');
    const messageInput = document.querySelector('.message-input');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message);
            messageInput.value = '';
        }
    });

    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }
});