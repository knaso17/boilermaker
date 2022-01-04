const db = require('./database');
const Student = require('./student');
const Campus = require('./campus');

// Puppy.belongsTo(Owner)
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
};
