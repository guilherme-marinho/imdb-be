import { Movie } from "@prisma/client";
import { prisma } from "../../../prisma/index";
import { IMovieRepository } from "../interfaces/IMovieRepository";
import { CreateMovieDTO } from "../dtos/createMovieDTO";

class MovieRepository implements IMovieRepository {
  async checkStar(imdbID: string): Promise<boolean> {
    const movie = await prisma.movie.findFirst({
      where: { imdbID },
    });

    return movie.starred;
  }
  async findById(id: string): Promise<Movie | null> {
    const movie = await prisma.movie.findFirst({
      where: { imdbID: id },
    });

    return movie;
  }

  async create(data: CreateMovieDTO): Promise<Movie> {
    const movie = await prisma.movie.create({
      data: {
        ...data,
      },
    });
    return movie;
  }

  async update(id: string, { starred }: CreateMovieDTO): Promise<Movie> {
    const updatedMovie = await prisma.movie.update({
      where: { imdbID: id },
      data: {
        starred,
      },
    });

    return updatedMovie;
  }
}

export { MovieRepository };
