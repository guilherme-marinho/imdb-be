import { IsNotEmpty, IsBoolean } from "class-validator";

export class UpdateMovieDTO {
  @IsNotEmpty()
  @IsBoolean()
  starred: boolean;

  constructor(starred: boolean) {
    this.starred = starred;
  }
}
