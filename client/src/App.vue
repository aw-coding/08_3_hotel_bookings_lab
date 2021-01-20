<template>
  <div id="app">
    <h1 >Hotel Booking Management App</h1>
    <booking-list :bookings='bookings' > </booking-list>
    <booking-form></booking-form>
  </div>
</template>

<script>

import BookingList from './components/BookingList.vue'
import BookingForm from './components/BookingForm.vue'
import { eventBus } from './main.js'
import BookingService from "./services/BookingService.js"

export default {
  name: 'App',
  data() {
    return {
      bookings: [
//         {
//     name:'Test Name',
//     email:'123@hotmail.com',
//     checkedin:'true'

// },

// {
//     name:'Test Name 2',
//     email:'456@hotmail.com',
//     checkedin:'true'
// }
//       
],
      
    }
  },


  mounted(){
    this.fetchBookings();


    eventBus.$on('new-booking-created', (newBooking) =>
    {this.bookings.push(newBooking)})

    
    eventBus.$on('delete-booking', id => {

          const index = this.bookings.findIndex(booking => booking._id === id);
          this.bookings.splice(index, 1);
        });
    
  },
  components: {
    'booking-list': BookingList,
    'booking-form': BookingForm
  },
  methods: {
      fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}


// {
// name:'Test Name',
// email:' 123@hotmail.com',
// checkedin:'true'

// }

// {
// name:'Test Name 2',
// email:' 456@hotmail.com',
// checkedin:'true'

// }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


