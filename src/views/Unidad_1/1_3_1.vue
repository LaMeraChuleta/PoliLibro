<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Sección 1.3.1 -->
    <section class="bg-white rounded-lg p-6 mb-6">
      <!-- Título -->
      <div class="flex items-center mb-6">
        <span class="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          3.1
        </span>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">1.3.1 Descripción y características de conjuntos</h2>
          <p class="text-gray-600">Acceso a elementos, membresía y tamaño en Python</p>
        </div>
      </div>

      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los <strong class="text-purple-600">conjuntos (sets)</strong> son colecciones desordenadas de elementos únicos. 
          A diferencia de las listas, no mantienen un orden específico y eliminan automáticamente los duplicados.
        </p>
        <p class="text-gray-700">
          Son ideales cuando necesitas verificar rápidamente si un elemento pertenece a una colección 
          o cuando necesitas operaciones matemáticas entre conjuntos.
        </p>
      </div>

      <!-- Características principales -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-random text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-purple-800 mb-2">Sin orden</h3>
          <p class="text-purple-700 text-sm">Los elementos no tienen posición fija</p>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-ban text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-green-800 mb-2">Sin duplicados</h3>
          <p class="text-green-700 text-sm">Elementos únicos automáticamente</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-search text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-blue-800 mb-2">Búsqueda rápida</h3>
          <p class="text-blue-700 text-sm">Membresía O(1) en promedio</p>
        </div>
      </div>

      <!-- Comparación con listas -->
      <div class="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Conjuntos vs Listas</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Característica</th>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Lista</th>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Conjunto</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50">
                <td class="py-3 px-4 border-b">Orden</td>
                <td class="py-3 px-4 border-b">✅ Mantiene orden</td>
                <td class="py-3 px-4 border-b">❌ Sin orden</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 px-4 border-b">Duplicados</td>
                <td class="py-3 px-4 border-b">✅ Permitidos</td>
                <td class="py-3 px-4 border-b">❌ Automáticamente eliminados</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 px-4 border-b">Acceso por índice</td>
                <td class="py-3 px-4 border-b">✅ lista[0], lista[1]</td>
                <td class="py-3 px-4 border-b">❌ No disponible</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 px-4">Búsqueda (elemento in)</td>
                <td class="py-3 px-4">❌ O(n) - Lento para grandes listas</td>
                <td class="py-3 px-4">✅ O(1) - Muy rápido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Ejemplo 1: Creación y características básicas -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Creación y características básicas</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="conjuntos_basicos.py"
          :showLineNumbers="true"
          initialHeight="240px"
        />
      </div>

      <!-- Ejemplo 2: Verificación de membresía -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Verificación de membresía</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="membresia.py"
          :showLineNumbers="true"
          initialHeight="260px"
        />
      </div>

      <!-- Ejemplo 3: Sistema de etiquetas únicas -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de etiquetas únicas en blog</h3>
        <p class="text-gray-700 mb-4">
          En un sistema de blog, los conjuntos son perfectos para manejar etiquetas únicas:
        </p>
        <PythonRunner 
          :code="ejemplo3Code"
          title="blog_etiquetas.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <!-- Ejercicio práctico -->
      <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Sistema de votación</h3>
        <p class="text-gray-700 mb-4">
          <strong>Situación:</strong> Implementa un sistema de votación donde cada persona solo pueda votar una vez.
        </p>
        
        <PythonRunner 
          :code="ejercicioCode"
          title="sistema_votacion.py"
          :showLineNumbers="true"
          initialHeight="250px"
          :showReset="true"
          :showSolution="true"
          :solutionCode="solucionCode"
        />
      </div>

      <!-- Diagrama visual -->
      <div class="mb-8 p-6 bg-gray-50 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Visualización: Conjunto vs Lista</h3>
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
          <div class="text-center">
            <div class="mb-2 font-medium text-red-600">Lista (con duplicados)</div>
            <div class="flex space-x-2">
              <div class="w-12 h-12 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
                A
              </div>
              <div class="w-12 h-12 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
                B
              </div>
              <div class="w-12 h-12 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
                A
              </div>
              <div class="w-12 h-12 bg-red-100 border-2 border-red-300 rounded-lg flex items-center justify-center">
                C
              </div>
            </div>
            <div class="text-sm text-gray-600 mt-2">4 elementos (A aparece 2 veces)</div>
          </div>
          
          <div class="text-gray-400">
            <i class="fas fa-arrow-right text-2xl"></i>
          </div>
          
          <div class="text-center">
            <div class="mb-2 font-medium text-green-600">Conjunto (sin duplicados)</div>
            <div class="flex space-x-2">
              <div class="w-12 h-12 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
                A
              </div>
              <div class="w-12 h-12 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
                B
              </div>
              <div class="w-12 h-12 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
                C
              </div>
            </div>
            <div class="text-sm text-gray-600 mt-2">3 elementos (A solo aparece 1 vez)</div>
          </div>
        </div>
      </div>

      <!-- Quiz funcional -->
      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de conjuntos</h3>
        
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. {{ preguntas[0].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[0].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[0] === index }">
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

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. {{ preguntas[1].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[1].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[1] === index }">
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

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">3. {{ preguntas[2].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[2].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[2] === index }">
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
const ejemplo1Code = `# Creación y características básicas de conjuntos

# Crear un conjunto
colores = {"rojo", "verde", "azul", "rojo", "verde"}
print("Conjunto de colores:", colores)
print("Tamaño del conjunto:", len(colores))

# Nota: Los duplicados se eliminan automáticamente
print("\\n¿Se eliminaron duplicados?:", len(colores) == 3)

# Conjunto vacío (usar set(), no {})
conjunto_vacio = set()
print("Conjunto vacío:", conjunto_vacio)
print("Tamaño conjunto vacío:", len(conjunto_vacio))

# Convertir lista a conjunto (elimina duplicados)
lista_con_duplicados = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
conjunto_sin_duplicados = set(lista_con_duplicados)
print("\\nLista original:", lista_con_duplicados)
print("Conjunto sin duplicados:", conjunto_sin_duplicados)
print("Elementos únicos:", len(conjunto_sin_duplicados))

# Acceso a elementos (NO por índice)
print("\\nAcceso a elementos:")
for color in colores:
    print(" -", color)

# Intentar acceder por índice (ERROR)
# print(colores[0])  # TypeError: 'set' object is not subscriptable`

const ejemplo2Code = `# Verificación de membresía

usuarios_activos = {"ana123", "luis456", "carlos789", "maria012"}
print("Usuarios activos:", usuarios_activos)
print("Total usuarios activos:", len(usuarios_activos))

# Verificar membresía con 'in'
usuarios_a_verificar = ["ana123", "pedro999", "luis456", "sofia888"]

print("\\nVerificación de membresía:")
for usuario in usuarios_a_verificar:
    if usuario in usuarios_activos:
        print(f"  {usuario}: ✅ Usuario activo")
    else:
        print(f"  {usuario}: ❌ Usuario no encontrado")

# Métodos de membresía
print("\\nMétodos adicionales:")

# Agregar elementos
usuarios_activos.add("pedro999")
print("Después de agregar 'pedro999':", usuarios_activos)

# Intentar agregar duplicado (no hace nada)
usuarios_activos.add("ana123")
print("Después de agregar 'ana123' (duplicado):", usuarios_activos)

# Eliminar elementos
usuarios_activos.remove("carlos789")
print("Después de eliminar 'carlos789':", usuarios_activos)

# Verificar si está vacío
print("\\nEstado del conjunto:")
print("¿Está vacío?:", len(usuarios_activos) == 0)
print("Tamaño actual:", len(usuarios_activos))

# Vaciar conjunto
# usuarios_activos.clear()
# print("Después de clear():", usuarios_activos)`

const ejemplo3Code = `# Sistema de etiquetas únicas en blog

class SistemaEtiquetas:
    def __init__(self):
        self.etiquetas_unicas = set()
    
    def agregar_etiquetas(self, *nuevas_etiquetas):
        """Agrega nuevas etiquetas al sistema"""
        cantidad_inicial = len(self.etiquetas_unicas)
        for etiqueta in nuevas_etiquetas:
            self.etiquetas_unicas.add(etiqueta.lower())
        cantidad_agregadas = len(self.etiquetas_unicas) - cantidad_inicial
        print(f"✓ Se agregaron {cantidad_agregadas} etiquetas nuevas")
    
    def buscar_etiqueta(self, etiqueta):
        """Busca si una etiqueta existe"""
        etiqueta = etiqueta.lower()
        if etiqueta in self.etiquetas_unicas:
            print(f"✅ '{etiqueta}' encontrada en el sistema")
            return True
        else:
            print(f"❌ '{etiqueta}' no encontrada")
            return False
    
    def obtener_etiquetas_populares(self, limite=5):
        """Simula obtener etiquetas más populares"""
        # En un sistema real, esto vendría de una base de datos
        todas_etiquetas = list(self.etiquetas_unicas)
        return sorted(todas_etiquetas)[:limite]
    
    def mostrar_estadisticas(self):
        """Muestra estadísticas del sistema"""
        print("\\n📊 ESTADÍSTICAS DEL SISTEMA DE ETIQUETAS")
        print("=" * 40)
        print(f"Total etiquetas únicas: {len(self.etiquetas_unicas)}")
        print(f"Etiquetas disponibles: {sorted(self.etiquetas_unicas)}")
        
        # Mostrar algunas etiquetas populares
        populares = self.obtener_etiquetas_populares(3)
        print(f"Etiquetas populares: {populares}")

# ========== USO DEL SISTEMA ==========
print("🏷️ SISTEMA DE ETIQUETAS DE BLOG")
sistema = SistemaEtiquetas()

# Agregar etiquetas (algunas duplicadas)
sistema.agregar_etiquetas("Python", "programación", "tutorial", "Python", "WEB", "Programación")
sistema.agregar_etiquetas("django", "flask", "api", "web", "python")

# Buscar etiquetas
print("\\n🔍 BÚSQUEDA DE ETIQUETAS:")
sistema.buscar_etiqueta("PYTHON")
sistema.buscar_etiqueta("java")
sistema.buscar_etiqueta("web")

# Mostrar estadísticas
sistema.mostrar_estadisticas()`

const ejercicioCode = `# EJERCICIO: Sistema de votación

# Conjunto para almacenar IDs únicos de votantes
votantes_registrados = set()

# INSTRUCCIONES:
# 1. Registra estos votantes (algunos intentarán votar dos veces):
#    - "V001", "V002", "V001", "V003", "V002", "V004"

# 2. Verifica si "V005" ya votó

# 3. Calcula el total de votantes únicos

# 4. Intenta eliminar a "V003" (si existe)

# 5. Verifica si el sistema de votación está vacío

print("Sistema de Votación")
print("=" * 30)

# Después de completar las instrucciones:
print("\\nVotantes registrados:", votantes_registrados)
print("Total votantes únicos:", total_votantes)
print("¿V005 ya votó?:", v005_voto)
print("¿Sistema vacío?:", sistema_vacio)`

const solucionCode = `# SOLUCIÓN: Sistema de votación

# Conjunto para almacenar IDs únicos de votantes
votantes_registrados = set()

# 1. Registrar votantes (los duplicados se ignoran)
ids_votantes = ["V001", "V002", "V001", "V003", "V002", "V004"]
for id_votante in ids_votantes:
    votantes_registrados.add(id_votante)

# 2. Verificar si "V005" ya votó
v005_voto = "V005" in votantes_registrados

# 3. Calcular total de votantes únicos
total_votantes = len(votantes_registrados)

# 4. Eliminar a "V003" (si existe)
if "V003" in votantes_registrados:
    votantes_registrados.remove("V003")

# 5. Verificar si el sistema está vacío
sistema_vacio = len(votantes_registrados) == 0

print("Sistema de Votación")
print("=" * 30)
print("\\nVotantes registrados:", sorted(votantes_registrados))
print("Total votantes únicos:", total_votantes)
print("¿V005 ya votó?:", v005_voto)
print("¿Sistema vacío?:", sistema_vacio)

# Información adicional
print("\\n📊 INFORMACIÓN ADICIONAL:")
print("IDs originales:", ids_votantes)
print("Duplicados eliminados:", len(ids_votantes) - total_votantes)
print("Votantes después de eliminar V003:", sorted(votantes_registrados))`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Qué hace Python automáticamente con los elementos duplicados en un conjunto?",
    opciones: [
      { texto: "Los convierte en None", correcta: false },
      { texto: "Los elimina automáticamente", correcta: true },
      { texto: "Los marca como duplicados", correcta: false },
      { texto: "Genera un error", correcta: false }
    ]
  },
  {
    texto: "¿Cómo verificas si un elemento está en un conjunto llamado 'mi_set'?",
    opciones: [
      { texto: "mi_set.find(elemento)", correcta: false },
      { texto: "elemento in mi_set", correcta: true },
      { texto: "mi_set[elemento]", correcta: false },
      { texto: "mi_set.contains(elemento)", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es la principal ventaja de usar conjuntos sobre listas para verificar membresía?",
    opciones: [
      { texto: "Los conjuntos mantienen orden", correcta: false },
      { texto: "Los conjuntos permiten duplicados", correcta: false },
      { texto: "Los conjuntos tienen búsqueda más rápida (O(1))", correcta: true },
      { texto: "Los conjuntos usan menos memoria", correcta: false }
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
  if (respuestasSeleccionadas.value.includes(null)) {
    alert('Por favor responde todas las preguntas')
    return
  }

  let correctas = 0
  preguntas.forEach((pregunta, index) => {
    const respuestaIndex = respuestasSeleccionadas.value[index]
    if (respuestaIndex !== null && pregunta.opciones[respuestaIndex].correcta) {
      correctas++
    }
  })

  respuestasCorrectas.value = correctas
  mostrarResultados.value = true
  
  if (correctas === preguntas.length) {
    resultadoMensaje.value = '¡Excelente! Dominas los conjuntos en Python'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= 2) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa las características de conjuntos'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando con los ejemplos de conjuntos'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}
</script>