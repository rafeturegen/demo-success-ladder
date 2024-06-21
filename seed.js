const mongoose = require('mongoose');
const Class = require('./models/class');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const classes = [
    {
        name: 'Calculus 1',
        image: '/math.jpg',
    },
    {
        name: 'General Physics 1',
        image: '/physics.jpg',
    },
    {
        name: 'General Chemistry 1',
        image: '/chemistry.jpg',
    },
    {
        name: 'Calculus 2',
        image: '/math.jpg',
    },
    {
        name: 'General Physics 2',
        image: '/physics.jpg',
    },
    {
        name: 'General Chemistry 2',
        image: '/chemistry.jpg',
    },
];

async function seedDatabase() {
    await Class.deleteMany({});
    await Class.insertMany(classes); 
    console.log('Database seeded successfully');
    mongoose.connection.close();
}

seedDatabase().catch((err) => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
});
