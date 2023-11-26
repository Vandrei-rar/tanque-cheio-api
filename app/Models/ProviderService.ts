import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Provider from './Provider'
import ServiceType from './ServiceType'

export default class ProviderService extends BaseModel {
  public static STATUS_ACTIVE = 'active'
  public static STATUS_INACTIVE = 'inactive'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public providerId: number

  @column()
  public serviceType: string

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public price: number

  @column()
  public status: string

  @column()
  public creatorsId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Provider)
  public provider: HasOne<typeof Provider>

  @hasOne(() => ServiceType)
  public service: HasOne<typeof ServiceType>
}
