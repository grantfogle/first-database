
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Grant Fogle',
          fave_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
          previous_occupation: 'SEO Account Dude',
          hometown_lat: 39.51,
          hometown_long: 104.76,
          useless_superpower: 'always 5 minutes late'
        },
        {
          name: 'Jess',
          fave_animal: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/03/baby_platypuses.jpg?itok=KL69Np6v&fc=50,50',
          previous_occupation: 'Wellsite Geologist',
          hometown_lat: 32.76,
          hometown_long: 97.30,
          useless_superpower: 'can walk real slow'
        },
        {
          name: "Meredith",
          fave_animal: 'https://photos.app.goo.gl/pVpPAWQSEb8arWpH7',
          previous_occupation: 'Paleontologist',
          hometown_lat: 29.76,
          hometown_long: 95.36,
          useless_superpower: 'Can communicate with rocks.'
        },
        {
          name: 'Ryan St.Germain',
          fave_animal: 'https://www.shoreupdate.com/wp-content/uploads/awpcp/images/mayhemsk9corps-758aa434-large.jpg',
          previous_occupation: 'Line',
          hometown_lat: 39.72,
          hometown_long: 104.83,
          useless_superpower: 'Able to get any snack from the snack tree'
        },
        {
          name: "Kate",
          fave_animal: "https://images.pexels.com/photos/53001/cougar-mountain-lion-puma-concolor-big-cat-53001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          previous_occupation: "Event Manager",
          hometown_lat: 35.08,
          hometown_long: 106.65,
          useless_superpower: "Can read the minds of houseflies"
        }
      ]);
    });
};
