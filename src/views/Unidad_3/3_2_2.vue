<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="3" titulo="3.2.2 Grafos dirigidos y no dirigidos">
      <p class="text-gray-600 mt-2">Diferencias fundamentales en la dirección de las relaciones entre vértices.</p>
    </HeaderTitle>


    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Direccionalidad en Grafos</h2>
      <p class="text-gray-700 leading-relaxed">
        La principal clasificación de grafos se basa en la dirección de sus aristas. En un <strong>grafo no dirigido</strong>, 
        las aristas representan relaciones simétricas (ej: amistad en Facebook). En un <strong>grafo dirigido</strong> (digrafo), 
        las aristas tienen dirección y representan relaciones asimétricas (ej: seguidores en Twitter). Esta diferencia afecta 
        profundamente los algoritmos y análisis que podemos realizar sobre el grafo.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Aristas dirigidas</h3>
          </div>
          <p class="text-gray-600 text-sm">Pares ordenados (u, v) donde la dirección va de u a v. Representan relaciones unidireccionales.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Sistema de calles: calles de doble sentido (no dirigido) vs calles de un solo sentido (dirigido).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">El grado en grafos dirigidos se divide en grado de entrada (in-degree) y salida (out-degree).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">Los grafos dirigidos pueden representar dependencias entre tareas (orden de ejecución).</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Representación de ambos tipos</h3>
        <p class="text-gray-600 mb-4">Comparación de listas de adyacencia para grafos dirigidos y no dirigidos.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Cálculo de grados en grafo dirigido</h3>
        <p class="text-gray-600 mb-4">Cálculo del grado de entrada y salida para cada vértice en un digrafo.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Búsqueda en amplitud (BFS) en grafo dirigido</h3>
        <p class="text-gray-600 mb-4">Algoritmo BFS adaptado para grafos dirigidos, mostrando niveles de distancia.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Dado un grafo dirigido que representa un sistema de seguimiento en redes sociales, 
          implementa la función <code>obtener_influencers</code> que retorne los usuarios con al menos 3 seguidores 
          (grado de entrada ≥ 3). Usa el grafo del ejemplo 2.
        </p>
        <div class="flex gap-4">
          <button
            @click="mostrarSolucion = !mostrarSolucion"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz grafos dirigidos y no dirigidos"></QuizQuestions>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'


// Ejemplo 1: Comparación de representaciones
const ejemplo1Code = `# Comparación entre grafo no dirigido y dirigido

# Grafo NO DIRIGIDO: amistades en Facebook (relación mutua)
grafo_no_dirigido = {
    'Juan': ['Maria', 'Pedro'],
    'Maria': ['Juan', 'Pedro', 'Ana'],
    'Pedro': ['Juan', 'Maria', 'Ana'],
    'Ana': ['Maria', 'Pedro']
}

# Grafo DIRIGIDO: seguidores en Twitter (relación unidireccional)
grafo_dirigido = {
    'Juan': ['Maria'],          # Juan sigue a Maria
    'Maria': ['Pedro', 'Ana'],  # Maria sigue a Pedro y Ana
    'Pedro': ['Juan', 'Ana'],   # Pedro sigue a Juan y Ana
    'Ana': []                   # Ana no sigue a nadie
}

print("=== GRAFO NO DIRIGIDO (amistades) ===")
for usuario, amigos in grafo_no_dirigido.items():
    print(f"{usuario} es amigo de: {amigos}")

print("\\n=== GRAFO DIRIGIDO (seguidores) ===")
for usuario, seguidos in grafo_dirigido.items():
    print(f"{usuario} sigue a: {seguidos}")

print("\\n--- Observaciones ---")
print("En grafo no dirigido: Si Juan es amigo de Maria, Maria también es amiga de Juan")
print("En grafo dirigido: Juan sigue a Maria, pero Maria no necesariamente sigue a Juan")`

// Ejemplo 2: Cálculo de grados en grafo dirigido
const ejemplo2Code = `def calcular_grados(grafo_dirigido):
    """
    Calcula el grado de entrada (in-degree) y salida (out-degree)
    para cada vértice en un grafo dirigido.
    """
    # Inicializar diccionarios
    grado_entrada = {vertice: 0 for vertice in grafo_dirigido}
    grado_salida = {vertice: 0 for vertice in grafo_dirigido}
    
    # Calcular grados
    for vertice, vecinos in grafo_dirigido.items():
        grado_salida[vertice] = len(vecinos)
        for vecino in vecinos:
            if vecino in grado_entrada:
                grado_entrada[vecino] += 1
            else:
                grado_entrada[vecino] = 1
    
    return grado_entrada, grado_salida

# Grafo dirigido de ejemplo: sistema de recomendaciones
# A -> B significa "A recomienda a B"
grafo_recomendaciones = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Charlie', 'David'],
    'Charlie': ['David'],
    'David': ['Alice'],
    'Eve': ['Alice', 'Bob']
}

print("Grafo de recomendaciones:")
for recomienda, recomendados in grafo_recomendaciones.items():
    print(f"  {recomienda} recomienda a: {recomendados}")

grado_entrada, grado_salida = calcular_grados(grafo_recomendaciones)

print("\\n=== GRADOS DE LOS VÉRTICES ===")
for vertice in sorted(grado_entrada.keys()):
    print(f"{vertice}:")
    print(f"  Grado de entrada (quién te recomienda): {grado_entrada.get(vertice, 0)}")
    print(f"  Grado de salida (a quién recomiendas): {grado_salida.get(vertice, 0)}")`

// Ejemplo 3: BFS en grafo dirigido
const ejemplo3Code = `from collections import deque

def bfs_dirigido(grafo, inicio):
    """
    Búsqueda en amplitud (BFS) para grafos dirigidos.
    Retorna el orden de visita y las distancias desde el vértice inicial.
    """
    visitados = set()
    distancia = {inicio: 0}
    orden_visita = []
    
    cola = deque([inicio])
    visitados.add(inicio)
    
    while cola:
        vertice = cola.popleft()
        orden_visita.append(vertice)
        
        for vecino in grafo.get(vertice, []):
            if vecino not in visitados:
                visitados.add(vecino)
                distancia[vecino] = distancia[vertice] + 1
                cola.append(vecino)
    
    return orden_visita, distancia

# Grafo dirigido: dependencias de tareas
# Tarea A -> Tarea B significa "A debe ejecutarse antes que B"
grafo_tareas = {
    'Inicio': ['A', 'B'],
    'A': ['C', 'D'],
    'B': ['D'],
    'C': ['Fin'],
    'D': ['Fin'],
    'Fin': []
}

print("Grafo de dependencias de tareas:")
for tarea, dependientes in grafo_tareas.items():
    print(f"  {tarea} → {dependientes}")

print("\\n=== BFS DESDE 'INICIO' ===")
orden, distancias = bfs_dirigido(grafo_tareas, 'Inicio')
print(f"Orden de visita: {orden}")

print("\\nDistancias desde 'Inicio':")
for tarea, distancia in distancias.items():
    print(f"  {tarea}: {distancia} paso(s)")

print("\\n=== BFS DESDE 'A' ===")
orden, distancias = bfs_dirigido(grafo_tareas, 'A')
print(f"Orden de visita: {orden}")`

// Ejercicio práctico - Solución
const solucionCode = `def obtener_influencers(grafo_dirigido, min_seguidores=3):
    """
    Identifica los usuarios con al menos min_seguidores en un grafo dirigido.
    Retorna lista de tuplas (usuario, num_seguidores)
    """
    # Calcular grado de entrada (seguidores)
    seguidores = {}
    
    for usuario, seguidos in grafo_dirigido.items():
        # Inicializar contador si no existe
        if usuario not in seguidores:
            seguidores[usuario] = 0
        
        # Cada vez que alguien sigue a otro, aumentar su contador
        for seguido in seguidos:
            if seguido in seguidores:
                seguidores[seguido] += 1
            else:
                seguidores[seguido] = 1
    
    # Filtrar por mínimo de seguidores
    influencers = []
    for usuario, num_seguidores in seguidores.items():
        if num_seguidores >= min_seguidores:
            influencers.append((usuario, num_seguidores))
    
    # Ordenar por número de seguidores (descendente)
    influencers.sort(key=lambda x: x[1], reverse=True)
    return influencers

# Grafo de redes sociales (mismo del ejemplo 2)
red_social = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Charlie', 'David'],
    'Charlie': ['David'],
    'David': ['Alice'],
    'Eve': ['Alice', 'Bob', 'Charlie', 'David']
}

print("Red social (quién sigue a quién):")
for usuario, seguidos in red_social.items():
    print(f"  {usuario} sigue a: {seguidos}")

print("\\n=== INFLUENCERS (≥ 3 seguidores) ===")
influencers = obtener_influencers(red_social, 3)
if influencers:
    for usuario, seguidores in influencers:
        print(f"  {usuario}: {seguidores} seguidores")
else:
    print("  No hay usuarios con 3 o más seguidores")

print("\\n=== TODOS LOS USUARIOS ===")
influencers_todos = obtener_influencers(red_social, 0)
for usuario, seguidores in sorted(influencers_todos, key=lambda x: x[1], reverse=True):
    print(f"  {usuario}: {seguidores} seguidores")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es la diferencia principal entre un grafo dirigido y uno no dirigido?",
    opciones: [
      { texto: "El dirigido tiene pesos", correcta: false },
      { texto: "El dirigido tiene aristas con dirección", correcta: true },
      { texto: "El no dirigido no tiene vértices", correcta: false },
      { texto: "El no dirigido es siempre cíclico", correcta: false }
    ]
  },
  {
    texto: "¿Cómo se representa una arista en un grafo no dirigido?",
    opciones: [
      { texto: "Con una flecha", correcta: false },
      { texto: "Como una conexión bidireccional", correcta: true },
      { texto: "Solo de origen a destino", correcta: false },
      { texto: "Con una lista ordenada", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es un ejemplo típico de grafo dirigido?",
    opciones: [
      { texto: "Red social de amigos", correcta: false },
      { texto: "Mapa de carreteras", correcta: false },
      { texto: "Relaciones de seguimiento (follow)", correcta: true },
      { texto: "Red eléctrica", correcta: false }
    ]
  }
]


</script>