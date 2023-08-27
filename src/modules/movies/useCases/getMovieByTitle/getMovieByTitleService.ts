import { IMovieRepository } from "@modules/movies/interfaces/IMovieRepository";
import { Movie } from "@prisma/client";
import fetch from "cross-fetch";

class GetMovieByTitleService {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(title: string): Promise<Movie | null> {
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`;

    const response = await fetch(url);
    const data = await response.json();

    const movie = await this.movieRepository.findById(data.imdbID);

    if (!movie) {
      await this.movieRepository.create({
        imdbID: data.imdbID,
        starred: false,
      });
    }

    return data;
  }
}

export { GetMovieByTitleService };
