import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { FavoriteData } from "../types/types";

const FILE_PATH = path.join(__dirname, "../../data/favorites.json");

export const getFavoritesByIdService = (id: string): Promise<FavoriteData | null> => {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      if (err) {
        // If the error is not that the file does not exist.
        if (err.code !== "ENOENT") return reject(err);
        return resolve(null);
      }

      let favoritesList: FavoriteData[] = [];
      try {
        favoritesList = JSON.parse(data);
      } catch (parseError) {
        return reject(parseError);
      }

      const favoritesData = favoritesList.find((item) => item.id === id) || null;
      resolve(favoritesData);
    });
  });
};

export const saveFavoritesService = (favorites: any[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Generate unique id.
    const id = uuidv4();
    const favoritesData: FavoriteData = { id, favorites };

    // Read the current file (if it exists).
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
      let favoritesList: FavoriteData[] = [];
      if (err && err.code !== "ENOENT") {
        return reject(err);
      }
      if (data) {
        try {
          favoritesList = JSON.parse(data);
        } catch (parseError) {
          return reject(parseError);
        }
      }

      // Add the new favorites list.
      favoritesList.push(favoritesData);

      fs.writeFile(FILE_PATH, JSON.stringify(favoritesList, null, 2), "utf8", (err) => {
        if (err) return reject(err);
        resolve(id);
      });
    });
  });
};