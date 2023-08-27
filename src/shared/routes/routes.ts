import { Router } from "express";
import { GetMovieByIdController } from "../../modules/movies/useCases/getMovieById/getMovieByIdController";
import { GetMovieByTitleController } from "../../modules/movies/useCases/getMovieByTitle/getMovieByTitleController";
import { ToggleFavoriteController } from "@modules/movies/useCases/toggleFavorite/toggleFavoriteController";

const router = Router();

const getMovieByTitleController = new GetMovieByTitleController();
const getMovieByIdController = new GetMovieByIdController();
const toggleMovieController = new ToggleFavoriteController();

router.get("/movie/id/:id", getMovieByIdController.handle);
router.get("/movie/title/:title", getMovieByTitleController.handle);
router.post("/movie/toggle/:imdbID", toggleMovieController.handle);

export { router };
