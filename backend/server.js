import express from "express";
const app = express();

import "dotenv/config";
const PORT = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            contentType: "joke",
            content:
                "Why don't scientists trust atoms? Because they make up everything!",
        },
        {
            id: 2,
            contentType: "joke",
            content:
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
        },
        {
            id: 3,
            contentType: "joke",
            content:
                "Why don’t skeletons fight each other? They don’t have the guts.",
        },
        {
            id: 4,
            contentType: "joke",
            content: "What do you call cheese that isn't yours? Nacho cheese!",
        },
        {
            id: 5,
            contentType: "joke",
            content:
                "Why couldn’t the bicycle stand up by itself? It was two tired!",
        },
    ];

    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
