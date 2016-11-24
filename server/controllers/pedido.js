Pedido       = require('../models/').Pedido;

module.exports = {

  index(req, res) {
    Pedido.findAll()
      .then((data)  =>  res.status(200).json(data))
      .catch((error)  =>  res.status(500).json(error));
  },

  show(req, res)  {
    Pedido.findById(req.params.id)
    .then((data)   => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
  },

  create(req, res)  {
    Pedido.create(req.body)
      .then((newData) => res.status(200).json(newData))
      .catch((error)  => res.status(500).json(error));
  },

  update(req, res)  {
    Pedido.update(req.body,  {
      where:  {
        id: req.params.id,
      },
    })
    .then((updatedData) =>  res.status(200).json(updatedData))
    .catch((error)      =>  res.status(500).json(error));
  },

  delete(req, res)  {
    Pedido.destroy({
      where:  {
        id: req.params.id,
      },
    })
    .then((deletedData) =>  res.status(200).json(deletedData))
    .catch((error)        =>  res.status(500).json(error));
  },

};
