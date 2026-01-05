<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Sección 1.1.1 -->
    <section class="bg-white rounded-lg p-6 mb-6">
      <div class="flex items-center mb-4">
        <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          1
        </span>
        <h3 class="text-2xl font-bold text-gray-800">1.1.1 Descripción y características</h3>
      </div>

      <!-- Contenido teórico -->
      <div class="prose max-w-none">
        <p class="text-gray-700 mb-4">
          Las <strong class="text-blue-600">estructuras de datos</strong> son formas organizadas de almacenar y
          organizar datos para facilitar su acceso y modificación.
        </p>
      </div>

      <!-- Ejemplo con PythonRunner -->
      <div class="mt-8">
        <h4 class="text-xl font-semibold mb-4 text-gray-800">
          Ejemplo comparativo
        </h4>
        <PythonRunner 
          :code="codigoEjemplo"
          title="ejemplo.py"
        />
      </div>

      <!-- Quiz -->
      <div class="mt-8 p-6 bg-gray-50 rounded-lg">
        <h4 class="text-xl font-semibold mb-4 text-gray-800">
          Quiz rápido
        </h4>
        <p class="text-gray-700 mb-4">¿Cuál es la principal ventaja de usar estructuras de datos?</p>
        <div class="space-y-3">
          <label v-for="(opcion, index) in quizOpciones" :key="index"
            class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
            :class="{ 'border-blue-500': respuestaSeleccionada === index }">
            <input type="radio" v-model="respuestaSeleccionada" :value="index" class="mr-3">
            <span>{{ opcion.texto }}</span>
          </label>
        </div>
        <button @click="verificarRespuesta"
          class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Verificar respuesta
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import PythonRunner from "@/components/PythonRun.vue"
import { ref } from 'vue'

const codigoEjemplo = `# SIN estructura de datos
nombre1 = "Ana"
nombre2 = "Luis"
nombre3 = "Carlos"

# CON estructura de datos
nombres = ["Ana", "Luis", "Carlos"]

print("Variables separadas:", nombre1, nombre2, nombre3)
print("Lista:", nombres)`

const quizOpciones = [
  { texto: "Ocupan menos memoria", correcta: false },
  { texto: "Permiten operaciones más eficientes", correcta: true },
  { texto: "Son más fáciles de escribir", correcta: false }
]

const respuestaSeleccionada = ref(null)

const verificarRespuesta = () => {
  if (respuestaSeleccionada.value === null) {
    alert("Por favor selecciona una respuesta")
    return
  }
  
  const correcta = quizOpciones[respuestaSeleccionada.value].correcta
  alert(correcta ? "¡Correcto!" : "Incorrecto")
}
</script>