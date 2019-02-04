<template>
  <div>
      <h1>Gallery Page</h1>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
    ></div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
export default {
    components: {
      'gallery': VueGallery
    },
    data() {
        return {
            images: [
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg',
                'https://randomuser.me/api/portraits/men/3.jpg',
                'https://randomuser.me/api/portraits/men/4.jpg',
                'https://randomuser.me/api/portraits/men/5.jpg',
            ], 
            index: null
        }
    }
}
</script>
