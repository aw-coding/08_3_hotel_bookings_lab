<template>
<div>
<h3>Name: {{booking.name}}</h3>
<h4>Email address: {{booking.email}}</h4>
<h4>Checked in: {{booking.checkedin}}</h4>
<button v-on:click="deleteButton(booking._id)">Delete Booking</button>
</div>
</template>

<script>
import BookingService from '../services/BookingService.js'
import {eventBus} from "../main.js"
export default {
    name: 'booking-item',

    props: 
        ['booking'],

    methods: {
        deleteButton(id) {
            BookingService.deleteBooking(id)
            .then(() => eventBus.$emit("delete-booking", id))
        
        
        }
    }
    
    // components: {
        
    // }


}
</script>

<style>

</style>