import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

export const getAllUsers = async (req: Request, res: Response) => {
    const userList = await User.find();

    if (!userList) {
        res.status(500).json({ success: false });
    } 
    res.send(userList);
}


export const getUserById = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id).select('-passwordHash');

    if (!user) {
        res.status(500).json({ message: 'The user with the given ID was not found.' });
    } 
    res.status(200).send(user);
}


export const createNewUser = async (req: Request, res: Response) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    });
    user = await user.save();

    if (!user) {
        return res.status(400).send('The user cannot be created!');
    }
    res.send(user);
}


export const updateUser = async (req: Request, res: Response) => {
    const userExist = await User.findById(req.params.id);
    let newPassword;
    if (req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10);
    } else {
        newPassword = userExist?.passwordHash 
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        },
        { new: true }
    );

    if (!user) {
        return res.status(400).send('The user cannot be updated!');
    }
    res.send(user);
}



export const registerUser = async (req: Request, res: Response) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
    });
    user = await user.save();

    if (!user) {
        return res.status(400).send('The user cannot be created!');
    }
    res.send(user);
}



export const loginUser = async (req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.secret;
    if (!user) {
        return res.status(400).send('The user not found');
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secret as string,
            { expiresIn: '1d' }
        );

        res.status(200).send({ ...user.toJSON(), token });
    } else {
        res.status(401).send('Invalid Email or Password');
    }
}



export const getUserCount = async (req: Request, res: Response) => {
    const userCount = await User.countDocuments();
    if (!userCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        userCount
    });
}