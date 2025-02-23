import { describe, expect, it, vi } from "vitest";
import { fetchPokemonDetails } from "../libs/api";

// Mock de fetch sin redeclarar tipos
const mockFetch = vi.fn();
global.fetch = mockFetch as typeof global.fetch;

describe("fetchPokemonDetails", () => {
  it("funciona correctamente", async () => {
    // Configura el mock
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ name: "pikachu" }),
    });

    const result = await fetchPokemonDetails(
      "https://pokeapi.co/api/v2/pokemon/25",
    );

    expect(result).toEqual({
      data: { name: "pikachu" },
      error: null,
      isLoading: false,
      isSuccess: true,
    });
  });
});
