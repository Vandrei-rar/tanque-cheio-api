import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProvidersController {

  public async index({}: HttpContextContract) {
    return 'Index'
  }

  public async store({}: HttpContextContract) {
    return 'Store'
  }

  public async show({}: HttpContextContract) {
    return 'Show'
  }

  public async update({}: HttpContextContract) {
    return 'Update'
  }

  public async destroy({}: HttpContextContract) {
    return 'Destroy'
  }
}
