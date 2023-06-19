import express from "express";
import { readFile } from "fs/promises";

const app = express();

// Define the endpoint for the GET request
app.get("/randomword", async (req, res) => {
  const filePath = "./words.txt";
  const { length } = req.query;

  if (!length) {
    return res.status(400).json({ error: "Missing query parameter: length" });
  }

  try {
    // Read the TXT file asynchronously
    const data = await readFile(filePath, "utf8");

    // Split the content into an array of words
    const words = data.split("\n");

    // Filter the words with the specified length
    const filteredWords = words.filter(
      (word) => word.length === Number(length)
    );

    if (filteredWords.length === 0) {
      return res
        .status(404)
        .json({ error: `No words found with length ${length}` });
    }

    // Select a random word from the filtered list
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
