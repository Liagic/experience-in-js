const originalLog = console.log;
const originalError = console.error;
const consoleOutputDiv = document.getElementById('consoleOutput');

function appendMessage(msg, type = 'log') {
  const messageElement = document.createElement('p');
  messageElement.textContent = msg;
  messageElement.style.whiteSpace = 'pre-wrap'; // для форматирования
  if (type === 'error') {
    messageElement.style.color = 'red';
    messageElement.style.fontWeight = 'bold';
  }
  consoleOutputDiv.appendChild(messageElement);
}

console.log = function (...args) {
  originalLog.apply(console, args);
  const msg = args
    .map(arg =>
      typeof arg === 'object' && arg !== null
        ? JSON.stringify(arg, null, 2)
        : String(arg)
    )
    .join(' ');
  appendMessage(msg, 'log');
};

console.error = function (...args) {
  originalError.apply(console, args);
  const msg = args
    .map(arg =>
      typeof arg === 'object' && arg !== null
        ? JSON.stringify(arg, null, 2)
        : String(arg)
    )
    .join(' ');
  appendMessage(msg, 'error');
};

// Ловим ошибки исполнения
window.onerror = function (message, source, lineno, colno, error) {
  const errorMsg = `Error: ${message} at ${source}:${lineno}:${colno}`;
  appendMessage(errorMsg, 'error');
  if (error && error.stack) {
    appendMessage(error.stack, 'error');
  }
};

// Ловим необработанные Promise ошибки
window.addEventListener('unhandledrejection', function (event) {
  const errorMsg = `Unhandled Promise rejection: ${event.reason}`;
  appendMessage(errorMsg, 'error');
});
