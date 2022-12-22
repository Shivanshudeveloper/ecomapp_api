const Product_Model = require('../models/Product');

const addProduct = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
        name,
        category,
        price,
        product_code,
        weight,
        length,
        diameter,
        material,
        color,
        stocks,
        description,
        available,
        userId,
        img
    } = req.body;
    console.log(req.body);
    
    const newProduct = new Product_Model({
      name,
      category,
      product_code,
      weight,
      length,
      diameter,
      material,
      color,
      price,
      stocks,
      description,
      available,
      userId,
      img
    })
    newProduct.save()
    .then((data)=>{
        // console.log(req.body);
        res.status(200).json({message:"added a new product",status:true,data});
    })
    .catch((err)=>{
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
    });
};

const getProduct=async(req,res)=>{
    //   console.log(req.params.proId);
          res.setHeader("Content-Type", "application/json");
          Product_Model.findOne({ _id: req.params.proId })
            .then((result) => {
            //   console.log(result);
              res.status(200).json(result);
            })
            .catch((error) => {
              console.log(error);
              res.status(400).json(`Error: ${error}`);
            });
};

const getAllProducts=async (req, res) => {
    res.setHeader("Content-Type", "application/json");
      
      Product_Model.find({ userId: req.params.userId }).sort({ createdAt: -1 })
        .then((p) => {
            res.status(200).json(p)
        console.log("here")
        }
        )
        .catch((error) => res.status(400).json(error));
};




const updateProduct=async (req, res) => {
    const {name, category,product_code,weight,diameter,material,color,price, stocks, description, available } = req.body;
    Product_Model.updateOne({ _id: req.params.proId }, { $set: {name: name, category: category,product_code:product_code,weight:weight,diameter:diameter,material:material,color:color, price: price,stocks: stocks, description: description, available: available } })
        .then((data) => {
            // console.log(data);
            res.status(200).json({ status: true, message:"Product Updated"});
        })
        .catch((err) => console.log(err));
}

const deleteProduct = async (req, res) => {
    // const { proId } = req.params;
    Product_Model.findOneAndDelete({ _id: proId })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports={
    addProduct,
    getProduct,
    getAllProducts,
   
    updateProduct,
    deleteProduct
}