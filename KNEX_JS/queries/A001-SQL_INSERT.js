/* Inserir registros na base de dados

INSERT INTO users (first_name, last_name,
email, password_hash) VALUES ("Romario", "Carlos", "romario@email.com", "a_hash"); */

const knex = require('../knex/config/database')

const data = [
  {
    first_name:  'Marcio',
    last_name:  'S.',
    email:  'marcin@email.com',
    password_hash:  '41214-512521@sad',
    salary:  868.12,
  },
  {
    first_name:  'Sergio',
    last_name:  'S.',
    email:  'ssergio@email.com',
    password_hash:  '41214-5asd214',
    salary:  4685.12,
  },
]

const insert = knex('users').insert(data);

/* console.log(insert.toString())
console.log(insert.toSQL().toNative()) */

insert.then(data => {
  console.log(data)
}).catch(err => {
  console.log(err.message)
}).finally(() => {
  knex.destroy()
})