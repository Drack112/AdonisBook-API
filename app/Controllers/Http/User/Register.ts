import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { faker } from '@faker-js/faker'

import User from '../../../Models/User'
import StoreValidator from '../../../Validators/User/StoreValidator'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class RegistersController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)
    const user = await User.create({ email })
    await user.save()

    const key = faker.datatype.uuid() + new Date().getTime()

    user.related('keys').create({
      key,
    })

    const link = `${redirectUrl}/${key}}`

    await Mail.send((message) => {
      message.to(email)
      message.from('contato@adonisbook.com', 'AdonisBook')
      message.subject('Criação de conta')
      message.htmlView('email/verify-email', { link })
    })
  }
  public async show({}: HttpContextContract) {}
  public async update({}: HttpContextContract) {}
}
