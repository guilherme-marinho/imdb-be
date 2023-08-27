import { IsNotEmpty, IsBoolean, IsString } from "class-validator";

export class CreateMovieDTO {
  @IsNotEmpty()
  @IsString()
  imdbID: string;

  @IsNotEmpty()
  @IsBoolean()
  starred: boolean;

  constructor(imdbID: string, starred: boolean) {
    this.imdbID = imdbID;
    this.starred = starred;
  }
}
