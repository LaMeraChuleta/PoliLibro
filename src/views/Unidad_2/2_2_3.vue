<template>
    <div class="container mx-auto px-4 py-6">
        <!-- Header -->
        <HeaderTitle numero="2" titulo="2.2.3 Ejemplo de aplicación">
            <p class="mt-4 text-gray-600 max-w-3xl">
                Implementaremos un sistema de gestión de trabajos de impresión que simula el funcionamiento de una cola
                en un
                entorno real. Este ejemplo integra todos los conceptos aprendidos sobre colas.
            </p>
        </HeaderTitle>

        <!-- Tarjetas de Conceptos Clave -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <div class="text-2xl font-mono text-blue-600 mb-3">+</div>
                    <h3 class="font-bold text-gray-800 mb-2">Prioridades</h3>
                    <p class="text-gray-600 text-sm">
                        Manejo de diferentes niveles de prioridad en trabajos de impresión usando múltiples colas.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <div class="text-2xl font-mono text-blue-600 mb-3">X</div>
                    <h3 class="font-bold text-gray-800 mb-2">Gestión de Estado</h3>
                    <p class="text-gray-600 text-sm">
                        Seguimiento del estado de cada trabajo: pendiente, procesando, completado o cancelado.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <div class="text-2xl font-mono text-blue-600 mb-3">E</div>
                    <h3 class="font-bold text-gray-800 mb-2">Múltiples Colas</h3>
                    <p class="text-gray-600 text-sm">
                        Implementación de colas separadas para diferentes tipos de trabajos y prioridades.
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                    <div class="text-2xl font-mono text-blue-600 mb-3">?</div>
                    <h3 class="font-bold text-gray-800 mb-2">Análisis de Rendimiento</h3>
                    <p class="text-gray-600 text-sm">
                        Medición de métricas como tiempo promedio de espera y cantidad de trabajos procesados.
                    </p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de Código -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Implementación Paso a Paso</h2>

            <div class="space-y-10">
                <!-- Ejemplo 1 -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Paso 1: Estructura Base del Sistema</h3>                 
                    <PythonRunner :code="ejemplo1Code" />
                </div>

                <!-- Ejemplo 2 -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Paso 2: Gestión de Prioridades</h3>                 
                    <PythonRunner :code="ejemplo2Code" />
                </div>

                <!-- Ejemplo 3 -->
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Paso 3: Simulación Completa</h3>                 
                    <PythonRunner :code="ejemplo3Code" />
                </div>
            </div>
        </section>

        <!-- Ejercicio Práctico -->
        <!-- <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio: Centro de Atención Médica</h2>
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div class="mb-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Simulación de Triage en Urgencias</h3>
                    <p class="text-gray-600 mb-4">
                        Un hospital necesita un sistema para gestionar la cola de pacientes en urgencias con el
                        siguiente
                        comportamiento:
                    </p>
                    <ul class="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                        <li>Los pacientes llegan con diferentes niveles de gravedad (Alta, Media, Baja)</li>
                        <li>Los pacientes de mayor gravedad deben ser atendidos primero</li>
                        <li>Dentro de cada nivel de gravedad, se atiende por orden de llegada</li>
                        <li>Debe mostrar estadísticas de tiempo de espera por nivel</li>
                        <li>Permitir agregar nuevos pacientes y atender según prioridad</li>
                    </ul>
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <PythonRunner :code="ejercicioCode" />
                    </div>
                </div>

                <button @click="mostrarSolucion = !mostrarSolucion"
                    class="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    <span>{{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} solución</span>
                    <svg class="w-4 h-4" :class="{ 'rotate-180': mostrarSolucion }" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div v-if="mostrarSolucion" class="mt-6 pt-6 border-t border-gray-200">
                    <h4 class="font-bold text-gray-800 mb-3">Solución Propuesta:</h4>
                    <PythonRunner :code="solucionCode" />
                </div>
            </div>
        </section> -->

        <!-- Quiz -->
        <QuizQuestions :preguntas="preguntas" titulo="Quiz de ejemplo de aplicación"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/2.2.2" textoAnterior="Anterior" tituloActual="Unidad II • Pilas y Colas"
            mostrarAnterior="true" mostrarSiguiente="false" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"
// Ejemplo 1: Estructura base
const ejemplo1Code = `# Sistema de gestión de trabajos de impresión
from datetime import datetime
from collections import deque

class TrabajoImpresion:
    """Representa un trabajo de impresión en la cola."""
    
    def __init__(self, id_trabajo, nombre, paginas, prioridad="normal"):
        self.id = id_trabajo
        self.nombre = nombre
        self.paginas = paginas
        self.prioridad = prioridad  # "alta", "normal", "baja"
        self.hora_creacion = datetime.now()
        self.estado = "pendiente"  # "pendiente", "procesando", "completado", "cancelado"
        self.hora_inicio = None
        self.hora_fin = None
    
    def tiempo_espera(self):
        """Calcula el tiempo de espera en segundos."""
        if self.hora_inicio:
            return (self.hora_inicio - self.hora_creacion).total_seconds()
        return (datetime.now() - self.hora_creacion).total_seconds()
    
    def tiempo_procesamiento(self):
        """Calcula el tiempo de procesamiento en segundos."""
        if self.hora_fin and self.hora_inicio:
            return (self.hora_fin - self.hora_inicio).total_seconds()
        return 0
    
    def __str__(self):
        return f"Trabajo #{self.id}: {self.nombre} ({self.paginas} págs) - {self.estado}"

# Prueba básica
print("=== Creación de trabajos ===")
trabajo1 = TrabajoImpresion(1, "Informe Mensual", 25, "alta")
trabajo2 = TrabajoImpresion(2, "Presentación", 15, "normal")

print(trabajo1)
print(trabajo2)
print(f"Tiempo de espera trabajo1: {trabajo1.tiempo_espera():.1f} segundos")`

// Ejemplo 2: Gestión de prioridades
const ejemplo2Code = `# Sistema completo con múltiples colas por prioridad

from collections import deque
from datetime import datetime

class TrabajoImpresion:
    """Representa un trabajo de impresión."""
    
    def __init__(self, id_trabajo, nombre, paginas, prioridad):
        self.id = id_trabajo
        self.nombre = nombre
        self.paginas = paginas
        self.prioridad = prioridad
        self.estado = "pendiente"
        self.hora_creacion = datetime.now()
        self.hora_inicio = None
        self.hora_fin = None
    
    def tiempo_espera(self):
        """Tiempo de espera antes de iniciar el trabajo."""
        if self.hora_inicio:
            return (self.hora_inicio - self.hora_creacion).total_seconds()
        return (datetime.now() - self.hora_creacion).total_seconds()

class SistemaImpresion:
    """Gestiona múltiples colas de impresión por prioridad."""
    
    def __init__(self):
        self.cola_alta = deque()
        self.cola_normal = deque()
        self.cola_baja = deque()
        self.trabajos_completados = []
        self.trabajo_actual = None
        self.contador_id = 1
    
    def agregar_trabajo(self, nombre, paginas, prioridad="normal"):
        trabajo = TrabajoImpresion(self.contador_id, nombre, paginas, prioridad)
        self.contador_id += 1
        
        if prioridad == "alta":
            self.cola_alta.append(trabajo)
        elif prioridad == "normal":
            self.cola_normal.append(trabajo)
        else:
            self.cola_baja.append(trabajo)
        
        print(f"✓ Trabajo #{trabajo.id} agregado a cola '{prioridad}'")
        return trabajo.id
    
    def obtener_siguiente_trabajo(self):
        if self.cola_alta:
            return self.cola_alta.popleft()
        elif self.cola_normal:
            return self.cola_normal.popleft()
        elif self.cola_baja:
            return self.cola_baja.popleft()
        return None
    
    def procesar_trabajo(self):
        trabajo = self.obtener_siguiente_trabajo()
        if not trabajo:
            print("No hay trabajos pendientes")
            return None
        
        self.trabajo_actual = trabajo
        trabajo.estado = "procesando"
        trabajo.hora_inicio = datetime.now()
        
        print("\\n=== Procesando trabajo ===")
        print(f"ID: {trabajo.id}")
        print(f"Trabajo: {trabajo.nombre}")
        print(f"Prioridad: {trabajo.prioridad}")
        print(f"Páginas: {trabajo.paginas}")
        print(f"Tiempo de espera: {trabajo.tiempo_espera():.1f} segundos")
        
        tiempo_proceso = trabajo.paginas * 1.0
        print(f"Tiempo estimado: {tiempo_proceso} segundos")
        
        # Finalizar trabajo (simulado)
        trabajo.estado = "completado"
        trabajo.hora_fin = datetime.now()
        self.trabajos_completados.append(trabajo)
        self.trabajo_actual = None
        
        return trabajo

# Demostración
print("=== Sistema de Impresión con Prioridades ===\\n")
sistema = SistemaImpresion()

sistema.agregar_trabajo("Informe Urgente", 10, "alta")
sistema.agregar_trabajo("Documentación", 30, "baja")
sistema.agregar_trabajo("Reporte Diario", 5, "normal")
sistema.agregar_trabajo("Emergencia", 3, "alta")

print("\\n=== Procesamiento por prioridad ===")
for i in range(4):
    trabajo = sistema.procesar_trabajo()
    if trabajo:
        print(f"Procesado: {trabajo.nombre} (Prioridad: {trabajo.prioridad})")
`

// Ejemplo 3: Sistema completo
const ejemplo3Code = `
from datetime import datetime
from collections import deque
import time

class TrabajoImpresion:
    contador = 1

    def __init__(self, nombre, paginas, prioridad):
        self.id = TrabajoImpresion.contador
        TrabajoImpresion.contador += 1
        self.nombre = nombre
        self.paginas = paginas
        self.prioridad = prioridad
        self.estado = "pendiente"
        self.hora_llegada = datetime.now()
        self.hora_inicio = None
        self.hora_fin = None

    def tiempo_espera(self):
        if self.hora_inicio:
            return (self.hora_inicio - self.hora_llegada).total_seconds()
        return 0

    def tiempo_procesamiento(self):
        if self.hora_fin and self.hora_inicio:
            return (self.hora_fin - self.hora_inicio).total_seconds()
        return 0


class SistemaImpresion:
    def __init__(self):
        self.cola_alta = deque()
        self.cola_normal = deque()
        self.cola_baja = deque()
        self.trabajos_completados = []
        self.trabajo_actual = None

    def agregar_trabajo(self, nombre, paginas, prioridad):
        trabajo = TrabajoImpresion(nombre, paginas, prioridad)
        if prioridad == "alta":
            self.cola_alta.append(trabajo)
        elif prioridad == "normal":
            self.cola_normal.append(trabajo)
        else:
            self.cola_baja.append(trabajo)

    def procesar_trabajo(self):
        if self.cola_alta:
            trabajo = self.cola_alta.popleft()
        elif self.cola_normal:
            trabajo = self.cola_normal.popleft()
        elif self.cola_baja:
            trabajo = self.cola_baja.popleft()
        else:
            return None

        trabajo.estado = "procesando"
        trabajo.hora_inicio = datetime.now()
        self.trabajo_actual = trabajo

        # Simulación rápida
        time.sleep(0.1)
        return trabajo


class SistemaImpresionCompleto(SistemaImpresion):
    def __init__(self):
        super().__init__()
        self.estadisticas = {
            "total_procesados": 0,
            "total_paginas": 0,
            "tiempo_total_espera": 0,
            "tiempo_total_proceso": 0
        }

    def completar_trabajo(self, trabajo):
        trabajo.estado = "completado"
        trabajo.hora_fin = datetime.now()

        self.estadisticas["total_procesados"] += 1
        self.estadisticas["total_paginas"] += trabajo.paginas
        self.estadisticas["tiempo_total_espera"] += trabajo.tiempo_espera()
        self.estadisticas["tiempo_total_proceso"] += trabajo.tiempo_procesamiento()

        self.trabajos_completados.append(trabajo)
        self.trabajo_actual = None

        print(f"✓ Trabajo #{trabajo.id} completado en {trabajo.tiempo_procesamiento():.2f} segundos")

    def mostrar_estadisticas(self):
        print("\\n=== ESTADÍSTICAS DEL SISTEMA ===")
        print(f"Total trabajos procesados: {self.estadisticas['total_procesados']}")
        print(f"Total páginas impresas: {self.estadisticas['total_paginas']}")

        if self.estadisticas["total_procesados"] > 0:
            print(
                f"Tiempo promedio de espera: "
                f"{self.estadisticas['tiempo_total_espera'] / self.estadisticas['total_procesados']:.2f} s"
            )
            print(
                f"Tiempo promedio de proceso: "
                f"{self.estadisticas['tiempo_total_proceso'] / self.estadisticas['total_procesados']:.2f} s"
            )

        print("\\n--- Colas actuales ---")
        print(f"Alta prioridad: {len(self.cola_alta)}")
        print(f"Normal prioridad: {len(self.cola_normal)}")
        print(f"Baja prioridad: {len(self.cola_baja)}")
        print("=======================\\n")


# === SIMULACIÓN ===
print("=== SIMULACIÓN COMPLETA DEL SISTEMA ===")
sistema = SistemaImpresionCompleto()

trabajos = [
    ("Contrato Urgente", 8, "alta"),
    ("Memoria Anual", 45, "baja"),
    ("Facturas", 12, "normal"),
    ("Presentación Ejecutiva", 20, "alta"),
    ("Correo Interno", 2, "baja")
]

for t in trabajos:
    sistema.agregar_trabajo(*t)

for _ in range(3):
    trabajo = sistema.procesar_trabajo()
    if trabajo:
        sistema.completar_trabajo(trabajo)

sistema.mostrar_estadisticas()
`


// Quiz
const preguntas = [
    {
        texto: "¿Cuál es un uso común de las colas en aplicaciones?",
        opciones: [
            { texto: "Deshacer acciones", correcta: false },
            { texto: "Atención por turnos", correcta: true },
            { texto: "Evaluar expresiones", correcta: false },
            { texto: "Ordenar listas", correcta: false }
        ]
    },
    {
        texto: "¿Qué sistema utiliza colas para gestionar tareas en espera?",
        opciones: [
            { texto: "Pila de llamadas", correcta: false },
            { texto: "Sistema de impresión", correcta: true },
            { texto: "Memoria caché", correcta: false },
            { texto: "Árboles", correcta: false }
        ]
    },
    {
        texto: "¿Qué principio siguen las colas al procesar elementos?",
        opciones: [
            { texto: "LIFO", correcta: false },
            { texto: "FIFO", correcta: true },
            { texto: "Aleatorio", correcta: false },
            { texto: "Ordenado", correcta: false }
        ]
    }
]

</script>