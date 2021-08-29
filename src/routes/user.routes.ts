import { Router } from 'express';
const route = Router();

import { CreateUser, getUsers, getOneUser, updateUser, deleteUser } from '../controllers/Users.controller'

route.get('/', getUsers)
route.get('/:id', getOneUser)
route.post("/", CreateUser);
route.delete('/:id', deleteUser)
route.put('/:id', updateUser)

export default route;