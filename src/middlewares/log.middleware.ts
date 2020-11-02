import { Request,Response } from "express";

const myMiddleware = (req: Request, res: Response, next: any ) => {
    console.log("My middleware working with TS");
    next();
}

export default myMiddleware;