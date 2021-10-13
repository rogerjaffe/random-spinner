exports.spinner = callbacks => {
  if (!Array.isArray(callbacks)) throw('Parameter must be an array of functions');
  for (let callback of callbacks) {
    if (typeof(callback) !== 'function') {
      throw('Parameter must be an array of functions');
    }
  }

  const n = callbacks.length;
  let rn = Math.trunc(Math.random() * n);
  callbacks[rn]();
}
