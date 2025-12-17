<template>
<div class="bg-cover bg-center flex items-center p-5 text-white h-32"
       style="background-image: url('/src/assets/fondo.png')">

        <div class=" sapce-y-2">
            <h1 class="font-bold text-4xl">{{ temario.unidad }}</h1>
            <h1 class=" text-xl">{{ temario.titulo }}</h1>
        </div>


    </div>
    <div class="p-5">
        <p>{{ temario.competencias }}</p>

        <div v-for="value in temario.temas">
            <p>{{ value.numero }}:  {{ value.titulo }}</p>

            <div class="ml-10" v-for="subvalue in value.subtemas">
                <p>{{ subvalue }}</p>
            </div>
        </div>
    </div>

</template>



<script setup>

import temario from '@/assets/Unidad_1.json'

</script>