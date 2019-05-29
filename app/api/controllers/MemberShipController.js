const Membership = require('../models/Membership');

const MembershipController = () => {

    const create = async (req, res) => {

        const body = req.body

        try {
            const membership = await Membership.create({
                name: body.name,
                description: body.description,
                entries: body.entries,
            });

            return res.status(200).json({membership});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const getAll = async (req, res) => {
        try {
            const membership = await Membership.findAll();

            return res.status(200).json({ membership });
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

module.exports = MembershipController;
