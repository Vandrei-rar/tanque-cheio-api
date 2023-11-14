import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Provider extends BaseModel {
  public static STATUS_ACTIVE = 'active'
  public static STATUS_INACTIVE = 'inactive'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public logo?: string

  @column()
  public rating?: number
  
  @column()
  public localizationCoord: string
  
  @column()
  public localizationText: string
  
  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
