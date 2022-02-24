import { Request, Response } from "express";
import { planets } from "../../models/planet.model";

const getAllPlanets = (req: Request, res: Response) => {
    return res.status(200).json(planets);
}

export { getAllPlanets };