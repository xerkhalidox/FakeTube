const bcrypt = require("bcrypt");
const User = require('../../models/user');

const signUp = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password
        } = req.body;

        const user = await User.countDocuments({ email: email }).exec();
        if (user) {
            return res.status(409).json({
                error: "This email is used by another user"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword
        });

        await newUser.save();
        return res.status(201).json({
            success: "Registeration Successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

module.exports = signUp;