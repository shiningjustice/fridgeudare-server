const ItemsService = {
  getItems(knex) {
    return knex.select('*').from('items')
  },
  insertItem(knex, item) {
    return knex
      .insert(item)
      .into('items')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, id) {
    return knex('items')
      .select('*')
      .where('id', id)
      .first()
  },
  updateItem(knex, id, fieldsToUpdate) {
    return knex('items')
      .where({ id })
      .update(fieldsToUpdate)
  },
  deleteItem(knex, id) {
    return knex('items')
      .where({ id })
      .delete()
  }
}

module.exports = ItemsService;