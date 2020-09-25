const express = require('express')

const db = require('../db/db')

const router = express.Router()

// GET /api/v1/donart
router.get('/', (req, res) => {
  db.getArtworks()
    .then((artworks) => {
      return res.json({ artworks })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /api/v1/donart/artwork/:id
router.get('/artwork/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getArtworkById(id)
    .then((singleArt) => {
      return res.json(singleArt)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST /api/v1/donart/new-artwork
router.post('/new-artwork', (req, res) => {
  const newArtwork = req.body
  db.addNewArtwork(newArtwork)
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(err => res.status(500).send(err.message))
})

// PATCH /api/v1/donart/:id/buy-now
router.patch('/:id/buy-now', (req, res) => {
  const id = req.params.id
  db.artIsSold(id)
    .then(result => {
      console.log(result)
      res.status(200).send(`Artwork ${id} has sold`)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
