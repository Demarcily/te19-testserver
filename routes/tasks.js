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
      res.json({
        tasks: {
          data: rows
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        tasks: {
          error: 'Error getting tasks'
        }
      })
    });
});


router.get('/:id', async (req, res, next) => {
  const id = req.params.id
 
  if (isNaN(req.params.id)) {
    res.status(400).json({
      task: {
        error: 'Bad request'
      }
    });
  }

  await pool.promise()
  .query('SELECT * FROM tasks WHERE id = ?', [id])
  .then(([rows, fields]) => {
    res.json({
      tasks: {
        data: rows
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      tasks: {
        error: 'Error getting tasks'
      }
    })
  });
});

router.get('/:id/delete', async (req, res, next) => {
  const id = req.params.id;

  await pool.promise()
  .query('DELETE FROM tasks WHERE id = ?', [id])
  .catch(err => {
    console.log(err);
    res.status(500).json({
      tasks: {
        error: 'Error getting tasks'
      }
    })
  });
  res.json(`deleting task ${id}`);
});

router.post('/', async (req, res, next) => {
  const task = req.body.task;
  await pool.promise()
  .query('INSERT INTO tasks (task) VALUES (?)', [task])
  .then((response) => {
    res.json({
      task: {
        data: response
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      task: {
        error: 'Error getting tasks'
      }
    })
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
