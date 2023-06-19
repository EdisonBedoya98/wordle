import { WordsData } from "../../models/interfaces/wordle.interface";

const getAllWords = async (): Promise<WordsData> =>
  await fetch(`data/filtered_words.json`, {}).then((response) =>
    response.json()
  );

export const WordsService = {
  getAllWords,
};
