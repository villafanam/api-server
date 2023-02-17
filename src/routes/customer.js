'use strict';

const express = require('express');
//const { customerModel } = require('../models/index');
const { customerCollection } = require('../models');

const router = express.Router();

router.get('/customer', async (req, res, next) => {
  const customers = await customerCollection.read();
  res.status(200).send(customers);
});

router.get('/customer/:id', async (req, res, next) => {
  const customers = await customerCollection.read(req.params.id);
  res.status(200).send(customers);
});

router.post('/customer', async (req, res, next) => {
  try 
  {
    const newCustomer = await customerCollection.create(req.body);
    res.status(200).send(newCustomer);
  } 
  catch (error) 
  {
    next(error);
  }
});

router.put('/customer/:id', async (req, res, next) => {
  const updatedCustomer = await customerCollection.update(req.params.id, req.body);
  let customer = updatedCustomer[1][0];
  //console.log('CUSTOMER: ', customer);
  //res.status(200).send(updatedCustomer);
  res.status(200).send(customer);
});

router.delete('/customer/:id', async (req, res, next) => {
  await customerCollection.delete(req.params.id);

  res.status(200).send('Customer Deleted!');
});



module.exports = router;