const Member = require('../models/Member');
const Membership = require('../models/Membership');
const MemberDetails = require('../models/MemberDetails');

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

        const params = req.params

        try {
            Member.findOne({
                where: { id: params.member_id }
            }).then(memberFound => {
                console.log('MEMBER : ', memberFound);
                Membership.findOne({
                    where: { id: params.membership_id }
                }).then(membershipFound => {
                    MemberDetails.create({
                        member_id: params.member_id,
                        membership_id: params.membership_id,
                        entries: membershipFound.entries
                    }).then(MemberDetails => {
                        return res.status(200).json({ MemberDetails });
                    }).catch(err => {
                        return res.status(500).json({ msg: 'Member already has this membership' });
                    })
                }).catch(err => {
                    return res.status(500).json({ msg: 'Membership not found' });
                })
            }).catch(err => {
                return res.status(500).json({ msg: 'Member not found' });
            })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const addEntries = async (req, res) => {

        const params = req.params

        try {
            MemberDetails.findOne({
                where: {
                    member_id: params.member_id,
                },
            }).then(MemberDetails => {
                MemberDetails.increment('entries', { by: params.entries_amount });
                return res.status(200).json({});
            })
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const removeEntries = async (req, res) => {

        const params = req.params

        try {
            MemberDetails.findOne({
                where: {
                    member_id: params.member_id,
                },
            }).then(MemberDetails => {
                MemberDetails.decrement('entries', { by: params.entries_amount });
                return res.status(200).json({MemberDetails});
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
        removeEntries,
        addEntries,
        getAll,
    };
};

module.exports = MemberController;
