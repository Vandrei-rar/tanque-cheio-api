import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import ProviderFuel from 'App/Models/ProviderFuel'

export default class extends BaseSchema {
  protected tableName = 'provider_fuels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('provider_id').unsigned().references('providers.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('fuel_type').unsigned().references('fuel_types.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.float('price').notNullable()
      table.string('status',100).defaultTo(ProviderFuel.STATUS_ACTIVE)

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
