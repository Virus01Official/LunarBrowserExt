// Custom Cursor Extension
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.top = '0';
cursor.style.left = '0';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.backgroundColor = 'red';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '10000';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});
