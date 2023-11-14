import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('type').unique().notNullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
