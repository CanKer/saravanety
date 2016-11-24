Producto       = require('../models/').Producto;

module.exports = {

  index(req, res) {
    Producto.findAll()
      .then((data)  =>  res.status(200).json(data))
      .catch((error)  =>  res.status(500).json(error));
  },

  show(req, res)  {
    Producto.findById(req.params.id)
    .then((data)   => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
  },

  create(req, res)  {
    Producto.create(req.body)
      .then((newData) => res.status(200).json(newData))
      .catch((error)  => res.status(500).json(error));
  },

  update(req, res)  {
    Producto.update(req.body,  {
      where:  {
        id: req.params.id,
      },
    })
    .then((updatedData) =>  res.status(200).json(updatedData))
    .catch((error)      =>  res.status(500).json(error));
  },

  delete(req, res)  {
    Producto.destroy({
      where:  {
        id: req.params.id,
      },
    })
    .then((deletedData) =>  res.status(200).json(deletedData))
    .catch((error)        =>  res.status(500).json(error));
  },

};
