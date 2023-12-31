const productService = require("../services/productService");
// 상세 보기
const detailProduct = async(req, res) => {
    try {
         // 토큰 유효성 검사
        //  const token = req.headers.authorization;
        //  const secretKey = process.env.SECRTKEY;
        //  if(!token) {
        //      return res.status(401).json({ message: "NOT FOUND TOKEN" });
        //  }
        const {id} = req.body;
        const products = await productService.detailProduct(id);

        console.log("Here Is Controller",products);
        console.log("Products of product ", products.product.price);
        return res.status(200).json({message: "NOT FOUND TOKEN", products});
    } catch (error) {
        return res.status(500).json({ message : "SHOW PRODUCT ERROR", error});
    }
};
// 장바구니
const shoppingBaskets = async(req, res) => {
    try {
         // 토큰 유효성 검사
        //  const token = req.headers.authorization;
        //  const secretKey = process.env.SECRTKEY;
        //  if(!token) {
        //      return res.status(401).json({ message: "NOT FOUND TOKEN" });
        //  }
        const {id} = req.body;
        const product = await productService.baskets(id);
        return  res.status(202).json({message: "SUCCESS INSERT PRODUCT", product});
    } catch(error) {
        return res.status(400).json({ message: "SHOPPINGITEMS ERROR", error});
    }
};

module.exports = {
    detailProduct,
    shoppingBaskets
}