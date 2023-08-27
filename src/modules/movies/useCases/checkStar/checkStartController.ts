import { Request, Response } from "express";
import { CheckStartService } from "./checkStartService";
import { MovieRepository } from "@modules/movies/repositories/movieRepository";

class CheckStartController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { imdbID } = req.params;
    console.log();

    const movieRepository = new MovieRepository();
    const data = await new CheckStartService(movieRepository).execute(imdbID);
    return res.status(200).json({
      data,
    });
  }
}

export { CheckStartController };
