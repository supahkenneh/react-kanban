const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  created() {
    return this.hasMany('Card', 'created_by');
  };

  assignedCards() {
    return this.hasMany('Card', 'assigned_to');
  }
};

module.exports = bookshelf.model('User', User);