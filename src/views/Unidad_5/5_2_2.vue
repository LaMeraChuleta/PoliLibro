<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <!-- Header del capítulo -->
    <header class="mb-8 border-b border-blue-200 pb-4">
      <div class="flex items-center gap-2 text-sm text-blue-600 mb-2">
        <span class="font-medium">Capítulo 5.2.2</span>
        <span class="text-gray-400">|</span>
        <span>Técnicas avanzadas</span>
      </div>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-800">
        Técnicas de solución para problemas de sincronización
      </h1>
      <p class="mt-3 text-gray-600 max-w-3xl">
        Estrategias y patrones para resolver conflictos de acceso concurrente
        en sistemas multi-hilo y distribuidos.
      </p>
    </header>

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
    <section class="mb-10">
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Evaluación de conocimientos</h2>
        
        <div class="space-y-6">
          <!-- Pregunta 1 -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">1. ¿Cuál es la función principal de un semáforo?</h3>
            <div class="space-y-2">
              <label
                v-for="(opcion, index) in preguntas[0].opciones"
                :key="index"
                class="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                :class="{
                  'bg-green-50 border-green-200': respuestasSeleccionadas[0] === index && quizCompletado,
                  'bg-red-50 border-red-200': respuestasSeleccionadas[0] !== preguntas[0].respuestaCorrecta && respuestasSeleccionadas[0] === index && quizCompletado
                }"
              >
                <input
                  type="radio"
                  :name="'pregunta-1'"
                  :value="index"
                  v-model="respuestasSeleccionadas[0]"
                  class="mr-3"
                  :disabled="quizCompletado"
                />
                <span>{{ opcion }}</span>
              </label>
            </div>
          </div>

          <!-- Pregunta 2 -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">2. ¿Qué garantiza la exclusión mutua?</h3>
            <div class="space-y-2">
              <label
                v-for="(opcion, index) in preguntas[1].opciones"
                :key="index"
                class="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                :class="{
                  'bg-green-50 border-green-200': respuestasSeleccionadas[1] === index && quizCompletado,
                  'bg-red-50 border-red-200': respuestasSeleccionadas[1] !== preguntas[1].respuestaCorrecta && respuestasSeleccionadas[1] === index && quizCompletado
                }"
              >
                <input
                  type="radio"
                  :name="'pregunta-2'"
                  :value="index"
                  v-model="respuestasSeleccionadas[1]"
                  class="mr-3"
                  :disabled="quizCompletado"
                />
                <span>{{ opcion }}</span>
              </label>
            </div>
          </div>

          <!-- Pregunta 3 -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">3. ¿Para qué se usan las variables de condición?</h3>
            <div class="space-y-2">
              <label
                v-for="(opcion, index) in preguntas[2].opciones"
                :key="index"
                class="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                :class="{
                  'bg-green-50 border-green-200': respuestasSeleccionadas[2] === index && quizCompletado,
                  'bg-red-50 border-red-200': respuestasSeleccionadas[2] !== preguntas[2].respuestaCorrecta && respuestasSeleccionadas[2] === index && quizCompletado
                }"
              >
                <input
                  type="radio"
                  :name="'pregunta-3'"
                  :value="index"
                  v-model="respuestasSeleccionadas[2]"
                  class="mr-3"
                  :disabled="quizCompletado"
                />
                <span>{{ opcion }}</span>
              </label>
            </div>
          </div>

          <!-- Botón de validación -->
          <div class="pt-4">
            <button
              @click="validarQuiz"
              class="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              :class="{ 'opacity-50 cursor-not-allowed': quizCompletado }"
              :disabled="quizCompletado"
            >
              {{ quizCompletado ? 'Quiz completado' : 'Validar respuestas' }}
            </button>
            
            <!-- Resultado -->
            <div v-if="quizCompletado" class="mt-4 p-4 rounded-lg" :class="{
              'bg-green-50 text-green-800 border border-green-200': resultadoQuiz.correctas === preguntas.length,
              'bg-yellow-50 text-yellow-800 border border-yellow-200': resultadoQuiz.correctas > 0 && resultadoQuiz.correctas < preguntas.length,
              'bg-red-50 text-red-800 border border-red-200': resultadoQuiz.correctas === 0
            }">
              <p class="font-medium">
                {{ resultadoQuiz.mensaje }}
              </p>
              <p class="mt-2 text-sm">
                Respuestas correctas: {{ resultadoQuiz.correctas }}/{{ preguntas.length }}
              </p>
            </div>

            <!-- Mensaje de error si no todas las preguntas están respondidas -->
            <div v-if="errorQuiz" class="mt-4 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
              <p class="font-medium">Por favor responde todas las preguntas antes de validar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

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
    pregunta: '¿Cuál es la función principal de un semáforo?',
    opciones: [
      'Controlar el acceso a recursos compartidos mediante conteo',
      'Acelerar la ejecución de múltiples hilos',
      'Gestionar la memoria de los procesos',
      'Sincronizar relojes del sistema'
    ],
    respuestaCorrecta: 0
  },
  {
    pregunta: '¿Qué garantiza la exclusión mutua?',
    opciones: [
      'Que todos los procesos terminen al mismo tiempo',
      'Que solo un proceso ejecute su sección crítica a la vez',
      'Que los recursos se distribuyan equitativamente',
      'Que no haya deadlocks en el sistema'
    ],
    respuestaCorrecta: 1
  },
  {
    pregunta: '¿Para qué se usan las variables de condición?',
    opciones: [
      'Para almacenar resultados temporales',
      'Para que los hilos esperen por condiciones específicas',
      'Para contar el número de hilos activos',
      'Para determinar prioridades de ejecución'
    ],
    respuestaCorrecta: 1
  }
]

const respuestasSeleccionadas = ref([null, null, null])
const quizCompletado = ref(false)
const errorQuiz = ref(false)

const resultadoQuiz = computed(() => {
  if (!quizCompletado.value) return { correctas: 0, mensaje: '' }
  
  const correctas = preguntas.reduce((count, pregunta, index) => {
    return count + (respuestasSeleccionadas.value[index] === pregunta.respuestaCorrecta ? 1 : 0)
  }, 0)
  
  let mensaje = ''
  if (correctas === preguntas.length) {
    mensaje = '¡Excelente! Dominas los conceptos clave.'
  } else if (correctas >= preguntas.length / 2) {
    mensaje = 'Buen trabajo, pero revisa algunos conceptos.'
  } else {
    mensaje = 'Recomendamos repasar los conceptos del capítulo.'
  }
  
  return { correctas, mensaje }
})

const validarQuiz = () => {
  // Verificar que todas las preguntas estén respondidas
  if (respuestasSeleccionadas.value.some(respuesta => respuesta === null)) {
    errorQuiz.value = true
    setTimeout(() => { errorQuiz.value = false }, 3000)
    return
  }
  
  quizCompletado.value = true
}
</script>