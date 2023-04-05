let listen = false;

document.querySelector('#button2').addEventListener('click', () => {
  if (listen) {
    listen = false;
    document.querySelector('#button2').innerText = 'start listening';
  } else {
    listen = true;
    document.querySelector('#button2').innerText = 'stop listening';
  }
});

document.addEventListener('keydown', (input) => {
  if (listen) send(input.key);
});

document.querySelector('#button1').addEventListener('click', () => {
  if (!document.querySelector('#input2').value)
    document.querySelector('#input2').value = 1000;

  const id = setInterval(() => {
    send(document.querySelector('#input1').value--);
    if (!(document.querySelector('#input1').value > 0)) clearInterval(id);
  }, document.querySelector('#input2').value);
});

const send = (input) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: input }),
  });
};