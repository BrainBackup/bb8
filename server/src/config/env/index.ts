import path from 'path';
//TODO: enable this one
// const env = process.env.NODE_ENV || 'development';
const env = 'development';

const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

const defaults = {
  root: path.join(__dirname, '/..')
};

export default Object.assign(defaults, config);