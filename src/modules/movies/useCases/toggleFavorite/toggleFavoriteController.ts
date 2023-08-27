import { Request, Response } from "express";
import { ToggleFavoriteService } from "./toggleFavoriteService";
import { MovieRepository } from "@modules/movies/repositories/movieRepository";

export class ToggleFavoriteController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { imdbID } = req.params;
    const { starred } = req.body;

    const movieRepository = new MovieRepository();
    const toggleFavoriteService = new ToggleFavoriteService(movieRepository);

    const updatedMovie = await toggleFavoriteService.execute(imdbID, starred);

    return res.status(200).json(updatedMovie);
  }
}
