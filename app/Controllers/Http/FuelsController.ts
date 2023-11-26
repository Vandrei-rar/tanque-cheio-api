import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FuelType from 'App/Models/FuelType'

export default class FuelsController {

  public async index({}: HttpContextContract) {
    const fuels = await FuelType.all()
    return fuels
  }

  public async store({ request }: HttpContextContract) {
    const type = request.input('type')
    const description = request.input('description')

    const fuel = FuelType.create({type: type, description: description})
    if ((await fuel).$isPersisted){
      return 'Combustivel Cadastrado'
    }else{
      return 'Cadastro incorreto, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const fuel = await FuelType.findOrFail(fuelId)
    return fuel
  }

  public async update({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const body = request.only(['type', 'description'])
    const fuel = await FuelType.findOrFail(fuelId)

    await fuel.merge(body).save()
    return fuel
  }

  public async destroy({ request }: HttpContextContract) {
    const fuelId = request.param('id')
    const fuel = await FuelType.findOrFail(fuelId)
    await fuel.delete()
    return 'Combustivel excluido'
  }
}
