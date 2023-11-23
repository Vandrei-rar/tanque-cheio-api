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

  public async show({}: HttpContextContract) {
    return 'Show'
  }

  public async update({}: HttpContextContract) {
    return 'Update'
  }

  public async destroy({ request }: HttpContextContract) {

    const id = request.input('id')

    await Provider.query().where('id', id).delete()
    return 'Provider excluido'
  }
}
