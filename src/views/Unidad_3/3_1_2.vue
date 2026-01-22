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
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Implementación comparativa del cálculo factorial
          </div>
          <PythonRunner :code="ejemplo1Code" />
        </div>

        <!-- Ejemplo 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 2: Fibonacci - Tres Enfoques</h3>
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Recursivo simple, recursivo con memoización e iterativo
          </div>
          <PythonRunner :code="ejemplo2Code" />
        </div>

        <!-- Ejemplo 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 3: Recorrido de Directorios</h3>
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Solución recursiva natural vs iterativa con pila explícita
          </div>
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <section>
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
    </section>

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
const ejemplo2Code = `# Fibonacci: Recursivo, Memoización e Iterativo

import time

# Versión 1: Fibonacci recursivo simple (ineficiente)
def fib_recursivo_simple(n):
    """Fibonacci recursivo sin optimización."""
    if n <= 1:
        return n
    return fib_recursivo_simple(n-1) + fib_recursivo_simple(n-2)

# Versión 2: Fibonacci con memoización
def fib_memoizacion(n, memo=None):
    """Fibonacci recursivo con memoización."""
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    resultado = fib_memoizacion(n-1, memo) + fib_memoizacion(n-2, memo)
    memo[n] = resultado
    return resultado

# Versión 3: Fibonacci iterativo
def fib_iterativo(n):
    """Fibonacci iterativo eficiente."""
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# Versión 4: Fibonacci iterativo con lista
def fib_iterativo_lista(n):
    """Fibonacci iterativo almacenando todos los valores."""
    if n <= 1:
        return n
    
    fib = [0] * (n + 1)
    fib[1] = 1
    
    for i in range(2, n + 1):
        fib[i] = fib[i-1] + fib[i-2]
    
    return fib[n]

# Comparación de rendimiento
print("=== COMPARACIÓN: FIBONACCI DIFERENTES IMPLEMENTACIONES ===\\n")

# Función para medir tiempo
def medir_tiempo(func, n, nombre):
    inicio = time.time()
    resultado = func(n)
    tiempo = time.time() - inicio
    return resultado, tiempo

valores_prueba = [5, 10, 20, 30, 35]

print(f"{'n':<5} {'Rec. Simple':<15} {'Memoización':<15} {'Iterativo':<15} {'Iter. Lista':<15}")
print("-" * 70)

for n in valores_prueba:
    # Solo probar recursivo simple para valores pequeños
    if n <= 30:
        _, tiempo_rec = medir_tiempo(fib_recursivo_simple, n, "Rec. Simple")
    else:
        tiempo_rec = float('inf')
    
    _, tiempo_memo = medir_tiempo(fib_memoizacion, n, "Memoización")
    _, tiempo_iter = medir_tiempo(fib_iterativo, n, "Iterativo")
    _, tiempo_lista = medir_tiempo(fib_iterativo_lista, n, "Iter. Lista")
    
    print(f"{n:<5} {tiempo_rec:.8f}s     {tiempo_memo:.8f}s     {tiempo_iter:.8f}s     {tiempo_lista:.8f}s")

# Análisis de complejidad
print("\\n=== ANÁLISIS DE COMPLEJIDAD ===")
print("Recursivo simple: O(2^n) - Exponencial, muy ineficiente")
print("Memoización: O(n) - Lineal, buena mejora")
print("Iterativo: O(n) - Lineal, eficiente en memoria")
print("Iterativo con lista: O(n) - Lineal, usa más memoria pero útil para accesos múltiples")

# Demostración de llamadas repetidas
print("\\n=== DEMOSTRACIÓN DE LLAMADAS REPETIDAS ===")
print("Para fib_recursivo_simple(5):")
print("fib(5) = fib(4) + fib(3)")
print("fib(4) = fib(3) + fib(2)  // fib(3) se calcula DOS veces")
print("fib(3) = fib(2) + fib(1)  // fib(2) se calcula TRES veces")
print("fib(2) = fib(1) + fib(0)")
print("")
print("Con memoización, cada fib(i) se calcula solo UNA vez.")

# Uso de memoria comparativo
print("\\n=== USO DE MEMORIA COMPARATIVO ===")
print("Recursivo simple: O(n) pila, pero O(2^n) cálculos")
print("Memoización: O(n) memoria para cache + O(n) pila")
print("Iterativo: O(1) memoria (solo 2 variables)")
print("Iterativo lista: O(n) memoria para la lista")

# Caso práctico: calcular Fibonacci de 40
print("\\n=== CASO PRÁCTICO: FIBONACCI(40) ===")
n = 40

print(f"Calculando Fibonacci({n}) con diferentes métodos:")

# Solo métodos eficientes para n=40
inicio = time.time()
resultado_memo = fib_memoizacion(n)
tiempo_memo = time.time() - inicio
print(f"Memoización: {resultado_memo} en {tiempo_memo:.4f} segundos")

inicio = time.time()
resultado_iter = fib_iterativo(n)
tiempo_iter = time.time() - inicio
print(f"Iterativo: {resultado_iter} en {tiempo_iter:.4f} segundos")

print(f"\\nEl iterativo es {tiempo_memo/tiempo_iter:.1f} veces más rápido que la memoización")`

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

// Ejercicio y solución
const ejercicioCode = `# Búsqueda Binaria: Implementación Recursiva e Iterativa

def busqueda_binaria_recursiva(lista, elemento, inicio=0, fin=None):
    """
    Implementa búsqueda binaria de manera recursiva.
    
    Args:
        lista: lista ordenada de elementos
        elemento: elemento a buscar
        inicio: índice inicial del segmento (para recursión)
        fin: índice final del segmento (para recursión)
    
    Returns:
        Índice del elemento si se encuentra, -1 en caso contrario
    """
    # TODO: Implementar versión recursiva
    # Caso base: segmento vacío -> retornar -1
    # Calcular punto medio
    # Si elemento == lista[medio]: retornar medio
    # Si elemento < lista[medio]: buscar en mitad izquierda
    # Si elemento > lista[medio]: buscar en mitad derecha
    pass

def busqueda_binaria_iterativa(lista, elemento):
    """
    Implementa búsqueda binaria de manera iterativa.
    
    Args:
        lista: lista ordenada de elementos
        elemento: elemento a buscar
    
    Returns:
        Índice del elemento si se encuentra, -1 en caso contrario
    """
    # TODO: Implementar versión iterativa
    # Usar while inicio <= fin
    # Calcular punto medio en cada iteración
    # Ajustar inicio o fin según comparación
    # Retornar índice si encuentra, -1 si termina el bucle
    pass

# Pruebas básicas
print("=== PRUEBAS DE BÚSQUEDA BINARIA ===\\n")

lista_prueba = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

print(f"Lista ordenada: {lista_prueba}")

# Prueba 1: Elemento en la lista
elemento = 7
print(f"\\nBuscando {elemento}:")
print(f"Recursiva: {busqueda_binaria_recursiva(lista_prueba, elemento)}")
print(f"Iterativa: {busqueda_binaria_iterativa(lista_prueba, elemento)}")

# Prueba 2: Elemento no en la lista
elemento = 8
print(f"\\nBuscando {elemento} (no está en la lista):")
print(f"Recursiva: {busqueda_binaria_recursiva(lista_prueba, elemento)}")
print(f"Iterativa: {busqueda_binaria_iterativa(lista_prueba, elemento)}")

# Prueba 3: Primer elemento
elemento = 1
print(f"\\nBuscando {elemento} (primero):")
print(f"Recursiva: {busqueda_binaria_recursiva(lista_prueba, elemento)}")
print(f"Iterativa: {busqueda_binaria_iterativa(lista_prueba, elemento)}")

# Prueba 4: Último elemento
elemento = 19
print(f"\\nBuscando {elemento} (último):")
print(f"Recursiva: {busqueda_binaria_recursiva(lista_prueba, elemento)}")
print(f"Iterativa: {busqueda_binaria_iterativa(lista_prueba, elemento)}")

# Prueba 5: Lista vacía
lista_vacia = []
elemento = 5
print(f"\\nBuscando {elemento} en lista vacía:")
print(f"Recursiva: {busqueda_binaria_recursiva(lista_vacia, elemento)}")
print(f"Iterativa: {busqueda_binaria_iterativa(lista_vacia, elemento)}")`

const solucionCode = `# Solución: Búsqueda Binaria Recursiva e Iterativa

def busqueda_binaria_recursiva(lista, elemento, inicio=0, fin=None):
    """
    Implementa búsqueda binaria de manera recursiva.
    
    Complejidad: O(log n) tiempo, O(log n) memoria (por pila de recursión)
    """
    # Inicializar fin si no se proporciona
    if fin is None:
        fin = len(lista) - 1
    
    # Caso base: segmento vacío (elemento no encontrado)
    if inicio > fin:
        return -1
    
    # Calcular punto medio
    medio = (inicio + fin) // 2
    
    # Debug: mostrar segmento actual
    print(f"  Recursivo: buscando en [{inicio}-{fin}], medio={medio}, valor={lista[medio] if inicio <= fin <= len(lista)-1 else 'N/A'}")
    
    # Caso 1: elemento encontrado
    if lista[medio] == elemento:
        return medio
    
    # Caso 2: buscar en mitad izquierda (elemento es menor)
    elif elemento < lista[medio]:
        return busqueda_binaria_recursiva(lista, elemento, inicio, medio - 1)
    
    # Caso 3: buscar en mitad derecha (elemento es mayor)
    else:
        return busqueda_binaria_recursiva(lista, elemento, medio + 1, fin)

def busqueda_binaria_iterativa(lista, elemento):
    """
    Implementa búsqueda binaria de manera iterativa.
    
    Complejidad: O(log n) tiempo, O(1) memoria
    """
    inicio = 0
    fin = len(lista) - 1
    
    while inicio <= fin:
        # Calcular punto medio
        medio = (inicio + fin) // 2
        
        # Debug: mostrar segmento actual
        print(f"  Iterativo: buscando en [{inicio}-{fin}], medio={medio}, valor={lista[medio]}")
        
        # Caso 1: elemento encontrado
        if lista[medio] == elemento:
            return medio
        
        # Caso 2: buscar en mitad izquierda
        elif elemento < lista[medio]:
            fin = medio - 1
        
        # Caso 3: buscar en mitad derecha
        else:
            inicio = medio + 1
    
    # Elemento no encontrado
    return -1

# Versión mejorada con manejo de errores
def busqueda_binaria_iterativa_mejorada(lista, elemento):
    """Versión iterativa con mejor manejo de casos bordes."""
    if not lista:  # Lista vacía
        return -1
    
    inicio = 0
    fin = len(lista) - 1
    
    while inicio <= fin:
        medio = inicio + (fin - inicio) // 2  # Evita posible overflow en otros lenguajes
        
        if lista[medio] == elemento:
            return medio
        elif lista[medio] < elemento:
            inicio = medio + 1
        else:
            fin = medio - 1
    
    return -1

# Pruebas exhaustivas
print("=== SOLUCIÓN: BÚSQUEDA BINARIA ===\\n")

lista_prueba = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(f"Lista ordenada: {lista_prueba}")
print(f"Tamaño: {len(lista_prueba)} elementos\\n")

# Prueba 1: Elemento en medio
print("Prueba 1: Buscando 7 (en medio)")
print("Recursiva:")
indice_rec = busqueda_binaria_recursiva(lista_prueba, 7)
print(f"Resultado: índice {indice_rec}\\n")

print("Iterativa:")
indice_iter = busqueda_binaria_iterativa(lista_prueba, 7)
print(f"Resultado: índice {indice_iter}\\n")

# Prueba 2: Elemento no existente
print("Prueba 2: Buscando 8 (no existe)")
print("Recursiva:")
indice_rec = busqueda_binaria_recursiva(lista_prueba, 8)
print(f"Resultado: índice {indice_rec}\\n")

print("Iterativa:")
indice_iter = busqueda_binaria_iterativa(lista_prueba, 8)
print(f"Resultado: índice {indice_iter}\\n")

# Prueba 3: Primer elemento
print("Prueba 3: Buscando 1 (primero)")
print("Recursiva:")
indice_rec = busqueda_binaria_recursiva(lista_prueba, 1)
print(f"Resultado: índice {indice_rec}\\n")

print("Iterativa:")
indice_iter = busqueda_binaria_iterativa(lista_prueba, 1)
print(f"Resultado: índice {indice_iter}\\n")

# Prueba 4: Último elemento
print("Prueba 4: Buscando 19 (último)")
print("Recursiva:")
indice_rec = busqueda_binaria_recursiva(lista_prueba, 19)
print(f"Resultado: índice {indice_rec}\\n")

print("Iterativa:")
indice_iter = busqueda_binaria_iterativa(lista_prueba, 19)
print(f"Resultado: índice {indice_iter}\\n")

# Prueba 5: Lista más grande
print("Prueba 5: Lista más grande (100 elementos)")
lista_grande = list(range(0, 100, 2))  # Números pares de 0 a 98
elemento = 42

print(f"Buscando {elemento} en lista de {len(lista_grande)} elementos")

indice_rec = busqueda_binaria_recursiva(lista_grande, elemento)
print(f"Recursiva: índice {indice_rec}")

indice_iter = busqueda_binaria_iterativa(lista_grande, elemento)
print(f"Iterativa: índice {indice_iter}")

# Análisis de rendimiento
print("\\n=== ANÁLISIS DE RENDIMIENTO ===")
print("\\nAmbas versiones tienen complejidad O(log n) en tiempo")
print("\\nRecursiva:")
print("- Ventaja: Código más elegante y cercano al algoritmo matemático")
print("- Desventaja: Usa O(log n) memoria para la pila de llamadas")
print("- Riesgo: Desbordamiento de pila para listas muy grandes (en teoría)")

print("\\nIterativa:")
print("- Ventaja: Usa O(1) memoria (solo variables locales)")
print("- Desventaja: Código ligeramente más complejo")
print("- Recomendada: Para producción y listas muy grandes")

print("\\nEn Python, la recursión es menos eficiente en memoria,")
print("pero para búsqueda binaria en listas normales, ambas son aceptables.")

# Demostración de máximo número de llamadas recursivas
print("\\n=== PROFUNDIDAD DE RECURSIÓN ===")
print("Para una lista de tamaño n, la profundidad máxima de recursión es log2(n)")
print(f"Para n=1,000,000: log2(1,000,000) ≈ {int(1000000**0.5)} llamadas")
print("Muy por debajo del límite de recursión de Python (1000 por defecto)")

# Casos especiales
print("\\n=== CASOS ESPECIALES ===")
print("Lista vacía: ambas versiones retornan -1 inmediatamente")
print("Un solo elemento: máximo 1 comparación")
print("Elemento ausente: log2(n) comparaciones")`

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