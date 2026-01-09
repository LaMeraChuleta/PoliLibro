<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="border-b border-gray-200 pb-4">
      <h1 class="text-3xl font-bold text-gray-800">Capítulo 4.1.2: Recorridos: Pre, In y Post Orden</h1>
      <p class="text-gray-600 mt-2">Estrategias sistemáticas para visitar todos los nodos de un árbol binario.</p>
    </header>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Recorridos Sistemáticos en Árboles Binarios</h2>
      <p class="text-gray-700 leading-relaxed">
        Los recorridos de árboles binarios son algoritmos que visitan todos los nodos de un árbol de manera sistemática. 
        Los tres recorridos principales (preorden, inorden y postorden) difieren en el orden en que visitan la raíz, 
        el subárbol izquierdo y el subárbol derecho. Estos recorridos son fundamentales para operaciones como copiar árboles, 
        evaluar expresiones, serializar estructuras y validar propiedades. Cada recorrido tiene aplicaciones específicas 
        basadas en el orden de procesamiento de los nodos.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Preorden</h3>
          </div>
          <p class="text-gray-600 text-sm">Raíz → Izquierdo → Derecho. Útil para copiar árboles y expresiones prefijas.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Calculadora: árbol de expresión ((2+3)*4) se evalúa con postorden.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">Inorden solo produce orden ascendente en ABB. En árboles generales no.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">Pre/In/Post se refieren a la posición de la raíz respecto a los subárboles.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Implementación de los tres recorridos clásicos</h3>
        <p class="text-gray-600 mb-4">Versiones recursivas e iterativas de preorden, inorden y postorden.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Aplicación: evaluación de expresiones aritméticas</h3>
        <p class="text-gray-600 mb-4">Uso de postorden para evaluar expresiones representadas como árboles.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Aplicación: serialización y deserialización</h3>
        <p class="text-gray-600 mb-4">Uso de preorden para convertir árboles a strings y viceversa.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Dado un árbol binario que representa una expresión aritmética, implementa 
          una función <code>construir_desde_pre_in</code> que reconstruya el árbol a partir de sus recorridos 
          preorden e inorden. Luego, usa postorden para evaluar la expresión. Prueba con la expresión del ejemplo 2.
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

// Ejemplo 1: Implementación de recorridos
const ejemplo1Code = `class Nodo:
    """
    Clase que representa un nodo en un árbol binario.
    """
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

def preorden_recursivo(raiz):
    """
    Recorrido Preorden (Raíz, Izquierdo, Derecho) - recursivo.
    Retorna lista con el orden de visita.
    """
    resultado = []
    
    def recorrer(nodo):
        if nodo is not None:
            resultado.append(nodo.valor)      # Visitar raíz
            recorrer(nodo.izquierdo)          # Recorrer izquierdo
            recorrer(nodo.derecho)            # Recorrer derecho
    
    recorrer(raiz)
    return resultado

def inorden_recursivo(raiz):
    """
    Recorrido Inorden (Izquierdo, Raíz, Derecho) - recursivo.
    En un ABB, produce valores en orden ascendente.
    """
    resultado = []
    
    def recorrer(nodo):
        if nodo is not None:
            recorrer(nodo.izquierdo)          # Recorrer izquierdo
            resultado.append(nodo.valor)      # Visitar raíz
            recorrer(nodo.derecho)            # Recorrer derecho
    
    recorrer(raiz)
    return resultado

def postorden_recursivo(raiz):
    """
    Recorrido Postorden (Izquierdo, Derecho, Raíz) - recursivo.
    Útil para eliminar árboles o evaluar expresiones.
    """
    resultado = []
    
    def recorrer(nodo):
        if nodo is not None:
            recorrer(nodo.izquierdo)          # Recorrer izquierdo
            recorrer(nodo.derecho)            # Recorrer derecho
            resultado.append(nodo.valor)      # Visitar raíz
    
    recorrer(raiz)
    return resultado

# Versiones iterativas (usando pilas)
def preorden_iterativo(raiz):
    """
    Preorden iterativo usando una pila.
    """
    if raiz is None:
        return []
    
    resultado = []
    pila = [raiz]
    
    while pila:
        nodo = pila.pop()
        resultado.append(nodo.valor)
        
        # Agregar derecho primero para que izquierdo se procese primero (pila LIFO)
        if nodo.derecho is not None:
            pila.append(nodo.derecho)
        if nodo.izquierdo is not None:
            pila.append(nodo.izquierdo)
    
    return resultado

def inorden_iterativo(raiz):
    """
    Inorden iterativo usando una pila.
    """
    resultado = []
    pila = []
    actual = raiz
    
    while actual is not None or pila:
        # Ir lo más a la izquierda posible
        while actual is not None:
            pila.append(actual)
            actual = actual.izquierdo
        
        # Procesar nodo
        actual = pila.pop()
        resultado.append(actual.valor)
        
        # Moverse al subárbol derecho
        actual = actual.derecho
    
    return resultado

# Crear un árbol de ejemplo
def crear_arbol_ejemplo():
    """
    Crea un árbol binario de ejemplo:
            A
           / \\
          B   C
         / \\   \\
        D   E   F
    """
    raiz = Nodo('A')
    raiz.izquierdo = Nodo('B')
    raiz.derecho = Nodo('C')
    raiz.izquierdo.izquierdo = Nodo('D')
    raiz.izquierdo.derecho = Nodo('E')
    raiz.derecho.derecho = Nodo('F')
    return raiz

# Probar los recorridos
print("=== ÁRBOL DE EJEMPLO ===")
print("      A")
print("     / \\")
print("    B   C")
print("   / \\   \\")
print("  D   E   F")

arbol = crear_arbol_ejemplo()

print("\\n=== RECORRIDOS RECURSIVOS ===")
print(f"Preorden:  {preorden_recursivo(arbol)}")
print(f"Inorden:   {inorden_recursivo(arbol)}")
print(f"Postorden: {postorden_recursivo(arbol)}")

print("\\n=== RECORRIDOS ITERATIVOS ===")
print(f"Preorden iterativo:  {preorden_iterativo(arbol)}")
print(f"Inorden iterativo:   {inorden_iterativo(arbol)}")

print("\\n=== REGLAS MNEMOTÉCNICAS ===")
print("Preorden:  Raíz → Izquierdo → Derecho")
print("Inorden:   Izquierdo → Raíz → Derecho")
print("Postorden: Izquierdo → Derecho → Raíz")

print("\\n=== APLICACIONES ===")
print("Preorden:  Copiar árboles, prefijo (+AB)")
print("Inorden:   Obtener orden en ABB, infijo (A+B)")
print("Postorden: Evaluar expresiones, posfijo (AB+)")`

// Ejemplo 2: Evaluación de expresiones aritméticas
const ejemplo2Code = `class NodoExpresion:
    """
    Nodo para árboles de expresión aritmética.
    """
    def __init__(self, valor, es_operador=False):
        self.valor = valor
        self.es_operador = es_operador
        self.izquierdo = None
        self.derecho = None

def construir_arbol_expresion():
    """
    Construye un árbol que representa la expresión: ((2 + 3) * (4 - 1))
    
    Representación:
            *
           / \\
          +   -
         / \\ / \\
        2  3 4  1
    """
    # Nivel 2: operandos
    nodo_2 = NodoExpresion('2')
    nodo_3 = NodoExpresion('3')
    nodo_4 = NodoExpresion('4')
    nodo_1 = NodoExpresion('1')
    
    # Nivel 1: operadores
    nodo_mas = NodoExpresion('+', es_operador=True)
    nodo_menos = NodoExpresion('-', es_operador=True)
    
    nodo_mas.izquierdo = nodo_2
    nodo_mas.derecho = nodo_3
    
    nodo_menos.izquierdo = nodo_4
    nodo_menos.derecho = nodo_1
    
    # Nivel 0: operador principal
    nodo_multi = NodoExpresion('*', es_operador=True)
    nodo_multi.izquierdo = nodo_mas
    nodo_multi.derecho = nodo_menos
    
    return nodo_multi

def evaluar_expresion_postorden(raiz):
    """
    Evalúa una expresión aritmética usando recorrido postorden.
    Postorden es ideal porque procesa operandos antes de operadores.
    """
    def evaluar(nodo):
        if not nodo.es_operador:
            # Es un operando (número)
            return float(nodo.valor)
        
        # Es un operador, evaluar subexpresiones primero
        izquierdo_val = evaluar(nodo.izquierdo)
        derecho_val = evaluar(nodo.derecho)
        
        # Aplicar operación
        if nodo.valor == '+':
            return izquierdo_val + derecho_val
        elif nodo.valor == '-':
            return izquierdo_val - derecho_val
        elif nodo.valor == '*':
            return izquierdo_val * derecho_val
        elif nodo.valor == '/':
            return izquierdo_val / derecho_val
        else:
            raise ValueError(f"Operador no soportado: {nodo.valor}")
    
    return evaluar(raiz)

def expresion_a_string(raiz, formato='infijo'):
    """
    Convierte árbol de expresión a string en diferentes formatos.
    """
    if not raiz.es_operador:
        return raiz.valor
    
    izquierdo = expresion_a_string(raiz.izquierdo, formato)
    derecho = expresion_a_string(raiz.derecho, formato)
    
    if formato == 'infijo':
        # Formato infijo: (izquierdo operador derecho)
        return f"({izquierdo} {raiz.valor} {derecho})"
    elif formato == 'prefijo':
        # Formato prefijo: operador izquierdo derecho
        return f"{raiz.valor} {izquierdo} {derecho}"
    elif formato == 'postfijo':
        # Formato postfijo: izquierdo derecho operador
        return f"{izquierdo} {derecho} {raiz.valor}"
    else:
        raise ValueError(f"Formato no válido: {formato}")

# Crear y evaluar expresión
print("=== EVALUACIÓN DE EXPRESIÓN ARITMÉTICA ===")
expresion_arbol = construir_arbol_expresion()

print("\\nExpresión representada:")
print("      *")
print("     / \\")
print("    +   -")
print("   / \\ / \\")
print("  2  3 4  1")

print("\\n=== DIFERENTES REPRESENTACIONES ===")
print(f"Infijo:   {expresion_a_string(expresion_arbol, 'infijo')}")
print(f"Prefijo:  {expresion_a_string(expresion_arbol, 'prefijo')}")
print(f"Postfijo: {expresion_a_string(expresion_arbol, 'postfijo')}")

print("\\n=== EVALUACIÓN ===")
resultado = evaluar_expresion_postorden(expresion_arbol)
print(f"Resultado: {resultado}")
print(f"Verificación: (2 + 3) * (4 - 1) = 5 * 3 = 15")

# Ejemplo adicional: expresión más compleja
def construir_expresion_compleja():
    """
    Expresión: (3 * (4 + 5)) / (6 - 2)
    """
    # Operandos
    nodo_3 = NodoExpresion('3')
    nodo_4 = NodoExpresion('4')
    nodo_5 = NodoExpresion('5')
    nodo_6 = NodoExpresion('6')
    nodo_2 = NodoExpresion('2')
    
    # Subexpresiones
    nodo_mas = NodoExpresion('+', es_operador=True)
    nodo_mas.izquierdo = nodo_4
    nodo_mas.derecho = nodo_5
    
    nodo_mult = NodoExpresion('*', es_operador=True)
    nodo_mult.izquierdo = nodo_3
    nodo_mult.derecho = nodo_mas
    
    nodo_menos = NodoExpresion('-', es_operador=True)
    nodo_menos.izquierdo = nodo_6
    nodo_menos.derecho = nodo_2
    
    nodo_div = NodoExpresion('/', es_operador=True)
    nodo_div.izquierdo = nodo_mult
    nodo_div.derecho = nodo_menos
    
    return nodo_div

print("\\n=== EXPRESIÓN COMPLEJA ===")
exp_compleja = construir_expresion_compleja()
print(f"Infijo: {expresion_a_string(exp_compleja, 'infijo')}")
print(f"Postfijo: {expresion_a_string(exp_compleja, 'postfijo')}")
resultado_complejo = evaluar_expresion_postorden(exp_compleja)
print(f"Resultado: {resultado_complejo}")
print(f"Verificación: (3 * (4 + 5)) / (6 - 2) = (3 * 9) / 4 = 27 / 4 = 6.75")

print("\\n=== RELACIÓN CON RECORRIDOS ===")
print("Postfijo = Postorden del árbol de expresión")
print("Prefijo  = Preorden del árbol de expresión")
print("Infijo   = Inorden del árbol de expresión")`

// Ejemplo 3: Serialización y deserialización
const ejemplo3Code = `class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

def serializar_preorden(raiz):
    """
    Serializa un árbol binario a string usando preorden.
    Usa '#' para representar nodos nulos.
    """
    def serializar(nodo):
        if nodo is None:
            return '# '
        
        # Preorden: raíz, izquierdo, derecho
        resultado = f"{nodo.valor} "
        resultado += serializar(nodo.izquierdo)
        resultado += serializar(nodo.derecho)
        return resultado
    
    return serializar(raiz).strip()

def deserializar_preorden(serializado):
    """
    Reconstruye un árbol binario desde string serializado con preorden.
    """
    valores = iter(serializado.split())
    
    def deserializar():
        try:
            val = next(valores)
        except StopIteration:
            return None
        
        if val == '#':
            return None
        
        nodo = Nodo(val)
        nodo.izquierdo = deserializar()
        nodo.derecho = deserializar()
        return nodo
    
    return deserializar()

def serializar_inorden(raiz):
    """
    Serializa usando inorden (no suficiente para reconstruir árbol único).
    """
    def serializar(nodo):
        if nodo is None:
            return '# '
        
        resultado = serializar(nodo.izquierdo)
        resultado += f"{nodo.valor} "
        resultado += serializar(nodo.derecho)
        return resultado
    
    return serializar(raiz).strip()

def serializar_pre_in(raiz):
    """
    Serializa usando preorden e inorden juntos (suficiente para reconstrucción única).
    """
    preorden = serializar_preorden(raiz)
    inorden = serializar_inorden(raiz)
    return f"Preorden: {preorden}\\nInorden: {inorden}"

# Crear árbol de prueba
def crear_arbol_prueba():
    """
    Crea árbol de prueba:
            A
           / \\
          B   C
         /   / \\
        D   E   F
    """
    raiz = Nodo('A')
    raiz.izquierdo = Nodo('B')
    raiz.derecho = Nodo('C')
    raiz.izquierdo.izquierdo = Nodo('D')
    raiz.derecho.izquierdo = Nodo('E')
    raiz.derecho.derecho = Nodo('F')
    return raiz

print("=== SERIALIZACIÓN DE ÁRBOLES ===")
arbol_original = crear_arbol_prueba()

print("\\nÁrbol original:")
print("      A")
print("     / \\")
print("    B   C")
print("   /   / \\")
print("  D   E   F")

print("\\n=== SERIALIZACIÓN PREORDEN ===")
serializado = serializar_preorden(arbol_original)
print(f"Serializado: {serializado}")

print("\\n=== DESERIALIZACIÓN ===")
arbol_reconstruido = deserializar_preorden(serializado)

# Verificar que los recorridos son iguales
def preorden_lista(raiz):
    resultado = []
    def recorrer(nodo):
        if nodo is not None:
            resultado.append(nodo.valor)
            recorrer(nodo.izquierdo)
            recorrer(nodo.derecho)
    recorrer(raiz)
    return resultado

original_pre = preorden_lista(arbol_original)
reconstruido_pre = preorden_lista(arbol_reconstruido)

print(f"Preorden original:    {original_pre}")
print(f"Preorden reconstruido: {reconstruido_pre}")
print(f"¿Son iguales? {original_pre == reconstruido_pre}")

print("\\n=== SERIALIZACIÓN PREORDEN + INORDEN ===")
pre_in = serializar_pre_in(arbol_original)
print(pre_in)

# Ejemplo con árbol más simple
print("\\n=== EJEMPLO MÁS SIMPLE ===")
arbol_simple = Nodo('R')
arbol_simple.izquierdo = Nodo('I')
arbol_simple.derecho = Nodo('D')

print("Árbol simple: R -> I, D")
serializado_simple = serializar_preorden(arbol_simple)
print(f"Serializado: {serializado_simple}")

# Deserializar y verificar
arbol_simple_reconst = deserializar_preorden(serializado_simple)
print(f"Preorden reconstruido: {preorden_lista(arbol_simple_reconst)}")

print("\\n=== LÍMITES DE LA SERIALIZACIÓN ===")
print("1. Solo preorden o solo inorden NO son suficientes para reconstruir único árbol")
print("2. Preorden + Inorden SÍ son suficientes")
print("3. Postorden + Inorden también son suficientes")

print("\\n=== EJEMPLO: DOS ÁRBOLES CON MISMO PREORDEN ===")
# Árbol 1
arbol1 = Nodo('A')
arbol1.izquierdo = Nodo('B')
arbol1.izquierdo.izquierdo = Nodo('C')

# Árbol 2
arbol2 = Nodo('A')
arbol2.izquierdo = Nodo('B')
arbol2.izquierdo.derecho = Nodo('C')

print("\\nÁrbol 1 (C es hijo izquierdo de B):")
print("Preorden:", preorden_lista(arbol1))
print("Inorden:", serializar_inorden(arbol1))

print("\\nÁrbol 2 (C es hijo derecho de B):")
print("Preorden:", preorden_lista(arbol2))
print("Inorden:", serializar_inorden(arbol2))

print("\\nMismo preorden (A B C) pero diferente inorden → árboles diferentes")`

// Ejercicio práctico - Solución
const solucionCode = `class NodoExpresion:
    def __init__(self, valor, es_operador=False):
        self.valor = valor
        self.es_operador = es_operador
        self.izquierdo = None
        self.derecho = None

def construir_desde_pre_in(preorden, inorden):
    """
    Reconstruye un árbol binario a partir de sus recorridos preorden e inorden.
    Asume que no hay valores duplicados en el árbol.
    """
    if not preorden or not inorden:
        return None
    
    # El primer elemento de preorden es la raíz
    valor_raiz = preorden[0]
    es_operador = valor_raiz in '+-*/'
    raiz = NodoExpresion(valor_raiz, es_operador)
    
    # Encontrar la raíz en inorden
    indice_raiz = inorden.index(valor_raiz)
    
    # Subárbol izquierdo: elementos a la izquierda de la raíz en inorden
    inorden_izq = inorden[:indice_raiz]
    # Subárbol derecho: elementos a la derecha de la raíz en inorden
    inorden_der = inorden[indice_raiz + 1:]
    
    # Los siguientes len(inorden_izq) elementos en preorden son el preorden del subárbol izquierdo
    preorden_izq = preorden[1:1 + len(inorden_izq)]
    # El resto son el preorden del subárbol derecho
    preorden_der = preorden[1 + len(inorden_izq):]
    
    # Construir recursivamente
    raiz.izquierdo = construir_desde_pre_in(preorden_izq, inorden_izq)
    raiz.derecho = construir_desde_pre_in(preorden_der, inorden_der)
    
    return raiz

def evaluar_postorden(raiz):
    """
    Evalúa una expresión usando recorrido postorden.
    """
    if not raiz.es_operador:
        return float(raiz.valor)
    
    izquierdo = evaluar_postorden(raiz.izquierdo)
    derecho = evaluar_postorden(raiz.derecho)
    
    if raiz.valor == '+':
        return izquierdo + derecho
    elif raiz.valor == '-':
        return izquierdo - derecho
    elif raiz.valor == '*':
        return izquierdo * derecho
    elif raiz.valor == '/':
        return izquierdo / derecho
    else:
        raise ValueError(f"Operador no soportado: {raiz.valor}")

def obtener_preorden(raiz):
    """
    Obtiene el recorrido preorden de un árbol.
    """
    if raiz is None:
        return []
    
    resultado = [raiz.valor]
    resultado.extend(obtener_preorden(raiz.izquierdo))
    resultado.extend(obtener_preorden(raiz.derecho))
    return resultado

def obtener_inorden(raiz):
    """
    Obtiene el recorrido inorden de un árbol.
    """
    if raiz is None:
        return []
    
    resultado = []
    resultado.extend(obtener_inorden(raiz.izquierdo))
    resultado.append(raiz.valor)
    resultado.extend(obtener_inorden(raiz.derecho))
    return resultado

def obtener_postorden(raiz):
    """
    Obtiene el recorrido postorden de un árbol.
    """
    if raiz is None:
        return []
    
    resultado = []
    resultado.extend(obtener_postorden(raiz.izquierdo))
    resultado.extend(obtener_postorden(raiz.derecho))
    resultado.append(raiz.valor)
    return resultado

# Prueba con la expresión del ejemplo 2: ((2 + 3) * (4 - 1))
print("=== RECONSTRUCCIÓN DE ÁRBOL DE EXPRESIÓN ===")

# Para la expresión ((2 + 3) * (4 - 1))
# Preorden: * + 2 3 - 4 1
# Inorden: 2 + 3 * 4 - 1

preorden_exp = ['*', '+', '2', '3', '-', '4', '1']
inorden_exp = ['2', '+', '3', '*', '4', '-', '1']

print(f"Preorden dado: {preorden_exp}")
print(f"Inorden dado:  {inorden_exp}")

print("\\nReconstruyendo árbol...")
arbol_reconstruido = construir_desde_pre_in(preorden_exp, inorden_exp)

print("\\n=== VERIFICACIÓN ===")
preorden_calculado = obtener_preorden(arbol_reconstruido)
inorden_calculado = obtener_inorden(arbol_reconstruido)
postorden_calculado = obtener_postorden(arbol_reconstruido)

print(f"Preorden calculado:  {preorden_calculado}")
print(f"Inorden calculado:   {inorden_calculado}")
print(f"Postorden calculado: {postorden_calculado}")

print("\\n¿Coincide con el preorden original?", preorden_calculado == preorden_exp)
print("¿Coincide con el inorden original?", inorden_calculado == inorden_exp)

print("\\n=== EVALUACIÓN DE LA EXPRESIÓN ===")
resultado = evaluar_postorden(arbol_reconstruido)
print(f"Resultado de la evaluación: {resultado}")
print(f"Verificación: (2 + 3) * (4 - 1) = 5 * 3 = 15")

# Prueba con expresión más compleja
print("\\n=== PRUEBA CON EXPRESIÓN COMPLEJA ===")
# Expresión: (3 + (4 * 5)) / (6 - 2)
# Preorden: / + 3 * 4 5 - 6 2
# Inorden: 3 + 4 * 5 / 6 - 2

preorden_complejo = ['/', '+', '3', '*', '4', '5', '-', '6', '2']
inorden_complejo = ['3', '+', '4', '*', '5', '/', '6', '-', '2']

print(f"\\nExpresión: (3 + (4 * 5)) / (6 - 2)")
print(f"Preorden: {preorden_complejo}")
print(f"Inorden:  {inorden_complejo}")

arbol_complejo = construir_desde_pre_in(preorden_complejo, inorden_complejo)
resultado_complejo = evaluar_postorden(arbol_complejo)

print(f"\\nResultado: {resultado_complejo}")
print(f"Verificación: (3 + (4*5)) / (6-2) = (3+20)/4 = 23/4 = 5.75")

# Función para mostrar el árbol de forma gráfica
def mostrar_arbol(raiz, nivel=0, prefijo="Raíz: "):
    """
    Muestra el árbol de forma jerárquica.
    """
    if raiz is not None:
        print("   " * nivel + prefijo + raiz.valor + (" (op)" if raiz.es_operador else ""))
        if raiz.izquierdo is not None or raiz.derecho is not None:
            mostrar_arbol(raiz.izquierdo, nivel + 1, "Izq: ")
            mostrar_arbol(raiz.derecho, nivel + 1, "Der: ")

print("\\n=== REPRESENTACIÓN DEL ÁRBOL ===")
print("\\nPrimer árbol (simple):")
mostrar_arbol(arbol_reconstruido)

print("\\n\\nSegundo árbol (complejo):")
mostrar_arbol(arbol_complejo)

# Demostración del proceso paso a paso
print("\\n=== PROCESO DE RECONSTRUCCIÓN (explicado) ===")
print("\\nPara preorden: *, +, 2, 3, -, 4, 1")
print("Para inorden: 2, +, 3, *, 4, -, 1")
print("\\nPaso 1: Raíz es '*' (primer elemento de preorden)")
print("Paso 2: En inorden, '*' está en posición 3")
print("   - Izquierda: 2, +, 3")
print("   - Derecha: 4, -, 1")
print("Paso 3: Para subárbol izquierdo:")
print("   - Preorden: +, 2, 3 (siguientes 3 elementos)")
print("   - Inorden: 2, +, 3")
print("   - Raíz: '+'")
print("Paso 4: Continuar recursivamente...")

# Verificación de casos límite
print("\\n=== CASOS LÍMITE ===")
print("\\nCaso 1: Árbol vacío")
arbol_vacio = construir_desde_pre_in([], [])
print("Árbol vacío reconstruido:", "Sí" if arbol_vacio is None else "No")

print("\\nCaso 2: Solo raíz")
arbol_raiz = construir_desde_pre_in(['5'], ['5'])
print("Árbol con solo raíz 5:")
print("  Es operador?", arbol_raiz.es_operador)
print("  Valor:", arbol_raiz.valor)

print("\\nCaso 3: Expresión inválida (preorden e inorden inconsistentes)")
try:
    arbol_invalido = construir_desde_pre_in(['+', '2', '3'], ['2', '3', '+'])
    print("Reconstrucción exitosa (inesperado)")
except ValueError as e:
    print(f"Error esperado: {e}")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Qué recorrido de árbol produce los valores en el orden: raíz, izquierdo, derecho?",
    opciones: [
      { letra: "A", texto: "Preorden", correcta: true },
      { letra: "B", texto: "Inorden", correcta: false },
      { letra: "C", texto: "Postorden", correcta: false },
      { letra: "D", texto: "Por niveles", correcta: false }
    ],
    respuestaCorrecta: "A",
    explicacion: "Preorden visita primero la raíz, luego el subárbol izquierdo completo, y finalmente el subárbol derecho."
  },
  {
    texto: "¿Cuál es la aplicación principal del recorrido postorden en árboles de expresión?",
    opciones: [
      { letra: "A", texto: "Obtener la expresión en notación infija", correcta: false },
      { letra: "B", texto: "Evaluar la expresión aritmética", correcta: true },
      { letra: "C", texto: "Copiar el árbol de expresión", correcta: false },
      { letra: "D", texto: "Validar si es un ABB", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Postorden procesa operandos antes de operadores, lo que permite evaluar expresiones aritméticas correctamente."
  },
  {
    texto: "¿Cuáles dos recorridos son necesarios para reconstruir un árbol binario único?",
    opciones: [
      { letra: "A", texto: "Preorden + Postorden", correcta: false },
      { letra: "B", texto: "Preorden + Inorden", correcta: true },
      { letra: "C", texto: "Solo Preorden", correcta: false },
      { letra: "D", texto: "Inorden + Postorden", correcta: true }
    ],
    respuestaCorrecta: "B",
    explicacion: "Tanto Preorden+Inorden como Inorden+Postorden son suficientes para reconstruir un árbol binario único (asumiendo sin duplicados)."
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