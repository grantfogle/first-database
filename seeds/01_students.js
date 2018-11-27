
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
        },
        {
          name: 'Brandon RedShirt',
          fave_animal: 'https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9774e7d1ebaa9ac28f3259d4101b1854&auto=format&fit=crop&w=2305&q=80',
          previous_occupation: 'Aircraft Mechanic',
          hometown_lat: 39.7293989,
          hometown_long: -104.9930793,
          useless_superpower: 'Being able to remember the 57th word of every song heard.'
        },
        {
          name: "Sonja",
          fave_animal: "https://i0.wp.com/www.wagpets.com/wp-content/uploads/2017/11/the-pug-rose-ears.jpeg?w=960&ssl=1",
          previous_occupation: "Marketing Manager",
          hometown_lat: 36.407249,
          hometown_long: -105.573067,
          useless_superpower: "can understand the inner workings of butter"
        },
        {
          name: "Beef",
          fave_animal: "https://palsawa.com/img/Jukcg.jpg",
          previous_occupation: "Rock Climbing Instructor",
          hometown_lat: 45.0586,
          hometown_long: 92.1724,
          useless_superpower: "Fly, but only two feet off the ground"
        },
        {
          name: 'Sir. Phiillip Hengemuhle the First',
          fave_animal: 'http://infoweasels.com/whatcat.jpg',
          previous_occupation: 'Dancer',
          hometown_lat: 40.0150,
          hometown_long: 105.2705,
          useless_superpower: 'Sub-par speling'
        },
        {
          name: 'Dane Parke',
          fave_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
          previous_occupation: 'Sous Chef',
          hometown_lat: 38.1499,
          hometown_long: 144.3617,
          useless_superpower: 'Ability to resist the urges of the snack tray, during presentations'
        }
      ]);
    });
};
