import { IMovieRepository } from "@modules/movies/interfaces/IMovieRepository";
import { Movie } from "@prisma/client";
import fetch from "cross-fetch";

class GetMovieByIdService {
  constructor(private movieRepository: IMovieRepository) {}
  async execute(id: string): Promise<Movie | null> {
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}`;

    const response = await fetch(url);
    const data = await response.json();

    const movie = await this.movieRepository.findById(id);

    if (!movie) {
      await this.movieRepository.create({
        imdbID: data.imdbID,
        starred: false,
      });
    }

    return data;
  }
}

export { GetMovieByIdService };
