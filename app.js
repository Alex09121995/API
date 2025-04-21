// Mostrar post inicial con GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => {
    document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
  });

// PUT - Actualizar post
function actualizarPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      id: 1,
      title: 'Título actualizado',
      body: 'Este es el nuevo contenido del post.',
      userId: 1
    })
  })
  .then(res => res.json())
  .then(data => {
    alert('Post actualizado');
    document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
  });
}

// DELETE - Eliminar post
function eliminarPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
  .then(() => {
    alert('Post eliminado');
    document.getElementById('resultado').textContent = 'El post fue eliminado.';
  });
}
