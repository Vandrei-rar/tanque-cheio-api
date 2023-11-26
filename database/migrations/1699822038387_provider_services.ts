import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import ProviderService from 'App/Models/ProviderService'

export default class extends BaseSchema {
  protected tableName = 'provider_services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('provider_id').unsigned().references('providers.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('service_type').unsigned().references('service_types.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('description')
      table.float('price').notNullable()
      table.string('status',100).defaultTo(ProviderService.STATUS_ACTIVE)
      table.integer('creator_id')

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