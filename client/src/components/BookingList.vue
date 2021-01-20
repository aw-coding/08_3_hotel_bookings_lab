<template>
    <div>
    <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking" />
     
  </div>

 
</template>

<script>

import BookingItem from './BookingItem.vue'

export default {
    name: 'booking-list',

    props: 
        ['bookings'],

    components: {
        'booking-item' : BookingItem
    }


    

    
    

}

</script>

<style>

</style>