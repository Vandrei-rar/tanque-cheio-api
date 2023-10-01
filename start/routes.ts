/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/login', async ({ auth, request }) => {
  const email = request.input('email')
  const password = request.input('password')
  await auth.use('api').attempt(email, password)

  //retorna uma mensagem para o usuário sobre o login
  const user = await User.findBy('email', email)
  var mensagem_ok = "Usuário autenticado, bem vindo "+user?.name
  return {mensagem_ok}
})

Route.post('/register', async ({ request }) => {
  const name = request.input('name')
  const email = request.input('email')
  const password = request.input('password')
  const type = request.input('type')

  await User.create({ name: name, email: email, password: password, type: type })
  //retorna uma mensagem para o usuário sobre o Cadastro
  return { message: 'Usuário criado com sucesso!' }
})
