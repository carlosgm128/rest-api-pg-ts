import { Response, Request } from 'express'
import User from '../models/Users';

export async function CreateUser(req: Request, res: Response) {
    const { id, firstname, lastname } = req.body
    try {
        if (!firstname || !lastname) {
            res.status(404).json({
                "message": "body payload undefined",
                data: req.body
            })
        }
        let newUser = await User.create({
            id,
            firstname: firstname,
            lastname: lastname
        }, {
            fields: ["id", "firstname", "lastname"]
        })
        if (newUser) {
            res.status(201).json({
                "message": "user create successfully",
                "data": newUser
            });
        }
    } catch (ex) {
        console.log({ ex })
        res.status(500).json({
            "message": "server internal error",
            "data": {}
        })
    }
}
export async function getUsers(req: Request, res: Response) {
    try {
        const users = await User.findAll()

        res.status(200).json({
            data: users
        })
    } catch (ex) {
        console.log(`ex: ${ex}`);
        res.status(500).json({
            "message": "server internal error"
        })
    }
}
export async function getOneUser(req: Request, res: Response) {
    const { id } = req.params
    try {

        const payload = await User.findOne({
            where: {
                id: id
            }
        })
        if (payload) {
            res.status(200).json({
                data: payload
            })
        }
        res.status(404).json({
            "message": 'user not found',
            data: payload
        })
    } catch (ex) {
        console.log(`ex: ${ex}`);
        res.status(500).json({
            "message": "internal server error"
        })

    }
}
export async function updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { firstname, lastname } = req.body
    try {
        const userToUpdate = await User.findByPk(id);
        if (userToUpdate) {
            await userToUpdate.update({
                firstname,
                lastname
            })
            res.status(200).json({
                "message": "user updated sucessfully",
                data: userToUpdate
            })
        }
        res.status(404).json({
            "message": "user not found",
            data: {}
        })
    } catch (ex) {
        console.log(`ex: ${ex}`);
        res.status(500).json({
            "message": "internal server error"
        })
    }

}
export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params
    try {
        const deletedCount = await User.destroy({
            where: {
                id: id
            }
        })
        if (deletedCount > 0) {
            res.status(200).json({
                "message": "user deleted user",
                "count": deletedCount
            })
        }
        res.status(404).json({
            "message": "user not found",
            data: {}
        })
    } catch (ex) {
        console.log(`ex: ${ex}`);
        res.status(500).json({
            "message": "internal server error"
        })
    }
}