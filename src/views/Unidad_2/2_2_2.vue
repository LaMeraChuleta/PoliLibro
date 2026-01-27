<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="2" titulo="2.2.2 Operaciones">
      <p class="mt-4 text-gray-600 max-w-3xl">
        Las colas siguen el principio FIFO (First In, First Out). En esta sección aprenderás las operaciones
        fundamentales para manipular estructuras de datos tipo cola en Python.
      </p>
    </HeaderTitle>

    <!-- Tarjetas de Conceptos Clave -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">+</div>
          <h3 class="font-bold text-gray-800 mb-2">Encolar</h3>
          <p class="text-gray-600 text-sm">
            Añadir un elemento al final de la cola. En Python usamos <code>append()</code> en listas o
            <code>put()</code> en queue.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">X</div>
          <h3 class="font-bold text-gray-800 mb-2">Desencolar</h3>
          <p class="text-gray-600 text-sm">
            Eliminar y retornar el elemento del frente. Se usa <code>pop(0)</code> en listas o <code>get()</code> en
            queue.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">E</div>
          <h3 class="font-bold text-gray-800 mb-2">Frente</h3>
          <p class="text-gray-600 text-sm">
            Consultar el primer elemento sin eliminarlo. Accedemos con <code>cola[0]</code> en listas o
            <code>queue[0]</code> en deque.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div class="text-2xl font-mono text-blue-600 mb-3">?</div>
          <h3 class="font-bold text-gray-800 mb-2">Búsqueda</h3>
          <p class="text-gray-600 text-sm">
            Verificar si un elemento existe usando <code>in</code>. Las colas no están optimizadas para búsquedas
            (O(n)).
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de Código -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejemplos Prácticos</h2>

      <div class="space-y-10">
        <!-- Ejemplo 1 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 1: Operaciones Básicas</h3>       
          <PythonRunner :code="ejemplo1Code" />
        </div>

        <!-- Ejemplo 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 2: Fila de Banco</h3>       
          <PythonRunner :code="ejemplo2Code" />
        </div>

        <!-- Ejemplo 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Ejemplo 3: Búsqueda y Verificación</h3>       
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <!-- <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio Práctico</h2>
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Sistema de Tickets</h3>
          <p class="text-gray-600 mb-4">
            Implementa un sistema de tickets donde:
          </p>
          <ul class="list-disc pl-5 text-gray-600 space-y-2 mb-6">
            <li>Los clientes reciben números de ticket consecutivos</li>
            <li>Se atienden los tickets en orden</li>
            <li>Debes mostrar cuántos tickets quedan pendientes</li>
            <li>Permitir agregar nuevos tickets y atender el siguiente</li>
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de Operaciones"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/2.2.1" siguiente="/Unidad/2.2.3" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Pilas y Colas" mostrarAnterior="true"
      mostrarSiguiente="true" />
  </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Operaciones básicas
const ejemplo1Code = `# Operaciones básicas en colas usando listas
cola = []  # Cola vacía

# Encolar elementos
cola.append("Cliente A")
cola.append("Cliente B")
cola.append("Cliente C")
print("Cola después de encolar:", cola)

# Desencolar (FIFO)
atendido = cola.pop(0)
print("Cliente atendido:", atendido)
print("Cola después de desencolar:", cola)

# Consultar el frente
if cola:
    print("Próximo en la cola:", cola[0])

# Tamaño de la cola
print("Total en cola:", len(cola))`

// Ejemplo 2: Fila de banco
const ejemplo2Code = `# Simulación de fila de banco
from collections import deque

# Crear cola con deque (más eficiente para pop(0))
fila_banco = deque()

# Llegan clientes
clientes = ["María", "Carlos", "Ana", "Luis"]
for cliente in clientes:
    fila_banco.append(cliente)
    print(f"Llega {cliente}. Fila actual: {list(fila_banco)}")

print("\\n--- Inicio de atención ---")

# Se atienden 3 clientes
for i in range(3):
    if fila_banco:
        cliente_atendido = fila_banco.popleft()
        print(f"Atendiendo a {cliente_atendido}")
        print(f"Quedan en fila: {list(fila_banco)}")

# Estado final
print(f"\\nFila final: {list(fila_banco)}")
print(f"Total por atender: {len(fila_banco)}")`

// Ejemplo 3: Búsqueda y verificación
const ejemplo3Code = `# Búsqueda y verificación en colas
cola_documentos = ["INFORME_A", "CONTRATO_B", "FACTURA_C", "INFORME_A"]

# Verificar existencia
buscar = "CONTRATO_B"
if buscar in cola_documentos:
    print(f"Documento '{buscar}' encontrado en la cola")
else:
    print(f"Documento '{buscar}' NO encontrado")

# Contar ocurrencias
documento = "INFORME_A"
cantidad = cola_documentos.count(documento)
print(f"El documento '{documento}' aparece {cantidad} veces")

# Búsqueda con posición (ineficiente en colas)
if "FACTURA_C" in cola_documentos:
    posicion = cola_documentos.index("FACTURA_C")
    print(f"FACTURA_C está en la posición {posicion} de la cola")

# IMPORTANTE: Las búsquedas en colas son O(n)
# porque debemos recorrer toda la estructura`

// Ejercicio y solución
const ejercicioCode = `# Implementa aquí el sistema de tickets
# Completa las funciones según las instrucciones

class SistemaTickets:
    def __init__(self):
        self.tickets = []
        self.ultimo_numero = 0
    
    def nuevo_ticket(self):
        # TODO: Generar nuevo número de ticket
        # y agregarlo a la cola
        pass
    
    def atender_ticket(self):
        # TODO: Atender el próximo ticket
        # Retornar el número atendido o None si no hay
        pass
    
    def pendientes(self):
        # TODO: Retornar cantidad de tickets pendientes
        pass

# Prueba del sistema
sistema = SistemaTickets()

# Agregar algunos tickets
for _ in range(3):
    sistema.nuevo_ticket()

print("Tickets pendientes:", sistema.pendientes())`

const solucionCode = `# Solución: Sistema de Tickets

class SistemaTickets:
    def __init__(self):
        self.tickets = []  # Cola de tickets
        self.ultimo_numero = 0
    
    def nuevo_ticket(self):
        """Genera un nuevo ticket y lo encola."""
        self.ultimo_numero += 1
        self.tickets.append(self.ultimo_numero)
        print(f"Ticket #{self.ultimo_numero} generado")
        return self.ultimo_numero
    
    def atender_ticket(self):
        """Atiende el próximo ticket en la cola."""
        if not self.tickets:
            print("No hay tickets pendientes")
            return None
        
        ticket = self.tickets.pop(0)
        print(f"Atendiendo ticket #{ticket}")
        return ticket
    
    def pendientes(self):
        """Retorna la cantidad de tickets pendientes."""
        return len(self.tickets)
    
    def estado_actual(self):
        """Muestra el estado completo del sistema."""
        print(f"\\n--- Estado del Sistema ---")
        print(f"Próximo número: #{self.ultimo_numero + 1}")
        print(f"Tickets pendientes: {self.pendientes()}")
        if self.tickets:
            print(f"Cola actual: {self.tickets}")
        print("------------------------\\n")

# Demostración del sistema
sistema = SistemaTickets()

# Generar 3 tickets
print("=== Generando tickets ===")
for _ in range(3):
    sistema.nuevo_ticket()

sistema.estado_actual()

# Atender 2 tickets
print("\\n=== Atendiendo tickets ===")
sistema.atender_ticket()
sistema.atender_ticket()

sistema.estado_actual()

# Generar 1 más y atender
print("\\n=== Operaciones adicionales ===")
sistema.nuevo_ticket()
sistema.atender_ticket()

# Estado final
sistema.estado_actual()`

// Quiz
const preguntas = [
  {
    texto: "¿Qué operación se usa para agregar un elemento a una cola?",
    opciones: [
      { texto: "push", correcta: false },
      { texto: "enqueue", correcta: true },
      { texto: "pop", correcta: false },
      { texto: "peek", correcta: false }
    ]
  },
  {
    texto: "¿Qué operación elimina el primer elemento de una cola?",
    opciones: [
      { texto: "dequeue", correcta: true },
      { texto: "remove", correcta: false },
      { texto: "pop", correcta: false },
      { texto: "insert", correcta: false }
    ]
  },
  {
    texto: "¿Para qué sirve la operación peek en una cola?",
    opciones: [
      { texto: "Eliminar el primer elemento", correcta: false },
      { texto: "Ver el primer elemento sin eliminarlo", correcta: true },
      { texto: "Vaciar la cola", correcta: false },
      { texto: "Agregar un elemento", correcta: false }
    ]
  }
]


</script>