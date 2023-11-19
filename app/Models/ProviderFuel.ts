import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Provider from './Provider'
import Fuel from './FuelType'

export default class ProviderFuel extends BaseModel {
  public static STATUS_ACTIVE = 'active'
  public static STATUS_INACTIVE = 'inactive'
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public providerId: number

  @column()
  public fuelType: string

  @column()
  public price: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Provider)
  public provider: HasOne<typeof Provider>

  @hasOne(() => Fuel)
  public fuel: HasOne<typeof Fuel>
}
