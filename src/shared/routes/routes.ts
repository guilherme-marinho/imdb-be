import { Router } from "express";
import { CheckStartController } from "../../modules/movies/useCases/checkStar/checkStartController";
import { GetMovieByTitleController } from "../../modules/movies/useCases/getMovieByTitle/getMovieByTitleController";
import { ToggleFavoriteController } from "@modules/movies/useCases/toggleFavorite/toggleFavoriteController";

const router = Router();

const getMovieByTitleController = new GetMovieByTitleController();
const checkStartController = new CheckStartController();
const toggleMovieController = new ToggleFavoriteController();

router.get("/movie/star/:imdbID", checkStartController.handle);
router.get("/movie/title/:title", getMovieByTitleController.handle);
router.post("/movie/toggle/:imdbID", toggleMovieController.handle);

export { router };
