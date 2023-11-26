import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProviderService from 'App/Models/ProviderService'

export default class ProviderServicesController {

  public async index({}: HttpContextContract) {
    const service = await ProviderService.all()
    return service
  }

  public async store({ request }: HttpContextContract) {
    const providerId = request.input('providerId')
    const serviceType = request.input('ServiceType')
    const name = request.input('name')
    const description = request.input('description')
    const price = request.input('price')
    const status = ProviderService.STATUS_ACTIVE
    const creatorsId = request.input('CreatorsId')

    const service = ProviderService.create({providerId: providerId, serviceType: serviceType, name: name,
       description: description, price: price, status, creatorsId: creatorsId})
    if ((await service).$isPersisted){
      return 'Serviço Vinculado'
    }else{
      return 'Cadastro incorreto, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const service = await ProviderService.findOrFail(serviceId)
    return service
  }

  public async update({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const body = request.only(['type', 'description'])
    const service = await ProviderService.findOrFail(serviceId)

    await service.merge(body).save()
    return service
  }

  public async destroy({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const service = await ProviderService.findOrFail(serviceId)
    service.status = ProviderService.STATUS_INACTIVE
    return 'Serviço excluido'
  }
}
