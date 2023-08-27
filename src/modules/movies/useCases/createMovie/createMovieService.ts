import { Movie } from "@prisma/client";
import { CustomError } from "../../../../shared/utils/customError";
import { validate } from "class-validator";
import { CreateMovieDTO } from "@modules/movies/dtos/createMovieDTO";
import { IMovieRepository } from "@modules/movies/interfaces/IMovieRepository";

export class CreateMovieService {
  constructor(private movieRepository: IMovieRepository) {}
  public async execute({ imdbID, starred }: CreateMovieDTO): Promise<Movie> {
    const createMovieDTO = new CreateMovieDTO(imdbID, starred);
    const errors = await validate(createMovieDTO);
    if (errors.length > 0) {
      const errorsMessage = errors.map((e) => {
        return e.constraints || e.children.map((c) => c.constraints);
      });
      throw new CustomError(400, errorsMessage);
    }
    const movie = await this.movieRepository.findById(imdbID);
    if (!movie) {
      await this.movieRepository.create(createMovieDTO);
      return movie;
    }
  }
}
