const Category_Model = require('../models/Category');

const addCategory = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const {
        categoryName,
        status,
        userId
    } = req.body;
    
    const newCategory = new Category_Model({
      categoryName,
      status,
      userId
    })
    newCategory.save()
    .then((data)=>{
        console.log(req.body);
        res.status(200).json({message:"added a new category",status:true,data});
    })
    .catch((err)=>{
        console.log(err);
        if (err) res.status(400).json(`Error: ${err}`);
    });
};

const getCategory=async(req,res)=>{
      console.log(req.params.catId);
          res.setHeader("Content-Type", "application/json");
          Category_Model.findOne({ _id: req.params.catId })
            .then((result) => {
              console.log(result);
              res.status(200).json(result);
            })
            .catch((error) => {
              console.log(error);
              res.status(400).json(`Error: ${error}`);
            });
};

const getAllCategories=async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    // console.log("hello");
        Category_Model.find({ userId: req.params.userId }).sort({ createdAt: -1 })
        .then((p) => res.status(200).json(p))
        .catch((error) => res.status(400).json(error));
};

const updateCategory=async (req, res) => {
    const {categoryName,status} = req.body;
    Category_Model.updateOne({ _id: req.params.catId }, { $set: {categoryName: categoryName,status:status} })
        .then((data) => {
            res.status(200).json({ status: true, message:"Category Updated"});
        })
        .catch((err) => console.log(err));
}

const deleteCategory = async (req, res) => {
    const { catId } = req.params;
    Category_Model.findOneAndDelete({ _id: catId })
        .then((data) => {
            res.status(200).json({ status: true, data });
        })
        .catch((err) => console.log(err));
}

module.exports={
    addCategory,
    getCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}