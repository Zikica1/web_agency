async function load() {
  const page = await import('./main.js');

  page.render();
}

load();
