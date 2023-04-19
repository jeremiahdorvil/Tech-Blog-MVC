const router = require("express").Router();
const { Post } = require("../../models");

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);

        res.status(200).json(postData);
    } catch (error) {

        res.status(500).json(error);
    }
});



module.exports = router;