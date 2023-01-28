import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    file: schema.file({
      size: '5mb',
      extnames: ['jpg', 'jpeg', 'png'],
    }),
  })

  public cacheKey = this.ctx.routeKey
  public messages: CustomMessages = {
    'file.size': 'O arquivo deve ser no máximo 5 MB',
    'file.extnames': 'A extensão para o {{ field }} não é aceita',
  }
}
