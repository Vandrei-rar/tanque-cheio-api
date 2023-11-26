import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import ProviderFuel from './ProviderFuel'

export default class FuelType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public description?: string

  @hasOne(() => ProviderFuel)
  public providerFuels: HasOne<typeof ProviderFuel>
}
