'use strict';

const express = require('express');
//const { foodModel } = require('../models/index');
const {foodCollection} = require('../models');
const router = express.Router();


router.get('/food/', async (req, res, next) => {
  const food = await foodCollection.read();
  res.status(200).send(food);
});

router.get('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  const singleFood = await foodCollection.read(id);
  res.status(200).send(singleFood);
});

router.post('/food', async (req, res, next) => {
  try 
  {
    const newFood = await foodCollection.create(req.body);
    res.status(200).send(newFood);
  } 
  catch (error) 
  {
    next(error);
  }
});

router.put('/food/:id', async (req, res, next) => {
  

  const itemsModified = await foodCollection.update(req.params.id, req.body);
  let updatedFood = itemsModified[1][0];
  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  const { id } = req.params;
  await foodCollection.delete(id);
  res.status(200).send('Food Deleted!');
});


module.exports = router;