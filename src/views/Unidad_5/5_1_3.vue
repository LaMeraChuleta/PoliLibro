<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="5" titulo="5.1.3 Procesos e hilos">
            <p class="text-gray-600 mt-2">Diferencias fundamentales entre dos modelos de concurrencia y cuándo usar cada
                uno.</p>
        </HeaderTitle>

        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Procesos vs Hilos: Dos Modelos de Concurrencia</h2>
            <p class="text-gray-700 leading-relaxed">
                Los <strong>procesos</strong> y los <strong>hilos</strong> son dos formas fundamentales de lograr
                concurrencia en Python.
                Un proceso es una instancia independiente de un programa con su propio espacio de memoria, mientras que
                un hilo
                es una unidad de ejecución dentro de un proceso que comparte memoria con otros hilos del mismo proceso.
                En Python, la elección entre procesos e hilos está determinada principalmente por el GIL (Global
                Interpreter Lock)
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
                    <p class="text-gray-600 text-sm">Mecanismo de CPython que permite solo un hilo ejecutando bytecode
                        Python a la vez. Afecta a hilos pero no a procesos.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Servidor web: hilos para manejar conexiones (I/O), procesos para
                        procesar imágenes (CPU).</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Hilos comparten memoria (riesgo de condiciones de carrera).
                        Procesos tienen memoria separada (comunicación más costosa).</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">El GIL existe principalmente para simplificar la gestión de memoria
                        en CPython, no por una limitación técnica.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Hilos: concurrencia para operaciones I/O</h3>
                <p class="text-gray-600 mb-4">Implementación de un sistema de descargas concurrentes usando threading.
                </p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Procesos: paralelismo real para CPU intensivas
                </h3>
                <p class="text-gray-600 mb-4">Uso de multiprocessing para cálculos matemáticos que aprovechan múltiples
                    núcleos.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Comparación directa: mismos datos, diferentes
                    enfoques</h3>
                <p class="text-gray-600 mb-4">Benchmark que muestra las diferencias de rendimiento entre hilos y
                    procesos.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa un sistema de procesamiento de imágenes que use hilos para
                    cargar
                    imágenes desde disco (I/O) y procesos para aplicar filtros (CPU intensivo). El sistema debe:
                    1. Cargar múltiples imágenes concurrentemente usando hilos
                    2. Aplicar filtros (como escala de grises) usando procesos
                    3. Medir y comparar el rendimiento vs. implementación secuencial
                    Usa imágenes simuladas para el ejemplo.
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz procesos e hilos"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/5.1.2" siguiente="/Unidad/5.1.4" textoAnterior="Anterior"
            textoSiguiente="Siguiente" tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true"
            mostrarSiguiente="true" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Hilos para operaciones I/O
const ejemplo1Code = `import asyncio
import random
import time

class SistemaDescargasAsync:
    """
    Sistema de descargas concurrentes usando asyncio (Pyodide compatible)
    """

    def __init__(self, max_tareas=3):
        self.max_tareas = max_tareas
        self.resultados = {}
        self.contador = 0

    async def simular_descarga(self, url, tamano_mb, semaforo):
        async with semaforo:
            tiempo_descarga = tamano_mb * 0.3
            print(f"  Descargando {url} ({tamano_mb}MB, {tiempo_descarga:.1f}s)")
            
            await asyncio.sleep(tiempo_descarga)

            if random.random() < 0.05:
                self.resultados[url] = ("error", "Error de conexión")
                print(f"  ✗ {url} falló")
                return

            self.contador += 1
            self.resultados[url] = ("éxito", f"{tamano_mb}MB en {tiempo_descarga:.1f}s")
            print(f"  ✓ [{self.contador}] {url} completado")

    async def descargar_lote(self, archivos):
        print("=== SISTEMA DE DESCARGA (ASYNCIO) ===")
        print(f"Tareas concurrentes: {self.max_tareas}")
        print(f"Archivos: {len(archivos)}")

        inicio = time.time()
        semaforo = asyncio.Semaphore(self.max_tareas)

        tareas = [
            self.simular_descarga(url, tamano, semaforo)
            for url, tamano in archivos
        ]

        await asyncio.gather(*tareas)

        tiempo_total = time.time() - inicio

        exitos = sum(1 for e, _ in self.resultados.values() if e == "éxito")
        errores = len(archivos) - exitos

        print("\\n=== RESULTADOS ===")
        print(f"Tiempo total: {tiempo_total:.2f}s")
        print(f"Exitosos: {exitos}")
        print(f"Errores: {errores}")

        tiempo_secuencial = sum(t for _, t in archivos) * 0.3
        print(f"Tiempo secuencial estimado: {tiempo_secuencial:.2f}s")
        print(f"Speedup simulado: {tiempo_secuencial / tiempo_total:.2f}x")

# Ejemplo de uso
async def ejemplo_descargas():
    archivos = [
        ("imagen1.jpg", 5),
        ("imagen2.png", 8),
        ("documento.pdf", 12),
        ("video.mp4", 45),
        ("musica.mp3", 7),
        ("archivo.zip", 22),
        ("presentacion.pptx", 18),
        ("libro.epub", 4),
    ]

    sistema = SistemaDescargasAsync(max_tareas=3)
    await sistema.descargar_lote(archivos)

await ejemplo_descargas()`


// Ejemplo 2: Procesos para CPU intensivas
const ejemplo2Code = `import asyncio
import time

async def tarea(nombre, duracion):
    print(f"[{nombre}] Inicia ({duracion}s)")
    await asyncio.sleep(duracion)
    print(f"[{nombre}] Termina")

async def secuencial(tareas):
    print("=== SECUENCIAL ===")
    inicio = time.time()
    for t in tareas:
        await tarea(*t)
    print("Tiempo:", round(time.time() - inicio, 2), "s")

async def concurrente(tareas):
    print("\\n=== CONCURRENTE ===")
    inicio = time.time()
    await asyncio.gather(*(tarea(*t) for t in tareas))
    print("Tiempo:", round(time.time() - inicio, 2), "s")

async def main():
    tareas = [
        ("A", 2),
        ("B", 3),
        ("C", 1),
        ("D", 2)
    ]
    await secuencial(tareas)
    await concurrente(tareas)

await main()`

// Ejemplo 3: Comparación directa
const ejemplo3Code = `import asyncio
import time
import statistics

class ComparadorAsync:
    """
    Comparación de ejecución SECUENCIAL vs ASYNC (Pyodide-compatible)
    """

    async def tarea_cpu(self, intensidad):
        resultado = 0
        for i in range(intensidad):
            resultado += i * i
        return resultado

    async def tarea_io(self, duracion):
        await asyncio.sleep(duracion)
        return f"I/O {duracion}s"

    async def tarea_mixta(self, intensidad, duracion):
        await self.tarea_cpu(intensidad)
        await asyncio.sleep(duracion)
        return "mixta"

    async def ejecutar_secuencial(self, tareas, tipo):
        inicio = time.time()
        for t in tareas:
            if tipo == "cpu":
                await self.tarea_cpu(t)
            elif tipo == "io":
                await self.tarea_io(t)
            else:
                await self.tarea_mixta(*t)
        return time.time() - inicio

    async def ejecutar_async(self, tareas, tipo):
        inicio = time.time()

        if tipo == "cpu":
            coros = [self.tarea_cpu(t) for t in tareas]
        elif tipo == "io":
            coros = [self.tarea_io(t) for t in tareas]
        else:
            coros = [self.tarea_mixta(*t) for t in tareas]

        await asyncio.gather(*coros)
        return time.time() - inicio

    async def comparar(self, ejecuciones=3):
        pruebas = [
            ("cpu", [80000, 100000, 120000], "CPU intensiva"),
            ("io", [0.5, 0.7, 0.4, 0.6], "I/O intensiva"),
            ("mixta", [(50000,0.2),(70000,0.3)], "Mixta")
        ]

        print("=== COMPARACIÓN EN PYODIDE ===")

        for tipo, tareas, nombre in pruebas:
            sec = []
            asc = []

            for _ in range(ejecuciones):
                sec.append(await self.ejecutar_secuencial(tareas, tipo))
                asc.append(await self.ejecutar_async(tareas, tipo))

            prom_sec = statistics.mean(sec)
            prom_async = statistics.mean(asc)

            print(f"\\n{nombre}")
            print(f"  Secuencial: {prom_sec:.2f}s")
            print(f"  Async:      {prom_async:.2f}s")
            print(f"  Speedup:    {prom_sec/prom_async:.2f}x")

async def main():
    c = ComparadorAsync()
    await c.comparar()

await main()`


// Quiz
const preguntas = [
    {
        texto: "¿Qué es un proceso en un sistema operativo?",
        opciones: [
            { texto: "Un programa en ejecución con su propio espacio de memoria", correcta: true },
            { texto: "Una función dentro de un programa", correcta: false },
            { texto: "Un hilo de ejecución", correcta: false },
            { texto: "Un recurso compartido", correcta: false }
        ]
    },
    {
        texto: "¿Qué es un hilo?",
        opciones: [
            { texto: "Una unidad ligera de ejecución dentro de un proceso", correcta: true },
            { texto: "Un proceso independiente", correcta: false },
            { texto: "Un programa completo", correcta: false },
            { texto: "Un dispositivo del sistema", correcta: false }
        ]
    },
    {
        texto: "¿Cuál es una ventaja de usar hilos en lugar de procesos?",
        opciones: [
            { texto: "Comparten memoria y son más eficientes", correcta: true },
            { texto: "Son totalmente independientes", correcta: false },
            { texto: "No requieren sincronización", correcta: false },
            { texto: "Usan más memoria", correcta: false }
        ]
    }
]

</script>