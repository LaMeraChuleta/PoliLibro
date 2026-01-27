<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Cabecera -->
    <HeaderTitle numero="2" titulo="2.1.1 Descripción"></HeaderTitle>

    <!-- Explicación Teórica -->
    <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 my-5">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">i</span>
        Qué es una Pila?
      </h2>
      <div class="text-gray-700 leading-relaxed space-y-3">
        <p>
          Una pila es una estructura de datos <strong>lineal</strong> que sigue el principio
          <strong>LIFO (Last In, First Out)</strong>. Esto significa que el último elemento
          en entrar es el primero en salir.
        </p>
        <p>
          Imagina una pila de platos: solo puedes tomar el plato de arriba (el último que pusiste)
          y solo puedes añadir nuevos platos encima de la pila.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Analogía:</strong> Como el historial de navegación de un navegador web.
          La última página que visitaste es la primera a la que puedes volver con el botón "Atrás".
        </div>
      </div>
    </section>

    <!-- Conceptos Clave -->
    <section class="bg-white rounded-xl shadow-lg p-6 my-5">
      <h2 class="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
        Conceptos Clave
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">+</span>
            <h3 class="font-bold text-gray-800">Push</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Añade un elemento a la parte superior de la pila. Operación de inserción.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">X</span>
            <h3 class="font-bold text-gray-800">Pop</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Elimina y retorna el elemento de la parte superior de la pila.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">E</span>
            <h3 class="font-bold text-gray-800">LIFO</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Last In, First Out. El último en entrar es el primero en salir.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">?</span>
            <h3 class="font-bold text-gray-800">Tope</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Parte superior de la pila. Único punto de acceso para operaciones.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplo 1 -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 1: Implementación Básica de Pila
      </h2>
      <p class="text-gray-700 mb-4">
        Implementación de una pila usando lista de Python con operaciones básicas: push, pop, peek.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo1Code" />
      </div>
    </section>

    <!-- Ejemplo 2 -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 2: Historial de Navegación Web
      </h2>
      <p class="text-gray-700 mb-4">
        Simulación del historial de navegación usando pilas para las operaciones atrás/adelante.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo2Code" />
      </div>
    </section>

    <!-- Ejemplo 3 -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 3: Verificador de Paréntesis Balanceados
      </h2>
      <p class="text-gray-700 mb-4">
        Uso de pilas para verificar si los paréntesis en una expresión están balanceados.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <!-- <section class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">
          Ejercicio Práctico
        </h2>
        <button @click="mostrarSolucion = !mostrarSolucion"
          class="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1 rounded">
          {{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} Solución
        </button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p class="text-gray-700 mb-3">
          <strong>Problema:</strong> Sistema de Deshacer/Rehacer para un Editor de Texto
        </p>

        <div class="text-sm text-gray-600 space-y-2">
          <p><strong>Descripción:</strong> Implementa un editor de texto simple que permita:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Escribir texto (cada escritura se guarda como un estado)</li>
            <li>Deshacer la última acción (volver al estado anterior)</li>
            <li>Rehacer la acción deshecha (volver al estado posterior)</li>
            <li>Mostrar el estado actual del texto</li>
          </ul>
        </div>
      </div> -->

      <!-- Solución -->
      <!-- <div v-if="mostrarSolucion" class="space-y-4">
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="font-bold text-green-800 mb-2">Solución Propuesta</h3>
          <pre class="text-sm text-gray-800 font-mono overflow-x-auto whitespace-pre-wrap">{{ ejercicioSolucion }}</pre>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="font-bold text-green-800 mb-2">Probar Solución</h3>
          <div class="rounded-lg overflow-hidden border border-gray-300">
            <PythonRunner :code="ejercicioSolucion" />
          </div>
        </div>
      </div>
    </section> -->

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción y características"></QuizQuestions>


    <!-- Navegación -->
    <NavigationUnidad textoSiguiente="Siguiente" siguiente="/Unidad/2.1.2" tituloActual="Unidad II • Pilas y Colas"
      mostrarAnterior="false" mostrarSiguiente="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Estado para mostrar solución
const mostrarSolucion = ref(false)

// Ejemplos de código Python - TODOS EN UNA SOLA COLUMNA
const ejemplo1Code = `# Implementación básica de una pila usando lista
class Pila:
    def __init__(self):
        self.elementos = []
    
    def push(self, elemento):
        """Añade un elemento a la parte superior de la pila"""
        self.elementos.append(elemento)
        print(f"Push: {elemento}")
    
    def pop(self):
        """Elimina y retorna el elemento de la parte superior de la pila"""
        if not self.esta_vacia():
            elemento = self.elementos.pop()
            print(f"Pop: {elemento}")
            return elemento
        else:
            print("Error: La pila está vacía")
            return None
    
    def peek(self):
        """Muestra el elemento superior sin eliminarlo"""
        if not self.esta_vacia():
            return self.elementos[-1]
        return None
    
    def esta_vacia(self):
        """Verifica si la pila está vacía"""
        return len(self.elementos) == 0
    
    def tamano(self):
        """Retorna el número de elementos en la pila"""
        return len(self.elementos)
    
    def mostrar(self):
        """Muestra todos los elementos de la pila"""
        print(f"Pila: {self.elementos}")

# Demostración
print("=== EJEMPLO 1: PILA BÁSICA ===")
mi_pila = Pila()

# Añadir elementos
mi_pila.push("A")
mi_pila.push("B")
mi_pila.push("C")

mi_pila.mostrar()
print(f"Elemento superior: {mi_pila.peek()}")
print(f"Tamaño: {mi_pila.tamano()}")

# Eliminar elementos
elemento1 = mi_pila.pop()
elemento2 = mi_pila.pop()

mi_pila.mostrar()
print(f"Pila vacía? {mi_pila.esta_vacia()}")
print(f"Tamaño final: {mi_pila.tamano()}")`

const ejemplo2Code = `# Simulación de historial de navegación web
class NavegadorWeb:
    def __init__(self):
        self.historial_atras = []  # Pila para páginas visitadas
        self.historial_adelante = []  # Pila para páginas adelante
        self.pagina_actual = None
    
    def visitar_pagina(self, url):
        """Visita una nueva página"""
        print(f"\\nVisitando: {url}")
        
        # Si hay página actual, guardarla en historial atrás
        if self.pagina_actual:
            self.historial_atras.append(self.pagina_actual)
        
        # Limpiar historial adelante (nueva navegación)
        self.historial_adelante.clear()
        
        # Establecer nueva página actual
        self.pagina_actual = url
    
    def atras(self):
        """Navega a la página anterior"""
        if self.historial_atras:
            # Mover página actual a historial adelante
            if self.pagina_actual:
                self.historial_adelante.append(self.pagina_actual)
            
            # Tomar última página del historial atrás
            self.pagina_actual = self.historial_atras.pop()
            print(f"Atrás -> {self.pagina_actual}")
        else:
            print("No hay páginas anteriores")
    
    def adelante(self):
        """Navega a la página siguiente"""
        if self.historial_adelante:
            # Mover página actual a historial atrás
            if self.pagina_actual:
                self.historial_atras.append(self.pagina_actual)
            
            # Tomar última página del historial adelante
            self.pagina_actual = self.historial_adelante.pop()
            print(f"Adelante -> {self.pagina_actual}")
        else:
            print("No hay páginas siguientes")
    
    def mostrar_estado(self):
        """Muestra el estado actual del navegador"""
        print(f"\\n--- Estado del Navegador ---")
        print(f"Página actual: {self.pagina_actual}")
        print(f"Historial atrás ({len(self.historial_atras)}): {self.historial_atras}")
        print(f"Historial adelante ({len(self.historial_adelante)}): {self.historial_adelante}")

# Demostración
print("=== EJEMPLO 2: NAVEGADOR WEB ===")
navegador = NavegadorWeb()

# Simulación de navegación
navegador.visitar_pagina("google.com")
navegador.visitar_pagina("youtube.com")
navegador.visitar_pagina("github.com")

navegador.mostrar_estado()

# Navegación con botones atrás/adelante
print("\\n--- Navegación ---")
navegador.atras()
navegador.atras()
navegador.adelante()

navegador.mostrar_estado()`

const ejemplo3Code = `# Verificador de paréntesis balanceados usando pila
def verificar_parentesis(expresion):
    """
    Verifica si los paréntesis en una expresión están balanceados.
    
    Args:
        expresion (str): Expresión a verificar
    
    Returns:
        bool: True si los paréntesis están balanceados, False en caso contrario
    """
    pila = []
    
    # Mapeo de paréntesis de cierre a apertura
    parentesis = {')': '(', ']': '[', '}': '{'}
    
    print(f"Verificando expresión: {expresion}")
    
    for caracter in expresion:
        print(f"\\nCaracter: '{caracter}'")
        
        if caracter in '([{':
            # Es un paréntesis de apertura
            pila.append(caracter)
            print(f"  Push -> Pila: {pila}")
        
        elif caracter in ')]}':
            # Es un paréntesis de cierre
            if not pila:
                print(f"  Error: Paréntesis de cierre '{caracter}' sin apertura correspondiente")
                return False
            
            # Verificar que el último paréntesis abierto sea del mismo tipo
            ultimo = pila.pop()
            print(f"  Pop '{ultimo}' -> Pila: {pila}")
            
            if ultimo != parentesis[caracter]:
                print(f"  Error: Paréntesis '{caracter}' no coincide con '{ultimo}'")
                return False
    
    # Al final, la pila debe estar vacía
    resultado = len(pila) == 0
    print(f"\\nPila final: {pila}")
    print(f"Expresión {'balanceada' if resultado else 'no balanceada'}")
    
    return resultado

# Demostración
print("=== EJEMPLO 3: VERIFICADOR DE PARÉNTESIS ===")

# Casos de prueba
expresiones = [
    "((2 + 3) * 4)",          # Balanceada
    "{[()()]}",               # Balanceada
    "((2 + 3) * 4",           # No balanceada (falta paréntesis de cierre)
    "{[()]})",                # No balanceada (paréntesis extra)
    "a + (b * c) / (d - e)"   # Balanceada
]

for expr in expresiones:
    print("\\n" + "="*40)
    resultado = verificar_parentesis(expr)
    print(f"Resultado final: {expr} -> {resultado}")`

// Solución del ejercicio práctico
const ejercicioSolucion = `# Sistema de Deshacer/Rehacer para Editor de Texto
class EditorTexto:
    def __init__(self):
        self.texto_actual = ""
        self.pila_deshacer = []  # Almacena estados anteriores del texto
        self.pila_rehacer = []   # Almacena estados para rehacer
    
    def escribir(self, nuevo_texto):
        """Escribe nuevo texto y guarda el estado anterior"""
        print(f"\\nEscribiendo: '{nuevo_texto}'")
        
        # Guardar estado actual en pila deshacer
        if self.texto_actual != "":
            self.pila_deshacer.append(self.texto_actual)
        
        # Limpiar pila rehacer (nueva acción invalida rehacer)
        self.pila_rehacer.clear()
        
        # Actualizar texto actual
        self.texto_actual = nuevo_texto
    
    def deshacer(self):
        """Deshace la última acción"""
        if self.pila_deshacer:
            # Mover estado actual a pila rehacer
            self.pila_rehacer.append(self.texto_actual)
            
            # Restaurar estado anterior
            self.texto_actual = self.pila_deshacer.pop()
            print(f"Deshacer -> Texto: '{self.texto_actual}'")
        else:
            print("No hay acciones para deshacer")
    
    def rehacer(self):
        """Rehace la última acción deshecha"""
        if self.pila_rehacer:
            # Mover estado actual a pila deshacer
            self.pila_deshacer.append(self.texto_actual)
            
            # Restaurar estado rehacer
            self.texto_actual = self.pila_rehacer.pop()
            print(f"Rehacer -> Texto: '{self.texto_actual}'")
        else:
            print("No hay acciones para rehacer")
    
    def mostrar_estado(self):
        """Muestra el estado actual del editor"""
        print(f"\\n--- Estado del Editor ---")
        print(f"Texto actual: '{self.texto_actual}'")
        print(f"Pila deshacer ({len(self.pila_deshacer)}): {self.pila_deshacer}")
        print(f"Pila rehacer ({len(self.pila_rehacer)}): {self.pila_rehacer}")
    
    def mostrar_texto(self):
        """Muestra solo el texto actual"""
        print(f"Texto: {self.texto_actual}")

# Demostración del sistema
print("=== SISTEMA DESHACER/REHACER ===")
editor = EditorTexto()

# Secuencia de edición
editor.escribir("Hola")
editor.escribir("Hola Mundo")
editor.escribir("Hola Mundo Python")

editor.mostrar_estado()

# Operaciones deshacer/rehacer
print("\\n--- Operaciones Deshacer/Rehacer ---")
editor.deshacer()  # Vuelve a "Hola Mundo"
editor.deshacer()  # Vuelve a "Hola"
editor.rehacer()   # Vuelve a "Hola Mundo"

editor.mostrar_estado()

# Más operaciones
print("\\n--- Más operaciones ---")
editor.escribir("Texto modificado")
editor.mostrar_estado()
editor.deshacer()
editor.mostrar_estado()`

// Quiz
const preguntas = [
  {
    texto: "¿Qué es una pila (stack) en programación?",
    opciones: [
      { texto: "Estructura FIFO", correcta: false },
      { texto: "Estructura LIFO", correcta: true },
      { texto: "Colección desordenada", correcta: false },
      { texto: "Tipo de dato primitivo", correcta: false }
    ]
  },
  {
    texto: "¿Qué operación se usa para insertar un elemento en una pila?",
    opciones: [
      { texto: "enqueue", correcta: false },
      { texto: "push", correcta: true },
      { texto: "insert", correcta: false },
      { texto: "append", correcta: false }
    ]
  },
  {
    texto: "¿Dónde se agrega o elimina un elemento en una pila?",
    opciones: [
      { texto: "Al inicio", correcta: false },
      { texto: "En cualquier posición", correcta: false },
      { texto: "En el tope", correcta: true },
      { texto: "Al final y al inicio", correcta: false }
    ]
  }
]


</script>