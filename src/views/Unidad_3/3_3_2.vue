<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="border-b border-gray-200 pb-4">
      <h1 class="text-3xl font-bold text-gray-800">Capítulo 3.3.2: Búsqueda en Profundidad (DFS)</h1>
      <p class="text-gray-600 mt-2">Algoritmo recursivo para explorar grafos profundamente antes de retroceder.</p>
    </header>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Exploración Recursiva en Grafos</h2>
      <p class="text-gray-700 leading-relaxed">
        La Búsqueda en Profundidad (Depth-First Search o DFS) es un algoritmo que explora un grafo siguiendo un camino 
        lo más profundo posible antes de retroceder (backtracking). Utiliza recursión o una pila (estructura LIFO) para 
        implementar esta estrategia. Es especialmente útil para problemas que requieren explorar todas las posibilidades, 
        como laberintos, recorridos de árboles, detección de ciclos y ordenamiento topológico.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Estrategia LIFO</h3>
          </div>
          <p class="text-gray-600 text-sm">DFS usa una pila (Last-In, First-Out) para procesar vértices, explorando primero los más recientes.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Resolución de laberintos: seguir un camino hasta encontrar un callejón sin salida, luego retroceder.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">DFS no garantiza el camino más corto. Para eso se usa BFS en grafos no ponderados.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">DFS fue utilizado por Charles Pierre Trémaux en el siglo XIX para resolver laberintos.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. DFS recursivo básico</h3>
        <p class="text-gray-600 mb-4">Implementación recursiva clásica de DFS para recorrer un grafo no dirigido.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. DFS iterativo con pila</h3>
        <p class="text-gray-600 mb-4">Implementación iterativa de DFS usando una pila explícita.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. DFS para ordenamiento topológico</h3>
        <p class="text-gray-600 mb-4">Uso de DFS para ordenar tareas con dependencias (grafo acíclico dirigido).</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa una función <code>encontrar_ciclos_dfs</code> que detecte si un grafo 
          dirigido contiene al menos un ciclo utilizando DFS. La función debe retornar True si encuentra un ciclo y False 
          en caso contrario. Usa el grafo del ejemplo 3 como prueba.
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
    <section class="border border-gray-300 rounded-xl p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Evaluación de Conceptos</h2>
      <div class="space-y-8">
        <div v-for="(pregunta, index) in preguntas" :key="index" class="p-5 border border-gray-200 rounded-lg">
          <h3 class="font-semibold text-gray-800 mb-4">Pregunta {{ index + 1 }}: {{ pregunta.texto }}</h3>
          <div class="space-y-3">
            <label
              v-for="opcion in pregunta.opciones"
              :key="opcion.letra"
              class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
              :class="{
                'bg-green-100 border-green-400': respuestasSeleccionadas[index] === opcion.letra && opcion.correcta,
                'bg-red-100 border-red-400': respuestasSeleccionadas[index] === opcion.letra && !opcion.correcta
              }"
            >
              <input
                type="radio"
                :name="'pregunta' + index"
                :value="opcion.letra"
                v-model="respuestasSeleccionadas[index]"
                class="h-4 w-4"
              />
              <span class="font-mono text-gray-700">{{ opcion.letra }}.</span>
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
          <div v-if="respuestasSeleccionadas[index]" class="mt-4 text-sm font-medium">
            <span v-if="respuestasSeleccionadas[index] === pregunta.respuestaCorrecta" class="text-green-700">
              Correcto: {{ pregunta.explicacion }}
            </span>
            <span v-else class="text-red-700">
              Incorrecto. La respuesta correcta es {{ pregunta.respuestaCorrecta }}.
            </span>
          </div>
        </div>
      </div>

      <!-- Resultado del quiz -->
      <div class="mt-8 p-5 bg-gray-100 rounded-lg">
        <div class="flex justify-between items-center">
          <span class="text-gray-800 font-medium">Puntuación: {{ calcularPuntaje }}/3</span>
          <button
            @click="reiniciarQuiz"
            class="px-4 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            Reiniciar quiz
          </button>
        </div>
        <div class="w-full bg-gray-300 h-2 mt-3 rounded-full overflow-hidden">
          <div
            class="bg-green-600 h-full transition-all duration-500"
            :style="{ width: `${(calcularPuntaje / 3) * 100}%` }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Ejemplo 1: DFS recursivo básico
const ejemplo1Code = `def dfs_recursivo(grafo, vertice, visitados=None):
    """
    DFS recursivo para recorrer un grafo.
    Retorna lista de vértices en orden de visita.
    """
    if visitados is None:
        visitados = set()
    
    recorrido = []
    
    def dfs_interna(v):
        visitados.add(v)
        recorrido.append(v)
        
        for vecino in grafo[v]:
            if vecino not in visitados:
                dfs_interna(vecino)
    
    dfs_interna(vertice)
    return recorrido

# Grafo no dirigido de ejemplo (sistema de túneles)
tuneles = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F', 'G'],
    'F': ['C', 'E', 'H'],
    'G': ['E'],
    'H': ['F']
}

print("Sistema de túneles (grafo no dirigido):")
for sala, conexiones in tuneles.items():
    print(f"  {sala}: {conexiones}")

print("\\n=== DFS RECURSIVO DESDE 'A' ===")
recorrido = dfs_recursivo(tuneles, 'A')
print(f"Orden de visita: {recorrido}")

print("\\n=== DFS RECURSIVO DESDE 'E' ===")
recorrido = dfs_recursivo(tuneles, 'E')
print(f"Orden de visita: {recorrido}")

# Versión que retorna todos los componentes conexos
def dfs_componentes(grafo):
    """
    Encuentra todas las componentes conexas usando DFS.
    """
    visitados = set()
    componentes = []
    
    for vertice in grafo:
        if vertice not in visitados:
            # Encontrar una nueva componente
            componente = []
            pila = [vertice]
            visitados.add(vertice)
            
            while pila:
                v = pila.pop()
                componente.append(v)
                
                for vecino in grafo[v]:
                    if vecino not in visitados:
                        visitados.add(vecino)
                        pila.append(vecino)
            
            componentes.append(componente)
    
    return componentes

print("\\n=== COMPONENTES CONEXAS ===")
componentes = dfs_componentes(tuneles)
for i, comp in enumerate(componentes):
    print(f"Componente {i+1}: {comp}")`

// Ejemplo 2: DFS iterativo con pila
const ejemplo2Code = `def dfs_iterativo(grafo, inicio):
    """
    DFS iterativo usando una pila explícita.
    Retorna lista de vértices en orden de visita.
    """
    visitados = set()
    pila = [inicio]
    recorrido = []
    
    while pila:
        vertice = pila.pop()
        
        if vertice not in visitados:
            visitados.add(vertice)
            recorrido.append(vertice)
            
            # Agregar vecinos a la pila
            # Nota: para que el orden sea similar al recursivo,
            # a veces se revierte la lista de vecinos
            for vecino in reversed(grafo[vertice]):
                if vecino not in visitados:
                    pila.append(vecino)
    
    return recorrido

def dfs_caminos(grafo, inicio, destino):
    """
    Encuentra un camino entre inicio y destino usando DFS.
    Puede no ser el camino más corto.
    """
    pila = [(inicio, [inicio])]
    visitados = set()
    
    while pila:
        vertice, camino = pila.pop()
        
        if vertice == destino:
            return camino
        
        if vertice not in visitados:
            visitados.add(vertice)
            
            for vecino in grafo[vertice]:
                if vecino not in visitados:
                    pila.append((vecino, camino + [vecino]))
    
    return None  # No hay camino

# Grafo de ejemplo (mapa de ciudades conectadas por carreteras)
carreteras = {
    'Madrid': ['Toledo', 'Segovia', 'Guadalajara'],
    'Toledo': ['Madrid', 'Ciudad Real'],
    'Segovia': ['Madrid', 'Avila', 'Valladolid'],
    'Guadalajara': ['Madrid', 'Soria'],
    'Ciudad Real': ['Toledo', 'Cordoba'],
    'Avila': ['Segovia', 'Salamanca'],
    'Valladolid': ['Segovia', 'Leon'],
    'Soria': ['Guadalajara', 'Logroño'],
    'Cordoba': ['Ciudad Real', 'Sevilla'],
    'Salamanca': ['Avila'],
    'Leon': ['Valladolid'],
    'Logroño': ['Soria'],
    'Sevilla': ['Cordoba']
}

print("Red de carreteras (grafo no dirigido):")
for ciudad, conexiones in carreteras.items():
    print(f"  {ciudad}: {conexiones}")

print("\\n=== DFS ITERATIVO DESDE 'Madrid' ===")
recorrido = dfs_iterativo(carreteras, 'Madrid')
print(f"Orden de visita: {recorrido}")

print("\\n=== BUSQUEDA DE CAMINO (DFS) ===")
print("Camino de Madrid a Sevilla:")
camino = dfs_caminos(carreteras, 'Madrid', 'Sevilla')
if camino:
    print(f"  Camino encontrado: {' -> '.join(camino)}")
    print(f"  Longitud: {len(camino) - 1} tramos")
else:
    print("  No hay camino")

print("\\nCamino de Segovia a Logroño:")
camino = dfs_caminos(carreteras, 'Segovia', 'Logroño')
if camino:
    print(f"  Camino encontrado: {' -> '.join(camino)}")
    print(f"  Longitud: {len(camino) - 1} tramos")

# Comparación DFS vs BFS para caminos
print("\\n--- Nota importante ---")
print("DFS encuentra un camino, pero no necesariamente el más corto.")
print("Para el camino más corto en grafos no ponderados, usar BFS.")`

// Ejemplo 3: DFS para ordenamiento topológico
const ejemplo3Code = `def ordenamiento_topologico(grafo):
    """
    Ordenamiento topológico usando DFS (algoritmo de Kahn alternativo).
    Solo funciona para grafos acíclicos dirigidos (DAGs).
    """
    visitados = set()
    pila_resultado = []
    
    def dfs_topologico(vertice):
        visitados.add(vertice)
        
        for vecino in grafo.get(vertice, []):
            if vecino not in visitados:
                dfs_topologico(vecino)
        
        # Después de visitar todos los vecinos, agregar a la pila
        pila_resultado.append(vertice)
    
    # Ejecutar DFS desde cada vértice no visitado
    for vertice in list(grafo.keys()):
        if vertice not in visitados:
            dfs_topologico(vertice)
    
    # El orden topológico es el reverso del orden de finalización
    return pila_resultado[::-1]

# Grafo dirigido acíclico (DAG): dependencias de tareas
# Tarea A -> Tarea B significa "A debe ejecutarse antes que B"
dependencias = {
    'Desayunar': ['Vestirse'],
    'Vestirse': ['Salir de casa'],
    'Cepillarse dientes': ['Vestirse'],
    'Ducharse': ['Vestirse'],
    'Preparar mochila': ['Salir de casa'],
    'Revisar agenda': ['Preparar mochila'],
    'Salir de casa': []
}

print("Dependencias de tareas matutinas:")
for tarea, requisitos in dependencias.items():
    if requisitos:
        print(f"  {tarea} -> {requisitos}")
    else:
        print(f"  {tarea} -> []")

print("\\n=== ORDENAMIENTO TOPOLÓGICO ===")
try:
    orden = ordenamiento_topologico(dependencias)
    print(f"Orden de ejecución: {' -> '.join(orden)}")
    
    # Verificar que el orden es válido
    print("\\nVerificación del orden:")
    posiciones = {tarea: i for i, tarea in enumerate(orden)}
    valido = True
    
    for tarea, requisitos in dependencias.items():
        for req in requisitos:
            if posiciones[req] <= posiciones[tarea]:
                print(f"  ERROR: {req} debe ejecutarse antes que {tarea}")
                valido = False
    
    if valido:
        print("  El orden es válido: todas las dependencias se respetan")
    else:
        print("  El orden NO es válido")
        
except Exception as e:
    print(f"Error: {e}")
    print("El grafo probablemente tiene ciclos")

# Ejemplo con un ciclo (debería fallar)
print("\\n=== EJEMPLO CON CICLO (NO DAG) ===")
dependencias_ciclicas = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']  # Ciclo: A -> B -> C -> A
}

print("Grafo con ciclo:")
for tarea, requisitos in dependencias_ciclicas.items():
    print(f"  {tarea} -> {requisitos}")

print("\\nIntentando ordenamiento topológico...")
try:
    orden = ordenamiento_topologico(dependencias_ciclicas)
    print(f"Orden: {orden}")
except Exception as e:
    print(f"No se puede ordenar: {e}")
    print("(Este es el comportamiento esperado para grafos con ciclos)")`

// Ejercicio práctico - Solución
const solucionCode = `def encontrar_ciclos_dfs(grafo):
    """
    Detecta si un grafo dirigido contiene ciclos usando DFS.
    Retorna True si hay al menos un ciclo, False en caso contrario.
    """
    visitados = set()
    en_recursion = set()  # Para detectar ciclos en el camino actual
    
    def dfs_ciclo(vertice):
        visitados.add(vertice)
        en_recursion.add(vertice)
        
        for vecino in grafo.get(vertice, []):
            if vecino not in visitados:
                if dfs_ciclo(vecino):
                    return True
            elif vecino in en_recursion:
                # Encontramos un ciclo: el vecino está en el camino actual
                return True
        
        en_recursion.remove(vertice)
        return False
    
    for vertice in grafo:
        if vertice not in visitados:
            if dfs_ciclo(vertice):
                return True
    
    return False

def encontrar_ciclos_detallado(grafo):
    """
    Versión detallada que también muestra información sobre los ciclos encontrados.
    """
    visitados = set()
    en_recursion = set()
    padres = {}
    ciclos = []
    
    def dfs_ciclo_detalle(vertice, padre):
        visitados.add(vertice)
        en_recursion.add(vertice)
        padres[vertice] = padre
        
        for vecino in grafo.get(vertice, []):
            if vecino not in visitados:
                if dfs_ciclo_detalle(vecino, vertice):
                    return True
            elif vecino in en_recursion:
                # Encontramos un ciclo, podemos reconstruirlo
                ciclo = []
                actual = vertice
                while actual != vecino:
                    ciclo.append(actual)
                    actual = padres[actual]
                ciclo.append(vecino)
                ciclo.append(vertice)  # Para cerrar el ciclo
                ciclos.append(ciclo[::-1])  # Invertir para orden correcto
                return True
        
        en_recursion.remove(vertice)
        return False
    
    for vertice in grafo:
        if vertice not in visitados:
            if dfs_ciclo_detalle(vertice, None):
                return True, ciclos
    
    return False, ciclos

# Prueba con el grafo de dependencias (sin ciclos)
print("=== PRUEBA 1: GRAFO ACÍCLICO ===")
dependencias_aciclicas = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

print("Grafo:")
for vertice, vecinos in dependencias_aciclicas.items():
    print(f"  {vertice} -> {vecinos}")

tiene_ciclo = encontrar_ciclos_dfs(dependencias_aciclicas)
print(f"\\n¿Tiene ciclos? {tiene_ciclo}")

# Prueba con grafo con ciclos
print("\\n=== PRUEBA 2: GRAFO CON CICLO ===")
dependencias_ciclicas = {
    'A': ['B'],
    'B': ['C', 'D'],
    'C': ['A'],  # Ciclo A -> B -> C -> A
    'D': ['E'],
    'E': ['D']   # Ciclo D <-> E
}

print("Grafo:")
for vertice, vecinos in dependencias_ciclicas.items():
    print(f"  {vertice} -> {vecinos}")

tiene_ciclo, ciclos = encontrar_ciclos_detallado(dependencias_ciclicas)
print(f"\\n¿Tiene ciclos? {tiene_ciclo}")
if ciclos:
    print("Ciclos encontrados:")
    for i, ciclo in enumerate(ciclos):
        print(f"  Ciclo {i+1}: {' -> '.join(ciclo)}")

# Prueba con el grafo del ejemplo 3
print("\\n=== PRUEBA 3: GRAFO DE DEPENDENCIAS (EJEMPLO 3) ===")
dependencias_ejemplo = {
    'Desayunar': ['Vestirse'],
    'Vestirse': ['Salir de casa'],
    'Cepillarse dientes': ['Vestirse'],
    'Ducharse': ['Vestirse'],
    'Preparar mochila': ['Salir de casa'],
    'Revisar agenda': ['Preparar mochila'],
    'Salir de casa': []
}

print("Grafo de dependencias:")
for vertice, vecinos in dependencias_ejemplo.items():
    print(f"  {vertice} -> {vecinos}")

tiene_ciclo = encontrar_ciclos_dfs(dependencias_ejemplo)
print(f"\\n¿Tiene ciclos? {tiene_ciclo}")

# Función adicional: encontrar todos los ciclos
def encontrar_todos_ciclos(grafo):
    """
    Encuentra todos los ciclos en un grafo dirigido.
    """
    todos_ciclos = []
    visitados = set()
    camino_actual = []
    
    def dfs_todos(vertice):
        if vertice in camino_actual:
            # Encontramos un ciclo
            inicio = camino_actual.index(vertice)
            ciclo = camino_actual[inicio:] + [vertice]
            todos_ciclos.append(ciclo)
            return
        
        if vertice in visitados:
            return
        
        visitados.add(vertice)
        camino_actual.append(vertice)
        
        for vecino in grafo.get(vertice, []):
            dfs_todos(vecino)
        
        camino_actual.pop()
    
    for vertice in grafo:
        if vertice not in visitados:
            dfs_todos(vertice)
    
    return todos_ciclos

print("\\n=== TODOS LOS CICLOS EN GRAFO CÍCLICO ===")
todos_ciclos = encontrar_todos_ciclos(dependencias_ciclicas)
print(f"Total ciclos encontrados: {len(todos_ciclos)}")
for i, ciclo in enumerate(todos_ciclos):
    print(f"  Ciclo {i+1}: {' -> '.join(ciclo)}")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Qué estructura de datos se utiliza típicamente para implementar DFS de forma iterativa?",
    opciones: [
      { letra: "A", texto: "Cola (FIFO)", correcta: false },
      { letra: "B", texto: "Pila (LIFO)", correcta: true },
      { letra: "C", texto: "Árbol binario", correcta: false },
      { letra: "D", texto: "Lista circular", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "DFS utiliza una pila (LIFO) para procesar vértices, explorando los más recientes primero."
  },
  {
    texto: "¿Cuál es la complejidad temporal de DFS en un grafo representado con lista de adyacencia?",
    opciones: [
      { letra: "A", texto: "O(V²)", correcta: false },
      { letra: "B", texto: "O(V × E)", correcta: false },
      { letra: "C", texto: "O(V + E)", correcta: true },
      { letra: "D", texto: "O(E log V)", correcta: false }
    ],
    respuestaCorrecta: "C",
    explicacion: "DFS visita cada vértice y cada arista una vez, por lo que su complejidad es O(V + E)."
  },
  {
    texto: "¿Para qué tipo de problemas es especialmente útil DFS?",
    opciones: [
      { letra: "A", texto: "Encontrar el camino más corto en grafos no ponderados", correcta: false },
      { letra: "B", texto: "Problemas que requieren explorar todas las posibilidades", correcta: true },
      { letra: "C", texto: "Encontrar la componente conexa más grande", correcta: false },
      { letra: "D", texto: "Cálculo de distancias mínimas en grafos ponderados", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "DFS es ideal para problemas de backtracking y exploración exhaustiva como laberintos o puzzles."
  }
]

const respuestasSeleccionadas = ref([null, null, null])

const calcularPuntaje = computed(() => {
  return respuestasSeleccionadas.value.reduce((puntaje, respuesta, index) => {
    return puntaje + (respuesta === preguntas[index].respuestaCorrecta ? 1 : 0)
  }, 0)
})

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
}
</script>