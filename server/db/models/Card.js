const bookshelf = require('./bookshelf');

class Card extends bookshelf.Model {
  get tableName() { return 'books'; }
  get hasTimestamps() { return true; }

  priority() {
    return this.belongsTo('priorities.id');
  };

  status() {
    return this.belongsTo('statuses.id');
  };

  createdBy() {
    return this.belongsTo('users.id');
  };

  assignedTo() {
    return this.belongsTo('users.id');
  };
};

module.exports = bookshelf.model('Card', Card);