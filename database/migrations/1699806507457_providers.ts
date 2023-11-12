import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Provider from 'App/Models/Provider'

export default class extends BaseSchema {
  protected tableName = 'providers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name',100).notNullable()
      table.string('description',100)
      table.string('logo',100)
      table.float('rating')
      table.string('localization_coord',100).notNullable()
      table.string('localization_text',100).notNullable()
      table.string('status',100).defaultTo(Provider.STATUS_ACTIVE)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
