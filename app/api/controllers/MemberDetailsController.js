const MemberDetails = require('../models/Member_details');

const MemberDetailsController = () => {

    const create = async (req, res) => {

        const body = req.body

        try {
            const member_details = await MemberDetails.create({
                member_id: body.member_id,
                membership_id: body.membership_id,
            });

            return res.status(200).json({member_details});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    return {
        create,
    };
};

module.exports = MemberDetailsController;
