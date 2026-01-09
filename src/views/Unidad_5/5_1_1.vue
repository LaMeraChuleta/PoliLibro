<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="border-b border-gray-200 pb-4">
      <h1 class="text-3xl font-bold text-gray-800">Capítulo 5.1.1: Descripción de Programación Concurrente</h1>
      <p class="text-gray-600 mt-2">Ejecutar múltiples tareas aparentemente simultáneas para mejorar la eficiencia.</p>
    </header>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Múltiples Tareas, Mejor Rendimiento</h2>
      <p class="text-gray-700 leading-relaxed">
        La programación concurrente permite ejecutar múltiples tareas de forma aparentemente simultánea, 
        mejorando la eficiencia al aprovechar los tiempos de espera de unas tareas para ejecutar otras. 
        A diferencia del paralelismo (ejecución real simultánea en múltiples núcleos), la concurrencia 
        puede lograrse incluso en un solo núcleo mediante cambios de contexto. En Python, se implementa 
        principalmente mediante hilos (threads) para operaciones I/O limitadas y procesos para operaciones 
        CPU intensivas, cada uno con sus propias ventajas y limitaciones.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Concurrencia vs Paralelismo</h3>
          </div>
          <p class="text-gray-600 text-sm">Concurrencia: múltiples tareas progresando. Paralelismo: múltiples tareas ejecutando simultáneamente.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Servidor web: atiende múltiples clientes simultáneamente mientras algunos esperan I/O.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">Python tiene GIL (Global Interpreter Lock) que limita hilos para CPU, pero no para I/O.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">La concurrencia existe desde los años 60, pero se popularizó con la web y aplicaciones multitarea.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Concurrencia secuencial vs concurrente</h3>
        <p class="text-gray-600 mb-4">Comparación entre ejecución secuencial y concurrente para tareas con tiempos de espera.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Hilos (Threads) para operaciones I/O</h3>
        <p class="text-gray-600 mb-4">Uso de threading para descargar múltiples archivos web simultáneamente.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Procesos (Process) para operaciones CPU intensivas</h3>
        <p class="text-gray-600 mb-4">Uso de multiprocessing para cálculos matemáticos pesados que aprovechan múltiples núcleos.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa un sistema de monitoreo de servidores que verifique el estado 
          (online/offline) de múltiples servidores concurrentemente usando hilos. Cada verificación debe simular 
          un tiempo de espera de red. Luego, implementa una versión que use procesos y compara el rendimiento. 
          Usa los servidores del ejemplo 2 como referencia.
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

// Ejemplo 1: Concurrencia secuencial vs concurrente
const ejemplo1Code = `import time
import threading

def tarea(nombre, duracion):
    """
    Simula una tarea que toma cierto tiempo en completarse.
    """
    print(f"[{nombre}] Iniciando tarea (duración: {duracion}s)")
    time.sleep(duracion)
    print(f"[{nombre}] Tarea completada")
    return f"Resultado de {nombre}"

def ejecucion_secuencial(tareas):
    """
    Ejecuta tareas de forma secuencial (una después de otra).
    """
    print("=== EJECUCIÓN SECUENCIAL ===")
    inicio = time.time()
    resultados = []
    
    for nombre, duracion in tareas:
        resultado = tarea(nombre, duracion)
        resultados.append(resultado)
    
    tiempo_total = time.time() - inicio
    print(f"Tiempo total secuencial: {tiempo_total:.2f} segundos")
    return resultados, tiempo_total

def ejecucion_concurrente_hilos(tareas):
    """
    Ejecuta tareas concurrentemente usando hilos.
    """
    print("\\n=== EJECUCIÓN CONCURRENTE (HILOS) ===")
    inicio = time.time()
    resultados = []
    hilos = []
    
    def tarea_con_resultado(nombre, duracion):
        resultado = tarea(nombre, duracion)
        resultados.append(resultado)
    
    # Crear y comenzar hilos
    for nombre, duracion in tareas:
        hilo = threading.Thread(target=tarea_con_resultado, args=(nombre, duracion))
        hilos.append(hilo)
        hilo.start()
    
    # Esperar a que todos los hilos terminen
    for hilo in hilos:
        hilo.join()
    
    tiempo_total = time.time() - inicio
    print(f"Tiempo total concurrente: {tiempo_total:.2f} segundos")
    return resultados, tiempo_total

# Definir tareas de ejemplo (nombre, duración en segundos)
tareas = [
    ("Tarea A", 2),
    ("Tarea B", 3),
    ("Tarea C", 1),
    ("Tarea D", 2),
    ("Tarea E", 1)
]

print("Tareas a ejecutar:")
for nombre, duracion in tareas:
    print(f"  {nombre}: {duracion}s")

# Ejecutar de forma secuencial
resultados_sec, tiempo_sec = ejecucion_secuencial(tareas)

# Ejecutar de forma concurrente
resultados_conc, tiempo_conc = ejecucion_concurrente_hilos(tareas)

# Análisis comparativo
print("\\n=== ANÁLISIS COMPARATIVO ===")
print(f"Tiempo secuencial: {tiempo_sec:.2f}s")
print(f"Tiempo concurrente: {tiempo_conc:.2f}s")
print(f"Mejora: {tiempo_sec/tiempo_conc:.2f}x más rápido")

suma_duraciones = sum(duracion for _, duracion in tareas)
print(f"\\nSuma de duraciones individuales: {suma_duraciones}s")
print(f"Tiempo ideal concurrente (sin overhead): {max(duracion for _, duracion in tareas)}s")

print("\\n=== EXPLICACIÓN ===")
print("En ejecución secuencial, cada tarea espera a que la anterior termine.")
print("En ejecución concurrente, mientras una tarea está en time.sleep(),")
print("otra tarea puede ejecutarse, aprovechando los tiempos de espera.")`

// Ejemplo 2: Hilos para operaciones I/O
const ejemplo2Code = `import threading
import time
import random
from queue import Queue

class DescargadorConcurrente:
    """
    Sistema de descarga concurrente de múltiples archivos usando hilos.
    """
    def __init__(self, max_hilos=3):
        self.max_hilos = max_hilos
        self.cola = Queue()
        self.resultados = {}
        self.lock = threading.Lock()
    
    def simular_descarga(self, url, tamano_mb):
        """
        Simula la descarga de un archivo con tiempo proporcional al tamaño.
        """
        tiempo_descarga = tamano_mb * 0.5  # 0.5 segundos por MB
        print(f"  Descargando {url} ({tamano_mb}MB) - estimado: {tiempo_descarga:.1f}s")
        
        # Simular tiempo de descarga
        time.sleep(tiempo_descarga)
        
        # Simular posible fallo (10% de probabilidad)
        if random.random() < 0.1:
            raise Exception(f"Error de conexión en {url}")
        
        return f"{url} descargado ({tamano_mb}MB, {tiempo_descarga:.1f}s)"
    
    def trabajador(self):
        """
        Función ejecutada por cada hilo trabajador.
        """
        while True:
            try:
                # Obtener tarea de la cola
                url, tamano = self.cola.get(timeout=1)
                
                try:
                    resultado = self.simular_descarga(url, tamano)
                    with self.lock:
                        self.resultados[url] = ("éxito", resultado)
                    print(f"  ✓ {url} completado")
                except Exception as e:
                    with self.lock:
                        self.resultados[url] = ("error", str(e))
                    print(f"  ✗ {url} falló: {e}")
                
                # Marcar tarea como completada
                self.cola.task_done()
                
            except:
                # Timeout - no hay más tareas
                break
    
    def descargar_archivos(self, archivos):
        """
        Descarga múltiples archivos concurrentemente.
        archivos: lista de tuplas (url, tamaño_mb)
        """
        print(f"=== DESCARGA CONCURRENTE DE ARCHIVOS ===")
        print(f"Usando {self.max_hilos} hilos concurrentes")
        print(f"Total archivos: {len(archivos)}")
        
        inicio = time.time()
        
        # Agregar archivos a la cola
        for url, tamano in archivos:
            self.cola.put((url, tamano))
        
        # Crear y comenzar hilos trabajadores
        hilos = []
        for i in range(self.max_hilos):
            hilo = threading.Thread(target=self.trabajador, name=f"Trabajador-{i}")
            hilos.append(hilo)
            hilo.start()
        
        # Esperar a que se completen todas las tareas
        self.cola.join()
        
        # Esperar a que todos los hilos terminen
        for hilo in hilos:
            hilo.join()
        
        tiempo_total = time.time() - inicio
        
        # Mostrar resultados
        print(f"\\n=== RESULTADOS ===")
        print(f"Tiempo total: {tiempo_total:.2f} segundos")
        
        exito = sum(1 for estado, _ in self.resultados.values() if estado == "éxito")
        error = len(archivos) - exito
        
        print(f"Archivos exitosos: {exito}")
        print(f"Archivos con error: {error}")
        
        # Tiempo si fuera secuencial
        tiempo_secuencial = sum(tamano for _, tamano in archivos) * 0.5
        print(f"\\nTiempo estimado secuencial: {tiempo_secuencial:.2f}s")
        print(f"Mejora: {tiempo_secuencial/tiempo_total:.2f}x más rápido")
        
        return self.resultados

# Ejemplo de uso
def ejemplo_descargas():
    """
    Ejemplo de descarga concurrente de archivos.
    """
    # Lista de archivos a descargar (URL, tamaño en MB)
    archivos = [
        ("https://ejemplo.com/imagen1.jpg", 2),
        ("https://ejemplo.com/imagen2.jpg", 5),
        ("https://ejemplo.com/documento.pdf", 10),
        ("https://ejemplo.com/video.mp4", 50),
        ("https://ejemplo.com/musica.mp3", 8),
        ("https://ejemplo.com/archivo.zip", 20),
        ("https://ejemplo.com/presentacion.pptx", 15),
        ("https://ejemplo.com/libro.epub", 3)
    ]
    
    print("Archivos a descargar:")
    for url, tamano in archivos:
        print(f"  {url}: {tamano}MB")
    
    # Crear descargador con 3 hilos concurrentes
    descargador = DescargadorConcurrente(max_hilos=3)
    
    # Ejecutar descargas
    resultados = descargador.descargar_archivos(archivos)
    
    # Mostrar detalles
    print("\\n=== DETALLES POR ARCHIVO ===")
    for url, (estado, mensaje) in resultados.items():
        print(f"{url}: {estado} - {mensaje}")

# Ejecutar ejemplo
ejemplo_descargas()

print("\\n=== OBSERVACIONES ===")
print("1. Los hilos son ideales para operaciones I/O (como descargas)")
print("2. Mientras un hilo espera la red, otros pueden ejecutarse")
print("3. El GIL de Python no limita las operaciones I/O")
print("4. Usar colas (Queue) es thread-safe y evita condiciones de carrera")`

// Ejemplo 3: Procesos para CPU intensivas
const ejemplo3Code = `import time
import multiprocessing
import math
import concurrent.futures

def calcular_primos_hasta(n):
    """
    Calcula todos los números primos hasta n (operación CPU intensiva).
    """
    print(f"Calculando primos hasta {n}...")
    
    def es_primo(num):
        if num < 2:
            return False
        if num == 2:
            return True
        if num % 2 == 0:
            return False
        
        limite = int(math.sqrt(num)) + 1
        for i in range(3, limite, 2):
            if num % i == 0:
                return False
        return True
    
    primos = [i for i in range(2, n + 1) if es_primo(i)]
    return len(primos), primos[:5]  # Retornar cantidad y primeros 5

def calcular_factorial(n):
    """
    Calcula factorial de n (operación CPU intensiva).
    """
    print(f"Calculando factorial de {n}...")
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return n, len(str(resultado))  # Retornar n y número de dígitos

def calcular_sumatoria_cuadrados(hasta):
    """
    Calcula sumatoria de cuadrados hasta n.
    """
    print(f"Calculando sumatoria de cuadrados hasta {hasta}...")
    return sum(i * i for i in range(1, hasta + 1))

def ejecucion_secuencial_cpu(tareas_primos, tareas_factorial, tareas_sumatoria):
    """
    Ejecuta tareas CPU intensivas de forma secuencial.
    """
    print("=== EJECUCIÓN SECUENCIAL (CPU) ===")
    inicio = time.time()
    resultados = {}
    
    # Primos
    for n in tareas_primos:
        resultados[f"primos_{n}"] = calcular_primos_hasta(n)
    
    # Factoriales
    for n in tareas_factorial:
        resultados[f"factorial_{n}"] = calcular_factorial(n)
    
    # Sumatorias
    for n in tareas_sumatoria:
        resultados[f"sumatoria_{n}"] = calcular_sumatoria_cuadrados(n)
    
    tiempo = time.time() - inicio
    print(f"Tiempo total secuencial: {tiempo:.2f} segundos")
    return resultados, tiempo

def ejecucion_concurrente_procesos(tareas_primos, tareas_factorial, tareas_sumatoria):
    """
    Ejecuta tareas CPU intensivas usando procesos (multiprocessing).
    """
    print("\\n=== EJECUCIÓN CONCURRENTE (PROCESOS) ===")
    inicio = time.time()
    resultados = {}
    
    # Usar ProcessPoolExecutor para gestión automática
    with concurrent.futures.ProcessPoolExecutor(max_workers=4) as executor:
        # Enviar tareas de primos
        futuros_primos = {
            executor.submit(calcular_primos_hasta, n): f"primos_{n}"
            for n in tareas_primos
        }
        
        # Enviar tareas de factoriales
        futuros_factorial = {
            executor.submit(calcular_factorial, n): f"factorial_{n}"
            for n in tareas_factorial
        }
        
        # Enviar tareas de sumatorias
        futuros_sumatoria = {
            executor.submit(calcular_sumatoria_cuadrados, n): f"sumatoria_{n}"
            for n in tareas_sumatoria
        }
        
        # Combinar todos los futuros
        todos_futuros = {**futuros_primos, **futuros_factorial, **futuros_sumatoria}
        
        # Recoger resultados
        for futuro in concurrent.futures.as_completed(todos_futuros):
            nombre = todos_futuros[futuro]
            try:
                resultados[nombre] = futuro.result()
            except Exception as e:
                resultados[nombre] = f"Error: {e}"
    
    tiempo = time.time() - inicio
    print(f"Tiempo total con procesos: {tiempo:.2f} segundos")
    return resultados, tiempo

# Tareas CPU intensivas
tareas_primos = [10000, 20000, 15000, 25000]
tareas_factorial = [1000, 1500, 2000]
tareas_sumatoria = [1000000, 2000000, 3000000]

print("Tareas CPU intensivas a ejecutar:")
print(f"  Cálculo de primos hasta: {tareas_primos}")
print(f"  Cálculo de factoriales de: {tareas_factorial}")
print(f"  Sumatoria de cuadrados hasta: {tareas_sumatoria}")

# Ejecutar secuencialmente (un núcleo)
resultados_sec, tiempo_sec = ejecucion_secuencial_cpu(
    tareas_primos, tareas_factorial, tareas_sumatoria
)

# Ejecutar con procesos (múltiples núcleos)
resultados_proc, tiempo_proc = ejecucion_concurrente_procesos(
    tareas_primos, tareas_factorial, tareas_sumatoria
)

# Comparación
print("\\n=== COMPARACIÓN ===")
print(f"Tiempo secuencial: {tiempo_sec:.2f}s")
print(f"Tiempo con procesos: {tiempo_proc:.2f}s")
print(f"Mejora: {tiempo_sec/tiempo_proc:.2f}x más rápido")

# Mostrar algunos resultados
print("\\n=== ALGUNOS RESULTADOS ===")
print("(Primeros 5 primos de cada cálculo):")

for clave, valor in resultados_proc.items():
    if clave.startswith("primos"):
        n = int(clave.split("_")[1])
        cantidad, primeros = valor
        print(f"  Primos hasta {n}: {cantidad} primos, primeros: {primeros}")

print("\\n=== EXPLICACIÓN ===")
print("Para operaciones CPU intensivas en Python:")
print("1. Los hilos NO son efectivos debido al GIL (Global Interpreter Lock)")
print("2. Los procesos SÍ son efectivos porque cada proceso tiene su propio GIL")
print("3. Multiprocessing usa múltiples núcleos de CPU reales")
print("4. Ideal para cálculos matemáticos, procesamiento de datos, etc.")

# Ejemplo adicional: usando Pool.map
print("\\n=== EJEMPLO ADICIONAL: POOL.MAP ===")

def cuadrado(x):
    """Calcula el cuadrado de un número."""
    return x * x

def ejemplo_pool_map():
    """Ejemplo simple usando Pool.map."""
    numeros = list(range(1, 1000001))
    
    # Secuencial
    inicio = time.time()
    resultados_sec = [cuadrado(x) for x in numeros[:1000]]  # Muestra más pequeña
    tiempo_sec = time.time() - inicio
    
    # Con Pool
    inicio = time.time()
    with multiprocessing.Pool(processes=4) as pool:
        resultados_pool = pool.map(cuadrado, numeros[:1000])
    tiempo_pool = time.time() - inicio
    
    print(f"Cuadrados de 1000 números:")
    print(f"  Secuencial: {tiempo_sec:.3f}s")
    print(f"  Con Pool(4): {tiempo_pool:.3f}s")
    print(f"  Mejora: {tiempo_sec/tiempo_pool:.2f}x")

ejemplo_pool_map()`

// Ejercicio práctico - Solución
const solucionCode = `import threading
import multiprocessing
import time
import random
from queue import Queue

class MonitorServidores:
    """
    Sistema de monitoreo de servidores usando concurrencia.
    """
    def __init__(self):
        self.servidores = [
            ("servidor1.com", 80),
            ("servidor2.com", 443),
            ("servidor3.com", 8080),
            ("servidor4.com", 22),
            ("servidor5.com", 3306),
            ("servidor6.com", 5432),
            ("servidor7.com", 27017),
            ("servidor8.com", 6379)
        ]
    
    def verificar_servidor(self, servidor, puerto):
        """
        Simula la verificación de un servidor con tiempo de red variable.
        """
        # Simular tiempo de verificación (100ms a 2s)
        tiempo_verificacion = random.uniform(0.1, 2.0)
        time.sleep(tiempo_verificacion)
        
        # Simular estado (90% online, 10% offline)
        if random.random() < 0.9:
            return servidor, puerto, "online", tiempo_verificacion
        else:
            return servidor, puerto, "offline", tiempo_verificacion
    
    def monitorear_secuencial(self):
        """
        Monitoreo secuencial de todos los servidores.
        """
        print("=== MONITOREO SECUENCIAL ===")
        inicio = time.time()
        resultados = []
        
        for servidor, puerto in self.servidores:
            print(f"Verificando {servidor}:{puerto}...")
            resultado = self.verificar_servidor(servidor, puerto)
            resultados.append(resultado)
            print(f"  {servidor}:{puerto} -> {resultado[2]} ({resultado[3]:.2f}s)")
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def monitorear_con_hilos(self, max_hilos=4):
        """
        Monitoreo concurrente usando hilos.
        """
        print(f"\\n=== MONITOREO CON HILOS ({max_hilos} hilos) ===")
        inicio = time.time()
        resultados = []
        lock = threading.Lock()
        
        def tarea_verificacion(servidor, puerto):
            resultado = self.verificar_servidor(servidor, puerto)
            with lock:
                resultados.append(resultado)
            print(f"  {servidor}:{puerto} -> {resultado[2]} ({resultado[3]:.2f}s)")
        
        # Crear y comenzar hilos
        hilos = []
        for servidor, puerto in self.servidores:
            while threading.active_count() - 1 >= max_hilos:  # -1 por el hilo main
                time.sleep(0.01)  # Esperar si hay muchos hilos activos
            
            hilo = threading.Thread(target=tarea_verificacion, args=(servidor, puerto))
            hilos.append(hilo)
            print(f"Verificando {servidor}:{puerto}...")
            hilo.start()
        
        # Esperar a que todos los hilos terminen
        for hilo in hilos:
            hilo.join()
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def monitorear_con_procesos(self, max_procesos=4):
        """
        Monitoreo concurrente usando procesos.
        Nota: En realidad para I/O los hilos son suficientes,
        pero mostramos cómo sería con procesos.
        """
        print(f"\\n=== MONITOREO CON PROCESOS ({max_procesos} procesos) ===")
        inicio = time.time()
        
        # Función auxiliar que puede ser pickled (requerido por multiprocessing)
        def verificar_servidor_wrapper(args):
            servidor, puerto = args
            tiempo_verificacion = random.uniform(0.1, 2.0)
            time.sleep(tiempo_verificacion)
            
            if random.random() < 0.9:
                return servidor, puerto, "online", tiempo_verificacion
            else:
                return servidor, puerto, "offline", tiempo_verificacion
        
        # Usar Pool de procesos
        with multiprocessing.Pool(processes=max_procesos) as pool:
            print(f"Verificando {len(self.servidores)} servidores...")
            resultados = pool.map(verificar_servidor_wrapper, self.servidores)
        
        # Imprimir resultados
        for servidor, puerto, estado, tiempo in resultados:
            print(f"  {servidor}:{puerto} -> {estado} ({tiempo:.2f}s)")
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def analizar_resultados(self, resultados):
        """
        Analiza y muestra estadísticas de los resultados.
        """
        online = sum(1 for _, _, estado, _ in resultados if estado == "online")
        offline = len(resultados) - online
        
        tiempo_promedio = sum(tiempo for _, _, _, tiempo in resultados) / len(resultados)
        tiempo_max = max(tiempo for _, _, _, tiempo in resultados)
        tiempo_min = min(tiempo for _, _, _, tiempo in resultados)
        
        print("\\n=== ESTADÍSTICAS ===")
        print(f"Servidores online: {online}")
        print(f"Servidores offline: {offline}")
        print(f"Tiempo promedio por verificación: {tiempo_promedio:.2f}s")
        print(f"Tiempo mínimo: {tiempo_min:.2f}s")
        print(f"Tiempo máximo: {tiempo_max:.2f}s")
        
        return {
            "online": online,
            "offline": offline,
            "tiempo_promedio": tiempo_promedio,
            "tiempo_max": tiempo_max,
            "tiempo_min": tiempo_min
        }

# Ejecutar y comparar los tres métodos
def comparar_metodos():
    """
    Compara los tres métodos de monitoreo.
    """
    monitor = MonitorServidores()
    
    print("Servidores a monitorear:")
    for servidor, puerto in monitor.servidores:
        print(f"  {servidor}:{puerto}")
    
    # 1. Monitoreo secuencial
    print("\\n" + "="*50)
    resultados_sec, tiempo_sec = monitor.monitorear_secuencial()
    stats_sec = monitor.analizar_resultados(resultados_sec)
    
    # 2. Monitoreo con hilos
    print("\\n" + "="*50)
    resultados_hilos, tiempo_hilos = monitor.monitorear_con_hilos(max_hilos=4)
    stats_hilos = monitor.analizar_resultados(resultados_hilos)
    
    # 3. Monitoreo con procesos
    print("\\n" + "="*50)
    resultados_proc, tiempo_proc = monitor.monitorear_con_procesos(max_procesos=4)
    stats_proc = monitor.analizar_resultados(resultados_proc)
    
    # Comparación de tiempos
    print("\\n" + "="*50)
    print("=== COMPARACIÓN DE TIEMPOS ===")
    print(f"Método secuencial:      {tiempo_sec:.2f}s")
    print(f"Método con hilos (4):   {tiempo_hilos:.2f}s")
    print(f"Método con procesos (4): {tiempo_proc:.2f}s")
    
    print(f"\\nHilos vs Secuencial:   {tiempo_sec/tiempo_hilos:.2f}x más rápido")
    print(f"Procesos vs Secuencial: {tiempo_sec/tiempo_proc:.2f}x más rápido")
    print(f"Procesos vs Hilos:      {tiempo_hilos/tiempo_proc:.2f}x más rápido")
    
    # Análisis
    print("\\n=== ANÁLISIS ===")
    print("Para operaciones I/O (como verificación de red):")
    print("1. Hilos son muy efectivos (GIL no limita I/O)")
    print("2. Procesos tienen overhead mayor (creación más lenta)")
    print("3. Secuencial es ineficiente (no aprovecha tiempos de espera)")
    
    print("\\nNota: Los procesos muestran mejor tiempo en este ejemplo")
    print("porque Python puede ejecutar múltiples time.sleep() en paralelo.")
    print("En casos reales de red, los hilos son generalmente suficientes.")
    
    # Comparación de resultados (deberían ser similares)
    print("\\n=== VERIFICACIÓN DE RESULTADOS ===")
    print("¿Todos los métodos obtuvieron los mismos estados?")
    
    estados_sec = [estado for _, _, estado, _ in resultados_sec]
    estados_hilos = [estado for _, _, estado, _ in resultados_hilos]
    estados_proc = [estado for _, _, estado, _ in resultados_proc]
    
    # Ordenar para comparar (los servidores son los mismos)
    estados_sec.sort()
    estados_hilos.sort()
    estados_proc.sort()
    
    print(f"Secuencial == Hilos:    {estados_sec == estados_hilos}")
    print(f"Secuencial == Procesos: {estados_sec == estados_proc}")
    
    # Si hay diferencias, mostrar
    if estados_sec != estados_hilos or estados_sec != estados_proc:
        print("\\nNota: Las diferencias se deben a la aleatoriedad en la simulación")
        print("(10% de probabilidad de estar offline en cada verificación)")

# Versión mejorada con timeout
class MonitorAvanzado(MonitorServidores):
    """
    Monitor con timeout y reintentos.
    """
    def verificar_servidor_con_timeout(self, servidor, puerto, timeout=1.0):
        """
        Verifica servidor con timeout.
        """
        import threading
        
        resultado = [None]
        
        def tarea():
            try:
                resultado[0] = self.verificar_servidor(servidor, puerto)
            except Exception as e:
                resultado[0] = (servidor, puerto, "error", str(e))
        
        hilo = threading.Thread(target=tarea)
        hilo.start()
        hilo.join(timeout)
        
        if hilo.is_alive():
            return servidor, puerto, "timeout", timeout
        else:
            return resultado[0]
    
    def monitorear_con_timeout(self):
        """
        Monitoreo con timeout usando hilos.
        """
        print("\\n=== MONITOREO CON TIMEOUT (1s) ===")
        inicio = time.time()
        resultados = []
        
        hilos = []
        for servidor, puerto in self.servidores:
            hilo = threading.Thread(
                target=lambda s=servidor, p=puerto: resultados.append(
                    self.verificar_servidor_con_timeout(s, p, timeout=1.0)
                )
            )
            hilos.append(hilo)
            hilo.start()
        
        for hilo in hilos:
            hilo.join()
        
        tiempo_total = time.time() - inicio
        
        for servidor, puerto, estado, info in resultados:
            if isinstance(info, str):  # Error o timeout
                print(f"  {servidor}:{puerto} -> {estado} ({info})")
            else:
                print(f"  {servidor}:{puerto} -> {estado} ({info:.2f}s)")
        
        print(f"\\nTiempo total: {tiempo_total:.2f}s")
        return resultados, tiempo_total

# Ejecutar comparación principal
comparar_metodos()

# Ejecutar versión con timeout
print("\\n" + "="*50)
print("VERSIÓN AVANZADA CON TIMEOUT")
print("="*50)

monitor_avanzado = MonitorAvanzado()
resultados_timeout, tiempo_timeout = monitor_avanzado.monitorear_con_timeout()

# Análisis de timeout
timeouts = sum(1 for _, _, estado, _ in resultados_timeout if estado == "timeout")
print(f"\\nServidores con timeout: {timeouts}")
print("Conclusión: El timeout evita que una verificación lenta bloquee todo el sistema.")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es la principal diferencia entre concurrencia y paralelismo?",
    opciones: [
      { letra: "A", texto: "La concurrencia usa múltiples núcleos, el paralelismo no", correcta: false },
      { letra: "B", texto: "La concurrencia permite progresar múltiples tareas, el paralelismo las ejecuta simultáneamente", correcta: true },
      { letra: "C", texto: "Son términos sinónimos", correcta: false },
      { letra: "D", texto: "La concurrencia es más rápida que el paralelismo", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Concurrencia: múltiples tareas progresan (puede ser en un solo núcleo). Paralelismo: múltiples tareas ejecutan simultáneamente (requiere múltiples núcleos)."
  },
  {
    texto: "¿Por qué los hilos en Python no son efectivos para operaciones CPU intensivas?",
    opciones: [
      { letra: "A", texto: "Por el GIL (Global Interpreter Lock) que permite solo un hilo ejecutando bytecode Python a la vez", correcta: true },
      { letra: "B", texto: "Porque Python no soporta hilos", correcta: false },
      { letra: "C", texto: "Porque los hilos son demasiado lentos en general", correcta: false },
      { letra: "D", texto: "Porque consumen demasiada memoria", correcta: false }
    ],
    respuestaCorrecta: "A",
    explicacion: "El GIL permite que solo un hilo ejecute bytecode Python a la vez, limitando la paralelización real para operaciones CPU intensivas."
  },
  {
    texto: "¿Para qué tipo de operaciones son más efectivos los hilos en Python?",
    opciones: [
      { letra: "A", texto: "Operaciones CPU intensivas como cálculos matemáticos", correcta: false },
      { letra: "B", texto: "Operaciones I/O como descargas de red o lectura de archivos", correcta: true },
      { letra: "C", texto: "Operaciones de GPU", correcta: false },
      { letra: "D", texto: "Operaciones de bajo nivel del sistema", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Los hilos son efectivos para I/O porque mientras un hilo espera (por red, disco, etc.), otros hilos pueden ejecutarse, y el GIL no limita estas operaciones."
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