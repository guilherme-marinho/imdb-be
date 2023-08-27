import { Movie } from "@prisma/client";
import { CustomError } from "../../../../shared/utils/customError";
import { IMovieRepository } from "@modules/movies/interfaces/IMovieRepository";

export class ToggleFavoriteService {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute(imdbID: string, starred: boolean): Promise<Movie> {
    const movie = await this.movieRepository.findById(imdbID);

    if (!movie) {
      throw new CustomError(404, "Movie not found");
    }

    movie.starred = starred;

    const updatedMovie = await this.movieRepository.update(imdbID, { starred });

    return updatedMovie;
  }
}
