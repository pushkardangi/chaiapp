import { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        axios
            .get("/api/jokes")
            .then((response) => {
                setJokes(response.data);
            })
            .catch((error) => {
                console.log("Error while loading jokes:", error);
            });
    }, []);

    return (
        <>
            <h1> Chai aur Full Stack </h1>
            <div>
                <h3>Jokes: {jokes.length}</h3>
            </div>

            <ol>
                {jokes.map((joke, index) => (
                    <div key={index}>
                        <li>{joke.content}</li>
                    </div>
                ))}
            </ol>
        </>
    );
}

export default App;
