<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Cabecera -->
    <HeaderTitle numero="2" titulo="2.1.2 Operaciones"></HeaderTitle>

    <!-- Explicación Teórica -->
    <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">i</span>
        Operaciones Fundamentales de una Pila
      </h2>
      <div class="text-gray-700 leading-relaxed space-y-3">
        <p>
          Las pilas ofrecen un conjunto limitado pero poderoso de operaciones que definen su comportamiento LIFO.
          Cada operación actúa exclusivamente sobre el <strong>tope</strong> de la pila, manteniendo la integridad
          de la estructura.
        </p>
        <p>
          Estas operaciones son la base para implementar algoritmos complejos como evaluación de expresiones,
          recorrido de árboles y gestión de llamadas a funciones.
        </p>
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Importante:</strong> Todas las operaciones tienen complejidad O(1) - tiempo constante,
          lo que las hace extremadamente eficientes para manipulación de datos.
        </div>
      </div>
    </section>

    <!-- Conceptos Clave -->
    <section class="bg-white rounded-xl shadow-lg p-6 my-3">
      <h2 class="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
        Operaciones Clave
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">+</span>
            <h3 class="font-bold text-gray-800">push(elemento)</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Inserta un elemento en el tope de la pila. Incrementa el tamaño en 1.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">X</span>
            <h3 class="font-bold text-gray-800">pop()</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Elimina y retorna el elemento del tope. Lanza error si la pila está vacía.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">E</span>
            <h3 class="font-bold text-gray-800">peek() / top()</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Retorna el elemento del tope sin eliminarlo. Operación de solo lectura.
          </p>
        </div>

        <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex items-center mb-3">
            <span
              class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold mr-3">?</span>
            <h3 class="font-bold text-gray-800">is_empty()</h3>
          </div>
          <p class="text-gray-600 text-sm">
            Verifica si la pila no contiene elementos. Retorna True o False.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplo 1: Operaciones Básicas -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 1: Implementación Completa con Todas las Operaciones
      </h2>
      <p class="text-gray-700 mb-4">
        Clase Pila con todas las operaciones fundamentales implementadas, incluyendo manejo de errores
        y métodos auxiliares para mayor funcionalidad.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo1Code" />
      </div>
    </section>

    <!-- Ejemplo 2: Evaluación de Expresiones Postfijas -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 2: Evaluación de Expresiones Postfijas (Notación Polaca Inversa)
      </h2>
      <p class="text-gray-700 mb-4">
        Aplicación práctica de pilas para evaluar expresiones matemáticas en notación postfija,
        donde los operadores siguen a sus operandos.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo2Code" />
      </div>
    </section>

    <!-- Ejemplo 3: Conversión Infijo a Postfijo -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">
        Ejemplo 3: Conversión de Expresiones Infijas a Postfijas
      </h2>
      <p class="text-gray-700 mb-4">
        Algoritmo que utiliza pilas para convertir expresiones matemáticas de notación infija
        (operador entre operandos) a notación postfija.
      </p>
      <div class="rounded-lg overflow-hidden border border-gray-300">
        <PythonRunner :code="ejemplo3Code" />
      </div>
    </section>

    <!-- Ejercicio Práctico -->
    <section class="bg-white rounded-xl shadow-lg p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">
          Ejercicio Práctico: Simulador de Llamadas a Función
        </h2>
        <button @click="mostrarSolucion = !mostrarSolucion"
          class="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1 rounded">
          {{ mostrarSolucion ? 'Ocultar' : 'Mostrar' }} Solución
        </button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p class="text-gray-700 mb-3">
          <strong>Problema:</strong> Las pilas se usan para gestionar llamadas a funciones en los lenguajes de
          programación.
          Implementa un simulador que trace la ejecución de funciones anidadas.
        </p>

        <div class="text-sm text-gray-600 space-y-2">
          <p><strong>Requisitos:</strong></p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Cuando se llama a una función, se apila en la pila de ejecución</li>
            <li>Cuando una función termina, se desapila (pop)</li>
            <li>Mostrar el estado de la pila en cada paso</li>
            <li>Simular funciones que llaman a otras funciones (anidamiento)</li>
            <li>Manejar funciones recursivas</li>
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
    <QuizQuestions :preguntas="preguntas" titulo="Quiz descripción y características"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/2.1.1" siguiente="/Unidad/2.1.3" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad II • Pilas y Colas" mostrarAnterior="true"
      mostrarSiguiente="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Estado para mostrar solución
const mostrarSolucion = ref(false)

// Ejemplos de código Python
const ejemplo1Code = `# Implementación completa de pila con todas las operaciones
class Pila:
    def __init__(self):
        """Inicializa una pila vacía"""
        self.elementos = []
    
    def push(self, elemento):
        """
        Añade un elemento al tope de la pila.
        
        Args:
            elemento: Elemento a añadir
        """
        self.elementos.append(elemento)
        print(f"push({elemento}) -> Pila: {self.elementos}")
    
    def pop(self):
        """
        Elimina y retorna el elemento del tope de la pila.
        
        Returns:
            El elemento del tope
            
        Raises:
            IndexError: Si la pila está vacía
        """
        if self.is_empty():
            raise IndexError("pop from empty stack")
        
        elemento = self.elementos.pop()
        print(f"pop() -> {elemento} | Pila: {self.elementos}")
        return elemento
    
    def peek(self):
        """
        Retorna el elemento del tope sin eliminarlo.
        
        Returns:
            El elemento del tope o None si está vacía
        """
        if self.is_empty():
            return None
        return self.elementos[-1]
    
    def is_empty(self):
        """
        Verifica si la pila está vacía.
        
        Returns:
            bool: True si está vacía, False en caso contrario
        """
        return len(self.elementos) == 0
    
    def size(self):
        """
        Retorna el número de elementos en la pila.
        
        Returns:
            int: Tamaño de la pila
        """
        return len(self.elementos)
    
    def clear(self):
        """Elimina todos los elementos de la pila"""
        self.elementos.clear()
        print("clear() -> Pila vaciada")
    
    def __str__(self):
        """Representación en string de la pila"""
        return f"Pila({self.elementos})"
    
    def __len__(self):
        """Permite usar len(pila)"""
        return self.size()

# Demostración de todas las operaciones
print("=== EJEMPLO 1: OPERACIONES COMPLETAS ===\\n")

# Crear pila
pila = Pila()
print(f"Pila creada: {pila}")
print(f"¿Está vacía? {pila.is_empty()}\\n")

# Operaciones push
print("--- Operaciones push ---")
pila.push(10)
pila.push(20)
pila.push(30)
print(f"Tamaño actual: {pila.size()}\\n")

# Operación peek
print("--- Operación peek ---")
tope = pila.peek()
print(f"Elemento en el tope (peek): {tope}")
print(f"Tamaño después de peek: {pila.size()}\\n")

# Operaciones pop
print("--- Operaciones pop ---")
elemento1 = pila.pop()
elemento2 = pila.pop()
print(f"Elementos extraídos: {elemento1}, {elemento2}")
print(f"Tamaño después de pops: {pila.size()}\\n")

# Verificar estado
print("--- Estado final ---")
print(f"Pila: {pila}")
print(f"¿Está vacía? {pila.is_empty()}")
print(f"Último peek: {pila.peek()}")

# Probar pop en pila vacía (manejo de error)
print("\\n--- Probar error en pila vacía ---")
try:
    pila.clear()
    print(f"Pila después de clear: {pila}")
    pila.pop()  # Esto debería lanzar error
except IndexError as e:
    print(f"Error esperado: {e}")`

const ejemplo2Code = `# Evaluación de expresiones postfijas (Notación Polaca Inversa)
def evaluar_postfija(expresion):
    """
    Evalúa una expresión matemática en notación postfija usando una pila.
    
    Args:
        expresion (str): Expresión en notación postfija (ej: "3 4 + 2 *")
    
    Returns:
        float: Resultado de la evaluación
    
    Ejemplo:
        "3 4 + 2 *" -> (3 + 4) * 2 = 14
    """
    pila = []
    tokens = expresion.split()
    
    print(f"Evaluando expresión: {expresion}")
    print(f"Tokens: {tokens}\\n")
    
    for i, token in enumerate(tokens, 1):
        print(f"Paso {i}: Token '{token}'")
        
        if token.replace('.', '', 1).isdigit() or (token[0] == '-' and token[1:].replace('.', '', 1).isdigit()):
            # Es un número
            numero = float(token) if '.' in token else int(token)
            pila.append(numero)
            print(f"  push({numero}) -> Pila: {pila}")
        
        else:
            # Es un operador
            if len(pila) < 2:
                raise ValueError(f"Expresión inválida: faltan operandos para '{token}'")
            
            # Extraer operandos (el último en entrar es el segundo operando)
            b = pila.pop()
            a = pila.pop()
            
            # Realizar operación
            if token == '+':
                resultado = a + b
                print(f"  {a} + {b} = {resultado}")
            elif token == '-':
                resultado = a - b
                print(f"  {a} - {b} = {resultado}")
            elif token == '*':
                resultado = a * b
                print(f"  {a} * {b} = {resultado}")
            elif token == '/':
                if b == 0:
                    raise ZeroDivisionError("División por cero")
                resultado = a / b
                print(f"  {a} / {b} = {resultado}")
            elif token == '^':
                resultado = a ** b
                print(f"  {a} ^ {b} = {resultado}")
            else:
                raise ValueError(f"Operador no válido: '{token}'")
            
            # Apilar resultado
            pila.append(resultado)
            print(f"  push({resultado}) -> Pila: {pila}")
        
        print()
    
    # Resultado final debe ser el único elemento en la pila
    if len(pila) != 1:
        raise ValueError("Expresión inválida: demasiados operandos")
    
    resultado_final = pila.pop()
    print(f"Resultado final: {resultado_final}")
    return resultado_final

# Demostración
print("=== EJEMPLO 2: EVALUACIÓN POSTFIJA ===\\n")

# Expresiones de prueba
expresiones = [
    "3 4 +",           # 3 + 4 = 7
    "5 1 2 + 4 * +",   # 5 + ((1 + 2) * 4) = 17
    "3 4 + 2 *",       # (3 + 4) * 2 = 14
    "10 2 / 3 +",      # (10 / 2) + 3 = 8
    "2 3 ^ 4 +",       # (2^3) + 4 = 12
]

for expr in expresiones:
    print("=" * 50)
    try:
        resultado = evaluar_postfija(expr)
        print(f"\\nExpresión: {expr} = {resultado}")
    except Exception as e:
        print(f"\\nError evaluando '{expr}': {e}")
    print()

# Expresión más compleja
print("\\n" + "="*50)
print("Expresión compleja: '3 4 2 * 1 5 - 2 3 ^ ^ / +'")
print("Equivalente a: 3 + (4 * 2) / (1 - 5) ^ (2 ^ 3)")
try:
    resultado = evaluar_postfija("3 4 2 * 1 5 - 2 3 ^ ^ / +")
    print(f"Resultado: {resultado}")
except Exception as e:
    print(f"Error: {e}")`

const ejemplo3Code = `# Conversión de notación infija a postfija (Algoritmo de Shunting-yard)
def infijo_a_postfijo(expresion_infija):
    """
    Convierte una expresión infija a notación postfija usando el algoritmo shunting-yard.
    
    Args:
        expresion_infija (str): Expresión en notación infija (ej: "3 + 4 * 2")
    
    Returns:
        str: Expresión en notación postfija
    
    Precedencia de operadores:
        ^ (exponenciación) -> mayor
        * /                 -> medio  
        + -                 -> menor
    """
    # Diccionario de precedencia de operadores
    precedencia = {'^': 3, '*': 2, '/': 2, '+': 1, '-': 1}
    
    # Pila para operadores
    pila_operadores = []
    
    # Lista para la salida postfija
    salida = []
    
    # Separar tokens (simplificado)
    tokens = expresion_infija.replace('(', ' ( ').replace(')', ' ) ').replace('+', ' + ')\\
                            .replace('-', ' - ').replace('*', ' * ').replace('/', ' / ')\\
                            .replace('^', ' ^ ').split()
    
    print(f"Expresión infija: {expresion_infija}")
    print(f"Tokens: {tokens}\\n")
    print("Paso a paso de la conversión:")
    print("-" * 60)
    
    for i, token in enumerate(tokens, 1):
        print(f"\\nPaso {i}: Token '{token}'")
        
        if token.replace('.', '', 1).isdigit():
            # Es un número, va directo a la salida
            salida.append(token)
            print(f"  Número -> Salida: {salida}")
        
        elif token == '(':
            # Paréntesis izquierdo, va a la pila
            pila_operadores.append(token)
            print(f"  '(' -> Pila: {pila_operadores}")
        
        elif token == ')':
            # Paréntesis derecho, vaciar pila hasta encontrar '('
            print(f"  ')' encontrado, vaciando pila hasta '('")
            while pila_operadores and pila_operadores[-1] != '(':
                salida.append(pila_operadores.pop())
                print(f"    pop -> Salida: {salida}")
            
            if pila_operadores and pila_operadores[-1] == '(':
                pila_operadores.pop()  # Eliminar '('
                print(f"    '(' eliminado -> Pila: {pila_operadores}")
        
        elif token in precedencia:
            # Es un operador
            print(f"  Operador '{token}' (precedencia: {precedencia[token]})")
            
            while (pila_operadores and pila_operadores[-1] != '(' and
                   precedencia.get(pila_operadores[-1], 0) >= precedencia[token]):
                
                # Considerar asociatividad izquierda (excepto ^ que es derecha)
                if token == '^' and pila_operadores[-1] == '^':
                    break  # ^ es asociativo por la derecha
                
                salida.append(pila_operadores.pop())
                print(f"    pop -> Salida: {salida}")
            
            pila_operadores.append(token)
            print(f"  push -> Pila: {pila_operadores}")
        
        else:
            raise ValueError(f"Token no válido: '{token}'")
        
        print(f"  Estado actual - Salida: {salida}, Pila: {pila_operadores}")
    
    # Vaciar operadores restantes de la pila
    print("\\n" + "-"*60)
    print("Vaciando operadores restantes de la pila:")
    while pila_operadores:
        if pila_operadores[-1] == '(':
            raise ValueError("Paréntesis desbalanceados")
        salida.append(pila_operadores.pop())
        print(f"  pop -> Salida: {salida}")
    
    # Unir la salida en una cadena
    expresion_postfija = ' '.join(salida)
    print(f"\\nExpresión postfija final: {expresion_postfija}")
    return expresion_postfija

# Demostración
print("=== EJEMPLO 3: CONVERSIÓN INFIJO A POSTFIJO ===\\n")

# Expresiones de prueba
expresiones = [
    "3 + 4",
    "3 + 4 * 2",
    "(3 + 4) * 2",
    "3 + 4 * 2 / (1 - 5)",
    "3 + 4 * 2 / (1 - 5) ^ 2 ^ 3",
    "a + b * c - d / e",
]

for expr in expresiones:
    print("="*60)
    try:
        postfija = infijo_a_postfijo(expr)
        print(f"\\nResumen: '{expr}' -> '{postfija}'")
    except Exception as e:
        print(f"\\nError convirtiendo '{expr}': {e}")
    print()

# Verificación con evaluación
print("="*60)
print("\\nVerificación con evaluación numérica:")
infija = "(3 + 4) * 2"
print(f"Expresión infija: {infija}")

# Convertir a postfija
postfija = infijo_a_postfijo(infija)
print(f"Expresión postfija: {postfija}")

# Evaluar ambas (necesitaríamos la función evaluar_postfija del ejemplo anterior)
print("\\nNota: Para evaluar la expresión postfija, usar la función del Ejemplo 2")`

// Solución del ejercicio práctico
const ejercicioSolucion = `# Simulador de Llamadas a Función usando Pilas
class SimuladorFunciones:
    def __init__(self):
        """Inicializa el simulador con una pila de llamadas vacía"""
        self.pila_llamadas = []  # Pila para rastrear llamadas a funciones
        self.contador_llamadas = 0  # Contador único para cada llamada
    
    def llamar_funcion(self, nombre_funcion, parametros=None):
        """
        Simula la llamada a una función.
        
        Args:
            nombre_funcion (str): Nombre de la función
            parametros (dict): Parámetros de la función (opcional)
        """
        self.contador_llamadas += 1
        id_llamada = self.contador_llamadas
        
        # Crear registro de la llamada
        llamada = {
            'id': id_llamada,
            'nombre': nombre_funcion,
            'parametros': parametros or {},
            'hijos': []  # Funciones llamadas desde esta
        }
        
        # Si hay una función en ejecución, registrar como hija
        if self.pila_llamadas:
            funcion_actual = self.pila_llamadas[-1]
            funcion_actual['hijos'].append(llamada)
        
        # Apilar la nueva llamada
        self.pila_llamadas.append(llamada)
        
        print(f"→ Llamada #{id_llamada}: {nombre_funcion}({parametros or ''})")
        self.mostrar_pila()
    
    def retornar_funcion(self):
        """Simula el retorno de una función (fin de ejecución)"""
        if not self.pila_llamadas:
            print("Error: No hay funciones en ejecución")
            return
        
        # Desapilar la función actual
        funcion = self.pila_llamadas.pop()
        
        print(f"← Retorno #{funcion['id']}: {funcion['nombre']}")
        
        # Mostrar árbol de llamadas para esta función
        if funcion['hijos']:
            print(f"   Llamó a: {[h['nombre'] for h in funcion['hijos']]}")
        
        self.mostrar_pila()
    
    def mostrar_pila(self):
        """Muestra el estado actual de la pila de llamadas"""
        if not self.pila_llamadas:
            print("   Pila de llamadas: []")
            return
        
        # Mostrar pila de forma visual
        print("   Pila de llamadas (tope arriba):")
        for i, llamada in enumerate(reversed(self.pila_llamadas)):
            indent = "   " * i
            print(f"   {indent}└─ {llamada['nombre']}#{llamada['id']}")
        print()
    
    def ejecutar_script(self, script):
        """
        Ejecuta un script predefinido de llamadas a funciones.
        
        Args:
            script (list): Lista de comandos ('llamar' o 'retornar')
        """
        print("=== SIMULACIÓN DE LLAMADAS A FUNCIONES ===\\n")
        
        for comando in script:
            if comando[0] == 'llamar':
                self.llamar_funcion(comando[1], comando[2] if len(comando) > 2 else None)
            elif comando[0] == 'retornar':
                self.retornar_funcion()

# Función recursiva de ejemplo (Fibonacci)
def simulacion_recursiva():
    """Simula una función recursiva (Fibonacci)"""
    print("\\n=== SIMULACIÓN RECURSIVA (Fibonacci) ===\\n")
    
    simulador = SimuladorFunciones()
    
    # Script que simula fib(4)
    script = [
        ['llamar', 'fib', {'n': 4}],
        ['llamar', 'fib', {'n': 3}],
        ['llamar', 'fib', {'n': 2}],
        ['llamar', 'fib', {'n': 1}],
        ['retornar'],
        ['llamar', 'fib', {'n': 0}],
        ['retornar'],
        ['retornar'],
        ['llamar', 'fib', {'n': 1}],
        ['retornar'],
        ['retornar'],
        ['llamar', 'fib', {'n': 2}],
        ['llamar', 'fib', {'n': 1}],
        ['retornar'],
        ['llamar', 'fib', {'n': 0}],
        ['retornar'],
        ['retornar'],
        ['retornar'],
    ]
    
    simulador.ejecutar_script(script)

# Función anidada de ejemplo
def simulacion_anidada():
    """Simula funciones que llaman a otras funciones"""
    print("\\n=== SIMULACIÓN ANIDADA ===\\n")
    
    simulador = SimuladorFunciones()
    
    # Script con funciones anidadas
    script = [
        ['llamar', 'main'],
        ['llamar', 'procesar_datos'],
        ['llamar', 'validar_entrada'],
        ['retornar'],
        ['llamar', 'calcular_resultado'],
        ['llamar', 'sumar'],
        ['retornar'],
        ['llamar', 'multiplicar'],
        ['retornar'],
        ['retornar'],
        ['llamar', 'mostrar_resultado'],
        ['retornar'],
        ['retornar'],
    ]
    
    simulador.ejecutar_script(script)

# Ejecutar demostraciones
if __name__ == "__main__":
    # Demostración básica
    print("=== SISTEMA DE LLAMADAS A FUNCIÓN ===\\n")
    
    simulador = SimuladorFunciones()
    
    # Script de ejemplo
    script = [
        ['llamar', 'main'],
        ['llamar', 'funcionA'],
        ['retornar'],
        ['llamar', 'funcionB'],
        ['llamar', 'funcionC'],
        ['retornar'],
        ['retornar'],
        ['retornar'],
    ]
    
    simulador.ejecutar_script(script)
    
    # Ejecutar simulaciones adicionales
    simulacion_anidada()
    simulacion_recursiva()`

// Quiz
const preguntas = [
  {
    texto: "¿Qué operación agrega un elemento a una pila?",
    opciones: [
      { texto: "pop", correcta: false },
      { texto: "push", correcta: true },
      { texto: "peek", correcta: false },
      { texto: "dequeue", correcta: false }
    ]
  },
  {
    texto: "¿Qué operación elimina el elemento superior de una pila?",
    opciones: [
      { texto: "push", correcta: false },
      { texto: "remove", correcta: false },
      { texto: "pop", correcta: true },
      { texto: "insert", correcta: false }
    ]
  },
  {
    texto: "¿Para qué sirve la operación peek (o top)?",
    opciones: [
      { texto: "Eliminar el elemento superior", correcta: false },
      { texto: "Ver el elemento superior sin eliminarlo", correcta: true },
      { texto: "Vaciar la pila", correcta: false },
      { texto: "Agregar un elemento", correcta: false }
    ]
  }
]


</script>