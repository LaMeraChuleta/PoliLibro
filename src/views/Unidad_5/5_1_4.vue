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
        <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
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
                </div>

                <!-- Solución oculta -->
                <div v-if="mostrarSolucion" class="mt-6 p-5 bg-white border border-green-200 rounded-lg">
                    <h3 class="font-bold text-green-800 mb-3">Solución:</h3>
                    <PythonRunner :code="solucionCode" />
                </div>
            </div>
        </section>

        <!-- Quiz -->
        <QuizQuestions :preguntas="preguntas" titulo="Quiz sincronización: semáforos"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/5.1.3" siguiente="/Unidad/5.1.5" textoAnterior="Anterior"
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

// Ejemplo 1: Semáforo básico
const ejemplo1Code = `import threading
import time
import random

class SemaforoSimple:
    """
    Implementación simple de un semáforo para demostración.
    En la práctica, usar threading.Semaphore.
    """
    def __init__(self, valor_inicial=1):
        self.valor = valor_inicial
        self.lock = threading.Lock()
        self.condition = threading.Condition(self.lock)
    
    def acquire(self):
        """
        Adquiere el semáforo (wait).
        Si el valor es 0, espera hasta que sea > 0.
        """
        with self.lock:
            while self.valor == 0:
                self.condition.wait()
            self.valor -= 1
    
    def release(self):
        """
        Libera el semáforo (signal).
        Incrementa el valor y notifica a los esperando.
        """
        with self.lock:
            self.valor += 1
            self.condition.notify()

def demostrar_semaforo_basico():
    """
    Demostración básica de un semáforo limitando acceso a un recurso.
    """
    print("=== SEMÁFORO BÁSICO: ACCESO A RECURSO LIMITADO ===")
    
    # Semáforo que permite máximo 3 accesos simultáneos
    semaforo = threading.Semaphore(3)
    contador_acceso = 0
    lock_contador = threading.Lock()
    
    def tarea(nombre_tarea, duracion):
        """
        Tarea que requiere acceso al recurso limitado.
        """
        nonlocal contador_acceso
        
        print(f"[{nombre_tarea}] Solicitando acceso al recurso...")
        
        # Adquirir semáforo (si hay recursos disponibles)
        semaforo.acquire()
        
        try:
            with lock_contador:
                contador_acceso += 1
            
            print(f"[{nombre_tarea}] ✓ Acceso concedido. En uso: {contador_acceso}/3")
            print(f"[{nombre_tarea}] Usando recurso por {duracion}s...")
            
            # Simular uso del recurso
            time.sleep(duracion)
            
            print(f"[{nombre_tarea}] Recurso usado. Liberando...")
        
        finally:
            # Siempre liberar el semáforo, incluso si hay error
            with lock_contador:
                contador_acceso -= 1
            semaforo.release()
            print(f"[{nombre_tarea}] ✓ Recurso liberado. En uso: {contador_acceso}/3")
    
    # Crear tareas concurrentes
    tareas = [
        ("Tarea A", 2),
        ("Tarea B", 3),
        ("Tarea C", 1),
        ("Tarea D", 2),
        ("Tarea E", 4),
        ("Tarea F", 1),
        ("Tarea G", 3),
        ("Tarea H", 2)
    ]
    
    hilos = []
    for nombre, duracion in tareas:
        hilo = threading.Thread(target=tarea, args=(nombre, duracion))
        hilos.append(hilo)
    
    # Iniciar todos los hilos
    print(f"\\nIniciando {len(tareas)} tareas concurrentes...")
    for hilo in hilos:
        hilo.start()
        time.sleep(0.1)  # Pequeño delay para ver el orden
    
    # Esperar a que terminen
    for hilo in hilos:
        hilo.join()
    
    print("\\n✓ Todas las tareas completadas.")
    print("El semáforo garantizó que nunca más de 3 tareas usaran el recurso simultáneamente.")

# Ejemplo con recursos específicos
def ejemplo_recursos_especificos():
    """
    Ejemplo con recursos identificables (no solo contador).
    """
    print("\\n=== SEMÁFORO CON RECURSOS IDENTIFICABLES ===")
    
    # 2 scanners disponibles
    semaforo_scanners = threading.Semaphore(2)
    scanners = ["Scanner-1", "Scanner-2"]
    scanners_disponibles = scanners.copy()
    lock_scanners = threading.Lock()
    
    def usar_scanner(empleado, duracion):
        """
        Un empleado usa un scanner disponible.
        """
        scanner_asignado = None
        
        print(f"[{empleado}] Esperando scanner...")
        
        # Adquirir semáforo
        semaforo_scanners.acquire()
        
        try:
            # Asignar scanner específico
            with lock_scanners:
                scanner_asignado = scanners_disponibles.pop(0)
            
            print(f"[{empleado}] ✓ Usando {scanner_asignado} por {duracion}s")
            time.sleep(duracion)
            
            print(f"[{empleado}] Terminó con {scanner_asignado}")
        
        finally:
            # Liberar scanner
            with lock_scanners:
                scanners_disponibles.append(scanner_asignado)
            semaforo_scanners.release()
            print(f"[{empleado}] ✓ Liberó {scanner_asignado}")
    
    # Empleados que necesitan scanners
    empleados = [
        ("Ana", 3),
        ("Carlos", 2),
        ("Beatriz", 4),
        ("David", 1),
        ("Elena", 2)
    ]
    
    hilos = []
    for empleado, duracion in empleados:
        hilo = threading.Thread(target=usar_scanner, args=(empleado, duracion))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print("\\n✓ Todos los empleados completaron sus escaneos.")

# Comparación semáforo vs mutex
def comparacion_semaforo_mutex():
    """
    Compara semáforo binario (valor=1) con mutex.
    """
    print("\\n=== COMPARACIÓN: SEMÁFORO BINARIO vs MUTEX ===")
    
    # Semáforo binario (valor inicial = 1)
    semaforo_binario = threading.Semaphore(1)
    
    # Mutex (Lock)
    mutex = threading.Lock()
    
    recurso_compartido = 0
    lock_mostrar = threading.Lock()
    
    def tarea_con_semaforo(nombre, incrementos):
        nonlocal recurso_compartido
        for _ in range(incrementos):
            semaforo_binario.acquire()
            try:
                temp = recurso_compartido
                time.sleep(0.001)  # Simular trabajo
                recurso_compartido = temp + 1
            finally:
                semaforo_binario.release()
        
        with lock_mostrar:
            print(f"[{nombre}] con semáforo completado")
    
    def tarea_con_mutex(nombre, incrementos):
        nonlocal recurso_compartido
        for _ in range(incrementos):
            with mutex:
                temp = recurso_compartido
                time.sleep(0.001)  # Simular trabajo
                recurso_compartido = temp + 1
        
        with lock_mostrar:
            print(f"[{nombre}] con mutex completado")
    
    # Probar ambos
    print("\\n1. Semáforo binario (valor=1):")
    recurso_compartido = 0
    hilos = []
    for i in range(5):
        hilo = threading.Thread(target=tarea_con_semaforo, args=(f"Hilo-{i}", 100))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"   Valor final: {recurso_compartido} (debería ser 500)")
    
    print("\\n2. Mutex (Lock):")
    recurso_compartido = 0
    hilos = []
    for i in range(5):
        hilo = threading.Thread(target=tarea_con_mutex, args=(f"Hilo-{i}", 100))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"   Valor final: {recurso_compartido} (debería ser 500)")
    
    print("\\n=== CONCLUSIÓN ===")
    print("Semáforo binario (valor=1) y mutex son conceptualmente similares,")
    print("pero semáforos pueden tener valores > 1 para múltiples accesos.")

# Ejecutar ejemplos
demostrar_semaforo_basico()
ejemplo_recursos_especificos()
comparacion_semaforo_mutex()`

// Ejemplo 2: Sistema de conexiones a base de datos
const ejemplo2Code = `import threading
import time
import random
from contextlib import contextmanager

class PoolConexionesBD:
    """
    Pool de conexiones a base de datos usando semáforos.
    Simula un pool limitado de conexiones para evitar sobrecarga.
    """
    
    def __init__(self, max_conexiones=5):
        self.max_conexiones = max_conexiones
        self.semaforo = threading.Semaphore(max_conexiones)
        
        # Simulación de conexiones
        self.conexiones = [f"Connection-{i}" for i in range(max_conexiones)]
        self.conexiones_disponibles = self.conexiones.copy()
        self.lock = threading.Lock()
        
        # Estadísticas
        self.estadisticas = {
            "solicitudes": 0,
            "conexiones_activas": 0,
            "tiempo_total_uso": 0,
            "esperas": 0
        }
    
    @contextmanager
    def obtener_conexion(self, cliente):
        """
        Context manager para obtener y liberar conexiones automáticamente.
        """
        conexion = None
        
        # Estadística: solicitud recibida
        with self.lock:
            self.estadisticas["solicitudes"] += 1
        
        print(f"[{cliente}] Solicitando conexión...")
        
        # Esperar por conexión disponible
        inicio_espera = time.time()
        self.semaforo.acquire()
        tiempo_espera = time.time() - inicio_espera
        
        with self.lock:
            self.estadisticas["esperas"] += tiempo_espera
        
        try:
            # Obtener conexión específica
            with self.lock:
                conexion = self.conexiones_disponibles.pop(0)
                self.estadisticas["conexiones_activas"] += 1
            
            print(f"[{cliente}] ✓ Conexión asignada: {conexion} "
                  f"(espera: {tiempo_espera:.2f}s, activas: {self.estadisticas['conexiones_activas']}/{self.max_conexiones})")
            
            # Retornar conexión para uso
            yield conexion
            
        finally:
            # Siempre liberar la conexión
            with self.lock:
                if conexion:
                    self.conexiones_disponibles.append(conexion)
                    self.estadisticas["conexiones_activas"] -= 1
            
            self.semaforo.release()
            print(f"[{cliente}] ✓ Conexión liberada: {conexion} "
                  f"(activas: {self.estadisticas['conexiones_activas']}/{self.max_conexiones})")
    
    def simular_consulta(self, conexion, duracion):
        """
        Simula una consulta a la base de datos.
        """
        time.sleep(duracion)
        return f"Resultado de {conexion} en {duracion}s"
    
    def mostrar_estadisticas(self):
        """Muestra estadísticas del pool."""
        print("\\n=== ESTADÍSTICAS DEL POOL ===")
        print(f"Conexiones máximas: {self.max_conexiones}")
        print(f"Solicitudes totales: {self.estadisticas['solicitudes']}")
        print(f"Conexiones activas actuales: {self.estadisticas['conexiones_activas']}")
        print(f"Tiempo promedio de espera: {self.estadisticas['esperas']/max(1, self.estadisticas['solicitudes']):.2f}s")
        print(f"Conexiones disponibles: {len(self.conexiones_disponibles)}")

def simulacion_servidor_web():
    """
    Simula un servidor web con múltiples clientes usando pool de conexiones.
    """
    print("=== SIMULACIÓN: SERVIDOR WEB CON POOL DE CONEXIONES ===")
    
    # Pool con 3 conexiones máximas
    pool = PoolConexionesBD(max_conexiones=3)
    
    def cliente_web(cliente_id):
        """
        Simula un cliente web realizando consultas.
        """
        # Tiempo entre solicitudes del cliente
        time.sleep(random.uniform(0, 1))
        
        # Número de consultas por cliente
        num_consultas = random.randint(1, 3)
        
        for consulta_num in range(num_consultas):
            try:
                # Obtener conexión del pool
                with pool.obtener_conexion(f"Cliente-{cliente_id}") as conexion:
                    # Simular consulta
                    duracion = random.uniform(0.5, 2.0)
                    resultado = pool.simular_consulta(conexion, duracion)
                    
                    print(f"[Cliente-{cliente_id}] Consulta {consulta_num+1}: {resultado}")
            
            except Exception as e:
                print(f"[Cliente-{cliente_id}] Error: {e}")
            
            # Esperar entre consultas del mismo cliente
            time.sleep(random.uniform(0.1, 0.5))
    
    # Crear clientes concurrentes
    num_clientes = 10
    print(f"Clientes simultáneos: {num_clientes}")
    print(f"Conexiones disponibles en pool: {pool.max_conexiones}")
    
    hilos = []
    for i in range(num_clientes):
        hilo = threading.Thread(target=cliente_web, args=(i,))
        hilos.append(hilo)
        hilo.start()
    
    # Esperar a que terminen
    for hilo in hilos:
        hilo.join()
    
    # Mostrar estadísticas finales
    pool.mostrar_estadisticas()

# Ejemplo con timeout en semáforos
def ejemplo_semaforo_timeout():
    """
    Demuestra el uso de semáforos con timeout.
    """
    print("\\n=== SEMÁFORO CON TIMEOUT ===")
    
    # Recurso muy limitado: solo 1 disponible
    semaforo = threading.Semaphore(1)
    
    def tarea_con_timeout(nombre, timeout):
        """
        Intenta adquirir el semáforo con timeout.
        """
        print(f"[{nombre}] Intentando adquirir con timeout {timeout}s...")
        
        adquirido = semaforo.acquire(timeout=timeout)
        
        if adquirido:
            try:
                print(f"[{nombre}] ✓ Adquirido. Usando recurso...")
                time.sleep(2)  # Usar recurso por 2 segundos
            finally:
                semaforo.release()
                print(f"[{nombre}] ✓ Recurso liberado")
        else:
            print(f"[{nombre}] ✗ Timeout: no se pudo adquirir el recurso a tiempo")
    
    # Crear tareas con diferentes timeouts
    hilo1 = threading.Thread(target=tarea_con_timeout, args=("Tarea-1", 1))
    hilo2 = threading.Thread(target=tarea_con_timeout, args=("Tarea-2", 3))
    hilo3 = threading.Thread(target=tarea_con_timeout, args=("Tarea-3", 5))
    
    hilo1.start()
    time.sleep(0.1)
    hilo2.start()
    time.sleep(0.1)
    hilo3.start()
    
    hilo1.join()
    hilo2.join()
    hilo3.join()

# Ejemplo con BoundedSemaphore
def ejemplo_bounded_semaphore():
    """
    Demuestra BoundedSemaphore que previene liberaciones excesivas.
    """
    print("\\n=== BOUNDED SEMAPHORE ===")
    
    # BoundedSemaphore lanza ValueError si se libera demasiadas veces
    bounded_sem = threading.BoundedSemaphore(2)
    
    def tarea_normal(nombre):
        print(f"[{nombre}] Adquiriendo...")
        bounded_sem.acquire()
        print(f"[{nombre}] Adquirido")
        time.sleep(1)
        bounded_sem.release()
        print(f"[{nombre}] Liberado")
    
    def tarea_con_error(nombre):
        print(f"[{nombre}] Adquiriendo...")
        bounded_sem.acquire()
        print(f"[{nombre}] Adquirido")
        time.sleep(1)
        
        # Liberar DOS veces (error!)
        print(f"[{nombre}] Liberando (primera vez)...")
        bounded_sem.release()
        print(f"[{nombre}] Liberando (segunda vez - ERROR)...")
        try:
            bounded_sem.release()  # Esto debería lanzar ValueError
            print(f"[{nombre}] ERROR: No se detectó la liberación excesiva")
        except ValueError as e:
            print(f"[{nombre}] ✓ Correcto: ValueError detectado: {e}")
    
    # Probar
    hilos_normales = [
        threading.Thread(target=tarea_normal, args=("Normal-1",)),
        threading.Thread(target=tarea_normal, args=("Normal-2",))
    ]
    
    for hilo in hilos_normales:
        hilo.start()
        hilo.join()
    
    # Probar con error
    hilo_error = threading.Thread(target=tarea_con_error, args=("Con-Error",))
    hilo_error.start()
    hilo_error.join()
    
    print("\\nBoundedSemaphore previene bugs de liberación múltiple.")

# Ejecutar ejemplos
simulacion_servidor_web()
ejemplo_semaforo_timeout()
ejemplo_bounded_semaphore()

print("\\n=== RESUMEN: CUÁNDO USAR SEMÁFOROS ===")
print("1. Pool de recursos (conexiones, threads, archivos)")
print("2. Control de tasa límite (rate limiting)")
print("3. Sincronización productor-consumidor")
print("4. Control de acceso a secciones críticas con múltiples permisos")
print("5. Implementación de barreras y otras primitivas de sincronización")`

// Ejemplo 3: Productor-consumidor con semáforos
const ejemplo3Code = `import threading
import time
import random
import queue

class BufferProductorConsumidor:
    """
    Implementación del patrón productor-consumidor usando semáforos.
    Productores agregan items, consumidores los procesan.
    """
    
    def __init__(self, capacidad_maxima=5):
        self.capacidad_maxima = capacidad_maxima
        
        # Buffer compartido (cola thread-safe)
        self.buffer = queue.Queue(maxsize=capacidad_maxima)
        
        # Semáforos para sincronización
        self.slots_disponibles = threading.Semaphore(capacidad_maxima)  # Slots vacíos
        self.items_disponibles = threading.Semaphore(0)                 # Items disponibles
        self.mutex = threading.Lock()                                   # Para exclusión mutua
        
        # Estadísticas
        self.estadisticas = {
            "producidos": 0,
            "consumidos": 0,
            "espera_productores": 0,
            "espera_consumidores": 0
        }
        
        # Control de ejecución
        self.finalizar = False
    
    def productor(self, id_productor, intervalo_min=0.1, intervalo_max=0.5):
        """
        Productor: genera items y los pone en el buffer.
        """
        while not self.finalizar:
            # Generar item
            item = f"Item-{id_productor}-{self.estadisticas['producidos'] + 1}"
            tiempo_produccion = random.uniform(intervalo_min, intervalo_max)
            
            print(f"[Productor-{id_productor}] Produciendo: {item} ({tiempo_produccion:.2f}s)")
            time.sleep(tiempo_produccion)
            
            # Esperar por slot disponible
            inicio_espera = time.time()
            self.slots_disponibles.acquire()
            tiempo_espera = time.time() - inicio_espera
            
            with self.mutex:
                self.estadisticas["espera_productores"] += tiempo_espera
            
            # Agregar al buffer
            try:
                self.buffer.put(item, timeout=1)
                
                with self.mutex:
                    self.estadisticas["producidos"] += 1
                
                print(f"[Productor-{id_productor}] ✓ Producido: {item} "
                      f"(buffer: {self.buffer.qsize()}/{self.capacidad_maxima})")
                
                # Señalar que hay un nuevo item disponible
                self.items_disponibles.release()
                
            except queue.Full:
                print(f"[Productor-{id_productor}] ✗ Buffer lleno, descartando: {item}")
                self.slots_disponibles.release()  # Liberar slot no usado
            
            # Pequeña pausa
            time.sleep(random.uniform(0.05, 0.2))
    
    def consumidor(self, id_consumidor, tiempo_procesamiento_min=0.3, tiempo_procesamiento_max=1.0):
        """
        Consumidor: toma items del buffer y los procesa.
        """
        while not self.finalizar:
            # Esperar por item disponible
            inicio_espera = time.time()
            self.items_disponibles.acquire()
            tiempo_espera = time.time() - inicio_espera
            
            with self.mutex:
                self.estadisticas["espera_consumidores"] += tiempo_espera
            
            # Obtener item del buffer
            try:
                item = self.buffer.get(timeout=1)
                
                # Procesar item
                tiempo_procesamiento = random.uniform(tiempo_procesamiento_min, tiempo_procesamiento_max)
                print(f"[Consumidor-{id_consumidor}] Procesando: {item} ({tiempo_procesamiento:.2f}s)")
                time.sleep(tiempo_procesamiento)
                
                with self.mutex:
                    self.estadisticas["consumidos"] += 1
                
                print(f"[Consumidor-{id_consumidor}] ✓ Procesado: {item} "
                      f"(buffer: {self.buffer.qsize()}/{self.capacidad_maxima})")
                
                # Señalar que hay un slot disponible
                self.slots_disponibles.release()
                
                # Marcar tarea como completada
                self.buffer.task_done()
                
            except queue.Empty:
                print(f"[Consumidor-{id_consumidor}] ✗ Buffer vacío inesperado")
                self.items_disponibles.release()  # Liberar señal no usada
            
            # Pequeña pausa
            time.sleep(random.uniform(0.05, 0.2))
    
    def ejecutar_sistema(self, num_productores=3, num_consumidores=2, duracion=10):
        """
        Ejecuta el sistema productor-consumidor por un tiempo determinado.
        """
        print(f"=== SISTEMA PRODUCTOR-CONSUMIDOR ===")
        print(f"Capacidad buffer: {self.capacidad_maxima}")
        print(f"Productores: {num_productores}")
        print(f"Consumidores: {num_consumidores}")
        print(f"Duración: {duracion} segundos")
        
        # Crear productores
        hilos_productores = []
        for i in range(num_productores):
            hilo = threading.Thread(target=self.productor, args=(i, 0.1, 0.3))
            hilos_productores.append(hilo)
            hilo.start()
        
        # Crear consumidores
        hilos_consumidores = []
        for i in range(num_consumidores):
            hilo = threading.Thread(target=self.consumidor, args=(i, 0.2, 0.8))
            hilos_consumidores.append(hilo)
            hilo.start()
        
        # Ejecutar por tiempo determinado
        print(f"\\nEjecutando por {duracion} segundos...")
        time.sleep(duracion)
        
        # Señalizar finalización
        self.finalizar = True
        print("\\nFinalizando sistema...")
        
        # Esperar a que terminen
        for hilo in hilos_productores:
            hilo.join(timeout=2)
        
        for hilo in hilos_consumidores:
            hilo.join(timeout=2)
        
        # Estadísticas finales
        self.mostrar_estadisticas()
    
    def mostrar_estadisticas(self):
        """Muestra estadísticas del sistema."""
        print("\\n=== ESTADÍSTICAS FINALES ===")
        print(f"Items producidos: {self.estadisticas['producidos']}")
        print(f"Items consumidos: {self.estadisticas['consumidos']}")
        print(f"Items en buffer: {self.buffer.qsize()}")
        
        if self.estadisticas['producidos'] > 0:
            print(f"Tiempo promedio espera productores: "
                  f"{self.estadisticas['espera_productores']/self.estadisticas['producidos']:.3f}s")
        
        if self.estadisticas['consumidos'] > 0:
            print(f"Tiempo promedio espera consumidores: "
                  f"{self.estadisticas['espera_consumidores']/self.estadisticas['consumidos']:.3f}s")
        
        print(f"Throughput: {self.estadisticas['consumidos']/10:.1f} items/segundo")

# Ejemplo con diferentes configuraciones
def comparar_configuraciones():
    """
    Compara diferentes configuraciones del sistema productor-consumidor.
    """
    configuraciones = [
        ("Balanceado", 3, 3, 5, 8),
        ("Muchos productores", 5, 2, 3, 8),
        ("Muchos consumidores", 2, 5, 7, 8),
        ("Buffer pequeño", 3, 3, 2, 8),
        ("Buffer grande", 3, 3, 10, 8)
    ]
    
    resultados = []
    
    for nombre, prod, cons, buf, tiempo in configuraciones:
        print(f"\\n{'='*60}")
        print(f"CONFIGURACIÓN: {nombre}")
        print(f"{'='*60}")
        
        sistema = BufferProductorConsumidor(capacidad_maxima=buf)
        sistema.ejecutar_sistema(num_productores=prod, num_consumidores=cons, duracion=tiempo)
        
        resultados.append({
            "nombre": nombre,
            "producidos": sistema.estadisticas["producidos"],
            "consumidos": sistema.estadisticas["consumidos"],
            "throughput": sistema.estadisticas["consumidos"] / tiempo
        })
    
    # Análisis comparativo
    print("\\n" + "="*60)
    print("ANÁLISIS COMPARATIVO")
    print("="*60)
    print(f"{'Configuración':<20} {'Producidos':<12} {'Consumidos':<12} {'Throughput':<12}")
    print("-"*60)
    
    for r in resultados:
        print(f"{r['nombre']:<20} {r['producidos']:<12} {r['consumidos']:<12} {r['throughput']:<12.2f}")
    
    print("-"*60)
    
    # Encontrar mejor configuración
    mejor = max(resultados, key=lambda x: x["throughput"])
    print(f"\\nMEJOR CONFIGURACIÓN: {mejor['nombre']} "
          f"(throughput: {mejor['throughput']:.2f} items/segundo)")

# Ejemplo avanzado: semáforos para rate limiting
def ejemplo_rate_limiting():
    """
    Demuestra uso de semáforos para limitar tasa de operaciones.
    """
    print("\\n=== RATE LIMITING CON SEMÁFOROS ===")
    
    class RateLimiter:
        """
        Limita operaciones a N por segundo usando semáforos.
        """
        def __init__(self, operaciones_por_segundo=5):
            self.operaciones_por_segundo = operaciones_por_segundo
            self.semaforo = threading.Semaphore(operaciones_por_segundo)
            self.timer = threading.Timer(1.0, self._reset_semaphore)
            self.timer.daemon = True
            self.timer.start()
            self.lock = threading.Lock()
            self.contador = 0
        
        def _reset_semaphore(self):
            """Resetea el semáforo cada segundo."""
            with self.lock:
                # Liberar tokens no usados
                for _ in range(self.semaforo._value):
                    try:
                        self.semaforo.release()
                    except:
                        pass
                
                # Asegurar que no exceda el límite
                while self.semaforo._value > self.operaciones_por_segundo:
                    self.semaforo.acquire()
            
            # Reiniciar timer
            self.timer = threading.Timer(1.0, self._reset_semaphore)
            self.timer.daemon = True
            self.timer.start()
        
        @contextmanager
        def operacion(self):
            """
            Context manager para operaciones con rate limiting.
            """
            self.semaforo.acquire()
            
            with self.lock:
                self.contador += 1
                contador_actual = self.contador
            
            try:
                yield contador_actual
            finally:
                pass  # No liberamos, el timer se encarga
    
    # Probar rate limiter
    limiter = RateLimiter(operaciones_por_segundo=3)
    
    def cliente_api(id_cliente):
        """Cliente que hace llamadas a API con rate limiting."""
        for i in range(5):
            try:
                with limiter.operacion() as num_op:
                    print(f"[Cliente-{id_cliente}] Llamada API {i+1} (op #{num_op})")
                    time.sleep(0.2)  # Simular llamada
            except Exception as e:
                print(f"[Cliente-{id_cliente}] Error: {e}")
            
            time.sleep(0.3)
    
    # Ejecutar clientes
    hilos = []
    for i in range(3):
        hilo = threading.Thread(target=cliente_api, args=(i,))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print("✓ Rate limiting funcionando: máximo 3 operaciones/segundo")

# Ejecutar ejemplos
print("Ejecutando sistema productor-consumidor básico...")
sistema_basico = BufferProductorConsumidor(capacidad_maxima=5)
sistema_basico.ejecutar_sistema(num_productores=2, num_consumidores=2, duracion=5)

print("\\n" + "="*60)
comparar_configuraciones()

print("\\n" + "="*60)
ejemplo_rate_limiting()

print("\\n=== PATRONES COMUNES CON SEMÁFOROS ===")
print("""
1. PRODUCTOR-CONSUMIDOR:
   • Semáforo para slots vacíos
   • Semáforo para items disponibles
   • Mutex para acceso exclusivo al buffer

2. POOL DE RECURSOS:
   • Semáforo con valor = número de recursos
   • Adquirir antes de usar, liberar después

3. RATE LIMITING:
   • Semáforo con tokens que se reponen periódicamente
   • Timer para resetear el contador

4. BARRERA:
   • Todos los hilos esperan en un punto
   • Último hilo libera a todos

5. READER-WRITER:
   • Múltiples lectores, un escritor
   • Semáforos para controlar acceso
""")`

// Ejercicio práctico - Solución
const solucionCode = `import threading
import time
import random
from contextlib import contextmanager
from dataclasses import dataclass
from enum import Enum
import statistics

class EstadoImpresora(Enum):
    DISPONIBLE = "disponible"
    EN_USO = "en_uso"
    MANTENIMIENTO = "mantenimiento"

@dataclass
class Impresora:
    """Representa una impresora en el sistema."""
    id: int
    nombre: str
    estado: EstadoImpresora
    usuario_actual: str = None
    inicio_uso: float = 0
    tiempo_total_uso: float = 0
    trabajos_completados: int = 0

class SistemaImpresion:
    """
    Sistema de gestión de impresoras con semáforos.
    Controla acceso a impresoras limitadas.
    """
    
    def __init__(self, num_impresoras=3):
        self.num_impresoras = num_impresoras
        
        # Semáforo para controlar acceso (máximo N impresoras simultáneas)
        self.semaforo_impresoras = threading.Semaphore(num_impresoras)
        
        # Lista de impresoras
        self.impresoras = [
            Impresora(i, f"Impresora-{i+1}", EstadoImpresora.DISPONIBLE)
            for i in range(num_impresoras)
        ]
        
        # Lock para acceso thread-safe a la lista
        self.lock_impresoras = threading.Lock()
        
        # Estadísticas
        self.estadisticas = {
            "solicitudes": 0,
            "solicitudes_exitosas": 0,
            "solicitudes_fallidas": 0,
            "tiempo_total_espera": 0,
            "empleados_atendidos": []
        }
        
        # Para monitoreo en tiempo real
        self.monitoreo_activo = True
        self.hilo_monitoreo = threading.Thread(target=self._monitorear_sistema, daemon=True)
        self.hilo_monitoreo.start()
    
    @contextmanager
    def usar_impresora(self, empleado, tiempo_max_espera=None):
        """
        Context manager para usar una impresora.
        Adquiere semáforo, asigna impresora, y la libera al salir.
        """
        impresora_asignada = None
        
        # Registrar solicitud
        with self.lock_impresoras:
            self.estadisticas["solicitudes"] += 1
            self.estadisticas["empleados_atendidos"].append(empleado)
        
        print(f"[{empleado}] Solicitando impresora...")
        
        # Intentar adquirir semáforo (con timeout opcional)
        inicio_espera = time.time()
        
        try:
            if tiempo_max_espera:
                adquirido = self.semaforo_impresoras.acquire(timeout=tiempo_max_espera)
                if not adquirido:
                    print(f"[{empleado}] ✗ Timeout: no hay impresoras disponibles después de {tiempo_max_espera}s")
                    with self.lock_impresoras:
                        self.estadisticas["solicitudes_fallidas"] += 1
                    yield None
                    return
            else:
                self.semaforo_impresoras.acquire()
        
        except Exception as e:
            print(f"[{empleado}] ✗ Error al adquirir semáforo: {e}")
            with self.lock_impresoras:
                self.estadisticas["solicitudes_fallidas"] += 1
            yield None
            return
        
        tiempo_espera = time.time() - inicio_espera
        
        with self.lock_impresoras:
            self.estadisticas["tiempo_total_espera"] += tiempo_espera
        
        try:
            # Asignar impresora disponible
            with self.lock_impresoras:
                for impresora in self.impresoras:
                    if impresora.estado == EstadoImpresora.DISPONIBLE:
                        impresora_asignada = impresora
                        impresora.estado = EstadoImpresora.EN_USO
                        impresora.usuario_actual = empleado
                        impresora.inicio_uso = time.time()
                        break
            
            if not impresora_asignada:
                # Esto no debería pasar si el semáforo funciona correctamente
                raise Exception("No hay impresoras disponibles a pesar del semáforo")
            
            impresoras_en_uso = sum(1 for i in self.impresoras if i.estado == EstadoImpresora.EN_USO)
            
            print(f"[{empleado}] ✓ Asignada {impresora_asignada.nombre} "
                  f"(espera: {tiempo_espera:.2f}s, en uso: {impresoras_en_uso}/{self.num_impresoras})")
            
            # Retornar impresora para uso
            yield impresora_asignada
            
        except Exception as e:
            print(f"[{empleado}] ✗ Error al asignar impresora: {e}")
            # Liberar semáforo en caso de error
            self.semaforo_impresoras.release()
            with self.lock_impresoras:
                self.estadisticas["solicitudes_fallidas"] += 1
            raise
        
        finally:
            if impresora_asignada:
                # Liberar impresora
                with self.lock_impresoras:
                    tiempo_uso = time.time() - impresora_asignada.inicio_uso
                    impresora_asignada.tiempo_total_uso += tiempo_uso
                    impresora_asignada.trabajos_completados += 1
                    impresora_asignada.estado = EstadoImpresora.DISPONIBLE
                    impresora_asignada.usuario_actual = None
                    impresora_asignada.inicio_uso = 0
                
                self.semaforo_impresoras.release()
                
                impresoras_en_uso = sum(1 for i in self.impresoras if i.estado == EstadoImpresora.EN_USO)
                print(f"[{empleado}] ✓ Liberada {impresora_asignada.nombre} "
                      f"(en uso: {impresoras_en_uso}/{self.num_impresoras})")
                
                with self.lock_impresoras:
                    self.estadisticas["solicitudes_exitosas"] += 1
    
    def _monitorear_sistema(self):
        """Hilo que monitorea el sistema en tiempo real."""
        while self.monitoreo_activo:
            time.sleep(3)  # Actualizar cada 3 segundos
            
            with self.lock_impresoras:
                impresoras_en_uso = sum(1 for i in self.impresoras if i.estado == EstadoImpresora.EN_USO)
                impresoras_disponibles = sum(1 for i in self.impresoras if i.estado == EstadoImpresora.DISPONIBLE)
                
                # Solo mostrar si hay actividad
                if impresoras_en_uso > 0:
                    print(f"\\n[MONITOR] Estado: {impresoras_en_uso} en uso, "
                          f"{impresoras_disponibles} disponibles, "
                          f"{self.semaforo_impresoras._value} permisos libres")
                    
                    # Mostrar impresoras en uso
                    for imp in self.impresoras:
                        if imp.estado == EstadoImpresora.EN_USO:
                            tiempo_uso = time.time() - imp.inicio_uso
                            print(f"  {imp.nombre}: {imp.usuario_actual} ({tiempo_uso:.1f}s)")
    
    def mostrar_estadisticas_detalladas(self):
        """Muestra estadísticas detalladas del sistema."""
        print("\\n" + "="*60)
        print("ESTADÍSTICAS DETALLADAS DEL SISTEMA")
        print("="*60)
        
        with self.lock_impresoras:
            # Estadísticas generales
            print(f"\\nESTADÍSTICAS GENERALES:")
            print(f"  Total solicitudes: {self.estadisticas['solicitudes']}")
            print(f"  Solicitudes exitosas: {self.estadisticas['solicitudes_exitosas']}")
            print(f"  Solicitudes fallidas: {self.estadisticas['solicitudes_fallidas']}")
            
            if self.estadisticas['solicitudes_exitosas'] > 0:
                tiempo_promedio_espera = (
                    self.estadisticas['tiempo_total_espera'] / 
                    self.estadisticas['solicitudes_exitosas']
                )
                print(f"  Tiempo promedio de espera: {tiempo_promedio_espera:.2f}s")
            
            empleados_unicos = set(self.estadisticas['empleados_atendidos'])
            print(f"  Empleados únicos atendidos: {len(empleados_unicos)}")
            
            # Estadísticas por impresora
            print(f"\\nESTADÍSTICAS POR IMPRESORA:")
            for imp in self.impresoras:
                print(f"  {imp.nombre}:")
                print(f"    Trabajos completados: {imp.trabajos_completados}")
                print(f"    Tiempo total de uso: {imp.tiempo_total_uso:.1f}s")
                
                if imp.trabajos_completados > 0:
                    tiempo_promedio = imp.tiempo_total_uso / imp.trabajos_completados
                    print(f"    Tiempo promedio por trabajo: {tiempo_promedio:.1f}s")
                
                porcentaje_uso = (imp.tiempo_total_uso / time.time()) * 100
                print(f"    Porcentaje de uso: {porcentaje_uso:.1f}%")
            
            # Eficiencia del sistema
            tiempo_total_posible = self.num_impresoras * time.time()
            tiempo_total_usado = sum(imp.tiempo_total_uso for imp in self.impresoras)
            eficiencia = (tiempo_total_usado / tiempo_total_posible) * 100
            
            print(f"\\nEFICIENCIA DEL SISTEMA:")
            print(f"  Tiempo total disponible: {tiempo_total_posible:.1f}s-hora")
            print(f"  Tiempo total usado: {tiempo_total_usado:.1f}s")
            print(f"  Eficiencia: {eficiencia:.1f}%")

def simulacion_oficina():
    """
    Simula una oficina con empleados usando impresoras.
    """
    print("=== SISTEMA DE GESTIÓN DE IMPRESORAS ===")
    print("Simulando oficina con 3 impresoras y 8 empleados")
    print("="*60)
    
    # Crear sistema con 3 impresoras
    sistema = SistemaImpresion(num_impresoras=3)
    
    def empleado(nombre_empleado):
        """
        Simula el comportamiento de un empleado.
        """
        # Número de trabajos que hará este empleado
        num_trabajos = random.randint(1, 4)
        
        for trabajo_num in range(1, num_trabajos + 1):
            # Tiempo entre trabajos
            time.sleep(random.uniform(1, 3))
            
            print(f"\\n[{nombre_empleado}] Preparando trabajo {trabajo_num}/{num_trabajos}...")
            
            try:
                # Usar impresora con timeout de 5 segundos
                with sistema.usar_impresora(nombre_empleado, tiempo_max_espera=5) as impresora:
                    if impresora:
                        # Simular tiempo de impresión
                        tiempo_impresion = random.uniform(2, 6)
                        print(f"[{nombre_empleado}] Imprimiendo en {impresora.nombre} "
                              f"({tiempo_impresion:.1f}s)...")
                        time.sleep(tiempo_impresion)
                        
                        # Simular posible error (10% de probabilidad)
                        if random.random() < 0.1:
                            raise Exception("Error de impresión: papel atascado")
                        
                        print(f"[{nombre_empleado}] ✓ Trabajo {trabajo_num} completado en {impresora.nombre}")
                    else:
                        print(f"[{nombre_empleado}] ✗ No se pudo obtener impresora, reintentando más tarde")
                        time.sleep(2)  # Esperar antes de reintentar
            
            except Exception as e:
                print(f"[{nombre_empleado}] ✗ Error: {e}")
                # Esperar antes de continuar
                time.sleep(1)
        
        print(f"[{nombre_empleado}] ✓ Todos los trabajos completados")
    
    # Crear empleados (hilos)
    nombres_empleados = [
        "Ana", "Carlos", "Beatriz", "David", 
        "Elena", "Fernando", "Gabriela", "Hector"
    ]
    
    hilos_empleados = []
    for nombre in nombres_empleados:
        hilo = threading.Thread(target=empleado, args=(nombre,))
        hilos_empleados.append(hilo)
        hilo.start()
    
    # Esperar a que todos los empleados terminen
    for hilo in hilos_empleados:
        hilo.join()
    
    # Detener monitoreo
    sistema.monitoreo_activo = False
    sistema.hilo_monitoreo.join(timeout=1)
    
    # Mostrar estadísticas finales
    sistema.mostrar_estadisticas_detalladas()
    
    return sistema

# Ejemplo con condiciones especiales
def ejemplo_condiciones_especiales():
    """
    Demuestra el manejo de condiciones especiales.
    """
    print("\\n" + "="*60)
    print("CONDICIONES ESPECIALES Y MANEJO DE ERRORES")
    print("="*60)
    
    sistema = SistemaImpresion(num_impresoras=2)
    
    def empleado_especial(nombre, comportamiento):
        """Empleado con comportamiento especial."""
        print(f"\\n[{nombre}] Iniciando ({comportamiento})...")
        
        try:
            with sistema.usar_impresora(nombre) as impresora:
                if impresora:
                    if comportamiento == "largo":
                        print(f"[{nombre}] Trabajo largo (10s)...")
                        time.sleep(10)
                    elif comportamiento == "error":
                        print(f"[{nombre}] Provocando error...")
                        raise Exception("Error simulado durante impresión")
                    elif comportamiento == "rapido":
                        print(f"[{nombre}] Trabajo rápido (1s)...")
                        time.sleep(1)
                    
                    print(f"[{nombre}] Completado")
        
        except Exception as e:
            print(f"[{nombre}] Error manejado: {e}")
    
    # Empleados con comportamientos diferentes
    empleados = [
        ("Empleado-Largo", "largo"),
        ("Empleado-Rapido", "rapido"),
        ("Empleado-Error", "error"),
        ("Empleado-Normal", "normal")
    ]
    
    hilos = []
    for nombre, comportamiento in empleados:
        hilo = threading.Thread(target=empleado_especial, args=(nombre, comportamiento))
        hilos.append(hilo)
        hilo.start()
    
    # Pequeño delay entre inicio de hilos
    for hilo in hilos:
        time.sleep(0.5)
    
    # Esperar
    for hilo in hilos:
        hilo.join(timeout=15)
    
    print("\\n✓ Todos los escenarios manejados correctamente")

# Comparación con y sin semáforos
def comparacion_sin_semaforo():
    """
    Muestra lo que pasaría sin semáforos (condición de carrera).
    """
    print("\\n" + "="*60)
    print("COMPARACIÓN: CON vs SIN SEMÁFORO")
    print("="*60)
    
    print("\\n1. SIN SEMÁFORO (condición de carrera):")
    
    impresoras = [f"Impresora-{i}" for i in range(3)]
    impresoras_en_uso = []
    lock = threading.Lock()
    
    def usar_sin_semaforo(empleado):
        """Intenta usar impresora sin control de concurrencia."""
        time.sleep(random.uniform(0, 0.1))
        
        with lock:
            if len(impresoras_en_uso) < 3:
                if impresoras:
                    impresora = impresoras.pop(0)
                    impresoras_en_uso.append(impresora)
                    print(f"[{empleado}] Usando {impresora} (en uso: {len(impresoras_en_uso)})")
                    return impresora
        
        print(f"[{empleado}] ✗ No hay impresoras disponibles")
        return None
    
    # Probar con muchos empleados simultáneos
    hilos = []
    for i in range(10):
        hilo = threading.Thread(target=lambda idx=i: usar_sin_semaforo(f"Emp-{idx}"))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print(f"\\nProblema: Podrían asignarse más de 3 impresoras por condiciones de carrera")
    
    print("\\n2. CON SEMÁFORO (control correcto):")
    
    sistema = SistemaImpresion(num_impresoras=3)
    
    def usar_con_semaforo(empleado):
        """Usa impresora con control de semáforo."""
        with sistema.usar_impresora(empleado, tiempo_max_espera=1) as impresora:
            if impresora:
                time.sleep(0.5)
    
    hilos = []
    for i in range(10):
        hilo = threading.Thread(target=lambda idx=i: usar_con_semaforo(f"Emp-{idx}"))
        hilos.append(hilo)
        hilo.start()
    
    for hilo in hilos:
        hilo.join()
    
    print("\\n✓ Semáforo garantiza que nunca más de 3 impresoras estén en uso")

# Ejecutar simulación completa
sistema = simulacion_oficina()
ejemplo_condiciones_especiales()
comparacion_sin_semaforo()

print("\\n" + "="*60)
print("CONCLUSIONES Y MEJORES PRÁCTICAS")
print("="*60)
print("""
BENEFICIOS DE USAR SEMÁFOROS:
1. Control preciso de recursos limitados
2. Prevención de condiciones de carrera
3. Mejor utilización de recursos
4. Timeout y manejo de errores integrado

MEJORES PRÁCTICAS:
1. Siempre usar context managers (with) para garantizar liberación
2. Implementar timeout para evitar deadlocks
3. Llevar estadísticas para monitorear el sistema
4. Usar BoundedSemaphore si hay riesgo de liberaciones múltiples
5. Considerar prioridades si algunos trabajos son más importantes

CASOS DE USO TÍPICOS:
• Pool de conexiones a base de datos
• Control de impresoras/dispositivos compartidos
• Limitación de tasa (rate limiting)
• Control de acceso a APIs externas
• Gestión de threads en pool
""")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

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