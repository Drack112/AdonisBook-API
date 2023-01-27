import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'User/Register.store')
Route.get('/users/register/:key', 'User/Register.show')
Route.put('/users/register', 'User/Register.update')
Route.post('/users/forgot-password', 'User/ForgotPassword.store')
