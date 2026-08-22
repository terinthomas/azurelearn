const apiBase = window.location.origin;

async function fetchList() {
  const res = await fetch(`${apiBase}/api/restaurants`);
  const list = await res.json();
  const ul = document.getElementById('list');
  ul.innerHTML = '';
  list.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.id} - ${r.name} (${r.cuisine})`;
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.onclick = async () => {
      await fetch(`${apiBase}/api/restaurants/${r.id}`, { method: 'DELETE' });
      await fetchList();
      showMessage('Deleted');
    };
    li.appendChild(del);
    ul.appendChild(li);
  });
}

document.getElementById('addForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const cuisine = document.getElementById('cuisine').value;
  const res = await fetch(`${apiBase}/api/restaurants`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, cuisine })
  });
  if (res.ok) {
    document.getElementById('name').value = '';
    document.getElementById('cuisine').value = '';
    fetchList();
    showMessage('Added');
  } else {
    showMessage('Failed to add', true);
  }
});

function showMessage(msg, isError) {
  const el = document.getElementById('message');
  el.textContent = msg;
  el.className = isError ? 'message error' : 'message';
  setTimeout(() => el.textContent = '', 3000);
}

fetchList();
