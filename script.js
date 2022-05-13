const textarea = document.getElementById('textarea');

textarea.addEventListener('input', () => {
  const word = document.getElementById('word');
  word.innerText = textarea.value.length;
});

textarea.addEventListener('input', () => {
  let character = document.getElementById('character');
  let text = textarea.value.split(' ');

  character.innerText = text.length;
});