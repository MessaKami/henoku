const express = require('express')
const router = express.Router()
// will render the list of all users
router.get('/', (req, res) => res.send('users list'))
// will render the new user form
router.get('/new', (req, res) => res.send('new user form'))
// will return info about specific user
router.get('/:id', ({ params }, res) => res.send(`id user : ${params.id}`))
// export the modules
module.exports = router

const users = [{ name: 'John'}, { name: 'foobar'}]

router.param('id', (req, res, next, id) => {
    console.log('id: ', id, ' from param')
    req.user = users[id] ?? users[0]
    next()
})

router.get('/:id', (req, res) => res.json(req.user))
router.get('/sub/:id', (req, res) => res.json(req.user))

