<template>
    <div class="container mx-auto px-4 py-6">
        <!-- Header -->
        <HeaderTitle numero="3" titulo="3.3.3 Algoritmos de camino corto">
            <p class="text-gray-600 mt-2">Encontrar las rutas óptimas en grafos ponderados y no ponderados.</p>
        </HeaderTitle>

        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Optimización de Rutas en Grafos</h2>
            <p class="text-gray-700 leading-relaxed">
                Los algoritmos de camino corto resuelven el problema de encontrar la ruta más eficiente entre dos
                vértices
                en un grafo. Esta eficiencia puede medirse en distancia (grafos ponderados) o número de aristas (grafos
                no ponderados).
                Estos algoritmos son fundamentales en aplicaciones como sistemas de navegación GPS, enrutamiento de
                redes,
                planificación logística y optimización de recursos. La elección del algoritmo depende de las
                características
                del grafo (ponderado/no ponderado, con/sin ciclos negativos).
            </p>
        </section>

        <!-- Tarjetas de conceptos clave -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
                        <h3 class="font-bold text-gray-800">Relajación de aristas</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Operación fundamental que actualiza la distancia mínima conocida a
                        un vértice.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">GPS: encontrar la ruta más rápida entre dos ciudades considerando
                        distancias y tráfico.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Dijkstra no funciona con pesos negativos. Para esos casos usar
                        Bellman-Ford.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">El algoritmo de Dijkstra fue concebido en 20 minutos por Edsger
                        Dijkstra en 1956.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. BFS para camino más corto (grafos no ponderados)
                </h3>
                <p class="text-gray-600 mb-4">Búsqueda en anchura para encontrar el camino con menor número de aristas.
                </p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Algoritmo de Dijkstra</h3>
                <p class="text-gray-600 mb-4">Algoritmo greedy para encontrar caminos más cortos en grafos con pesos no
                    negativos.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Algoritmo de Bellman-Ford</h3>
                <p class="text-gray-600 mb-4">Algoritmo más general que funciona con pesos negativos (sin ciclos
                    negativos).</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa una función <code>ruta_mas_corta_todas</code> que encuentre
                    las distancias más cortas desde un vértice origen a todos los demás vértices usando el algoritmo
                    de Dijkstra. Luego, implementa una función para reconstruir el camino más corto a un destino
                    específico.
                    Usa el grafo de ciudades del ejemplo 2 con Madrid como origen.
                </p>
                <div class="flex gap-4">
                    <button @click="mostrarSolucion = !mostrarSolucion"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        {{ mostrarSolucion ? 'Ocultar solución' : 'Mostrar solución' }}
                    </button>
                    <a href="#"
                        class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz algoritmos de camino corto"></QuizQuestions>


        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/3.3.2" textoAnterior="Anterior" tituloActual="Unidad II • Pilas y Colas"
            mostrarAnterior="true" mostrarSiguiente="false" />

    </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: BFS para grafos no ponderados
const ejemplo1Code = `from collections import deque

def bfs_camino_corto(grafo, origen, destino):
    """
    Encuentra el camino más corto en un grafo no ponderado usando BFS.
    Retorna (distancia, camino) o (None, []) si no hay camino.
    """
    if origen == destino:
        return 0, [origen]
    
    cola = deque([origen])
    visitados = {origen}
    padres = {origen: None}
    distancias = {origen: 0}
    
    while cola:
        actual = cola.popleft()
        
        if actual == destino:
            # Reconstruir camino
            camino = []
            while actual is not None:
                camino.append(actual)
                actual = padres[actual]
            return distancias[destino], camino[::-1]
        
        for vecino in grafo.get(actual, []):
            if vecino not in visitados:
                visitados.add(vecino)
                padres[vecino] = actual
                distancias[vecino] = distancias[actual] + 1
                cola.append(vecino)
    
    return None, []  # No hay camino

# Grafo no ponderado: red de metro
metro = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B', 'G'],
    'E': ['B', 'H'],
    'F': ['C', 'I'],
    'G': ['D', 'J'],
    'H': ['E', 'K'],
    'I': ['F', 'L'],
    'J': ['G'],
    'K': ['H'],
    'L': ['I']
}

print("Red de metro (estaciones conectadas):")
for estacion, conexiones in metro.items():
    print(f"  {estacion}: {conexiones}")

print("\\n=== CAMINOS MÁS CORTOS (BFS) ===")

# Caso 1: Camino simple
print("\\n1. De A a G:")
distancia, camino = bfs_camino_corto(metro, 'A', 'G')
if camino:
    print(f"   Distancia: {distancia} estaciones")
    print(f"   Camino: {' -> '.join(camino)}")
else:
    print("   No hay conexión")

# Caso 2: Camino más largo
print("\\n2. De A a L:")
distancia, camino = bfs_camino_corto(metro, 'A', 'L')
if camino:
    print(f"   Distancia: {distancia} estaciones")
    print(f"   Camino: {' -> '.join(camino)}")

# Caso 3: Mismo origen y destino
print("\\n3. De B a B:")
distancia, camino = bfs_camino_corto(metro, 'B', 'B')
if camino:
    print(f"   Distancia: {distancia} estaciones")
    print(f"   Camino: {' -> '.join(camino)}")

# Función para todas las distancias desde un origen
def todas_distancias_bfs(grafo, origen):
    """
    Calcula la distancia mínima a todos los vértices desde un origen.
    """
    distancias = {origen: 0}
    cola = deque([origen])
    
    while cola:
        actual = cola.popleft()
        
        for vecino in grafo.get(actual, []):
            if vecino not in distancias:
                distancias[vecino] = distancias[actual] + 1
                cola.append(vecino)
    
    return distancias

print("\\n=== TODAS LAS DISTANCIAS DESDE 'A' ===")
distancias = todas_distancias_bfs(metro, 'A')
for estacion in sorted(distancias.keys()):
    print(f"  {estacion}: {distancias[estacion]} estaciones")`

// Ejemplo 2: Algoritmo de Dijkstra
const ejemplo2Code = `import heapq

def dijkstra(grafo, origen):
    """
    Implementación del algoritmo de Dijkstra usando un heap.
    Retorna (distancias, padres) para todos los vértices alcanzables.
    """
    distancias = {origen: 0}
    padres = {origen: None}
    heap = [(0, origen)]  # (distancia, vértice)
    
    while heap:
        dist_actual, actual = heapq.heappop(heap)
        
        # Si encontramos una distancia mejor, ignoramos esta entrada
        if dist_actual > distancias.get(actual, float('inf')):
            continue
        
        for vecino, peso in grafo.get(actual, []):
            nueva_dist = dist_actual + peso
            
            if nueva_dist < distancias.get(vecino, float('inf')):
                distancias[vecino] = nueva_dist
                padres[vecino] = actual
                heapq.heappush(heap, (nueva_dist, vecino))
    
    return distancias, padres

def reconstruir_camino(padres, destino):
    """
    Reconstruye el camino desde el origen hasta el destino.
    """
    if destino not in padres:
        return []
    
    camino = []
    actual = destino
    
    while actual is not None:
        camino.append(actual)
        actual = padres[actual]
    
    return camino[::-1]

# Grafo ponderado: distancias entre ciudades (en km)
ciudades = {
    'Madrid': [('Barcelona', 506), ('Valencia', 355), ('Sevilla', 389)],
    'Barcelona': [('Madrid', 506), ('Valencia', 349), ('Zaragoza', 296)],
    'Valencia': [('Madrid', 355), ('Barcelona', 349), ('Alicante', 166)],
    'Sevilla': [('Madrid', 389), ('Cordoba', 138), ('Malaga', 209)],
    'Zaragoza': [('Barcelona', 296), ('Madrid', 325)],
    'Alicante': [('Valencia', 166), ('Murcia', 76)],
    'Cordoba': [('Sevilla', 138), ('Granada', 168)],
    'Malaga': [('Sevilla', 209), ('Granada', 129)],
    'Murcia': [('Alicante', 76)],
    'Granada': [('Cordoba', 168), ('Malaga', 129)]
}

print("Red de carreteras (distancias en km):")
for ciudad, conexiones in ciudades.items():
    conex_str = ', '.join([f"{c}({d}km)" for c, d in conexiones])
    print(f"  {ciudad}: {conex_str}")

print("\\n=== DIJKSTRA DESDE 'Madrid' ===")
distancias, padres = dijkstra(ciudades, 'Madrid')

print("\\nDistancias más cortas desde Madrid:")
for ciudad in sorted(distancias.keys()):
    print(f"  {ciudad}: {distancias[ciudad]} km")

print("\\n=== CAMINOS MÁS CORTOS ===")
destinos = ['Barcelona', 'Granada', 'Murcia', 'Alicante']
for destino in destinos:
    if destino in distancias:
        camino = reconstruir_camino(padres, destino)
        print(f"\\nMadrid -> {destino}:")
        print(f"  Distancia: {distancias[destino]} km")
        print(f"  Camino: {' -> '.join(camino)}")
    else:
        print(f"\\nMadrid -> {destino}: No alcanzable")

# Verificación: comparar con rutas alternativas
print("\\n=== VERIFICACIÓN ===")
print("Ruta Madrid -> Alicante directa: no existe")
print("Ruta Madrid -> Valencia -> Alicante:")
print(f"  Distancia calculada: {distancias['Alicante']} km")
print(f"  Distancia manual: {355 + 166} = 521 km")`

// Ejemplo 3: Algoritmo de Bellman-Ford
const ejemplo3Code = `def bellman_ford(grafo, origen):
    """
    Implementación del algoritmo de Bellman-Ford.
    Retorna (distancias, padres, tiene_ciclo_negativo)
    """
    # Inicialización
    distancias = {origen: 0}
    padres = {origen: None}
    
    # Inicializar todas las distancias como infinito
    for vertice in grafo:
        if vertice != origen:
            distancias[vertice] = float('inf')
    
    # Lista de todas las aristas
    aristas = []
    for u in grafo:
        for v, peso in grafo[u]:
            aristas.append((u, v, peso))
    
    # Relajación |V| - 1 veces
    for i in range(len(grafo) - 1):
        cambiado = False
        for u, v, peso in aristas:
            if distancias[u] + peso < distancias[v]:
                distancias[v] = distancias[u] + peso
                padres[v] = u
                cambiado = True
        
        # Si no hubo cambios, podemos terminar antes
        if not cambiado:
            break
    
    # Detección de ciclos negativos
    tiene_ciclo_negativo = False
    for u, v, peso in aristas:
        if distancias[u] + peso < distancias[v]:
            tiene_ciclo_negativo = True
            break
    
    return distancias, padres, tiene_ciclo_negativo

# Grafo con posibles pesos negativos: sistema de cambios monetarios
# Peso = tasa de cambio (puede ser negativa si hay arbitraje)
cambios = {
    'EUR': [('USD', 1.08), ('GBP', 0.86), ('JPY', 160.5)],
    'USD': [('EUR', 0.93), ('GBP', 0.79), ('CAD', 1.35)],
    'GBP': [('EUR', 1.16), ('USD', 1.27), ('CHF', 1.12)],
    'JPY': [('EUR', 0.0062), ('USD', 0.0067)],
    'CAD': [('USD', 0.74)],
    'CHF': [('GBP', 0.89)]
}

print("Sistema de cambios monetarios:")
for moneda, tasas in cambios.items():
    tasas_str = ', '.join([f"{m}({t})" for m, t in tasas])
    print(f"  {moneda}: {tasas_str}")

print("\\n=== BELLMAN-FORD DESDE 'EUR' ===")
distancias, padres, ciclo_negativo = bellman_ford(cambios, 'EUR')

if ciclo_negativo:
    print("¡ADVERTENCIA! El grafo contiene un ciclo de peso negativo (oportunidad de arbitraje)")
else:
    print("No se detectaron ciclos negativos")

print("\\nMejores tasas de cambio desde EUR:")
for moneda in sorted(distancias.keys()):
    if distancias[moneda] != float('inf'):
        print(f"  EUR -> {moneda}: {distancias[moneda]:.4f}")

# Ejemplo con ciclo negativo (oportunidad de arbitraje)
print("\\n=== EJEMPLO CON CICLO NEGATIVO ===")
# Grafo donde hay oportunidad de arbitraje
arbitraje = {
    'A': [('B', 1), ('C', 4)],
    'B': [('C', 2), ('D', 5)],
    'C': [('D', 1)],
    'D': [('A', -9)]  # Ciclo negativo: A->B->C->D->A = 1+2+1-9 = -5
}

print("Grafo con ciclo negativo (oportunidad de arbitraje):")
for vertice, aristas in arbitraje.items():
    aristas_str = ', '.join([f"{v}({p})" for v, p in aristas])
    print(f"  {vertice}: {aristas_str}")

distancias_arb, padres_arb, ciclo_neg = bellman_ford(arbitraje, 'A')

if ciclo_neg:
    print("\\n¡SE DETECTÓ CICLO NEGATIVO!")
    print("Esto indica una oportunidad de arbitraje:")
    print("Se puede ganar dinero intercambiando monedas en el ciclo")
    
    # Intentar encontrar el ciclo negativo
    print("\\nCiclo negativo detectado (ejemplo de reconstrucción):")
    # En la práctica se necesitaría un algoritmo adicional para encontrar el ciclo
    print("A -> B -> C -> D -> A")
    print("Peso total del ciclo: 1 + 2 + 1 - 9 = -5 (ganancia)")
else:
    print("\\nNo se detectaron ciclos negativos")

print("\\nDistancias desde A (con ciclo negativo):")
for vertice in sorted(distancias_arb.keys()):
    if distancias_arb[vertice] != float('inf'):
        print(f"  A -> {vertice}: {distancias_arb[vertice]}")`

// Ejercicio práctico - Solución
const solucionCode = `import heapq

def dijkstra_completo(grafo, origen):
    """
    Implementación completa de Dijkstra con reconstrucción de caminos.
    Retorna (distancias, padres) para reconstruir cualquier camino.
    """
    distancias = {origen: 0}
    padres = {origen: None}
    heap = [(0, origen)]
    
    while heap:
        dist_actual, actual = heapq.heappop(heap)
        
        if dist_actual > distancias[actual]:
            continue
        
        for vecino, peso in grafo.get(actual, []):
            nueva_dist = dist_actual + peso
            
            if nueva_dist < distancias.get(vecino, float('inf')):
                distancias[vecino] = nueva_dist
                padres[vecino] = actual
                heapq.heappush(heap, (nueva_dist, vecino))
    
    return distancias, padres

def ruta_mas_corta_todas(grafo, origen):
    """
    Encuentra las distancias más cortas desde un origen a todos los vértices.
    """
    return dijkstra_completo(grafo, origen)

def reconstruir_ruta(padres, destino):
    """
    Reconstruye la ruta más corta desde el origen hasta el destino.
    """
    if destino not in padres:
        return []
    
    ruta = []
    actual = destino
    
    while actual is not None:
        ruta.append(actual)
        actual = padres[actual]
    
    return ruta[::-1]

def ruta_mas_corta_especifica(grafo, origen, destino):
    """
    Encuentra la ruta más corta entre dos vértices específicos.
    """
    distancias, padres = dijkstra_completo(grafo, origen)
    
    if destino not in distancias or distancias[destino] == float('inf'):
        return float('inf'), []  # No hay camino
    
    ruta = reconstruir_ruta(padres, destino)
    return distancias[destino], ruta

# Grafo de ciudades (del ejemplo 2)
ciudades = {
    'Madrid': [('Barcelona', 506), ('Valencia', 355), ('Sevilla', 389)],
    'Barcelona': [('Madrid', 506), ('Valencia', 349), ('Zaragoza', 296)],
    'Valencia': [('Madrid', 355), ('Barcelona', 349), ('Alicante', 166)],
    'Sevilla': [('Madrid', 389), ('Cordoba', 138), ('Malaga', 209)],
    'Zaragoza': [('Barcelona', 296), ('Madrid', 325)],
    'Alicante': [('Valencia', 166), ('Murcia', 76)],
    'Cordoba': [('Sevilla', 138), ('Granada', 168)],
    'Malaga': [('Sevilla', 209), ('Granada', 129)],
    'Murcia': [('Alicante', 76)],
    'Granada': [('Cordoba', 168), ('Malaga', 129)]
}

print("=== RUTAS MÁS CORTAS DESDE MADRID ===")
print("(Usando algoritmo de Dijkstra)\\n")

# Calcular todas las distancias desde Madrid
distancias, padres = ruta_mas_corta_todas(ciudades, 'Madrid')

print("Distancias desde Madrid:")
print("-" * 30)
for ciudad in sorted(distancias.keys()):
    if distancias[ciudad] != float('inf'):
        print(f"{ciudad:12} {distancias[ciudad]:6} km")
print()

print("Rutas específicas:")
print("=" * 50)

# Rutas específicas de interés
rutas_a_calcular = [
    ('Madrid', 'Barcelona'),
    ('Madrid', 'Granada'),
    ('Madrid', 'Murcia'),
    ('Madrid', 'Alicante')
]

for origen, destino in rutas_a_calcular:
    distancia, ruta = ruta_mas_corta_especifica(ciudades, origen, destino)
    
    print(f"\\n{origen} -> {destino}:")
    if ruta:
        print(f"  Distancia: {distancia} km")
        print(f"  Ruta: {' -> '.join(ruta)}")
        
        # Calcular distancia paso a paso
        print(f"  Detalle:")
        for i in range(len(ruta) - 1):
            desde = ruta[i]
            hasta = ruta[i + 1]
            # Buscar la distancia entre estas dos ciudades
            for vecino, peso in ciudades[desde]:
                if vecino == hasta:
                    print(f"    {desde} -> {hasta}: {peso} km")
                    break
    else:
        print(f"  No hay ruta disponible")

# Análisis adicional
print("\\n=== ANÁLISIS ADICIONAL ===")
print("\\nCiudades ordenadas por distancia desde Madrid:")

ciudades_ordenadas = sorted(distancias.items(), key=lambda x: x[1] if x[1] != float('inf') else float('inf'))
for i, (ciudad, dist) in enumerate(ciudades_ordenadas, 1):
    if dist != float('inf'):
        print(f"{i:2}. {ciudad:12} {dist:6} km")

# Verificación de optimalidad
print("\\n=== VERIFICACIÓN ===")
print("\\nComprobando algunas rutas alternativas:")

# Ruta Madrid -> Murcia
print("\\nRuta Madrid -> Murcia:")
print("Opción 1: Madrid -> Valencia -> Alicante -> Murcia")
dist_opcion1 = 355 + 166 + 76
print(f"  Distancia: {dist_opcion1} km")

print("\\nOpción 2: Madrid -> Barcelona -> Valencia -> Alicante -> Murcia")
dist_opcion2 = 506 + 349 + 166 + 76
print(f"  Distancia: {dist_opcion2} km")

print("\\nDistancia calculada por Dijkstra:", distancias['Murcia'])
print("¿Es óptima?", "Sí" if distancias['Murcia'] == min(dist_opcion1, dist_opcion2) else "No")

# Función para encontrar rutas alternativas cercanas
def rutas_alternativas(grafo, origen, destino, max_extra=50):
    """
    Encuentra rutas alternativas que no sean mucho más largas que la óptima.
    """
    dist_opt, ruta_opt = ruta_mas_corta_especifica(grafo, origen, destino)
    if not ruta_opt:
        return []
    
    # Para un ejercicio más avanzado, se podría implementar Yen's algorithm
    # Por ahora, mostramos un mensaje informativo
    print(f"\\nLa ruta óptima tiene {dist_opt} km.")
    print(f"Rutas hasta {dist_opt + max_extra} km podrían ser alternativas aceptables.")
    
    return []  # Implementación simplificada

print("\\n=== RUTAS ALTERNATIVAS (concepto) ===")
rutas_alternativas(ciudades, 'Madrid', 'Granada', 100)`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
    {
        texto: "¿Cuál es el objetivo de los algoritmos de camino corto?",
        opciones: [
            { texto: "Recorrer todo el grafo", correcta: false },
            { texto: "Encontrar la ruta mínima entre dos nodos", correcta: true },
            { texto: "Ordenar vértices", correcta: false },
            { texto: "Eliminar ciclos", correcta: false }
        ]
    },
    {
        texto: "¿Qué algoritmo se usa para encontrar el camino más corto en grafos ponderados sin pesos negativos?",
        opciones: [
            { texto: "BFS", correcta: false },
            { texto: "DFS", correcta: false },
            { texto: "Dijkstra", correcta: true },
            { texto: "Prim", correcta: false }
        ]
    },
    {
        texto: "¿Qué algoritmo permite manejar pesos negativos?",
        opciones: [
            { texto: "Dijkstra", correcta: false },
            { texto: "BFS", correcta: false },
            { texto: "Bellman-Ford", correcta: true },
            { texto: "Kruskal", correcta: false }
        ]
    }
]

</script>