/* 
-- DELETE apaga registros da tabela

DELETE FROM users WHERE id =1;

-- Aviso: use SELECT para garantir 
-- que está apagando os valores corretos
SELECT * FROM  users u WHERE id BETWEEN 1 and 9; */

const knex = require('../knex/config/database')

const deleteSQL = knex('users').delete().where('id', '=', '35')
const selectBetween = knex('users').select('id', 'first_name').whereBetween('id', [60, 63])
const deleteBetween = knex('users').delete().whereBetween('id', [60, 63])

console.log(selectBetween.toString())

selectBetween.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})