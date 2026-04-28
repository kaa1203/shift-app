const debounce = (fn, duration) => {
  let timer = null;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
};

export default debounce;
