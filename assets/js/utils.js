export function makeSingle(generator) {
  let globalNonce;
  return async function(...args) {
    const localNonce = (globalNonce = new Object());

    const iter = generator(...args);
    let resumeValue;
    for (;;) {
      const n = iter.next(resumeValue);
      if (n.done) {
        return n.value; // final return value of passed generator
      }

      // whatever the generator yielded, _now_ run await on it
      resumeValue = await n.value;
      if (localNonce !== globalNonce) {
        return; // a new call was made
      }
      // next loop, we give resumeValue back to the generator
    }
  };
}
