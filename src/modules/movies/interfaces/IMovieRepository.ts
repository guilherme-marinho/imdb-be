import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../dtos/createMovieDTO";
import { UpdateMovieDTO } from "../dtos/updateMovieDTO";

interface IMovieRepository {
  findById(id: string): Promise<Movie | null>;
  checkStar(imdbID: string): Promise<boolean>;
  create(data: CreateMovieDTO): Promise<Movie>;
  update(id: string, { starred }: UpdateMovieDTO): Promise<Movie>;
}

export { IMovieRepository };
