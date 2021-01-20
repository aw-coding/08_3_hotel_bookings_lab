use bookingsdb;
db.dropDataBase();




db.bookings.insertMany( [
    {
name:'Test Name 3',
email:'123@hotmail.com',
checkedin:'true'

},

{
name:'Test Name 4',
email:'456@hotmail.com',
checkedin:'true'
}
  ])

