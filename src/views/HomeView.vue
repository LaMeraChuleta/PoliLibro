<template>
  <div class="flex w-full h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md border-r border-gray-200">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-xl font-bold text-gray-700">Temario</h2>
      </div>
      <nav class="mt-4">
        <ul class="space-y-2">
          <li v-for="(item, index) in temario" :key="index">
            <button class="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium">
              {{ item }}
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <main class="flex-1 p-6">
      <HeaderUnidad></HeaderUnidad>
    </main>
  </div>
</template>

<script setup>
import HeaderUnidad from '@/components/HeaderUnidad.vue';

const temario = [
  "Introducción a la carrera",
  "Historia de la universidad",
  "Asignaturas principales",
  "Metodología de enseñanza",
  "Evaluaciones y proyectos",
  "Actividades extracurriculares",
];
</script>
