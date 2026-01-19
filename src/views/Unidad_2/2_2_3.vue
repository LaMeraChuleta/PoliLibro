<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Header -->
    <HeaderTitle numero="2" titulo="2.2.3 Ejemplo de aplicación">
      <p class="mt-4 text-gray-600 max-w-3xl">
        Implementaremos un sistema de gestión de trabajos de impresión que simula el funcionamiento de una cola en un
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
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Definición de clases y estructura inicial
          </div>
          <PythonRunner :code="ejemplo1Code" />
        </div>

        <!-- Ejemplo 2 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Paso 2: Gestión de Prioridades</h3>
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Implementación de colas por prioridad
          </div>
          <PythonRunner :code="ejemplo2Code" />
        </div>

        <!-- Ejemplo 3 -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Paso 3: Simulación Completa</h3>
          <div class="bg-gray-800 text-gray-200 p-4 rounded-t-lg font-mono text-sm">
            # Sistema de impresión en funcionamiento
          </div>
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio: Centro de Atención Médica</h2>
      <div class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Simulación de Triage en Urgencias</h3>
          <p class="text-gray-600 mb-4">
            Un hospital necesita un sistema para gestionar la cola de pacientes en urgencias con el siguiente
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
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de ejemplo de aplicación"></QuizQuestions>

  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

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

class SistemaImpresion:
    """Gestiona múltiples colas de impresión por prioridad."""
    
    def __init__(self):
        # Tres colas separadas por prioridad
        self.cola_alta = deque()
        self.cola_normal = deque()
        self.cola_baja = deque()
        self.trabajos_completados = []
        self.trabajo_actual = None
        self.contador_id = 1
    
    def agregar_trabajo(self, nombre, paginas, prioridad="normal"):
        """Agrega un nuevo trabajo a la cola correspondiente."""
        trabajo = TrabajoImpresion(self.contador_id, nombre, paginas, prioridad)
        self.contador_id += 1
        
        # Agregar a la cola según prioridad
        if prioridad == "alta":
            self.cola_alta.append(trabajo)
        elif prioridad == "normal":
            self.cola_normal.append(trabajo)
        else:  # baja
            self.cola_baja.append(trabajo)
        
        print(f"✓ Trabajo #{trabajo.id} agregado a cola '{prioridad}'")
        return trabajo.id
    
    def obtener_siguiente_trabajo(self):
        """Obtiene el próximo trabajo según prioridad (FIFO dentro de cada nivel)."""
        if self.cola_alta:
            return self.cola_alta.popleft()
        elif self.cola_normal:
            return self.cola_normal.popleft()
        elif self.cola_baja:
            return self.cola_baja.popleft()
        return None
    
    def procesar_trabajo(self):
        """Procesa el siguiente trabajo en la cola."""
        trabajo = self.obtener_siguiente_trabajo()
        if not trabajo:
            print("No hay trabajos pendientes")
            return None
        
        self.trabajo_actual = trabajo
        trabajo.estado = "procesando"
        trabajo.hora_inicio = datetime.now()
        
        print(f"\\n=== Procesando trabajo ===")
        print(f"Trabajo: {trabajo.nombre}")
        print(f"Prioridad: {trabajo.prioridad}")
        print(f"Páginas: {trabajo.paginas}")
        print(f"Tiempo de espera: {trabajo.tiempo_espera():.1f} segundos")
        
        # Simular tiempo de procesamiento (1 segundo por página)
        tiempo_proceso = trabajo.paginas * 1.0
        print(f"Tiempo estimado: {tiempo_proceso} segundos")
        
        return trabajo

# Demostración
print("=== Sistema de Impresión con Prioridades ===\\n")
sistema = SistemaImpresion()

# Agregar trabajos con diferentes prioridades
sistema.agregar_trabajo("Informe Urgente", 10, "alta")
sistema.agregar_trabajo("Documentación", 30, "baja")
sistema.agregar_trabajo("Reporte Diario", 5, "normal")
sistema.agregar_trabajo("Emergencia", 3, "alta")

# Procesar trabajos
print("\\n=== Procesamiento por prioridad ===")
for i in range(4):
    trabajo = sistema.procesar_trabajo()
    if trabajo:
        print(f"Procesado: {trabajo.nombre} (Prioridad: {trabajo.prioridad})")`

// Ejemplo 3: Sistema completo
const ejemplo3Code = `# Sistema completo con estadísticas y estado

class SistemaImpresionCompleto(SistemaImpresion):
    """Extiende el sistema con estadísticas y manejo de estado."""
    
    def __init__(self):
        super().__init__()
        self.estadisticas = {
            "total_procesados": 0,
            "total_paginas": 0,
            "tiempo_total_espera": 0,
            "tiempo_total_proceso": 0
        }
    
    def completar_trabajo(self, trabajo):
        """Marca un trabajo como completado y actualiza estadísticas."""
        trabajo.estado = "completado"
        trabajo.hora_fin = datetime.now()
        
        # Actualizar estadísticas
        self.estadisticas["total_procesados"] += 1
        self.estadisticas["total_paginas"] += trabajo.paginas
        self.estadisticas["tiempo_total_espera"] += trabajo.tiempo_espera()
        self.estadisticas["tiempo_total_proceso"] += trabajo.tiempo_procesamiento()
        
        self.trabajos_completados.append(trabajo)
        self.trabajo_actual = None
        
        print(f"✓ Trabajo #{trabajo.id} completado en {trabajo.tiempo_procesamiento():.1f} segundos")
    
    def mostrar_estadisticas(self):
        """Muestra estadísticas del sistema."""
        print("\\n=== ESTADÍSTICAS DEL SISTEMA ===")
        print(f"Total trabajos procesados: {self.estadisticas['total_procesados']}")
        print(f"Total páginas impresas: {self.estadisticas['total_paginas']}")
        
        if self.estadisticas["total_procesados"] > 0:
            tiempo_prom_espera = self.estadisticas["tiempo_total_espera"] / self.estadisticas["total_procesados"]
            tiempo_prom_proceso = self.estadisticas["tiempo_total_proceso"] / self.estadisticas["total_procesados"]
            print(f"Tiempo promedio de espera: {tiempo_prom_espera:.1f} segundos")
            print(f"Tiempo promedio de proceso: {tiempo_prom_proceso:.1f} segundos")
        
        # Mostrar colas actuales
        print("\\n--- Colas actuales ---")
        print(f"Alta prioridad: {len(self.cola_alta)} trabajos")
        print(f"Normal prioridad: {len(self.cola_normal)} trabajos")
        print(f"Baja prioridad: {len(self.cola_baja)} trabajos")
        print("=======================\\n")
    
    def mostrar_estado_actual(self):
        """Muestra el estado completo del sistema."""
        print("\\n=== ESTADO ACTUAL DEL SISTEMA ===")
        print(f"Trabajo actual: {self.trabajo_actual.nombre if self.trabajo_actual else 'Ninguno'}")
        
        print("\\nCola Alta Prioridad:")
        for trabajo in list(self.cola_alta)[:3]:  # Mostrar primeros 3
            print(f"  - {trabajo.nombre} ({trabajo.paginas} págs)")
        if len(self.cola_alta) > 3:
            print(f"  ... y {len(self.cola_alta) - 3} más")
        
        self.mostrar_estadisticas()

# Simulación completa
print("=== SIMULACIÓN COMPLETA DEL SISTEMA ===\\n")
sistema_completo = SistemaImpresionCompleto()

# Agregar diversos trabajos
trabajos = [
    ("Contrato Urgente", 8, "alta"),
    ("Memoria Anual", 45, "baja"),
    ("Facturas", 12, "normal"),
    ("Presentación Ejecutiva", 20, "alta"),
    ("Correo Interno", 2, "baja")
]

for nombre, paginas, prioridad in trabajos:
    sistema_completo.agregar_trabajo(nombre, paginas, prioridad)

# Procesar algunos trabajos
print("\\n=== PROCESANDO TRABAJOS ===")
for i in range(3):
    trabajo = sistema_completo.procesar_trabajo()
    if trabajo:
        sistema_completo.completar_trabajo(trabajo)

# Mostrar estadísticas finales
sistema_completo.mostrar_estadisticas()`

// Ejercicio y solución
const ejercicioCode = `# Sistema de Triage para Urgencias Médicas
# Completa las funciones según las especificaciones

class Paciente:
    def __init__(self, id_paciente, nombre, edad, gravedad):
        self.id = id_paciente
        self.nombre = nombre
        self.edad = edad
        self.gravedad = gravedad  # "alta", "media", "baja"
        self.hora_llegada = None  # Debería ser datetime.now()
        self.hora_atencion = None
        self.atendido = False

class SistemaTriage:
    def __init__(self):
        # TODO: Crear colas separadas para cada nivel de gravedad
        pass
    
    def agregar_paciente(self, nombre, edad, gravedad):
        # TODO: Agregar paciente a la cola correspondiente
        # Retornar ID del paciente
        pass
    
    def atender_paciente(self):
        # TODO: Atender al paciente con mayor prioridad
        # Dentro de cada nivel, atender por orden de llegada
        # Retornar el paciente atendido o None
        pass
    
    def mostrar_estadisticas(self):
        # TODO: Mostrar tiempo promedio de espera por nivel
        # y cantidad de pacientes en cada cola
        pass
    
    def mostrar_colas(self):
        # TODO: Mostrar pacientes pendientes en cada cola
        pass

# Prueba básica
print("=== Sistema de Triage ===\\n")
sistema = SistemaTriage()

# Agregar algunos pacientes
sistema.agregar_paciente("Juan Pérez", 45, "alta")
sistema.agregar_paciente("María López", 32, "media")
sistema.agregar_paciente("Carlos Ruiz", 28, "baja")

print("Estado inicial:")
sistema.mostrar_colas()`

const solucionCode = `# Solución: Sistema de Triage para Urgencias

from datetime import datetime
from collections import deque

class Paciente:
    def __init__(self, id_paciente, nombre, edad, gravedad):
        self.id = id_paciente
        self.nombre = nombre
        self.edad = edad
        self.gravedad = gravedad  # "alta", "media", "baja"
        self.hora_llegada = datetime.now()
        self.hora_atencion = None
        self.atendido = False
    
    def tiempo_espera(self):
        """Calcula el tiempo de espera en segundos."""
        if self.hora_atencion:
            return (self.hora_atencion - self.hora_llegada).total_seconds()
        return (datetime.now() - self.hora_llegada).total_seconds()
    
    def __str__(self):
        return f"Paciente #{self.id}: {self.nombre} ({self.edad} años) - Gravedad: {self.gravedad}"

class SistemaTriage:
    def __init__(self):
        # Tres colas separadas por nivel de gravedad
        self.cola_alta = deque()
        self.cola_media = deque()
        self.cola_baja = deque()
        self.pacientes_atendidos = []
        self.contador_id = 1
        self.estadisticas = {
            "alta": {"total": 0, "tiempo_espera": 0},
            "media": {"total": 0, "tiempo_espera": 0},
            "baja": {"total": 0, "tiempo_espera": 0}
        }
    
    def agregar_paciente(self, nombre, edad, gravedad):
        """Agrega un paciente a la cola correspondiente."""
        paciente = Paciente(self.contador_id, nombre, edad, gravedad)
        self.contador_id += 1
        
        if gravedad == "alta":
            self.cola_alta.append(paciente)
        elif gravedad == "media":
            self.cola_media.append(paciente)
        else:  # baja
            self.cola_baja.append(paciente)
        
        print(f"✓ Paciente #{paciente.id} agregado a cola '{gravedad}'")
        return paciente.id
    
    def atender_paciente(self):
        """Atiende al paciente con mayor prioridad."""
        # Buscar en orden de prioridad: alta -> media -> baja
        if self.cola_alta:
            paciente = self.cola_alta.popleft()
        elif self.cola_media:
            paciente = self.cola_media.popleft()
        elif self.cola_baja:
            paciente = self.cola_baja.popleft()
        else:
            print("No hay pacientes en espera")
            return None
        
        paciente.hora_atencion = datetime.now()
        paciente.atendido = True
        
        # Actualizar estadísticas
        self.estadisticas[paciente.gravedad]["total"] += 1
        self.estadisticas[paciente.gravedad]["tiempo_espera"] += paciente.tiempo_espera()
        
        self.pacientes_atendidos.append(paciente)
        
        print(f"\\n=== ATENDIENDO PACIENTE ===")
        print(f"Nombre: {paciente.nombre}")
        print(f"Gravedad: {paciente.gravedad}")
        print(f"Edad: {paciente.edad}")
        print(f"Tiempo de espera: {paciente.tiempo_espera():.1f} segundos")
        
        return paciente
    
    def mostrar_estadisticas(self):
        """Muestra estadísticas del sistema."""
        print("\\n=== ESTADÍSTICAS DEL TRIAGE ===")
        
        for gravedad in ["alta", "media", "baja"]:
            total = self.estadisticas[gravedad]["total"]
            tiempo_total = self.estadisticas[gravedad]["tiempo_espera"]
            
            if total > 0:
                promedio = tiempo_total / total
                print(f"Gravedad {gravedad}: {total} pacientes, tiempo promedio: {promedio:.1f}s")
            else:
                print(f"Gravedad {gravedad}: 0 pacientes atendidos")
        
        # Mostrar colas actuales
        print(f"\\n--- Pacientes en espera ---")
        print(f"Alta gravedad: {len(self.cola_alta)} pacientes")
        print(f"Media gravedad: {len(self.cola_media)} pacientes")
        print(f"Baja gravedad: {len(self.cola_baja)} pacientes")
        print("=============================\\n")
    
    def mostrar_colas(self):
        """Muestra pacientes pendientes en cada cola."""
        print("\\n=== COLAS ACTUALES ===")
        
        print("Alta gravedad:")
        for paciente in list(self.cola_alta)[:3]:
            print(f"  - {paciente.nombre} ({paciente.edad} años)")
        if len(self.cola_alta) > 3:
            print(f"  ... y {len(self.cola_alta) - 3} más")
        
        print("\\nMedia gravedad:")
        for paciente in list(self.cola_media)[:3]:
            print(f"  - {paciente.nombre} ({paciente.edad} años)")
        if len(self.cola_media) > 3:
            print(f"  ... y {len(self.cola_media) - 3} más")
        
        print("\\nBaja gravedad:")
        for paciente in list(self.cola_baja)[:3]:
            print(f"  - {paciente.nombre} ({paciente.edad} años)")
        if len(self.cola_baja) > 3:
            print(f"  ... y {len(self.cola_baja) - 3} más")
        
        print()

# Demostración completa
print("=== SISTEMA DE TRIAGE - HOSPITAL SAN JUAN ===\\n")
sistema = SistemaTriage()

# Llegada de pacientes
print("=== LLEGADA DE PACIENTES ===")
sistema.agregar_paciente("Juan Pérez", 45, "alta")      # Accidente
sistema.agregar_paciente("María López", 32, "media")    # Dolor moderado
sistema.agregar_paciente("Carlos Ruiz", 28, "baja")     # Consulta rutinaria
sistema.agregar_paciente("Ana García", 65, "alta")      # Problemas cardiacos
sistema.agregar_paciente("Luis Martínez", 40, "media")  # Fractura

print("\\n=== ESTADO INICIAL ===")
sistema.mostrar_colas()

print("\\n=== ATENCIÓN DE PACIENTES ===")
# Atender 3 pacientes
for i in range(3):
    paciente = sistema.atender_paciente()
    if paciente:
        print(f"Atendido: {paciente.nombre} (Gravedad: {paciente.gravedad})")

print("\\n=== ESTADO DESPUÉS DE ATENCIÓN ===")
sistema.mostrar_colas()
sistema.mostrar_estadisticas()

# Agregar más pacientes y continuar
print("\\n=== NUEVAS LLEGADAS ===")
sistema.agregar_paciente("Sofía Ramírez", 50, "alta")
sistema.agregar_paciente("Pedro Sánchez", 35, "baja")

print("\\n=== ATENCIÓN FINAL ===")
paciente = sistema.atender_paciente()
if paciente:
    print(f"Último paciente atendido: {paciente.nombre}")

print("\\n=== ESTADÍSTICAS FINALES ===")
sistema.mostrar_estadisticas()`

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