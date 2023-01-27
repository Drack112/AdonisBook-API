import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import { faker } from '@faker-js/faker'

import StoreValidator from '../../../Validators/User/StoreValidator'
import { User, UserKey } from '../../../Models'

export default class RegistersController {
  public async store({ request }: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)
    const user = await User.create({ email })
    await user.save()

    const key = faker.datatype.uuid() + new Date().getTime()

    user.related('keys').create({
      key,
    })

    const link = `${redirectUrl}/${key}`

    await Mail.send((message) => {
      message.to(email)
      message.from('contato@adonisbook.com', 'AdonisBook')
      message.subject('Criação de conta')
      message.htmlView('email/verify-email', { link })
    })
  }
  public async show({ params }: HttpContextContract) {
    const userKey = await UserKey.findByOrFail('key', params.key)
    const user = await userKey.related('user').query().firstOrFail()

    return user
  }
  public async update({}: HttpContextContract) {}
}
