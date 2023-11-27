import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProviderFeedback from 'App/Models/ProviderFeedback'
import User from 'App/Models/User'

export default class ProviderFeedbacksController {

  public async index({}: HttpContextContract) {
    const feedback = await ProviderFeedback.all()
    return feedback
  }

  public async store({ request }: HttpContextContract) {
    const userId = request.input('userId')
    const user = await User.findOrFail(userId)

    const comment = request.input('comment')
    const rating = request.input('rating')
    const status = request.input('status')

    const feedback = ProviderFeedback.create({ userId, comment: comment,
       rating: rating, status: status})
    if ((await feedback).$isPersisted){
      console.log(user == userId)
      return 'Avaliação Registrada'
    }else{
      return 'Falha ao registrar avaliação'
    }

  }

  public async show({ request }: HttpContextContract) {
    const feedbackId = request.param('id')
    const feedback = await ProviderFeedback.findOrFail(feedbackId)
    return feedback
  }

  public async update({ request }: HttpContextContract) {
    const feedbackId = request.param('id')
    const body = request.only(['comment', 'rating', 'status'])
    const feedback = await ProviderFeedback.findOrFail(feedbackId)

    await feedback.merge(body).save()
    return feedback
  }

  public async destroy({ request }: HttpContextContract) {
    const feedbackId = request.param('id')
    const feedback = await ProviderFeedback.findOrFail(feedbackId)
    feedback.status = ProviderFeedback.STATUS_INACTIVE
    await feedback.save()
    return feedback
  }
}
