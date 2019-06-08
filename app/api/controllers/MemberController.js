const Member = require('../models/Member');

const MemberController = () => {

    const create = async (req, res) => {

        const body = req.body
        console.log(body.email);

        try {
            const member = await Member.create({
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email,
                membership_id: body.membership_id
            });

            return res.status(200).json({ member });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const getAll = async (req, res) => {
        try {
            const members = await Member.findAll({
                include: 'membership'
            });

            return res.status(200).json({ members });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    };

    const addMembership = async (req, res) => {

        const body = req.body

        try {
            Member.findOne({
                where: { email: body.email },
            }).then(userFound => {
                userFound.setMembership(body.membership_id).then(updatedUser => {
                    return res.status(200).json({ updatedUser });
                })
            })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    return {
        create,
        addMembership,
        getAll,
    };
};

module.exports = MemberController;
