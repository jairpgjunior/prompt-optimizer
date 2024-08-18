document.getElementById('optimize-button').addEventListener('click', () => {
    const limit = parseInt(document.getElementById('limit').value, 10);
    let text = document.getElementById('text-input').value;

    if (isNaN(limit) || limit <= 0) {
        alert('Please enter a valid character limit.');
        return;
    }

    // Remove special characters like *, #, -, and extra spaces
    text = text.replace(/[#*\-\s]/g, '');  // Remove *, #, -, and spaces

    // Truncate text to the character limit
    text = text.slice(0, limit);

    document.getElementById('result-output').value = text;
});

document.getElementById('copy-button').addEventListener('click', () => {
    const resultText = document.getElementById('result-output');
    resultText.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
});
