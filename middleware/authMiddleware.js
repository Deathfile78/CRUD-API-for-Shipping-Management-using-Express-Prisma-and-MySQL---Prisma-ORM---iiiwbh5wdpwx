const verifySecret = async (req, res, next) =>{
    console.log(req.header("SHIPPING_SECRET_KEY"))
    if (!req.header("SHIPPING_SECRET_KEY")){
        return res.status(403).json({"error": "SHIPPING_SECRET_KEY is missing or invalid"})
    }
    if(req.header("SHIPPING_SECRET_KEY") != 'a1b2c3d4e5f67890123456789abcdef'){
        return res.status(403).json({"error": "Failed to authenticate SHIPPING_SECRET_KEY"})
    }
    next()
}

module.exports = { verifySecret }