const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'ingredish',
  },
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve("ingredish/db/recipe.json"),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
  }
);

seeder
    .import(collections)
    .then(() => {
        console.log('Success');
    })
    .catch(err => {
        console.log('Error', err);
    });