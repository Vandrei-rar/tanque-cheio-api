import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fuel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public description?: string
}
