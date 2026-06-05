import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Video Streaming Platform',
        role: 'Backend API',
    })
})
app.get('/contact', (req, res) => {
    res.json({
        email: 'bibek@example.com',
        phone: '1234'
    })
})


app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        id: userId,
        name: 'John Doe',
        email: 'bibek@gmail.com'
    })
})

const videos = [
    {
        id: 1,
        title: 'Video 1',
        description: 'This is video 1'
    },
    {
        id: 2,
        title: 'Video 2',
        description: 'This is video 2'
    },
]

app.get("/search", (req, res) => {
  const sarch = req.query.q as string;
  const results = videos.filter(video => video.title.toLowerCase().includes(sarch.toLowerCase()));
  res.json(results);
});



export default app