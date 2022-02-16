/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {id: 1, heading: 'rowValue1', content: 'Hello I am content'},
        {id: 2, heading: 'rowValue2', content: 'Hello I am content2'},
        {id: 3, heading: 'rowValue3', content: 'rHello I am content3'}
      ]);
    });
};
