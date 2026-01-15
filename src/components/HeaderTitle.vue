<template>
  <section class="mb-8">
    <!-- Encabezado -->
    <div class="flex items-center mb-4">
      <span
        class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3"
      >
        {{ numero }}
      </span>

      <h3 class="text-2xl font-bold text-gray-800">
        {{ titulo }}
      </h3>
    </div>

    <!-- Contenido -->
    <div class="prose max-w-none">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  numero: {
    type: [String, Number],
    required: true
  },
  titulo: {
    type: String,
    required: true
  }
})
</script>
