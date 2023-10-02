import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    return await auth.use('api').attempt(email, password)
  }

  public async register({ request }: HttpContextContract) {
    const name = request.input('name')
    const email = request.input('email')
    const password = request.input('password')
    const type = request.input('type')

    return await User.create({ name: name, email: email, password: password, type: type })
  }
}
