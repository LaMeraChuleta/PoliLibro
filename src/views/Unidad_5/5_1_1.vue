<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="5" titulo="5.1.1 Descripción">
            <p class="text-gray-600 mt-2">Ejecutar múltiples tareas aparentemente simultáneas para mejorar la
                eficiencia.</p>
        </HeaderTitle>

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
                    <p class="text-gray-600 text-sm">Concurrencia: múltiples tareas progresando. Paralelismo: múltiples
                        tareas ejecutando simultáneamente.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Servidor web: atiende múltiples clientes simultáneamente mientras
                        algunos esperan I/O.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Python tiene GIL (Global Interpreter Lock) que limita hilos para
                        CPU, pero no para I/O.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">La concurrencia existe desde los años 60, pero se popularizó con la
                        web y aplicaciones multitarea.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Concurrencia secuencial vs concurrente</h3>
                <p class="text-gray-600 mb-4">Comparación entre ejecución secuencial y concurrente para tareas con
                    tiempos de espera.</p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Hilos (Threads) para operaciones I/O</h3>
                <p class="text-gray-600 mb-4">Uso de threading para descargar múltiples archivos web simultáneamente.
                </p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Procesos (Process) para operaciones CPU
                    intensivas</h3>
                <p class="text-gray-600 mb-4">Uso de multiprocessing para cálculos matemáticos pesados que aprovechan
                    múltiples núcleos.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa un sistema de monitoreo de servidores que verifique el estado
                    (online/offline) de múltiples servidores concurrentemente usando hilos. Cada verificación debe
                    simular
                    un tiempo de espera de red. Luego, implementa una versión que use procesos y compara el rendimiento.
                    Usa los servidores del ejemplo 2 como referencia.
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz de descripcion programacion concurrente"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad textoSiguiente="Siguiente" siguiente="/Unidad/5.1.2"
            tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true" mostrarSiguiente="false" />
    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Concurrencia secuencial vs concurrente
const ejemplo1Code = `import asyncio
import time

async def tarea(nombre, duracion):
    print(f"[{nombre}] Iniciando tarea (duración: {duracion}s)")
    await asyncio.sleep(duracion)
    print(f"[{nombre}] Tarea completada")
    return f"Resultado de {nombre}"

async def ejecucion_secuencial(tareas):
    print("=== EJECUCIÓN SECUENCIAL ===")
    inicio = time.time()
    resultados = []

    for nombre, duracion in tareas:
        resultado = await tarea(nombre, duracion)
        resultados.append(resultado)

    tiempo_total = time.time() - inicio
    print(f"Tiempo total secuencial: {tiempo_total:.2f} segundos")
    return resultados, tiempo_total

async def ejecucion_concurrente(tareas):
    print("\\n=== EJECUCIÓN CONCURRENTE (ASYNCIO) ===")
    inicio = time.time()

    corutinas = [
        tarea(nombre, duracion)
        for nombre, duracion in tareas
    ]

    resultados = await asyncio.gather(*corutinas)

    tiempo_total = time.time() - inicio
    print(f"Tiempo total concurrente: {tiempo_total:.2f} segundos")
    return resultados, tiempo_total

async def main():
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

    resultados_sec, tiempo_sec = await ejecucion_secuencial(tareas)
    resultados_conc, tiempo_conc = await ejecucion_concurrente(tareas)

    print("\\n=== ANÁLISIS COMPARATIVO ===")
    print(f"Tiempo secuencial: {tiempo_sec:.2f}s")
    print(f"Tiempo concurrente: {tiempo_conc:.2f}s")
    print(f"Mejora: {tiempo_sec/tiempo_conc:.2f}x más rápido")

    print("\\n=== EXPLICACIÓN ===")
    print("En asyncio, las tareas cooperan:")
    print("cuando una espera (await), otra puede avanzar.")

await main()`


// Ejemplo 2: Hilos para operaciones I/O
const ejemplo2Code = `import asyncio
import time
import random

class DescargadorConcurrente:
    """
    Sistema de descarga concurrente de múltiples archivos usando asyncio.
    """
    def __init__(self, max_concurrentes=3):
        self.max_concurrentes = max_concurrentes
        self.resultados = {}
        self.semaforo = asyncio.Semaphore(max_concurrentes)

    async def simular_descarga(self, url, tamano_mb):
        """
        Simula la descarga de un archivo con tiempo proporcional al tamaño.
        """
        async with self.semaforo:
            tiempo_descarga = tamano_mb * 0.5  # 0.5 segundos por MB
            print(f"  Descargando {url} ({tamano_mb}MB) - estimado: {tiempo_descarga:.1f}s")

            # Simular tiempo de descarga (NO bloqueante)
            await asyncio.sleep(tiempo_descarga)

            # Simular posible fallo (10%)
            if random.random() < 0.1:
                raise Exception(f"Error de conexión en {url}")

            return f"{url} descargado ({tamano_mb}MB, {tiempo_descarga:.1f}s)"

    async def descargar_archivos(self, archivos):
        """
        Descarga múltiples archivos concurrentemente.
        """
        print("=== DESCARGA CONCURRENTE DE ARCHIVOS (ASYNCIO) ===")
        print(f"Máximo de descargas simultáneas: {self.max_concurrentes}")
        print(f"Total archivos: {len(archivos)}")

        inicio = time.time()

        async def tarea_descarga(url, tamano):
            try:
                resultado = await self.simular_descarga(url, tamano)
                self.resultados[url] = ("éxito", resultado)
                print(f"  ✓ {url} completado")
            except Exception as e:
                self.resultados[url] = ("error", str(e))
                print(f"  ✗ {url} falló: {e}")

        tareas = [
            tarea_descarga(url, tamano)
            for url, tamano in archivos
        ]

        await asyncio.gather(*tareas)

        tiempo_total = time.time() - inicio

        print("\\n=== RESULTADOS ===")
        print(f"Tiempo total: {tiempo_total:.2f} segundos")

        exito = sum(1 for estado, _ in self.resultados.values() if estado == "éxito")
        error = len(archivos) - exito

        print(f"Archivos exitosos: {exito}")
        print(f"Archivos con error: {error}")

        tiempo_secuencial = sum(tamano for _, tamano in archivos) * 0.5
        print(f"\\nTiempo estimado secuencial: {tiempo_secuencial:.2f}s")
        print(f"Mejora: {tiempo_secuencial / tiempo_total:.2f}x más rápido")

        return self.resultados

async def ejemplo_descargas():
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

    descargador = DescargadorConcurrente(max_concurrentes=3)
    resultados = await descargador.descargar_archivos(archivos)

    print("\\n=== DETALLES POR ARCHIVO ===")
    for url, (estado, mensaje) in resultados.items():
        print(f"{url}: {estado} - {mensaje}")

await ejemplo_descargas()

print("\\n=== OBSERVACIONES ===")
print("1. asyncio es ideal para I/O en Pyodide")
print("2. Semaphore limita concurrencia sin hilos")
print("3. No se bloquea el navegador")
print("4. Modelo basado en event loop")`


// Ejemplo 3: Procesos para CPU intensivas
const ejemplo3Code = `import time
import math
import asyncio

def calcular_primos_hasta(n):
    print(f"Calculando primos hasta {n}...")
    primos = []

    for num in range(2, n + 1):
        es_primo = True
        limite = int(math.sqrt(num)) + 1
        for i in range(2, limite):
            if num % i == 0:
                es_primo = False
                break
        if es_primo:
            primos.append(num)

    return len(primos), primos[:5]

def calcular_factorial(n):
    print(f"Calculando factorial de {n}...")
    resultado = 1
    for i in range(1, n + 1):
        resultado *= i
    return n, len(str(resultado))

def calcular_sumatoria_cuadrados(hasta):
    print(f"Calculando sumatoria de cuadrados hasta {hasta}...")
    return sum(i * i for i in range(1, hasta + 1))

def ejecucion_secuencial_cpu(tareas_primos, tareas_factorial, tareas_sumatoria):
    print("=== EJECUCIÓN SECUENCIAL (CPU) ===")
    inicio = time.time()
    resultados = {}

    for n in tareas_primos:
        resultados[f"primos_{n}"] = calcular_primos_hasta(n)

    for n in tareas_factorial:
        resultados[f"factorial_{n}"] = calcular_factorial(n)

    for n in tareas_sumatoria:
        resultados[f"sumatoria_{n}"] = calcular_sumatoria_cuadrados(n)

    tiempo = time.time() - inicio
    print(f"Tiempo total secuencial: {tiempo:.2f} segundos")
    return resultados, tiempo

async def ejecucion_async_cpu(tareas_primos, tareas_factorial, tareas_sumatoria):
    """
    Intento de ejecución 'concurrente' con asyncio.
    NO mejora CPU-bound (demostración).
    """
    print("\\n=== EJECUCIÓN ASYNC (CPU-bound) ===")
    inicio = time.time()

    async def wrapper(func, *args):
        return func(*args)

    tareas = []

    for n in tareas_primos:
        tareas.append(wrapper(calcular_primos_hasta, n))

    for n in tareas_factorial:
        tareas.append(wrapper(calcular_factorial, n))

    for n in tareas_sumatoria:
        tareas.append(wrapper(calcular_sumatoria_cuadrados, n))

    resultados = await asyncio.gather(*tareas)

    tiempo = time.time() - inicio
    print(f"Tiempo total async: {tiempo:.2f} segundos")
    return resultados, tiempo

async def main():
    # Cargas reducidas (navegador)
    tareas_primos = [3000, 4000, 5000]
    tareas_factorial = [800, 1000]
    tareas_sumatoria = [300000, 500000]

    print("Tareas CPU intensivas a ejecutar:")
    print(f"  Primos hasta: {tareas_primos}")
    print(f"  Factoriales de: {tareas_factorial}")
    print(f"  Sumatoria hasta: {tareas_sumatoria}")

    resultados_sec, tiempo_sec = ejecucion_secuencial_cpu(
        tareas_primos, tareas_factorial, tareas_sumatoria
    )

    resultados_async, tiempo_async = await ejecucion_async_cpu(
        tareas_primos, tareas_factorial, tareas_sumatoria
    )

    print("\\n=== COMPARACIÓN ===")
    print(f"Tiempo secuencial: {tiempo_sec:.2f}s")
    print(f"Tiempo async: {tiempo_async:.2f}s")
    print(f"Mejora: {tiempo_sec / tiempo_async:.2f}x")

    print("\\n=== CONCLUSIÓN ===")
    print("1. asyncio NO mejora tareas CPU-bound")
    print("2. El navegador no permite multiprocessing")
    print("3. CPU-bound requiere procesos reales")
    print("4. Pyodide es ideal para I/O, no para cómputo pesado")

await main()`


// Quiz
const preguntas = [
    {
        texto: "¿Qué es la programación concurrente?",
        opciones: [
            { texto: "Ejecución de varias tareas de forma simultánea o intercalada", correcta: true },
            { texto: "Ejecución de una sola tarea a la vez", correcta: false },
            { texto: "Programación exclusiva de sistemas distribuidos", correcta: false },
            { texto: "Uso obligatorio de varios procesadores", correcta: false }
        ]
    },
    {
        texto: "¿Cuál es el objetivo principal de la programación concurrente?",
        opciones: [
            { texto: "Mejorar el rendimiento y la eficiencia", correcta: true },
            { texto: "Reducir el tamaño del código", correcta: false },
            { texto: "Eliminar errores de programación", correcta: false },
            { texto: "Evitar el uso de memoria", correcta: false }
        ]
    },
    {
        texto: "¿Qué elemento suele utilizarse para ejecutar tareas concurrentes?",
        opciones: [
            { texto: "Hilos o procesos", correcta: true },
            { texto: "Variables globales", correcta: false },
            { texto: "Estructuras lineales", correcta: false },
            { texto: "Clases abstractas", correcta: false }
        ]
    }
]

</script>