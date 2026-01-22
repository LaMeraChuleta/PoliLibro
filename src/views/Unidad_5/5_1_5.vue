<template>
  <div class="container mx-auto px-4 py-6 space-y-8">
    <!-- Header -->
    <HeaderTitle numero="5" titulo="5.1.5 Comunicación entre hilos">
      <p class="text-xl text-gray-600">Estrategias para intercambiar datos de forma segura entre múltiples hilos
        concurrentes</p>
    </HeaderTitle>

    <!-- Introducción teórica -->
    <section class="mb-12 bg-blue-50 rounded-2xl p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
      <p class="text-gray-700 leading-relaxed mb-4">
        En programación concurrente, los hilos comparten el mismo espacio de memoria, lo que permite
        comunicación directa pero también presenta riesgos de condiciones de carrera. Python ofrece
        varios mecanismos para coordinar el acceso a recursos compartidos y facilitar la comunicación
        entre hilos de forma segura.
      </p>
      <p class="text-gray-700 leading-relaxed">
        Los principales mecanismos son: colas sincronizadas (Queue), objetos de sincronización
        (Lock, Event, Condition), y variables compartidas protegidas. Cada uno tiene casos de uso
        específicos según el patrón de comunicación requerido.
      </p>
    </section>

    <!-- Conceptos clave -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-bold">+</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Queue Thread-Safe</h3>
          </div>
          <p class="text-gray-600">
            Cola FIFO sincronizada que permite comunicación segura entre hilos productores y consumidores
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-bold">E</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Event Object</h3>
          </div>
          <p class="text-gray-600">
            Permite que un hilo señale a otros hilos que un evento ha ocurrido, coordinando su ejecución
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-bold">X</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Condition Variable</h3>
          </div>
          <p class="text-gray-600">
            Permite a los hilos esperar hasta que se cumpla una condición, notificando cuando cambia el estado
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-bold">?</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Lock y RLock</h3>
          </div>
          <p class="text-gray-600">
            Mecanismos de exclusión mutua para proteger secciones críticas y evitar condiciones de carrera
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplo 1: Comunicación básica con Queue -->
    <section class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
        <h2 class="text-2xl font-bold text-gray-900">Comunicación Productor-Consumidor con Queue</h2>
      </div>
      <p class="text-gray-700 mb-6">
        El patrón productor-consumidor es común en aplicaciones concurrentes. Queue proporciona
        una cola thread-safe perfecta para este escenario, donde múltiples productores generan
        datos y múltiples consumidores los procesan.
      </p>
      <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <PythonRunner :code="ejemplo1Code" />
      </div>
    </section>

    <!-- Ejemplo 2: Sincronización con Event -->
    <section class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
        <h2 class="text-2xl font-bold text-gray-900">Coordinación con Event Objects</h2>
      </div>
      <p class="text-gray-700 mb-6">
        Los objetos Event permiten que un hilo señale a otros que algo ha ocurrido. Un hilo puede
        esperar a que se establezca un evento, mientras otros hilos pueden establecerlo o limpiarlo.
      </p>
      <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <PythonRunner :code="ejemplo2Code" />
      </div>
    </section>

    <!-- Ejemplo 3: Condiciones complejas con Condition -->
    <section class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
        <h2 class="text-2xl font-bold text-gray-900">Condiciones Avanzadas con Condition Variable</h2>
      </div>
      <p class="text-gray-700 mb-6">
        Las variables Condition son útiles cuando los hilos necesitan esperar a que se cumpla
        una condición específica. Permiten notificaciones selectivas y espera eficiente.
      </p>
      <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">+</div>
        <h2 class="text-2xl font-bold text-gray-900">Ejercicio Práctico</h2>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Sistema de Procesamiento de Pedidos</h3>
        <p class="text-gray-700 mb-4">
          Implementa un sistema de restaurante donde:
        </p>
        <ul class="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Un hilo productor genera pedidos cada 0.5-1.5 segundos</li>
          <li>Tres hilos cocineros procesan los pedidos (cada uno tarda 1-3 segundos)</li>
          <li>Usa una Queue para comunicar pedidos entre el productor y los cocineros</li>
          <li>Implementa un Event para detener el sistema después de 10 pedidos</li>
          <li>Muestra el progreso en tiempo real</li>
        </ul>
      </div>

      <div class="space-y-4">
        <button @click="mostrarSolucion = !mostrarSolucion"
          class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          {{ mostrarSolucion ? 'Ocultar Solucion' : 'Mostrar Solucion' }}
        </button>

        <div v-if="mostrarSolucion" class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h4 class="text-lg font-bold text-gray-900 mb-4">Solución Propuesta</h4>
          <div class="bg-gray-900 rounded-lg overflow-hidden">
            <PythonRunner :code="ejercicioCode" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quiz de evaluación -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz comunicación entre hilos"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/5.1.4" siguiente="/Unidad/5.2.1" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true"
      mostrarSiguiente="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

const mostrarSolucion = ref(false)

// Ejemplo 1: Comunicación con Queue
const ejemplo1Code = `# Ejemplo 1: Comunicación Productor-Consumidor con Queue
import threading
import queue
import time
import random

def productor(colas, id_productor, cantidad):
    """
    Hilo productor que genera datos y los coloca en la cola
    """
    for i in range(cantidad):
        # Simular tiempo de producción
        time.sleep(random.uniform(0.1, 0.3))
        
        dato = f"Producto {i+1} del productor {id_productor}"
        colas.put(dato)
        print(f"[Productor {id_productor}] Producido: {dato}")
    
    print(f"[Productor {id_productor}] Finalizado")

def consumidor(colas, id_consumidor):
    """
    Hilo consumidor que procesa datos de la cola
    """
    while True:
        try:
            # Timeout para detectar fin de procesamiento
            dato = colas.get(timeout=2)
            
            # Simular tiempo de procesamiento
            time.sleep(random.uniform(0.2, 0.5))
            print(f"[Consumidor {id_consumidor}] Procesado: {dato}")
            
            # Marcar tarea como completada
            colas.task_done()
        except queue.Empty:
            print(f"[Consumidor {id_consumidor}] No hay más datos, finalizando...")
            break

def main():
    # Crear cola thread-safe con tamaño máximo
    cola_compartida = queue.Queue(maxsize=5)
    
    # Crear hilos productores
    productores = []
    for i in range(2):
        prod = threading.Thread(
            target=productor,
            args=(cola_compartida, i+1, 3)
        )
        productores.append(prod)
        prod.start()
    
    # Crear hilos consumidores
    consumidores = []
    for i in range(2):
        cons = threading.Thread(
            target=consumidor,
            args=(cola_compartida, i+1)
        )
        consumidores.append(cons)
        cons.start()
    
    # Esperar a que todos los productores terminen
    for prod in productores:
        prod.join()
    
    # Esperar a que la cola se vacíe
    cola_compartida.join()
    
    # Esperar a que los consumidores terminen
    for cons in consumidores:
        cons.join()
    
    print("Todos los hilos han finalizado")

if __name__ == "__main__":
    main()`

// Ejemplo 2: Sincronización con Event
const ejemplo2Code = `# Ejemplo 2: Coordinación con Event Objects
import threading
import time
import random

class SistemaMonitoreo:
    def __init__(self):
        # Evento para señalar emergencia
        self.evento_emergencia = threading.Event()
        
        # Evento para señalar fin del monitoreo
        self.evento_finalizar = threading.Event()
        
        # Contador de alertas
        self.alertas = 0
    
    def sensor_temperatura(self, sensor_id):
        """
        Hilo sensor que monitorea temperatura
        """
        print(f"Sensor {sensor_id} iniciado")
        
        while not self.evento_finalizar.is_set():
            # Simular lectura de temperatura
            temp = random.uniform(20.0, 100.0)
            time.sleep(0.5)
            
            # Detectar emergencia
            if temp > 80.0:
                print(f"Sensor {sensor_id}: Temperatura crítica {temp:.1f}°C")
                self.alertas += 1
                self.evento_emergencia.set()
            
            # Si ya hay emergencia, este sensor para
            if self.evento_emergencia.is_set():
                print(f"Sensor {sensor_id} detenido por emergencia")
                break
        
        print(f"Sensor {sensor_id} finalizado")
    
    def sistema_alerta(self):
        """
        Hilo que responde a emergencias
        """
        print("Sistema de alerta iniciado")
        
        while not self.evento_finalizar.is_set():
            # Esperar por señal de emergencia
            señalado = self.evento_emergencia.wait(timeout=1)
            
            if señalado:
                print(f"ALERTA: Activando protocolos de emergencia")
                print(f"Total alertas detectadas: {self.alertas}")
                
                # Realizar acciones de emergencia
                time.sleep(2)
                print("Protocolos de emergencia completados")
                
                # Resetear evento para futuras emergencias
                self.evento_emergencia.clear()
        
        print("Sistema de alerta finalizado")

def main():
    sistema = SistemaMonitoreo()
    
    # Crear sensores
    sensores = []
    for i in range(3):
        sensor = threading.Thread(
            target=sistema.sensor_temperatura,
            args=(i+1,)
        )
        sensores.append(sensor)
        sensor.start()
    
    # Crear sistema de alerta
    alerta = threading.Thread(target=sistema.sistema_alerta)
    alerta.start()
    
    # Ejecutar por tiempo limitado
    time.sleep(5)
    
    # Señalar fin del monitoreo
    sistema.evento_finalizar.set()
    
    # Esperar a que todos los hilos terminen
    for sensor in sensores:
        sensor.join()
    alerta.join()
    
    print("Monitoreo completado")

if __name__ == "__main__":
    main()`

// Ejemplo 3: Condition Variable
const ejemplo3Code = `# Ejemplo 3: Condiciones Avanzadas con Condition Variable
import threading
import time
import random

class BufferLimitado:
    """
    Buffer compartido con capacidad limitada
    Usa Condition para coordinación entre productores y consumidores
    """
    def __init__(self, capacidad):
        self.capacidad = capacidad
        self.buffer = []
        self.condition = threading.Condition()
        self.terminado = False
    
    def agregar(self, item):
        """
        Agregar item al buffer (operación bloqueante si está lleno)
        """
        with self.condition:
            # Esperar si el buffer está lleno
            while len(self.buffer) >= self.capacidad:
                print(f"Buffer lleno ({len(self.buffer)}/{self.capacidad}), esperando...")
                self.condition.wait()
            
            # Agregar item
            self.buffer.append(item)
            print(f"Agregado: {item} (Buffer: {len(self.buffer)}/{self.capacidad})")
            
            # Notificar a consumidores que hay datos disponibles
            self.condition.notify_all()
    
    def retirar(self):
        """
        Retirar item del buffer (operación bloqueante si está vacío)
        """
        with self.condition:
            # Esperar si el buffer está vacío y no se ha terminado
            while len(self.buffer) == 0 and not self.terminado:
                print("Buffer vacío, esperando...")
                self.condition.wait()
            
            if self.terminado and len(self.buffer) == 0:
                return None
            
            # Retirar item
            item = self.buffer.pop(0)
            print(f"Retirado: {item} (Buffer: {len(self.buffer)}/{self.capacidad})")
            
            # Notificar a productores que hay espacio disponible
            self.condition.notify_all()
            return item
    
    def finalizar(self):
        """
        Señalar que no habrá más producción
        """
        with self.condition:
            self.terminado = True
            self.condition.notify_all()

def productor_cond(buffer, id_productor, items):
    """
    Productor usando Condition para coordinación
    """
    for i in range(items):
        # Simular tiempo variable de producción
        time.sleep(random.uniform(0.1, 0.4))
        
        item = f"Item {i+1} del productor {id_productor}"
        buffer.agregar(item)
    
    print(f"Productor {id_productor} completado")

def consumidor_cond(buffer, id_consumidor):
    """
    Consumidor usando Condition para coordinación
    """
    items_procesados = 0
    
    while True:
        # Simular tiempo variable de consumo
        time.sleep(random.uniform(0.2, 0.6))
        
        item = buffer.retirar()
        if item is None:
            break
        
        items_procesados += 1
        print(f"Consumidor {id_consumidor} procesó: {item}")
    
    print(f"Consumidor {id_consumidor} finalizado. Procesó {items_procesados} items")

def main():
    # Crear buffer compartido con capacidad de 3
    buffer = BufferLimitado(capacidad=3)
    
    # Crear hilos productores
    productores = []
    for i in range(2):
        prod = threading.Thread(
            target=productor_cond,
            args=(buffer, i+1, 4)
        )
        productores.append(prod)
        prod.start()
    
    # Crear hilos consumidores
    consumidores = []
    for i in range(2):
        cons = threading.Thread(
            target=consumidor_cond,
            args=(buffer, i+1)
        )
        consumidores.append(cons)
        cons.start()
    
    # Esperar a que productores terminen
    for prod in productores:
        prod.join()
    
    # Señalar fin de producción
    buffer.finalizar()
    
    # Esperar a que consumidores terminen
    for cons in consumidores:
        cons.join()
    
    print("Todos los hilos han finalizado correctamente")

if __name__ == "__main__":
    main()`

// Ejercicio práctico
const ejercicioCode = `# Ejercicio: Sistema de Procesamiento de Pedidos en Restaurante
import threading
import queue
import time
import random

class SistemaRestaurante:
    def __init__(self):
        # Cola para pedidos (máximo 5 pedidos en espera)
        self.cola_pedidos = queue.Queue(maxsize=5)
        
        # Evento para detener el sistema
        self.evento_detener = threading.Event()
        
        # Contadores
        self.pedidos_generados = 0
        self.pedidos_procesados = 0
        self.lock_contador = threading.Lock()
    
    def generador_pedidos(self):
        """Hilo que genera pedidos aleatorios"""
        print("[Generador] Iniciando generación de pedidos")
        
        while not self.evento_detener.is_set():
            # Simular tiempo entre pedidos
            time.sleep(random.uniform(0.5, 1.5))
            
            # Generar pedido
            with self.lock_contador:
                if self.pedidos_generados >= 10:
                    self.evento_detener.set()
                    break
                
                self.pedidos_generados += 1
                pedido = {
                    'id': self.pedidos_generados,
                    'tipo': random.choice(['Pizza', 'Hamburguesa', 'Ensalada', 'Pasta']),
                    'mesa': random.randint(1, 10)
                }
            
            try:
                # Intentar poner pedido en cola con timeout
                self.cola_pedidos.put(pedido, timeout=1)
                print(f"[Generador] Pedido {pedido['id']}: {pedido['tipo']} para mesa {pedido['mesa']}")
                print(f"          En cola: {self.cola_pedidos.qsize()}/5")
            except queue.Full:
                print(f"[Generador] Cola llena, reintentando...")
                continue
        
        print(f"[Generador] Finalizado. Total pedidos generados: {self.pedidos_generados}")
    
    def cocinero(self, id_cocinero):
        """Hilo cocinero que procesa pedidos"""
        print(f"[Cocinero {id_cocinero}] Listo para cocinar")
        
        while True:
            # Verificar si debemos terminar
            if self.evento_detener.is_set() and self.cola_pedidos.empty():
                break
            
            try:
                # Obtener pedido de la cola
                pedido = self.cola_pedidos.get(timeout=1)
                
                # Simular tiempo de preparación
                tiempo_preparacion = random.uniform(1.0, 3.0)
                print(f"[Cocinero {id_cocinero}] Preparando pedido {pedido['id']}: "
                      f"{pedido['tipo']} ({(tiempo_preparacion):.1f}s)")
                
                time.sleep(tiempo_preparacion)
                
                # Marcar pedido como completado
                with self.lock_contador:
                    self.pedidos_procesados += 1
                
                print(f"[Cocinero {id_cocinero}] Pedido {pedido['id']} completado")
                print(f"          Progreso: {self.pedidos_procesados}/10 pedidos")
                
                # Marcar tarea como completada
                self.cola_pedidos.task_done()
                
            except queue.Empty:
                if self.evento_detener.is_set():
                    break
                continue
        
        print(f"[Cocinero {id_cocinero}] Finalizado")
    
    def ejecutar(self):
        """Ejecutar el sistema completo"""
        print("=" * 50)
        print("SISTEMA DE RESTAURANTE INICIADO")
        print("=" * 50)
        
        # Crear hilos
        generador = threading.Thread(target=self.generador_pedidos)
        
        cocineros = []
        for i in range(3):
            cocinero = threading.Thread(
                target=self.cocinero,
                args=(i+1,)
            )
            cocineros.append(cocinero)
        
        # Iniciar hilos
        generador.start()
        for cocinero in cocineros:
            cocinero.start()
        
        # Esperar a que el generador termine
        generador.join()
        
        # Esperar a que la cola se vacíe
        self.cola_pedidos.join()
        
        # Esperar a que los cocineros terminen
        for cocinero in cocineros:
            cocinero.join()
        
        # Mostrar resumen
        print("=" * 50)
        print("RESUMEN FINAL DEL SISTEMA")
        print(f"Pedidos generados: {self.pedidos_generados}")
        print(f"Pedidos procesados: {self.pedidos_procesados}")
        print("SISTEMA FINALIZADO CORRECTAMENTE")
        print("=" * 50)

if __name__ == "__main__":
    sistema = SistemaRestaurante()
    sistema.ejecutar()`

// Quiz
const preguntas = [
  {
    texto: "¿Qué es la comunicación entre hilos?",
    opciones: [
      { texto: "Intercambio de información entre hilos de un mismo proceso", correcta: true },
      { texto: "Comunicación entre procesos distintos", correcta: false },
      { texto: "Ejecución paralela sin compartir datos", correcta: false },
      { texto: "Uso exclusivo de la CPU", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es un mecanismo común para comunicar hilos?",
    opciones: [
      { texto: "Variables compartidas", correcta: true },
      { texto: "Archivos del sistema", correcta: false },
      { texto: "Sockets de red", correcta: false },
      { texto: "Procesos independientes", correcta: false }
    ]
  },
  {
    texto: "¿Qué problema puede surgir si no hay sincronización adecuada?",
    opciones: [
      { texto: "Condiciones de carrera", correcta: true },
      { texto: "Mejor rendimiento", correcta: false },
      { texto: "Menor uso de memoria", correcta: false },
      { texto: "Ejecución más rápida garantizada", correcta: false }
    ]
  }
]

</script>