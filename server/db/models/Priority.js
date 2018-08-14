const bookshelf = require('./bookshelf');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorities'; }
  get hasTimestamps() { return true; }

  cards() {
    return this.hasMany('cards.priority_id');
  };
};

module.exports = booksehlf.model('Priority', Priority);