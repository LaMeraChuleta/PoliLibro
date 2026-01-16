<template>
  <div class="container mx-auto px-4 py-6">    
    <HeaderTitle numero="1.2" titulo="1.1.2 Descripción y características de los contenedores">
      <!-- Contenido teórico -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los <strong class="text-blue-600">contenedores</strong> son estructuras de datos que permiten almacenar
          múltiples elementos en una sola variable. Python ofrece cuatro contenedores principales, cada uno con
          características únicas que determinan cuándo usarlos.
        </p>
        <p class="text-gray-700">
          Comprender las diferencias entre <strong>mutabilidad</strong>, <strong>orden</strong> y <strong>unicidad de
            elementos</strong> es clave para seleccionar el contenedor adecuado para cada situación.
        </p>
      </div>
    </HeaderTitle>

    <!-- Tabla comparativa -->
    <div class="mb-8 overflow-x-auto">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Características de contenedores Python</h3>
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Contenedor</th>
            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Ordenado</th>
            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Mutable</th>
            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Elementos únicos</th>
            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Sintaxis</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-blue-50">
            <td class="py-3 px-4 border-b font-medium">Lista</td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span>
            </td>
            <td class="py-3 px-4 border-b font-mono text-blue-600">[ ]</td>
          </tr>
          <tr class="hover:bg-green-50">
            <td class="py-3 px-4 border-b font-medium">Tupla</td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span>
            </td>
            <td class="py-3 px-4 border-b font-mono text-green-600">( )</td>
          </tr>
          <tr class="hover:bg-purple-50">
            <td class="py-3 px-4 border-b font-medium">Conjunto</td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4 border-b">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4 border-b font-mono text-purple-600">{ }</td>
          </tr>
          <tr class="hover:bg-yellow-50">
            <td class="py-3 px-4 font-medium">Diccionario</td>
            <td class="py-3 px-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí*</span>
            </td>
            <td class="py-3 px-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span>
            </td>
            <td class="py-3 px-4">
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Claves únicas</span>
            </td>
            <td class="py-3 px-4 font-mono text-yellow-600">{ }</td>
          </tr>
        </tbody>
      </table>
      <p class="text-sm text-gray-500 mt-2">*Los diccionarios mantienen orden de inserción desde Python 3.7</p>
    </div>

    <!-- Ejemplo 1: Sintaxis básica -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Creación de contenedores</h3>
      <PythonRunner :code="ejemplo1Code" title="creacion_contenedores.py" :showLineNumbers="true"
        initialHeight="180px" />
    </div>

    <!-- Ejemplo 2: Características en práctica -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Mutabilidad y orden</h3>
      <PythonRunner :code="ejemplo2Code" title="caracteristicas.py" :showLineNumbers="true" initialHeight="220px" />
    </div>

    <!-- Ejemplo 3: Sistema de gestión de estudiantes -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de gestión de estudiantes</h3>
      <p class="text-gray-700 mb-4">
        En un sistema educativo, diferentes contenedores tienen diferentes usos:
      </p>
      <PythonRunner :code="ejemplo3Code" title="gestion_estudiantes.py" :showLineNumbers="true" initialHeight="300px" />
    </div>

    <!-- Ejercicio práctico -->
    <div class="mb-8 p-6 bg-blue-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico</h3>
      <p class="text-gray-700 mb-4">
        <strong>Situación:</strong> Crea un sistema para gestionar una biblioteca usando los 4 tipos de contenedores.
      </p>

      <PythonRunner :code="ejercicioCode" title="biblioteca.py" :showLineNumbers="true" initialHeight="250px"
        :showReset="true" :showSolution="true" :solutionCode="solucionCode" />
    </div>

    <!-- Quiz funcional -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción y características de los contenedores"></QuizQuestions>
    
  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Códigos de ejemplo
const ejemplo1Code = `# Diferentes formas de crear contenedores

# 1. LISTA - corchetes
frutas = ["manzana", "banana", "naranja"]
print("1. Lista de frutas:", frutas)

# 2. TUPLA - paréntesis
coordenadas = (10.5, 20.3)
print("\\n2. Tupla de coordenadas:", coordenadas)

# 3. CONJUNTO - llaves
colores = {"rojo", "verde", "azul"}
print("\\n3. Conjunto de colores:", colores)

# 4. DICCIONARIO - llaves con clave:valor
estudiante = {"nombre": "Ana", "edad": 20, "carrera": "Ingeniería"}
print("\\n4. Diccionario de estudiante:", estudiante)`

const ejemplo2Code = `# Demostración de mutabilidad y orden

# LISTA: mutable y ordenada
lista = [1, 2, 3]
lista[0] = 100  # Se puede modificar
lista.append(4)  # Se puede agregar
print("Lista modificada:", lista)
print("Orden mantenido:", lista)

# TUPLA: INMUTABLE pero ordenada
tupla = (1, 2, 3)
# tupla[0] = 100  # ¡ERROR! No se puede modificar
print("\\nTupla (inmutable):", tupla)

# CONJUNTO: mutable pero NO ordenado
conjunto = {3, 1, 2}
conjunto.add(4)  # Se puede agregar
print("\\nConjunto (sin orden garantizado):", conjunto)

print("\\nResumen:")
print("- Listas: ✓ mutable, ✓ ordenada")
print("- Tuplas: ✗ mutable, ✓ ordenada")  
print("- Conjuntos: ✓ mutable, ✗ ordenada")`

const ejemplo3Code = `# Sistema de gestión de estudiantes

# 1. LISTA: Estudiantes en un curso (pueden repetirse)
estudiantes_curso_a = ["Ana", "Luis", "Carlos", "Ana"]
print("1. Lista - Estudiantes Curso A:", estudiantes_curso_a)
print("   Total estudiantes:", len(estudiantes_curso_a))

# 2. CONJUNTO: Estudiantes únicos en toda la escuela
estudiantes_unicos = {"Ana", "Luis", "Carlos", "María", "Ana"}  # Ana aparece 2 veces
print("\\n2. Conjunto - Estudiantes únicos:", estudiantes_unicos)
print("   Estudiantes diferentes:", len(estudiantes_unicos))

# 3. DICCIONARIO: Calificaciones por estudiante
calificaciones = {
    "Ana": 85,
    "Luis": 92,
    "Carlos": 78,
    "María": 95
}
print("\\n3. Diccionario - Calificaciones:")
for estudiante, nota in calificaciones.items():
    print(f"   {estudiante}: {nota}")

# 4. TUPLA: Información fija del curso
info_curso = ("Introducción a la Programación", "CS101", 3, "Dra. García")
print("\\n4. Tupla - Información del curso:")
print(f"   {info_curso[0]} ({info_curso[1]}) - {info_curso[2]} créditos")`

const ejercicioCode = `# EJERCICIO: Sistema de Biblioteca

# 1. Crea una LISTA llamada 'libros_disponibles' con:
#    - "Python Básico" (aparece 2 veces)
#    - "Algoritmos"
#    - "Estructuras de Datos"
#    - "Python Básico"

# 2. Crea un CONJUNTO llamado 'categorias' con:
#    - "Programación"
#    - "Matemáticas"
#    - "Programación" (duplicado)

# 3. Crea un DICCIONARIO llamado 'prestamos' con:
#    - "ana123": "Python Básico"
#    - "luis456": "Algoritmos"

# 4. Crea una TUPLA llamada 'info_biblioteca' con:
#    - Nombre: "Biblioteca Central"
#    - Horas semanales: 40
#    - Abierta: True

print("Libros disponibles:", libros_disponibles)
print("Categorías únicas:", categorias)
print("Préstamos actuales:", prestamos)
print("Información biblioteca:", info_biblioteca)`

const solucionCode = `# SOLUCIÓN: Sistema de Biblioteca

# 1. LISTA - permite duplicados
libros_disponibles = ["Python Básico", "Algoritmos", "Estructuras de Datos", "Python Básico"]

# 2. CONJUNTO - elimina duplicados automáticamente
categorias = {"Programación", "Matemáticas", "Programación"}

# 3. DICCIONARIO - pares clave-valor únicos
prestamos = {
    "ana123": "Python Básico",
    "luis456": "Algoritmos"
}

# 4. TUPLA - información inmutable
info_biblioteca = ("Biblioteca Central", 40, True)

print("Libros disponibles:", libros_disponibles)
print("Categorías únicas:", categorias)
print("Préstamos actuales:", prestamos)
print("Información biblioteca:", info_biblioteca)

# Verificaciones adicionales
print("\\nVerificaciones:")
print("¿'Python Básico' aparece duplicado?", libros_disponibles.count("Python Básico") > 1)
print("Total categorías únicas:", len(categorias))
print("¿La biblioteca está abierta?", info_biblioteca[2])`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Qué contenedor es ideal para almacenar elementos únicos sin importar el orden?",
    opciones: [
      { texto: "Lista", correcta: false },
      { texto: "Conjunto", correcta: true },
      { texto: "Tupla", correcta: false },
      { texto: "Diccionario", correcta: false }
    ]
  },
  {
    texto: "¿Qué contenedor NO permite modificar sus elementos después de crearlo?",
    opciones: [
      { texto: "Lista", correcta: false },
      { texto: "Conjunto", correcta: false },
      { texto: "Tupla", correcta: true },
      { texto: "Diccionario", correcta: false }
    ]
  },
  {
    texto: "Si necesitas almacenar calificaciones de estudiantes, ¿qué contenedor usarías?",
    opciones: [
      { texto: "Lista - para mantener orden de ingreso", correcta: false },
      { texto: "Conjunto - para eliminar duplicados", correcta: false },
      { texto: "Diccionario - para acceder por nombre del estudiante", correcta: true },
      { texto: "Tupla - porque los datos no cambiarán", correcta: false }
    ]
  }
]


</script>