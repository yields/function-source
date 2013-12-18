
/**
 * Export `source`
 */

module.exports = source;

/**
 * Get inner `fn` source.
 *
 * @param {Function|String} fn
 * @return {String}
 * @api public
 */

function source(fn){
  if ('string' != typeof fn) return source(fn.toString());

  var match;
  if (match = /^function *\S*? *\([^)]*\) *{([\S\s]*)}$/.exec(fn)) {
    var space = /^(?:\n*)?(\s*)/.exec(match[1])[1];
    var expr = new RegExp('^' + space, 'gm');
    return match[1].replace(expr, '');
  }

  return '';
}
