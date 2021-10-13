/**
 * Generate randomness
 * @param options
 * @returns {string|*|number}
 *
 * Options:
 *   outcomes: array of outcomes, one will be returned at random.
 *             Other options are ignored except overrideValue
 *   type: 'integer' | 'real' [default 'real']
 *   start: Starting value [default: 0]
 *   end: Ending value (up to but not including) [default: 1]
 *   overrideValue: Force value returned for unit testing
 *   If options is null or undefined, function will return Math.random()
 */
exports.spinner = options => {
  const getRandom = () => Math.random();

  if (options === undefined || options === null) return getRandom();
  const { outcomes, type, start, end, overrideValue } = options;

  if (overrideValue !== undefined) return overrideValue;

  if (Array.isArray(outcomes)) {
    if (outcomes.length === 0) {
      throw 'Outcomes must not be an empty array'
    } else {
      return outcomes[Math.trunc(Math.random()*outcomes.length)];
    }
  }
  if (outcomes !== undefined) throw 'Outcomes must be a non-empty array';

  let rn = getRandom();
  const _start = start ?? 0;
  const _end = end ?? 0;
  const _type = type ?? 'real';
  rn = rn * (_end - _start) + _start;
  if (_type === 'integer') {
    return Math.trunc(rn);
  } else {
    return rn;
  }
}
