import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get("/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            body: "This is a joke one for you"
        },
        {
            id: 2,
            title: "Joke 2",
            body: "This is a joke two for you"
        },
        {
            id: 3,
            title: "Joke 3",
            body: "This is a joke three for you"
        },
        {
            id: 4,
            title: "Joke 4",
            body: "This is a joke four for you"
        },
        {
            id: 5,
            title: "Joke 5",
            body: "This is a joke five for you"
        },
    ]
    res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen( port , () => {
    console.log(`Server running at http://localhost:${port}`);
});