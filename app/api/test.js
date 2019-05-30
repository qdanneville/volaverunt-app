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
    }).catch(err => {
        console.log('Error while members creation :', err)
    })
}

// START the creation
createMembership();