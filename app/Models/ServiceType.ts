import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import ProviderService from './ProviderService'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public name: string

  @column()
  public description?: string

  @hasOne(() => ProviderService)
  public providerService: HasOne<typeof ProviderService>
}
