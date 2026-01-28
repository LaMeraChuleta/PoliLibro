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
                La programación secuencial ejecuta tareas en orden, una después de otra, mientras que la programación
                concurrente
                permite que múltiples tareas progresen simultáneamente. La elección entre estos enfoques depende del
                tipo de tareas,
                los recursos disponibles y los requisitos del sistema. La concurrencia puede mejorar drásticamente el
                rendimiento
                en operaciones I/O, pero añade complejidad y overhead. La programación secuencial es más simple y
                predecible,
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
                    <p class="text-gray-600 text-sm">El speedup máximo está limitado por la parte secuencial del
                        programa.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Servidor web: secuencial atiende 1 cliente a la vez, concurrente
                        atiende muchos simultáneamente.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Concurrencia no siempre significa más rápido. Puede ser más lenta
                        para tareas pequeñas por overhead.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">El 95% de un programa típico es paralelizable, pero el 5%
                        secuencial limita el speedup a 20x.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Análisis cuantitativo: tiempos de ejecución
                    comparativos</h3>
                <p class="text-gray-600 mb-4">Medición precisa del rendimiento en diferentes escenarios y overhead de
                    concurrencia.</p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Casos límite: cuando la concurrencia es
                    contraproducente</h3>
                <p class="text-gray-600 mb-4">Identificación de situaciones donde el overhead supera los beneficios.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Sistema mixto: combinando enfoques secuenciales
                    y concurrentes</h3>
                <p class="text-gray-600 mb-4">Implementación híbrida que usa lo mejor de ambos mundos.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa un analizador de rendimiento que compare automáticamente
                    ejecución secuencial vs concurrente para diferentes tipos de tareas. El sistema debe determinar
                    automáticamente cuándo la concurrencia es beneficiosa basándose en el tiempo de ejecución y el
                    overhead.
                    Incluye visualización de resultados y cálculo del punto de equilibrio.
                </p>
                <div class="flex gap-4">
                    <button @click="mostrarSolucion = !mostrarSolucion"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        {{ mostrarSolucion ? 'Ocultar solución' : 'Mostrar solución' }}
                    </button>
                    <a href="#"
                        class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                        Ver pista
                    </a>
                </div> -->

                <!-- Solución oculta -->
                <!-- <div v-if="mostrarSolucion" class="mt-6 p-5 bg-white border border-green-200 rounded-lg">
                    <h3 class="font-bold text-green-800 mb-3">Solución:</h3>
                    <PythonRunner :code="solucionCode" />
                </div>
            </div>
        </section> -->

        <!-- Quiz -->
        <QuizQuestions :preguntas="preguntas" titulo="Quiz comparación entre programación concurrente y secuencial">
        </QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/5.1.1" siguiente="/Unidad/5.1.3" textoAnterior="Anterior"
            textoSiguiente="Siguiente" tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true"
            mostrarSiguiente="true" />
    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Análisis cuantitativo
const ejemplo1Code = `import time
import math
import asyncio
import statistics

class AnalizadorRendimiento:
    """
    Analizador de rendimiento compatible con Pyodide.
    """

    def tarea_cpu(self, iteraciones):
        def es_primo(n):
            if n < 2:
                return False
            for i in range(2, int(math.sqrt(n)) + 1):
                if n % i == 0:
                    return False
            return True

        return sum(1 for i in range(iteraciones) if es_primo(i))

    async def tarea_io(self, duracion):
        await asyncio.sleep(duracion)
        return f"I/O {duracion}s"

    async def tarea_mixta(self, cpu, io):
        cpu_result = self.tarea_cpu(cpu)
        await asyncio.sleep(io)
        return f"CPU:{cpu_result} I/O:{io}s"

    def ejecutar_secuencial_cpu(self, tareas):
        inicio = time.time()
        for t in tareas:
            self.tarea_cpu(t)
        return time.time() - inicio

    async def ejecutar_async_io(self, tareas):
        inicio = time.time()
        await asyncio.gather(*(self.tarea_io(t) for t in tareas))
        return time.time() - inicio

    async def ejecutar_async_mixta(self, tareas):
        inicio = time.time()
        await asyncio.gather(*(self.tarea_mixta(*t) for t in tareas))
        return time.time() - inicio

    async def analizar(self, tareas, tipo, repeticiones=3):
        tiempos = []

        print(f"\\n=== ANALISIS {tipo.upper()} ===")

        for _ in range(repeticiones):
            if tipo == "cpu":
                t = self.ejecutar_secuencial_cpu(tareas)
            elif tipo == "io":
                t = await self.ejecutar_async_io(tareas)
            elif tipo == "mixta":
                t = await self.ejecutar_async_mixta(tareas)
            tiempos.append(t)

        print(f"Promedio: {statistics.mean(tiempos):.2f}s")
        print(f"Min: {min(tiempos):.2f}s")
        print(f"Max: {max(tiempos):.2f}s")

async def main():
    analizador = AnalizadorRendimiento()

    tareas_cpu = [4000, 5000, 6000]
    tareas_io = [0.5, 0.7, 0.3, 0.6]
    tareas_mixtas = [(2000, 0.2), (3000, 0.3), (2500, 0.1)]

    await analizador.analizar(tareas_cpu, "cpu")
    await analizador.analizar(tareas_io, "io")
    await analizador.analizar(tareas_mixtas, "mixta")

    print("\\n=== CONCLUSIONES ===")
    print("• Pyodide no soporta hilos ni procesos")
    print("• asyncio solo mejora I/O")
    print("• CPU-bound no se paraleliza en navegador")
    print("• multiprocessing requiere Python nativo")

await main()`

// Ejemplo 2: Casos límite
const ejemplo2Code = `import asyncio
import time

async def tarea(nombre, duracion):
    print(f"[{nombre}] Iniciando ({duracion}s)")
    await asyncio.sleep(duracion)
    print(f"[{nombre}] Terminada")
    return nombre

async def ejecucion_secuencial(tareas):
    print("\\n=== EJECUCIÓN SECUENCIAL ===")
    inicio = time.time()
    
    for nombre, duracion in tareas:
        await tarea(nombre, duracion)
    
    print(f"Tiempo total secuencial: {time.time() - inicio:.2f}s")

async def ejecucion_concurrente(tareas):
    print("\\n=== EJECUCIÓN CONCURRENTE (async) ===")
    inicio = time.time()
    
    await asyncio.gather(*[
        tarea(nombre, duracion)
        for nombre, duracion in tareas
    ])
    
    print(f"Tiempo total concurrente: {time.time() - inicio:.2f}s")

async def main():
    tareas = [
        ("Tarea A", 2),
        ("Tarea B", 3),
        ("Tarea C", 1),
        ("Tarea D", 2),
    ]
    
    print("Tareas a ejecutar:")
    for t in tareas:
        print(f"  {t[0]} -> {t[1]}s")
    
    await ejecucion_secuencial(tareas)
    await ejecucion_concurrente(tareas)
    
    print("\\n=== CONCLUSIÓN ===")
    print("Pyodide usa un event loop existente")
    print("NO se usa asyncio.run()")
    print("La concurrencia se logra con await + gather")

# ⬇️ ESTO ES LO IMPORTANTE
await main()`

// Ejemplo 3: Sistema mixto
const ejemplo3Code = `import asyncio
import time
from enum import Enum
import heapq

class TipoTarea(Enum):
    CPU = "cpu"
    IO = "io"
    MIXTA = "mixta"

class Tarea:
    def __init__(self, id_tarea, tipo, parametros, prioridad=1):
        self.id = id_tarea
        self.tipo = tipo
        self.parametros = parametros
        self.prioridad = prioridad

    def __lt__(self, other):
        return self.prioridad < other.prioridad

async def tarea_cpu(n):
    # CPU simulada (no bloquear demasiado)
    total = 0
    for i in range(n):
        total += i * i
    return f"CPU({n})"

async def tarea_io(segundos):
    await asyncio.sleep(segundos)
    return f"IO({segundos}s)"

async def tarea_mixta(cpu, io):
    await tarea_cpu(cpu)
    await asyncio.sleep(io)
    return f"MIXTA(cpu={cpu}, io={io})"

async def ejecutar_tarea(tarea):
    if tarea.tipo == TipoTarea.CPU:
        return await tarea_cpu(tarea.parametros)
    elif tarea.tipo == TipoTarea.IO:
        return await tarea_io(tarea.parametros)
    elif tarea.tipo == TipoTarea.MIXTA:
        return await tarea_mixta(*tarea.parametros)

async def sistema_mixto():
    tareas = []
    heapq.heappush(tareas, Tarea(1, TipoTarea.CPU, 20_000, 2))
    heapq.heappush(tareas, Tarea(2, TipoTarea.IO, 1.0, 1))
    heapq.heappush(tareas, Tarea(3, TipoTarea.MIXTA, (10_000, 0.5), 2))
    heapq.heappush(tareas, Tarea(4, TipoTarea.IO, 0.3, 3))
    heapq.heappush(tareas, Tarea(5, TipoTarea.CPU, 5_000, 1))

    print("=== SISTEMA MIXTO (PYODIDE) ===")

    inicio = time.time()
    corutinas = []

    while tareas:
        tarea = heapq.heappop(tareas)
        print(f"Tarea {tarea.id} -> {tarea.tipo.value}")
        corutinas.append(ejecutar_tarea(tarea))

    resultados = await asyncio.gather(*corutinas)

    print("\\nResultados:")
    for r in resultados:
        print(" ", r)

    print(f"\\nTiempo total: {time.time() - inicio:.2f}s")
    print("\\nConclusión:")
    print("• Pyodide usa concurrencia cooperativa")
    print("• No hay threads ni procesos reales")
    print("• asyncio es la única vía")

await sistema_mixto()`

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