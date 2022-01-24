const express = require('express');
const router = express.Router();
const pool = require('../database');
/* 
    BASE URL /tasks
    GET / - Get all tasks
    POST / - Create a new task
    GET /:id - Get a task by id
    PUT /:id - Update a task by id
    DELETE /:id - Delete a task by id
*/
router.get('/', async (req, res, next) => {
  await pool.promise()
  .query('SELECT * FROM tasks')
  .then(([rows, fields]) => {
    console.log(rows);
    res.json(rows);
  });
});

module.exports = router;



/*
await pool
  .promise()
  .query('SELECT * FROM users')
  .then(([rows, fields]) => {
    res.json({
      data: rows,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
    error: 'Database error',
    });
  });
*/ 
