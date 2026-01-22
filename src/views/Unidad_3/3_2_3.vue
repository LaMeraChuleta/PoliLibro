<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="3" titulo="3.2.3 Matriz de adyacencia">
      <p class="text-gray-600 mt-2">Representación matricial de relaciones entre vértices en grafos.</p>
    </HeaderTitle>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Representación Matricial de Grafos</h2>
      <p class="text-gray-700 leading-relaxed">
        La matriz de adyacencia es una representación cuadrada de tamaño V×V (donde V es el número de vértices)
        que utiliza una matriz bidimensional para representar las conexiones de un grafo. Cada celda [i][j]
        indica si existe una arista entre el vértice i y el vértice j. Esta representación es especialmente
        útil para grafos densos (con muchas aristas) y para operaciones que requieren verificación rápida
        de conexiones.
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
          <p class="text-gray-600 text-sm">Matriz cuadrada donde A[i][j] = 1 si hay arista de i a j, 0 en caso
            contrario.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Red de vuelos: ciudades como vértices, vuelos directos como aristas
            ponderadas.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">No es eficiente para grafos dispersos (pocas aristas) por el alto uso de
            memoria.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">La potencia n-ésima de la matriz muestra el número de caminos de longitud n
            entre vértices.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Matriz de adyacencia básica (grafo no dirigido)</h3>
        <p class="text-gray-600 mb-4">Creación y visualización de una matriz de adyacencia para un grafo simple.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Matriz para grafo dirigido ponderado</h3>
        <p class="text-gray-600 mb-4">Representación de grafos con pesos en las aristas usando matrices.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Conversión lista ↔ matriz de adyacencia</h3>
        <p class="text-gray-600 mb-4">Funciones para convertir entre diferentes representaciones de grafos.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa la función <code>matriz_a_lista</code> que convierta una matriz de
          adyacencia
          a una lista de adyacencia. Luego, crea una función que calcule el grado de cada vértice a partir de la matriz.
          Usa el grafo no dirigido del ejemplo 1.
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz matriz de adyacencia"></QuizQuestions>


    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/3.2.2" siguiente="/Unidad/3.3.1" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Grafos" mostrarAnterior="true" mostrarSiguiente="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Matriz básica para grafo no dirigido
const ejemplo1Code = `# Creación de matriz de adyacencia para grafo no dirigido

# Grafo no dirigido: 4 vértices (0, 1, 2, 3)
# Aristas: 0-1, 0-2, 1-2, 2-3
num_vertices = 4

# Inicializar matriz de ceros
matriz_adyacencia = [[0] * num_vertices for _ in range(num_vertices)]

# Definir aristas (para grafo no dirigido, es simétrica)
aristas = [(0, 1), (0, 2), (1, 2), (2, 3)]

# Llenar la matriz
for u, v in aristas:
    matriz_adyacencia[u][v] = 1
    matriz_adyacencia[v][u] = 1  # Grafo no dirigido -> simétrico

print("Matriz de adyacencia (grafo no dirigido):")
print("  0 1 2 3")
print("  -------")
for i in range(num_vertices):
    print(f"{i}| {' '.join(str(x) for x in matriz_adyacencia[i])}")

# Información adicional
print("\\n--- Interpretación ---")
print("1 en posición [i][j] = existe arista entre i y j")
print("0 en posición [i][j] = no existe arista")

# Verificar conexión específica
print("\\n¿Existe arista entre 0 y 3?", "Sí" if matriz_adyacencia[0][3] == 1 else "No")
print("¿Existe arista entre 1 y 2?", "Sí" if matriz_adyacencia[1][2] == 1 else "No")`

// Ejemplo 2: Matriz para grafo dirigido ponderado
const ejemplo2Code = `# Matriz de adyacencia para grafo dirigido ponderado

# Grafo dirigido ponderado: sistema de vuelos entre ciudades
# Vértices: 0=Madrid, 1=Barcelona, 2=Valencia, 3=Sevilla
# Peso = distancia en km (0 significa no hay vuelo directo)
num_ciudades = 4

# Inicializar matriz con 0 (no hay conexión)
matriz_vuelos = [[0] * num_ciudades for _ in range(num_ciudades)]

# Definir vuelos directos con distancias
# (origen, destino, distancia_km)
vuelos = [
    (0, 1, 506),   # Madrid -> Barcelona
    (0, 2, 355),   # Madrid -> Valencia
    (0, 3, 389),   # Madrid -> Sevilla
    (1, 0, 506),   # Barcelona -> Madrid
    (1, 2, 349),   # Barcelona -> Valencia
    (2, 0, 355),   # Valencia -> Madrid
    (2, 3, 651),   # Valencia -> Sevilla
    (3, 0, 389),   # Sevilla -> Madrid
]

# Llenar la matriz ponderada
for origen, destino, distancia in vuelos:
    matriz_vuelos[origen][destino] = distancia

print("Matriz de adyacencia ponderada (distancias en km):")
print("    M   B   V   S")
print("    ------------")
ciudades = ['M', 'B', 'V', 'S']
for i in range(num_ciudades):
    fila = [f"{matriz_vuelos[i][j]:3}" for j in range(num_ciudades)]
    print(f"{ciudades[i]}| {' '.join(fila)}")

print("\\n--- Análisis ---")
print("0 = no hay vuelo directo")
print("Número > 0 = distancia en km")

# Consultas específicas
print("\\nConsulta de vuelos:")
print(f"Madrid -> Barcelona: {matriz_vuelos[0][1]} km")
print(f"Barcelona -> Sevilla: {matriz_vuelos[1][3]} km (no directo)")
print(f"Valencia -> Sevilla: {matriz_vuelos[2][3]} km")

# Características del grafo dirigido
print("\\n¿El grafo es simétrico?", matriz_vuelos == [list(x) for x in zip(*matriz_vuelos)])`

// Ejemplo 3: Conversión entre representaciones
const ejemplo3Code = `# Conversión entre lista de adyacencia y matriz de adyacencia

def lista_a_matriz(lista_ady, num_vertices):
    """
    Convierte lista de adyacencia a matriz de adyacencia.
    """
    matriz = [[0] * num_vertices for _ in range(num_vertices)]
    
    for vertice, vecinos in enumerate(lista_ady):
        for vecino in vecinos:
            matriz[vertice][vecino] = 1
    
    return matriz

def matriz_a_lista(matriz):
    """
    Convierte matriz de adyacencia a lista de adyacencia.
    """
    num_vertices = len(matriz)
    lista = [[] for _ in range(num_vertices)]
    
    for i in range(num_vertices):
        for j in range(num_vertices):
            if matriz[i][j] == 1:
                lista[i].append(j)
    
    return lista

def imprimir_matriz(matriz, etiquetas=None):
    """
    Imprime una matriz de adyacencia de forma legible.
    """
    n = len(matriz)
    if etiquetas is None:
        etiquetas = [str(i) for i in range(n)]
    
    print("   " + " ".join(etiquetas))
    print("   " + "-" * (2 * n - 1))
    
    for i in range(n):
        fila = [str(matriz[i][j]) for j in range(n)]
        print(f"{etiquetas[i]}| " + " ".join(fila))

# Ejemplo: grafo dirigido simple
print("=== LISTA DE ADYACENCIA ORIGINAL ===")
lista_original = [
    [1, 2],    # 0 -> 1, 2
    [2, 3],    # 1 -> 2, 3
    [0],       # 2 -> 0
    [1]        # 3 -> 1
]

print("Vértice: Vecinos")
for i, vecinos in enumerate(lista_original):
    print(f"{i}: {vecinos}")

print("\\n=== CONVERSIÓN A MATRIZ ===")
matriz_resultante = lista_a_matriz(lista_original, 4)
imprimir_matriz(matriz_resultante)

print("\\n=== CONVERSIÓN DE VUELTA A LISTA ===")
lista_reconstruida = matriz_a_lista(matriz_resultante)
print("Vértice: Vecinos")
for i, vecinos in enumerate(lista_reconstruida):
    print(f"{i}: {vecinos}")

# Verificación
print("\\n¿Las listas son iguales?", lista_original == lista_reconstruida)`

// Ejercicio práctico - Solución
const solucionCode = `# Solución del ejercicio: conversión y cálculo de grados

def matriz_a_lista_adyacencia(matriz):
    """
    Convierte matriz de adyacencia a lista de adyacencia.
    Versión mejorada que funciona con grafos no dirigidos.
    """
    n = len(matriz)
    lista = [[] for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            # Solo considerar conexiones existentes
            if matriz[i][j] != 0:
                lista[i].append(j)
    
    return lista

def calcular_grados_desde_matriz(matriz):
    """
    Calcula el grado de cada vértice a partir de una matriz de adyacencia.
    Para grafos no dirigidos.
    """
    n = len(matriz)
    grados = [0] * n
    
    for i in range(n):
        for j in range(n):
            if matriz[i][j] == 1:
                grados[i] += 1
    
    return grados

def calcular_grados_entrada_salida(matriz):
    """
    Calcula grado de entrada y salida para grafos dirigidos.
    """
    n = len(matriz)
    entrada = [0] * n
    salida = [0] * n
    
    for i in range(n):
        for j in range(n):
            if matriz[i][j] == 1:
                salida[i] += 1
                entrada[j] += 1
    
    return entrada, salida

# Grafo no dirigido del ejemplo 1
matriz_ejemplo = [
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0]
]

print("=== MATRIZ DE ADYACENCIA ORIGINAL ===")
for fila in matriz_ejemplo:
    print(fila)

print("\\n=== CONVERSIÓN A LISTA DE ADYACENCIA ===")
lista_resultante = matriz_a_lista_adyacencia(matriz_ejemplo)
for i, vecinos in enumerate(lista_resultante):
    print(f"Vértice {i}: {vecinos}")

print("\\n=== CÁLCULO DE GRADOS (grafo no dirigido) ===")
grados = calcular_grados_desde_matriz(matriz_ejemplo)
for i, grado in enumerate(grados):
    print(f"Vértice {i}: grado = {grado}")

print("\\n=== VERIFICACIÓN CON MATRIZ SIMULADA DIRIGIDA ===")
# Matriz dirigida para comparación
matriz_dirigida = [
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
]

print("Matriz dirigida:")
for fila in matriz_dirigida:
    print(fila)

entrada, salida = calcular_grados_entrada_salida(matriz_dirigida)
print("\\nGrados de entrada y salida:")
for i in range(len(entrada)):
    print(f"Vértice {i}: entrada={entrada[i]}, salida={salida[i]}")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Qué es una matriz de adyacencia?",
    opciones: [
      { texto: "Una lista de vértices", correcta: false },
      { texto: "Una matriz que indica conexiones entre vértices", correcta: true },
      { texto: "Un conjunto de aristas", correcta: false },
      { texto: "Un árbol ordenado", correcta: false }
    ]
  },
  {
    texto: "¿Qué valor suele representar una conexión en la matriz de adyacencia?",
    opciones: [
      { texto: "0", correcta: false },
      { texto: "1", correcta: true },
      { texto: "−1", correcta: false },
      { texto: "Cualquier letra", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es una desventaja de la matriz de adyacencia?",
    opciones: [
      { texto: "Uso elevado de memoria", correcta: true },
      { texto: "Difícil de recorrer", correcta: false },
      { texto: "No representa grafos", correcta: false },
      { texto: "No permite grafos dirigidos", correcta: false }
    ]
  }
]


</script>