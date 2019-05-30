const Member = require('./models/Member');
const Membership = require('./models/Membership');

console.log('TESTING BY CREATING DATA');

const createMembership = () => {
    Membership.create({
        name: 'Carte illimitée au mois',
        description: 'Carte illimitée au mois',
        entries: 1000
    }).then(newMembership => {
        console.log('Membership creation :', newMembership)
        createMembers();
    }).catch(err => {
        console.log("Error while membership creation :", err);
    })
}

const createMembers = () => {
    Member.bulkCreate([
        { firsname: 'Quentin', lastname: 'Danneville', email: 'quentin.danneville@gmail.com', membership_id: 1 },
        { firsname: 'Jean', lastname: 'Pedro', email: 'Jean.pedro@gmail.com', membership_id: 1 },
        { firsname: 'Martine', lastname: 'Poisson', email: 'martine.poisson@gmail.com', membership_id: 1 },
    ]).then(newMembers => {
        console.log('Members creation :', newMembers)
        getMembership();
    }).catch(err => {
        console.log('Error while members creation :', err)
    })
}

const getMembership = () => {
    Member.findOne({
        where: { email: 'quentin.danneville@gmail.com' }, include: 'membership'
    }).then(userFound => {
        console.log('User membership entries : ', userFound.membership.entries + '\n');
        getMembershipsById();
    })
}

const getMembershipsById = () => {
    Membership.findByPk(
        1, { include: ['members'] }
    ).then(membership => {
        console.log('Members with membership : ' + membership.name + ' are : ' + membership.get().members)
        console.log(membership.get().members)
    })
}

// START the creation
// Everythings starts with the membership creation
createMembership();