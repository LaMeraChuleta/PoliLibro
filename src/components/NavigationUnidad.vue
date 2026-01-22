<template>
  <footer class="pt-8 border-t border-gray-300 mt-8">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <!-- Botón Anterior -->
      <router-link v-if="mostrarAnterior && anterior" :to="anterior" 
                   class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ textoAnterior || 'Anterior' }}
      </router-link>
      <div v-else-if="!mostrarAnterior" class="w-full sm:w-auto"></div>

      <!-- Información Actual -->
      <div v-if="tituloActual" class="text-center text-sm text-gray-500">
        {{ tituloActual }}
      </div>
      <div v-else class="w-full sm:w-auto"></div>

      <!-- Botón Siguiente -->
      <router-link v-if="mostrarSiguiente && siguiente" :to="siguiente"
                   class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full sm:w-auto flex items-center justify-center gap-2">
        {{ textoSiguiente || 'Siguiente' }}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
      <div v-else-if="!mostrarSiguiente" class="w-full sm:w-auto"></div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  // Rutas de navegación
  anterior: {
    type: String,
    default: ''
  },
  siguiente: {
    type: String,
    default: ''
  },
  
  // Textos personalizados
  textoAnterior: {
    type: String,
    default: 'Anterior'
  },
  textoSiguiente: {
    type: String,
    default: 'Siguiente'
  },
  
  // Información actual
  tituloActual: {
    type: String,
    default: ''
  },
  
  // Control de visibilidad
  mostrarAnterior: {
    type: Boolean,
    default: true
  },
  mostrarSiguiente: {
    type: Boolean,
    default: true
  }
})
</script>