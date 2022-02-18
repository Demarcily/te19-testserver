const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res, next) => {
  await pool.promise()
    .query('SELECT * FROM MangaList')
    .then(([rows, fields]) => {
      res.json({
        MangaList: {
          data: rows
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        MangaList: {
          error: 'Error getting List'
        }
      })
    });
});


router.get('/:id', async (req, res, next) => {
  const id = req.params.id
 
  if (isNaN(req.params.id)) {
    res.status(400).json({
      MangaList: {
        error: 'Bad request'
      }
    });
  }

  await pool.promise()
  .query('SELECT * FROM MangaList WHERE id = ?', [id])
  .then(([rows, fields]) => {
    res.json({
      MangaList: {
        data: rows
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      MangaList: {
        error: 'Error getting List'
      }
    })
  });
});

module.exports = router;