const bookshelf = require('./bookshelf');
require('./Status');
require('./Priority');
require('./User');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true; }

  priority() {
    return this.hasOne('Priority', 'id', 'priority_id');
  };

  status() {
    return this.hasOne('Status', 'id', 'status_id');
  };

  createdBy() {
    return this.hasOne('User', 'id', 'created_by');
  };

  assignedTo() {
    return this.hasOne('User', 'id', 'assigned_to');
  };
};

module.exports = bookshelf.model('Card', Card);