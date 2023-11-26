import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Provider from 'App/Models/Provider'

export default class ProvidersController {

  public async index({}: HttpContextContract) {
    const provider = await Provider.all()
    return provider
  }

  public async store({ request }: HttpContextContract) {
    const name = request.input('name')
    const description = request.input('description')
    const logo = request.input('logo')
    const rating = request.input('rating')
    const localizationCoord = request.input('localizationCoord')
    const localizationText = request.input('localizationText')
    const status = request.input('status')

    const provider = Provider.create({
      name: name, description: description, logo: logo, rating: rating,
       localizationCoord: localizationCoord, localizationText: localizationText,
       status: status
    })
    if ((await provider).$isPersisted){
      return 'Provider Cadastrado'
    }else{
      return 'Cadastro incorreto, tente novamente'
    }
  }

  public async show({ request }: HttpContextContract) {
    const providerId = request.param('id')
    const provider = await Provider.findOrFail(providerId)
    return provider
  }

  public async update({ request }: HttpContextContract) {
    const providerId = request.param('id')
    const body = request.only(['name', 'description', 'logo', 'rating', 'localizationCoord', 'localizationText', 'status'])
    const provider = await Provider.findOrFail(providerId)

    await provider.merge(body).save()
    return provider
  }

  public async destroy({ request }: HttpContextContract) {
    const providerId = request.param('id')
    const provider = await Provider.findOrFail(providerId)
    provider.status = Provider.STATUS_INACTIVE
    await provider.save()
    return provider
  }
}
