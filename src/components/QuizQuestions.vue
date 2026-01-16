<template>
  <div class="p-6 bg-gray-50 rounded-lg">
    <h3 class="text-xl font-semibold mb-6 text-gray-800">
      {{ titulo }}
    </h3>

    <!-- Preguntas -->
    <div
      v-for="(pregunta, pIndex) in preguntas"
      :key="pIndex"
      class="mb-6"
    >
      <p class="text-gray-700 mb-3 font-medium">
        {{ pIndex + 1 }}. {{ pregunta.texto }}
      </p>

      <div class="space-y-2">
        <label
          v-for="(opcion, oIndex) in pregunta.opciones"
          :key="oIndex"
          class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
          :class="{
            'border-blue-500 border-2':
              respuestasSeleccionadas[pIndex] === oIndex
          }"
        >
          <input
            type="radio"
            :name="`pregunta-${pIndex}`"
            :value="oIndex"
            v-model="respuestasSeleccionadas[pIndex]"
            class="mr-3"
          />
          <span>{{ opcion.texto }}</span>
        </label>
      </div>
    </div>

    <!-- Botones -->
    <div class="flex items-center justify-between">
      <button
        @click="verificarQuiz"
        class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
      >
        Verificar respuestas
      </button>

      <button
        @click="reiniciarQuiz"
        class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
      >
        Reiniciar quiz
      </button>
    </div>

    <!-- Resultados -->
    <div
      v-if="mostrarResultados"
      class="mt-6 p-4 rounded-lg"
      :class="resultadoClass"
    >
      <p class="font-medium">{{ resultadoMensaje }}</p>
      <p class="text-sm mt-2">
        Correctas: {{ respuestasCorrectas }} / {{ preguntas.length }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  preguntas: {
    type: Array,
    required: true
  },
  titulo: {
    type: String,
    default: 'Quiz'
  }
})

// Estado
const respuestasSeleccionadas = ref([])
const mostrarResultados = ref(false)
const respuestasCorrectas = ref(0)
const resultadoMensaje = ref('')
const resultadoClass = ref('')

// 🔹 DEFINE PRIMERO LA FUNCIÓN
const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = Array(props.preguntas.length).fill(null)
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}

// 🔹 AHORA EL WATCH YA NO FALLA
watch(
  () => props.preguntas,
  (nuevas) => {
    respuestasSeleccionadas.value = Array(nuevas.length).fill(null)
    reiniciarQuiz()
  },
  { immediate: true }
)

// Verificar
const verificarQuiz = () => {
  if (respuestasSeleccionadas.value.includes(null)) {
    alert('Por favor responde todas las preguntas')
    return
  }

  let correctas = 0

  props.preguntas.forEach((pregunta, index) => {
    const respuesta = respuestasSeleccionadas.value[index]
    if (pregunta.opciones[respuesta].correcta) {
      correctas++
    }
  })

  respuestasCorrectas.value = correctas
  mostrarResultados.value = true

  if (correctas === props.preguntas.length) {
    resultadoMensaje.value = '¡Excelente! Dominas el tema'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= Math.ceil(props.preguntas.length / 2)) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa algunos conceptos'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando 💪'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

</script>
