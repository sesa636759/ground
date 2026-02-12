document.addEventListener('DOMContentLoaded', () => {
  const setup = (el) => {
    const buttons = el.querySelectorAll('.tab-bar button');
    const playground = el.querySelector('[slot=playground]');
    const examples = el.querySelector('[slot=examples]');
    const docs = el.querySelector('[slot=docs]');

    const show = (name) => {
      if (playground) playground.style.display = name === 'playground' ? '' : 'none';
      if (examples) examples.style.display = name === 'examples' ? '' : 'none';
      if (docs) docs.style.display = name === 'docs' ? '' : 'none';
      buttons.forEach((b) => b.classList.toggle('active', b.dataset.tab === name));
    };

    buttons.forEach((b) => {
      b.addEventListener('click', () => show(b.dataset.tab));
    });

    // initialize
    show('playground');
  };

  document.querySelectorAll('demo-tabs').forEach((el) => setup(el));
});
