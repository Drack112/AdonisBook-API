import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'User/Register.store')
Route.get('/users/register/:key', 'User/Register.show')
