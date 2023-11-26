import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FuelType from 'App/Models/FuelType'
import Provider from 'App/Models/Provider'
import ProviderFuel from 'App/Models/ProviderFuel'

export default class ProviderFuelsController {

  public async index({}: HttpContextContract) {
    const fuels = await ProviderFuel.all()
    return fuels
  }

  public async store({ request }: HttpContextContract) {
    const providerId = request.input('providerId')
    const provider = await Provider.findOrFail(providerId)

    const fuelType = request.input('fuelType')
    const fuel = await FuelType.findOrFail(fuelType)

    const price = request.input('price')
    const status = ProviderFuel.STATUS_ACTIVE

    const providerFuels = ProviderFuel.create({providerId, fuelType,price: price, status})
    if((await providerFuels).$isPersisted){
      console.log(provider.id == providerId)
      console.log(fuel.id == fuelType)
      return 'Cadastro Vinculado'
    }else{
      return 'Cadastro não vinculado, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const providerFuel = await ProviderFuel.findOrFail(fuelId)
    return providerFuel
  }

  public async update({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const body = request.only(['price','status'])
    const providerFuel = await ProviderFuel.findOrFail(fuelId)

    await providerFuel.merge(body).save()
    return providerFuel
  }

  public async destroy({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const providerFuel = await ProviderFuel.findOrFail(fuelId)
    providerFuel.status = ProviderFuel.STATUS_INACTIVE
    await providerFuel.save()
    return 'Combustivel excluido'
  }
}
