const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'statuses'; }
  get hasTimestamps() { return true; }

  cards() {
    return this.hasMany('cards.status_id');
  };
};

module.exports = booksehlf.model('Status', Status);