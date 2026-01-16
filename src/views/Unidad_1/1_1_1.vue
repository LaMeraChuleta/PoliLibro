<template>
  <div class="container mx-auto px-4 py-6">
    <HeaderTitle numero="1" titulo="1.1.1 Descripción y características">
      <!-- Contenido teórico -->
      <div class="prose max-w-none">
        <p class="text-gray-700 mb-4">
          Las <strong class="text-blue-600">estructuras de datos</strong> son formas organizadas de almacenar y
          organizar datos para facilitar su acceso y modificación.
        </p>
      </div>
    </HeaderTitle>

    <!-- Ejemplo con PythonRunner -->
    <div class="mt-8">
      <h4 class="text-xl font-semibold mb-4 text-gray-800">
        Ejemplo comparativo
      </h4>
      <PythonRunner :code="codigoEjemplo" title="ejemplo.py" />
    </div>
    
    <!-- Quiz funcional -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción y características"></QuizQuestions>

  </div>
</template>

<script setup>
import PythonRunner from "@/components/PythonRun.vue"
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import { ref } from 'vue'

const codigoEjemplo = `# SIN estructura de datos
nombre1 = "Ana"
nombre2 = "Luis"
nombre3 = "Carlos"

# CON estructura de datos
nombres = ["Ana", "Luis", "Carlos"]

print("Variables separadas:", nombre1, nombre2, nombre3)
print("Lista:", nombres)`

const preguntas = [
  {
    texto: "¿Qué es un contenedor en programación?",
    opciones: [
      { texto: "Una variable que almacena un solo valor", correcta: false },
      { texto: "Una estructura que almacena múltiples elementos", correcta: true },
      { texto: "Un tipo de función", correcta: false },
      { texto: "Un operador especial", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es una característica común de los contenedores?",
    opciones: [
      { texto: "Almacenan un único tipo de dato", correcta: false },
      { texto: "Permiten agrupar datos relacionados", correcta: true },
      { texto: "No permiten acceso a sus elementos", correcta: false },
      { texto: "Son inmutables por definición", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de los siguientes es un ejemplo de contenedor en Python?",
    opciones: [
      { texto: "int", correcta: false },
      { texto: "float", correcta: false },
      { texto: "list", correcta: true },
      { texto: "print", correcta: false }
    ]
  }
]

</script>