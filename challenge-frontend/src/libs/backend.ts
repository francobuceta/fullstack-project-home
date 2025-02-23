export const saveFavoritesList = async (
  initialUrl: string,
  list: FavoritePokemon[]
): Promise<{
  data: { id: string } | null;
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
}> => {
  let data: { id: string } | null = null;
  let error: Error | null = null;
  let isLoading = true;
  let isSuccess = false;

  try {
    const res = await fetch(initialUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorites: list }),
    });
    const result = await res.json();

    if (res.status === 200) {
      isSuccess = true;
      data = result;
    } else {
      error = new Error(`Error: ${result}`);
    }
  } catch (e) {
    error = e instanceof Error ? e : new Error("An unknown error occurred");
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading, isSuccess };
};

export const getFavoritesList = async (
  initialUrl: string,
): Promise<{
  data: FavoritesResponse | null;
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
}> => {
  let data: FavoritesResponse | null = null;
  let error: Error | null = null;
  let isLoading = true;
  let isSuccess = false;

  try {
    const res = await fetch(initialUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await res.json();

    if (res.status === 200) {
      isSuccess = true;
      data = result;
    } else {
      error = new Error(`Error: ${result}`);
    }
  } catch (e) {
    error = e instanceof Error ? e : new Error("An unknown error occurred");
  } finally {
    isLoading = false;
  }

  return { data, error, isLoading, isSuccess };
};