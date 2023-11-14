import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fuels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type').unique()
      table.string('description').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
