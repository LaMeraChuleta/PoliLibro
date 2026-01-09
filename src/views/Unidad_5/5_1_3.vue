<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="border-b border-gray-200 pb-4">
      <h1 class="text-3xl font-bold text-gray-800">Capítulo 5.1.3: Procesos e Hilos</h1>
      <p class="text-gray-600 mt-2">Diferencias fundamentales entre dos modelos de concurrencia y cuándo usar cada uno.</p>
    </header>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Procesos vs Hilos: Dos Modelos de Concurrencia</h2>
      <p class="text-gray-700 leading-relaxed">
        Los <strong>procesos</strong> y los <strong>hilos</strong> son dos formas fundamentales de lograr concurrencia en Python. 
        Un proceso es una instancia independiente de un programa con su propio espacio de memoria, mientras que un hilo 
        es una unidad de ejecución dentro de un proceso que comparte memoria con otros hilos del mismo proceso. 
        En Python, la elección entre procesos e hilos está determinada principalmente por el GIL (Global Interpreter Lock) 
        y el tipo de tareas a realizar: hilos para I/O y procesos para CPU intensivas.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">GIL (Global Interpreter Lock)</h3>
          </div>
          <p class="text-gray-600 text-sm">Mecanismo de CPython que permite solo un hilo ejecutando bytecode Python a la vez. Afecta a hilos pero no a procesos.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Servidor web: hilos para manejar conexiones (I/O), procesos para procesar imágenes (CPU).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">Hilos comparten memoria (riesgo de condiciones de carrera). Procesos tienen memoria separada (comunicación más costosa).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">El GIL existe principalmente para simplificar la gestión de memoria en CPython, no por una limitación técnica.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Hilos: concurrencia para operaciones I/O</h3>
        <p class="text-gray-600 mb-4">Implementación de un sistema de descargas concurrentes usando threading.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Procesos: paralelismo real para CPU intensivas</h3>
        <p class="text-gray-600 mb-4">Uso de multiprocessing para cálculos matemáticos que aprovechan múltiples núcleos.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Comparación directa: mismos datos, diferentes enfoques</h3>
        <p class="text-gray-600 mb-4">Benchmark que muestra las diferencias de rendimiento entre hilos y procesos.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa un sistema de procesamiento de imágenes que use hilos para cargar 
          imágenes desde disco (I/O) y procesos para aplicar filtros (CPU intensivo). El sistema debe:
          1. Cargar múltiples imágenes concurrentemente usando hilos
          2. Aplicar filtros (como escala de grises) usando procesos
          3. Medir y comparar el rendimiento vs. implementación secuencial
          Usa imágenes simuladas para el ejemplo.
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

// Ejemplo 1: Hilos para operaciones I/O
const ejemplo1Code = `import threading
import time
import random
from queue import Queue

class SistemaDescargas:
    """
    Sistema de descarga concurrente usando hilos.
    Ideal para operaciones I/O como descargas de red.
    """
    def __init__(self, max_hilos=3):
        self.max_hilos = max_hilos
        self.cola_trabajos = Queue()
        self.resultados = {}
        self.lock = threading.Lock()
        self.contador = 0
    
    def simular_descarga(self, url, tamano_mb):
        """
        Simula una descarga de archivo con tiempo proporcional al tamaño.
        """
        # Tiempo de descarga: 0.3 segundos por MB
        tiempo_descarga = tamano_mb * 0.3
        
        print(f"  [Hilo {threading.current_thread().name}] Descargando {url} "
              f"({tamano_mb}MB, estimado: {tiempo_descarga:.1f}s)")
        
        # Simular tiempo de descarga (I/O)
        time.sleep(tiempo_descarga)
        
        # Simular posible error (5% de probabilidad)
        if random.random() < 0.05:
            raise Exception(f"Error de conexión en {url}")
        
        return f"{tamano_mb}MB en {tiempo_descarga:.1f}s"
    
    def trabajador(self):
        """
        Función ejecutada por cada hilo trabajador.
        """
        while True:
            try:
                # Obtener trabajo de la cola
                url, tamano = self.cola_trabajos.get(timeout=2)
                
                try:
                    resultado = self.simular_descarga(url, tamano)
                    
                    # Usar lock para acceso thread-safe a recursos compartidos
                    with self.lock:
                        self.resultados[url] = ("éxito", resultado)
                        self.contador += 1
                        print(f"  ✓ [{self.contador}/{self.cola_trabajos.qsize() + self.contador}] {url} completado")
                
                except Exception as e:
                    with self.lock:
                        self.resultados[url] = ("error", str(e))
                        print(f"  ✗ {url} falló: {e}")
                
                # Marcar trabajo como completado
                self.cola_trabajos.task_done()
                
            except:
                # Timeout: no hay más trabajos
                break
    
    def descargar_lote(self, archivos):
        """
        Descarga un lote de archivos concurrentemente.
        archivos: lista de tuplas (url, tamaño_mb)
        """
        print(f"=== SISTEMA DE DESCARGA CON HILOS ===")
        print(f"Hilos concurrentes: {self.max_hilos}")
        print(f"Archivos a descargar: {len(archivos)}")
        
        inicio = time.time()
        
        # Agregar trabajos a la cola
        for url, tamano in archivos:
            self.cola_trabajos.put((url, tamano))
        
        # Crear y comenzar hilos trabajadores
        hilos = []
        for i in range(self.max_hilos):
            hilo = threading.Thread(target=self.trabajador, name=f"Hilo-{i+1}")
            hilos.append(hilo)
            hilo.start()
        
        # Esperar a que se completen todos los trabajos
        self.cola_trabajos.join()
        
        # Esperar a que todos los hilos terminen
        for hilo in hilos:
            hilo.join()
        
        tiempo_total = time.time() - inicio
        
        # Mostrar resultados
        print(f"\\n=== RESULTADOS ===")
        print(f"Tiempo total con {self.max_hilos} hilos: {tiempo_total:.2f}s")
        
        exito = sum(1 for estado, _ in self.resultados.values() if estado == "éxito")
        error = len(archivos) - exito
        
        print(f"Archivos exitosos: {exito}")
        print(f"Archivos con error: {error}")
        
        # Calcular tiempo secuencial estimado
        tiempo_secuencial = sum(tamano for _, tamano in archivos) * 0.3
        print(f"Tiempo estimado secuencial: {tiempo_secuencial:.2f}s")
        print(f"Speedup: {tiempo_secuencial/tiempo_total:.2f}x")
        
        return self.resultados, tiempo_total

# Ejemplo de uso
def ejemplo_descargas_con_hilos():
    """
    Ejemplo de sistema de descargas usando hilos.
    """
    # Lista de archivos a descargar
    archivos = [
        ("https://ejemplo.com/imagen1.jpg", 5),
        ("https://ejemplo.com/imagen2.png", 8),
        ("https://ejemplo.com/documento.pdf", 12),
        ("https://ejemplo.com/video.mp4", 45),
        ("https://ejemplo.com/musica.mp3", 7),
        ("https://ejemplo.com/archivo.zip", 22),
        ("https://ejemplo.com/presentacion.pptx", 18),
        ("https://ejemplo.com/libro.epub", 4)
    ]
    
    print("Archivos a descargar:")
    for url, tamano in archivos:
        print(f"  {url}: {tamano}MB")
    
    # Crear sistema con 3 hilos concurrentes
    sistema = SistemaDescargas(max_hilos=3)
    
    # Ejecutar descargas
    resultados, tiempo = sistema.descargar_lote(archivos)
    
    # Mostrar algunos detalles
    print("\\n=== DETALLES DE DESCARGA ===")
    for i, (url, (estado, mensaje)) in enumerate(list(resultados.items())[:3]):
        print(f"{i+1}. {url}: {estado} - {mensaje}")
    
    # Características de los hilos
    print("\\n=== CARACTERÍSTICAS DE HILOS ===")
    print("• Comparten memoria del proceso padre")
    print("• Creación más rápida que procesos")
    print("• Comunicación entre hilos es más eficiente")
    print("• Ideales para operaciones I/O (red, disco)")
    print("• Limitados por el GIL para operaciones CPU")

# Ejecutar ejemplo
ejemplo_descargas_con_hilos()

# Ejemplo adicional: condiciones de carrera
print("\\n=== EJEMPLO ADICIONAL: CONDICIÓN DE CARRERA ===")

contador_compartido = 0
lock = threading.Lock()

def incrementar_sin_proteccion():
    global contador_compartido
    for _ in range(1000):
        temp = contador_compartido
        temp += 1
        contador_compartido = temp

def incrementar_con_lock():
    global contador_compartido
    for _ in range(1000):
        with lock:
            temp = contador_compartido
            temp += 1
            contador_compartido = temp

# Probar sin protección
contador_compartido = 0
hilos = [threading.Thread(target=incrementar_sin_proteccion) for _ in range(10)]
for h in hilos: h.start()
for h in hilos: h.join()
print(f"Sin lock (condición de carrera): {contador_compartido} (debería ser 10000)")

# Probar con lock
contador_compartido = 0
hilos = [threading.Thread(target=incrementar_con_lock) for _ in range(10)]
for h in hilos: h.start()
for h in hilos: h.join()
print(f"Con lock (thread-safe): {contador_compartido} (correcto)")`

// Ejemplo 2: Procesos para CPU intensivas
const ejemplo2Code = `import multiprocessing
import time
import math
from concurrent.futures import ProcessPoolExecutor

class ProcesadorCPU:
    """
    Sistema de procesamiento CPU intensivo usando procesos.
    Ideal para cálculos matemáticos y procesamiento de datos.
    """
    
    def __init__(self):
        self.resultados = multiprocessing.Manager().dict()
        self.tiempos = {}
    
    def calcular_primos(self, limite):
        """
        Calcula todos los números primos hasta un límite (CPU intensivo).
        """
        inicio = time.time()
        
        def es_primo(n):
            if n < 2:
                return False
            if n == 2:
                return True
            if n % 2 == 0:
                return False
            for i in range(3, int(math.sqrt(n)) + 1, 2):
                if n % i == 0:
                    return False
            return True
        
        primos = [i for i in range(2, limite + 1) if es_primo(i)]
        tiempo = time.time() - inicio
        
        return len(primos), tiempo, primos[:5]  # Retorna cantidad, tiempo y primeros 5
    
    def calcular_factorial(self, n):
        """
        Calcula factorial de n (CPU intensivo).
        """
        inicio = time.time()
        resultado = 1
        for i in range(1, n + 1):
            resultado *= i
        tiempo = time.time() - inicio
        
        # Retorna n, número de dígitos y tiempo
        return n, len(str(resultado)), tiempo
    
    def procesar_con_procesos(self, tareas_primos, tareas_factorial, max_procesos=4):
        """
        Procesa tareas CPU intensivas usando múltiples procesos.
        """
        print(f"=== PROCESAMIENTO CON {max_procesos} PROCESOS ===")
        print(f"Tareas de primos: {len(tareas_primos)}")
        print(f"Tareas de factoriales: {len(tareas_factorial)}")
        
        inicio_total = time.time()
        
        # Usar ProcessPoolExecutor para gestión automática
        with ProcessPoolExecutor(max_workers=max_procesos) as executor:
            # Enviar tareas de primos
            futuros_primos = {
                executor.submit(self.calcular_primos, n): f"primos_{n}"
                for n in tareas_primos
            }
            
            # Enviar tareas de factoriales
            futuros_factorial = {
                executor.submit(self.calcular_factorial, n): f"factorial_{n}"
                for n in tareas_factorial
            }
            
            # Combinar todos los futuros
            todos_futuros = {**futuros_primos, **futuros_factorial}
            
            # Recoger resultados
            for futuro in multiprocessing.as_completed(todos_futuros):
                nombre = todos_futuros[futuro]
                try:
                    resultado = futuro.result()
                    self.resultados[nombre] = resultado
                    
                    if nombre.startswith("primos"):
                        limite = int(nombre.split("_")[1])
                        cantidad, tiempo, primeros = resultado
                        print(f"  Primos hasta {limite}: {cantidad} primos, {tiempo:.2f}s")
                    
                    elif nombre.startswith("factorial"):
                        n, digitos, tiempo = resultado
                        print(f"  Factorial {n}: {digitos} dígitos, {tiempo:.2f}s")
                        
                except Exception as e:
                    self.resultados[nombre] = f"Error: {e}"
        
        tiempo_total = time.time() - inicio_total
        self.tiempos["total_procesos"] = tiempo_total
        
        return tiempo_total
    
    def procesar_secuencial(self, tareas_primos, tareas_factorial):
        """
        Procesa las mismas tareas de forma secuencial para comparación.
        """
        print(f"\\n=== PROCESAMIENTO SECUENCIAL (comparación) ===")
        
        inicio = time.time()
        
        # Procesar primos secuencialmente
        for n in tareas_primos:
            resultado = self.calcular_primos(n)
            cantidad, tiempo, primeros = resultado
            print(f"  Primos hasta {n}: {cantidad} primos, {tiempo:.2f}s")
        
        # Procesar factoriales secuencialmente
        for n in tareas_factorial:
            resultado = self.calcular_factorial(n)
            n_val, digitos, tiempo = resultado
            print(f"  Factorial {n_val}: {digitos} dígitos, {tiempo:.2f}s")
        
        tiempo_total = time.time() - inicio
        self.tiempos["total_secuencial"] = tiempo_total
        
        return tiempo_total

# Ejemplo de uso
def ejemplo_procesos_cpu():
    """
    Ejemplo de procesamiento CPU intensivo con procesos.
    """
    procesador = ProcesadorCPU()
    
    # Definir tareas CPU intensivas
    tareas_primos = [10000, 20000, 15000, 30000, 25000]
    tareas_factorial = [1000, 1500, 2000, 2500]
    
    print("Tareas CPU intensivas:")
    print(f"  Cálculo de primos hasta: {tareas_primos}")
    print(f"  Cálculo de factoriales de: {tareas_factorial}")
    
    # Procesar con 4 procesos (paralelismo real)
    tiempo_procesos = procesador.procesar_con_procesos(
        tareas_primos, tareas_factorial, max_procesos=4
    )
    
    # Procesar secuencialmente (para comparación)
    tiempo_secuencial = procesador.procesar_secuencial(tareas_primos, tareas_factorial)
    
    # Comparación
    print(f"\\n=== COMPARACIÓN ===")
    print(f"Tiempo con 4 procesos: {tiempo_procesos:.2f}s")
    print(f"Tiempo secuencial: {tiempo_secuencial:.2f}s")
    print(f"Speedup: {tiempo_secuencial/tiempo_procesos:.2f}x")
    
    # Demostración del GIL
    print(f"\\n=== EXPLICACIÓN DEL GIL ===")
    print("En Python (CPython), el GIL (Global Interpreter Lock)")
    print("permite que solo UN hilo ejecute bytecode Python a la vez.")
    print("Por eso para CPU intensivas necesitamos procesos:")
    print("• Cada proceso tiene su PROPIO GIL")
    print("• Procesos pueden ejecutar en paralelo en múltiples núcleos")
    print("• Hilos NO pueden ejecutar bytecode Python en paralelo")
    
    # Ejemplo con multiprocessing.Pool (alternativa)
    print(f"\\n=== EJEMPLO CON MULTIPROCESSING.POOL ===")
    
    def cuadrado(x):
        return x * x
    
    datos = list(range(1, 1000001))
    
    # Con Pool
    inicio = time.time()
    with multiprocessing.Pool(processes=4) as pool:
        resultados = pool.map(cuadrado, datos[:1000])
    tiempo_pool = time.time() - inicio
    
    # Secuencial
    inicio = time.time()
    resultados_sec = [cuadrado(x) for x in datos[:1000]]
    tiempo_sec = time.time() - inicio
    
    print(f"Cuadrados de 1000 números:")
    print(f"  Secuencial: {tiempo_sec:.3f}s")
    print(f"  Pool(4 procesos): {tiempo_pool:.3f}s")
    print(f"  Speedup: {tiempo_sec/tiempo_pool:.2f}x")
    
    # Características de los procesos
    print(f"\\n=== CARACTERÍSTICAS DE PROCESOS ===")
    print("• Memoria independiente (no comparten por defecto)")
    print("• Creación más lenta que hilos (overhead mayor)")
    print("• Comunicación entre procesos es más costosa")
    print("• Ideales para operaciones CPU intensivas")
    print("• No limitados por el GIL (cada proceso tiene su propio GIL)")

# Ejecutar ejemplo
ejemplo_procesos_cpu()

# Ejemplo adicional: comunicación entre procesos
print("\\n=== EJEMPLO ADICIONAL: COMUNICACIÓN ENTRE PROCESOS ===")

def trabajador(q_in, q_out):
    """Proceso trabajador que recibe trabajo de una cola."""
    while True:
        try:
            trabajo = q_in.get(timeout=1)
            if trabajo == "FIN":
                break
            resultado = trabajo * 2  # Procesamiento
            q_out.put(resultado)
        except:
            break

# Crear colas para comunicación
q_entrada = multiprocessing.Queue()
q_salida = multiprocessing.Queue()

# Crear procesos
procesos = []
for i in range(3):
    p = multiprocessing.Process(target=trabajador, args=(q_entrada, q_salida))
    procesos.append(p)
    p.start()

# Enviar trabajos
for i in range(10):
    q_entrada.put(i)

# Señal de fin
for _ in range(3):
    q_entrada.put("FIN")

# Recoger resultados
resultados = []
for _ in range(10):
    resultados.append(q_salida.get())

print(f"Resultados de procesos: {resultados}")

# Esperar a que terminen
for p in procesos:
    p.join()

print("Comunicación entre procesos completada.")`


// Ejemplo 3: Comparación directa
const ejemplo3Code = `import time
import threading
import multiprocessing
import statistics

class ComparadorHilosProcesos:
    """
    Compara directamente el rendimiento de hilos vs procesos para diferentes tipos de tareas.
    """
    
    def __init__(self):
        self.resultados = {
            "hilos": {"cpu": [], "io": [], "mixta": []},
            "procesos": {"cpu": [], "io": [], "mixta": []},
            "secuencial": {"cpu": [], "io": [], "mixta": []}
        }
    
    def tarea_cpu(self, intensidad):
        """Tarea CPU intensiva: cálculo de sumatoria."""
        resultado = 0
        for i in range(intensidad):
            resultado += i * i
        return resultado
    
    def tarea_io(self, duracion):
        """Tarea I/O intensiva: tiempo de espera."""
        time.sleep(duracion)
        return f"I/O por {duracion}s"
    
    def tarea_mixta(self, intensidad_cpu, duracion_io):
        """Tarea mixta: combinación CPU y I/O."""
        resultado_cpu = self.tarea_cpu(intensidad_cpu)
        time.sleep(duracion_io)
        return f"CPU: {resultado_cpu}, I/O: {duracion_io}s"
    
    def ejecutar_secuencial(self, tareas, tipo):
        """Ejecuta tareas de forma secuencial."""
        inicio = time.time()
        for tarea in tareas:
            if tipo == "cpu":
                self.tarea_cpu(tarea)
            elif tipo == "io":
                self.tarea_io(tarea)
            elif tipo == "mixta":
                self.tarea_mixta(*tarea)
        return time.time() - inicio
    
    def ejecutar_con_hilos(self, tareas, tipo, max_hilos=4):
        """Ejecuta tareas usando hilos."""
        inicio = time.time()
        hilos = []
        
        def ejecutar_tarea(tarea):
            if tipo == "cpu":
                return self.tarea_cpu(tarea)
            elif tipo == "io":
                return self.tarea_io(tarea)
            elif tipo == "mixta":
                return self.tarea_mixta(*tarea)
        
        # Crear y comenzar hilos
        for tarea in tareas:
            while threading.active_count() - 1 >= max_hilos:
                time.sleep(0.001)
            
            hilo = threading.Thread(target=ejecutar_tarea, args=(tarea,))
            hilos.append(hilo)
            hilo.start()
        
        # Esperar a que todos terminen
        for hilo in hilos:
            hilo.join()
        
        return time.time() - inicio
    
    def ejecutar_con_procesos(self, tareas, tipo, max_procesos=4):
        """Ejecuta tareas usando procesos."""
        inicio = time.time()
        
        # Definir función para pickling
        if tipo == "cpu":
            func = self.tarea_cpu
        elif tipo == "io":
            func = self.tarea_io
        elif tipo == "mixta":
            func = lambda x: self.tarea_mixta(*x)
        
        # Usar Pool
        with multiprocessing.Pool(processes=max_procesos) as pool:
            pool.map(func, tareas)
        
        return time.time() - inicio
    
    def ejecutar_pruebas_completas(self, ejecuciones=5):
        """
        Ejecuta pruebas completas para los tres tipos de tareas.
        """
        print("=== COMPARACIÓN COMPLETA: HILOS vs PROCESOS ===")
        print(f"Ejecuciones por prueba: {ejecuciones}")
        
        # Configuraciones de prueba
        configuraciones = [
            ("cpu", [100000, 150000, 200000, 250000], "CPU intensiva"),
            ("io", [0.5, 0.7, 0.3, 0.9, 0.6], "I/O intensiva"),
            ("mixta", [(50000, 0.2), (70000, 0.3), (90000, 0.1), (60000, 0.4)], "Mixta")
        ]
        
        resultados_finales = []
        
        for tipo_tarea, tareas, descripcion in configuraciones:
            print(f"\\n--- {descripcion} ---")
            print(f"Tareas: {tareas}")
            
            tiempos_sec = []
            tiempos_hilos = []
            tiempos_proc = []
            
            for _ in range(ejecuciones):
                # Secuencial
                tiempo_sec = self.ejecutar_secuencial(tareas, tipo_tarea)
                tiempos_sec.append(tiempo_sec)
                
                # Hilos
                tiempo_hilos = self.ejecutar_con_hilos(tareas, tipo_tarea, max_hilos=4)
                tiempos_hilos.append(tiempo_hilos)
                
                # Procesos
                tiempo_proc = self.ejecutar_con_procesos(tareas, tipo_tarea, max_procesos=4)
                tiempos_proc.append(tiempo_proc)
            
            # Calcular promedios
            prom_sec = statistics.mean(tiempos_sec)
            prom_hilos = statistics.mean(tiempos_hilos)
            prom_proc = statistics.mean(tiempos_proc)
            
            # Calcular speedup
            speedup_hilos = prom_sec / prom_hilos
            speedup_proc = prom_sec / prom_proc
            
            resultados_finales.append({
                "tipo": tipo_tarea,
                "descripcion": descripcion,
                "secuencial": prom_sec,
                "hilos": prom_hilos,
                "procesos": prom_proc,
                "speedup_hilos": speedup_hilos,
                "speedup_procesos": speedup_proc,
                "recomendacion": "hilos" if speedup_hilos > speedup_proc else "procesos"
            })
            
            print(f"  Secuencial: {prom_sec:.2f}s")
            print(f"  4 Hilos:    {prom_hilos:.2f}s (speedup: {speedup_hilos:.2f}x)")
            print(f"  4 Procesos: {prom_proc:.2f}s (speedup: {speedup_proc:.2f}x)")
        
        return resultados_finales
    
    def analizar_y_recomendar(self, resultados):
        """
        Analiza resultados y proporciona recomendaciones.
        """
        print("\\n=== ANÁLISIS Y RECOMENDACIONES ===")
        print("-" * 60)
        
        for r in resultados:
            mejor = "HILOS" if r["speedup_hilos"] > r["speedup_procesos"] else "PROCESOS"
            print(f"{r['descripcion']}:")
            print(f"  • Speedup hilos: {r['speedup_hilos']:.2f}x")
            print(f"  • Speedup procesos: {r['speedup_procesos']:.2f}x")
            print(f"  • RECOMENDACIÓN: Usar {mejor}")
            print()
        
        # Reglas generales
        print("=== REGLAS GENERALES ===")
        print("""
        1. PARA I/O (red, disco, bases de datos):
           • Usar HILOS (GIL no limita I/O)
           • Mientras un hilo espera, otros pueden ejecutar
           • Overhead menor que procesos
        
        2. PARA CPU INTENSIVAS (cálculos, procesamiento):
           • Usar PROCESOS (cada proceso tiene su propio GIL)
           • Pueden ejecutar en paralelo en múltiples núcleos
           • Hilos NO aceleran CPU por el GIL
        
        3. PARA TAREAS MIXTAS:
           • Generalmente HILOS (si el I/O es significativo)
           • Procesos si la parte CPU domina
           • Medir para determinar el mejor enfoque
        """)
        
        # El GIL explicado
        print("=== EL GIL (GLOBAL INTERPRETER LOCK) ===")
        print("""
        ¿Qué es?
        • Mecanismo de CPython que permite solo UN hilo ejecutando
          bytecode Python a la vez
        
        ¿Por qué existe?
        • Simplifica la gestión de memoria (contador de referencias)
        • Hace que CPython sea thread-safe por defecto
        
        Consecuencias:
        • Hilos NO pueden ejecutar bytecode Python en paralelo
        • I/O está liberado del GIL (por eso hilos funcionan para I/O)
        • Extensiones en C pueden liberar el GIL
        
        Soluciones:
        • Usar multiprocessing para CPU intensivas
        • Usar async/await para I/O (capítulo siguiente)
        • Usar implementaciones sin GIL (Jython, IronPython)
        """)

# Ejecutar comparación completa
def ejecutar_comparacion_completa():
    """
    Ejecuta una comparación completa entre hilos y procesos.
    """
    comparador = ComparadorHilosProcesos()
    
    print("Iniciando comparación completa...")
    resultados = comparador.ejecutar_pruebas_completas(ejecuciones=3)
    
    comparador.analizar_y_recomendar(resultados)
    
    # Tabla resumen
    print("=== TABLA RESUMEN ===")
    print("-" * 80)
    print(f"{'Tipo':<15} {'Secuencial':<12} {'Hilos(4)':<12} {'Procesos(4)':<12} {'Mejor':<10} {'Speedup':<10}")
    print("-" * 80)
    
    for r in resultados:
        mejor = "Hilos" if r["speedup_hilos"] > r["speedup_procesos"] else "Procesos"
        speedup = max(r["speedup_hilos"], r["speedup_procesos"])
        print(f"{r['descripcion']:<15} {r['secuencial']:>10.2f}s {r['hilos']:>10.2f}s "
              f"{r['procesos']:>10.2f}s {mejor:>10} {speedup:>9.2f}x")
    
    print("-" * 80)
    
    # Consejos prácticos
    print("\\n=== CONSEJOS PRÁCTICOS ===")
    print("1. Empieza con secuencial, luego optimiza si es necesario")
    print("2. Usa hilos para servidores web, descargas, lectura de archivos")
    print("3. Usa procesos para cálculos matemáticos, procesamiento de datos")
    print("4. Considera async/await para I/O intensivo (más eficiente que hilos)")
    print("5. Siempre mide el rendimiento real en tu caso específico")
    
    return resultados

# Ejecutar la comparación
resultados_finales = ejecutar_comparacion_completa()

# Demostración adicional: creación y destrucción
print("\\n=== DEMOSTRACIÓN: CREACIÓN Y DESTRUCCIÓN ===")

def medir_overhead_creacion(num_elementos=1000):
    """Mide el overhead de creación de hilos vs procesos."""
    
    def tarea_vacia():
        return 42
    
    # Hilos
    inicio = time.time()
    hilos = []
    for _ in range(num_elementos):
        hilo = threading.Thread(target=tarea_vacia)
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    tiempo_hilos = time.time() - inicio
    
    # Procesos (solo 100 para no saturar el sistema)
    inicio = time.time()
    procesos = []
    for _ in range(min(100, num_elementos)):
        proceso = multiprocessing.Process(target=tarea_vacia)
        procesos.append(proceso)
        proceso.start()
    
    for proceso in procesos:
        proceso.join()
    tiempo_procesos = time.time() - inicio
    
    print(f"Creación de {num_elementos} elementos:")
    print(f"  Hilos: {tiempo_hilos:.3f}s ({tiempo_hilos/num_elementos*1000:.1f}ms por hilo)")
    print(f"  Procesos (100): {tiempo_procesos:.3f}s ({tiempo_procesos/100*1000:.1f}ms por proceso)")
    print(f"  Procesos son ~{tiempo_procesos/100/(tiempo_hilos/num_elementos):.1f}x más lentos en creación")

medir_overhead_creacion(500)`


// Ejercicio práctico - Solución
const solucionCode = `import time
import threading
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from queue import Queue
import random
import statistics

class SistemaProcesamientoImagenes:
    """
    Sistema híbrido que usa hilos para I/O y procesos para CPU.
    """
    def __init__(self):
        self.imagenes_simuladas = [
            ("imagen1.jpg", 1024, 768, 5.2),   # nombre, ancho, alto, tamaño_mb
            ("imagen2.png", 1920, 1080, 8.7),
            ("imagen3.jpg", 800, 600, 2.1),
            ("imagen4.bmp", 2560, 1440, 15.3),
            ("imagen5.jpg", 1280, 720, 4.8),
            ("imagen6.png", 3840, 2160, 32.5),
            ("imagen7.jpg", 1600, 900, 6.4),
            ("imagen8.bmp", 2048, 1536, 18.9)
        ]
    
    def cargar_imagen(self, nombre, ancho, alto, tamaño_mb):
        """
        Simula la carga de una imagen desde disco (operación I/O).
        """
        # Tiempo de carga proporcional al tamaño
        tiempo_carga = tamaño_mb * 0.1  # 0.1s por MB
        
        print(f"  [I/O] Cargando {nombre} ({tamaño_mb}MB, {ancho}x{alto}) - {tiempo_carga:.2f}s")
        time.sleep(tiempo_carga)
        
        # Simular imagen cargada como matriz de píxeles
        imagen_simulada = {
            "nombre": nombre,
            "ancho": ancho,
            "alto": alto,
            "tamaño_mb": tamaño_mb,
            "datos": [[(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)) 
                      for _ in range(10)] for _ in range(10)]  # Matriz 10x10 simulada
        }
        
        return imagen_simulada
    
    def aplicar_filtro_grises(self, imagen):
        """
        Aplica filtro escala de grises a una imagen (operación CPU).
        """
        print(f"  [CPU] Aplicando filtro grises a {imagen['nombre']}")
        
        # Simular procesamiento CPU intensivo
        # Tiempo proporcional al tamaño de la imagen
        tiempo_procesamiento = (imagen['ancho'] * imagen['alto']) / 1000000
        
        inicio = time.time()
        
        # Simular cálculo intensivo
        total = 0
        for _ in range(int(tiempo_procesamiento * 1000000)):
            total += random.random()
        
        # Aplicar "filtro" simulado
        imagen_filtrada = imagen.copy()
        imagen_filtrada["filtro"] = "escala_grises"
        imagen_filtrada["tiempo_procesamiento"] = time.time() - inicio
        imagen_filtrada["valor_simulado"] = total  # Para demostrar que se hizo trabajo
        
        return imagen_filtrada
    
    def aplicar_filtro_desenfoque(self, imagen):
        """
        Aplica filtro de desenfoque (más intensivo en CPU).
        """
        print(f"  [CPU] Aplicando filtro desenfoque a {imagen['nombre']}")
        
        # Más intensivo que escala de grises
        tiempo_procesamiento = (imagen['ancho'] * imagen['alto']) / 500000
        
        inicio = time.time()
        
        # Cálculo más intensivo
        total = 0
        for _ in range(int(tiempo_procesamiento * 1000000)):
            total += random.random() * random.random()
        
        imagen_filtrada = imagen.copy()
        imagen_filtrada["filtro"] = "desenfoque"
        imagen_filtrada["tiempo_procesamiento"] = time.time() - inicio
        imagen_filtrada["valor_simulado"] = total
        
        return imagen_filtrada
    
    def procesar_secuencial(self):
        """
        Procesa todas las imágenes de forma secuencial.
        """
        print("=== PROCESAMIENTO SECUENCIAL ===")
        inicio = time.time()
        resultados = []
        
        for img_info in self.imagenes_simuladas:
            # 1. Cargar imagen (I/O)
            imagen = self.cargar_imagen(*img_info)
            
            # 2. Aplicar filtro (CPU)
            if random.choice([True, False]):
                imagen_filtrada = self.aplicar_filtro_grises(imagen)
            else:
                imagen_filtrada = self.aplicar_filtro_desenfoque(imagen)
            
            resultados.append(imagen_filtrada)
        
        tiempo_total = time.time() - inicio
        
        print(f"\\nTiempo total secuencial: {tiempo_total:.2f}s")
        print(f"Imágenes procesadas: {len(resultados)}")
        
        return resultados, tiempo_total
    
    def procesar_con_hilos_io(self, max_hilos_io=3):
        """
        Usa hilos solo para la carga de imágenes (I/O).
        """
        print(f"=== PROCESAMIENTO CON HILOS (I/O) ===")
        print(f"Hilos para I/O: {max_hilos_io}")
        
        inicio = time.time()
        
        # Usar ThreadPoolExecutor para carga de imágenes
        with ThreadPoolExecutor(max_workers=max_hilos_io) as executor:
            # Cargar todas las imágenes concurrentemente
            futuros = {}
            for img_info in self.imagenes_simuladas:
                futuro = executor.submit(self.cargar_imagen, *img_info)
                futuros[futuro] = img_info[0]
            
            # Recoger imágenes cargadas
            imagenes_cargadas = []
            for futuro in futuros:
                imagenes_cargadas.append(futuro.result())
        
        # Procesar imágenes secuencialmente (CPU)
        resultados = []
        for imagen in imagenes_cargadas:
            if random.choice([True, False]):
                imagen_filtrada = self.aplicar_filtro_grises(imagen)
            else:
                imagen_filtrada = self.aplicar_filtro_desenfoque(imagen)
            resultados.append(imagen_filtrada)
        
        tiempo_total = time.time() - inicio
        
        print(f"\\nTiempo total con hilos I/O: {tiempo_total:.2f}s")
        print(f"Imágenes procesadas: {len(resultados)}")
        
        return resultados, tiempo_total
    
    def procesar_con_procesos_cpu(self, max_procesos_cpu=2):
        """
        Usa procesos para el procesamiento de imágenes (CPU).
        Las imágenes se cargan secuencialmente.
        """
        print(f"=== PROCESAMIENTO CON PROCESOS (CPU) ===")
        print(f"Procesos para CPU: {max_procesos_cpu}")
        
        inicio = time.time()
        
        # Cargar imágenes secuencialmente (I/O)
        imagenes_cargadas = []
        for img_info in self.imagenes_simuladas:
            imagen = self.cargar_imagen(*img_info)
            imagenes_cargadas.append(imagen)
        
        # Usar ProcessPoolExecutor para filtros
        resultados = []
        with ProcessPoolExecutor(max_workers=max_procesos_cpu) as executor:
            # Enviar tareas de filtrado
            futuros = []
            for imagen in imagenes_cargadas:
                if random.choice([True, False]):
                    futuro = executor.submit(self.aplicar_filtro_grises, imagen)
                else:
                    futuro = executor.submit(self.aplicar_filtro_desenfoque, imagen)
                futuros.append(futuro)
            
            # Recoger resultados
            for futuro in futuros:
                resultados.append(futuro.result())
        
        tiempo_total = time.time() - inicio
        
        print(f"\\nTiempo total con procesos CPU: {tiempo_total:.2f}s")
        print(f"Imágenes procesadas: {len(resultados)}")
        
        return resultados, tiempo_total
    
    def procesar_hibrido(self, max_hilos_io=2, max_procesos_cpu=2):
        """
        Sistema híbrido: hilos para I/O, procesos para CPU.
        """
        print(f"=== SISTEMA HÍBRIDO ===")
        print(f"Hilos para I/O: {max_hilos_io}")
        print(f"Procesos para CPU: {max_procesos_cpu}")
        
        inicio = time.time()
        resultados = []
        
        # Paso 1: Cargar imágenes con hilos
        print("\\nFase 1: Carga de imágenes (hilos)...")
        imagenes_cargadas = []
        with ThreadPoolExecutor(max_workers=max_hilos_io) as io_executor:
            futuros_io = {}
            for img_info in self.imagenes_simuladas:
                futuro = io_executor.submit(self.cargar_imagen, *img_info)
                futuros_io[futuro] = img_info[0]
            
            for futuro in futuros_io:
                imagenes_cargadas.append(futuro.result())
        
        # Paso 2: Procesar imágenes con procesos
        print("\\nFase 2: Aplicación de filtros (procesos)...")
        with ProcessPoolExecutor(max_workers=max_procesos_cpu) as cpu_executor:
            futuros_cpu = []
            for imagen in imagenes_cargadas:
                if random.choice([True, False]):
                    futuro = cpu_executor.submit(self.aplicar_filtro_grises, imagen)
                else:
                    futuro = cpu_executor.submit(self.aplicar_filtro_desenfoque, imagen)
                futuros_cpu.append(futuro)
            
            for futuro in futuros_cpu:
                resultados.append(futuro.result())
        
        tiempo_total = time.time() - inicio
        
        print(f"\\nTiempo total sistema híbrido: {tiempo_total:.2f}s")
        print(f"Imágenes procesadas: {len(resultados)}")
        
        return resultados, tiempo_total
    
    def comparar_metodos(self, ejecuciones=3):
        """
        Compara los cuatro métodos de procesamiento.
        """
        print("=== COMPARACIÓN DE MÉTODOS DE PROCESAMIENTO ===")
        print(f"Imágenes: {len(self.imagenes_simuladas)}")
        print(f"Ejecuciones por método: {ejecuciones}")
        
        metodos = [
            ("Secuencial", self.procesar_secuencial),
            ("Hilos I/O", lambda: self.procesar_con_hilos_io(max_hilos_io=3)),
            ("Procesos CPU", lambda: self.procesar_con_procesos_cpu(max_procesos_cpu=2)),
            ("Híbrido", lambda: self.procesar_hibrido(max_hilos_io=2, max_procesos_cpu=2))
        ]
        
        resultados_comparacion = {}
        
        for nombre, metodo in metodos:
            print(f"\\n--- {nombre} ---")
            tiempos = []
            
            for i in range(ejecuciones):
                print(f"Ejecución {i+1}/{ejecuciones}...")
                _, tiempo = metodo()
                tiempos.append(tiempo)
            
            tiempo_promedio = statistics.mean(tiempos)
            desviacion = statistics.stdev(tiempos) if len(tiempos) > 1 else 0
            
            resultados_comparacion[nombre] = {
                "tiempo_promedio": tiempo_promedio,
                "desviacion": desviacion,
                "tiempos": tiempos
            }
            
            print(f"Tiempo promedio: {tiempo_promedio:.2f}s ± {desviacion:.2f}s")
        
        # Análisis comparativo
        print("\\n=== ANÁLISIS COMPARATIVO ===")
        print("-" * 70)
        print(f"{'Método':<15} {'Tiempo (s)':<12} {'Speedup':<10} {'Recomendación'}")
        print("-" * 70)
        
        tiempo_base = resultados_comparacion["Secuencial"]["tiempo_promedio"]
        
        for nombre, datos in resultados_comparacion.items():
            tiempo = datos["tiempo_promedio"]
            speedup = tiempo_base / tiempo if tiempo > 0 else 0
            
            if nombre == "Secuencial":
                recomendacion = "Solo para pocas imágenes"
            elif nombre == "Hilos I/O":
                recomendacion = "Mejor para muchas imágenes pequeñas"
            elif nombre == "Procesos CPU":
                recomendacion = "Mejor para imágenes grandes/complejas"
            else:  # Híbrido
                recomendacion = "Óptimo para mezcla de I/O y CPU"
            
            print(f"{nombre:<15} {tiempo:>10.2f}s {speedup:>9.2f}x  {recomendacion}")
        
        print("-" * 70)
        
        # Conclusión
        print("\\n=== CONCLUSIÓN ===")
        print("1. Hilos son ideales para I/O (carga de imágenes)")
        print("2. Procesos son ideales para CPU (aplicación de filtros)")
        print("3. El sistema híbrido combina lo mejor de ambos mundos")
        print("4. La elección depende del balance I/O vs CPU en tu caso")
        
        return resultados_comparacion

# Ejemplo de uso completo
def ejemplo_completo():
    """
    Ejemplo completo del sistema de procesamiento de imágenes.
    """
    sistema = SistemaProcesamientoImagenes()
    
    print("Sistema de Procesamiento de Imágenes")
    print("=" * 50)
    print("Imágenes a procesar:")
    for nombre, ancho, alto, tamaño in sistema.imagenes_simuladas:
        print(f"  {nombre}: {ancho}x{alto}, {tamaño}MB")
    
    # Ejecutar comparación
    print("\\nIniciando comparación de métodos...")
    resultados = sistema.comparar_metodos(ejecuciones=2)
    
    # Demostración adicional: problema del GIL
    print("\\n=== DEMOSTRACIÓN DEL PROBLEMA DEL GIL ===")
    
    def tarea_cpu_intensiva(iteraciones):
        total = 0
        for i in range(iteraciones):
            total += i * i
        return total
    
    # Con hilos (afectados por GIL)
    print("\\n1. Tarea CPU intensiva con 4 hilos (afectada por GIL):")
    inicio = time.time()
    hilos = []
    for _ in range(4):
        hilo = threading.Thread(target=tarea_cpu_intensiva, args=(1000000,))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    tiempo_hilos = time.time() - inicio
    print(f"   Tiempo con 4 hilos: {tiempo_hilos:.2f}s")
    
    # Con procesos (no afectados por GIL)
    print("\\n2. Tarea CPU intensiva con 4 procesos (no afectados por GIL):")
    inicio = time.time()
    with multiprocessing.Pool(processes=4) as pool:
        pool.map(tarea_cpu_intensiva, [1000000, 1000000, 1000000, 1000000])
    tiempo_procesos = time.time() - inicio
    print(f"   Tiempo con 4 procesos: {tiempo_procesos:.2f}s")
    
    print(f"\\nSpeedup procesos vs hilos: {tiempo_hilos/tiempo_procesos:.2f}x")
    print("Explicación: Los hilos comparten el GIL, los procesos tienen GIL separados.")
    
    # Reglas prácticas finales
    print("\\n=== REGLAS PRÁCTICAS FINALES ===")
    print("""
    CUÁNDO USAR HILOS:
    • Operaciones de red (descargas, APIs)
    • Lectura/escritura de archivos
    • Acceso a bases de datos
    • Servidores web (manejo de conexiones)
    
    CUÁNDO USAR PROCESOS:
    • Cálculos matemáticos complejos
    • Procesamiento de imágenes/video
    • Análisis de datos grandes
    • Simulaciones científicas
    
    CUÁNDO USAR SISTEMA HÍBRIDO:
    • Aplicaciones con mezcla de I/O y CPU
    • Pipelines de procesamiento de datos
    • Sistemas que cargan y luego procesan datos
    """
    )

# Ejecutar ejemplo completo
ejemplo_completo()`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Qué es el GIL (Global Interpreter Lock) en Python?",
    opciones: [
      { letra: "A", texto: "Un mecanismo que permite solo un hilo ejecutando bytecode Python a la vez", correcta: true },
      { letra: "B", texto: "Una herramienta para gestionar memoria entre procesos", correcta: false },
      { letra: "C", texto: "Un sistema de bloqueo para archivos de configuración", correcta: false },
      { letra: "D", texto: "Una biblioteca para programación paralela", correcta: false }
    ],
    respuestaCorrecta: "A",
    explicacion: "El GIL es un mecanismo de CPython que permite que solo un hilo ejecute bytecode Python a la vez, lo que limita la paralelización real con hilos para operaciones CPU intensivas."
  },
  {
    texto: "¿Cuál es la principal ventaja de los procesos sobre los hilos para operaciones CPU intensivas?",
    opciones: [
      { letra: "A", texto: "Comparten memoria, por lo que la comunicación es más rápida", correcta: false },
      { letra: "B", texto: "Cada proceso tiene su propio GIL, permitiendo ejecución paralela real", correcta: true },
      { letra: "C", texto: "Son más fáciles de programar y depurar", correcta: false },
      { letra: "D", texto: "Consumen menos recursos del sistema", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Los procesos tienen memoria separada y cada uno tiene su propio GIL, lo que permite ejecución paralela real en múltiples núcleos de CPU, a diferencia de los hilos que comparten el GIL."
  },
  {
    texto: "¿Para qué tipo de operaciones son más adecuados los hilos en Python?",
    opciones: [
      { letra: "A", texto: "Operaciones CPU intensivas como cálculos matemáticos complejos", correcta: false },
      { letra: "B", texto: "Operaciones I/O como descargas de red o lectura de archivos", correcta: true },
      { letra: "C", texto: "Operaciones que requieren máxima velocidad de procesamiento", correcta: false },
      { letra: "D", texto: "Operaciones que necesitan compartir grandes cantidades de datos entre tareas", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Los hilos son adecuados para operaciones I/O porque mientras un hilo está esperando (por red, disco, etc.), otros hilos pueden ejecutarse, y el GIL no limita estas operaciones de espera."
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