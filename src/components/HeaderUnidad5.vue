<template>
    <div class="bg-cover bg-center flex items-center p-5 text-white h-32"
        :style="`background-image: url(${fondo})`">

        <div class=" sapce-y-2">
            <h1 class="font-bold text-4xl">{{ temario.unidad }}</h1>
            <h1 class=" text-xl">{{ temario.titulo }}</h1>
        </div>


    </div>
    <div class="p-5 flex inline-flex w-full">
        <div class="w-1/3 my-auto">
            <img src="/src/assets/concurrencia.png" alt="">
        </div>
        <div class="w-2/3">
            <p class=" text-lg">{{ temario.competencias }}</p>

            <div v-for="value in temario.temas">

                <div class="border inline-flex w-full p-3 border-gray-200 bg-gray-300 text-center">
                    <p>{{ value.numero }}: {{ value.titulo }}</p>
                    <span v-on:click="test(value.numero)" class="block cursor-pointer pointer ml-auto text-xl">▼</span>
                </div>
                
                <template v-if="value.showSubTemas">
                    <div class="ml-10 p-1" v-for="subvalue in value.subtemas">
                        <router-link :to="`/Unidad/${subvalue.slice(0, 5)}`" class="text-blue-600 hover:underline">
                            {{ subvalue }}
                        </router-link>
                    </div>
                </template>
            </div>
        </div>
    </div>

</template>



<script setup>

import temarioJSON from '@/assets/Unidad_5.json'
import fondo from '@/assets/images.png'
import { ref } from 'vue'

const temario = ref(temarioJSON)

function test(numeroTema){    
    var tema = temario.value.temas.find(x => x.numero == numeroTema)      
    tema.showSubTemas = !tema.showSubTemas  
}

</script>