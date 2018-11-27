//makes table
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.string('name')
        student.string('fave_animal')
        student.string('previous_occupation')
        student.integer('hometown_lat')
        student.integer('hometown_long')
        student.string('useless_superpower')
    })
};
//drops it/ remakes table
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
