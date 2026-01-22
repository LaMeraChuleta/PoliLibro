<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="3" titulo="3.3.1 Búsqueda en anchura">
      <p class="text-gray-600 mt-2">Algoritmo fundamental para explorar grafos nivel por nivel.</p>
    </HeaderTitle>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Exploración por Niveles</h2>
      <p class="text-gray-700 leading-relaxed">
        La Búsqueda en Anchura (Breadth-First Search o BFS) es un algoritmo que explora todos los vértices
        de un grafo en orden creciente de distancia desde un vértice origen. Utiliza una cola (estructura FIFO)
        para garantizar que los vértices se visiten por niveles. Es particularmente útil para encontrar el
        camino más corto en grafos no ponderados y resolver problemas como la distancia mínima entre dos puntos.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Estructura FIFO</h3>
          </div>
          <p class="text-gray-600 text-sm">BFS usa una cola (First-In, First-Out) para procesar vértices, asegurando
            exploración por niveles.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Propagación de noticias en redes sociales: primero los amigos cercanos, luego
            amigos de amigos.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">No es adecuado para grafos muy profundos o memoria limitada por su alta
            demanda de almacenamiento.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">BFS fue formalizado en 1959 por Edward F. Moore para encontrar la ruta más
            corta en un laberinto.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. BFS básico con lista de adyacencia</h3>
        <p class="text-gray-600 mb-4">Implementación fundamental del algoritmo BFS para recorrer un grafo no dirigido.
        </p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. BFS con cálculo de distancias y padres</h3>
        <p class="text-gray-600 mb-4">BFS extendido para calcular distancias mínimas y reconstruir caminos.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. BFS para grafos dirigidos y componentes conexas</h3>
        <p class="text-gray-600 mb-4">Aplicación de BFS en grafos dirigidos y para contar componentes conexas.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa una función <code>camino_mas_corto_bfs</code> que reciba un grafo no
          dirigido,
          un vértice origen y un vértice destino, y retorne el camino más corto entre ellos usando BFS.
          Si no existe camino, debe retornar una lista vacía. Usa el grafo del ejemplo 1 y prueba con los vértices 'A' y
          'F'.
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz búsqueda en anchura (BFS)"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/3.2.3" siguiente="/Unidad/3.3.2" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Grafos" mostrarAnterior="true" mostrarSiguiente="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: BFS básico
const ejemplo1Code = `from collections import deque

def bfs_basico(grafo, inicio):
    """
    Búsqueda en anchura básica para un grafo no dirigido.
    Retorna el orden de visita de los vértices.
    """
    visitados = set()
    cola = deque([inicio])
    visitados.add(inicio)
    recorrido = []
    
    while cola:
        vertice_actual = cola.popleft()
        recorrido.append(vertice_actual)
        
        # Explorar vecinos no visitados
        for vecino in grafo[vertice_actual]:
            if vecino not in visitados:
                visitados.add(vecino)
                cola.append(vecino)
    
    return recorrido

# Grafo no dirigido de ejemplo (red social)
red_social = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B', 'H'],
    'E': ['B', 'I'],
    'F': ['C', 'J'],
    'G': ['C'],
    'H': ['D'],
    'I': ['E'],
    'J': ['F']
}

print("Grafo (red social):")
for persona, amigos in red_social.items():
    print(f"  {persona}: {amigos}")

print("\\n=== BFS DESDE 'A' ===")
recorrido = bfs_basico(red_social, 'A')
print(f"Orden de visita: {recorrido}")

print("\\n=== BFS DESDE 'C' ===")
recorrido = bfs_basico(red_social, 'C')
print(f"Orden de visita: {recorrido}")

print("\\nObservación: Se exploran primero todos los amigos a distancia 1, luego amigos de amigos (distancia 2), etc.")`

// Ejemplo 2: BFS con distancias y padres
const ejemplo2Code = `from collections import deque

def bfs_con_distancias(grafo, inicio):
    """
    BFS que calcula distancias mínimas y padres para cada vértice.
    Retorna diccionarios de distancias y padres.
    """
    distancias = {inicio: 0}
    padres = {inicio: None}
    cola = deque([inicio])
    
    while cola:
        vertice_actual = cola.popleft()
        
        for vecino in grafo[vertice_actual]:
            if vecino not in distancias:
                distancias[vecino] = distancias[vertice_actual] + 1
                padres[vecino] = vertice_actual
                cola.append(vecino)
    
    return distancias, padres

def reconstruir_camino(padres, destino):
    """
    Reconstruye el camino desde el origen hasta el destino.
    """
    if destino not in padres:
        return []  # No hay camino
    
    camino = []
    actual = destino
    
    while actual is not None:
        camino.append(actual)
        actual = padres[actual]
    
    return camino[::-1]  # Invertir para ir de origen a destino

# Grafo de laberinto (cada vértice es una posición)
laberinto = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 6],
    4: [1, 5, 7],
    5: [2, 4, 8],
    6: [3, 7],
    7: [4, 6, 8],
    8: [5, 7]
}

print("Laberinto (posiciones conectadas):")
for pos, vecinos in laberinto.items():
    print(f"  Posición {pos}: conectada a {vecinos}")

print("\\n=== BFS CON DISTANCIAS DESDE POSICIÓN 0 ===")
distancias, padres = bfs_con_distancias(laberinto, 0)

print("\\nDistancias mínimas desde posición 0:")
for vertice, distancia in sorted(distancias.items()):
    print(f"  Posición {vertice}: {distancia} pasos")

print("\\n=== CAMINO MÁS CORTO DE 0 A 8 ===")
camino = reconstruir_camino(padres, 8)
print(f"Camino: {camino}")
print(f"Longitud del camino: {len(camino) - 1} pasos")

print("\\n=== VERIFICACIÓN DE DISTANCIAS ===")
print(f"Distancia de 0 a 4: {distancias[4]}")`

// Ejemplo 3: BFS para grafos dirigidos y componentes
const ejemplo3Code = `from collections import deque

def bfs_dirigido(grafo, inicio):
    """
    BFS para grafos dirigidos.
    """
    visitados = set()
    cola = deque([inicio])
    visitados.add(inicio)
    recorrido = []
    
    while cola:
        vertice = cola.popleft()
        recorrido.append(vertice)
        
        for vecino in grafo.get(vertice, []):
            if vecino not in visitados:
                visitados.add(vecino)
                cola.append(vecino)
    
    return recorrido

def contar_componentes_conexas(grafo):
    """
    Cuenta el número de componentes conexas en un grafo no dirigido usando BFS.
    """
    visitados = set()
    componentes = 0
    
    for vertice in grafo:
        if vertice not in visitados:
            # Iniciar BFS desde este vértice
            cola = deque([vertice])
            visitados.add(vertice)
            componentes += 1
            
            while cola:
                actual = cola.popleft()
                for vecino in grafo[actual]:
                    if vecino not in visitados:
                        visitados.add(vecino)
                        cola.append(vecino)
    
    return componentes

# Grafo dirigido: sistema de páginas web y enlaces
web = {
    'google.com': ['wikipedia.org', 'youtube.com'],
    'wikipedia.org': ['github.com'],
    'youtube.com': ['wikipedia.org', 'twitter.com'],
    'github.com': [],
    'twitter.com': ['github.com'],
    'facebook.com': ['instagram.com'],  # Componente separada
    'instagram.com': ['facebook.com']
}

print("=== BFS EN GRAFO DIRIGIDO (web) ===")
print("\\nBFS desde 'google.com':")
recorrido = bfs_dirigido(web, 'google.com')
print(f"Orden: {recorrido}")

print("\\nBFS desde 'facebook.com':")
recorrido = bfs_dirigido(web, 'facebook.com')
print(f"Orden: {recorrido}")

# Convertir a grafo no dirigido para contar componentes
grafo_no_dirigido = {}
for vertice in web:
    grafo_no_dirigido[vertice] = []
    
for vertice, vecinos in web.items():
    for vecino in vecinos:
        # Agregar conexión en ambos sentidos
        if vecino not in grafo_no_dirigido[vertice]:
            grafo_no_dirigido[vertice].append(vecino)
        if vertice not in grafo_no_dirigido.get(vecino, []):
            if vecino in grafo_no_dirigido:
                grafo_no_dirigido[vecino].append(vertice)
            else:
                grafo_no_dirigido[vecino] = [vertice]

print("\\n=== COMPONENTES CONEXAS ===")
num_componentes = contar_componentes_conexas(grafo_no_dirigido)
print(f"Número de componentes conexas: {num_componentes}")`

// Ejercicio práctico - Solución
const solucionCode = `from collections import deque

def camino_mas_corto_bfs(grafo, origen, destino):
    """
    Encuentra el camino más corto entre origen y destino usando BFS.
    Retorna lista con el camino o lista vacía si no hay camino.
    """
    if origen == destino:
        return [origen]
    
    # Estructuras para BFS
    cola = deque([origen])
    visitados = {origen}
    padres = {origen: None}
    
    while cola:
        vertice_actual = cola.popleft()
        
        # Si llegamos al destino, reconstruir camino
        if vertice_actual == destino:
            camino = []
            actual = destino
            while actual is not None:
                camino.append(actual)
                actual = padres[actual]
            return camino[::-1]  # Invertir para obtener origen -> destino
        
        # Explorar vecinos
        for vecino in grafo.get(vertice_actual, []):
            if vecino not in visitados:
                visitados.add(vecino)
                padres[vecino] = vertice_actual
                cola.append(vecino)
    
    return []  # No se encontró camino

# Grafo de prueba (red social del ejemplo 1)
red_social = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B', 'H'],
    'E': ['B', 'I'],
    'F': ['C', 'J'],
    'G': ['C'],
    'H': ['D'],
    'I': ['E'],
    'J': ['F']
}

print("=== PRUEBAS DEL ALGORITMO ===")

# Caso 1: Camino existente
print("\\n1. Camino de A a F:")
camino = camino_mas_corto_bfs(red_social, 'A', 'F')
if camino:
    print(f"   Camino encontrado: {' -> '.join(camino)}")
    print(f"   Longitud: {len(camino) - 1} conexiones")
else:
    print("   No hay camino")

# Caso 2: Camino más largo
print("\\n2. Camino de A a I:")
camino = camino_mas_corto_bfs(red_social, 'A', 'I')
if camino:
    print(f"   Camino encontrado: {' -> '.join(camino)}")
    print(f"   Longitud: {len(camino) - 1} conexiones")

# Caso 3: Origen igual a destino
print("\\n3. Camino de C a C:")
camino = camino_mas_corto_bfs(red_social, 'C', 'C')
if camino:
    print(f"   Camino encontrado: {' -> '.join(camino)}")

# Caso 4: Vértices no conectados (agregamos un vértice aislado)
red_social['Z'] = []
print("\\n4. Camino de A a Z (vértice aislado):")
camino = camino_mas_corto_bfs(red_social, 'A', 'Z')
if camino:
    print(f"   Camino encontrado: {' -> '.join(camino)}")
else:
    print("   No hay camino (vértice aislado)")

# Función adicional para mostrar todos los caminos más cortos desde un origen
def todos_caminos_cortos(grafo, origen):
    """
    Calcula todos los caminos más cortos desde un vértice origen.
    """
    distancias, padres = {}, {}
    cola = deque([origen])
    distancias[origen] = 0
    padres[origen] = None
    
    while cola:
        actual = cola.popleft()
        for vecino in grafo.get(actual, []):
            if vecino not in distancias:
                distancias[vecino] = distancias[actual] + 1
                padres[vecino] = actual
                cola.append(vecino)
    
    return distancias, padres

print("\\n=== TODOS LOS CAMINOS MÁS CORTOS DESDE 'A' ===")
distancias, padres = todos_caminos_cortos(red_social, 'A')
for vertice in sorted(distancias.keys()):
    if vertice != 'A':
        camino = camino_mas_corto_bfs(red_social, 'A', vertice)
        print(f"A -> {vertice}: {camino} (distancia: {distancias[vertice]})")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Qué caracteriza a la búsqueda en anchura (BFS)?",
    opciones: [
      { texto: "Explora primero los nodos más profundos", correcta: false },
      { texto: "Explora el grafo por niveles", correcta: true },
      { texto: "Usa recursividad", correcta: false },
      { texto: "Ordena los nodos", correcta: false }
    ]
  },
  {
    texto: "¿Qué estructura de datos utiliza BFS?",
    opciones: [
      { texto: "Pila", correcta: false },
      { texto: "Cola", correcta: true },
      { texto: "Lista", correcta: false },
      { texto: "Árbol", correcta: false }
    ]
  },
  {
    texto: "¿Para qué se usa comúnmente BFS?",
    opciones: [
      { texto: "Encontrar el camino más corto en grafos no ponderados", correcta: true },
      { texto: "Ordenar elementos", correcta: false },
      { texto: "Evaluar expresiones", correcta: false },
      { texto: "Optimizar memoria", correcta: false }
    ]
  }
]

</script>