const crypto = require('crypto').randomBytes(256).toString('hex');

const keys = {
    URI: 'mongodb://localhost:27017/mean-angular',
    secret: crypto,
    db: 'mean-angular'
}

module.exports = {keys};
