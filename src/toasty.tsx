document.addEventListener('DOMContentLoaded', () => {
  const keystrokeDelay = 1000;
  let state: {buffer: string[]; lastKeyTime: number} = {
    buffer: [],
    lastKeyTime: Date.now(),
  };
  document.addEventListener('keydown', event => {
    const key = event.key;
    const currentTime = Date.now();
    let buffer: string[];
    if (currentTime - state.lastKeyTime > keystrokeDelay) {
      buffer = [key];
    } else {
      buffer = [...state.buffer, key];
    }
    state = {buffer, lastKeyTime: currentTime};
    const userInput = buffer.join('');
    const code =
      'ArrowLeftArrowDownArrowLeftArrowRightArrowDownArrowRightArrowLeftArrowLeftArrowRightArrowRight';
    if (code === userInput) {
      const toastyEl = document.getElementById('toasty');
      if (!toastyEl) return;
      toastyEl.style.right = '0';
      setTimeout(() => {
        toastyEl.style.right = '-100px';
      }, 1000);
    }
  });
});

export {};
