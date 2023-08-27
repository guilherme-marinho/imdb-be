import { Request, Response } from "express";
import { GetMovieByIdService } from "./getMovieByIdService";
import { MovieRepository } from "@modules/movies/repositories/movieRepository";

class GetMovieByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const movieRepository = new MovieRepository();
    const data = await new GetMovieByIdService(movieRepository).execute(id);
    return res.status(200).json({
      data,
    });
  }
}

export { GetMovieByIdController };
