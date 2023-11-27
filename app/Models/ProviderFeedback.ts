import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Provider from './Provider'
import User from './User'

export default class ProviderFeedback extends BaseModel {
  public static STATUS_ACTIVE = 'active'
  public static STATUS_INACTIVE = 'inactive'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public comment?: string

  @column()
  public rating: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Provider)
  public provider: HasOne<typeof Provider>

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
