import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Provider from 'App/Models/Provider'
import ProviderService from 'App/Models/ProviderService'
import ServiceType from 'App/Models/ServiceType'

export default class ProviderServicesController {

  public async index({}: HttpContextContract) {
    const providerService = await ProviderService.all()
    return providerService
  }

  public async store({ request }: HttpContextContract) {
    const providerId = request.input('providerId')
    const provider = await Provider.findOrFail(providerId)

    const serviceType = request.input('fuelType')
    const service = await ServiceType.findOrFail(serviceType)

    const price = request.input('price')
    const status = ProviderService.STATUS_ACTIVE

    const providerService = ProviderService.create({providerId, serviceType,price: price, status})
    if((await providerService).$isPersisted){
      console.log(provider.id == providerId)
      console.log(service.id == serviceType)
      return 'Cadastro Vinculado'
    }else{
      return 'Cadastro não vinculado, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const providerService = await ProviderService.findOrFail(serviceId)
    return providerService
  }

  public async update({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const body = request.only(['type', 'description'])
    const providerService = await ProviderService.findOrFail(serviceId)

    await providerService.merge(body).save()
    return providerService
  }

  public async destroy({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const providerService = await ProviderService.findOrFail(serviceId)
    providerService.status = ProviderService.STATUS_INACTIVE
    providerService.save()
    return 'Serviço excluido'
  }
}
