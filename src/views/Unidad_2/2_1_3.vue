<template>
  <div class="container mx-auto px-4 py-6">

    <!-- Cabecera -->
    <HeaderTitle numero="2" titulo="2.1.3 Ejemplo de aplicación"></HeaderTitle>

    <!-- Explicación Teórica -->
    <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">i</span>
        Aplicaciones Prácticas de las Pilas
      </h2>
      <div class="text-gray-700 leading-relaxed space-y-3">
        <p>
          Las pilas no son solo una estructura teórica; tienen aplicaciones concretas en muchos
          sistemas que usamos a diario. Desde el navegador web hasta los editores de texto,
          las pilas trabajan detrás de escena para hacer posible funcionalidades esenciales.
        </p>
        <p>
          En este capítulo exploraremos ejemplos reales donde las pilas resuelven problemas
          específicos de manera eficiente y elegante, demostrando por qué son fundamentales
          en ciencias de la computación.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Importante:</strong> Cada aplicación aprovecha el principio LIFO de forma
          creativa para resolver problemas específicos del dominio.
        </div>
      </div>
    </section>

    <!-- Conceptos Clave -->
    <section class="bg-white rounded-xl shadow-lg p-6 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
        Aplicaciones Clave
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">+</span>
            <h3 class="font-bold text-gray-800">Navegación Web</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Historial de páginas visitadas. Botones "Atrás" y "Adelante" funcionan con pilas.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">X</span>
            <h3 class="font-bold text-gray-800">Editores de Texto</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Funciones Deshacer/Rehacer almacenan estados anteriores en pilas.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">E</span>
            <h3 class="font-bold text-gray-800">Llamadas a Función</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Pila de ejecución para gestionar llamadas y retornos en programas.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">?</span>
            <h3 class="font-bold text-gray-800">Algoritmos de Grafos</h3>
          </div>
          <p class="text-gray-600 text-sm">
            DFS (Depth-First Search) utiliza pilas para explorar nodos.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplo 1: Editor de Texto con Deshacer/Rehacer -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 1: Editor de Texto Completo con Deshacer/Rehacer
      </h2>
      <p class="text-gray-700 mb-4">
        Implementación de un editor de texto real con funciones avanzadas de deshacer/rehacer
        que permiten navegar por el historial de cambios de manera ilimitada.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo1Code" />
      </div>
    </section>

    <!-- Ejemplo 2: Navegador Web Avanzado -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 2: Navegador Web con Historial y Marcadores
      </h2>
      <p class="text-gray-700 mb-4">
        Simulación completa de un navegador web que incluye historial de navegación,
        funcionalidad de marcadores y navegación por pestañas, todo implementado con pilas.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo2Code" />
      </div>
    </section>

    <!-- Ejemplo 3: Sistema de Archivos con Navegación -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 3: Explorador de Archivos con Historial de Navegación
      </h2>
      <p class="text-gray-700 mb-4">
        Simulador de explorador de archivos que permite navegar entre directorios
        manteniendo un historial de carpetas visitadas, similar al explorador de Windows o Finder.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">
          Ejercicio Práctico: Calculadora Científica con Historial
        </h2>
        <button @click="mostrarSolucion = !mostrarSolucion"
          class="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1 rounded">
          {{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} Solución
        </button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p class="text-gray-700 mb-3">
          <strong>Problema:</strong> Implementa una calculadora científica que mantenga un historial
          de todas las operaciones realizadas, permitiendo navegar por ellas y reutilizar resultados anteriores.
        </p>

        <div class="text-sm text-gray-600 space-y-2">
          <p><strong>Requisitos:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Realizar operaciones básicas (+, -, *, /) y científicas (^, sqrt, sin, cos)</li>
            <li>Almacenar cada operación en un historial (pila de operaciones)</li>
            <li>Permitir navegar hacia atrás y adelante en el historial</li>
            <li>Reutilizar resultados anteriores en nuevas operaciones</li>
            <li>Mostrar el historial completo de operaciones</li>
            <li>Implementar funciones deshacer/rehacer para operaciones</li>
          </ul>
        </div>
      </div>

      <!-- Solución -->
      <div v-if="mostrarSolucion" class="space-y-4">
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="font-bold text-green-800 mb-2">Solución Propuesta</h3>
          <pre class="text-sm text-gray-800 font-mono overflow-x-auto whitespace-pre-wrap">{{ ejercicioSolucion }}</pre>
        </div>
        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 class="font-bold text-green-800 mb-2">Probar Solución</h3>
          <div class="rounded-lg overflow-hidden border border-gray-300">
            <PythonRunner :code="ejercicioSolucion" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz ejemplo de aplicación"></QuizQuestions>

    <!-- Navegación -->
    <footer class="pt-8 border-t border-gray-300">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button @click="navegarAnterior"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto">
          Anterior: 2.1.2 Operaciones
        </button>
        <div class="text-center text-sm text-gray-500">
          Capítulo 2.1 • Pilas - Ejemplo de aplicación
        </div>
        <button @click="navegarSiguiente"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium w-full sm:w-auto">
          Siguiente: 2.2 Colas
        </button>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Estado para mostrar solución
const mostrarSolucion = ref(false)

// Ejemplos de código Python
const ejemplo1Code = `# Editor de Texto Avanzado con Deshacer/Rehacer Ilimitado
class EditorTextoAvanzado:
    def __init__(self):
        """Inicializa un editor de texto con historial ilimitado"""
        self.texto_actual = ""
        self.pila_deshacer = []  # Historial de estados anteriores
        self.pila_rehacer = []   # Historial de estados para rehacer
        self.modo_insercion = True  # True para insertar, False para sobrescribir
    
    def escribir(self, texto_nuevo, modo='insertar'):
        """
        Escribe texto en el editor.
        
        Args:
            texto_nuevo (str): Texto a escribir
            modo (str): 'insertar' o 'sobrescribir'
        """
        # Guardar estado actual antes de modificar
        if self.texto_actual != "":
            self.pila_deshacer.append({
                'texto': self.texto_actual,
                'posicion': len(self.texto_actual),
                'modo': self.modo_insercion
            })
        
        # Limpiar pila rehacer (nueva acción)
        self.pila_rehacer.clear()
        
        # Aplicar el modo de escritura
        if modo == 'insertar':
            self.texto_actual += texto_nuevo
        elif modo == 'sobrescribir':
            self.texto_actual = texto_nuevo
        
        self.modo_insercion = (modo == 'insertar')
        
        print(f"Texto escrito ({modo}): '{texto_nuevo}'")
        print(f"Texto actual: '{self.texto_actual}'")
    
    def eliminar(self, caracteres=1):
        """Elimina caracteres del final del texto"""
        if self.texto_actual:
            # Guardar estado actual
            self.pila_deshacer.append({
                'texto': self.texto_actual,
                'posicion': len(self.texto_actual),
                'accion': 'eliminar'
            })
            
            # Limpiar pila rehacer
            self.pila_rehacer.clear()
            
            # Eliminar caracteres
            texto_eliminado = self.texto_actual[-caracteres:]
            self.texto_actual = self.texto_actual[:-caracteres]
            
            print(f"Eliminados {caracteres} caracteres: '{texto_eliminado}'")
            print(f"Texto actual: '{self.texto_actual}'")
    
    def deshacer(self):
        """Deshace la última acción"""
        if self.pila_deshacer:
            # Mover estado actual a rehacer
            self.pila_rehacer.append({
                'texto': self.texto_actual,
                'posicion': len(self.texto_actual),
                'modo': self.modo_insercion
            })
            
            # Restaurar estado anterior
            estado_anterior = self.pila_deshacer.pop()
            self.texto_actual = estado_anterior['texto']
            
            if 'modo' in estado_anterior:
                self.modo_insercion = estado_anterior['modo']
            
            print(f"Deshacer realizado")
            print(f"Texto restaurado: '{self.texto_actual}'")
        else:
            print("No hay acciones para deshacer")
    
    def rehacer(self):
        """Rehace la última acción deshecha"""
        if self.pila_rehacer:
            # Mover estado actual a deshacer
            self.pila_deshacer.append({
                'texto': self.texto_actual,
                'posicion': len(self.texto_actual),
                'modo': self.modo_insercion
            })
            
            # Restaurar estado rehacer
            estado_rehacer = self.pila_rehacer.pop()
            self.texto_actual = estado_rehacer['texto']
            
            if 'modo' in estado_rehacer:
                self.modo_insercion = estado_rehacer['modo']
            
            print(f"Rehacer realizado")
            print(f"Texto restaurado: '{self.texto_actual}'")
        else:
            print("No hay acciones para rehacer")
    
    def buscar_reemplazar(self, buscar, reemplazar):
        """Busca y reemplaza texto"""
        if buscar in self.texto_actual:
            # Guardar estado actual
            self.pila_deshacer.append({
                'texto': self.texto_actual,
                'posicion': len(self.texto_actual),
                'accion': 'buscar_reemplazar'
            })
            
            # Limpiar pila rehacer
            self.pila_rehacer.clear()
            
            # Realizar reemplazo
            self.texto_actual = self.texto_actual.replace(buscar, reemplazar)
            
            print(f"Reemplazado '{buscar}' por '{reemplazar}'")
            print(f"Texto actual: '{self.texto_actual}'")
    
    def mostrar_estado(self):
        """Muestra el estado completo del editor"""
        print("\\n--- ESTADO DEL EDITOR ---")
        print(f"Texto actual ({len(self.texto_actual)} caracteres): '{self.texto_actual}'")
        print(f"Modo: {'INSERCION' if self.modo_insercion else 'SOBREESCRITURA'}")
        print(f"Historial deshacer: {len(self.pila_deshacer)} estados")
        print(f"Historial rehacer: {len(self.pila_rehacer)} estados")
        print("-" * 40)
    
    def mostrar_historial_completo(self):
        """Muestra todo el historial de estados"""
        print("\\n=== HISTORIAL COMPLETO ===")
        
        print("\\nEstados para DESHACER (más reciente primero):")
        for i, estado in enumerate(reversed(self.pila_deshacer), 1):
            texto = estado['texto'][:30] + "..." if len(estado['texto']) > 30 else estado['texto']
            print(f"  {i}. '{texto}'")
        
        print("\\nEstados para REHACER (más reciente primero):")
        for i, estado in enumerate(reversed(self.pila_rehacer), 1):
            texto = estado['texto'][:30] + "..." if len(estado['texto']) > 30 else estado['texto']
            print(f"  {i}. '{texto}'")

# Demostración del editor
print("=== EDITOR DE TEXTO AVANZADO ===\\n")

editor = EditorTextoAvanzado()

# Secuencia de escritura
editor.escribir("Hola, ")
editor.escribir("mundo!")
editor.mostrar_estado()

# Más operaciones
editor.escribir(" Bienvenido al editor.", modo='insertar')
editor.eliminar(7)  # Eliminar "editor."
editor.mostrar_estado()

# Operaciones de deshacer/rehacer
print("\\n--- OPERACIONES DESHACER/REHACER ---")
editor.deshacer()  # Recupera "editor."
editor.deshacer()  # Elimina " Bienvenido al editor."
editor.rehacer()   # Vuelve a poner " Bienvenido al editor."
editor.mostrar_estado()

# Buscar y reemplazar
editor.buscar_reemplazar("mundo", "universo")
editor.mostrar_estado()

# Mostrar historial completo
editor.mostrar_historial_completo()

# Más deshacer
print("\\n--- MAS DESHACER ---")
editor.deshacer()  # Deshacer reemplazo
editor.deshacer()  # Deshacer escritura
editor.mostrar_estado()`

const ejemplo2Code = `# Navegador Web Completo con Historial y Marcadores
class NavegadorWebCompleto:
    def __init__(self):
        """Inicializa un navegador web con todas las funcionalidades"""
        self.historial_atras = []      # Pila para páginas visitadas
        self.historial_adelante = []   # Pila para páginas adelante
        self.marcadores = set()        # Conjunto de páginas marcadas
        self.pagina_actual = None
        self.pestañas = []             # Lista de pestañas (cada una es un diccionario)
        self.pestaña_activa = 0        # Índice de la pestaña activa
    
    def crear_pestaña(self, url=None):
        """Crea una nueva pestaña"""
        nueva_pestaña = {
            'historial_atras': [],
            'historial_adelante': [],
            'pagina_actual': url
        }
        
        self.pestañas.append(nueva_pestaña)
        self.pestaña_activa = len(self.pestañas) - 1
        
        if url:
            print(f"Nueva pestaña creada visitando: {url}")
        else:
            print(f"Nueva pestaña creada (pestaña {self.pestaña_activa + 1})")
    
    def cambiar_pestaña(self, indice):
        """Cambia a otra pestaña"""
        if 0 <= indice < len(self.pestañas):
            self.pestaña_activa = indice
            pestaña = self.pestañas[self.pestaña_activa]
            self.historial_atras = pestaña['historial_atras']
            self.historial_adelante = pestaña['historial_adelante']
            self.pagina_actual = pestaña['pagina_actual']
            print(f"Cambiado a pestaña {indice + 1}")
        else:
            print(f"Error: Pestaña {indice + 1} no existe")
    
    def visitar_pagina(self, url):
        """Visita una nueva página en la pestaña actual"""
        if not self.pestañas:
            self.crear_pestaña(url)
            return
        
        pestaña = self.pestañas[self.pestaña_activa]
        
        # Guardar página actual en historial atrás
        if pestaña['pagina_actual']:
            pestaña['historial_atras'].append(pestaña['pagina_actual'])
        
        # Limpiar historial adelante (nueva navegación)
        pestaña['historial_adelante'].clear()
        
        # Actualizar página actual
        pestaña['pagina_actual'] = url
        
        # Actualizar estado del navegador
        self.historial_atras = pestaña['historial_atras']
        self.historial_adelante = pestaña['historial_adelante']
        self.pagina_actual = url
        
        print(f"Visitando: {url} (Pestaña {self.pestaña_activa + 1})")
    
    def atras(self):
        """Navega a la página anterior"""
        if not self.pestañas:
            print("Error: No hay pestañas abiertas")
            return
        
        pestaña = self.pestañas[self.pestaña_activa]
        
        if pestaña['historial_atras']:
            # Mover página actual a historial adelante
            if pestaña['pagina_actual']:
                pestaña['historial_adelante'].append(pestaña['pagina_actual'])
            
            # Tomar última página del historial atrás
            pestaña['pagina_actual'] = pestaña['historial_atras'].pop()
            
            # Actualizar estado del navegador
            self.historial_atras = pestaña['historial_atras']
            self.historial_adelante = pestaña['historial_adelante']
            self.pagina_actual = pestaña['pagina_actual']
            
            print(f"Atrás -> {pestaña['pagina_actual']}")
        else:
            print("No hay páginas anteriores")
    
    def adelante(self):
        """Navega a la página siguiente"""
        if not self.pestañas:
            print("Error: No hay pestañas abiertas")
            return
        
        pestaña = self.pestañas[self.pestaña_activa]
        
        if pestaña['historial_adelante']:
            # Mover página actual a historial atrás
            if pestaña['pagina_actual']:
                pestaña['historial_atras'].append(pestaña['pagina_actual'])
            
            # Tomar última página del historial adelante
            pestaña['pagina_actual'] = pestaña['historial_adelante'].pop()
            
            # Actualizar estado del navegador
            self.historial_atras = pestaña['historial_atras']
            self.historial_adelante = pestaña['historial_adelante']
            self.pagina_actual = pestaña['pagina_actual']
            
            print(f"Adelante -> {pestaña['pagina_actual']}")
        else:
            print("No hay páginas siguientes")
    
    def agregar_marcador(self):
        """Agrega la página actual a marcadores"""
        if self.pagina_actual:
            self.marcadores.add(self.pagina_actual)
            print(f"Marcador agregado: {self.pagina_actual}")
        else:
            print("Error: No hay página actual para marcar")
    
    def mostrar_marcadores(self):
        """Muestra todos los marcadores"""
        print("\\n--- MARCADORES ---")
        if self.marcadores:
            for i, marcador in enumerate(sorted(self.marcadores), 1):
                print(f"  {i}. {marcador}")
        else:
            print("  No hay marcadores")
    
    def mostrar_estado(self):
        """Muestra el estado completo del navegador"""
        print("\\n--- ESTADO DEL NAVEGADOR ---")
        print(f"Pestaña activa: {self.pestaña_activa + 1} de {len(self.pestañas)}")
        print(f"Página actual: {self.pagina_actual}")
        print(f"Historial atrás: {len(self.historial_atras)} páginas")
        print(f"Historial adelante: {len(self.historial_adelante)} páginas")
        print(f"Marcadores: {len(self.marcadores)}")
        
        # Mostrar estado de cada pestaña
        if self.pestañas:
            print("\\nPestañas:")
            for i, pestaña in enumerate(self.pestañas):
                estado = "ACTIVA" if i == self.pestaña_activa else "inactiva"
                pagina = pestaña['pagina_actual'] or "(vacía)"
                print(f"  Pestaña {i + 1} [{estado}]: {pagina}")

# Demostración del navegador
print("=== NAVEGADOR WEB COMPLETO ===\\n")

navegador = NavegadorWebCompleto()

# Crear pestañas y navegar
navegador.crear_pestaña("google.com")
navegador.visitar_pagina("youtube.com")
navegador.agregar_marcador()
navegador.visitar_pagina("github.com")
navegador.mostrar_estado()

# Crear segunda pestaña
navegador.crear_pestaña("wikipedia.org")
navegador.visitar_pagina("python.org")
navegador.agregar_marcador()
navegador.mostrar_estado()

# Navegación en primera pestaña
print("\\n--- NAVEGACIÓN EN PESTAÑA 1 ---")
navegador.cambiar_pestaña(0)
navegador.atras()
navegador.atras()
navegador.adelante()
navegador.mostrar_estado()

# Mostrar marcadores
navegador.mostrar_marcadores()

# Más navegación en segunda pestaña
print("\\n--- NAVEGACIÓN EN PESTAÑA 2 ---")
navegador.cambiar_pestaña(1)
navegador.visitar_pagina("stackoverflow.com")
navegador.atras()
navegador.mostrar_estado()`

const ejemplo3Code = `# Explorador de Archivos con Historial de Navegación
class ExploradorArchivos:
    def __init__(self):
        """Inicializa el explorador en el directorio raíz"""
        self.directorio_actual = "/"
        self.historial_atras = []      # Pila para directorios visitados
        self.historial_adelante = []   # Pila para directorios adelante
        self.favoritos = set()         # Directorios marcados como favoritos
        
        # Estructura de ejemplo del sistema de archivos
        self.sistema_archivos = {
            "/": {
                "type": "directory",
                "contents": {
                    "home": {
                        "type": "directory",
                        "contents": {
                            "usuario": {
                                "type": "directory",
                                "contents": {
                                    "Documentos": {"type": "directory", "contents": {}},
                                    "Descargas": {"type": "directory", "contents": {}},
                                    "proyectos": {
                                        "type": "directory",
                                        "contents": {
                                            "python": {"type": "directory", "contents": {}},
                                            "web": {"type": "directory", "contents": {}}
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "etc": {"type": "directory", "contents": {}},
                    "var": {"type": "directory", "contents": {}}
                }
            }
        }
    
    def cambiar_directorio(self, ruta):
        """
        Cambia al directorio especificado.
        
        Args:
            ruta (str): Ruta absoluta o relativa del directorio
        """
        # Determinar ruta absoluta
        if ruta.startswith("/"):
            nueva_ruta = ruta
        else:
            # Ruta relativa
            nueva_ruta = self.directorio_actual.rstrip("/") + "/" + ruta
        
        # Normalizar ruta (eliminar .. y .)
        partes = []
        for parte in nueva_ruta.split("/"):
            if parte == "..":
                if partes:
                    partes.pop()
            elif parte and parte != ".":
                partes.append(parte)
        
        ruta_normalizada = "/" + "/".join(partes) if partes else "/"
        
        # Verificar si el directorio existe
        if self._directorio_existe(ruta_normalizada):
            # Guardar directorio actual en historial atrás
            if self.directorio_actual != ruta_normalizada:
                self.historial_atras.append(self.directorio_actual)
            
            # Limpiar historial adelante (nueva navegación)
            self.historial_adelante.clear()
            
            # Cambiar directorio
            self.directorio_actual = ruta_normalizada
            
            print(f"Directorio cambiado a: {ruta_normalizada}")
        else:
            print(f"Error: Directorio no encontrado: {ruta_normalizada}")
    
    def _directorio_existe(self, ruta):
        """Verifica si un directorio existe en el sistema de archivos simulado"""
        partes = [p for p in ruta.split("/") if p]
        actual = self.sistema_archivos["/"]
        
        for parte in partes:
            if parte in actual["contents"] and actual["contents"][parte]["type"] == "directory":
                actual = actual["contents"][parte]
            else:
                return False
        return True
    
    def atras(self):
        """Regresa al directorio anterior"""
        if self.historial_atras:
            # Mover directorio actual a historial adelante
            self.historial_adelante.append(self.directorio_actual)
            
            # Tomar último directorio del historial atrás
            self.directorio_actual = self.historial_atras.pop()
            
            print(f"Atrás -> {self.directorio_actual}")
        else:
            print("No hay directorios anteriores")
    
    def adelante(self):
        """Avanza al directorio siguiente"""
        if self.historial_adelante:
            # Mover directorio actual a historial atrás
            self.historial_atras.append(self.directorio_actual)
            
            # Tomar último directorio del historial adelante
            self.directorio_actual = self.historial_adelante.pop()
            
            print(f"Adelante -> {self.directorio_actual}")
        else:
            print("No hay directorios siguientes")
    
    def listar_contenido(self):
        """Lista el contenido del directorio actual"""
        print(f"\\nContenido de {self.directorio_actual}:")
        print("-" * 40)
        
        # Obtener contenido del directorio actual
        partes = [p for p in self.directorio_actual.split("/") if p]
        actual = self.sistema_archivos["/"]
        
        for parte in partes:
            actual = actual["contents"][parte]
        
        # Listar directorios
        print("Directorios:")
        directorios = [nombre for nombre, info in actual["contents"].items() 
                      if info["type"] == "directory"]
        for dir_name in sorted(directorios):
            favorito = " [FAVORITO]" if f"{self.directorio_actual.rstrip('/')}/{dir_name}" in self.favoritos else ""
            print(f"  📁 {dir_name}{favorito}")
        
        # Listar archivos (en este ejemplo solo directorios)
        print("\\nArchivos:")
        archivos = [nombre for nombre, info in actual["contents"].items() 
                   if info["type"] == "file"]
        for file_name in sorted(archivos):
            print(f"  📄 {file_name}")
        
        if not directorios and not archivos:
            print("  (vacío)")
    
    def agregar_favorito(self):
        """Agrega el directorio actual a favoritos"""
        self.favoritos.add(self.directorio_actual)
        print(f"Directorio agregado a favoritos: {self.directorio_actual}")
    
    def mostrar_favoritos(self):
        """Muestra todos los directorios favoritos"""
        print("\\n--- DIRECTORIOS FAVORITOS ---")
        if self.favoritos:
            for i, favorito in enumerate(sorted(self.favoritos), 1):
                print(f"  {i}. {favorito}")
        else:
            print("  No hay directorios favoritos")
    
    def mostrar_historial(self):
        """Muestra el historial completo de navegación"""
        print("\\n=== HISTORIAL DE NAVEGACIÓN ===")
        
        print("\\nHistorial Atrás (más reciente primero):")
        for i, directorio in enumerate(reversed(self.historial_atras), 1):
            print(f"  {i}. {directorio}")
        
        print("\\nHistorial Adelante (más reciente primero):")
        for i, directorio in enumerate(reversed(self.historial_adelante), 1):
            print(f"  {i}. {directorio}")
        
        print(f"\\nDirectorio actual: {self.directorio_actual}")
    
    def mostrar_estado(self):
        """Muestra el estado completo del explorador"""
        print("\\n--- ESTADO DEL EXPLORADOR ---")
        print(f"Directorio actual: {self.directorio_actual}")
        print(f"Historial atrás: {len(self.historial_atras)} directorios")
        print(f"Historial adelante: {len(self.historial_adelante)} directorios")
        print(f"Favoritos: {len(self.favoritos)} directorios")

# Demostración del explorador
print("=== EXPLORADOR DE ARCHIVOS ===\\n")

explorador = ExploradorArchivos()
explorador.listar_contenido()

# Navegación por directorios
print("\\n--- NAVEGACIÓN ---")
explorador.cambiar_directorio("home")
explorador.listar_contenido()

explorador.cambiar_directorio("usuario")
explorador.agregar_favorito()
explorador.listar_contenido()

explorador.cambiar_directorio("proyectos")
explorador.listar_contenido()

explorador.cambiar_directorio("python")
explorador.agregar_favorito()
explorador.mostrar_estado()

# Operaciones de historial
print("\\n--- OPERACIONES DE HISTORIAL ---")
explorador.atras()
explorador.atras()
explorador.adelante()
explorador.mostrar_estado()

# Volver a home y mostrar favoritos
print("\\n--- VOLVIENDO A DIRECTORIOS ---")
explorador.cambiar_directorio("/home/usuario")
explorador.listar_contenido()
explorador.mostrar_favoritos()

# Mostrar historial completo
explorador.mostrar_historial()`

// Solución del ejercicio práctico
const ejercicioSolucion = `# Calculadora Científica con Historial Completo
class CalculadoraCientifica:
    def __init__(self):
        """Inicializa la calculadora con historial"""
        self.resultado_actual = 0
        self.historial_operaciones = []  # Pila de operaciones realizadas
        self.historial_deshacer = []     # Pila para operaciones deshechas
        self.memoria = 0                 # Memoria de la calculadora
    
    def operar(self, operacion, *operandos):
        """
        Realiza una operación matemática.
        
        Args:
            operacion (str): Tipo de operación ('+', '-', '*', '/', '^', 'sqrt', 'sin', 'cos')
            *operandos: Operandos para la operación
        """
        # Guardar estado actual antes de operar
        estado_anterior = {
            'resultado': self.resultado_actual,
            'operacion': 'estado',
            'operandos': []
        }
        self.historial_operaciones.append(estado_anterior)
        
        # Limpiar historial deshacer
        self.historial_deshacer.clear()
        
        # Realizar la operación
        try:
            if operacion == '+':
                if len(operandos) == 1:
                    self.resultado_actual += operandos[0]
                else:
                    self.resultado_actual = operandos[0] + operandos[1]
                print(f"{operandos[0]} + {operandos[1] if len(operandos) > 1 else ''} = {self.resultado_actual}")
            
            elif operacion == '-':
                if len(operandos) == 1:
                    self.resultado_actual -= operandos[0]
                else:
                    self.resultado_actual = operandos[0] - operandos[1]
                print(f"{operandos[0]} - {operandos[1] if len(operandos) > 1 else ''} = {self.resultado_actual}")
            
            elif operacion == '*':
                if len(operandos) == 1:
                    self.resultado_actual *= operandos[0]
                else:
                    self.resultado_actual = operandos[0] * operandos[1]
                print(f"{operandos[0]} * {operandos[1] if len(operandos) > 1 else ''} = {self.resultado_actual}")
            
            elif operacion == '/':
                if len(operandos) == 1:
                    if operandos[0] == 0:
                        raise ZeroDivisionError("División por cero")
                    self.resultado_actual /= operandos[0]
                    print(f"{self.resultado_actual * operandos[0]} / {operandos[0]} = {self.resultado_actual}")
                else:
                    if operandos[1] == 0:
                        raise ZeroDivisionError("División por cero")
                    self.resultado_actual = operandos[0] / operandos[1]
                    print(f"{operandos[0]} / {operandos[1]} = {self.resultado_actual}")
            
            elif operacion == '^':
                if len(operandos) == 1:
                    self.resultado_actual **= operandos[0]
                    print(f"{self.resultado_actual ** (1/operandos[0])} ^ {operandos[0]} = {self.resultado_actual}")
                else:
                    self.resultado_actual = operandos[0] ** operandos[1]
                    print(f"{operandos[0]} ^ {operandos[1]} = {self.resultado_actual}")
            
            elif operacion == 'sqrt':
                if operandos[0] < 0:
                    raise ValueError("No se puede calcular raíz cuadrada de número negativo")
                self.resultado_actual = operandos[0] ** 0.5
                print(f"sqrt({operandos[0]}) = {self.resultado_actual}")
            
            elif operacion == 'sin':
                import math
                self.resultado_actual = math.sin(math.radians(operandos[0]))
                print(f"sin({operandos[0]}°) = {self.resultado_actual:.4f}")
            
            elif operacion == 'cos':
                import math
                self.resultado_actual = math.cos(math.radians(operandos[0]))
                print(f"cos({operandos[0]}°) = {self.resultado_actual:.4f}")
            
            else:
                raise ValueError(f"Operación no soportada: {operacion}")
            
            # Guardar la operación en el historial
            operacion_realizada = {
                'resultado': self.resultado_actual,
                'operacion': operacion,
                'operandos': list(operandos)
            }
            self.historial_operaciones.append(operacion_realizada)
            
        except Exception as e:
            # Si hay error, restaurar el estado anterior
            if self.historial_operaciones:
                estado = self.historial_operaciones.pop()
                self.resultado_actual = estado['resultado']
            print(f"Error: {e}")
    
    def deshacer(self):
        """Deshace la última operación"""
        if len(self.historial_operaciones) > 1:  # Al menos una operación + estado inicial
            # Mover última operación a historial deshacer
            ultima_operacion = self.historial_operaciones.pop()
            self.historial_deshacer.append(ultima_operacion)
            
            # Restaurar resultado anterior
            if self.historial_operaciones:
                estado_anterior = self.historial_operaciones[-1]
                self.resultado_actual = estado_anterior['resultado']
            
            print(f"Deshacer: Resultado = {self.resultado_actual}")
        else:
            print("No hay operaciones para deshacer")
    
    def rehacer(self):
        """Rehace la última operación deshecha"""
        if self.historial_deshacer:
            # Tomar última operación deshecha
            operacion_rehacer = self.historial_deshacer.pop()
            
            # Aplicar la operación
            self.resultado_actual = operacion_rehacer['resultado']
            self.historial_operaciones.append(operacion_rehacer)
            
            print(f"Rehacer: Resultado = {self.resultado_actual}")
        else:
            print("No hay operaciones para rehacer")
    
    def guardar_memoria(self):
        """Guarda el resultado actual en memoria"""
        self.memoria = self.resultado_actual
        print(f"Memoria guardada: {self.memoria}")
    
    def recuperar_memoria(self):
        """Recupera el valor de la memoria"""
        self.resultado_actual = self.memoria
        print(f"Memoria recuperada: {self.resultado_actual}")
    
    def limpiar(self):
        """Limpia el resultado actual"""
        self.resultado_actual = 0
        print("Calculadora limpiada")
    
    def mostrar_historial(self):
        """Muestra el historial completo de operaciones"""
        print("\\n=== HISTORIAL DE OPERACIONES ===")
        
        for i, operacion in enumerate(self.historial_operaciones[1:], 1):  # Saltar estado inicial
            if operacion['operacion'] == 'estado':
                continue
            
            op_str = f"{operacion['operandos'][0]}"
            if len(operacion['operandos']) > 1:
                op_str += f" {operacion['operacion']} {operacion['operandos'][1]}"
            elif operacion['operacion'] in ['sqrt', 'sin', 'cos']:
                op_str = f"{operacion['operacion']}({operacion['operandos'][0]})"
            else:
                op_str = f"... {operacion['operacion']} {operacion['operandos'][0]}"
            
            print(f"  {i}. {op_str} = {operacion['resultado']}")
    
    def mostrar_estado(self):
        """Muestra el estado actual de la calculadora"""
        print("\\n--- ESTADO DE LA CALCULADORA ---")
        print(f"Resultado actual: {self.resultado_actual}")
        print(f"Memoria: {self.memoria}")
        print(f"Historial: {len(self.historial_operaciones) - 1} operaciones")
        print(f"Deshacer disponibles: {len(self.historial_deshacer)}")

# Demostración de la calculadora
print("=== CALCULADORA CIENTÍFICA CON HISTORIAL ===\\n")

calc = CalculadoraCientifica()

# Operaciones básicas
print("--- OPERACIONES BÁSICAS ---")
calc.operar('+', 10, 5)
calc.operar('*', 3)
calc.operar('/', 2)
calc.mostrar_estado()

# Operaciones científicas
print("\\n--- OPERACIONES CIENTÍFICAS ---")
calc.operar('^', 2)
calc.operar('sqrt', 225)
calc.operar('sin', 30)
calc.operar('cos', 60)
calc.mostrar_estado()

# Funciones deshacer/rehacer
print("\\n--- DESHACER/REHACER ---")
calc.deshacer()  # Deshacer cos(60)
calc.deshacer()  # Deshacer sin(30)
calc.rehacer()   # Rehacer sin(30)
calc.mostrar_estado()

# Memoria
print("\\n--- MEMORIA ---")
calc.guardar_memoria()
calc.limpiar()
calc.recuperar_memoria()
calc.mostrar_estado()

# Historial completo
calc.mostrar_historial()

# Más operaciones con historial
print("\\n--- MÁS OPERACIONES ---")
calc.operar('+', 100)
calc.operar('-', 25)
calc.deshacer()
calc.deshacer()
calc.mostrar_historial()
calc.mostrar_estado()`

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es un uso común de las pilas en aplicaciones?",
    opciones: [
      { texto: "Gestión de impresoras", correcta: false },
      { texto: "Deshacer acciones (Undo)", correcta: true },
      { texto: "Almacenamiento de claves", correcta: false },
      { texto: "Ordenar datos automáticamente", correcta: false }
    ]
  },
  {
    texto: "¿Qué aplicación utiliza pilas para manejar llamadas a funciones?",
    opciones: [
      { texto: "Colas", correcta: false },
      { texto: "Memoria dinámica", correcta: false },
      { texto: "Pila de llamadas", correcta: true },
      { texto: "Listas enlazadas", correcta: false }
    ]
  },
  {
    texto: "¿Qué ocurre al usar una pila para evaluar expresiones?",
    opciones: [
      { texto: "Se procesan en orden aleatorio", correcta: false },
      { texto: "Se respetan reglas LIFO", correcta: true },
      { texto: "Se convierten en listas", correcta: false },
      { texto: "Se ordenan automáticamente", correcta: false }
    ]
  }
]


</script>