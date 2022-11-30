
// Models
const Checkout_Model = require('../models/Checkout');

const addcheckout = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
        uid,
        product,
        productId,
    } = req.body;

    try {
        Checkout_Model.countDocuments({ uid, productId }).then((count) => {
            if (count === 0) {
              const newProduct = new Checkout_Model({
                uid,
                product,
                productId,
              });
              newProduct
                .save()
                .then((data) => {
                  res.status(200).json("Added");
                })
                .catch((err) => console.log(err));
            } else {
                res.status(201).json("Already Added");
            }
        });


    } catch (err) {
        console.log(err);
    }
}

const delallcheckouts = async (req, res) => {
    const { uid } = req.params;
    try {
        Checkout_Model.deleteMany({ uid })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addcheckout,
    delallcheckouts
}