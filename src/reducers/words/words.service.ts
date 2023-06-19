import { API_URL } from "../../constants/env";

const getAllWords = async (): Promise<string[]> =>
  await fetch(`${API_URL}/randomword?length=5`, {}).then((response) =>
    response.json()
  );

export const WordsService = {
  getAllWords,
};
