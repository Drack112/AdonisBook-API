import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { faker } from '@faker-js/faker'

import User from '../../../Models/User'
import StoreValidator from '../../../Validators/User/StoreValidator'

export default class RegistersController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, redirectUrl } = await request.validate(StoreValidator)
    const user = await User.create({ email })
    await user.save()

    const key = faker.datatype.uuid() + user.id

    user.related('keys').create({
      key,
    })

    const link = `${redirectUrl}/${key}}`
  }
  public async show({}: HttpContextContract) {}
  public async update({}: HttpContextContract) {}
}
