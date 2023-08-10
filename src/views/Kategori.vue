<template>
  <br>

    <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Kategori</h2>
      </div>

    <div class="mt-10 grid grid-cols-3 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
      <div v-for="kategori in getKategori" >
            
       <article class="relative">
         <div class="aspect-square overflow-hidden">
           <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="../assets/elektronik.jpg" alt="" />
         </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <router-link :to="{name: 'FilterKategori', params: {kategori: kategori}}">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ kategori }}
              </router-link>
            </h3>
           </div>
         </div>
        </article>
      </div>
    </div>
  </div>
</section>

</template>
    
<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapGetters('kategori', ['getKategori']),
        },
        methods: {
            ...mapActions('kategori', ['fetchKategori']),
            
        },
        created() {
            this.fetchKategori();
        }
   }
</script>