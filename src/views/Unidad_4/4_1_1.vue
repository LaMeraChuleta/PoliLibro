<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="4" titulo="4.1.1 Descripción">
            <p class="text-gray-600 mt-2">Estructuras jerárquicas optimizadas para operaciones de búsqueda eficientes.
            </p>
        </HeaderTitle>


        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Estructura Fundamental de Búsqueda</h2>
            <p class="text-gray-700 leading-relaxed">
                Un Árbol Binario de Búsqueda (ABB) es una estructura de datos en forma de árbol donde cada nodo tiene
                como máximo dos hijos (izquierdo y derecho),
                y mantiene una propiedad de orden: para cada nodo, todos los valores en el subárbol izquierdo son
                menores,
                y todos los valores en el subárbol derecho son mayores. Esta propiedad permite realizar operaciones de
                búsqueda,
                inserción y eliminación con complejidad promedio O(log n), siendo n el número de nodos.
            </p>
        </section>

        <!-- Tarjetas de conceptos clave -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
                        <h3 class="font-bold text-gray-800">Propiedad de orden</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Para cada nodo: izquierdo ≤ nodo ≤ derecho. Base de todas las
                        operaciones eficientes.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Diccionario ordenado: palabras con definiciones, ordenadas
                        alfabéticamente para búsqueda rápida.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">No es un árbol binario común. La propiedad de orden es lo que
                        permite búsquedas eficientes.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Los ABB pueden degenerar en listas enlazadas (O(n)) si se insertan
                        valores ordenados.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Estructura básica de un nodo ABB</h3>
                <p class="text-gray-600 mb-4">Implementación de la clase Nodo y funciones básicas para manipular un
                    árbol binario de búsqueda.</p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Inserción y búsqueda en ABB</h3>
                <p class="text-gray-600 mb-4">Operaciones fundamentales: agregar nuevos valores y verificar existencia
                    de valores.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Recorridos en ABB (inorden, preorden, postorden)
                </h3>
                <p class="text-gray-600 mb-4">Diferentes formas de recorrer un árbol binario de búsqueda y sus
                    aplicaciones.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa una función <code>es_abb_valido</code> que verifique si un
                    árbol binario
                    cumple con la propiedad de árbol binario de búsqueda. La función debe retornar True si el árbol es
                    un ABB válido
                    y False en caso contrario. Usa el árbol del ejemplo 2 como prueba.
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
                </div> -->

                <!-- Solución oculta -->
                <!-- <div v-if="mostrarSolucion" class="mt-6 p-5 bg-white border border-green-200 rounded-lg">
                    <h3 class="font-bold text-green-800 mb-3">Solución:</h3>
                    <PythonRunner :code="solucionCode" />
                </div>
            </div>
        </section> -->

        <!-- Quiz -->
        <QuizQuestions :preguntas="preguntas" titulo="Quiz descripcion de arboles binario"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad textoSiguiente="Siguiente" siguiente="/Unidad/4.1.2" tituloActual="Unidad II • Árboles"
            mostrarAnterior="true" mostrarSiguiente="false" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Estructura básica
const ejemplo1Code = `class NodoABB:
    """
    Clase que representa un nodo en un Árbol Binario de Búsqueda.
    """
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None
    
    def __str__(self):
        return f"Nodo({self.valor})"

def crear_abb_vacio():
    """
    Crea y retorna un ABB vacío (raíz = None).
    """
    return None

def insertar(raiz, valor):
    """
    Inserta un nuevo valor en el ABB manteniendo la propiedad de orden.
    Retorna la nueva raíz del árbol.
    """
    if raiz is None:
        return NodoABB(valor)
    
    if valor < raiz.valor:
        raiz.izquierdo = insertar(raiz.izquierdo, valor)
    elif valor > raiz.valor:
        raiz.derecho = insertar(raiz.derecho, valor)
    # Si valor == raiz.valor, no hacemos nada (sin duplicados)
    
    return raiz

def imprimir_arbol(raiz, nivel=0, prefijo="Raiz: "):
    """
    Imprime el árbol de forma jerárquica.
    """
    if raiz is not None:
        print("   " * nivel + prefijo + str(raiz.valor))
        if raiz.izquierdo is not None or raiz.derecho is not None:
            imprimir_arbol(raiz.izquierdo, nivel + 1, "Izq: ")
            imprimir_arbol(raiz.derecho, nivel + 1, "Der: ")

# Crear un ABB simple
print("=== CREANDO UN ABB SIMPLE ===")
raiz = crear_abb_vacio()

# Insertar valores
valores = [50, 30, 70, 20, 40, 60, 80]
for valor in valores:
    raiz = insertar(raiz, valor)
    print(f"Insertado: {valor}")

print("\\n=== ESTRUCTURA DEL ÁRBOL ===")
imprimir_arbol(raiz)

# Propiedades del ABB
print("\\n=== PROPIEDADES DEL ABB ===")
print("Para cada nodo:")
print("- Todos los valores en el subárbol izquierdo son menores")
print("- Todos los valores en el subárbol derecho son mayores")
print("\\nEjemplo para nodo 50:")
print("- Izquierdo: 30, 20, 40 (todos < 50)")
print("- Derecho: 70, 60, 80 (todos > 50)")`

// Ejemplo 2: Inserción y búsqueda
const ejemplo2Code = `class NodoABB:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

def buscar(raiz, valor):
    """
    Busca un valor en el ABB.
    Retorna True si el valor existe, False en caso contrario.
    """
    if raiz is None:
        return False
    
    if valor == raiz.valor:
        return True
    elif valor < raiz.valor:
        return buscar(raiz.izquierdo, valor)
    else:
        return buscar(raiz.derecho, valor)

def insertar_con_contador(raiz, valor):
    """
    Inserta un valor en el ABB y cuenta las comparaciones realizadas.
    Retorna (nueva_raiz, num_comparaciones)
    """
    comparaciones = 0
    
    def insertar_interna(nodo, val):
        nonlocal comparaciones
        comparaciones += 1
        
        if nodo is None:
            return NodoABB(val)
        
        comparaciones += 1
        if val < nodo.valor:
            nodo.izquierdo = insertar_interna(nodo.izquierdo, val)
        elif val > nodo.valor:
            nodo.derecho = insertar_interna(nodo.derecho, val)
        
        return nodo
    
    nueva_raiz = insertar_interna(raiz, valor)
    return nueva_raiz, comparaciones

def altura(raiz):
    """
    Calcula la altura del árbol (longitud del camino más largo desde la raíz hasta una hoja).
    """
    if raiz is None:
        return 0
    
    altura_izq = altura(raiz.izquierdo)
    altura_der = altura(raiz.derecho)
    
    return max(altura_izq, altura_der) + 1

# Crear un ABB más complejo
print("=== ABB DE EJEMPLO (sistema de calificaciones) ===")
calificaciones = [85, 70, 95, 60, 75, 90, 100, 65, 80, 55]

raiz = None
print("Insertando calificaciones:")
for calif in calificaciones:
    raiz, comps = insertar_con_contador(raiz, calif)
    print(f"  {calif}: {comps} comparaciones")

print("\\n=== BÚSQUEDAS EN EL ABB ===")
valores_a_buscar = [85, 70, 95, 50, 100, 65]

for valor in valores_a_buscar:
    encontrado = buscar(raiz, valor)
    if encontrado:
        print(f"  {valor}: Encontrado")
    else:
        print(f"  {valor}: No encontrado")

# Información del árbol
print("\\n=== INFORMACIÓN DEL ÁRBOL ===")
altura_arbol = altura(raiz)
print(f"Altura del árbol: {altura_arbol}")
print(f"Número de elementos: {len(calificaciones)}")
print(f"Altura ideal (árbol balanceado): ≈ {int(altura_arbol * 1.44)}")
print("\\nNota: Un árbol balanceado tendría altura ≈ log₂(n)")

# Comparación con búsqueda lineal
print("\\n=== COMPARACIÓN CON BÚSQUEDA LINEAL ===")
print("En el ABB, búsqueda promedio: O(log n)")
print("En lista no ordenada, búsqueda promedio: O(n)")
print(f"Para {len(calificaciones)} elementos:")
print(f"  - ABB: ≈ {int(altura_arbol)} comparaciones (peor caso)")
print(f"  - Lista: hasta {len(calificaciones)} comparaciones")`

// Ejemplo 3: Recorridos en ABB
const ejemplo3Code = `
from collections import deque

class NodoABB:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None


def insertar(raiz, valor):
    if raiz is None:
        return NodoABB(valor)

    if valor < raiz.valor:
        raiz.izquierdo = insertar(raiz.izquierdo, valor)
    elif valor > raiz.valor:
        raiz.derecho = insertar(raiz.derecho, valor)

    return raiz


def recorrido_inorden(raiz):
    if raiz is not None:
        yield from recorrido_inorden(raiz.izquierdo)
        yield raiz.valor
        yield from recorrido_inorden(raiz.derecho)


def recorrido_preorden(raiz):
    if raiz is not None:
        yield raiz.valor
        yield from recorrido_preorden(raiz.izquierdo)
        yield from recorrido_preorden(raiz.derecho)


def recorrido_postorden(raiz):
    if raiz is not None:
        yield from recorrido_postorden(raiz.izquierdo)
        yield from recorrido_postorden(raiz.derecho)
        yield raiz.valor


def recorrido_por_niveles(raiz):
    if raiz is None:
        return []

    resultado = []
    cola = deque([raiz])

    while cola:
        nodo = cola.popleft()
        resultado.append(nodo.valor)

        if nodo.izquierdo:
            cola.append(nodo.izquierdo)
        if nodo.derecho:
            cola.append(nodo.derecho)

    return resultado


def imprimir_por_niveles(raiz):
    if raiz is None:
        return

    cola = deque([(raiz, 0)])
    nivel_actual = 0
    print("Nivel 0:", end=" ")

    while cola:
        nodo, nivel = cola.popleft()

        if nivel != nivel_actual:
            nivel_actual = nivel
            print(f"\\nNivel {nivel}:", end=" ")

        print(nodo.valor, end=" ")

        if nodo.izquierdo:
            cola.append((nodo.izquierdo, nivel + 1))
        if nodo.derecho:
            cola.append((nodo.derecho, nivel + 1))

    print()


# ===============================
# EJEMPLO
# ===============================

print("=== ABB DE EJEMPLO (ordenamiento de palabras) ===")

palabras = ["manzana", "banana", "cereza", "dátil", "frambuesa", "guinda", "higo"]

raiz = None
for palabra in palabras:
    raiz = insertar(raiz, palabra)

print("Palabras insertadas:", palabras)

print("\\n=== RECORRIDO INORDEN (orden alfabético) ===")
inorden = list(recorrido_inorden(raiz))
print("Resultado:", inorden)
print("Verificación:", inorden == sorted(palabras))

print("\\n=== RECORRIDO PREORDEN ===")
print(list(recorrido_preorden(raiz)))

print("\\n=== RECORRIDO POSTORDEN ===")
print(list(recorrido_postorden(raiz)))

print("\\n=== RECORRIDO POR NIVELES ===")
print(recorrido_por_niveles(raiz))

print("\\n=== ESTRUCTURA REAL DEL ÁRBOL POR NIVELES ===")
imprimir_por_niveles(raiz)

print("\\n=== APLICACIONES DE LOS RECORRIDOS ===")
print("Inorden  → obtener elementos ordenados")
print("Preorden → serializar o copiar el árbol")
print("Postorden→ eliminar el árbol o evaluar expresiones")
print("Por niveles → análisis de altura y balance")

print("\\n=== INORDEN INVERSO (orden descendente) ===")

def recorrido_inorden_inverso(raiz):
    if raiz is not None:
        yield from recorrido_inorden_inverso(raiz.derecho)
        yield raiz.valor
        yield from recorrido_inorden_inverso(raiz.izquierdo)

print(list(recorrido_inorden_inverso(raiz)))`

// Quiz
const preguntas = [
    {
        texto: "¿Qué es un árbol binario de búsqueda (ABB)?",
        opciones: [
            { texto: "Un árbol sin orden", correcta: false },
            { texto: "Un árbol donde el hijo izquierdo es menor y el derecho mayor", correcta: true },
            { texto: "Un árbol con más de dos hijos", correcta: false },
            { texto: "Un grafo cíclico", correcta: false }
        ]
    },
    {
        texto: "¿Cuál es una característica fundamental de un ABB?",
        opciones: [
            { texto: "Los nodos están ordenados", correcta: true },
            { texto: "Todos los nodos tienen dos hijos", correcta: false },
            { texto: "No permite recorridos", correcta: false },
            { texto: "Solo almacena cadenas", correcta: false }
        ]
    },
    {
        texto: "¿Qué ventaja ofrece un árbol binario de búsqueda?",
        opciones: [
            { texto: "Búsqueda eficiente de datos", correcta: true },
            { texto: "Uso mínimo de memoria", correcta: false },
            { texto: "Ordenamiento automático siempre", correcta: false },
            { texto: "Elimina duplicados automáticamente", correcta: false }
        ]
    }
]

</script>