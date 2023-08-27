import { Request, Response } from "express";
import { GetMovieByTitleService } from "./getMovieByTitleService";
import { MovieRepository } from "@modules/movies/repositories/movieRepository";

class GetMovieByTitleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = req.params;
    const movieRepository = new MovieRepository();
    const data = await new GetMovieByTitleService(movieRepository).execute(
      title
    );

    return res.status(200).json({
      data,
    });
  }
}

export { GetMovieByTitleController };
