const adminProduct_Model = require('../models/AdminProduct');

const addAdminProduct = async (req, res) => {
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
        adminId,
    } = req.body;
    console.log(req.body);
    
    const newAdminProduct = new adminProduct_Model({
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
      adminId
    })
    newAdminProduct.save()
    .then((data)=>{
        console.log(req.body);
        res.status(200).json({message:"added a new admin product",status:true,data});
    })
    .catch((err)=>{
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
    });
};

const getAdminProduct=async(req,res)=>{
      console.log(req.params.proId);
          res.setHeader("Content-Type", "application/json");
          adminProduct_Model.findOne({ _id: req.params.proId })
            .then((result) => {
              console.log(result);
              res.status(200).json(result);
            })
            .catch((error) => {
              console.log(error);
              res.status(400).json(`Error: ${error}`);
            });
};

const getAllAdminProducts=async (req, res) => {
    res.setHeader("Content-Type", "application/json");
      adminProduct_Model.find({ adminId: req.params.adminId }).sort({ createdAt: -1 })
        .then((p) => res.status(200).json(p))
        .catch((error) => res.status(400).json(error));
};

const getAllProdOfACategory = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
      var category={};
      console.log(req.params.category);
      console.log(req.params.name);
      if(req.params.category==="All Category")
           {       
              category={};
           }
      else {
              category=req.params.category;
           }
           var name=req.params.name;
      adminProduct_Model.find({ adminId: req.params.adminId ,category: category ,name:name}).sort({ createdAt: -1 })
        .then((p) => res.status(200).json(p))
        .catch((error) => res.status(400).json(error));
};


const updateAdminProduct=async (req, res) => {
    const {name, category,product_code,weight,diameter,material,color,price, stocks, description, available } = req.body;
    adminProduct_Model.updateOne({ _id: req.params.proId }, { $set: {name: name, category: category,product_code:product_code,weight:weight,diameter:diameter,material:material,color:color, price: price,stocks: stocks, description: description, available: available } })
        .then((data) => {
            console.log(data);
            res.status(200).json({ status: true, message:"Admin Product Updated"});
        })
        .catch((err) => console.log(err));
}

const deleteAdminProduct = async (req, res) => {
    const { proId } = req.params;
    adminProduct_Model.findOneAndDelete({ _id: proId })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports={
    addAdminProduct,
    getAdminProduct,
    getAllAdminProducts,
    getAllProdOfACategory,
    updateAdminProduct,
    deleteAdminProduct
}