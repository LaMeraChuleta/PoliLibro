<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="3" titulo="3.2.1 Descripción">
      <p class="text-gray-600 mt-2">Estructuras de datos no lineales para modelar relaciones complejas.</p>
    </HeaderTitle>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">¿Qué es un grafo?</h2>
      <p class="text-gray-700 leading-relaxed">
        Un grafo es una estructura de datos compuesta por un conjunto de vértices (nodos) y aristas (conexiones) que
        relacionan estos vértices.
        Se utilizan para modelar problemas del mundo real como redes sociales (personas y amistades), sistemas de
        transporte (ciudades y carreteras)
        o conexiones de internet (dispositivos y enlaces). La teoría de grafos es fundamental en ciencias de la
        computación.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Definición formal</h3>
          </div>
          <p class="text-gray-600 text-sm">Grafo G = (V, E) donde V es conjunto de vértices y E es conjunto de pares de
            vértices (aristas).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Red social: usuarios como vértices, relaciones de amistad como aristas no
            dirigidas.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">No son árboles: los grafos pueden tener ciclos y no requieren nodo raíz.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">El problema de los siete puentes de Königsberg (1736) inició la teoría de
            grafos.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Representación con lista de adyacencia</h3>
        <p class="text-gray-600 mb-4">La forma más común de representar grafos en Python usando diccionarios.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Búsqueda en profundidad (DFS)</h3>
        <p class="text-gray-600 mb-4">Algoritmo fundamental para recorrer grafos explorando lo más profundo posible.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Detección de ciclos en grafo no dirigido</h3>
        <p class="text-gray-600 mb-4">Uso de DFS para identificar si existe al menos un ciclo en el grafo.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa la función <code>hay_camino</code> que determine si existe un camino
          entre dos nodos en un grafo no dirigido.
          Usa el grafo del ejemplo 1 y prueba con los nodos 'A' y 'D'.
        </p>
        <div class="flex gap-4">
          <button @click="mostrarSolucion = !mostrarSolucion"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {{ mostrarSolucion ? 'Ocultar solución' : 'Mostrar solución' }}
          </button>
          <a href="#" class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Ver pista
          </a>
        </div>

        <!-- Solución oculta -->
        <div v-if="mostrarSolucion" class="mt-6 p-5 bg-white border border-green-200 rounded-lg">
          <h3 class="font-bold text-green-800 mb-3">Solución:</h3>
          <PythonRunner :code="solucionCode" />
        </div>
      </div>
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/3.1.2" siguiente="/Unidad/3.2.2" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Grafos" mostrarAnterior="true" mostrarSiguiente="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Representación básica
const ejemplo1Code = `# Representación de grafo no dirigido con lista de adyacencia
grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("Grafo no dirigido:")
for vertice, vecinos in grafo.items():
    print(f"{vertice}: {vecinos}")

# Información básica del grafo
print(f"\\nNúmero de vértices: {len(grafo)}")
aristas = sum(len(vecinos) for vecinos in grafo.values()) // 2
print(f"Número de aristas: {aristas}")
print(f"Vecinos del vértice B: {grafo['B']}")`

// Ejemplo 2: Búsqueda en profundidad (DFS)
const ejemplo2Code = `def dfs(grafo, inicio, visitados=None):
    """
    Recorrido en profundidad de un grafo.
    Retorna lista de vértices en orden de visita.
    """
    if visitados is None:
        visitados = set()
    
    recorrido = []
    pila = [inicio]
    
    while pila:
        vertice = pila.pop()
        if vertice not in visitados:
            visitados.add(vertice)
            recorrido.append(vertice)
            # Agregar vecinos no visitados a la pila
            for vecino in grafo.get(vertice, []):
                if vecino not in visitados:
                    pila.append(vecino)
    
    return recorrido

# Grafo de ejemplo
grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("DFS desde el vértice A:")
resultado = dfs(grafo, 'A')
print(f"Orden de visita: {resultado}")

print("\\nDFS desde el vértice B:")
resultado = dfs(grafo, 'B')
print(f"Orden de visita: {resultado}")`

// Ejemplo 3: Detección de ciclos
const ejemplo3Code = `def tiene_ciclo(grafo):
    """
    Detecta si un grafo no dirigido tiene al menos un ciclo.
    Retorna True si encuentra ciclo, False en caso contrario.
    """
    visitados = set()
    
    def dfs_ciclo(vertice, padre):
        visitados.add(vertice)
        
        for vecino in grafo[vertice]:
            if vecino not in visitados:
                if dfs_ciclo(vecino, vertice):
                    return True
            elif vecino != padre:
                # Si el vecino ya fue visitado y no es el padre, hay ciclo
                return True
        return False
    
    # Probar desde cada vértice no visitado (para grafos no conexos)
    for vertice in grafo:
        if vertice not in visitados:
            if dfs_ciclo(vertice, None):
                return True
    
    return False

# Grafo sin ciclo (árbol)
grafo1 = {
    'A': ['B', 'C'],
    'B': ['A'],
    'C': ['A']
}

# Grafo con ciclo
grafo2 = {
    'A': ['B', 'C'],
    'B': ['A', 'C'],
    'C': ['A', 'B']
}

print("Grafo 1 (sin ciclo):", grafo1)
print("Tiene ciclo?", tiene_ciclo(grafo1))

print("\\nGrafo 2 (con ciclo):", grafo2)
print("Tiene ciclo?", tiene_ciclo(grafo2))`

// Ejercicio práctico - Solución
const solucionCode = `def hay_camino(grafo, inicio, fin, visitados=None):
    """
    Determina si existe un camino entre inicio y fin en un grafo no dirigido.
    """
    if inicio == fin:
        return True
    
    if visitados is None:
        visitados = set()
    
    visitados.add(inicio)
    
    for vecino in grafo[inicio]:
        if vecino not in visitados:
            if hay_camino(grafo, vecino, fin, visitados):
                return True
    
    return False

# Grafo del ejemplo 1
grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Pruebas
print("Existe camino entre A y D?")
print(hay_camino(grafo, 'A', 'D'))  # True

print("\\nExiste camino entre C y E?")
print(hay_camino(grafo, 'C', 'E'))  # True

print("\\nExiste camino entre A y Z (nodo inexistente)?")
print(hay_camino(grafo, 'A', 'Z'))  # False`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es la definición formal de un grafo simple?",
    opciones: [
      { letra: "A", texto: "Conjunto de nodos sin conexiones", correcta: false },
      { letra: "B", texto: "Par ordenado G = (V, E) donde V es conjunto de vértices y E conjunto de aristas", correcta: true },
      { letra: "C", texto: "Árbol binario con enlaces adicionales", correcta: false },
      { letra: "D", texto: "Matriz de adyacencia cuadrada", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Un grafo se define formalmente como G = (V, E) donde V son vértices y E son pares de vértices."
  },
  {
    texto: "¿Cuál es la complejidad temporal de DFS en un grafo representado con lista de adyacencia?",
    opciones: [
      { letra: "A", texto: "O(V²)", correcta: false },
      { letra: "B", texto: "O(V × E)", correcta: false },
      { letra: "C", texto: "O(V + E)", correcta: true },
      { letra: "D", texto: "O(log V)", correcta: false }
    ],
    respuestaCorrecta: "C",
    explicacion: "DFS visita cada vértice y arista una vez, por lo tanto O(V + E)."
  },
  {
    texto: "En un grafo no dirigido, ¿cómo se detecta un ciclo durante un recorrido DFS?",
    opciones: [
      { letra: "A", texto: "Cuando se visita un vértice que ya está en la pila", correcta: false },
      { letra: "B", texto: "Cuando se encuentra un vértice visitado que no es el padre", correcta: true },
      { letra: "C", texto: "Cuando el grafo tiene más aristas que vértices", correcta: false },
      { letra: "D", texto: "Cuando todos los vértices tienen grado par", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "En grafo no dirigido, un ciclo existe si se encuentra un vértice visitado que no es el padre del actual."
  }
]

</script>