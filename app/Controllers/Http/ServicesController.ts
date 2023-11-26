import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServiceType from 'App/Models/ServiceType'

export default class ServicesController {

  public async index({}: HttpContextContract) {
    const service = await ServiceType.all()
    return service
  }

  public async store({ request }: HttpContextContract) {
    const type = request.input('type')
    const name = request.input('name')
    const description = request.input('description')

    const service = ServiceType.create({type: type, name: name, description: description})
    if ((await service).$isPersisted){
      return 'Serviço Cadastrado'
    }else{
      return 'Cadastro incorreto, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const service = await ServiceType.findOrFail(serviceId)
    return service
  }

  public async update({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const body = request.only(['type', 'description'])
    const service = await ServiceType.findOrFail(serviceId)

    await service.merge(body).save()
    return service
  }

  public async destroy({ request }: HttpContextContract) {
    const serviceId = request.param('id')
    const service = await ServiceType.findOrFail(serviceId)
    await service.delete()
    return 'Serviço excluido'
  }
}
