<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="3" titulo="3.1.2 Recursión e iteración">
      <p class="mt-4 text-gray-600 max-w-3xl">
        La recursión y la iteración son dos enfoques diferentes para resolver problemas repetitivos. Comprender sus
        ventajas, desventajas y cuándo usar cada uno es crucial para escribir código eficiente y mantenible.
      </p>
    </HeaderTitle>

    <!-- Tarjetas de Conceptos Clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">+</div>
          <h3 class="font-bold text-gray-800 mb-2">Eficiencia Memoria</h3>
          <p class="text-gray-600 text-sm">
            La iteración generalmente usa menos memoria (O(1)) que la recursión (O(n)) debido a la pila de llamadas.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">X</div>
          <h3 class="font-bold text-gray-800 mb-2">Claridad del Código</h3>
          <p class="text-gray-600 text-sm">
            La recursión suele ser más elegante para problemas naturalmente recursivos (árboles, backtracking).
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">E</div>
          <h3 class="font-bold text-gray-800 mb-2">Transformación</h3>
          <p class="text-gray-600 text-sm">
            Cualquier función recursiva puede convertirse a iterativa usando una pila explícita para simular la pila
            de llamadas.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">?</div>
          <h3 class="font-bold text-gray-800 mb-2">Selección</h3>
          <p class="text-gray-600 text-sm">
            Elige recursión para problemas con estructura recursiva natural; iteración para optimización de
            rendimiento.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de Código -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Comparación Práctica</h2>

      <div class="space-y-10">
        <!-- Ejemplo 1 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 1: Factorial - Recursivo vs Iterativo</h3>      
          <PythonRunner :code="ejemplo1Code" />
        </div>

        <!-- Ejemplo 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 2: Fibonacci - Tres Enfoques</h3>  
          <PythonRunner :code="ejemplo2Code" />
        </div>

        <!-- Ejemplo 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 3: Recorrido de Directorios</h3>     
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <!-- <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio: Búsqueda Binaria</h2>
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Implementación Recursiva e Iterativa</h3>
          <p class="text-gray-600 mb-4">
            La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada. Implementa
            dos versiones:
          </p>
          <ul class="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li><strong>Versión recursiva:</strong> Divide el problema en subproblemas más pequeños buscando en
              mitades.</li>
            <li><strong>Versión iterativa:</strong> Usa un bucle while para reducir el espacio de búsqueda.</li>
            <li>Ambas versiones deben tener complejidad O(log n).</li>
            <li>Deben retornar el índice del elemento o -1 si no se encuentra.</li>
          </ul>
          <div class="bg-gray-100 p-4 rounded-lg">
            <PythonRunner :code="ejercicioCode" />
          </div>
        </div>

        <button @click="mostrarSolucion = !mostrarSolucion"
          class="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          <span>{{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} solución</span>
          <svg class="w-4 h-4" :class="{ 'rotate-180': mostrarSolucion }" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-if="mostrarSolucion" class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="font-bold text-gray-800 mb-3">Solución Propuesta:</h4>
          <PythonRunner :code="solucionCode" />
        </div>
      </div>
    </section> -->

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/3.1.1" siguiente="/Unidad/3.2.1" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Grafos" mostrarAnterior="true" mostrarSiguiente="true" />

  </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Factorial comparativo
const ejemplo1Code = `# Comparación: Factorial recursivo vs iterativo

import time
import sys

# Configurar límite de recursión para demostración
sys.setrecursionlimit(2000)

# Versión 1: Factorial recursivo
def factorial_recursivo(n):
    """Calcula factorial usando recursión."""
    if n == 0 or n == 1:
        return 1
    return n * factorial_recursivo(n - 1)

# Versión 2: Factorial iterativo
def factorial_iterativo(n):
    """Calcula factorial usando iteración."""
    resultado = 1
    for i in range(2, n + 1):
        resultado *= i
    return resultado

# Versión 3: Factorial recursivo con cola (no optimizado en Python)
def factorial_cola(n, acumulador=1):
    """Versión recursiva de cola (tail recursion)."""
    if n == 0 or n == 1:
        return acumulador
    return factorial_cola(n - 1, n * acumulador)

# Comparación de rendimiento
print("=== COMPARACIÓN: FACTORIAL RECURSIVO VS ITERATIVO ===\\n")

valores_prueba = [5, 10, 100, 500, 1000]

print(f"{'Valor':<10} {'Recursivo':<15} {'Iterativo':<15} {'Rec. Cola':<15}")
print("-" * 60)

for n in valores_prueba:
    # Medir tiempo recursivo
    inicio = time.time()
    resultado_rec = factorial_recursivo(n)
    tiempo_rec = time.time() - inicio
    
    # Medir tiempo iterativo
    inicio = time.time()
    resultado_iter = factorial_iterativo(n)
    tiempo_iter = time.time() - inicio
    
    # Medir tiempo recursivo de cola
    inicio = time.time()
    resultado_cola = factorial_cola(n)
    tiempo_cola = time.time() - inicio
    
    print(f"{n:<10} {tiempo_rec:.8f}s     {tiempo_iter:.8f}s     {tiempo_cola:.8f}s")

# Análisis de uso de memoria
print("\\n=== ANÁLISIS DE USO DE MEMORIA ===")
print("Recursivo: Usa O(n) memoria en la pila de llamadas")
print("Iterativo: Usa O(1) memoria (variables constantes)")
print("Rec. Cola: Usa O(n) memoria (Python no optimiza tail recursion)")

# Demostración de desbordamiento de pila
print("\\n=== DEMOSTRACIÓN DE LÍMITE DE RECURSIÓN ===")
print(f"Límite actual de recursión: {sys.getrecursionlimit()}")

try:
    # Esto causaría RecursionError con valores muy grandes
    print("Probando factorial_recursivo(1500)...")
    resultado = factorial_recursivo(1500)
    print("¡Calculado exitosamente!")
except RecursionError:
    print("¡RecursionError! Demasiadas llamadas recursivas.")

# Comparación de claridad del código
print("\\n=== COMPARACIÓN DE CLARIDAD ===")
print("Recursivo: Más declarativo, se asemeja a la definición matemática")
print("  def factorial(n):")
print("      if n == 0: return 1")
print("      return n * factorial(n-1)")
print("")
print("Iterativo: Más imperativo, muestra el proceso paso a paso")
print("  def factorial(n):")
print("      resultado = 1")
print("      for i in range(2, n+1):")
print("          resultado *= i")
print("      return resultado")`

// Ejemplo 2: Fibonacci comparativo
const ejemplo2Code = `
# Fibonacci: Recursivo, Memoización e Iterativo
import time

# ===============================
# IMPLEMENTACIONES
# ===============================

def fib_recursivo_simple(n):
    if n < 0:
        raise ValueError("n debe ser >= 0")
    if n <= 1:
        return n
    return fib_recursivo_simple(n-1) + fib_recursivo_simple(n-2)


def fib_memoizacion(n, memo=None):
    if n < 0:
        raise ValueError("n debe ser >= 0")
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memoizacion(n-1, memo) + fib_memoizacion(n-2, memo)
    return memo[n]


def fib_iterativo(n):
    if n < 0:
        raise ValueError("n debe ser >= 0")
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


def fib_iterativo_lista(n):
    if n < 0:
        raise ValueError("n debe ser >= 0")
    if n <= 1:
        return n
    fib = [0] * (n + 1)
    fib[1] = 1
    for i in range(2, n + 1):
        fib[i] = fib[i-1] + fib[i-2]
    return fib[n]


# ===============================
# MEDICIÓN DE TIEMPO
# ===============================

def medir_tiempo(func, n):
    inicio = time.perf_counter()
    resultado = func(n)
    fin = time.perf_counter()
    return resultado, fin - inicio


# ===============================
# COMPARACIÓN
# ===============================

print("=== COMPARACIÓN: FIBONACCI ===\\n")

valores_prueba = [5, 10, 20, 25, 30]

print(f"{'n':<5} {'Recursivo':<14} {'Memoización':<14} {'Iterativo':<14} {'Lista':<14}")
print("-" * 65)

for n in valores_prueba:
    if n <= 25:
        _, t_rec = medir_tiempo(fib_recursivo_simple, n)
        rec_txt = f"{t_rec:.6f}s"
    else:
        rec_txt = "N/A"

    _, t_memo = medir_tiempo(fib_memoizacion, n)
    _, t_iter = medir_tiempo(fib_iterativo, n)
    _, t_lista = medir_tiempo(fib_iterativo_lista, n)

    print(f"{n:<5} {rec_txt:<14} {t_memo:.6f}s     {t_iter:.6f}s     {t_lista:.6f}s")


# ===============================
# ANÁLISIS
# ===============================

print("\\n=== ANÁLISIS DE COMPLEJIDAD ===")
print("Recursivo simple: O(2^n) - Muy ineficiente")
print("Memoización: O(n) - Buen rendimiento")
print("Iterativo: O(n) - Mejor uso de memoria")
print("Iterativo con lista: O(n) - Más memoria")


# ===============================
# CASO PRÁCTICO (CORREGIDO)
# ===============================

print("\\n=== CASO PRÁCTICO: FIBONACCI(40) ===")
n = 40
repeticiones = 1000

inicio = time.perf_counter()
for _ in range(repeticiones):
    fib_memoizacion(n)
tiempo_memo = time.perf_counter() - inicio

inicio = time.perf_counter()
for _ in range(repeticiones):
    fib_iterativo(n)
tiempo_iter = time.perf_counter() - inicio

print(f"Memoización ({repeticiones} repeticiones): {tiempo_memo:.6f} segundos")
print(f"Iterativo   ({repeticiones} repeticiones): {tiempo_iter:.6f} segundos")

if tiempo_iter > 0:
    print(f"El iterativo es ~{tiempo_memo / tiempo_iter:.2f} veces más rápido")
else:
    print("El iterativo fue prácticamente instantáneo")
`


// Ejemplo 3: Recorrido de directorios
const ejemplo3Code = `# Recorrido de directorios: Recursivo vs Iterativo

import os

# Estructura de ejemplo para simular un sistema de archivos
# (En un entorno real, usaríamos os.walk o os.listdir)

class NodoDirectorio:
    """Simula un nodo de directorio con archivos y subdirectorios."""
    
    def __init__(self, nombre):
        self.nombre = nombre
        self.archivos = []
        self.subdirectorios = []
    
    def agregar_archivo(self, nombre_archivo):
        self.archivos.append(nombre_archivo)
    
    def agregar_subdirectorio(self, subdirectorio):
        self.subdirectorios.append(subdirectorio)
    
    def __str__(self):
        return f"Directorio: {self.nombre} ({len(self.archivos)} archivos, {len(self.subdirectorios)} subdirectorios)"

# Crear estructura de ejemplo
def crear_estructura_ejemplo():
    """Crea una estructura de directorios de ejemplo."""
    
    raiz = NodoDirectorio("raiz")
    
    # Subdirectorios nivel 1
    documentos = NodoDirectorio("documentos")
    imagenes = NodoDirectorio("imagenes")
    
    raiz.agregar_subdirectorio(documentos)
    raiz.agregar_subdirectorio(imagenes)
    
    # Archivos en raíz
    raiz.agregar_archivo("README.txt")
    raiz.agregar_archivo("config.ini")
    
    # Subdirectorios nivel 2
    trabajo = NodoDirectorio("trabajo")
    personal = NodoDirectorio("personal")
    
    documentos.agregar_subdirectorio(trabajo)
    documentos.agregar_subdirectorio(personal)
    
    # Archivos en documentos
    documentos.agregar_archivo("notas.md")
    
    # Archivos en trabajo
    trabajo.agregar_archivo("proyecto.py")
    trabajo.agregar_archivo("informe.pdf")
    
    # Archivos en personal
    personal.agregar_archivo("diario.txt")
    
    # Subdirectorios nivel 3
    vacaciones = NodoDirectorio("vacaciones")
    imagenes.agregar_subdirectorio(vacaciones)
    
    # Archivos en imagenes
    imagenes.agregar_archivo("foto1.jpg")
    imagenes.agregar_archivo("foto2.png")
    
    # Archivos en vacaciones
    vacaciones.agregar_archivo("playa.jpg")
    vacaciones.agregar_archivo("montaña.png")
    
    return raiz

# Versión 1: Recorrido recursivo (DFS natural)
def listar_recursivo(nodo, nivel=0):
    """Lista archivos y directorios recursivamente (DFS)."""
    indentacion = "  " * nivel
    
    # Procesar nodo actual
    print(f"{indentacion}{nodo.nombre}/")
    
    # Listar archivos del directorio actual
    for archivo in nodo.archivos:
        print(f"{indentacion}  - {archivo}")
    
    # Llamar recursivamente para cada subdirectorio
    for subdir in nodo.subdirectorios:
        listar_recursivo(subdir, nivel + 1)

# Versión 2: Recorrido iterativo con pila explícita
def listar_iterativo(raiz):
    """Lista archivos y directorios iterativamente usando una pila."""
    # La pila almacena tuplas (nodo, nivel)
    pila = [(raiz, 0)]
    
    while pila:
        nodo_actual, nivel = pila.pop()
        indentacion = "  " * nivel
        
        # Procesar nodo actual
        print(f"{indentacion}{nodo_actual.nombre}/")
        
        # Listar archivos del directorio actual
        for archivo in nodo_actual.archivos:
            print(f"{indentacion}  - {archivo}")
        
        # Agregar subdirectorios a la pila (en orden inverso para mantener orden)
        for subdir in reversed(nodo_actual.subdirectorios):
            pila.append((subdir, nivel + 1))

# Versión 3: Recorrido iterativo con cola (BFS)
def listar_bfs(raiz):
    """Lista archivos y directorios usando BFS (por niveles)."""
    from collections import deque
    
    cola = deque([(raiz, 0)])
    
    while cola:
        nodo_actual, nivel = cola.popleft()
        indentacion = "  " * nivel
        
        # Procesar nodo actual
        print(f"{indentacion}{nodo_actual.nombre}/")
        
        # Listar archivos del directorio actual
        for archivo in nodo_actual.archivos:
            print(f"{indentacion}  - {archivo}")
        
        # Agregar subdirectorios a la cola
        for subdir in nodo_actual.subdirectorios:
            cola.append((subdir, nivel + 1))

# Demostración
print("=== RECORRIDO DE DIRECTORIOS: RECURSIVO VS ITERATIVO ===\\n")

# Crear estructura de ejemplo
estructura = crear_estructura_ejemplo()

print("1. VERSIÓN RECURSIVA (DFS NATURAL):")
print("=" * 50)
listar_recursivo(estructura)

print("\\n\\n2. VERSIÓN ITERATIVA CON PILA (DFS EXPLÍCITO):")
print("=" * 50)
listar_iterativo(estructura)

print("\\n\\n3. VERSIÓN ITERATIVA CON COLA (BFS):")
print("=" * 50)
listar_bfs(estructura)

# Comparación de características
print("\\n=== COMPARACIÓN DE ENFOQUES ===")
print("\\nRECURSIVO (DFS):")
print("- Ventajas: Código más simple y elegante")
print("- Desventajas: Puede causar desbordamiento de pila en estructuras profundas")
print("- Memoria: O(profundidad) en pila de llamadas")

print("\\nITERATIVO CON PILA (DFS EXPLÍCITO):")
print("- Ventajas: Control total sobre la pila, evita límites de recursión")
print("- Desventajas: Código más complejo, manejo manual de la pila")
print("- Memoria: O(profundidad) en pila explícita")

print("\\nITERATIVO CON COLA (BFS):")
print("- Ventajas: Recorre por niveles, útil para ciertos problemas")
print("- Desventajas: Usa más memoria si el árbol es ancho")
print("- Memoria: O(ancho máximo) en cola")

# Ejemplo real con os.walk (Python ya usa iteración internamente)
print("\\n=== EJEMPLO REAL CON OS.WALK ===")
print("Python implementa os.walk de manera iterativa:")
print("\\nfor raiz, directorios, archivos in os.walk('.'):")
print("    for archivo in archivos:")
print("        print(os.path.join(raiz, archivo))")

# Consejos para elegir enfoque
print("\\n=== ¿CUÁNDO USAR CADA ENFOQUE? ===")
print("\\nUsa recursión cuando:")
print("- El problema es naturalmente recursivo (árboles, divide y vencerás)")
print("- La profundidad es limitada y conocida")
print("- La claridad del código es prioritaria")

print("\\nUsa iteración cuando:")
print("- Necesitas optimizar el uso de memoria")
print("- Trabajas con estructuras muy profundas")
print("- El lenguaje no optimiza la recursión de cola (como Python)")

# Demostración de límite de recursión
print("\\n=== DEMOSTRACIÓN: LÍMITE DE RECURSIÓN ===")
print("En Python, el límite de recursión por defecto es 1000")
print("Para estructuras más profundas, necesitamos:")
print("1. Usar iteración")
print("2. Aumentar sys.setrecursionlimit() (no recomendado)")`


// Quiz
const preguntas = [
  {
    texto: "¿Cuál es la principal diferencia entre recursión e iteración?",
    opciones: [
      { texto: "La recursión usa funciones y la iteración ciclos", correcta: true },
      { texto: "La iteración es más lenta siempre", correcta: false },
      { texto: "La recursión no necesita caso base", correcta: false },
      { texto: "La iteración solo usa funciones", correcta: false }
    ]
  },
  {
    texto: "¿Qué estructura utiliza normalmente la recursión para funcionar?",
    opciones: [
      { texto: "Colas", correcta: false },
      { texto: "Pilas", correcta: true },
      { texto: "Listas", correcta: false },
      { texto: "Diccionarios", correcta: false }
    ]
  },
  {
    texto: "¿Cuál suele ser una ventaja de la iteración frente a la recursión?",
    opciones: [
      { texto: "Código más eficiente en memoria", correcta: true },
      { texto: "Código más corto siempre", correcta: false },
      { texto: "Más fácil de entender en todos los casos", correcta: false },
      { texto: "No necesita ciclos", correcta: false }
    ]
  }
]

</script>