use hotel;
db.dropDatabase();

// Insert bookings to the database
db.bookings.insertMany([
    {
        name: "orangina appleton",
        email: "fruits@apple.com",
        checked_in: false
    },
    {
        name: "appleby grape",
        email: "iprefervegetables@bowl.com",
        checked_in: true
    },
    {
        name: "bananby plummington",
        email: "thesenamesaredumb@email.com",
        checked_in: true
    },
]);
