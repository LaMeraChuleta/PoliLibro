<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <!-- Header -->
    <header class="max-w-4xl mx-auto mb-8 md:mb-12 border-b border-gray-300 pb-6">
      <div class="flex items-center gap-2 text-gray-600 mb-2">
        <span class="font-mono text-sm">Unidad 3.1.1</span>
        <span class="text-gray-400">•</span>
        <span class="text-sm">Recursividad</span>
      </div>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800">
        Introducción a la Recursividad
      </h1>
      <p class="mt-4 text-gray-600 max-w-3xl">
        La recursividad es una técnica donde una función se llama a sí misma para resolver problemas dividiéndolos en subproblemas más pequeños. Es fundamental para algoritmos complejos y estructuras de datos jerárquicas.
      </p>
    </header>

    <!-- Contenido principal -->
    <main class="max-w-4xl mx-auto space-y-8">
      
      <!-- Tarjetas de Conceptos Clave -->
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div class="text-2xl font-mono text-blue-600 mb-3">+</div>
            <h3 class="font-bold text-gray-800 mb-2">Caso Base</h3>
            <p class="text-gray-600 text-sm">
              Condición que detiene la recursión. Sin caso base, la función se llamaría infinitamente.
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div class="text-2xl font-mono text-blue-600 mb-3">X</div>
            <h3 class="font-bold text-gray-800 mb-2">Caso Recursivo</h3>
            <p class="text-gray-600 text-sm">
              Llamada a la misma función con parámetros más pequeños que acercan al caso base.
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div class="text-2xl font-mono text-blue-600 mb-3">E</div>
            <h3 class="font-bold text-gray-800 mb-2">Pila de Llamadas</h3>
            <p class="text-gray-600 text-sm">
              Estructura que almacena llamadas pendientes. Cada llamada recursiva ocupa espacio en memoria.
            </p>
          </div>
          
          <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div class="text-2xl font-mono text-blue-600 mb-3">?</div>
            <h3 class="font-bold text-gray-800 mb-2">Recursión vs Iteración</h3>
            <p class="text-gray-600 text-sm">
              Cualquier problema recursivo tiene solución iterativa, pero la recursión simplifica algunos problemas.
            </p>
          </div>
        </div>
      </section>

      <!-- Ejemplos de Código -->
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejemplos Prácticos</h2>
        
        <div class="space-y-10">
          <!-- Ejemplo 1 -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 1: Factorial Recursivo</h3>
            <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
              # Cálculo factorial usando recursividad
            </div>
            <PythonRunner :code="ejemplo1Code" />
          </div>
          
          <!-- Ejemplo 2 -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 2: Conteo Regresivo</h3>
            <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
              # Visualización de la pila de llamadas recursivas
            </div>
            <PythonRunner :code="ejemplo2Code" />
          </div>
          
          <!-- Ejemplo 3 -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 3: Fibonacci Recursivo</h3>
            <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
              # Serie Fibonacci con y sin memoización
            </div>
            <PythonRunner :code="ejemplo3Code" />
          </div>
        </div>
      </section>

      <!-- Ejercicio Práctico -->
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio: Suma de Dígitos</h2>
        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Suma recursiva de dígitos</h3>
            <p class="text-gray-600 mb-4">
              Implementa una función recursiva que sume los dígitos de un número entero positivo. Por ejemplo:
            </p>
            <ul class="list-disc pl-5 text-gray-600 space-y-2 mb-6">
              <li><code>suma_digitos(123)</code> debe retornar 6 (1 + 2 + 3)</li>
              <li><code>suma_digitos(9876)</code> debe retornar 30 (9 + 8 + 7 + 6)</li>
              <li>El caso base debe ser cuando el número sea menor que 10</li>
              <li>Debe funcionar para cualquier número positivo</li>
            </ul>
            <div class="bg-gray-100 p-4 rounded-lg">
              <PythonRunner :code="ejercicioCode" />
            </div>
          </div>
          
          <button
            @click="mostrarSolucion = !mostrarSolucion"
            class="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <span>{{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} solución</span>
            <svg class="w-4 h-4" :class="{ 'rotate-180': mostrarSolucion }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          
          <div v-if="mostrarSolucion" class="mt-6 pt-6 border-t border-gray-200">
            <h4 class="font-bold text-gray-800 mb-3">Solución Propuesta:</h4>
            <PythonRunner :code="solucionCode" />
          </div>
        </div>
      </section>

      <!-- Quiz -->
      <section>
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Evaluación de Conceptos</h2>
        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div v-for="(pregunta, index) in preguntas" :key="index" class="mb-8 last:mb-0">
            <h3 class="font-semibold text-gray-800 mb-4">
              {{ index + 1 }}. {{ pregunta.texto }}
            </h3>
            <div class="space-y-3">
              <label
                v-for="opcion in pregunta.opciones"
                :key="opcion.valor"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-300 hover:bg-gray-50 cursor-pointer"
                :class="{
                  'border-green-500 bg-green-50': respuestasSeleccionadas[index] === opcion.valor && opcion.correcta,
                  'border-red-500 bg-red-50': respuestasSeleccionadas[index] === opcion.valor && !opcion.correcta && mostrarResultados
                }"
              >
                <input
                  type="radio"
                  :name="'pregunta-' + index"
                  :value="opcion.valor"
                  v-model="respuestasSeleccionadas[index]"
                  class="text-blue-600"
                >
                <span class="flex-1">{{ opcion.texto }}</span>
              </label>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-200">
            <div v-if="mostrarResultados" class="text-lg font-semibold">
              <span :class="puntuacion >= 2 ? 'text-green-600' : 'text-red-600'">
                {{ puntuacion }}/{{ preguntas.length }} correctas
              </span>
            </div>
            <div v-else class="text-gray-500">
              Selecciona todas las respuestas
            </div>
            
            <button
              @click="validarQuiz"
              class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verificar Respuestas
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Ejemplo 1: Factorial recursivo
const ejemplo1Code = `# Cálculo factorial usando recursividad

def factorial(n):
    """
    Calcula el factorial de n recursivamente.
    
    Caso base: factorial(0) = 1
    Caso recursivo: factorial(n) = n * factorial(n-1)
    """
    # Caso base: si n es 0, retornar 1
    if n == 0:
        print(f"factorial(0) = 1 (caso base)")
        return 1
    else:
        # Caso recursivo: n * factorial(n-1)
        print(f"Calculando factorial({n}) = {n} * factorial({n-1})")
        resultado = n * factorial(n - 1)
        print(f"factorial({n}) = {resultado}")
        return resultado

# Prueba de la función factorial
print("=== CÁLCULO FACTORIAL RECURSIVO ===")
numero = 5
print(f"Calculando factorial de {numero}:")
resultado = factorial(numero)
print(f"\\nResultado final: {numero}! = {resultado}")

# Demostración de cómo funciona la pila de llamadas
print("\\n=== TRAZA DE LLAMADAS RECURSIVAS ===")
print("La pila de llamadas crece hasta llegar al caso base,")
print("luego se resuelve hacia atrás:")

def factorial_simple(n):
    if n == 0:
        return 1
    return n * factorial_simple(n - 1)

print(f"\\n3! = {factorial_simple(3)}")
print("Proceso: 3 * factorial(2)")
print("         3 * (2 * factorial(1))")
print("         3 * (2 * (1 * factorial(0)))")
print("         3 * (2 * (1 * 1)) = 6")`

// Ejemplo 2: Conteo regresivo
const ejemplo2Code = `# Visualización de la pila de llamadas recursivas

def conteo_regresivo(n, profundidad=0):
    """
    Muestra el conteo regresivo desde n hasta 0.
    
    Args:
        n: número inicial
        profundidad: nivel de recursión actual (para indentación)
    """
    indentacion = "  " * profundidad
    
    # Caso base: si n es menor que 0, terminar
    if n < 0:
        print(f"{indentacion}Fin del conteo (n = {n})")
        return
    
    # Mostrar el número actual
    print(f"{indentacion}conteo_regresivo({n})")
    
    if n == 0:
        # Caso base: llegar a 0
        print(f"{indentacion}¡Cero! (caso base alcanzado)")
        print(f"{indentacion}Regresando...")
    else:
        # Caso recursivo: llamar con n-1
        print(f"{indentacion}Llamando a conteo_regresivo({n-1})")
        conteo_regresivo(n - 1, profundidad + 1)
        
        # Mostrar lo que sucede al regresar de la recursión
        print(f"{indentacion}Regresando de conteo_regresivo({n-1})")
        print(f"{indentacion}nivel {profundidad}, n = {n}")

# Prueba del conteo regresivo
print("=== CONTEOREGRESIVO RECURSIVO ===")
print("Este ejemplo muestra cómo funciona la pila de llamadas:\\n")
conteo_regresivo(3)

# Ejemplo adicional: sumatoria recursiva
print("\\n=== SUMATORIA RECURSIVA ===")

def sumatoria(n):
    """Calcula la suma de 1 hasta n recursivamente."""
    # Caso base: si n es 1, retornar 1
    if n == 1:
        return 1
    # Caso recursivo: n + sumatoria(n-1)
    return n + sumatoria(n - 1)

print(f"Sumatoria de 1 a 5: {sumatoria(5)}")
print("Proceso: 5 + sumatoria(4)")
print("         5 + (4 + sumatoria(3))")
print("         5 + (4 + (3 + sumatoria(2)))")
print("         5 + (4 + (3 + (2 + sumatoria(1))))")
print("         5 + (4 + (3 + (2 + 1))) = 15")`

// Ejemplo 3: Fibonacci con y sin memoización
const ejemplo3Code = `# Serie Fibonacci: comparación de implementaciones

import time

# Versión 1: Fibonacci recursivo simple (ineficiente)
def fibonacci_simple(n):
    """
    Versión recursiva simple de Fibonacci.
    Muy ineficiente para valores grandes por llamadas repetidas.
    """
    if n <= 1:
        return n
    return fibonacci_simple(n - 1) + fibonacci_simple(n - 2)

# Versión 2: Fibonacci con memoización (eficiente)
def fibonacci_memo(n, memo=None):
    """
    Versión recursiva con memoización (optimización).
    Almacena resultados previos para evitar cálculos repetidos.
    """
    if memo is None:
        memo = {}
    
    # Si ya calculamos este valor, retornarlo
    if n in memo:
        return memo[n]
    
    # Caso base
    if n <= 1:
        return n
    
    # Calcular recursivamente y almacenar resultado
    resultado = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    memo[n] = resultado
    return resultado

# Versión 3: Fibonacci iterativo (sin recursión)
def fibonacci_iterativo(n):
    """Versión iterativa de Fibonacci."""
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# Comparación de rendimiento
print("=== COMPARACIÓN DE IMPLEMENTACIONES FIBONACCI ===\\n")

# Calcular Fibonacci de 10 con las tres versiones
valor = 10

print(f"Calculando Fibonacci({valor}):")

# Versión simple
print("\\n1. Versión recursiva simple:")
start = time.time()
resultado_simple = fibonacci_simple(valor)
tiempo_simple = time.time() - start
print(f"   Resultado: {resultado_simple}")
print(f"   Tiempo: {tiempo_simple:.6f} segundos")

# Versión con memoización
print("\\n2. Versión con memoización:")
start = time.time()
resultado_memo = fibonacci_memo(valor)
tiempo_memo = time.time() - start
print(f"   Resultado: {resultado_memo}")
print(f"   Tiempo: {tiempo_memo:.6f} segundos")

# Versión iterativa
print("\\n3. Versión iterativa:")
start = time.time()
resultado_iter = fibonacci_iterativo(valor)
tiempo_iter = time.time() - start
print(f"   Resultado: {resultado_iter}")
print(f"   Tiempo: {tiempo_iter:.6f} segundos")

# Demostración del problema de llamadas repetidas
print("\\n=== PROBLEMA DE LLAMADAS REPETIDAS ===")
print("Para fibonacci_simple(5):")
print("fib(5) = fib(4) + fib(3)")
print("fib(4) = fib(3) + fib(2)  <- fib(3) se calcula DOS veces!")
print("fib(3) = fib(2) + fib(1)")
print("fib(2) = fib(1) + fib(0)")
print("\\nLa memoización evita recalcular valores ya conocidos.")`

// Ejercicio y solución
const ejercicioCode = `# Suma recursiva de dígitos
# Completa la función suma_digitos según las especificaciones

def suma_digitos(n):
    """
    Calcula la suma de los dígitos de un número entero positivo.
    
    Args:
        n: número entero positivo
        
    Returns:
        Suma de los dígitos de n
    
    Ejemplos:
        suma_digitos(123) -> 6
        suma_digitos(9876) -> 30
    """
    # TODO: Implementar la función recursiva
    # Caso base: si n es menor que 10, retornar n
    # Caso recursivo: último dígito + suma_digitos(resto del número)
    pass

# Pruebas básicas
print("=== PRUEBAS DE SUMA DE DÍGITOS ===\\n")

# Prueba 1
numero = 123
print(f"suma_digitos({numero}) debería ser 6")
print(f"Tu resultado: {suma_digitos(numero) if suma_digitos(numero) else 'No implementado'}")

# Prueba 2
numero = 9876
print(f"\\nsuma_digitos({numero}) debería ser 30")
print(f"Tu resultado: {suma_digitos(numero) if suma_digitos(numero) else 'No implementado'}")

# Prueba 3
numero = 7
print(f"\\nsuma_digitos({numero}) debería ser 7 (caso base)")
print(f"Tu resultado: {suma_digitos(numero) if suma_digitos(numero) else 'No implementado'}")`

const solucionCode = `# Solución: Suma recursiva de dígitos

def suma_digitos(n):
    """
    Calcula la suma de los dígitos de un número entero positivo.
    
    Estrategia:
    1. Caso base: si n < 10, retornar n (solo un dígito)
    2. Caso recursivo: último_digito + suma_digitos(resto)
       - último_digito = n % 10 (resto de división por 10)
       - resto = n // 10 (división entera por 10)
    """
    # Caso base: si el número tiene un solo dígito
    if n < 10:
        print(f"suma_digitos({n}) -> {n} (caso base)")
        return n
    
    # Caso recursivo: separar último dígito y llamar recursivamente
    ultimo_digito = n % 10
    resto_numero = n // 10
    
    print(f"suma_digitos({n}) = {ultimo_digito} + suma_digitos({resto_numero})")
    
    # Llamada recursiva
    suma_resto = suma_digitos(resto_numero)
    resultado = ultimo_digito + suma_resto
    
    print(f"suma_digitos({n}) = {ultimo_digito} + {suma_resto} = {resultado}")
    return resultado

# Pruebas exhaustivas
print("=== SOLUCIÓN: SUMA RECURSIVA DE DÍGITOS ===\\n")

# Prueba 1: Número pequeño
print("Prueba 1: suma_digitos(123)")
resultado1 = suma_digitos(123)
print(f"Resultado: {resultado1}\\n")

# Prueba 2: Número más grande
print("Prueba 2: suma_digitos(9876)")
resultado2 = suma_digitos(9876)
print(f"Resultado: {resultado2}\\n")

# Prueba 3: Caso base
print("Prueba 3: suma_digitos(7)")
resultado3 = suma_digitos(7)
print(f"Resultado: {resultado3}\\n")

# Prueba 4: Número de un solo dígito
print("Prueba 4: suma_digitos(9)")
resultado4 = suma_digitos(9)
print(f"Resultado: {resultado4}\\n")

# Prueba 5: Número grande
print("Prueba 5: suma_digitos(123456789)")
resultado5 = suma_digitos(123456789)
print(f"Resultado: {resultado5}\\n")

# Versión alternativa más compacta
print("=== VERSIÓN ALTERNATIVA COMPACTA ===")

def suma_digitos_compacta(n):
    """Versión más compacta de la misma función."""
    return n if n < 10 else (n % 10) + suma_digitos_compacta(n // 10)

# Demostración de la versión compacta
test_cases = [123, 9876, 7, 555, 1001]
print("\\nPruebas con versión compacta:")
for num in test_cases:
    resultado = suma_digitos_compacta(num)
    print(f"suma_digitos_compacta({num}) = {resultado}")

# Análisis del proceso recursivo
print("\\n=== ANÁLISIS DEL PROCESO RECURSIVO ===")
print("Para suma_digitos(123):")
print("1. 123 < 10? No -> 3 + suma_digitos(12)")
print("2. 12 < 10? No -> 2 + suma_digitos(1)")
print("3. 1 < 10? Sí -> 1 (caso base)")
print("4. Regreso: 2 + 1 = 3")
print("5. Regreso: 3 + 3 = 6")
print("Resultado final: 6")`

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es el propósito principal del caso base en una función recursiva?",
    opciones: [
      { texto: "Acelerar la ejecución de la función", valor: "a", correcta: false },
      { texto: "Garantizar que la recursión eventualmente termine", valor: "b", correcta: true },
      { texto: "Mejorar la legibilidad del código", valor: "c", correcta: false },
      { texto: "Reducir el uso de memoria", valor: "d", correcta: false }
    ]
  },
  {
    texto: "¿Qué ocurre en la pila de llamadas (call stack) durante una ejecución recursiva?",
    opciones: [
      { texto: "Cada llamada recursiva ocupa un nuevo espacio en la pila hasta llegar al caso base", valor: "a", correcta: true },
      { texto: "Todas las llamadas comparten el mismo espacio de memoria", valor: "b", correcta: false },
      { texto: "La pila se vacía después de cada llamada recursiva", valor: "c", correcta: false },
      { texto: "Solo se almacenan las llamadas con parámetros pares", valor: "d", correcta: false }
    ]
  },
  {
    texto: "¿Por qué la implementación recursiva simple de Fibonacci (sin memoización) es ineficiente para valores grandes?",
    opciones: [
      { texto: "Usa demasiada memoria para almacenar resultados intermedios", valor: "a", correcta: false },
      { texto: "Calcula los mismos valores muchas veces debido a llamadas repetidas", valor: "b", correcta: true },
      { texto: "No puede manejar números mayores que 1000", valor: "c", correcta: false },
      { texto: "Requiere convertir todos los números a cadenas de texto", valor: "d", correcta: false }
    ]
  }
]

const respuestasSeleccionadas = ref([null, null, null])
const mostrarResultados = ref(false)

const puntuacion = computed(() => {
  return preguntas.reduce((total, pregunta, index) => {
    const respuesta = respuestasSeleccionadas.value[index]
    const opcionCorrecta = pregunta.opciones.find(op => op.correcta)
    return total + (respuesta === opcionCorrecta?.valor ? 1 : 0)
  }, 0)
})

const validarQuiz = () => {
  mostrarResultados.value = true
}

const mostrarSolucion = ref(false)
</script>