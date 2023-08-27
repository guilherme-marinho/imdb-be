import { Request, Response } from "express";
import { CreateMovieService } from "./createMovieService";
import { MovieRepository } from "@modules/movies/repositories/movieRepository";

export class CreateMovieControler {
  public async handle(req: Request, res: Response): Promise<Response | null> {
    const { imdbID, starred } = req.body;

    const movieRepository = new MovieRepository();
    const movie = await new CreateMovieService(movieRepository).execute({
      imdbID,
      starred,
    });

    return res.status(201).json(movie);
  }
}
