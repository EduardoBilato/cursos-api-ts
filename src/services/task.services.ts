import { Request, Response } from 'express';
import TaskModel, { ITask, ITaskObj } from './../models/task.model';

export default class TaskService {
    public async findAll(req: Request, res: Response) {
        const list: Array<ITaskObj> = await TaskModel.find({});
        return res.json({ list });
    }

    public async findOne(req: Request, res: Response) {
        const list = await TaskModel.findById(req.params.id);
        return res.json({ list });
    }

    public async create(req: Request, res: Response) {
        const iTask = req.body as ITask;
        const task = await TaskModel.create(iTask);
        return res.json({ task });
    }
}