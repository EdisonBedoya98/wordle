import express from "express";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const app = express();

app.get("/words", async (req, res) => {
  const sourceFilePath = "./words.txt";
  const desiredWordLength = parseInt(req.query.length);

  if (isNaN(desiredWordLength)) {
    return res.status(400).json({ error: "Invalid length parameter." });
  }

  try {
    const sourceStream = createReadStream(sourceFilePath);
    const rl = createInterface({ input: sourceStream });

    const filteredWords = [];

    for await (const line of rl) {
      const word = line.trim();
      if (word.length === desiredWordLength && /^[a-zA-Zñ]+$/.test(word)) {
        filteredWords.push(word);
      }
    }

    res.json({ filteredWords });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read the file." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
