<template>
    <div class="container mx-auto px-4 py-6 space-y-8">
        <!-- Header -->
        <HeaderTitle numero="4" titulo="4.1.2 Recorridos: pre, in y post orden">
            <p class="text-gray-600 mt-2">Estrategias sistemáticas para visitar todos los nodos de un árbol binario.</p>
        </HeaderTitle>


        <!-- Explicación teórica -->
        <section class="bg-blue-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-blue-800 mb-3">Recorridos Sistemáticos en Árboles Binarios</h2>
            <p class="text-gray-700 leading-relaxed">
                Los recorridos de árboles binarios son algoritmos que visitan todos los nodos de un árbol de manera
                sistemática.
                Los tres recorridos principales (preorden, inorden y postorden) difieren en el orden en que visitan la
                raíz,
                el subárbol izquierdo y el subárbol derecho. Estos recorridos son fundamentales para operaciones como
                copiar árboles,
                evaluar expresiones, serializar estructuras y validar propiedades. Cada recorrido tiene aplicaciones
                específicas
                basadas en el orden de procesamiento de los nodos.
            </p>
        </section>

        <!-- Tarjetas de conceptos clave -->
        <section>
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Conceptos Clave</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-blue-100 text-blue-800 p-2 rounded">+</div>
                        <h3 class="font-bold text-gray-800">Preorden</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Raíz → Izquierdo → Derecho. Útil para copiar árboles y expresiones
                        prefijas.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-green-100 text-green-800 p-2 rounded">E</div>
                        <h3 class="font-bold text-gray-800">Ejemplo real</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Calculadora: árbol de expresión ((2+3)*4) se evalúa con postorden.
                    </p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-red-100 text-red-800 p-2 rounded">X</div>
                        <h3 class="font-bold text-gray-800">No confundir</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Inorden solo produce orden ascendente en ABB. En árboles generales
                        no.</p>
                </div>

                <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="bg-yellow-100 text-yellow-800 p-2 rounded">?</div>
                        <h3 class="font-bold text-gray-800">Curiosidad</h3>
                    </div>
                    <p class="text-gray-600 text-sm">Pre/In/Post se refieren a la posición de la raíz respecto a los
                        subárboles.</p>
                </div>
            </div>
        </section>

        <!-- Ejemplos de código -->
        <section class="space-y-10">
            <h2 class="text-2xl font-bold text-gray-800">Ejemplos Prácticos</h2>

            <!-- Ejemplo 1 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">1. Implementación de los tres recorridos clásicos
                </h3>
                <p class="text-gray-600 mb-4">Versiones recursivas e iterativas de preorden, inorden y postorden.</p>
                <PythonRunner :code="ejemplo1Code" />
            </div>

            <!-- Ejemplo 2 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">2. Aplicación: evaluación de expresiones
                    aritméticas</h3>
                <p class="text-gray-600 mb-4">Uso de postorden para evaluar expresiones representadas como árboles.</p>
                <PythonRunner :code="ejemplo2Code" />
            </div>

            <!-- Ejemplo 3 -->
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-3">3. Aplicación: serialización y deserialización</h3>
                <p class="text-gray-600 mb-4">Uso de preorden para convertir árboles a strings y viceversa.</p>
                <PythonRunner :code="ejemplo3Code" />
            </div>
        </section>

        <!-- Ejercicio práctico -->
        <!-- <section class="border border-gray-300 rounded-xl p-6 bg-gray-50">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Ejercicio Práctico</h2>
            <div class="space-y-4">
                <p class="text-gray-700">
                    <strong>Enunciado:</strong> Dado un árbol binario que representa una expresión aritmética,
                    implementa
                    una función <code>construir_desde_pre_in</code> que reconstruya el árbol a partir de sus recorridos
                    preorden e inorden. Luego, usa postorden para evaluar la expresión. Prueba con la expresión del
                    ejemplo 2.
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
        <QuizQuestions :preguntas="preguntas" titulo="Quiz recorridos: pre, in y post orden"></QuizQuestions>

        <!-- Navegación -->
        <NavigationUnidad anterior="/Unidad/4.1.1" siguiente="/Unidad/4.1.3" textoAnterior="Anterior"
            textoSiguiente="Siguiente" tituloActual="Unidad II • Árboles" mostrarAnterior="true"
            mostrarSiguiente="true" />

    </div>
</template>

<script setup>
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Ejemplo 1: Implementación de recorridos
const ejemplo1Code = `class Nodo:
    """
    Clase que representa un nodo en un árbol binario.
    """
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None


def preorden_recursivo(raiz):
    """
    Recorrido Preorden (Raíz, Izquierdo, Derecho) - recursivo.
    Retorna lista con el orden de visita.
    """
    resultado = []

    def recorrer(nodo):
        if nodo is not None:
            resultado.append(nodo.valor)
            recorrer(nodo.izquierdo)
            recorrer(nodo.derecho)

    recorrer(raiz)
    return resultado


def inorden_recursivo(raiz):
    """
    Recorrido Inorden (Izquierdo, Raíz, Derecho) - recursivo.
    """
    resultado = []

    def recorrer(nodo):
        if nodo is not None:
            recorrer(nodo.izquierdo)
            resultado.append(nodo.valor)
            recorrer(nodo.derecho)

    recorrer(raiz)
    return resultado


def postorden_recursivo(raiz):
    """
    Recorrido Postorden (Izquierdo, Derecho, Raíz) - recursivo.
    """
    resultado = []

    def recorrer(nodo):
        if nodo is not None:
            recorrer(nodo.izquierdo)
            recorrer(nodo.derecho)
            resultado.append(nodo.valor)

    recorrer(raiz)
    return resultado


# Versiones iterativas
def preorden_iterativo(raiz):
    if raiz is None:
        return []

    resultado = []
    pila = [raiz]

    while pila:
        nodo = pila.pop()
        resultado.append(nodo.valor)

        if nodo.derecho is not None:
            pila.append(nodo.derecho)
        if nodo.izquierdo is not None:
            pila.append(nodo.izquierdo)

    return resultado


def inorden_iterativo(raiz):
    resultado = []
    pila = []
    actual = raiz

    while actual is not None or pila:
        while actual is not None:
            pila.append(actual)
            actual = actual.izquierdo

        actual = pila.pop()
        resultado.append(actual.valor)
        actual = actual.derecho

    return resultado


def crear_arbol_ejemplo():
    """
    Árbol binario:
            A
           / \\\\
          B   C
         / \\\\   \\\\
        D   E   F
    """
    raiz = Nodo('A')
    raiz.izquierdo = Nodo('B')
    raiz.derecho = Nodo('C')
    raiz.izquierdo.izquierdo = Nodo('D')
    raiz.izquierdo.derecho = Nodo('E')
    raiz.derecho.derecho = Nodo('F')
    return raiz


print("=== ÁRBOL DE EJEMPLO ===")
print("      A")
print("     / \\\\")
print("    B   C")
print("   / \\\\   \\\\")
print("  D   E   F")

arbol = crear_arbol_ejemplo()

print("\\\\n=== RECORRIDOS RECURSIVOS ===")
print(f"Preorden:  {preorden_recursivo(arbol)}")
print(f"Inorden:   {inorden_recursivo(arbol)}")
print(f"Postorden: {postorden_recursivo(arbol)}")

print("\\\\n=== RECORRIDOS ITERATIVOS ===")
print(f"Preorden iterativo: {preorden_iterativo(arbol)}")
print(f"Inorden iterativo:  {inorden_iterativo(arbol)}")

print("\\\\n=== REGLAS MNEMOTÉCNICAS ===")
print("Preorden:  Raíz → Izquierdo → Derecho")
print("Inorden:   Izquierdo → Raíz → Derecho")
print("Postorden: Izquierdo → Derecho → Raíz")

print("\\\\n=== APLICACIONES ===")
print("Preorden:  Copiar árboles, prefijo (+AB)")
print("Inorden:   Obtener orden en ABB, infijo (A+B)")
print("Postorden: Evaluar expresiones, posfijo (AB+)")`


// Ejemplo 2: Evaluación de expresiones aritméticas
const ejemplo2Code = `class NodoExpresion:
    """
    Nodo para árboles de expresión aritmética.
    """
    def __init__(self, valor, es_operador=False):
        self.valor = valor
        self.es_operador = es_operador
        self.izquierdo = None
        self.derecho = None


def construir_arbol_expresion():
    """
    Construye un árbol que representa la expresión: ((2 + 3) * (4 - 1))

    Representación:
            *
           / \\\\
          +   -
         / \\\\ / \\\\
        2  3  4  1
    """
    nodo_2 = NodoExpresion('2')
    nodo_3 = NodoExpresion('3')
    nodo_4 = NodoExpresion('4')
    nodo_1 = NodoExpresion('1')

    nodo_mas = NodoExpresion('+', es_operador=True)
    nodo_menos = NodoExpresion('-', es_operador=True)

    nodo_mas.izquierdo = nodo_2
    nodo_mas.derecho = nodo_3

    nodo_menos.izquierdo = nodo_4
    nodo_menos.derecho = nodo_1

    nodo_multi = NodoExpresion('*', es_operador=True)
    nodo_multi.izquierdo = nodo_mas
    nodo_multi.derecho = nodo_menos

    return nodo_multi


def evaluar_expresion_postorden(raiz):
    """
    Evalúa una expresión aritmética usando recorrido postorden.
    """
    def evaluar(nodo):
        if not nodo.es_operador:
            return float(nodo.valor)

        izquierdo_val = evaluar(nodo.izquierdo)
        derecho_val = evaluar(nodo.derecho)

        if nodo.valor == '+':
            return izquierdo_val + derecho_val
        elif nodo.valor == '-':
            return izquierdo_val - derecho_val
        elif nodo.valor == '*':
            return izquierdo_val * derecho_val
        elif nodo.valor == '/':
            return izquierdo_val / derecho_val
        else:
            raise ValueError(f"Operador no soportado: {nodo.valor}")

    return evaluar(raiz)


def expresion_a_string(raiz, formato='infijo'):
    """
    Convierte árbol de expresión a string.
    """
    if not raiz.es_operador:
        return raiz.valor

    izquierdo = expresion_a_string(raiz.izquierdo, formato)
    derecho = expresion_a_string(raiz.derecho, formato)

    if formato == 'infijo':
        return f"({izquierdo} {raiz.valor} {derecho})"
    elif formato == 'prefijo':
        return f"{raiz.valor} {izquierdo} {derecho}"
    elif formato == 'postfijo':
        return f"{izquierdo} {derecho} {raiz.valor}"
    else:
        raise ValueError(f"Formato no válido: {formato}")


print("=== EVALUACIÓN DE EXPRESIÓN ARITMÉTICA ===")
expresion_arbol = construir_arbol_expresion()

print("\\\\nExpresión representada:")
print("      *")
print("     / \\\\")
print("    +   -")
print("   / \\\\ / \\\\")
print("  2  3  4  1")

print("\\\\n=== DIFERENTES REPRESENTACIONES ===")
print(f"Infijo:   {expresion_a_string(expresion_arbol, 'infijo')}")
print(f"Prefijo:  {expresion_a_string(expresion_arbol, 'prefijo')}")
print(f"Postfijo: {expresion_a_string(expresion_arbol, 'postfijo')}")

print("\\\\n=== EVALUACIÓN ===")
resultado = evaluar_expresion_postorden(expresion_arbol)
print(f"Resultado: {resultado}")
print("Verificación: (2 + 3) * (4 - 1) = 5 * 3 = 15")


def construir_expresion_compleja():
    """
    Expresión: (3 * (4 + 5)) / (6 - 2)
    """
    nodo_3 = NodoExpresion('3')
    nodo_4 = NodoExpresion('4')
    nodo_5 = NodoExpresion('5')
    nodo_6 = NodoExpresion('6')
    nodo_2 = NodoExpresion('2')

    nodo_mas = NodoExpresion('+', es_operador=True)
    nodo_mas.izquierdo = nodo_4
    nodo_mas.derecho = nodo_5

    nodo_mult = NodoExpresion('*', es_operador=True)
    nodo_mult.izquierdo = nodo_3
    nodo_mult.derecho = nodo_mas

    nodo_menos = NodoExpresion('-', es_operador=True)
    nodo_menos.izquierdo = nodo_6
    nodo_menos.derecho = nodo_2

    nodo_div = NodoExpresion('/', es_operador=True)
    nodo_div.izquierdo = nodo_mult
    nodo_div.derecho = nodo_menos

    return nodo_div


print("\\\\n=== EXPRESIÓN COMPLEJA ===")
exp_compleja = construir_expresion_compleja()
print(f"Infijo:   {expresion_a_string(exp_compleja, 'infijo')}")
print(f"Postfijo: {expresion_a_string(exp_compleja, 'postfijo')}")
resultado_complejo = evaluar_expresion_postorden(exp_compleja)
print(f"Resultado: {resultado_complejo}")
print("Verificación: (3 * (4 + 5)) / (6 - 2) = 27 / 4 = 6.75")

print("\\\\n=== RELACIÓN CON RECORRIDOS ===")
print("Postfijo = Postorden del árbol de expresión")
print("Prefijo  = Preorden del árbol de expresión")
print("Infijo   = Inorden del árbol de expresión")`


// Ejemplo 3: Serialización y deserialización
const ejemplo3Code = `class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierdo = None
        self.derecho = None


def serializar_preorden(raiz):
    """
    Serializa un árbol binario a string usando preorden.
    Usa '#' para representar nodos nulos.
    """
    def serializar(nodo):
        if nodo is None:
            return '# '
        
        resultado = f"{nodo.valor} "
        resultado += serializar(nodo.izquierdo)
        resultado += serializar(nodo.derecho)
        return resultado
    
    return serializar(raiz).strip()


def deserializar_preorden(serializado):
    """
    Reconstruye un árbol binario desde string serializado con preorden.
    """
    valores = iter(serializado.split())
    
    def deserializar():
        try:
            val = next(valores)
        except StopIteration:
            return None
        
        if val == '#':
            return None
        
        nodo = Nodo(val)
        nodo.izquierdo = deserializar()
        nodo.derecho = deserializar()
        return nodo
    
    return deserializar()


def serializar_inorden(raiz):
    """
    Serializa usando inorden (NO suficiente para reconstruir árbol único).
    """
    def serializar(nodo):
        if nodo is None:
            return '# '
        
        resultado = serializar(nodo.izquierdo)
        resultado += f"{nodo.valor} "
        resultado += serializar(nodo.derecho)
        return resultado
    
    return serializar(raiz).strip()


def serializar_pre_in(raiz):
    """
    Serializa usando preorden e inorden juntos.
    """
    preorden = serializar_preorden(raiz)
    inorden = serializar_inorden(raiz)
    return f"Preorden: {preorden}\\\\nInorden: {inorden}"


def crear_arbol_prueba():
    """
    Árbol:
            A
           / \\\\
          B   C
         /   / \\\\
        D   E   F
    """
    raiz = Nodo('A')
    raiz.izquierdo = Nodo('B')
    raiz.derecho = Nodo('C')
    raiz.izquierdo.izquierdo = Nodo('D')
    raiz.derecho.izquierdo = Nodo('E')
    raiz.derecho.derecho = Nodo('F')
    return raiz


print("=== SERIALIZACIÓN DE ÁRBOLES ===")
arbol_original = crear_arbol_prueba()

print("\\\\nÁrbol original:")
print("      A")
print("     / \\\\")
print("    B   C")
print("   /   / \\\\")
print("  D   E   F")

print("\\\\n=== SERIALIZACIÓN PREORDEN ===")
serializado = serializar_preorden(arbol_original)
print(f"Serializado: {serializado}")

print("\\\\n=== DESERIALIZACIÓN ===")
arbol_reconstruido = deserializar_preorden(serializado)


def preorden_lista(raiz):
    resultado = []
    def recorrer(nodo):
        if nodo is not None:
            resultado.append(nodo.valor)
            recorrer(nodo.izquierdo)
            recorrer(nodo.derecho)
    recorrer(raiz)
    return resultado


original_pre = preorden_lista(arbol_original)
reconstruido_pre = preorden_lista(arbol_reconstruido)

print(f"Preorden original:     {original_pre}")
print(f"Preorden reconstruido: {reconstruido_pre}")
print(f"¿Son iguales? {original_pre == reconstruido_pre}")

print("\\\\n=== SERIALIZACIÓN PREORDEN + INORDEN ===")
pre_in = serializar_pre_in(arbol_original)
print(pre_in)

print("\\\\n=== EJEMPLO MÁS SIMPLE ===")
arbol_simple = Nodo('R')
arbol_simple.izquierdo = Nodo('I')
arbol_simple.derecho = Nodo('D')

print("Árbol simple: R -> I, D")
serializado_simple = serializar_preorden(arbol_simple)
print(f"Serializado: {serializado_simple}")

arbol_simple_reconst = deserializar_preorden(serializado_simple)
print(f"Preorden reconstruido: {preorden_lista(arbol_simple_reconst)}")

print("\\\\n=== LÍMITES DE LA SERIALIZACIÓN ===")
print("1. Solo preorden o solo inorden NO son suficientes")
print("2. Preorden + Inorden SÍ son suficientes")
print("3. Postorden + Inorden también son suficientes")

print("\\\\n=== EJEMPLO: DOS ÁRBOLES CON MISMO PREORDEN ===")

arbol1 = Nodo('A')
arbol1.izquierdo = Nodo('B')
arbol1.izquierdo.izquierdo = Nodo('C')

arbol2 = Nodo('A')
arbol2.izquierdo = Nodo('B')
arbol2.izquierdo.derecho = Nodo('C')

print("\\\\nÁrbol 1 (C hijo izquierdo de B):")
print("Preorden:", preorden_lista(arbol1))
print("Inorden:", serializar_inorden(arbol1))

print("\\\\nÁrbol 2 (C hijo derecho de B):")
print("Preorden:", preorden_lista(arbol2))
print("Inorden:", serializar_inorden(arbol2))

print("\\\\nMismo preorden (A B C) pero diferente inorden → árboles distintos")`


// Quiz
const preguntas = [
    {
        texto: "¿En qué orden se recorren los nodos en el recorrido preorden?",
        opciones: [
            { texto: "Raíz, izquierda, derecha", correcta: true },
            { texto: "Izquierda, raíz, derecha", correcta: false },
            { texto: "Izquierda, derecha, raíz", correcta: false },
            { texto: "Derecha, raíz, izquierda", correcta: false }
        ]
    },
    {
        texto: "¿Qué recorrido muestra los valores de un árbol binario de búsqueda en orden ascendente?",
        opciones: [
            { texto: "Preorden", correcta: false },
            { texto: "Inorden", correcta: true },
            { texto: "Postorden", correcta: false },
            { texto: "Por niveles", correcta: false }
        ]
    },
    {
        texto: "¿En qué recorrido la raíz se visita al final?",
        opciones: [
            { texto: "Preorden", correcta: false },
            { texto: "Inorden", correcta: false },
            { texto: "Postorden", correcta: true },
            { texto: "Recorrido por niveles", correcta: false }
        ]
    }
]

</script>