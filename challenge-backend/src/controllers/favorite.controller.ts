import { Request, Response } from "express";
import * as favoriteService from "../services/favorite.service";

class FavoriteController {
  getFavoritesById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const favoritesData = await favoriteService.getFavoritesByIdService(id);
      if (!favoritesData) {
        res.status(404).json({ message: "Favorite list not found." });
        return;
      }
      res.status(200).json(favoritesData);
    } catch (error) {
      res.status(500).json({ message: "Error getting favorites." });
    }
  };

  saveFavorites = async (req: Request, res: Response): Promise<void> => {
    const { favorites } = req.body;

    if (!Array.isArray(favorites)) {
      res.status(400).json({ message: "An array of Pokémon was expected." });
      return;
    }

    if (
      !favorites.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          "name" in item &&
          typeof item.name === "string"
      )
    ) {
      res.status(400).json({
        message:
          "Incorrect structure.",
      });
      return;
    }

    try {
      const id = await favoriteService.saveFavoritesService(favorites);
      res.status(200).json({ id });
    } catch (error) {
      res.status(500).json({ message: "Error saving favorites." });
    }
  };
}

export default new FavoriteController();