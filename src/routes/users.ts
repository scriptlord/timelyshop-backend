import express from 'express';
const usersRoutes = express.Router();
import { 
    getAllUsers, 
    getUserById,
     createNewUser, 
     updateUser, 
     registerUser,
     loginUser, 
     getUserCount } from '../controllers/user';


usersRoutes.get('/', getAllUsers);

usersRoutes.get('/:id', getUserById );

usersRoutes.post('/', createNewUser)

usersRoutes.put('/:id', updateUser);

usersRoutes.post('/register', registerUser);

usersRoutes.post('/login', loginUser);

usersRoutes.get('/get/count', getUserCount);

export { usersRoutes };

