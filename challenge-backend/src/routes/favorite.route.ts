import { Router } from "express";
import favoriteController from "../controllers/favorite.controller";

class FavoriteRouter {
    public router: Router;
    constructor() {
      this.router = Router();
      this.router.get("/:id", favoriteController.getFavoritesById);
      this.router.post("/", favoriteController.saveFavorites);
    }
  
    getRouter() {
      return this.router;
    }
  }
  
  export default new FavoriteRouter();