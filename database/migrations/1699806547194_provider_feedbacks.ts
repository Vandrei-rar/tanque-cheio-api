import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import ProviderFeedback from 'App/Models/ProviderFeedback'

export default class extends BaseSchema {
  protected tableName = 'provider_feedbacks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('comment',150)
      table.float('rating').notNullable()
      table.string('status',100).defaultTo(ProviderFeedback.STATUS_ACTIVE)

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
