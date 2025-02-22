export const fetchPokemonDetails = async (
  initialUrl: string
): Promise<{
  data: Pokemon | null;
  error: Error | null;
  isLoading: boolean;
  isSuccess: boolean;
}> => {
  let data: Pokemon | null = null;
  let error: Error | null = null;
  let isLoading = true;
  let isSuccess = false;

  try {
    const res = await fetch(initialUrl);
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
