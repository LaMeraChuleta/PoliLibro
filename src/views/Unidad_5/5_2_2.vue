<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
    <!-- Header -->
    <HeaderTitle numero="5" titulo="5.2.2 Técnicas de solución">
      <p class="mt-3 text-gray-600 max-w-3xl">Estrategias y patrones para resolver conflictos de acceso concurrente en sistemas multi-hilo y distribuidos.</p>
    </HeaderTitle>   
  
    <!-- Explicación teórica -->
    <section class="mb-10 bg-white rounded-xl shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Fundamentos teóricos</h2>
      <p class="text-gray-700 mb-4">
        La sincronización en sistemas concurrentes es esencial para evitar condiciones
        de carrera y garantizar la consistencia de los datos. Cuando múltiples hilos o
        procesos acceden a recursos compartidos, se requiere mecanismos específicos
        para coordinar su acceso.
      </p>
      <p class="text-gray-700">
        Las técnicas de solución se basan en conceptos fundamentales que permiten
        establecer protocolos de acceso seguro, garantizando que solo un proceso
        pueda modificar un recurso compartido en un momento dado.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Tarjeta 1 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">+</div>
            <h3 class="font-bold text-gray-800">Semáforos</h3>
          </div>
          <p class="text-gray-700">
            Variables enteras no negativas que controlan el acceso a recursos
            mediante operaciones atómicas wait() y signal().
          </p>
        </div>

        <!-- Tarjeta 2 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">E</div>
            <h3 class="font-bold text-gray-800">Monitores</h3>
          </div>
          <p class="text-gray-700">
            Constructos de alto nivel que encapsulan datos compartidos y
            procedimientos para acceder a ellos, garantizando exclusión mutua.
          </p>
        </div>

        <!-- Tarjeta 3 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center font-bold">X</div>
            <h3 class="font-bold text-gray-800">Variables de condición</h3>
          </div>
          <p class="text-gray-700">
            Mecanismos que permiten a los hilos esperar por ciertas condiciones
            dentro de una región crítica sin consumir recursos de CPU.
          </p>
        </div>

        <!-- Tarjeta 4 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">?</div>
            <h3 class="font-bold text-gray-800">Exclusión mutua</h3>
          </div>
          <p class="text-gray-700">
            Garantía de que solo un proceso puede ejecutar su sección crítica
            en un momento dado, evitando interferencias.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejemplos prácticos</h2>
      
      <!-- Ejemplo 1 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 1: Semáforo binario</h3>
          <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Básico</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo1Code" />
        </div>
      </div>

      <!-- Ejemplo 2 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 2: Exclusión mutua con Lock</h3>
          <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Intermedio</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo2Code" />
        </div>
      </div>

      <!-- Ejemplo 3 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 3: Sistema de reservas de cine</h3>
          <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Avanzado</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio práctico</h2>
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Problema: Sistema de tickets</h3>
          <p class="text-gray-700 mb-4">
            Implementa un sistema de venta de tickets donde múltiples cajeros pueden
            vender tickets simultáneamente. El sistema debe garantizar que no se
            vendan dos tickets con el mismo número.
          </p>
          <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p class="text-blue-800 font-medium mb-2">Requisitos:</p>
            <ul class="list-disc list-inside text-blue-700 space-y-1">
              <li>Usar un Lock para proteger el contador de tickets</li>
              <li>Simular 3 cajeros vendiendo tickets simultáneamente</li>
              <li>Cada cajero debe vender 5 tickets</li>
              <li>Garantizar que todos los tickets tengan números únicos</li>
            </ul>
          </div>
        </div>

        <div>
          <button
            @click="mostrarSolucion = !mostrarSolucion"
            class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <span v-if="!mostrarSolucion">Mostrar solución</span>
            <span v-else>Ocultar solución</span>
          </button>

          <div v-if="mostrarSolucion" class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div class="bg-gray-800 rounded-lg overflow-hidden">
              <PythonRunner :code="ejercicioCode" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz técnicas de solución"></QuizQuestions>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Estado del ejercicio práctico
const mostrarSolucion = ref(false)

// Códigos de ejemplo
const ejemplo1Code = `# Ejemplo 1: Semáforo binario en Python
import threading
import time

# Simulacion de un semáforo binario
class SemaforoBinario:
    def __init__(self):
        self.lock = threading.Lock()
        self.disponible = True
    
    def adquirir(self):
        self.lock.acquire()
        try:
            while not self.disponible:
                pass
            self.disponible = False
        finally:
            self.lock.release()
    
    def liberar(self):
        self.lock.acquire()
        try:
            self.disponible = True
        finally:
            self.lock.release()

# Funcion que usa el semáforo
def trabajador(id, semaforo):
    print(f"Trabajador {id} esperando acceso...")
    semaforo.adquirir()
    print(f"Trabajador {id} entró en la sección crítica")
    time.sleep(1)  # Simula trabajo
    semaforo.liberar()
    print(f"Trabajador {id} salió de la sección crítica")

# Crear semáforo y trabajadores
semaforo = SemaforoBinario()
hilos = []

for i in range(3):
    hilo = threading.Thread(target=trabajador, args=(i, semaforo))
    hilos.append(hilo)
    hilo.start()

for hilo in hilos:
    hilo.join()

print("Todos los trabajadores completaron su tarea")`

const ejemplo2Code = `# Ejemplo 2: Exclusión mutua con Lock
import threading
import time

# Recurso compartido
contador = 0
lock = threading.Lock()

# Funcion que incrementa el contador de forma segura
def incrementar_seguro(id):
    global contador
    
    print(f"Hilo {id}: Intentando incrementar...")
    
    # Adquirir el lock
    lock.acquire()
    try:
        # Sección crítica
        valor_actual = contador
        time.sleep(0.1)  # Simula procesamiento
        contador = valor_actual + 1
        print(f"Hilo {id}: Incrementó a {contador}")
    finally:
        # Liberar el lock
        lock.release()

# Funcion sin protección (para comparación)
def incrementar_inseguro(id):
    global contador
    
    valor_actual = contador
    time.sleep(0.1)
    contador = valor_actual + 1
    print(f"Hilo {id}: Incrementó (inseguro) a {contador}")

# Demostración de la diferencia
print("=== Con exclusión mutua ===")
contador = 0
hilos_seguros = []
for i in range(5):
    hilo = threading.Thread(target=incrementar_seguro, args=(i,))
    hilos_seguros.append(hilo)
    hilo.start()

for hilo in hilos_seguros:
    hilo.join()

print(f"Valor final seguro: {contador}")

print("\\n=== Sin exclusión mutua ===")
contador = 0
hilos_inseguros = []
for i in range(5, 10):
    hilo = threading.Thread(target=incrementar_inseguro, args=(i,))
    hilos_inseguros.append(hilo)
    hilo.start()

for hilo in hilos_inseguros:
    hilo.join()

print(f"Valor final inseguro: {contador} (debería ser 5)")`

const ejemplo3Code = `# Ejemplo 3: Sistema de reservas de cine
import threading
import time
import random

class SistemaReservasCine:
    def __init__(self, total_asientos):
        self.asientos_disponibles = list(range(1, total_asientos + 1))
        self.lock = threading.Lock()
        self.reservas = {}
    
    def reservar_asiento(self, cliente_id):
        with self.lock:  # Usa el contexto del lock
            if not self.asientos_disponibles:
                return None
            
            # Seleccionar un asiento aleatorio disponible
            asiento = random.choice(self.asientos_disponibles)
            self.asientos_disponibles.remove(asiento)
            self.reservas[cliente_id] = asiento
            
            return asiento
    
    def mostrar_estado(self):
        with self.lock:
            disponibles = len(self.asientos_disponibles)
            reservados = len(self.reservas)
            return disponibles, reservados

def cajero(id_cajero, sistema, num_clientes):
    print(f"Cajero {id_cajero}: Iniciando atención de {num_clientes} clientes")
    
    for i in range(num_clientes):
        cliente_id = f"C{id_cajero}-{i+1}"
        
        # Simular tiempo de procesamiento
        time.sleep(random.uniform(0.1, 0.5))
        
        # Reservar asiento
        asiento = sistema.reservar_asiento(cliente_id)
        
        if asiento:
            print(f"Cajero {id_cajero}: Cliente {cliente_id} reservó asiento {asiento}")
        else:
            print(f"Cajero {id_cajero}: No hay asientos para {cliente_id}")

# Crear sistema de reservas
print("=== SISTEMA DE RESERVAS DE CINE ===\\n")
sistema = SistemaReservasCine(total_asientos=20)

# Crear cajeros (hilos)
cajeros = []
for i in range(3):  # 3 cajeros
    cajero_thread = threading.Thread(
        target=cajero,
        args=(i + 1, sistema, 7)  # Cada cajero atiende 7 clientes
    )
    cajeros.append(cajero_thread)
    cajero_thread.start()

# Esperar a que todos los cajeros terminen
for cajero_thread in cajeros:
    cajero_thread.join()

# Mostrar estado final
disponibles, reservados = sistema.mostrar_estado()
print(f"\\n=== RESUMEN FINAL ===")
print(f"Asientos disponibles: {disponibles}")
print(f"Asientos reservados: {reservados}")
print(f"Total de asientos: {disponibles + reservados}")

if disponibles == 0:
    print("¡CINE AGOTADO!")`

// Código del ejercicio práctico
const ejercicioCode = `# Solución: Sistema de venta de tickets con exclusión mutua
import threading
import time
import random

class SistemaTickets:
    def __init__(self):
        self.proximo_ticket = 1
        self.lock = threading.Lock()
        self.tickets_vendidos = []
    
    def vender_ticket(self, cajero_id):
        # Adquirir lock para proteger la sección crítica
        with self.lock:
            # Sección crítica: asignar número de ticket único
            numero_ticket = self.proximo_ticket
            self.proximo_ticket += 1
            self.tickets_vendidos.append({
                'cajero': cajero_id,
                'ticket': numero_ticket,
                'tiempo': time.time()
            })
            
            return numero_ticket
    
    def obtener_resumen(self):
        with self.lock:
            return {
                'total_vendidos': len(self.tickets_vendidos),
                'proximo_disponible': self.proximo_ticket,
                'tickets': self.tickets_vendidos.copy()
            }

def cajero(cajero_id, sistema, tickets_a_vender):
    print(f"Cajero {cajero_id}: Inicia venta de {tickets_a_vender} tickets")
    
    for i in range(tickets_a_vender):
        # Simular tiempo de atención
        time.sleep(random.uniform(0.2, 0.7))
        
        # Vender ticket
        numero_ticket = sistema.vender_ticket(cajero_id)
        
        print(f"Cajero {cajero_id}: Vendió ticket #{numero_ticket}")
    
    print(f"Cajero {cajero_id}: Terminó de vender")

# Configuración del sistema
print("=== SISTEMA DE VENTA DE TICKETS ===\\n")
sistema = SistemaTickets()

# Crear 3 cajeros (hilos)
cajeros = []
for i in range(3):
    cajero_thread = threading.Thread(
        target=cajero,
        args=(f"Cajero-{i+1}", sistema, 5)  # 5 tickets por cajero
    )
    cajeros.append(cajero_thread)

# Iniciar todos los cajeros
for cajero_thread in cajeros:
    cajero_thread.start()

# Esperar a que todos terminen
for cajero_thread in cajeros:
    cajero_thread.join()

# Mostrar resumen
print("\\n=== RESUMEN DE VENTAS ===")
resumen = sistema.obtener_resumen()

print(f"Total de tickets vendidos: {resumen['total_vendidos']}")
print(f"Próximo ticket disponible: #{resumen['proximo_disponible']}")

# Verificar que todos los tickets son únicos
numeros_tickets = [t['ticket'] for t in resumen['tickets']]
tickets_unicos = len(set(numeros_tickets))

if tickets_unicos == resumen['total_vendidos']:
    print("VERIFICACION: Todos los tickets tienen números únicos")
else:
    print(f"ERROR: Se encontraron tickets duplicados")

# Mostrar tickets por cajero
print("\\nDistribución por cajero:")
for cajero_id in range(1, 4):
    tickets_cajero = [t for t in resumen['tickets'] if t['cajero'] == f'Cajero-{cajero_id}']
    print(f"Cajero {cajero_id}: {len(tickets_cajero)} tickets")`

// Configuración del quiz
const preguntas = [
  {
    texto: "¿Cuál es una técnica común para resolver problemas de sincronización?",
    opciones: [
      { texto: "Uso de semáforos y mutex", correcta: true },
      { texto: "Eliminar los recursos compartidos", correcta: false },
      { texto: "Aumentar la velocidad del reloj", correcta: false },
      { texto: "Usar solo programación secuencial", correcta: false }
    ]
  },
  {
    texto: "¿Qué técnica evita que varios hilos entren a una sección crítica al mismo tiempo?",
    opciones: [
      { texto: "Exclusión mutua", correcta: true },
      { texto: "Paralelismo", correcta: false },
      { texto: "Recursividad", correcta: false },
      { texto: "Iteración", correcta: false }
    ]
  },
  {
    texto: "¿Qué técnica ayuda a prevenir interbloqueos (deadlocks)?",
    opciones: [
      { texto: "Evitar la espera circular", correcta: true },
      { texto: "Aumentar la cantidad de hilos", correcta: false },
      { texto: "Bloquear todos los recursos", correcta: false },
      { texto: "Eliminar la sincronización", correcta: false }
    ]
  }
]

</script>