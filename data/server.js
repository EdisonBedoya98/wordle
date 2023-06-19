import express from "express";
import { createReadStream, createWriteStream } from "fs";
import { createInterface } from "readline";

const app = express();

app.get("/randomword", async (req, res) => {
  const sourceFilePath = "./words.txt";
  const filteredFilePath = "./filtered_words.json";

  try {
    const sourceStream = createReadStream(sourceFilePath);
    const filteredStream = createWriteStream(filteredFilePath);
    const rl = createInterface({ input: sourceStream });

    const filteredWords = [];

    for await (const line of rl) {
      const word = line.trim();

      if (/^[a-zA-Z]{5}$/.test(word)) {
        filteredWords.push(word);
      }
    }

    const filteredJSON = JSON.stringify({ words: filteredWords });

    filteredStream.write(filteredJSON);
    filteredStream.end();

    if (filteredWords.length === 0) {
      return res.status(404).json({ error: "No five-letter words found." });
    }

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const randomWord = filteredWords[randomIndex];

    res.json({ word: randomWord });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read the file." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
