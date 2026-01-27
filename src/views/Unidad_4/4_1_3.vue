<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="4" titulo="4.1.3 Operaciones">
            <p class="text-gray-600 mt-2">Implementación de las operaciones fundamentales: inserción, búsqueda,
                eliminación y consultas.</p>
        </HeaderTitle>

        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Operaciones Esenciales de ABB</h2>
            <p class="text-gray-700 leading-relaxed">
                Las operaciones básicas en un Árbol Binario de Búsqueda aprovechan su propiedad de orden para lograr
                eficiencia.
                La <strong>inserción</strong> y <strong>búsqueda</strong> son operaciones naturales que siguen la
                propiedad del árbol.
                La <strong>eliminación</strong> es más compleja, con tres casos distintos dependiendo de cuántos hijos
                tenga el nodo a eliminar.
                Además, existen operaciones de consulta como encontrar el mínimo, máximo, predecesor y sucesor que son
                fundamentales
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
                    <p class="text-gray-600 text-sm">1. Sin hijos (eliminar directamente). 2. Un hijo (reemplazar con
                        hijo). 3. Dos hijos (reemplazar con sucesor/inorder).</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Sistema de reservas: insertar nueva reserva, buscar cliente,
                        cancelar reserva (eliminar), ver próxima reserva (sucesor).</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">El sucesor en inorden no es necesariamente el hijo derecho. Es el
                        mínimo del subárbol derecho.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">La operación de eliminación con dos hijos mantiene la propiedad de
                        ABB usando el sucesor en inorden.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Operaciones básicas: inserción, búsqueda y
                    consultas</h3>
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
                <p class="text-gray-600 mb-4">ABB extendido con operaciones como altura, tamaño, y verificación de
                    balanceo.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Implementa una función <code>eliminar_rango</code> que elimine todos los
                    valores
                    dentro de un rango [min_val, max_val] de un ABB. La función debe mantener la propiedad de ABB
                    después
                    de cada eliminación. Luego, implementa una función para encontrar el k-ésimo elemento más pequeño
                    en el ABB. Usa el ABB del ejemplo 1 para probar.
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz de operaciones arboles binarios"></QuizQuestions>


        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/4.1.2" textoAnterior="Anterior" tituloActual="Unidad II • Árboles"
            mostrarAnterior="true" mostrarSiguiente="false" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

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
        def _eliminar(nodo, val):
            if nodo is None:
                return None
            if val < nodo.valor:
                nodo.izquierdo = _eliminar(nodo.izquierdo, val)
            elif val > nodo.valor:
                nodo.derecho = _eliminar(nodo.derecho, val)
            else:
                # Caso 1: hoja
                if nodo.izquierdo is None and nodo.derecho is None:
                    return None
                # Caso 2: un hijo
                if nodo.izquierdo is None:
                    return nodo.derecho
                if nodo.derecho is None:
                    return nodo.izquierdo
                # Caso 3: dos hijos
                sucesor = self._minimo_nodo(nodo.derecho)
                nodo.valor = sucesor.valor
                nodo.derecho = _eliminar(nodo.derecho, sucesor.valor)
            return nodo
        self.raiz = _eliminar(self.raiz, valor)
    
    def _minimo_nodo(self, nodo):
        while nodo.izquierdo:
            nodo = nodo.izquierdo
        return nodo
    
    def imprimir_arbol(self, nodo, nivel=0, prefijo=""):
        if nodo is None:
            return
        print("   " * nivel + prefijo + str(nodo.valor))
        self.imprimir_arbol(nodo.izquierdo, nivel + 1, "Izq: ")
        self.imprimir_arbol(nodo.derecho, nivel + 1, "Der: ")
    
    def imprimir_inorden(self):
        def _inorden(nodo):
            if nodo:
                _inorden(nodo.izquierdo)
                print(nodo.valor, end=' ')
                _inorden(nodo.derecho)
        print("[", end=' ')
        _inorden(self.raiz)
        print("]")


print("=== ELIMINACIÓN EN ABB ===")

abb = ABBEliminacion()
valores = [50, 30, 70, 20, 40, 60, 80, 35, 45, 55, 65]

for v in valores:
    abb.insertar(v)

print("\\nÁrbol inicial:")
abb.imprimir_arbol(abb.raiz)

print("\\nEliminar hoja (35)")
abb.eliminar(35)
abb.imprimir_inorden()

print("\\nEliminar nodo con un hijo (20)")
abb.eliminar(20)
abb.imprimir_inorden()

print("\\nEliminar nodo con dos hijos (50)")
abb.eliminar(50)
abb.imprimir_inorden()

print("\\nÁrbol final:")
abb.imprimir_arbol(abb.raiz)`


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

// Quiz
const preguntas = [
    {
        texto: "¿Cuál es una operación básica en un árbol binario de búsqueda?",
        opciones: [
            { texto: "Insertar un nodo", correcta: true },
            { texto: "Crear ciclos", correcta: false },
            { texto: "Mezclar nodos", correcta: false },
            { texto: "Invertir el árbol automáticamente", correcta: false }
        ]
    },
    {
        texto: "¿Qué operación permite localizar un valor específico en un ABB?",
        opciones: [
            { texto: "Recorrer", correcta: false },
            { texto: "Buscar", correcta: true },
            { texto: "Balancear", correcta: false },
            { texto: "Rotar", correcta: false }
        ]
    },
    {
        texto: "¿Qué sucede al eliminar un nodo con dos hijos en un ABB?",
        opciones: [
            { texto: "Se elimina sin reemplazo", correcta: false },
            { texto: "Se reemplaza por su sucesor o predecesor", correcta: true },
            { texto: "Se convierte en hoja", correcta: false },
            { texto: "Se borra todo el árbol", correcta: false }
        ]
    }
]

</script>