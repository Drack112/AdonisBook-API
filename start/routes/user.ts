import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'User/Register.store')
Route.get('/users/register/:key', 'User/Register.show')
Route.put('/users/register', 'User/Register.update')

Route.post('/users/forgot-password', 'User/ForgotPassword.store')
Route.put('/users/forgot-password', 'User/ForgotPassword.update')

Route.get('/users', 'User/Main.show').middleware('auth')
Route.put('/users', 'User/Main.update').middleware('auth')

Route.put('/users/avatar', 'User/Avatars.update').middleware('auth')
Route.delete('/users/avatar', 'User/Avatars.destroy').middleware('auth')
