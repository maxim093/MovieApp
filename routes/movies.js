const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

//Get Back all the movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.json({ message: err });
  }
});

//submits a new movie
router.post("/insertMovie", async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    currentlyRunning: req.body.currentlyRunning,
    thumbnail: req.body.thumbnail
  });

  try {
    const savedMovie = await movie.save();
    res.json("Speichern erfolgreich!");
    // res.json(savedMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Movie
router.get("/:title", async (req, res) => {
  try {
    const movie = await Movie.find({ title: req.query.title });

    res.sendfile("/specificMovie.html", { root: "./" });
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Movie

router.delete("/:movieId", async (req, res) => {
  try {
    const removedMovie = await Movie.remove({ _id: req.params.movieId });
    res.json(removedMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a Movie

router.patch("/:movieId", async (req, res) => {
  try {
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
