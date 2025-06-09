const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: 'Form saved', form });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
