const debounce = (fn, duration) => {
  let timer = null;

  return (...args) => {
    clearInterval(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, duration);
  };
};

export default debounce;
