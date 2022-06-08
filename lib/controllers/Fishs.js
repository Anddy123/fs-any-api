const { Router } = require('express');
const Fish = require('../models/Fish');

module.exports = Router()
  .post('/', async (req, res) => {
    const { name, price, image, description, category } = req.body;
    const newFish = await Fish.create({ name, price, image, description, category });
    res.send(newFish);

  })
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const fish = await Fish.findOne(id);
    res.send(fish);
  }) 
  .get('/', async (req, res) => {
    const fishs = await Fish.getAll();
    const newFishs = fishs.map(fish => {
      return {
        id: fish.id,
        name: fish.name
      };
    });
    res.json(newFishs);
  });
