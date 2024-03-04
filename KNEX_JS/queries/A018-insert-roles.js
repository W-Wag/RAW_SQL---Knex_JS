/* 
INSERT INTO roles (name)
VALUES ('POST'), ('PUT'), ('DELETE'), ('GET');
*/

const knex = require('../knex/config/database')

const insertRoles = knex('roles').insert([
  {name: 'POST'},
  {name: 'PUT'},
  {name: 'DELETE'},
  {name: 'GET'},
])

insertRoles.then((data) => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  knex.destroy()
})