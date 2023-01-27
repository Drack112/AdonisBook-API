import { faker } from '@faker-js/faker'
import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User, UserKey } from '../../../Models'
import { StoreValidator, UpdateValidator } from '../../../Validators/User/ForgotPassword'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    const { email } = await request.validate(StoreValidator)

    const user = await User.findByOrFail('email', email)
    const key = faker.datatype.uuid() + new Date().getTime()

    user.related('keys').create({ key })

    const link = `http://127.0.0.1:3333/users/forgot-password/${key}`

    await Mail.send((message) => {
      message.to(email)
      message.from('contato@facebook.com', 'Facebook')
      message.subject('Redefinição de Senha')
      message.htmlView('email/forgot-password', { link })
    })

    return response.ok({ message: 'Email de redefinição enviado com sucesso' })
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator)
    const userKey = await UserKey.findByOrFail('key', key)
    await userKey.load('user')

    userKey.user.merge({ password })
    await userKey.delete()

    return response.ok({ message: 'Senha atualizada com sucesso' })
  }
}
