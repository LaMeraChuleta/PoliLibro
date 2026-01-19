<template>
  <div class="container mx-auto px-4 py-6">

    <!-- Cabecera -->
    <HeaderTitle numero="2" titulo="2.2.1 Descripción"></HeaderTitle>

    <!-- Explicación Teórica -->
    <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">i</span>
        Concepto de Cola (Queue)
      </h2>
      <div class="text-gray-700 leading-relaxed space-y-3">
        <p>
          Una cola es una estructura de datos <strong>lineal</strong> que sigue el principio
          <strong>FIFO (First In, First Out)</strong>. Esto significa que el primer elemento
          en entrar es el primero en salir, similar a una fila de personas esperando su turno.
        </p>
        <p>
          Las operaciones en una cola se realizan en dos extremos diferentes: los elementos
          se añaden por el <strong>final (rear)</strong> y se eliminan por el <strong>frente (front)</strong>.
          Esta estructura es fundamental en sistemas que requieren procesamiento en orden de llegada.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Analogía:</strong> Como una fila en un banco. La primera persona que llega
          es la primera en ser atendida, y las nuevas personas se colocan al final de la fila.
        </div>
      </div>
    </section>

    <!-- Conceptos Clave -->
    <section class="bg-white rounded-xl shadow-lg p-6 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
        Conceptos Clave
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">+</span>
            <h3 class="font-bold text-gray-800">Enqueue (Encolar)</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Añade un elemento al final de la cola. También conocido como "push" o "insert".
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">X</span>
            <h3 class="font-bold text-gray-800">Dequeue (Desencolar)</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Elimina y retorna el elemento del frente de la cola. También conocido como "pop" o "remove".
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">E</span>
            <h3 class="font-bold text-gray-800">Principio FIFO</h3>
          </div>
          <p class="text-gray-600 text-sm">
            First In, First Out. El primer elemento en entrar es el primero en salir.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">?</span>
            <h3 class="font-bold text-gray-800">Front y Rear</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Front: primer elemento (se elimina). Rear: último elemento (se añade).
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplo 1: Implementación Básica -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 1: Implementación Básica de Cola
      </h2>
      <p class="text-gray-700 mb-4">
        Implementación de una cola usando lista de Python con operaciones básicas:
        enqueue, dequeue, front, is_empty.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo1Code" />
      </div>
    </section>

    <!-- Ejemplo 2: Simulador de Atención al Cliente -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 2: Sistema de Atención al Cliente
      </h2>
      <p class="text-gray-700 mb-4">
        Simulación de un sistema de atención al cliente donde los clientes llegan,
        esperan en cola y son atendidos en orden de llegada.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo2Code" />
      </div>
    </section>

    <!-- Ejemplo 3: Sistema de Impresión -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 3: Sistema de Gestión de Trabajos de Impresión
      </h2>
      <p class="text-gray-700 mb-4">
        Implementación de un sistema de cola de impresión donde los trabajos se
        encolan y se procesan en el orden en que fueron recibidos.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">
          Ejercicio Práctico: Sistema de Gestión de Pedidos
        </h2>
        <button @click="mostrarSolucion = !mostrarSolucion"
          class="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1 rounded">
          {{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} Solución
        </button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p class="text-gray-700 mb-3">
          <strong>Problema:</strong> Implementa un sistema de gestión de pedidos para un restaurante
          de comida rápida que maneje múltiples tipos de pedidos y prioridades.
        </p>

        <div class="text-sm text-gray-600 space-y-2">
          <p><strong>Requisitos:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Los clientes llegan y realizan pedidos (se encolan)</li>
            <li>Existen dos tipos de pedidos: normales y prioritarios (urgentes)</li>
            <li>Los pedidos prioritarios deben atenderse antes que los normales</li>
            <li>Dentro de cada categoría, se atiende por orden de llegada (FIFO)</li>
            <li>El sistema debe procesar pedidos y mostrar el estado actual</li>
            <li>Implementar funciones para añadir, procesar y mostrar pedidos</li>
          </ul>
        </div>
      </div>

      <!-- Solución -->
      <div v-if="mostrarSolucion" class="space-y-4">
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
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz Colas"></QuizQuestions>

    <!-- Información del capítulo -->
    <div class="text-center text-sm text-gray-500 pt-8 border-t border-gray-300">
      Capítulo 2.2 • Colas - Descripción
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Estado para mostrar solución
const mostrarSolucion = ref(false)

// Ejemplos de código Python - Versiones simplificadas
const ejemplo1Code = `# Implementación básica de una cola usando lista
class Cola:
    def __init__(self):
        self.elementos = []
    
    def enqueue(self, elemento):
        """Añade un elemento al final de la cola"""
        self.elementos.append(elemento)
        print(f"Encolado: {elemento}")
    
    def dequeue(self):
        """Elimina y retorna el elemento del frente de la cola"""
        if self.is_empty():
            print("Error: Cola vacía")
            return None
        elemento = self.elementos.pop(0)
        print(f"Desencolado: {elemento}")
        return elemento
    
    def front(self):
        """Retorna el elemento del frente sin eliminarlo"""
        if self.is_empty():
            return None
        return self.elementos[0]
    
    def is_empty(self):
        """Verifica si la cola está vacía"""
        return len(self.elementos) == 0
    
    def size(self):
        """Retorna el número de elementos en la cola"""
        return len(self.elementos)
    
    def mostrar(self):
        """Muestra todos los elementos de la cola"""
        print(f"Cola: {self.elementos}")

# Demostración
print("=== EJEMPLO 1: COLA BÁSICA ===")
cola = Cola()

# Encolar elementos
cola.enqueue("A")
cola.enqueue("B")
cola.enqueue("C")

cola.mostrar()
print(f"Frente: {cola.front()}")
print(f"Tamaño: {cola.size()}")

# Desencolar elementos
elemento1 = cola.dequeue()
elemento2 = cola.dequeue()

cola.mostrar()
print(f"¿Vacía? {cola.is_empty()}")
print(f"Tamaño final: {cola.size()}")`

const ejemplo2Code = `# Sistema de Atención al Cliente
class SistemaAtencion:
    def __init__(self):
        self.cola_clientes = []
    
    def llegar_cliente(self, nombre):
        """Un cliente llega y se encola"""
        self.cola_clientes.append(nombre)
        print(f"{nombre} ha llegado. Posición: {len(self.cola_clientes)}")
    
    def atender_cliente(self):
        """Atiende al siguiente cliente en la cola"""
        if self.cola_clientes:
            cliente = self.cola_clientes.pop(0)
            print(f"Atendiendo a: {cliente}")
            return cliente
        else:
            print("No hay clientes en espera")
            return None
    
    def mostrar_cola(self):
        """Muestra la cola actual"""
        print(f"\\nClientes en espera ({len(self.cola_clientes)}):")
        for i, cliente in enumerate(self.cola_clientes, 1):
            print(f"  {i}. {cliente}")

# Demostración
print("=== EJEMPLO 2: ATENCIÓN AL CLIENTE ===")
sistema = SistemaAtencion()

# Clientes llegan
sistema.llegar_cliente("Ana")
sistema.llegar_cliente("Carlos")
sistema.llegar_cliente("María")

sistema.mostrar_cola()

# Atender clientes
sistema.atender_cliente()
sistema.atender_cliente()

sistema.mostrar_cola()

# Más clientes
sistema.llegar_cliente("Pedro")
sistema.atender_cliente()

sistema.mostrar_cola()`

const ejemplo3Code = `# Sistema de Impresión
class SistemaImpresion:
    def __init__(self):
        self.cola_trabajos = []
    
    def agregar_trabajo(self, documento, paginas):
        """Agrega un trabajo de impresión a la cola"""
        trabajo = {
            'documento': documento,
            'paginas': paginas
        }
        self.cola_trabajos.append(trabajo)
        print(f"Trabajo agregado: {documento} ({paginas} páginas)")
    
    def imprimir_siguiente(self):
        """Imprime el siguiente trabajo en la cola"""
        if self.cola_trabajos:
            trabajo = self.cola_trabajos.pop(0)
            print(f"Imprimiendo: {trabajo['documento']}")
            print(f"  Páginas: {trabajo['paginas']}")
            return trabajo
        else:
            print("No hay trabajos para imprimir")
            return None
    
    def mostrar_cola(self):
        """Muestra los trabajos en cola"""
        print(f"\\nTrabajos en cola ({len(self.cola_trabajos)}):")
        for i, trabajo in enumerate(self.cola_trabajos, 1):
            print(f"  {i}. {trabajo['documento']} - {trabajo['paginas']} páginas")

# Demostración
print("=== EJEMPLO 3: SISTEMA DE IMPRESIÓN ===")
impresora = SistemaImpresion()

# Agregar trabajos
impresora.agregar_trabajo("Informe.pdf", 10)
impresora.agregar_trabajo("Presentación.pptx", 5)
impresora.agregar_trabajo("Contrato.docx", 3)

impresora.mostrar_cola()

# Imprimir trabajos
impresora.imprimir_siguiente()
impresora.imprimir_siguiente()

impresora.mostrar_cola()

# Agregar más trabajos
impresora.agregar_trabajo("Factura.pdf", 2)
impresora.imprimir_siguiente()

impresora.mostrar_cola()`

// Solución del ejercicio práctico - Versión simplificada
const ejercicioSolucion = `# Sistema de Gestión de Pedidos
class SistemaPedidos:
    def __init__(self):
        self.cola_normal = []
        self.cola_prioritaria = []
    
    def nuevo_pedido(self, cliente, items, prioritario=False):
        """Crea un nuevo pedido"""
        pedido = {
            'cliente': cliente,
            'items': items,
            'prioritario': prioritario
        }
        
        if prioritario:
            self.cola_prioritaria.append(pedido)
            print(f"Pedido prioritario para {cliente}")
        else:
            self.cola_normal.append(pedido)
            print(f"Pedido normal para {cliente}")
        
        print(f"  Items: {', '.join(items)}")
    
    def procesar_pedido(self):
        """Procesa el siguiente pedido"""
        # Primero los prioritarios, luego los normales
        if self.cola_prioritaria:
            pedido = self.cola_prioritaria.pop(0)
            tipo = "PRIORITARIO"
        elif self.cola_normal:
            pedido = self.cola_normal.pop(0)
            tipo = "NORMAL"
        else:
            print("No hay pedidos pendientes")
            return None
        
        print(f"\\nProcesando pedido {tipo}:")
        print(f"  Cliente: {pedido['cliente']}")
        print(f"  Items: {', '.join(pedido['items'])}")
        
        return pedido
    
    def mostrar_estado(self):
        """Muestra el estado actual"""
        print("\\n--- ESTADO DEL SISTEMA ---")
        print(f"Pedidos prioritarios: {len(self.cola_prioritaria)}")
        print(f"Pedidos normales: {len(self.cola_normal)}")
        
        print("\\nPedidos pendientes:")
        
        # Mostrar prioritarios primero
        for i, pedido in enumerate(self.cola_prioritaria, 1):
            print(f"  {i}. {pedido['cliente']} - PRIORITARIO")
        
        # Luego normales
        for i, pedido in enumerate(self.cola_normal, len(self.cola_prioritaria) + 1):
            print(f"  {i}. {pedido['cliente']} - NORMAL")

# Demostración
print("=== SISTEMA DE PEDIDOS ===\\n")

restaurante = SistemaPedidos()

# Crear pedidos
restaurante.nuevo_pedido("Ana", ["Hamburguesa", "Refresco"])
restaurante.nuevo_pedido("Carlos", ["Pizza", "Ensalada"], prioritario=True)
restaurante.nuevo_pedido("María", ["Sándwich"])
restaurante.nuevo_pedido("Pedro", ["Pasta", "Vino"], prioritario=True)

restaurante.mostrar_estado()

# Procesar pedidos
restaurante.procesar_pedido()  # Carlos (prioritario)
restaurante.procesar_pedido()  # Pedro (prioritario)
restaurante.procesar_pedido()  # Ana (normal)

restaurante.mostrar_estado()`

// Quiz
const preguntas = [
  {
    texto: "¿Qué es una cola (queue) en programación?",
    opciones: [
      { texto: "Estructura LIFO", correcta: false },
      { texto: "Estructura FIFO", correcta: true },
      { texto: "Colección desordenada", correcta: false },
      { texto: "Tipo de dato primitivo", correcta: false }
    ]
  },
  {
    texto: "¿Dónde se insertan los elementos en una cola?",
    opciones: [
      { texto: "En el inicio", correcta: false },
      { texto: "En cualquier posición", correcta: false },
      { texto: "Al final", correcta: true },
      { texto: "En el tope", correcta: false }
    ]
  },
  {
    texto: "¿Dónde se eliminan los elementos en una cola?",
    opciones: [
      { texto: "Del final", correcta: false },
      { texto: "Del inicio", correcta: true },
      { texto: "Desde cualquier lugar", correcta: false },
      { texto: "Del centro", correcta: false }
    ]
  }
]


</script>