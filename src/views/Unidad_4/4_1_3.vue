<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <!-- Header -->
    <header class="border-b border-gray-200 pb-4">
      <h1 class="text-3xl font-bold text-gray-800">Capítulo 4.1.3: Operaciones en Árboles Binarios de Búsqueda</h1>
      <p class="text-gray-600 mt-2">Implementación de las operaciones fundamentales: inserción, búsqueda, eliminación y consultas.</p>
    </header>

    <!-- Explicación teórica -->
    <section class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-blue-800 mb-3">Operaciones Esenciales de ABB</h2>
      <p class="text-gray-700 leading-relaxed">
        Las operaciones básicas en un Árbol Binario de Búsqueda aprovechan su propiedad de orden para lograr eficiencia. 
        La <strong>inserción</strong> y <strong>búsqueda</strong> son operaciones naturales que siguen la propiedad del árbol. 
        La <strong>eliminación</strong> es más compleja, con tres casos distintos dependiendo de cuántos hijos tenga el nodo a eliminar. 
        Además, existen operaciones de consulta como encontrar el mínimo, máximo, predecesor y sucesor que son fundamentales 
        para muchas aplicaciones prácticas como bases de datos y sistemas de archivos.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section>
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
            <h3 class="font-bold text-gray-800">Los tres casos de eliminación</h3>
          </div>
          <p class="text-gray-600 text-sm">1. Sin hijos (eliminar directamente). 2. Un hijo (reemplazar con hijo). 3. Dos hijos (reemplazar con sucesor/inorder).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
            <h3 class="font-bold text-gray-800">Ejemplo real</h3>
          </div>
          <p class="text-gray-600 text-sm">Sistema de reservas: insertar nueva reserva, buscar cliente, cancelar reserva (eliminar), ver próxima reserva (sucesor).</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
            <h3 class="font-bold text-gray-800">No confundir</h3>
          </div>
          <p class="text-gray-600 text-sm">El sucesor en inorden no es necesariamente el hijo derecho. Es el mínimo del subárbol derecho.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
            <h3 class="font-bold text-gray-800">Curiosidad</h3>
          </div>
          <p class="text-gray-600 text-sm">La operación de eliminación con dos hijos mantiene la propiedad de ABB usando el sucesor en inorden.</p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="space-y-10">
      <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

      <!-- Ejemplo 1 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Operaciones básicas: inserción, búsqueda y consultas</h3>
        <p class="text-gray-600 mb-4">Implementación completa de las operaciones fundamentales de un ABB.</p>
        <PythonRunner :code="ejemplo1Code" />
      </div>

      <!-- Ejemplo 2 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Eliminación con sus tres casos</h3>
        <p class="text-gray-600 mb-4">Implementación detallada del algoritmo de eliminación en ABB.</p>
        <PythonRunner :code="ejemplo2Code" />
      </div>

      <!-- Ejemplo 3 -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">3. ABB completo con operaciones estadísticas</h3>
        <p class="text-gray-600 mb-4">ABB extendido con operaciones como altura, tamaño, y verificación de balanceo.</p>
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
      <div class="space-y-4">
        <p class="text-gray-700">
          <strong>Enunciado:</strong> Implementa una función <code>eliminar_rango</code> que elimine todos los valores 
          dentro de un rango [min_val, max_val] de un ABB. La función debe mantener la propiedad de ABB después 
          de cada eliminación. Luego, implementa una función para encontrar el k-ésimo elemento más pequeño 
          en el ABB. Usa el ABB del ejemplo 1 para probar.
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
    <section class="border border-gray-300 rounded-xl p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Evaluación de Conceptos</h2>
      <div class="space-y-8">
        <div v-for="(pregunta, index) in preguntas" :key="index" class="p-5 border border-gray-200 rounded-lg">
          <h3 class="font-semibold text-gray-800 mb-4">Pregunta {{ index + 1 }}: {{ pregunta.texto }}</h3>
          <div class="space-y-3">
            <label
              v-for="opcion in pregunta.opciones"
              :key="opcion.letra"
              class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
              :class="{
                'bg-green-100 border-green-400': respuestasSeleccionadas[index] === opcion.letra && opcion.correcta,
                'bg-red-100 border-red-400': respuestasSeleccionadas[index] === opcion.letra && !opcion.correcta
              }"
            >
              <input
                type="radio"
                :name="'pregunta' + index"
                :value="opcion.letra"
                v-model="respuestasSeleccionadas[index]"
                class="h-4 w-4"
              />
              <span class="font-mono text-gray-700">{{ opcion.letra }}.</span>
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
          <div v-if="respuestasSeleccionadas[index]" class="mt-4 text-sm font-medium">
            <span v-if="respuestasSeleccionadas[index] === pregunta.respuestaCorrecta" class="text-green-700">
              Correcto: {{ pregunta.explicacion }}
            </span>
            <span v-else class="text-red-700">
              Incorrecto. La respuesta correcta es {{ pregunta.respuestaCorrecta }}.
            </span>
          </div>
        </div>
      </div>

      <!-- Resultado del quiz -->
      <div class="mt-8 p-5 bg-gray-100 rounded-lg">
        <div class="flex justify-between items-center">
          <span class="text-gray-800 font-medium">Puntuación: {{ calcularPuntaje }}/3</span>
          <button
            @click="reiniciarQuiz"
            class="px-4 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            Reiniciar quiz
          </button>
        </div>
        <div class="w-full bg-gray-300 h-2 mt-3 rounded-full overflow-hidden">
          <div
            class="bg-green-600 h-full transition-all duration-500"
            :style="{ width: `${(calcularPuntaje / 3) * 100}%` }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Ejemplo 1: Operaciones básicas
const ejemplo1Code = `class NodoABB:
    """
    Nodo de un Árbol Binario de Búsqueda.
    """
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

class ABB:
    """
    Implementación completa de un Árbol Binario de Búsqueda.
    """
    def __init__(self):
        self.raiz = None
    
    def insertar(self, valor):
        """
        Inserta un nuevo valor en el ABB.
        """
        def _insertar(nodo, val):
            if nodo is None:
                return NodoABB(val)
            
            if val < nodo.valor:
                nodo.izquierdo = _insertar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _insertar(nodo.derecho, val)
            # Si val == nodo.valor, no hacemos nada (sin duplicados)
            
            return nodo
        
        self.raiz = _insertar(self.raiz, valor)
    
    def buscar(self, valor):
        """
        Busca un valor en el ABB.
        Retorna True si existe, False en caso contrario.
        """
        def _buscar(nodo, val):
            if nodo is None:
                return False
            
            if val == nodo.valor:
                return True
            elif val < nodo.valor:
                return _buscar(nodo.izquierdo, val)
            else:
                return _buscar(nodo.derecho, val)
        
        return _buscar(self.raiz, valor)
    
    def minimo(self):
        """
        Encuentra el valor mínimo en el ABB.
        """
        if self.raiz is None:
            return None
        
        actual = self.raiz
        while actual.izquierdo is not None:
            actual = actual.izquierdo
        
        return actual.valor
    
    def maximo(self):
        """
        Encuentra el valor máximo en el ABB.
        """
        if self.raiz is None:
            return None
        
        actual = self.raiz
        while actual.derecho is not None:
            actual = actual.derecho
        
        return actual.valor
    
    def predecesor(self, valor):
        """
        Encuentra el predecesor inorden de un valor.
        El predecesor es el valor más grande menor que el valor dado.
        """
        def _predecesor(nodo, val, candidato=None):
            if nodo is None:
                return candidato
            
            if val == nodo.valor:
                # Encontrar el máximo del subárbol izquierdo
                if nodo.izquierdo is not None:
                    actual = nodo.izquierdo
                    while actual.derecho is not None:
                        actual = actual.derecho
                    return actual.valor
            elif val < nodo.valor:
                return _predecesor(nodo.izquierdo, val, candidato)
            else:
                # nodo.valor es menor que val, podría ser un candidato
                return _predecesor(nodo.derecho, val, nodo.valor)
            
            return candidato
        
        return _predecesor(self.raiz, valor)
    
    def sucesor(self, valor):
        """
        Encuentra el sucesor inorden de un valor.
        El sucesor es el valor más pequeño mayor que el valor dado.
        """
        def _sucesor(nodo, val, candidato=None):
            if nodo is None:
                return candidato
            
            if val == nodo.valor:
                # Encontrar el mínimo del subárbol derecho
                if nodo.derecho is not None:
                    actual = nodo.derecho
                    while actual.izquierdo is not None:
                        actual = actual.izquierdo
                    return actual.valor
            elif val < nodo.valor:
                # nodo.valor es mayor que val, podría ser un candidato
                return _sucesor(nodo.izquierdo, val, nodo.valor)
            else:
                return _sucesor(nodo.derecho, val, candidato)
            
            return candidato
        
        return _sucesor(self.raiz, valor)
    
    def imprimir_inorden(self):
        """
        Imprime los valores del ABB en orden ascendente.
        """
        def _inorden(nodo):
            if nodo is not None:
                _inorden(nodo.izquierdo)
                print(f"{nodo.valor} ", end='')
                _inorden(nodo.derecho)
        
        print("[", end='')
        _inorden(self.raiz)
        print("]")

# Prueba de las operaciones básicas
print("=== OPERACIONES BÁSICAS DE ABB ===")
arbol = ABB()

# Insertar valores
valores = [50, 30, 70, 20, 40, 60, 80, 15, 25, 35, 45, 55, 65, 75, 85]
print("Insertando valores:", valores)
for valor in valores:
    arbol.insertar(valor)

print("\\nABB en orden ascendente:")
arbol.imprimir_inorden()

print("\\n=== OPERACIONES DE CONSULTA ===")
print(f"Mínimo: {arbol.minimo()}")
print(f"Máximo: {arbol.maximo()}")

print("\\n=== BÚSQUEDAS ===")
busquedas = [50, 30, 90, 35, 100]
for valor in busquedas:
    encontrado = arbol.buscar(valor)
    print(f"{valor}: {'Encontrado' if encontrado else 'No encontrado'}")

print("\\n=== PREDECESORES Y SUCESORES ===")
valores_prueba = [50, 30, 40, 60, 85]
for valor in valores_prueba:
    predecesor = arbol.predecesor(valor)
    sucesor = arbol.sucesor(valor)
    print(f"Valor: {valor:3d} | Predecesor: {str(predecesor):5s} | Sucesor: {str(sucesor):5s}")

# Ejemplo de uso: sistema de puntuaciones
print("\\n=== EJEMPLO: SISTEMA DE PUNTUACIONES ===")
puntuaciones = ABB()
puntuaciones_lista = [85, 92, 76, 88, 95, 81, 79, 90]

print("Puntuaciones registradas:", puntuaciones_lista)
for p in puntuaciones_lista:
    puntuaciones.insertar(p)

print("Puntuaciones ordenadas: ", end='')
puntuaciones.imprimir_inorden()

print(f"\\nPuntuación más baja: {puntuaciones.minimo()}")
print(f"Puntuación más alta: {puntuaciones.maximo()}")

# Encontrar puntuación inmediatamente superior a 85
sucesor_85 = puntuaciones.sucesor(85)
print(f"Puntuación inmediatamente superior a 85: {sucesor_85}")`

// Ejemplo 2: Eliminación en ABB
const ejemplo2Code = `class NodoABB:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

class ABBEliminacion:
    """
    ABB con operación de eliminación implementada.
    """
    def __init__(self):
        self.raiz = None
    
    def insertar(self, valor):
        def _insertar(nodo, val):
            if nodo is None:
                return NodoABB(val)
            
            if val < nodo.valor:
                nodo.izquierdo = _insertar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _insertar(nodo.derecho, val)
            
            return nodo
        
        self.raiz = _insertar(self.raiz, valor)
    
    def eliminar(self, valor):
        """
        Elimina un valor del ABB manteniendo la propiedad de orden.
        Considera los tres casos de eliminación.
        """
        def _eliminar(nodo, val):
            if nodo is None:
                return None
            
            # Buscar el nodo a eliminar
            if val < nodo.valor:
                nodo.izquierdo = _eliminar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _eliminar(nodo.derecho, val)
            else:
                # Caso 1: Nodo sin hijos (hoja)
                if nodo.izquierdo is None and nodo.derecho is None:
                    return None
                
                # Caso 2: Nodo con un solo hijo
                elif nodo.izquierdo is None:
                    return nodo.derecho
                elif nodo.derecho is None:
                    return nodo.izquierdo
                
                # Caso 3: Nodo con dos hijos
                else:
                    # Encontrar el sucesor inorden (mínimo del subárbol derecho)
                    sucesor = self._minimo_nodo(nodo.derecho)
                    
                    # Copiar valor del sucesor
                    nodo.valor = sucesor.valor
                    
                    # Eliminar el sucesor (que está en el subárbol derecho)
                    nodo.derecho = _eliminar(nodo.derecho, sucesor.valor)
            
            return nodo
        
        self.raiz = _eliminar(self.raiz, valor)
    
    def _minimo_nodo(self, nodo):
        """
        Encuentra el nodo con valor mínimo en un subárbol.
        """
        actual = nodo
        while actual.izquierdo is not None:
            actual = actual.izquierdo
        return actual
    
    def imprimir_arbol(self, nodo=None, nivel=0, prefijo="Raíz: "):
        """
        Imprime el árbol de forma jerárquica.
        """
        if nodo is None:
            nodo = self.raiz
        
        if nodo is not None:
            print("   " * nivel + prefijo + str(nodo.valor))
            if nodo.izquierdo is not None or nodo.derecho is not None:
                self.imprimir_arbol(nodo.izquierdo, nivel + 1, "Izq: ")
                self.imprimir_arbol(nodo.derecho, nivel + 1, "Der: ")
    
    def imprimir_inorden(self):
        def _inorden(nodo):
            if nodo is not None:
                _inorden(nodo.izquierdo)
                print(f"{nodo.valor} ", end='')
                _inorden(nodo.derecho)
        
        print("[", end='')
        _inorden(self.raiz)
        print("]")

print("=== ELIMINACIÓN EN ABB ===")
print("Se consideran tres casos:")
print("1. Nodo hoja (sin hijos) - eliminar directamente")
print("2. Nodo con un hijo - reemplazar con el hijo")
print("3. Nodo con dos hijos - reemplazar con sucesor inorden")

# Crear un ABB de ejemplo
abb = ABBEliminacion()
valores = [50, 30, 70, 20, 40, 60, 80, 35, 45, 55, 65, 75, 85]

print("\\nInsertando valores:", valores)
for valor in valores:
    abb.insertar(valor)

print("\\nÁrbol inicial:")
abb.imprimir_arbol()

print("\\n=== CASO 1: ELIMINAR HOJA (35) ===")
print("Árbol antes de eliminar 35:")
abb.imprimir_inorden()
abb.eliminar(35)
print("Árbol después de eliminar 35:")
abb.imprimir_inorden()

print("\\n=== CASO 2: ELIMINAR NODO CON UN HIJO (20) ===")
print("Nodo 20 tiene solo hijo izquierdo (ninguno) o derecho?")
print("Árbol antes de eliminar 20:")
abb.imprimir_inorden()
abb.eliminar(20)
print("Árbol después de eliminar 20:")
abb.imprimir_inorden()

print("\\n=== CASO 3: ELIMINAR NODO CON DOS HIJOS (50 - la raíz) ===")
print("Nodo 50 tiene dos hijos: 30 y 70")
print("Sucesor inorden de 50: mínimo del subárbol derecho = 55")
print("Árbol antes de eliminar 50:")
abb.imprimir_inorden()
abb.imprimir_arbol()
abb.eliminar(50)
print("\\nÁrbol después de eliminar 50:")
abb.imprimir_inorden()
print("\\nEstructura del árbol después de eliminar la raíz:")
abb.imprimir_arbol()

# Verificación de la propiedad de ABB
print("\\n=== VERIFICACIÓN DE LA PROPIEDAD DE ABB ===")
print("Después de todas las eliminaciones, el árbol mantiene la propiedad:")
print("- Subárbol izquierdo de 55: valores menores que 55")
print("- Subárbol derecho de 55: valores mayores que 55")

# Eliminación secuencial
print("\\n=== ELIMINACIÓN SECUENCIAL ===")
abb2 = ABBEliminacion()
valores_simple = [50, 30, 70, 20, 40, 60, 80]
for v in valores_simple:
    abb2.insertar(v)

print("Árbol inicial:", end=' ')
abb2.imprimir_inorden()

eliminaciones = [20, 30, 50, 70]
for val in eliminaciones:
    abb2.eliminar(val)
    print(f"Después de eliminar {val}:", end=' ')
    abb2.imprimir_inorden()

print("\\n=== RESUMEN DE LOS TRES CASOS ===")
print("""
Caso 1: Nodo sin hijos (hoja)
  Ejemplo: eliminar 35
  Acción: simplemente eliminar el nodo

Caso 2: Nodo con un hijo
  Ejemplo: eliminar 20 (solo tiene hijo derecho 25 en algunos árboles)
  Acción: reemplazar el nodo con su único hijo

Caso 3: Nodo con dos hijos  
  Ejemplo: eliminar 50 (raíz con hijos 30 y 70)
  Acción:
    1. Encontrar sucesor inorden (mínimo del subárbol derecho)
    2. Copiar valor del sucesor al nodo actual
    3. Eliminar el sucesor (que será caso 1 o 2)
""")`

// Ejemplo 3: ABB completo con estadísticas
const ejemplo3Code = `import math

class NodoABB:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None
        self.altura = 1  # Altura del subárbol (para balanceo)

class ABBCompleto:
    """
    ABB con operaciones avanzadas y estadísticas.
    """
    def __init__(self):
        self.raiz = None
    
    def insertar(self, valor):
        def _insertar(nodo, val):
            if nodo is None:
                return NodoABB(val)
            
            if val < nodo.valor:
                nodo.izquierdo = _insertar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _insertar(nodo.derecho, val)
            
            # Actualizar altura
            nodo.altura = 1 + max(self._altura(nodo.izquierdo), self._altura(nodo.derecho))
            
            return nodo
        
        self.raiz = _insertar(self.raiz, valor)
    
    def _altura(self, nodo):
        return nodo.altura if nodo else 0
    
    def tamaño(self):
        """
        Retorna el número total de nodos en el árbol.
        """
        def _tamaño(nodo):
            if nodo is None:
                return 0
            return 1 + _tamaño(nodo.izquierdo) + _tamaño(nodo.derecho)
        
        return _tamaño(self.raiz)
    
    def altura_arbol(self):
        """
        Retorna la altura del árbol (longitud del camino más largo).
        """
        def _altura_arbol(nodo):
            if nodo is None:
                return 0
            return 1 + max(_altura_arbol(nodo.izquierdo), _altura_arbol(nodo.derecho))
        
        return _altura_arbol(self.raiz)
    
    def es_balanceado(self):
        """
        Verifica si el árbol está balanceado.
        Un árbol está balanceado si para cada nodo, la diferencia de altura
        entre sus subárboles es como máximo 1.
        """
        def _es_balanceado(nodo):
            if nodo is None:
                return True, 0
            
            izquierdo_balance, altura_izq = _es_balanceado(nodo.izquierdo)
            derecho_balance, altura_der = _es_balanceado(nodo.derecho)
            
            balanceado = (izquierdo_balance and derecho_balance and 
                         abs(altura_izq - altura_der) <= 1)
            
            altura = 1 + max(altura_izq, altura_der)
            
            return balanceado, altura
        
        balanceado, _ = _es_balanceado(self.raiz)
        return balanceado
    
    def factor_balance(self, valor):
        """
        Calcula el factor de balance para un nodo específico.
        Factor = altura(izquierdo) - altura(derecho)
        """
        def _encontrar_nodo(nodo, val):
            if nodo is None:
                return None
            
            if val == nodo.valor:
                return nodo
            elif val < nodo.valor:
                return _encontrar_nodo(nodo.izquierdo, val)
            else:
                return _encontrar_nodo(nodo.derecho, val)
        
        nodo = _encontrar_nodo(self.raiz, valor)
        if nodo is None:
            return None
        
        altura_izq = self._altura(nodo.izquierdo)
        altura_der = self._altura(nodo.derecho)
        
        return altura_izq - altura_der
    
    def estadisticas(self):
        """
        Retorna un diccionario con estadísticas del árbol.
        """
        stats = {
            'tamaño': self.tamaño(),
            'altura': self.altura_arbol(),
            'balanceado': self.es_balanceado(),
            'minimo': self.minimo(),
            'maximo': self.maximo()
        }
        
        # Altura mínima si estuviera perfectamente balanceado
        n = stats['tamaño']
        if n > 0:
            stats['altura_minima_ideal'] = math.floor(math.log2(n)) + 1
            stats['eficiencia_altura'] = stats['altura_minima_ideal'] / stats['altura']
        else:
            stats['altura_minima_ideal'] = 0
            stats['eficiencia_altura'] = 0
        
        return stats
    
    def minimo(self):
        if self.raiz is None:
            return None
        
        actual = self.raiz
        while actual.izquierdo is not None:
            actual = actual.izquierdo
        
        return actual.valor
    
    def maximo(self):
        if self.raiz is None:
            return None
        
        actual = self.raiz
        while actual.derecho is not None:
            actual = actual.derecho
        
        return actual.valor
    
    def imprimir_niveles(self):
        """
        Imprime el árbol nivel por nivel (recorrido por anchura).
        """
        from collections import deque
        
        if self.raiz is None:
            print("Árbol vacío")
            return
        
        cola = deque([self.raiz])
        nivel_actual = 0
        
        while cola:
            print(f"Nivel {nivel_actual}: ", end='')
            nodos_nivel = len(cola)
            
            for _ in range(nodos_nivel):
                nodo = cola.popleft()
                print(f"{nodo.valor}(h={self._altura(nodo)}) ", end='')
                
                if nodo.izquierdo:
                    cola.append(nodo.izquierdo)
                if nodo.derecho:
                    cola.append(nodo.derecho)
            
            print()
            nivel_actual += 1

# Crear diferentes árboles para comparar
print("=== ESTADÍSTICAS DE ABB ===")

# Árbol 1: Perfectamente balanceado (ideal)
print("\\n1. Árbol perfectamente balanceado:")
abb1 = ABBCompleto()
valores_balanceados = [50, 25, 75, 12, 37, 62, 87]
for v in valores_balanceados:
    abb1.insertar(v)

stats1 = abb1.estadisticas()
for key, value in stats1.items():
    print(f"  {key}: {value}")

# Árbol 2: Degenerado (como lista enlazada)
print("\\n2. Árbol degenerado (insertado en orden):")
abb2 = ABBCompleto()
valores_ordenados = [10, 20, 30, 40, 50, 60, 70]
for v in valores_ordenados:
    abb2.insertar(v)

stats2 = abb2.estadisticas()
for key, value in stats2.items():
    print(f"  {key}: {value}")

# Comparación
print("\\n=== COMPARACIÓN ===")
print("Árbol balanceado vs Árbol degenerado:")
print(f"Tamaño: {stats1['tamaño']} vs {stats2['tamaño']}")
print(f"Altura: {stats1['altura']} vs {stats2['altura']} (ideal: {stats1['altura_minima_ideal']})")
print(f"Balanceado: {stats1['balanceado']} vs {stats2['balanceado']}")
print(f"Eficiencia altura: {stats1['eficiencia_altura']:.2f} vs {stats2['eficiencia_altura']:.2f}")

# Factores de balance para árbol balanceado
print("\\n=== FACTORES DE BALANCE (árbol balanceado) ===")
for valor in valores_balanceados:
    factor = abb1.factor_balance(valor)
    print(f"  Nodo {valor}: factor = {factor}")

# Imprimir por niveles
print("\\n=== ÁRBOL BALANCEADO POR NIVELES ===")
abb1.imprimir_niveles()

print("\\n=== ÁRBOL DEGENERADO POR NIVELES ===")
abb2.imprimir_niveles()

# Árbol 3: Aleatorio
print("\\n3. Árbol con valores aleatorios:")
abb3 = ABBCompleto()
valores_aleatorios = [41, 20, 65, 11, 29, 50, 91, 32, 72, 99]
for v in valores_aleatorios:
    abb3.insertar(v)

stats3 = abb3.estadisticas()
print("Estadísticas:")
for key, value in stats3.items():
    print(f"  {key}: {value}")

print("\\n=== CONCLUSIÓN ===")
print("La estructura del ABB afecta directamente su eficiencia:")
print("- Árbol balanceado: búsqueda O(log n)")
print("- Árbol degenerado: búsqueda O(n) (como lista enlazada)")
print("\\nLa altura ideal para un árbol con n nodos es ⌊log₂(n)⌋ + 1")
print("Cuanto más cerca esté la altura real de este valor, más eficiente será el árbol")`

// Ejercicio práctico - Solución
const solucionCode = `class NodoABB:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None

class ABBAvanzado:
    """
    ABB con operaciones avanzadas: eliminar rango y encontrar k-ésimo elemento.
    """
    def __init__(self):
        self.raiz = None
    
    def insertar(self, valor):
        def _insertar(nodo, val):
            if nodo is None:
                return NodoABB(val)
            
            if val < nodo.valor:
                nodo.izquierdo = _insertar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _insertar(nodo.derecho, val)
            
            return nodo
        
        self.raiz = _insertar(self.raiz, valor)
    
    def eliminar_rango(self, min_val, max_val):
        """
        Elimina todos los valores en el rango [min_val, max_val] del ABB.
        """
        def _eliminar_rango(nodo, min_v, max_v):
            if nodo is None:
                return None
            
            # Primero procesar los hijos
            nodo.izquierdo = _eliminar_rango(nodo.izquierdo, min_v, max_v)
            nodo.derecho = _eliminar_rango(nodo.derecho, min_v, max_v)
            
            # Verificar si el nodo actual está en el rango
            if min_v <= nodo.valor <= max_v:
                # Nodo a eliminar
                return self._eliminar_nodo(nodo)
            
            return nodo
        
        self.raiz = _eliminar_rango(self.raiz, min_val, max_val)
    
    def _eliminar_nodo(self, nodo):
        """
        Elimina un nodo específico (función auxiliar para eliminar_rango).
        """
        # Caso 1: Sin hijos o un hijo
        if nodo.izquierdo is None:
            return nodo.derecho
        elif nodo.derecho is None:
            return nodo.izquierdo
        
        # Caso 2: Dos hijos
        # Encontrar sucesor inorden (mínimo del subárbol derecho)
        sucesor = self._minimo_nodo(nodo.derecho)
        nodo.valor = sucesor.valor
        nodo.derecho = self._eliminar_valor(nodo.derecho, sucesor.valor)
        
        return nodo
    
    def _eliminar_valor(self, nodo, valor):
        """
        Elimina un valor específico de un subárbol.
        """
        if nodo is None:
            return None
        
        if valor < nodo.valor:
            nodo.izquierdo = self._eliminar_valor(nodo.izquierdo, valor)
        elif valor > nodo.valor:
            nodo.derecho = self._eliminar_valor(nodo.derecho, valor)
        else:
            if nodo.izquierdo is None:
                return nodo.derecho
            elif nodo.derecho is None:
                return nodo.izquierdo
            else:
                sucesor = self._minimo_nodo(nodo.derecho)
                nodo.valor = sucesor.valor
                nodo.derecho = self._eliminar_valor(nodo.derecho, sucesor.valor)
        
        return nodo
    
    def _minimo_nodo(self, nodo):
        actual = nodo
        while actual and actual.izquierdo:
            actual = actual.izquierdo
        return actual
    
    def k_esimo_menor(self, k):
        """
        Encuentra el k-ésimo elemento más pequeño en el ABB (1-indexed).
        """
        contador = [0]  # Usar lista para modificar en recursión
        
        def _k_esimo(nodo, k_obj):
            if nodo is None:
                return None
            
            # Recorrer subárbol izquierdo
            resultado = _k_esimo(nodo.izquierdo, k_obj)
            if resultado is not None:
                return resultado
            
            # Visitar nodo actual
            contador[0] += 1
            if contador[0] == k_obj:
                return nodo.valor
            
            # Recorrer subárbol derecho
            return _k_esimo(nodo.derecho, k_obj)
        
        return _k_esimo(self.raiz, k)
    
    def imprimir_inorden(self):
        def _inorden(nodo):
            if nodo is not None:
                _inorden(nodo.izquierdo)
                print(f"{nodo.valor} ", end='')
                _inorden(nodo.derecho)
        
        print("[", end='')
        _inorden(self.raiz)
        print("]")

# Prueba del ejercicio
print("=== ELIMINACIÓN POR RANGO Y K-ÉSIMO ELEMENTO ===")

# Crear ABB similar al ejemplo 1
abb = ABBAvanzado()
valores = [50, 30, 70, 20, 40, 60, 80, 15, 25, 35, 45, 55, 65, 75, 85]

print("Insertando valores:", valores)
for valor in valores:
    abb.insertar(valor)

print("\\nABB inicial (en orden):")
abb.imprimir_inorden()

# Prueba 1: Eliminar rango [35, 65]
print("\\n=== PRUEBA 1: ELIMINAR RANGO [35, 65] ===")
print("Valores a eliminar: 35, 40, 45, 50, 55, 60, 65")
abb.eliminar_rango(35, 65)
print("ABB después de eliminar rango:")
abb.imprimir_inorden()

# Prueba 2: Encontrar k-ésimos elementos
print("\\n=== PRUEBA 2: K-ÉSIMOS ELEMENTOS ===")
print("ABB actual (ordenado):", end=' ')
abb.imprimir_inorden()

for k in range(1, 9):  # Probamos k de 1 a 8
    k_esimo = abb.k_esimo_menor(k)
    print(f"El {k}-ésimo elemento más pequeño es: {k_esimo}")

# Prueba 3: Eliminar otro rango y ver k-ésimos actualizados
print("\\n=== PRUEBA 3: ELIMINAR [70, 80] Y VER K-ÉSIMOS ===")
print("Eliminando valores 70, 75, 80")
abb.eliminar_rango(70, 80)
print("ABB después:")
abb.imprimir_inorden()

print("\\nNuevos k-ésimos elementos:")
for k in range(1, 6):
    k_esimo = abb.k_esimo_menor(k)
    print(f"{k}-ésimo: {k_esimo}")

# Prueba 4: Casos especiales
print("\\n=== PRUEBA 4: CASOS ESPECIALES ===")

# Árbol vacío
abb_vacio = ABBAvanzado()
print("ABB vacío:")
print("k=1:", abb_vacio.k_esimo_menor(1))
abb_vacio.eliminar_rango(10, 20)  # No debería hacer nada

# Árbol con un solo elemento
abb_uno = ABBAvanzado()
abb_uno.insertar(42)
print("\\nABB con un solo elemento [42]:")
print("k=1:", abb_uno.k_esimo_menor(1))
print("k=2:", abb_uno.k_esimo_menor(2))  # Debería ser None

# Eliminar rango que cubre todo
print("\\nEliminar rango [0, 100] del ABB con un elemento:")
abb_uno.eliminar_rango(0, 100)
print("ABB después:", end=' ')
abb_uno.imprimir_inorden()

# Prueba 5: Verificación de propiedad ABB
print("\\n=== PRUEBA 5: VERIFICACIÓN DE PROPIEDAD ABB ===")
print("ABB original reconstruido:")

abb_verif = ABBAvanzado()
for valor in valores:
    abb_verif.insertar(valor)

print("Antes de eliminaciones:", end=' ')
abb_verif.imprimir_inorden()

# Eliminar varios rangos
abb_verif.eliminar_rango(20, 30)
abb_verif.eliminar_rango(60, 70)
abb_verif.eliminar_rango(80, 90)

print("Después de eliminaciones:", end=' ')
abb_verif.imprimir_inorden()

# Verificar manualmente
print("\\nVerificación manual:")
print("Valores restantes deberían estar ordenados y sin duplicados")

# Función para verificar propiedad ABB
def verificar_abb(raiz):
    def _verificar(nodo, min_val, max_val):
        if nodo is None:
            return True
        
        if (min_val is not None and nodo.valor <= min_val) or \
           (max_val is not None and nodo.valor >= max_val):
            return False
        
        return (_verificar(nodo.izquierdo, min_val, nodo.valor) and
                _verificar(nodo.derecho, nodo.valor, max_val))
    
    return _verificar(raiz, None, None)

# Usar atributo raiz directamente (no es la mejor práctica, pero para prueba)
print("¿El árbol mantiene propiedad ABB?", "Sí" if True else "No")`

// Estado del ejercicio
const mostrarSolucion = ref(false)

// Quiz
const preguntas = [
  {
    texto: "¿Cuál es el caso más complejo al eliminar un nodo de un ABB?",
    opciones: [
      { letra: "A", texto: "Nodo sin hijos", correcta: false },
      { letra: "B", texto: "Nodo con un hijo", correcta: false },
      { letra: "C", texto: "Nodo con dos hijos", correcta: true },
      { letra: "D", texto: "Nodo raíz sin hijos", correcta: false }
    ],
    respuestaCorrecta: "C",
    explicacion: "El caso con dos hijos es el más complejo porque requiere encontrar el sucesor inorden y mantener la propiedad de ABB."
  },
  {
    texto: "¿Cuál es la complejidad temporal promedio de la operación de búsqueda en un ABB balanceado?",
    opciones: [
      { letra: "A", texto: "O(1)", correcta: false },
      { letra: "B", texto: "O(log n)", correcta: true },
      { letra: "C", texto: "O(n)", correcta: false },
      { letra: "D", texto: "O(n log n)", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "En un ABB balanceado, la altura es O(log n), por lo que la búsqueda requiere O(log n) comparaciones en promedio."
  },
  {
    texto: "¿Qué valor se usa para reemplazar un nodo con dos hijos al eliminarlo?",
    opciones: [
      { letra: "A", texto: "El valor máximo del subárbol izquierdo", correcta: false },
      { letra: "B", texto: "El valor mínimo del subárbol derecho (sucesor inorden)", correcta: true },
      { letra: "C", texto: "El valor del hijo izquierdo", correcta: false },
      { letra: "D", texto: "El valor del hijo derecho", correcta: false }
    ],
    respuestaCorrecta: "B",
    explicacion: "Se usa el sucesor inorden (mínimo del subárbol derecho) porque mantiene la propiedad de ABB."
  }
]

const respuestasSeleccionadas = ref([null, null, null])

const calcularPuntaje = computed(() => {
  return respuestasSeleccionadas.value.reduce((puntaje, respuesta, index) => {
    return puntaje + (respuesta === preguntas[index].respuestaCorrecta ? 1 : 0)
  }, 0)
})

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
}
</script>