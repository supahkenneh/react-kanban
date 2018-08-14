const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  created() {
    return this.hasMany('cards.created_by');
  };

  assigned() {
    return this.hasMany('cards.assigned_to');
  }
};

module.exports = booksehlf.model('User', User);