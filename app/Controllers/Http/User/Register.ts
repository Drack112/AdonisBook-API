import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'
import { faker } from '@faker-js/faker'

import StoreValidator from '../../../Validators/User/Register/StoreValidator'
import UpdateValidator from '../../../Validators/User/Register/UpdateValidator'
import { User, UserKey } from '../../../Models'

export default class RegistersController {
  public async store({ request }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { email, redirectUrl } = await request.validate(StoreValidator)
      const user = new User()

      user.useTransaction(trx)
      user.email = email

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
    })
  }
  public async show({ params }: HttpContextContract) {
    const userKey = await UserKey.findByOrFail('key', params.key)
    const user = await userKey.related('user').query().firstOrFail()

    return user
  }
  public async update({ request, response }: HttpContextContract) {
    const { key, name, password } = await request.validate(UpdateValidator)

    const userKey = await UserKey.findByOrFail('key', key)
    const user = await userKey.related('user').query().firstOrFail()

    const username = name.split(' ')[0].toLocaleLowerCase() + new Date().getTime()

    user.merge({ name, username, password })
    await user.save()

    await userKey.delete()

    return response.ok({ message: 'ok' })
  }
}
