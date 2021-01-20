<template>
<div>
  <form id='booking-form' v-on:submit='handleSubmit' > <!-- remember to add method='post'-->
      <h2>Add a booking:</h2>
      <div>
        <label for='name' >name: </label>
        <input v-model='name' type='text' value='name' placeholder="Enter name"> 
      </div>
      <div>
        <label for='email' >email: </label>
        <input v-model='email' type='text' value='name' placeholder="Enter name"> 
      </div>
      <div>
     <label for='checkedin' >Guest has checked in: </label>
      <input v-model='checkedin' type='checkbox' value='checkedin'> 
      </div>
      <input type='submit' value='add' id='Add Booking'>
      </form>
</div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
    name:'booking-form',
    data() {
        return {
            name: '',
            email: '',
            checkedin: '',
            

        }
    },

    methods: {
        handleSubmit(event) {
            event.preventDefault();
            // if (this.name =='' || this.email == '')
            // console.log('enter a name and email address')
            // else {
            const newBooking = {
                name: this.name,
                email: this.email,
                checkedin: this.checkedin
            }
            BookingService.postBookings(newBooking)
            .then(response => {
            eventBus.$emit('new-booking-created', newBooking)}
            )}
    }
}
</script>

<style>

</style>