/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  //truncate: same seeded table everytime
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { fruit_name: 'apple', avg_weight_oz: `5`, delicious: null, color: 'red' },
    { fruit_name: 'pear', avg_weight_oz: `4`, delicious: 0, color: 'green' },
    { fruit_name: 'blackberry', avg_weight_oz: `.1`, delicious: true, color: 'dark blue' }
  ]);
};
