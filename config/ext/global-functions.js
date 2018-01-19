/**
 * Dependencies.
 *
 * @private
 */
const crypto = require('crypto');

/**
 * Hash functions.
 *
 * @public
 */
global.md5 = function (val, enc) {
  if (!val) return false;
  if (!enc) enc = 'utf-8';

  return crypto.createHash('md5').update(val, enc).digest('hex');
};

global.sha256 = function (val, enc) {
  if (!val) return false;
  if (!enc) enc = 'utf-8';

  return crypto.createHash('sha256').update(val, enc).digest('hex');
}

global.createHash = function (hash, val, enc) {
  if (!hash || !val) return false;
  if (!enc) enc = 'utf-8';

  return crypto.createHash(hash).update(val, enc).digest('hex');
};
