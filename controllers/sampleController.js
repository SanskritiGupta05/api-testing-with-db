const Sample = require("../model/Sample");

// Get All products
const sample_all = async (req, res) => {
    try {
        const samples = await Sample.find();
        res.json(samples);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single product
const sample_details = async (req, res) => {
    try {
        const sample = await Sample.findById(req.params.sampleId);
        res.json(sample);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New product
const sample_create = async (req, res) => {
    const sample = new Sample({
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        date: req.body.date
      });
    
      try {
        const savedSample = await sample.save();
        res.send(savedSample);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update product
const sample_update = async (req, res) => {
    try {
        const sample = {
          name: req.body.name,
          email: req.body.email,
          text: req.body.text,
          date: req.body.date
        };
    
        const updatedSample = await Sample.findByIdAndUpdate(
          { _id: req.params.sampleId },
          sample
        );
        res.json(updatedSample);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
const sample_delete = async (req, res) => {
    try {
        const removeSample = await Sample.findByIdAndDelete(req.params.sampleId);
        res.json(removeSample);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    sample_all, 
    sample_details, 
    sample_create, 
    sample_update, 
    sample_delete
  }