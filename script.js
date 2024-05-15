
const bgColor = prompt("Enter body background color:");

const textColor = prompt("Enter text color:");


const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `body { background-color: ${bgColor}; color: ${textColor}; }`;
document.head.appendChild(style);