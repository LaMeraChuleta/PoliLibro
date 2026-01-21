<template>
  <div class="container mx-auto px-4 py-6 space-y-8">
    <!-- Header -->
    <HeaderTitle numero="5" titulo="5.1.2 Comparación entre programación concurrente y secuencial">
      <p class="text-gray-600 mt-2">Análisis de ventajas, desventajas y casos de uso para cada enfoque.</p>
    </HeaderTitle>      

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Elegir el Enfoque Correcto</h2>
      <p class="text-gray-700 leading-relaxed">
        La programación secuencial ejecuta tareas en orden, una después de otra, mientras que la programación concurrente 
        permite que múltiples tareas progresen simultáneamente. La elección entre estos enfoques depende del tipo de tareas, 
        los recursos disponibles y los requisitos del sistema. La concurrencia puede mejorar drásticamente el rendimiento 
        en operaciones I/O, pero añade complejidad y overhead. La programación secuencial es más simple y predecible, 
        pero puede ser ineficiente cuando hay tiempos de espera que podrían aprovecharse.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Ley de Amdahl</h3>
          </div>
          <p class="text-gray-600 text-sm">El speedup máximo está limitado por la parte secuencial del programa.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Servidor web: secuencial atiende 1 cliente a la vez, concurrente atiende muchos simultáneamente.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">Concurrencia no siempre significa más rápido. Puede ser más lenta para tareas pequeñas por overhead.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">El 95% de un programa típico es paralelizable, pero el 5% secuencial limita el speedup a 20x.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Análisis cuantitativo: tiempos de ejecución comparativos</h3>
        <p class="text-gray-600 mb-4">Medición precisa del rendimiento en diferentes escenarios y overhead de concurrencia.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Casos límite: cuando la concurrencia es contraproducente</h3>
        <p class="text-gray-600 mb-4">Identificación de situaciones donde el overhead supera los beneficios.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Sistema mixto: combinando enfoques secuenciales y concurrentes</h3>
        <p class="text-gray-600 mb-4">Implementación híbrida que usa lo mejor de ambos mundos.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa un analizador de rendimiento que compare automáticamente 
          ejecución secuencial vs concurrente para diferentes tipos de tareas. El sistema debe determinar 
          automáticamente cuándo la concurrencia es beneficiosa basándose en el tiempo de ejecución y el overhead. 
          Incluye visualización de resultados y cálculo del punto de equilibrio.
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz comparación entre programación concurrente y secuencial"></QuizQuestions>
  </div>
</template>

<script setup>
import { ref  } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Ejemplo 1: Análisis cuantitativo
const ejemplo1Code = `import time
import threading
import multiprocessing
import statistics
import math

class AnalizadorRendimiento:
    """
    Analiza comparativamente el rendimiento de ejecución secuencial vs concurrente.
    """
    
    def __init__(self):
        self.resultados = {}
    
    def tarea_cpu(self, iteraciones):
        """
        Tarea intensiva en CPU: cálculo de números primos.
        """
        def es_primo(n):
            if n < 2:
                return False
            for i in range(2, int(math.sqrt(n)) + 1):
                if n % i == 0:
                    return False
            return True
        
        primos = []
        for i in range(iteraciones):
            if es_primo(i):
                primos.append(i)
        return len(primos)
    
    def tarea_io(self, duracion):
        """
        Tarea intensiva en I/O: simula tiempo de espera.
        """
        time.sleep(duracion)
        return f"Tarea I/O completada ({duracion}s)"
    
    def tarea_mixta(self, intensidad_cpu, duracion_io):
        """
        Tarea mixta: combinación de CPU y I/O.
        """
        # Parte CPU
        resultado_cpu = self.tarea_cpu(intensidad_cpu)
        
        # Parte I/O
        time.sleep(duracion_io)
        
        return f"CPU: {resultado_cpu} primos, I/O: {duracion_io}s"
    
    def ejecutar_secuencial(self, tareas, tipo_tarea="cpu", **kwargs):
        """
        Ejecuta tareas de forma secuencial.
        """
        inicio = time.time()
        resultados = []
        
        for i, parametros in enumerate(tareas):
            if tipo_tarea == "cpu":
                resultado = self.tarea_cpu(parametros)
            elif tipo_tarea == "io":
                resultado = self.tarea_io(parametros)
            elif tipo_tarea == "mixta":
                resultado = self.tarea_mixta(*parametros)
            else:
                raise ValueError(f"Tipo de tarea no válido: {tipo_tarea}")
            
            resultados.append(resultado)
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def ejecutar_concurrente_hilos(self, tareas, tipo_tarea="cpu", max_hilos=4, **kwargs):
        """
        Ejecuta tareas concurrentemente usando hilos.
        """
        inicio = time.time()
        resultados = []
        lock = threading.Lock()
        
        def ejecutar_tarea(parametros, idx):
            if tipo_tarea == "cpu":
                resultado = self.tarea_cpu(parametros)
            elif tipo_tarea == "io":
                resultado = self.tarea_io(parametros)
            elif tipo_tarea == "mixta":
                resultado = self.tarea_mixta(*parametros)
            else:
                resultado = None
            
            with lock:
                resultados.append((idx, resultado))
        
        hilos = []
        for i, parametros in enumerate(tareas):
            while threading.active_count() - 1 >= max_hilos:
                time.sleep(0.001)
            
            hilo = threading.Thread(target=ejecutar_tarea, args=(parametros, i))
            hilos.append(hilo)
            hilo.start()
        
        for hilo in hilos:
            hilo.join()
        
        # Ordenar resultados por índice original
        resultados.sort(key=lambda x: x[0])
        resultados = [r[1] for r in resultados]
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def ejecutar_concurrente_procesos(self, tareas, tipo_tarea="cpu", max_procesos=4, **kwargs):
        """
        Ejecuta tareas concurrentemente usando procesos.
        """
        inicio = time.time()
        
        if tipo_tarea == "cpu":
            func = self.tarea_cpu
        elif tipo_tarea == "io":
            func = self.tarea_io
        elif tipo_tarea == "mixta":
            func = lambda params: self.tarea_mixta(*params)
        else:
            raise ValueError(f"Tipo de tarea no válido: {tipo_tarea}")
        
        with multiprocessing.Pool(processes=max_procesos) as pool:
            resultados = pool.map(func, tareas)
        
        tiempo_total = time.time() - inicio
        return resultados, tiempo_total
    
    def analizar(self, tareas, tipo_tarea="cpu", ejecuciones=5, **kwargs):
        """
        Ejecuta múltiples pruebas y analiza estadísticas.
        """
        tiempos_secuencial = []
        tiempos_hilos = []
        tiempos_procesos = []
        
        print(f"\\n=== ANÁLISIS DE RENDIMIENTO - {tipo_tarea.upper()} ===")
        print(f"Número de tareas: {len(tareas)}")
        print(f"Número de ejecuciones: {ejecuciones}")
        
        for i in range(ejecuciones):
            # Secuencial
            _, tiempo_sec = self.ejecutar_secuencial(tareas, tipo_tarea, **kwargs)
            tiempos_secuencial.append(tiempo_sec)
            
            # Hilos
            _, tiempo_hilos = self.ejecutar_concurrente_hilos(tareas, tipo_tarea, **kwargs)
            tiempos_hilos.append(tiempo_hilos)
            
            # Procesos
            _, tiempo_proc = self.ejecutar_concurrente_procesos(tareas, tipo_tarea, **kwargs)
            tiempos_procesos.append(tiempo_proc)
        
        # Calcular estadísticas
        stats = {
            "secuencial": {
                "promedio": statistics.mean(tiempos_secuencial),
                "desviacion": statistics.stdev(tiempos_secuencial) if len(tiempos_secuencial) > 1 else 0,
                "min": min(tiempos_secuencial),
                "max": max(tiempos_secuencial)
            },
            "hilos": {
                "promedio": statistics.mean(tiempos_hilos),
                "desviacion": statistics.stdev(tiempos_hilos) if len(tiempos_hilos) > 1 else 0,
                "min": min(tiempos_hilos),
                "max": max(tiempos_hilos)
            },
            "procesos": {
                "promedio": statistics.mean(tiempos_procesos),
                "desviacion": statistics.stdev(tiempos_procesos) if len(tiempos_procesos) > 1 else 0,
                "min": min(tiempos_procesos),
                "max": max(tiempos_procesos)
            }
        }
        
        # Calcular speedup
        stats["speedup_hilos"] = stats["secuencial"]["promedio"] / stats["hilos"]["promedio"]
        stats["speedup_procesos"] = stats["secuencial"]["promedio"] / stats["procesos"]["promedio"]
        
        return stats

# Ejemplo de uso
print("=== COMPARACIÓN CUANTITATIVA ===")
analizador = AnalizadorRendimiento()

# Escenario 1: Tareas CPU intensivas (cálculo de primos)
print("\\n1. TAREAS CPU INTENSIVAS")
tareas_cpu = [10000, 15000, 20000, 25000, 30000]  # Iteraciones para cada tarea
stats_cpu = analizador.analizar(tareas_cpu, tipo_tarea="cpu", ejecuciones=3, max_hilos=4, max_procesos=4)

print(f"\\nResultados CPU:")
print(f"  Secuencial: {stats_cpu['secuencial']['promedio']:.2f}s")
print(f"  Hilos (4):  {stats_cpu['hilos']['promedio']:.2f}s (speedup: {stats_cpu['speedup_hilos']:.2f}x)")
print(f"  Procesos(4):{stats_cpu['procesos']['promedio']:.2f}s (speedup: {stats_cpu['speedup_procesos']:.2f}x)")

# Escenario 2: Tareas I/O intensivas
print("\\n2. TAREAS I/O INTENSIVAS")
tareas_io = [0.5, 0.7, 0.3, 0.9, 0.6, 0.8, 0.4, 1.0]  # Segundos de sleep
stats_io = analizador.analizar(tareas_io, tipo_tarea="io", ejecuciones=3, max_hilos=4, max_procesos=4)

print(f"\\nResultados I/O:")
print(f"  Secuencial: {stats_io['secuencial']['promedio']:.2f}s")
print(f"  Hilos (4):  {stats_io['hilos']['promedio']:.2f}s (speedup: {stats_io['speedup_hilos']:.2f}x)")
print(f"  Procesos(4):{stats_io['procesos']['promedio']:.2f}s (speedup: {stats_io['speedup_procesos']:.2f}x)")

# Escenario 3: Tareas mixtas
print("\\n3. TAREAS MIXTAS (CPU + I/O)")
tareas_mixta = [(2000, 0.2), (3000, 0.3), (4000, 0.1), (2500, 0.4)]
stats_mixta = analizador.analizar(tareas_mixta, tipo_tarea="mixta", ejecuciones=3, max_hilos=4, max_procesos=4)

print(f"\\nResultados Mixtos:")
print(f"  Secuencial: {stats_mixta['secuencial']['promedio']:.2f}s")
print(f"  Hilos (4):  {stats_mixta['hilos']['promedio']:.2f}s (speedup: {stats_mixta['speedup_hilos']:.2f}x)")
print(f"  Procesos(4):{stats_mixta['procesos']['promedio']:.2f}s (speedup: {stats_mixta['speedup_procesos']:.2f}x)")

# Análisis comparativo
print("\\n=== CONCLUSIÓN ===")
print("1. Para CPU intensivas: procesos > secuencial > hilos (debido al GIL)")
print("2. Para I/O intensivas: hilos ≈ procesos > secuencial")
print("3. Para tareas mixtas: depende de la proporción CPU/I/O")
print("4. Overhead: procesos > hilos > secuencial")`

// Ejemplo 2: Casos límite
const ejemplo2Code = `import time
import threading
import multiprocessing

def demostrar_overhead():
    """
    Demuestra cuándo el overhead de concurrencia supera los beneficios.
    """
    print("=== DEMOSTRACIÓN DE OVERHEAD ===")
    print("Cuándo la concurrencia NO es beneficiosa:")
    
    # Tarea muy pequeña
    def tarea_pequena():
        suma = 0
        for i in range(100):  # Muy pequeña
            suma += i
        return suma
    
    # Tarea pequeña con overhead de concurrencia
    def tarea_con_overhead():
        time.sleep(0.001)  # 1ms de overhead simulado
        suma = 0
        for i in range(100):
            suma += i
        return suma
    
    def ejecutar_secuencial(tareas, funcion):
        inicio = time.time()
        for _ in range(tareas):
            funcion()
        return time.time() - inicio
    
    def ejecutar_con_hilos(tareas, funcion, num_hilos=4):
        inicio = time.time()
        
        def worker():
            for _ in range(tareas // num_hilos):
                funcion()
        
        hilos = []
        for _ in range(num_hilos):
            hilo = threading.Thread(target=worker)
            hilos.append(hilo)
            hilo.start()
        
        for hilo in hilos:
            hilo.join()
        
        return time.time() - inicio
    
    # Pruebas con diferentes tamaños de tarea
    configuraciones = [
        ("Muy pequeña (100 iteraciones)", 1000, tarea_pequena),
        ("Pequeña con overhead", 1000, tarea_con_overhead),
        ("Mediana", 100, lambda: sum(range(10000))),
        ("Grande", 10, lambda: sum(range(100000)))
    ]
    
    resultados = []
    
    for descripcion, num_tareas, funcion in configuraciones:
        print(f"\\n{descripcion}: {num_tareas} tareas")
        
        # Secuencial
        tiempo_sec = ejecutar_secuencial(num_tareas, funcion)
        print(f"  Secuencial: {tiempo_sec:.4f}s")
        
        # Con hilos
        tiempo_hilos = ejecutar_con_hilos(num_tareas, funcion, num_hilos=4)
        print(f"  4 Hilos:    {tiempo_hilos:.4f}s")
        
        speedup = tiempo_sec / tiempo_hilos
        beneficioso = speedup > 1.1  # 10% de mejora mínima
        
        resultados.append({
            "descripcion": descripcion,
            "tareas": num_tareas,
            "secuencial": tiempo_sec,
            "hilos": tiempo_hilos,
            "speedup": speedup,
            "beneficioso": beneficioso
        })
    
    # Análisis
    print("\\n=== ANÁLISIS DE RESULTADOS ===")
    for r in resultados:
        estado = "BENEFICIOSO" if r["beneficioso"] else "NO BENEFICIOSO"
        print(f"{r['descripcion']}: speedup {r['speedup']:.2f}x -> {estado}")
    
    # Ley de Amdahl en acción
    print("\\n=== LEY DE AMDahl ===")
    print("Speedup máximo = 1 / ((1 - P) + (P / N))")
    print("donde P = fracción paralelizable, N = número de procesadores")
    
    def calcular_speedup_maximo(P, N):
        return 1 / ((1 - P) + (P / N))
    
    ejemplos = [
        ("90% paralelizable, 4 núcleos", 0.9, 4),
        ("50% paralelizable, 8 núcleos", 0.5, 8),
        ("95% paralelizable, infinitos núcleos", 0.95, float('inf')),
        ("99% paralelizable, 100 núcleos", 0.99, 100)
    ]
    
    for desc, P, N in ejemplos:
        if N == float('inf'):
            speedup_max = 1 / (1 - P)
            print(f"{desc}: speedup máximo = {speedup_max:.2f}x (limitado por parte secuencial)")
        else:
            speedup_max = calcular_speedup_maximo(P, N)
            print(f"{desc}: speedup máximo = {speedup_max:.2f}x")

def demostrar_problemas_concurrencia():
    """
    Demuestra problemas comunes en programación concurrente.
    """
    print("\\n=== PROBLEMAS DE CONCURRENCIA ===")
    
    # 1. Condición de carrera
    print("\\n1. CONDICIÓN DE CARRERA")
    
    contador_compartido = 0
    lock = threading.Lock()
    
    def incrementar_sin_lock():
        nonlocal contador_compartido
        for _ in range(10000):
            temp = contador_compartido
            temp += 1
            contador_compartido = temp
    
    def incrementar_con_lock():
        nonlocal contador_compartido
        for _ in range(10000):
            with lock:
                temp = contador_compartido
                temp += 1
                contador_compartido = temp
    
    # Sin lock
    contador_compartido = 0
    hilos = []
    for _ in range(10):
        hilo = threading.Thread(target=incrementar_sin_lock)
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"Sin lock: {contador_compartido} (debería ser 100000)")
    
    # Con lock
    contador_compartido = 0
    hilos = []
    for _ in range(10):
        hilo = threading.Thread(target=incrementar_con_lock)
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"Con lock: {contador_compartido} (correcto: 100000)")
    
    # 2. Deadlock
    print("\\n2. DEADLOCK (simulado)")
    
    lock_a = threading.Lock()
    lock_b = threading.Lock()
    
    def funcion1():
        with lock_a:
            print("  Funcion1 adquirió lock_a")
            time.sleep(0.1)  # Simular trabajo
            with lock_b:
                print("  Funcion1 adquirió lock_b")
    
    def funcion2():
        with lock_b:
            print("  Funcion2 adquirió lock_b")
            time.sleep(0.1)  # Simular trabajo
            with lock_a:
                print("  Funcion2 adquirió lock_a")
    
    print("Ejecutando sin deadlock (con timeouts)...")
    
    hilo1 = threading.Thread(target=funcion1)
    hilo2 = threading.Thread(target=funcion2)
    
    hilo1.start()
    hilo2.start()
    
    # Esperar con timeout para evitar deadlock real
    hilo1.join(timeout=2)
    hilo2.join(timeout=2)
    
    # 3. Starvation
    print("\\n3. STARVATION (hambruna)")
    print("Ocurre cuando algunos hilos nunca obtienen recursos.")
    print("Solución: usar colas con prioridad o timeouts.")
    
    # 4. Overhead de comunicación
    print("\\n4. OVERHEAD DE COMUNICACIÓN (procesos)")
    
    def tarea_simple(x):
        return x * x
    
    # Comparar comunicación entre procesos
    datos_pequenos = list(range(10))
    datos_grandes = list(range(10000))
    
    inicio = time.time()
    with multiprocessing.Pool(2) as pool:
        resultados = pool.map(tarea_simple, datos_pequenos)
    tiempo_pequenos = time.time() - inicio
    
    inicio = time.time()
    resultados = [tarea_simple(x) for x in datos_pequenos]
    tiempo_sec_pequenos = time.time() - inicio
    
    print(f"\\nDatos pequeños (10 elementos):")
    print(f"  Secuencial: {tiempo_sec_pequenos:.6f}s")
    print(f"  Procesos:   {tiempo_pequenos:.6f}s")
    print(f"  Overhead:   {tiempo_pequenos/tiempo_sec_pequenos:.2f}x más lento")

# Ejecutar demostraciones
demostrar_overhead()
demostrar_problemas_concurrencia()

print("\\n=== REGLAS PRÁCTICAS ===")
print("1. Usa secuencial para tareas pequeñas (< 1ms)")
print("2. Usa hilos para I/O (red, disco, etc.)")
print("3. Usa procesos para CPU intensivas")
print("4. Evita concurrencia si el overhead supera el 20% del tiempo total")
print("5. Siempre mide el rendimiento real en tu contexto específico")`

// Ejemplo 3: Sistema mixto
const ejemplo3Code = `import time
import threading
import multiprocessing
import queue
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
from enum import Enum

class TipoTarea(Enum):
    CPU_INTENSIVA = "cpu"
    IO_INTENSIVA = "io"
    MIXTA = "mixta"

class Tarea:
    """
    Representa una tarea con tipo y parámetros.
    """
    def __init__(self, id_tarea, tipo, parametros, prioridad=1):
        self.id = id_tarea
        self.tipo = tipo
        self.parametros = parametros
        self.prioridad = prioridad  # 1=alta, 2=media, 3=baja
        self.resultado = None
        self.completada = False
    
    def __lt__(self, other):
        # Para ordenar por prioridad en PriorityQueue
        return self.prioridad < other.prioridad

class SistemaMixto:
    """
    Sistema que combina ejecución secuencial y concurrente inteligentemente.
    """
    def __init__(self):
        self.tareas_pendientes = queue.PriorityQueue()
        self.tareas_completadas = {}
        self.lock = threading.Lock()
        self.metricas = {
            "secuencial": 0,
            "hilos": 0,
            "procesos": 0,
            "tiempo_total": 0
        }
    
    def agregar_tarea(self, tarea):
        """
        Agrega una tarea al sistema.
        """
        self.tareas_pendientes.put(tarea)
        return tarea.id
    
    def ejecutar_tarea_cpu(self, parametros):
        """
        Ejecuta tarea CPU intensiva.
        """
        n = parametros
        # Cálculo de factorial (CPU intensivo)
        resultado = 1
        for i in range(1, n + 1):
            resultado *= i
        return len(str(resultado))  # Retorna número de dígitos
    
    def ejecutar_tarea_io(self, parametros):
        """
        Ejecuta tarea I/O intensiva.
        """
        duracion = parametros
        time.sleep(duracion)
        return f"Tarea I/O ({duracion}s)"
    
    def ejecutar_tarea_mixta(self, parametros):
        """
        Ejecuta tarea mixta (CPU + I/O).
        """
        n_cpu, duracion_io = parametros
        
        # Parte CPU
        resultado_cpu = self.ejecutar_tarea_cpu(n_cpu)
        
        # Parte I/O
        time.sleep(duracion_io)
        
        return f"CPU: {resultado_cpu} dígitos, I/O: {duracion_io}s"
    
    def ejecutar_secuencial_optimizado(self, tarea):
        """
        Ejecuta una tarea de forma secuencial si es pequeña.
        """
        with self.lock:
            self.metricas["secuencial"] += 1
        
        if tarea.tipo == TipoTarea.CPU_INTENSIVA:
            return self.ejecutar_tarea_cpu(tarea.parametros)
        elif tarea.tipo == TipoTarea.IO_INTENSIVA:
            return self.ejecutar_tarea_io(tarea.parametros)
        elif tarea.tipo == TipoTarea.MIXTA:
            return self.ejecutar_tarea_mixta(tarea.parametros)
    
    def analizar_tarea(self, tarea):
        """
        Decide el mejor método de ejecución para una tarea.
        """
        # Reglas de decisión
        if tarea.tipo == TipoTarea.IO_INTENSIVA:
            return "hilos"
        elif tarea.tipo == TipoTarea.CPU_INTENSIVA:
            # Si es CPU pequeña, ejecutar secuencial
            if isinstance(tarea.parametros, int) and tarea.parametros < 1000:
                return "secuencial"
            else:
                return "procesos"
        elif tarea.tipo == TipoTarea.MIXTA:
            # Para mixtas, usar hilos (asumiendo que I/O es significativo)
            return "hilos"
        
        return "secuencial"  # Por defecto
    
    def ejecutar_sistema(self, max_hilos=4, max_procesos=4):
        """
        Ejecuta todas las tareas usando el método óptimo para cada una.
        """
        inicio = time.time()
        
        # Crear ejecutores
        executor_hilos = ThreadPoolExecutor(max_workers=max_hilos)
        executor_procesos = ProcessPoolExecutor(max_workers=max_procesos)
        
        futuros = {}
        
        print("=== SISTEMA MIXTO INTELIGENTE ===")
        print(f"Hilos disponibles: {max_hilos}")
        print(f"Procesos disponibles: {max_procesos}")
        
        # Procesar todas las tareas
        while not self.tareas_pendientes.empty():
            try:
                tarea = self.tareas_pendientes.get_nowait()
                
                # Decidir método óptimo
                metodo = self.analizar_tarea(tarea)
                
                print(f"Tarea {tarea.id} ({tarea.tipo.value}): {metodo}")
                
                if metodo == "secuencial":
                    # Ejecutar inmediatamente
                    resultado = self.ejecutar_secuencial_optimizado(tarea)
                    tarea.resultado = resultado
                    tarea.completada = True
                    
                elif metodo == "hilos":
                    # Enviar a thread pool
                    if tarea.tipo == TipoTarea.IO_INTENSIVA:
                        futuro = executor_hilos.submit(self.ejecutar_tarea_io, tarea.parametros)
                    elif tarea.tipo == TipoTarea.MIXTA:
                        futuro = executor_hilos.submit(self.ejecutar_tarea_mixta, tarea.parametros)
                    else:
                        futuro = executor_hilos.submit(self.ejecutar_tarea_cpu, tarea.parametros)
                    
                    futuros[futuro] = tarea
                    
                elif metodo == "procesos":
                    # Enviar a process pool
                    if tarea.tipo == TipoTarea.CPU_INTENSIVA:
                        futuro = executor_procesos.submit(self.ejecutar_tarea_cpu, tarea.parametros)
                        futuros[futuro] = tarea
                
                self.tareas_pendientes.task_done()
                
            except queue.Empty:
                break
        
        # Esperar resultados de ejecutores
        from concurrent.futures import as_completed
        
        for futuro in as_completed(futuros.keys()):
            tarea = futuros[futuro]
            try:
                tarea.resultado = futuro.result()
                tarea.completada = True
                
                # Actualizar métricas
                with self.lock:
                    if isinstance(futuro, ThreadPoolExecutor._base.Future):
                        self.metricas["hilos"] += 1
                    else:
                        self.metricas["procesos"] += 1
                        
            except Exception as e:
                tarea.resultado = f"Error: {e}"
                tarea.completada = False
        
        # Cerrar ejecutores
        executor_hilos.shutdown()
        executor_procesos.shutdown()
        
        # Recolectar resultados
        self.tareas_completadas = {t.id: t for t in futuros.values() if hasattr(t, 'id')}
        
        # Tiempo total
        self.metricas["tiempo_total"] = time.time() - inicio
        
        return self.metricas

# Ejemplo de uso
def ejemplo_sistema_mixto():
    """
    Ejemplo completo del sistema mixto.
    """
    sistema = SistemaMixto()
    
    # Crear tareas diversas
    tareas = [
        # (id, tipo, parametros, prioridad)
        (1, TipoTarea.CPU_INTENSIVA, 500, 1),     # CPU pequeña -> secuencial
        (2, TipoTarea.CPU_INTENSIVA, 5000, 1),    # CPU grande -> procesos
        (3, TipoTarea.IO_INTENSIVA, 0.5, 2),      # I/O -> hilos
        (4, TipoTarea.IO_INTENSIVA, 1.0, 1),      # I/O alta prioridad -> hilos
        (5, TipoTarea.MIXTA, (1000, 0.3), 2),     # Mixta -> hilos
        (6, TipoTarea.CPU_INTENSIVA, 200, 3),     # CPU muy pequeña -> secuencial
        (7, TipoTarea.IO_INTENSIVA, 0.8, 2),      # I/O -> hilos
        (8, TipoTarea.CPU_INTENSIVA, 10000, 1),   # CPU muy grande -> procesos
    ]
    
    print("Tareas a ejecutar:")
    for id_tarea, tipo, params, prioridad in tareas:
        print(f"  Tarea {id_tarea}: {tipo.value}, params={params}, prioridad={prioridad}")
    
    # Agregar tareas al sistema
    for id_tarea, tipo, params, prioridad in tareas:
        tarea = Tarea(id_tarea, tipo, params, prioridad)
        sistema.agregar_tarea(tarea)
    
    # Ejecutar sistema
    print("\\nIniciando ejecución...")
    metricas = sistema.ejecutar_sistema(max_hilos=3, max_procesos=2)
    
    # Mostrar resultados
    print("\\n=== RESULTADOS ===")
    print(f"Tiempo total: {metricas['tiempo_total']:.2f}s")
    print(f"Tareas secuenciales: {metricas['secuencial']}")
    print(f"Tareas con hilos: {metricas['hilos']}")
    print(f"Tareas con procesos: {metricas['procesos']}")
    
    print("\\nResultados por tarea:")
    for tarea_id in range(1, 9):
        # Buscar tarea (simplificado para ejemplo)
        print(f"  Tarea {tarea_id}: Completada")
    
    # Comparación hipotética
    print("\\n=== COMPARACIÓN HIPOTÉTICA ===")
    print("Si todas fueran secuenciales:")
    tiempo_sec_total = metricas['secuencial'] * 0.1 + metricas['hilos'] * 1.5 + metricas['procesos'] * 2.0
    print(f"  Tiempo estimado: {tiempo_sec_total:.2f}s")
    print(f"  Mejora del sistema mixto: {tiempo_sec_total/metricas['tiempo_total']:.2f}x")
    
    # Visualización de decisiones
    print("\\n=== LÓGICA DE DECISIÓN ===")
    print("""
    Reglas implementadas:
    1. I/O intensivas -> siempre hilos
    2. CPU pequeñas (< 1000) -> secuencial (evitar overhead)
    3. CPU grandes -> procesos (aprovechar múltiples núcleos)
    4. Mixtas -> hilos (asumiendo I/O significativo)
    5. Prioridad alta -> ejecutar primero
    """)

# Ejecutar ejemplo
ejemplo_sistema_mixto()

print("\\n=== VENTAJAS DEL ENFOQUE MIXTO ===")
print("1. Optimiza automáticamente según tipo de tarea")
print("2. Minimiza overhead usando secuencial cuando es apropiado")
print("3. Aprovecha concurrencia solo cuando hay beneficio real")
print("4. Balancea carga entre diferentes tipos de recursos")
print("5. Escalable: se pueden añadir más reglas de decisión")`

// Ejercicio práctico - Solución
const solucionCode = `import time
import threading
import multiprocessing
import statistics
import math
from dataclasses import dataclass
from enum import Enum
from typing import List, Dict, Any
import matplotlib.pyplot as plt
import numpy as np

class TipoTarea(Enum):
    CPU = "cpu"
    IO = "io"
    MIXTA = "mixta"

@dataclass
class ResultadoPrueba:
    """Almacena resultados de una prueba."""
    nombre: str
    tiempo_secuencial: float
    tiempo_concurrente: float
    speedup: float
    overhead: float
    beneficioso: bool

class AnalizadorAvanzado:
    """
    Analizador avanzado que determina automáticamente cuándo usar concurrencia.
    """
    
    def __init__(self):
        self.resultados: List[ResultadoPrueba] = []
        self.punto_equilibrio = None
    
    def tarea_generica(self, tipo: TipoTarea, parametros) -> Any:
        """Ejecuta una tarea genérica según su tipo."""
        if tipo == TipoTarea.CPU:
            return self._tarea_cpu(parametros)
        elif tipo == TipoTarea.IO:
            return self._tarea_io(parametros)
        elif tipo == TipoTarea.MIXTA:
            return self._tarea_mixta(parametros)
        else:
            raise ValueError(f"Tipo no válido: {tipo}")
    
    def _tarea_cpu(self, iteraciones: int) -> int:
        """Tarea CPU intensiva: cálculo de números primos."""
        def es_primo(n: int) -> bool:
            if n < 2:
                return False
            for i in range(2, int(math.sqrt(n)) + 1):
                if n % i == 0:
                    return False
            return True
        
        return sum(1 for i in range(iteraciones) if es_primo(i))
    
    def _tarea_io(self, duracion: float) -> str:
        """Tarea I/O intensiva: simula tiempo de espera."""
        time.sleep(duracion)
        return f"I/O completado en {duracion}s"
    
    def _tarea_mixta(self, parametros: tuple) -> str:
        """Tarea mixta: combinación de CPU y I/O."""
        iteraciones_cpu, duracion_io = parametros
        resultado_cpu = self._tarea_cpu(iteraciones_cpu)
        time.sleep(duracion_io)
        return f"CPU: {resultado_cpu} primos, I/O: {duracion_io}s"
    
    def medir_overhead_concurrencia(self, num_tareas: int = 100) -> float:
        """
        Mide el overhead base de la concurrencia ejecutando tareas triviales.
        """
        def tarea_trivial():
            return 42
        
        # Secuencial
        inicio = time.time()
        for _ in range(num_tareas):
            tarea_trivial()
        tiempo_sec = time.time() - inicio
        
        # Concurrente con hilos
        inicio = time.time()
        hilos = []
        for _ in range(num_tareas):
            hilo = threading.Thread(target=tarea_trivial)
            hilos.append(hilo)
            hilo.start()
        
        for hilo in hilos:
            hilo.join()
        tiempo_conc = time.time() - inicio
        
        overhead = (tiempo_conc - tiempo_sec) / tiempo_sec if tiempo_sec > 0 else 0
        return overhead
    
    def ejecutar_prueba_completa(
        self, 
        tipo: TipoTarea, 
        parametros_lista: List[Any],
        num_ejecuciones: int = 5,
        max_hilos: int = 4
    ) -> ResultadoPrueba:
        """
        Ejecuta una prueba completa comparando secuencial vs concurrente.
        """
        tiempos_sec = []
        tiempos_conc = []
        
        for _ in range(num_ejecuciones):
            # Secuencial
            inicio = time.time()
            for params in parametros_lista:
                self.tarea_generica(tipo, params)
            tiempos_sec.append(time.time() - inicio)
            
            # Concurrente (hilos)
            inicio = time.time()
            hilos = []
            resultados = []
            lock = threading.Lock()
            
            def worker(params, idx):
                resultado = self.tarea_generica(tipo, params)
                with lock:
                    resultados.append((idx, resultado))
            
            for i, params in enumerate(parametros_lista):
                while threading.active_count() - 1 >= max_hilos:
                    time.sleep(0.001)
                
                hilo = threading.Thread(target=worker, args=(params, i))
                hilos.append(hilo)
                hilo.start()
            
            for hilo in hilos:
                hilo.join()
            
            tiempos_conc.append(time.time() - inicio)
        
        # Calcular estadísticas
        tiempo_sec_prom = statistics.mean(tiempos_sec)
        tiempo_conc_prom = statistics.mean(tiempos_conc)
        speedup = tiempo_sec_prom / tiempo_conc_prom if tiempo_conc_prom > 0 else 0
        overhead = (tiempo_conc_prom - tiempo_sec_prom) / tiempo_sec_prom if tiempo_sec_prom > 0 else 0
        
        # Determinar si es beneficioso (speedup > 1.1 y overhead < 50%)
        beneficioso = speedup > 1.1 and overhead < 0.5
        
        # Crear nombre descriptivo
        nombre = f"{tipo.value}_{len(parametros_lista)}tareas"
        
        resultado = ResultadoPrueba(
            nombre=nombre,
            tiempo_secuencial=tiempo_sec_prom,
            tiempo_concurrente=tiempo_conc_prom,
            speedup=speedup,
            overhead=overhead,
            beneficioso=beneficioso
        )
        
        self.resultados.append(resultado)
        return resultado
    
    def encontrar_punto_equilibrio(self, tipo: TipoTarea, parametro_base: Any) -> Dict[str, Any]:
        """
        Encuentra el punto donde la concurrencia empieza a ser beneficiosa.
        """
        print(f"\\nBuscando punto de equilibrio para {tipo.value}...")
        
        puntos = []
        beneficioso_encontrado = False
        
        # Probar con diferente número de tareas
        for num_tareas in [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20]:
            parametros_lista = [parametro_base] * num_tareas
            resultado = self.ejecutar_prueba_completa(tipo, parametros_lista, num_ejecuciones=3)
            
            puntos.append({
                "num_tareas": num_tareas,
                "speedup": resultado.speedup,
                "beneficioso": resultado.beneficioso
            })
            
            if resultado.beneficioso and not beneficioso_encontrado:
                self.punto_equilibrio = {
                    "tipo": tipo,
                    "num_tareas": num_tareas,
                    "speedup": resultado.speedup,
                    "parametro_base": parametro_base
                }
                beneficioso_encontrado = True
        
        return puntos
    
    def generar_reporte(self):
        """Genera un reporte completo de los análisis."""
        print("\\n" + "="*60)
        print("REPORTE DE ANÁLISIS DE CONCURRENCIA")
        print("="*60)
        
        # Overhead base
        overhead_base = self.medir_overhead_concurrencia()
        print(f"\\nOverhead base de concurrencia: {overhead_base:.2%}")
        
        # Resultados por prueba
        print("\\nRESULTADOS POR PRUEBA:")
        print("-"*60)
        print(f"{'Prueba':<20} {'Secuencial':<12} {'Concurrente':<12} {'Speedup':<10} {'Overhead':<10} {'Beneficioso'}")
        print("-"*60)
        
        for r in self.resultados:
            print(f"{r.nombre:<20} {r.tiempo_secuencial:>10.3f}s {r.tiempo_concurrente:>10.3f}s "
                  f"{r.speedup:>9.2f}x {r.overhead:>9.2%} {'Sí' if r.beneficioso else 'No':>10}")
        
        # Punto de equilibrio
        if self.punto_equilibrio:
            print(f"\\nPUNTO DE EQUILIBRIO ENCONTRADO:")
            print(f"  Tipo de tarea: {self.punto_equilibrio['tipo'].value}")
            print(f"  Número mínimo de tareas: {self.punto_equilibrio['num_tareas']}")
            print(f"  Speedup en ese punto: {self.punto_equilibrio['speedup']:.2f}x")
            print(f"  Parámetro base: {self.punto_equilibrio['parametro_base']}")
        
        # Estadísticas generales
        beneficiosas = sum(1 for r in self.resultados if r.beneficioso)
        total = len(self.resultados)
        
        print(f"\\nESTADÍSTICAS GENERALES:")
        print(f"  Pruebas totales: {total}")
        print(f"  Pruebas beneficiosas: {beneficiosas} ({beneficiosas/total:.1%})")
        print(f"  Speedup promedio: {statistics.mean(r.speedup for r in self.resultados):.2f}x")
        print(f"  Speedup máximo: {max(r.speedup for r in self.resultados):.2f}x")
        print(f"  Speedup mínimo: {min(r.speedup for r in self.resultados):.2f}x")
        
        # Recomendaciones
        print(f"\\nRECOMENDACIONES:")
        if overhead_base > 0.5:
            print("  ❗ Overhead muy alto. Considera optimizar o usar menos hilos.")
        
        if beneficiosas / total < 0.3:
            print("  ⚠️  Pocas pruebas fueron beneficiosas. Revisa los parámetros.")
        else:
            print("  ✓ La concurrencia es generalmente beneficiosa en estos tests.")
    
    def visualizar_resultados(self):
        """Genera visualizaciones de los resultados."""
        if not self.resultados:
            print("No hay resultados para visualizar.")
            return
        
        # Preparar datos
        nombres = [r.nombre for r in self.resultados]
        speedups = [r.speedup for r in self.resultados]
        overheads = [r.overhead for r in self.resultados]
        colores = ['green' if r.beneficioso else 'red' for r in self.resultados]
        
        # Crear figura
        fig, axes = plt.subplots(2, 2, figsize=(12, 10))
        
        # Gráfico 1: Speedup por prueba
        axes[0, 0].bar(nombres, speedups, color=colores)
        axes[0, 0].axhline(y=1.0, color='r', linestyle='--', alpha=0.5)
        axes[0, 0].axhline(y=1.1, color='g', linestyle='--', alpha=0.5, label='Umbral beneficioso')
        axes[0, 0].set_title('Speedup por Prueba')
        axes[0, 0].set_ylabel('Speedup (x)')
        axes[0, 0].tick_params(axis='x', rotation=45)
        axes[0, 0].legend()
        axes[0, 0].grid(True, alpha=0.3)
        
        # Gráfico 2: Overhead por prueba
        axes[0, 1].bar(nombres, overheads, color=colores)
        axes[0, 1].axhline(y=0.0, color='black', linestyle='-', alpha=0.5)
        axes[0, 1].axhline(y=0.5, color='r', linestyle='--', alpha=0.5, label='Umbral overhead')
        axes[0, 1].set_title('Overhead por Prueba')
        axes[0, 1].set_ylabel('Overhead')
        axes[0, 1].tick_params(axis='x', rotation=45)
        axes[0, 1].legend()
        axes[0, 1].grid(True, alpha=0.3)
        
        # Gráfico 3: Comparación tiempos
        tiempos_sec = [r.tiempo_secuencial for r in self.resultados]
        tiempos_conc = [r.tiempo_concurrente for r in self.resultados]
        x = np.arange(len(nombres))
        width = 0.35
        axes[1, 0].bar(x - width/2, tiempos_sec, width, label='Secuencial')
        axes[1, 0].bar(x + width/2, tiempos_conc, width, label='Concurrente')
        axes[1, 0].set_title('Comparación de Tiempos de Ejecución')
        axes[1, 0].set_ylabel('Tiempo (s)')
        axes[1, 0].set_xticks(x)
        axes[1, 0].set_xticklabels(nombres, rotation=45)
        axes[1, 0].legend()
        axes[1, 0].grid(True, alpha=0.3)
        
        # Gráfico 4: Distribución de speedups
        axes[1, 1].hist(speedups, bins=10, color='skyblue', edgecolor='black')
        axes[1, 1].axvline(x=1.0, color='r', linestyle='--', label='Sin mejora')
        axes[1, 1].axvline(x=1.1, color='g', linestyle='--', label='Umbral beneficioso')
        axes[1, 1].set_title('Distribución de Speedups')
        axes[1, 1].set_xlabel('Speedup (x)')
        axes[1, 1].set_ylabel('Frecuencia')
        axes[1, 1].legend()
        axes[1, 1].grid(True, alpha=0.3)
        
        plt.tight_layout()
        
        # Guardar figura
        plt.savefig('analisis_concurrencia.png', dpi=150, bbox_inches='tight')
        print("\\nGráficos guardados en 'analisis_concurrencia.png'")
        
        # Mostrar resumen en consola
        print("\\nVISUALIZACIÓN DE RESULTADOS:")
        print(f"  • {sum(1 for c in colores if c == 'green')}/{len(colores)} pruebas beneficiosas (verde)")
        print(f"  • Speedup promedio: {np.mean(speedups):.2f}x")
        print(f"  • Overhead promedio: {np.mean(overheads):.2%}")

# Ejemplo de uso completo
def ejemplo_completo():
    """Ejemplo completo del analizador avanzado."""
    analizador = AnalizadorAvanzado()
    
    print("=== ANALIZADOR AVANZADO DE CONCURRENCIA ===")
    print("Determinando automáticamente cuándo la concurrencia es beneficiosa...")
    
    # Prueba 1: Tareas CPU pequeñas
    print("\\n1. Probando tareas CPU pequeñas (500 iteraciones)...")
    parametros_cpu_peq = [500, 500, 500, 500]
    resultado1 = analizador.ejecutar_prueba_completa(
        TipoTarea.CPU, parametros_cpu_peq, num_ejecuciones=3
    )
    
    # Prueba 2: Tareas CPU grandes
    print("2. Probando tareas CPU grandes (5000 iteraciones)...")
    parametros_cpu_grande = [5000, 5000, 5000, 5000]
    resultado2 = analizador.ejecutar_prueba_completa(
        TipoTarea.CPU, parametros_cpu_grande, num_ejecuciones=3
    )
    
    # Prueba 3: Tareas I/O
    print("3. Probando tareas I/O (0.5s cada una)...")
    parametros_io = [0.5, 0.5, 0.5, 0.5, 0.5]
    resultado3 = analizador.ejecutar_prueba_completa(
        TipoTarea.IO, parametros_io, num_ejecuciones=3
    )
    
    # Prueba 4: Tareas mixtas
    print("4. Probando tareas mixtas...")
    parametros_mixta = [(1000, 0.2), (1000, 0.2), (1000, 0.2), (1000, 0.2)]
    resultado4 = analizador.ejecutar_prueba_completa(
        TipoTarea.MIXTA, parametros_mixta, num_ejecuciones=3
    )
    
    # Encontrar punto de equilibrio para CPU
    print("\\nBuscando punto de equilibrio para tareas CPU...")
    puntos_cpu = analizador.encontrar_punto_equilibrio(TipoTarea.CPU, 1000)
    
    # Encontrar punto de equilibrio para I/O
    print("\\nBuscando punto de equilibrio para tareas I/O...")
    puntos_io = analizador.encontrar_punto_equilibrio(TipoTarea.IO, 0.2)
    
    # Generar reporte
    analizador.generar_reporte()
    
    # Visualizar resultados
    try:
        analizador.visualizar_resultados()
    except ImportError:
        print("\\nNota: Para visualizaciones, instala matplotlib: pip install matplotlib")
    
    # Reglas automáticas aprendidas
    print("\\n=== REGLAS APRENDIDAS AUTOMÁTICAMENTE ===")
    
    # Analizar resultados para extraer reglas
    beneficiosas_cpu = [r for r in analizador.resultados 
                       if "cpu" in r.nombre and r.beneficioso]
    beneficiosas_io = [r for r in analizador.resultados 
                      if "io" in r.nombre and r.beneficioso]
    beneficiosas_mixta = [r for r in analizador.resultados 
                         if "mixta" in r.nombre and r.beneficioso]
    
    print(f"Tareas CPU beneficiosas: {len(beneficiosas_cpu)}/{sum(1 for r in analizador.resultados if 'cpu' in r.nombre)}")
    print(f"Tareas I/O beneficiosas: {len(beneficiosas_io)}/{sum(1 for r in analizador.resultados if 'io' in r.nombre)}")
    print(f"Tareas mixtas beneficiosas: {len(beneficiosas_mixta)}/{sum(1 for r in analizador.resultados if 'mixta' in r.nombre)}")
    
    # Recomendación final
    print("\\n=== RECOMENDACIÓN FINAL ===")
    if analizador.punto_equilibrio:
        print(f"Usa concurrencia cuando tengas al menos {analizador.punto_equilibrio['num_tareas']} "
              f"tareas de tipo {analizador.punto_equilibrio['tipo'].value} similares.")
    else:
        print("Basado en los resultados, la concurrencia es generalmente beneficiosa para:")
        print("  • Tareas I/O con más de 2 elementos")
        print("  • Tareas CPU con más de 4 elementos (si son grandes)")
        print("  • Tareas mixtas con más de 3 elementos")
    
    return analizador

# Ejecutar ejemplo
if __name__ == "__main__":
    analizador = ejemplo_completo()
    
    print("\\n" + "="*60)
    print("RESUMEN EJECUTIVO")
    print("="*60)
    print("La concurrencia es beneficiosa cuando:")
    print("1. Las tareas tienen tiempos de espera significativos (I/O)")
    print("2. Hay suficientes tareas similares para justificar el overhead")
    print("3. Las tareas son independientes y no requieren sincronización compleja")
    print("4. El sistema tiene recursos disponibles (CPU, memoria)")
    print("\\nUsa este analizador para tomar decisiones basadas en datos, no en suposiciones.")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es la principal diferencia entre programación secuencial y concurrente?",
    opciones: [
      { texto: "La secuencial ejecuta una tarea a la vez y la concurrente varias", correcta: true },
      { texto: "La concurrente no usa CPU", correcta: false },
      { texto: "La secuencial es más rápida siempre", correcta: false },
      { texto: "Ambas funcionan exactamente igual", correcta: false }
    ]
  },
  {
    texto: "¿En qué situación es más conveniente usar programación concurrente?",
    opciones: [
      { texto: "Cuando hay varias tareas independientes", correcta: true },
      { texto: "Cuando el programa es muy pequeño", correcta: false },
      { texto: "Cuando solo hay una operación", correcta: false },
      { texto: "Cuando no se comparte información", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es una ventaja de la programación secuencial?",
    opciones: [
      { texto: "Es más simple y fácil de depurar", correcta: true },
      { texto: "Aprovecha mejor múltiples núcleos", correcta: false },
      { texto: "Permite ejecutar tareas al mismo tiempo", correcta: false },
      { texto: "Evita el uso de bucles", correcta: false }
    ]
  }
]

</script>