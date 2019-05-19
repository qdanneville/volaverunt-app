const Member = require('../models/Member');

const MemberController = () => {

    const create = async (req, res) => {

        const body = req.body

        try {
            const member = await Member.create({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
            });

            return res.status(200).json({member});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const getAll = async (req, res) => {
        try {
            const members = await Member.findAll();

            return res.status(200).json({ members });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    return {
        create,
        getAll,
    };
};

module.exports = MemberController;
