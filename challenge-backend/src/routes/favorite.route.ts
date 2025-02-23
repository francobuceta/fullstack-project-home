import { Router } from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favorite.controller";

class FavoriteRouter {
    public router: Router;
    constructor() {
      this.router = Router();
      this.router.get("/:id", favoriteController.getFavoritesById);
      this.router.post("/", 
        [
          body("favorites")
            .isArray()
            .withMessage("An array of Pokémon was expected."),
          body("favorites.*.name")
            .isString()
            .withMessage("Each favorite Pokémon must have a valid name.")
            .trim()
            .escape(),
        ],
        favoriteController.saveFavorites);
    }
  
    getRouter() {
      return this.router;
    }
  }
  
  export default new FavoriteRouter();