<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="5" titulo="5.1.4 Sincronización: semáforos">
            <p class="text-gray-600 mt-2">Diferencias fundamentales entre dos modelos de concurrencia y cuándo usar cada
                uno.</p>
        </HeaderTitle>

        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Gestión de Recursos Compartidos</h2>
            <p class="text-gray-700 leading-relaxed">
                Los semáforos son mecanismos de sincronización que controlan el acceso a recursos compartidos limitados
                en entornos concurrentes. Inventados por Edsger Dijkstra en 1965, un semáforo mantiene un contador que
                representa el número de recursos disponibles. Los hilos/procesos deben <strong>adquirir</strong> (wait)
                un semáforo antes de usar un recurso y <strong>liberar</strong> (signal) después de usarlo.
                Esto previene condiciones de carrera y garantiza que no más de N hilos accedan simultáneamente
                a un recurso limitado, como conexiones de base de datos, puertos de red o archivos compartidos.
            </p>
        </section>

        <!-- Tarjetas de conceptos clave -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
                        <h3 class="font-bold text-gray-800">Semáforo binario</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Valores 0 o 1. Equivalente a un mutex. Controla acceso exclusivo a
                        un recurso.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Estacionamiento: 10 plazas = semáforo con valor 10. Coches entran
                        (wait) y salen (signal).</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Un semáforo no es lo mismo que un mutex. Mutex es para exclusión
                        mutua, semáforo para conteo.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">El nombre viene de las señales ferroviarias que Dijkstra vio en los
                        Países Bajos.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Semáforo básico: control de acceso a recursos
                    limitados</h3>
                <p class="text-gray-600 mb-4">Implementación de un semáforo simple para gestionar acceso a un número
                    fijo de recursos.</p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Sistema de conexiones a base de datos</h3>
                <p class="text-gray-600 mb-4">Uso de semáforos para gestionar un pool de conexiones limitado.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Productor-consumidor con semáforos</h3>
                <p class="text-gray-600 mb-4">Patrón clásico usando semáforos para sincronizar productores y
                    consumidores.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa un sistema de gestión de impresoras en una oficina usando
                    semáforos.
                    Hay 3 impresoras disponibles. Los empleados (hilos) solicitan una impresora, la usan por un tiempo
                    aleatorio,
                    y luego la liberan. El sistema debe:
                    1. Controlar que nunca más de 3 impresoras estén en uso simultáneo
                    2. Llevar estadísticas de uso de cada impresora
                    3. Manejar correctamente la liberación de impresoras incluso si hay errores
                    4. Mostrar el estado del sistema en tiempo real
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz sincronización: semáforos"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/5.1.3" siguiente="/Unidad/5.1.5" textoAnterior="Anterior"
            textoSiguiente="Siguiente" tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true"
            mostrarSiguiente="true" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Semáforo básico
const ejemplo1Code = `import asyncio
import random

async def demostrar_semaforo_basico():
    print("=== SEMÁFORO ASYNC: ACCESO A RECURSO LIMITADO ===")

    # Semáforo que permite 3 accesos simultáneos
    semaforo = asyncio.Semaphore(3)
    contador = 0
    lock = asyncio.Lock()

    async def tarea(nombre, duracion):
        nonlocal contador
        print(f"[{nombre}] esperando acceso...")

        async with semaforo:
            async with lock:
                contador += 1
                print(f"[{nombre}] ✓ acceso concedido ({contador}/3)")

            await asyncio.sleep(duracion)

            async with lock:
                contador -= 1
                print(f"[{nombre}] liberó recurso ({contador}/3)")

    tareas = [
        ("Tarea A", 2),
        ("Tarea B", 3),
        ("Tarea C", 1),
        ("Tarea D", 2),
        ("Tarea E", 4),
        ("Tarea F", 1),
    ]

    await asyncio.gather(*(tarea(n, d) for n, d in tareas))
    print("✓ Todas las tareas completadas")

async def ejemplo_recursos_especificos():
    print("\\n=== SEMÁFORO CON RECURSOS IDENTIFICABLES (ASYNC) ===")

    semaforo = asyncio.Semaphore(2)
    scanners = ["Scanner-1", "Scanner-2"]
    lock = asyncio.Lock()

    async def usar_scanner(empleado, duracion):
        print(f"[{empleado}] esperando scanner...")
        async with semaforo:
            async with lock:
                scanner = scanners.pop(0)
            print(f"[{empleado}] usando {scanner}")
            await asyncio.sleep(duracion)
            async with lock:
                scanners.append(scanner)
            print(f"[{empleado}] liberó {scanner}")

    empleados = [
        ("Ana", 2),
        ("Carlos", 1),
        ("Beatriz", 3),
        ("David", 1),
        ("Elena", 2),
    ]

    await asyncio.gather(*(usar_scanner(e, d) for e, d in empleados))
    print("✓ Todos los escaneos completados")

async def comparacion_semaforo_mutex():
    print("\\n=== SEMÁFORO vs MUTEX (ASYNC) ===")

    semaforo = asyncio.Semaphore(1)
    mutex = asyncio.Lock()
    contador = 0

    async def con_semaforo():
        nonlocal contador
        async with semaforo:
            temp = contador
            await asyncio.sleep(0)
            contador = temp + 1

    async def con_mutex():
        nonlocal contador
        async with mutex:
            temp = contador
            await asyncio.sleep(0)
            contador = temp + 1

    contador = 0
    await asyncio.gather(*(con_semaforo() for _ in range(500)))
    print(f"Semáforo binario → {contador}")

    contador = 0
    await asyncio.gather(*(con_mutex() for _ in range(500)))
    print(f"Mutex (Lock) → {contador}")

async def main():
    await demostrar_semaforo_basico()
    await ejemplo_recursos_especificos()
    await comparacion_semaforo_mutex()

await main()
`


// Ejemplo 2: Sistema de conexiones a base de datos
const ejemplo2Code = `
import threading
import time
import random
from contextlib import contextmanager

class PoolConexionesBD:
    def __init__(self, max_conexiones=5):
        self.max_conexiones = max_conexiones
        self.semaforo = threading.Semaphore(max_conexiones)
        self.conexiones = [f"Connection-{i}" for i in range(max_conexiones)]
        self.conexiones_disponibles = self.conexiones.copy()
        self.lock = threading.Lock()

    @contextmanager
    def obtener_conexion(self, cliente):
        print(f"[{cliente}] solicitando conexión")
        self.semaforo.acquire()
        try:
            conexion = self.conexiones_disponibles.pop(0)
            print(f"[{cliente}] usando {conexion}")
            yield conexion
        finally:
            self.conexiones_disponibles.append(conexion)
            self.semaforo.release()

def simulacion():
    pool = PoolConexionesBD(2)
    with pool.obtener_conexion("Cliente-1"):
        time.sleep(1)

simulacion()
`


// Ejemplo 3: Productor-consumidor con semáforos
const ejemplo3Code = `
import asyncio
import random

buffer = []
BUFFER_MAX = 5

mutex = asyncio.Semaphore(1)
items = asyncio.Semaphore(0)
espacios = asyncio.Semaphore(BUFFER_MAX)

async def productor(pid):
    for i in range(5):
        await espacios.acquire()
        await mutex.acquire()

        item = f"Item-{pid}-{i}"
        buffer.append(item)
        print(f"[Productor {pid}] produjo {item}")

        mutex.release()
        items.release()

        await asyncio.sleep(random.uniform(0.2, 0.5))

async def consumidor(cid):
    for _ in range(5):
        await items.acquire()
        await mutex.acquire()

        item = buffer.pop(0)
        print(f"[Consumidor {cid}] consumió {item}")

        mutex.release()
        espacios.release()

        await asyncio.sleep(random.uniform(0.3, 0.6))

async def main():
    productores = [asyncio.create_task(productor(i)) for i in range(2)]
    consumidores = [asyncio.create_task(consumidor(i)) for i in range(2)]

    await asyncio.gather(*productores, *consumidores)

await main()
`



// Quiz
const preguntas = [
    {
        texto: "¿Qué es un semáforo en programación concurrente?",
        opciones: [
            { texto: "Un mecanismo de sincronización", correcta: true },
            { texto: "Un tipo de hilo", correcta: false },
            { texto: "Un proceso del sistema operativo", correcta: false },
            { texto: "Una estructura de datos lineal", correcta: false }
        ]
    },
    {
        texto: "¿Para qué se utilizan los semáforos?",
        opciones: [
            { texto: "Controlar el acceso a recursos compartidos", correcta: true },
            { texto: "Crear procesos", correcta: false },
            { texto: "Eliminar condiciones de bucle", correcta: false },
            { texto: "Optimizar memoria", correcta: false }
        ]
    },
    {
        texto: "¿Qué ocurre cuando un semáforo está en cero?",
        opciones: [
            { texto: "El hilo se bloquea hasta que el semáforo se libere", correcta: true },
            { texto: "El hilo continúa normalmente", correcta: false },
            { texto: "El recurso se elimina", correcta: false },
            { texto: "Se reinicia el programa", correcta: false }
        ]
    }
]

</script>