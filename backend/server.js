import express from "express"

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req,res) => {
  res.send('Server is ready');
})

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));


