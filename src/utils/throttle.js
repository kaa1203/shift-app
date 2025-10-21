const throttle = (fn, duration) => {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    fn.apply(this, args);
    shouldWait = true;

    setTimeout(() => {
      shouldWait = false;
    }, duration);
  };
};

export default throttle;
