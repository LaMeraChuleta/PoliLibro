<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Sección 1.2.1 -->
    <section class="bg-white rounded-lg p-6 mb-6">
      <!-- Título -->
      <div class="flex items-center mb-6">
        <span class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          2.1
        </span>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">1.2.1 Descripción y características de listas</h2>
          <p class="text-gray-600">Acceso a elementos y tamaño en Python</p>
        </div>
      </div>

      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Las <strong class="text-blue-600">listas</strong> son contenedores ordenados y mutables que permiten almacenar 
          múltiples elementos en una secuencia. Son una de las estructuras de datos más versátiles en Python.
        </p>
        <p class="text-gray-700">
          Las listas permiten <strong>acceso por índice</strong>, tienen <strong>tamaño dinámico</strong> y pueden 
          contener elementos de diferentes tipos. Su flexibilidad las hace ideales para muchas aplicaciones.
        </p>
      </div>

      <!-- Características clave -->
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-list-ol text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-blue-800 mb-2">Acceso por índice</h3>
          <p class="text-blue-700">Elementos accesibles mediante índices positivos (0, 1, 2...) y negativos (-1, -2...)</p>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-expand-alt text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-green-800 mb-2">Tamaño dinámico</h3>
          <p class="text-green-700">Crece o reduce automáticamente según se agregan o eliminan elementos</p>
        </div>
      </div>

      <!-- Ejemplo 1: Creación y acceso básico -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Creación y acceso básico</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="acceso_basico.py"
          :showLineNumbers="true"
          initialHeight="220px"
        />
      </div>

      <!-- Diagrama visual de índices -->
      <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Índices positivos y negativos</h3>
        <div class="flex justify-center items-center space-x-4 overflow-x-auto py-4">
          <div class="text-center">
            <p class="font-medium text-gray-700 mb-2">Índices positivos</p>
            <div class="flex space-x-2">
              <div v-for="(item, index) in ['A', 'B', 'C', 'D', 'E']" :key="index"
                   class="w-16 h-16 flex flex-col items-center justify-center bg-blue-100 border-2 border-blue-300 rounded-lg">
                <span class="text-sm text-gray-600">lista[{{index}}]</span>
                <span class="font-bold text-blue-700">{{item}}</span>
              </div>
            </div>
          </div>
          <div class="text-gray-400">
            <i class="fas fa-arrows-alt-h text-2xl"></i>
          </div>
          <div class="text-center">
            <p class="font-medium text-gray-700 mb-2">Índices negativos</p>
            <div class="flex space-x-2">
              <div v-for="(item, index) in ['A', 'B', 'C', 'D', 'E']" :key="index"
                   class="w-16 h-16 flex flex-col items-center justify-center bg-green-100 border-2 border-green-300 rounded-lg">
                <span class="text-sm text-gray-600">lista[{{-5 + index}}]</span>
                <span class="font-bold text-green-700">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ejemplo 2: Slicing y tamaño -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Slicing y operaciones de tamaño</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="slicing_tamaño.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <!-- Ejemplo 3: Sistema de inventario -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de inventario</h3>
        <p class="text-gray-700 mb-4">
          En un sistema de inventario, usamos listas para gestionar productos:
        </p>
        <PythonRunner 
          :code="ejemplo3Code"
          title="inventario.py"
          :showLineNumbers="true"
          initialHeight="300px"
        />
      </div>


      <!-- Quiz funcional -->
      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de comprensión</h3>
        
        <!-- Pregunta 1 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. {{ preguntas[0].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[0].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[0] === index }">
              <input 
                type="radio" 
                :name="'pregunta1'"
                :value="index"
                @change="respuestasSeleccionadas[0] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Pregunta 2 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. {{ preguntas[1].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[1].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[1] === index }">
              <input 
                type="radio" 
                :name="'pregunta2'"
                :value="index"
                @change="respuestasSeleccionadas[1] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Pregunta 3 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">3. {{ preguntas[2].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[2].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[2] === index }">
              <input 
                type="radio" 
                :name="'pregunta3'"
                :value="index"
                @change="respuestasSeleccionadas[2] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex items-center justify-between">
          <button @click="verificarQuiz" 
                  class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium">
            Verificar respuestas
          </button>
          
          <button @click="reiniciarQuiz" 
                  class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
            Reiniciar quiz
          </button>
        </div>

        <!-- Resultados -->
        <div v-if="mostrarResultados" class="mt-6 p-4 rounded-lg" 
             :class="resultadoClass">
          <p class="font-medium">{{ resultadoMensaje }}</p>
          <p class="text-sm mt-2">Correctas: {{ respuestasCorrectas }}/3</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Códigos de ejemplo
const ejemplo1Code = `# Acceso básico a elementos de lista

# Crear una lista
frutas = ["manzana", "banana", "naranja", "uva", "mango"]
print("Lista completa:", frutas)

# Acceso por índice positivo (comienza en 0)
print("\\nAcceso por índice positivo:")
print("frutas[0] =", frutas[0])  # Primer elemento
print("frutas[2] =", frutas[2])  # Tercer elemento

# Acceso por índice negativo (comienza en -1)
print("\\nAcceso por índice negativo:")
print("frutas[-1] =", frutas[-1])  # Último elemento
print("frutas[-2] =", frutas[-2])  # Penúltimo elemento

# Modificar elementos
frutas[1] = "kiwi"
print("\\nDespués de modificar frutas[1]:", frutas)

# Tamaño de la lista
print("\\nTamaño de la lista (len(frutas)):", len(frutas))`

const ejemplo2Code = `# Slicing y operaciones de tamaño

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
print("Lista original:", numeros)

# SLICING básico: lista[inicio:fin]
print("\\nSlicing básico:")
print("numeros[2:5] =", numeros[2:5])    # Elementos 2, 3, 4
print("numeros[:3] =", numeros[:3])      # Primeros 3 elementos
print("numeros[6:] =", numeros[6:])      # Desde el índice 6 hasta el final

# SLICING con paso: lista[inicio:fin:paso]
print("\\nSlicing con paso:")
print("numeros[::2] =", numeros[::2])    # Cada 2 elementos
print("numeros[1::3] =", numeros[1::3])  # Cada 3 elementos desde índice 1

# SLICING negativo
print("\\nSlicing negativo:")
print("numeros[-4:-1] =", numeros[-4:-1]) # Últimos 4 elementos (sin el último)
print("numeros[::-1] =", numeros[::-1])   # Lista invertida

# Operaciones de tamaño
print("\\nOperaciones de tamaño:")
print("Longitud de la lista:", len(numeros))
print("¿Está vacía?", len(numeros) == 0)

# Verificar si índice existe
indice = 5
if indice < len(numeros):
    print(f"El índice {indice} existe, valor:", numeros[indice])
else:
    print(f"El índice {indice} NO existe")`

const ejemplo3Code = `# Sistema de inventario con listas

# Lista de productos en inventario
productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Impresora", "Tablet"]
print("Inventario completo:", productos)
print("Total productos:", len(productos))

# Acceso a productos específicos
print("\\nAcceso a productos:")
print("Primer producto:", productos[0])
print("Último producto:", productos[-1])
print("Productos del medio:", productos[2:4])

# Verificar disponibilidad
producto_buscado = "Mouse"
if producto_buscado in productos:
    indice = productos.index(producto_buscado)
    print(f"\\n{producto_buscado} disponible en posición {indice}")
else:
    print(f"\\n{producto_buscado} no disponible")

# Actualizar inventario
print("\\nActualizando inventario...")
productos.append("Router")  # Agregar nuevo producto
print("Después de agregar Router:", productos)
print("Nuevo total:", len(productos))

# Eliminar producto agotado
producto_eliminar = "Tablet"
if producto_eliminar in productos:
    productos.remove(producto_eliminar)
    print(f"\\n{producto_eliminar} eliminado del inventario")
    print("Inventario actualizado:", productos)
    print("Total restante:", len(productos))

# Obtener subconjunto de productos
print("\\nPrimeros 3 productos:", productos[:3])
print("Últimos 2 productos:", productos[-2:])`



// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Qué índice usarías para acceder al último elemento de una lista llamada 'datos'?",
    opciones: [
      { texto: "datos[0]", correcta: false },
      { texto: "datos[-1]", correcta: true },
      { texto: "datos[ultimo]", correcta: false },
      { texto: "datos[len(datos)]", correcta: false }
    ]
  },
  {
    texto: "¿Qué devuelve 'len(mi_lista)' si mi_lista = [1, 2, 3, 4, 5]?",
    opciones: [
      { texto: "4", correcta: false },
      { texto: "5", correcta: true },
      { texto: "6", correcta: false },
      { texto: "El último elemento", correcta: false }
    ]
  },
  {
    texto: "¿Qué obtienes con 'numeros[1:4]' si numeros = [10, 20, 30, 40, 50, 60]?",
    opciones: [
      { texto: "[10, 20, 30, 40]", correcta: false },
      { texto: "[20, 30, 40]", correcta: true },
      { texto: "[20, 30, 40, 50]", correcta: false },
      { texto: "[30, 40, 50]", correcta: false }
    ]
  }
]

// Estado del quiz
const respuestasSeleccionadas = ref([null, null, null])
const mostrarResultados = ref(false)
const respuestasCorrectas = ref(0)
const resultadoMensaje = ref('')
const resultadoClass = ref('')

// Funciones del quiz
const verificarQuiz = () => {
  // Verificar que todas estén respondidas
  if (respuestasSeleccionadas.value.includes(null)) {
    alert('Por favor responde todas las preguntas')
    return
  }

  // Calcular respuestas correctas
  let correctas = 0
  preguntas.forEach((pregunta, index) => {
    const respuestaIndex = respuestasSeleccionadas.value[index]
    if (respuestaIndex !== null && pregunta.opciones[respuestaIndex].correcta) {
      correctas++
    }
  })

  // Actualizar estado
  respuestasCorrectas.value = correctas
  mostrarResultados.value = true
  
  // Determinar mensaje y color
  if (correctas === preguntas.length) {
    resultadoMensaje.value = '¡Excelente! Dominas el acceso a listas en Python 🎉'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= 2) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa los conceptos de slicing 💪'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando, revisa los ejemplos de acceso a listas ✨'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}
</script>