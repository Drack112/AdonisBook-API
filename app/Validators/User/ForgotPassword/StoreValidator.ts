import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [rules.unique({ table: 'user_keys', column: 'key' })]),
  })

  public cacheKey = this.ctx.routeKey
  public messages: CustomMessages = {}
}
