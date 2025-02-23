import request from "supertest";
import express from "express";
import favoriteRouter from "../routes/favorite.route";
import fs from "fs";
import path from "path";

// Configura una instancia de la app para testing.
const app = express();
app.use(express.json());
app.use("/favorites", favoriteRouter.getRouter());

// Ruta del archivo de datos (para test, puedes usar un archivo temporal o mockear fs)
const FILE_PATH = path.join(__dirname, "../../data/favorites.json");

// Opcional: limpiar el archivo de favoritos antes de cada test
beforeEach(() => {
  if (fs.existsSync(FILE_PATH)) {
    fs.unlinkSync(FILE_PATH);
  }
});

describe("Favorites API", () => {
  test("POST /favorites should return 200 and an id when valid data is sent", async () => {
    const favoritesData = {
      favorites: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    };

    const response = await request(app)
      .post("/favorites")
      .send(favoritesData)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  test("POST /favorites should return 400 for invalid data", async () => {
    const invalidData = {
      favorites: "not an array",
    };

    const response = await request(app)
      .post("/favorites")
      .send(invalidData)
      .set("Content-Type", "application/json");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty(
      "message",
      "An array of Pokémon was expected.",
    );
  });

  test("GET /favorites/:id should return 404 if favorites list not found", async () => {
    const response = await request(app).get("/favorites/non-existing-id");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "Favorite list not found.");
  });
});
