<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="5" titulo="5.2.1 Análisis de problemas de sincronización">
            <p class="text-xl text-gray-600">Identificación, diagnóstico y resolución de problemas comunes en
                programación concurrente</p>
        </HeaderTitle>

        <!-- Introducción teórica -->
        <section class="mb-12 bg-blue-50 rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Introducción al Análisis de Sincronización</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                Los problemas de sincronización en programación concurrente son errores sutiles que ocurren cuando
                múltiples hilos
                acceden a recursos compartidos sin la coordinación adecuada. Estos problemas pueden causar
                comportamientos
                inconsistentes, bloqueos y resultados incorrectos que son difíciles de reproducir y depurar.
            </p>
            <p class="text-gray-700 leading-relaxed">
                El análisis sistemático de problemas de sincronización implica identificar patrones comunes, utilizar
                herramientas
                de diagnóstico y aplicar las estrategias de resolución apropiadas. Un análisis efectivo requiere
                comprender
                tanto los síntomas como las causas subyacentes de cada tipo de problema.
            </p>
        </section>

        <!-- Conceptos clave -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Conceptos Clave del Análisis</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-blue-600 font-bold">+</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900">Condición de Carrera</h3>
                    </div>
                    <p class="text-gray-600">
                        Situación donde el resultado depende de la secuencia de ejecución no determinista de hilos
                        concurrentes
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-blue-600 font-bold">E</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900">Deadlock</h3>
                    </div>
                    <p class="text-gray-600">
                        Bloqueo mutuo donde dos o más hilos esperan indefinidamente por recursos que poseen otros hilos
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-blue-600 font-bold">X</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900">Starvation</h3>
                    </div>
                    <p class="text-gray-600">
                        Situación donde un hilo no puede progresar porque otros hilos monopolizan los recursos
                        compartidos
                    </p>
                </div>

                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-blue-600 font-bold">?</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900">Livelock</h3>
                    </div>
                    <p class="text-gray-600">
                        Situación donde hilos cambian de estado continuamente pero no progresan en su ejecución real
                    </p>
                </div>
            </div>
        </section>

        <!-- Ejemplo 1: Diagnóstico de condición de carrera -->
        <section class="mb-12">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1
                </div>
                <h2 class="text-2xl font-bold text-gray-900">Diagnóstico de Condición de Carrera</h2>
            </div>
            <p class="text-gray-700 mb-6">
                Las condiciones de carrera son difíciles de reproducir porque dependen de tiempos de ejecución
                específicos.
                Este ejemplo muestra un contador compartido sin protección y luego implementa el diagnóstico y la
                solución.
            </p>
            <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <PythonRunner :code="ejemplo1Code" />
            </div>
        </section>

        <!-- Ejemplo 2: Análisis de Deadlock -->
        <section class="mb-12">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">2
                </div>
                <h2 class="text-2xl font-bold text-gray-900">Análisis y Resolución de Deadlock</h2>
            </div>
            <p class="text-gray-700 mb-6">
                El deadlock ocurre cuando hilos se bloquean mutuamente esperando recursos. Este ejemplo demuestra un
                deadlock
                clásico y luego aplica estrategias de prevención como orden consistente de adquisición de locks.
            </p>
            <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <PythonRunner :code="ejemplo2Code" />
            </div>
        </section>

        <!-- Ejemplo 3: Detección de Starvation y Livelock -->
        <section class="mb-12">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">3
                </div>
                <h2 class="text-2xl font-bold text-gray-900">Starvation y Livelock</h2>
            </div>
            <p class="text-gray-700 mb-6">
                Starvation ocurre cuando un hilo no obtiene acceso a recursos, mientras que livelock implica actividad
                sin progreso.
                Este ejemplo muestra ambos problemas y sus soluciones usando prioridades y timeouts.
            </p>
            <div class="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <section class="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">+
                </div>
                <h2 class="text-2xl font-bold text-gray-900">Ejercicio Práctico: Sistema de Reservas de Hotel</h2>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Problema a Resolver</h3>
                <p class="text-gray-700 mb-4">
                    Un sistema de reservas de hotel tiene los siguientes problemas de sincronización:
                </p>
                <ul class="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Condición de carrera: Múltiples clientes reservan la misma habitación simultáneamente</li>
                    <li>Deadlock: El sistema se bloquea al procesar pagos y confirmaciones en orden inconsistente</li>
                    <li>Starvation: Clientes con conexiones lentas nunca consiguen reservar</li>
                    <li>Datos inconsistentes: El contador de habitaciones disponibles no se actualiza correctamente</li>
                </ul>
                <p class="text-gray-700">
                    Tu tarea es analizar el código problemático, identificar cada tipo de problema y aplicar las
                    soluciones apropiadas.
                </p>
            </div>

            <div class="space-y-4">
                <button @click="mostrarSolucion = !mostrarSolucion"
                    class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    {{ mostrarSolucion ? 'Ocultar Solucion' : 'Mostrar Solucion' }}
                </button>

                <div v-if="mostrarSolucion" class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h4 class="text-lg font-bold text-gray-900 mb-4">Solución Analítica y Técnica</h4>
                    <div class="bg-gray-900 rounded-lg overflow-hidden">
                        <PythonRunner :code="ejercicioCode" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Quiz de evaluación -->
        <QuizQuestions :preguntas="preguntas" titulo="Quiz análisis de problemas de sincronización"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/5.1.5" siguiente="/Unidad/5.2.2" textoAnterior="Anterior"
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

// Ejemplo 1: Diagnóstico de condición de carrera
const ejemplo1Code = `# Ejemplo 1: Diagnóstico y Resolución de Condición de Carrera
import threading
import time
import random

class ContadorProblematico:
    """
    Contador compartido con condición de carrera intencional
    para demostración de diagnóstico
    """
    def __init__(self):
        self.valor = 0
        # NOTA: Falta lock intencionalmente para crear condición de carrera
    
    def incrementar(self):
        """Operación no thread-safe que causa condición de carrera"""
        # Simular operación no atómica
        valor_actual = self.valor
        time.sleep(random.uniform(0.001, 0.005))  # Pequeña pausa para amplificar el problema
        self.valor = valor_actual + 1
    
    def incrementar_seguro(self, lock):
        """Versión thread-safe del incremento"""
        with lock:
            valor_actual = self.valor
            time.sleep(random.uniform(0.001, 0.005))
            self.valor = valor_actual + 1

def trabajador_problematico(contador, veces):
    """Hilo que usa la versión no segura"""
    for _ in range(veces):
        contador.incrementar()

def trabajador_seguro(contador, lock, veces):
    """Hilo que usa la versión segura"""
    for _ in range(veces):
        contador.incrementar_seguro(lock)

def diagnosticar_problema():
    """
    Función de diagnóstico que ejecuta múltiples pruebas
    para identificar condiciones de carrera
    """
    print("=" * 60)
    print("DIAGNOSTICO DE CONDICION DE CARRERA")
    print("=" * 60)
    
    # Prueba 1: Ejecución sin protección
    print("\\nPrueba 1: Ejecución sin sincronización")
    contador1 = ContadorProblematico()
    hilos = []
    
    for i in range(5):
        hilo = threading.Thread(target=trabajador_problematico, args=(contador1, 100))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"Valor esperado: 500")
    print(f"Valor obtenido: {contador1.valor}")
    print(f"Problema detectado: {contador1.valor != 500}")
    
    if contador1.valor != 500:
        print(f"  - Pérdida de incrementos: {500 - contador1.valor}")
        print(f"  - Causa probable: Operación no atómica sin protección")
    
    # Prueba 2: Ejecución con protección
    print("\\nPrueba 2: Ejecución con sincronización")
    contador2 = ContadorProblematico()
    lock = threading.Lock()
    hilos = []
    
    for i in range(5):
        hilo = threading.Thread(target=trabajador_seguro, args=(contador2, lock, 100))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"Valor esperado: 500")
    print(f"Valor obtenido: {contador2.valor}")
    print(f"Problema detectado: {contador2.valor != 500}")
    
    if contador2.valor == 500:
        print("  - Solucion efectiva: Uso de Lock para proteger operación crítica")
    
    # Análisis de síntomas
    print("\\n" + "=" * 60)
    print("ANALISIS DE SINTOMAS:")
    print("  - Resultados inconsistentes entre ejecuciones")
    print("  - Valor final menor al esperado (incrementos perdidos)")
    print("  - El problema se manifiesta intermitentemente")
    print("  - Se agrava con mayor número de hilos")
    print("\\nSOLUCIONES RECOMENDADAS:")
    print("  1. Usar objetos Lock para operaciones críticas")
    print("  2. Usar RLock si se necesita reentrancia")
    print("  3. Considerar objetos thread-safe como Queue")
    print("  4. Minimizar el tiempo en secciones críticas")
    print("=" * 60)

if __name__ == "__main__":
    diagnosticar_problema()`

// Ejemplo 2: Análisis de Deadlock
const ejemplo2Code = `# Ejemplo 2: Análisis y Prevención de Deadlock
import threading
import time

class SistemaRecursos:
    """
    Sistema que demuestra deadlock clásico por adquisición
    de recursos en orden inconsistente
    """
    def __init__(self):
        self.recurso_a = threading.Lock()
        self.recurso_b = threading.Lock()
        self.contador_deadlocks = 0
    
    def proceso_1_problematico(self):
        """Proceso que adquiere recursos en orden A -> B"""
        nombre = threading.current_thread().name
        
        print(f"{nombre}: Solicitando recurso A")
        self.recurso_a.acquire()
        print(f"{nombre}: Recurso A adquirido")
        
        time.sleep(0.1)  # Simular procesamiento
        
        print(f"{nombre}: Solicitando recurso B")
        self.recurso_b.acquire()
        print(f"{nombre}: Recurso B adquirido")
        
        # Simular trabajo
        time.sleep(0.1)
        print(f"{nombre}: Trabajo completado")
        
        self.recurso_b.release()
        self.recurso_a.release()
    
    def proceso_2_problematico(self):
        """Proceso que adquiere recursos en orden B -> A (CAUSA DEADLOCK)"""
        nombre = threading.current_thread().name
        
        print(f"{nombre}: Solicitando recurso B")
        self.recurso_b.acquire()
        print(f"{nombre}: Recurso B adquirido")
        
        time.sleep(0.1)  # Simular procesamiento
        
        print(f"{nombre}: Solicitando recurso A")
        self.recurso_a.acquire()
        print(f"{nombre}: Recurso A adquirido")
        
        # Simular trabajo
        time.sleep(0.1)
        print(f"{nombre}: Trabajo completado")
        
        self.recurso_a.release()
        self.recurso_b.release()
    
    def proceso_1_solucion(self):
        """Solución: Adquirir siempre en orden A -> B"""
        nombre = threading.current_thread().name
        
        print(f"{nombre} [SOLUCION]: Solicitando recurso A")
        self.recurso_a.acquire()
        print(f"{nombre} [SOLUCION]: Recurso A adquirido")
        
        time.sleep(0.1)
        
        print(f"{nombre} [SOLUCION]: Solicitando recurso B")
        self.recurso_b.acquire()
        print(f"{nombre} [SOLUCION]: Recurso B adquirido")
        
        time.sleep(0.1)
        print(f"{nombre} [SOLUCION]: Trabajo completado")
        
        self.recurso_b.release()
        self.recurso_a.release()
    
    def proceso_2_solucion(self):
        """Solución: Adquirir siempre en orden A -> B (consistente)"""
        nombre = threading.current_thread().name
        
        print(f"{nombre} [SOLUCION]: Solicitando recurso A")
        self.recurso_a.acquire()
        print(f"{nombre} [SOLUCION]: Recurso A adquirido")
        
        time.sleep(0.1)
        
        print(f"{nombre} [SOLUCION]: Solicitando recurso B")
        self.recurso_b.acquire()
        print(f"{nombre} [SOLUCION]: Recurso B adquirido")
        
        time.sleep(0.1)
        print(f"{nombre} [SOLUCION]: Trabajo completado")
        
        self.recurso_b.release()
        self.recurso_a.release()

def demostrar_deadlock():
    """
    Demostración de deadlock y análisis de prevención
    """
    print("=" * 60)
    print("DEMOSTRACION DE DEADLOCK Y ANALISIS")
    print("=" * 60)
    
    # Prueba 1: Crear deadlock intencional
    print("\\nPrueba 1: Creando deadlock intencional")
    print("-" * 40)
    
    sistema = SistemaRecursos()
    
    hilo1 = threading.Thread(
        target=sistema.proceso_1_problematico,
        name="Hilo-1"
    )
    
    hilo2 = threading.Thread(
        target=sistema.proceso_2_problematico,
        name="Hilo-2"
    )
    
    hilo1.start()
    hilo2.start()
    
    # Esperar con timeout para detectar deadlock
    hilo1.join(timeout=2)
    hilo2.join(timeout=2)
    
    if hilo1.is_alive() or hilo2.is_alive():
        print("\\nDEADLOCK DETECTADO: Hilos bloqueados indefinidamente")
        print("Causa: Orden inconsistente de adquisición de recursos")
        print("Hilo 1: A -> B")
        print("Hilo 2: B -> A")
        
        # Terminar hilos para continuar
        print("Terminando hilos bloqueados...")
    else:
        print("\\nLos hilos completaron sin deadlock (suerte en timing)")
    
    # Prueba 2: Solución con orden consistente
    print("\\n" + "=" * 60)
    print("Prueba 2: Solución con orden consistente")
    print("-" * 40)
    
    sistema2 = SistemaRecursos()
    
    hilo3 = threading.Thread(
        target=sistema2.proceso_1_solucion,
        name="Hilo-3-SOL"
    )
    
    hilo4 = threading.Thread(
        target=sistema2.proceso_2_solucion,
        name="Hilo-4-SOL"
    )
    
    hilo3.start()
    hilo4.start()
    
    hilo3.join()
    hilo4.join()
    
    print("\\nSIN DEADLOCK: Todos los hilos completaron correctamente")
    
    # Análisis de prevención
    print("\\n" + "=" * 60)
    print("ESTRATEGIAS DE PREVENCION DE DEADLOCK:")
    print("1. Orden consistente de adquisición de recursos")
    print("2. Timeouts en adquisición de locks (acquire(timeout=X))")
    print("3. Usar RLock para reentrancia controlada")
    print("4. Detección y recuperación mediante watchdogs")
    print("5. Uso de context managers (with lock:) para liberación automática")
    print("=" * 60)

if __name__ == "__main__":
    demostrar_deadlock()`

// Ejemplo 3: Starvation y Livelock
const ejemplo3Code = `# Ejemplo 3: Diagnóstico de Starvation y Livelock
import threading
import time
import queue

class SistemaPrioridades:
    """
    Sistema que demuestra starvation y livelock,
    y sus respectivas soluciones
    """
    def __init__(self):
        self.recurso = threading.Lock()
        self.contador_accesos = {}
        self.cola_prioridad = queue.PriorityQueue()
    
    def trabajador_starvation(self, nombre, prioridad):
        """Trabajador que sufre de starvation"""
        intentos = 0
        
        while intentos < 5:
            intentos += 1
            print(f"{nombre} [Intento {intentos}]: Intentando adquirir recurso")
            
            # Intento simple sin prioridad
            adquirido = self.recurso.acquire(blocking=False)
            
            if adquirido:
                print(f"{nombre}: Recurso adquirido después de {intentos} intentos")
                time.sleep(0.5)  # Mantener recurso
                self.recurso.release()
                print(f"{nombre}: Recurso liberado")
                return
            
            time.sleep(prioridad)  # Trabajadores con mayor sleep tienen menos prioridad
        
        print(f"{nombre}: STARVATION - Nunca pudo acceder al recurso")
    
    def trabajador_solucion(self, nombre, prioridad):
        """Trabajador con solución usando cola de prioridades"""
        # Agregar a cola de prioridades
        self.cola_prioridad.put((prioridad, nombre))
        
        # Esperar turno basado en prioridad
        while True:
            # Verificar si es nuestro turno
            if not self.cola_prioridad.empty():
                prox_prioridad, prox_nombre = self.cola_prioridad.queue[0]
                
                if prox_nombre == nombre:
                    # Nuestro turno
                    self.cola_prioridad.get()  # Remover de cola
                    
                    with self.recurso:
                        print(f"{nombre} [SOLUCION]: Acceso garantizado con prioridad {prioridad}")
                        time.sleep(0.3)
                        print(f"{nombre} [SOLUCION]: Trabajo completado")
                    break
            
            time.sleep(0.1)  # Polling controlado

def demostrar_livelock():
    """
    Demostración de livelock: hilos responden pero no progresan
    """
    print("\\n" + "=" * 60)
    print("DEMOSTRACION DE LIVELOCK")
    print("=" * 60)
    
    recurso1 = threading.Lock()
    recurso2 = threading.Lock()
    
    def proceso_a():
        """Proceso que causa livelock"""
        nombre = "Proceso-A"
        intentos = 0
        
        while intentos < 10:
            intentos += 1
            
            if recurso1.acquire(blocking=False):
                print(f"{nombre}: Adquirido recurso 1 (intento {intentos})")
                time.sleep(0.1)
                
                if recurso2.acquire(blocking=False):
                    print(f"{nombre}: Adquirido recurso 2 - TRABAJO COMPLETADO")
                    recurso2.release()
                    recurso1.release()
                    return
                else:
                    print(f"{nombre}: No pudo adquirir recurso 2, liberando 1")
                    recurso1.release()
                    time.sleep(0.1)  # Backoff
            else:
                time.sleep(0.1)
        
        print(f"{nombre}: LIVELOCK - Mucha actividad pero sin progreso")
    
    def proceso_b():
        """Otro proceso que causa livelock"""
        nombre = "Proceso-B"
        intentos = 0
        
        while intentos < 10:
            intentos += 1
            
            if recurso2.acquire(blocking=False):
                print(f"{nombre}: Adquirido recurso 2 (intento {intentos})")
                time.sleep(0.1)
                
                if recurso1.acquire(blocking=False):
                    print(f"{nombre}: Adquirido recurso 1 - TRABAJO COMPLETADO")
                    recurso1.release()
                    recurso2.release()
                    return
                else:
                    print(f"{nombre}: No pudo adquirir recurso 1, liberando 2")
                    recurso2.release()
                    time.sleep(0.1)  # Backoff
            else:
                time.sleep(0.1)
        
        print(f"{nombre}: LIVELOCK - Mucha actividad pero sin progreso")
    
    # Solución: Usar timeout y backoff aleatorio
    def proceso_a_solucion():
        nombre = "Proceso-A-SOL"
        
        for intento in range(3):
            print(f"{nombre}: Intento {intento + 1}")
            
            # Intentar adquirir ambos recursos con timeout
            if recurso1.acquire(timeout=0.5):
                try:
                    if recurso2.acquire(timeout=0.5):
                        try:
                            print(f"{nombre}: Exito - Trabajo completado")
                            return
                        finally:
                            recurso2.release()
                finally:
                    recurso1.release()
            
            # Backoff aleatorio para evitar sincronización
            time.sleep(random.uniform(0.1, 0.5))
        
        print(f"{nombre}: Fallo después de múltiples intentos (no livelock)")
    
    print("\\nEjecutando procesos con livelock...")
    hilo_a = threading.Thread(target=proceso_a)
    hilo_b = threading.Thread(target=proceso_b)
    
    hilo_a.start()
    hilo_b.start()
    
    hilo_a.join(timeout=3)
    hilo_b.join(timeout=3)
    
    print("\\nEjecutando solución...")
    hilo_a_sol = threading.Thread(target=proceso_a_solucion)
    hilo_b_sol = threading.Thread(target=proceso_a_solucion)  # Misma lógica para B
    
    hilo_a_sol.start()
    hilo_b_sol.start()
    
    hilo_a_sol.join()
    hilo_b_sol.join()
    
    print("\\n" + "=" * 60)
    print("DIAGNOSTICO:")
    print("STARVATION: Hilo no obtiene acceso a recursos necesarios")
    print("LIVELOCK: Hilos activos pero sin progreso real")
    print("\\nSOLUCIONES:")
    print("1. Sistemas de prioridad justos")
    print("2. Timeouts en operaciones bloqueantes")
    print("3. Backoff aleatorio para desincronizar")
    print("4. Colas de prioridad para acceso ordenado")
    print("=" * 60)

if __name__ == "__main__":
    import random
    
    print("=" * 60)
    print("DIAGNOSTICO DE STARVATION")
    print("=" * 60)
    
    sistema = SistemaPrioridades()
    
    # Crear trabajadores con diferentes prioridades (tiempos de sleep)
    hilos = []
    for i in range(3):
        prioridad = (i + 1) * 0.2  # Mayor i = mayor sleep = menor prioridad
        hilo = threading.Thread(
            target=sistema.trabajador_starvation,
            args=(f"Trabajador-{i+1}", prioridad),
            daemon=True
        )
        hilos.append(hilo)
    
    for hilo in hilos:
        hilo.start()
    
    time.sleep(3)
    
    print("\\nProbando solución con cola de prioridades...")
    sistema2 = SistemaPrioridades()
    
    hilos_sol = []
    for i in range(3):
        prioridad = i  # Menor número = mayor prioridad
        hilo = threading.Thread(
            target=sistema2.trabajador_solucion,
            args=(f"Trabajador-SOL-{i+1}", prioridad),
            daemon=True
        )
        hilos_sol.append(hilo)
    
    for hilo in hilos_sol:
        hilo.start()
    
    time.sleep(2)
    
    demostrar_livelock()`

// Ejercicio práctico
const ejercicioCode = `# Ejercicio: Análisis y Solución de Sistema de Reservas de Hotel
import threading
import time
import random
from queue import Queue

class SistemaReservasAnalizado:
    """
    Sistema de reservas con problemas de sincronización identificados
    y sus respectivas soluciones implementadas
    """
    def __init__(self, total_habitaciones=10):
        # PROBLEMA 1: Contador no protegido (condición de carrera)
        self.habitaciones_disponibles = total_habitaciones
        
        # PROBLEMA 2: Locks para deadlock potencial
        self.lock_reserva = threading.Lock()
        self.lock_pago = threading.Lock()
        
        # PROBLEMA 3: Sin mecanismo contra starvation
        self.reservas_exitosas = 0
        self.reservas_fallidas = 0
        
        # SOLUCIONES IMPLEMENTADAS
        self.lock_contador = threading.Lock()  # Para proteger contador
        self.cola_reservas = Queue()  # Para manejo ordenado
        self.timeout_reserva = 2.0  # Para prevenir deadlock
        
        # Para análisis
        self.log_problemas = []
    
    def reservar_problematico(self, cliente_id):
        """
        Versión problemática con múltiples issues de sincronización
        """
        # CONDICIÓN DE CARRERA: Lectura no protegida
        if self.habitaciones_disponibles > 0:
            time.sleep(random.uniform(0.01, 0.05))  # Amplificar race condition
            
            # DEADLOCK POTENCIAL: Orden inconsistente de locks
            if cliente_id % 2 == 0:
                self.lock_reserva.acquire()
                self.lock_pago.acquire()
            else:
                self.lock_pago.acquire()
                self.lock_reserva.acquire()
            
            # STARVATION: Proceso lento puede bloquearse aquí
            time.sleep(random.uniform(0.1, 1.0))  # Simular procesamiento lento
            
            # Actualización no atómica
            self.habitaciones_disponibles -= 1
            
            if cliente_id % 2 == 0:
                self.lock_pago.release()
                self.lock_reserva.release()
            else:
                self.lock_reserva.release()
                self.lock_pago.release()
            
            self.reservas_exitosas += 1
            return True
        
        self.reservas_fallidas += 1
        return False
    
    def reservar_solucion(self, cliente_id):
        """
        Versión corregida con todas las soluciones implementadas
        """
        print(f"Cliente {cliente_id}: Intentando reserva...")
        
        # SOLUCIÓN 1: Proteger contador con lock
        with self.lock_contador:
            if self.habitaciones_disponibles <= 0:
                print(f"Cliente {cliente_id}: No hay habitaciones disponibles")
                with self.lock_contador:
                    self.reservas_fallidas += 1
                return False
        
        # SOLUCIÓN 2: Prevenir deadlock con orden consistente y timeout
        print(f"Cliente {cliente_id}: Procesando reserva...")
        
        # Adquirir locks en orden consistente
        locks_adquiridos = []
        
        try:
            # Intentar adquirir lock_reserva con timeout
            if self.lock_reserva.acquire(timeout=self.timeout_reserva):
                locks_adquiridos.append(self.lock_reserva)
                print(f"Cliente {cliente_id}: Lock reserva adquirido")
                
                # Intentar adquirir lock_pago con timeout
                if self.lock_pago.acquire(timeout=self.timeout_reserva):
                    locks_adquiridos.append(self.lock_pago)
                    print(f"Cliente {cliente_id}: Lock pago adquirido")
                    
                    # Simular procesamiento de reserva
                    time.sleep(random.uniform(0.05, 0.2))  # Tiempo reducido
                    
                    # Actualización atómica protegida
                    with self.lock_contador:
                        if self.habitaciones_disponibles > 0:
                            self.habitaciones_disponibles -= 1
                            self.reservas_exitosas += 1
                            print(f"Cliente {cliente_id}: Reserva EXITOSA")
                            print(f"  Habitaciones restantes: {self.habitaciones_disponibles}")
                            return True
                        else:
                            print(f"Cliente {cliente_id}: Habitación ya no disponible")
                            self.reservas_fallidas += 1
                            return False
                else:
                    print(f"Cliente {cliente_id}: Timeout en lock de pago")
                    self.log_problemas.append(f"Cliente {cliente_id}: Timeout pago")
                    return False
            else:
                print(f"Cliente {cliente_id}: Timeout en lock de reserva")
                self.log_problemas.append(f"Cliente {cliente_id}: Timeout reserva")
                return False
                
        finally:
            # SOLUCIÓN 3: Siempre liberar locks en orden inverso
            for lock in reversed(locks_adquiridos):
                lock.release()
                print(f"Cliente {cliente_id}: Lock liberado")
    
    def cliente_con_starvation(self, cliente_id, velocidad):
        """
        Cliente que podría sufrir starvation en sistema problemático
        """
        print(f"Cliente {cliente_id} [LENTO]: Iniciando reserva...")
        time.sleep(velocidad)  # Cliente lento
        
        # En sistema problemático, este cliente casi nunca tendría éxito
        exito = self.reservar_solucion(cliente_id)
        
        if exito:
            print(f"Cliente {cliente_id} [LENTO]: Reserva exitosa a pesar de lentitud")
        else:
            print(f"Cliente {cliente_id} [LENTO]: Reserva fallida")
        
        return exito
    
    def ejecutar_pruebas(self, num_clientes=15):
        """
        Ejecutar pruebas comparativas del sistema
        """
        print("=" * 70)
        print("ANALISIS DE SISTEMA DE RESERVAS DE HOTEL")
        print("=" * 70)
        
        # Reiniciar contadores
        self.habitaciones_disponibles = 5  # Limitado para pruebas
        self.reservas_exitosas = 0
        self.reservas_fallidas = 0
        self.log_problemas = []
        
        print(f"\\nConfiguración inicial: {self.habitaciones_disponibles} habitaciones disponibles")
        print(f"Clientes simulados: {num_clientes}")
        print("-" * 70)
        
        # Crear clientes con diferentes características
        hilos = []
        
        for i in range(num_clientes):
            # Algunos clientes rápidos, algunos lentos
            if i % 3 == 0:  # Cada tercer cliente es lento
                hilo = threading.Thread(
                    target=self.cliente_con_starvation,
                    args=(i, random.uniform(0.3, 0.8)),
                    name=f"Cliente-Lento-{i}"
                )
            else:
                hilo = threading.Thread(
                    target=self.reservar_solucion,
                    args=(i,),
                    name=f"Cliente-Rapido-{i}"
                )
            
            hilos.append(hilo)
        
        # Iniciar todos los hilos
        for hilo in hilos:
            hilo.start()
            time.sleep(random.uniform(0.01, 0.05))  # Espaciar inicio
        
        # Esperar a que todos terminen
        for hilo in hilos:
            hilo.join()
        
        # Mostrar resultados del análisis
        print("\\n" + "=" * 70)
        print("RESULTADOS DEL ANALISIS")
        print("=" * 70)
        
        print(f"\\nMétricas finales:")
        print(f"  Reservas exitosas: {self.reservas_exitosas}")
        print(f"  Reservas fallidas: {self.reservas_fallidas}")
        print(f"  Habitaciones disponibles restantes: {self.habitaciones_disponibles}")
        
        print(f"\\nProblemas detectados durante ejecución:")
        if self.log_problemas:
            for problema in self.log_problemas:
                print(f"  - {problema}")
        else:
            print("  No se detectaron problemas críticos de sincronización")
        
        # Verificar integridad del sistema
        total_esperado = 5
        total_actual = self.habitaciones_disponibles + self.reservas_exitosas
        
        print(f"\\nVerificación de integridad:")
        print(f"  Habitaciones iniciales: {total_esperado}")
        print(f"  Habitaciones actuales + reservas: {total_actual}")
        
        if total_esperado == total_actual:
            print(f"  INTEGRIDAD: CORRECTA - No hay pérdida ni duplicación de habitaciones")
        else:
            print(f"  INTEGRIDAD: FALLIDA - Diferencia de {abs(total_esperado - total_actual)}")
        
        print("\\n" + "=" * 70)
        print("RESUMEN DE SOLUCIONES IMPLEMENTADAS:")
        print("=" * 70)
        print("1. CONDICIÓN DE CARRERA:")
        print("   - Uso de Lock para proteger contador compartido")
        print("   - Operaciones atómicas en secciones críticas")
        
        print("\\n2. DEADLOCK:")
        print("   - Orden consistente de adquisición de recursos")
        print("   - Timeouts en operaciones bloqueantes")
        print("   - Liberación garantizada con bloques try/finally")
        
        print("\\n3. STARVATION:")
        print("   - Timeouts para evitar bloqueos indefinidos")
        print("   - Procesamiento eficiente en secciones críticas")
        print("   - Sistema justo sin priorización arbitraria")
        
        print("\\n4. DATOS INCONSISTENTES:")
        print("   - Verificación doble de disponibilidad")
        print("   - Actualización atómica de estado")
        print("   - Logging para diagnóstico de problemas")
        print("=" * 70)

if __name__ == "__main__":
    # Crear y ejecutar sistema analizado
    sistema = SistemaReservasAnalizado(total_habitaciones=5)
    sistema.ejecutar_pruebas(num_clientes=12)`

// Quiz
const preguntas = [
    {
        texto: "¿Qué es un problema de sincronización?",
        opciones: [
            { texto: "Un error por acceso concurrente no controlado a recursos compartidos", correcta: true },
            { texto: "Un fallo de compilación", correcta: false },
            { texto: "Un problema de hardware", correcta: false },
            { texto: "Un error de sintaxis", correcta: false }
        ]
    },
    {
        texto: "¿Qué problema ocurre cuando dos hilos modifican un dato al mismo tiempo?",
        opciones: [
            { texto: "Condición de carrera", correcta: true },
            { texto: "Interbloqueo", correcta: false },
            { texto: "Inanición", correcta: false },
            { texto: "Paralelismo", correcta: false }
        ]
    },
    {
        texto: "¿Cuál es una forma común de prevenir problemas de sincronización?",
        opciones: [
            { texto: "Usar semáforos o mutex", correcta: true },
            { texto: "Evitar el uso de hilos", correcta: false },
            { texto: "Incrementar la velocidad del CPU", correcta: false },
            { texto: "Duplicar variables", correcta: false }
        ]
    }
]

</script>