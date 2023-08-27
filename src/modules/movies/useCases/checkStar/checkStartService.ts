import { IMovieRepository } from "@modules/movies/interfaces/IMovieRepository";
import fetch from "cross-fetch";

class CheckStartService {
  constructor(private movieRepository: IMovieRepository) {}
  async execute(imdbID: string): Promise<boolean> {
    const movie = await this.movieRepository.findById(imdbID);

    if (movie) {
      const star = await this.movieRepository.checkStar(imdbID);

      return star.valueOf();
    }
    return false;
  }
}

export { CheckStartService };
