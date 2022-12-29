const customerB2C = require("../models/CustomerCartB2C");

const getCartItems = async (req, res) => {
  const { uid } = req.params;
  try {
    const cart = await customerB2C.findOne({ uid });
    if (!cart) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(cart.cartItems);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Some Error occurred, Try again" });
  }
};

const removeCartItem = async (req, res) => {
  const { uid, productId } = req.params;
  try {
    const cart = await customerB2C.findOne({ uid });
    if (!cart) {
      return res.status(404).json({ message: "User not found" });
    }
    delete cart.cartItems[productId];
    cart.markModified("cartItems");
    const stat = await cart.save();
    //   console.log(stat)
    return res.status(202).json({ message: "Item removed from Cart" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Some Error occurred, Try again" });
  }
};

const addCartItem = async (req, res) => {
  // console.log(req.body)
  const { name, img, price, weight, quantity, uid, product_code } = req.body;
  try {
    let cart = await customerB2C.findOne({ uid });
    if (cart) {
      cart.cartItems[`${product_code}`] = {
        name,
        img,
        price,
        weight,
        quantity,
      };
      cart.markModified("cartItems");
      // console.log(cart);
    } else {
      const cartItems = {};
      cartItems[`${product_code}`] = { name, img, price, weight, quantity };
      cart = new customerB2C({
        uid,
        cartItems,
      });
    }
    const stat = await cart.save();
    res.status(201).json({ message: "Item added to Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Some Error occured, try again" });
  }
};

const productCartStatus = async (req, res) => {
  const { uid, product_code } = req.params;
  // console.log(uid, product_code)
  const cart = await customerB2C.findOne({ uid });
  if (!cart) {
    return res.status(404).json({ message: "User not found" });
  }
  // console.log(cart)
  if (cart.cartItems[product_code] != undefined) {
    stat = false;
  } else {
    stat = true;
  }
  res.status(200).json({stat})
};

module.exports = {
  addCartItem,
  removeCartItem,
  getCartItems,
  productCartStatus,
};
