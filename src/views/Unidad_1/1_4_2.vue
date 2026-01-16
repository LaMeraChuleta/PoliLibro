<template>
  <div class="container mx-auto px-4 py-6">
    <HeaderTitle numero="1.4" titulo="1.4.2 Valores HASH">
      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los <strong class="text-yellow-600">valores hash</strong> son números enteros únicos que Python genera
          para cada objeto. Son la base del funcionamiento eficiente de diccionarios y conjuntos,
          permitiendo búsquedas en tiempo constante O(1).
        </p>
        <p class="text-gray-700">
          Cada clave en un diccionario debe ser un objeto <strong>hashable</strong> (inmutable),
          lo que garantiza que su hash no cambie durante la vida del diccionario.
        </p>
      </div>
    </HeaderTitle>


    <!-- Características principales -->
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <div class="w-12 h-12 bg-yellow-500 text-white rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-fingerprint text-xl"></i>
        </div>
        <h3 class="text-lg font-bold text-yellow-800 mb-2">Identificador Único</h3>
        <p class="text-yellow-700 text-sm">Cada objeto tiene un hash distinto</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-5">
        <div class="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-bolt text-xl"></i>
        </div>
        <h3 class="text-lg font-bold text-green-800 mb-2">Búsqueda Rápida</h3>
        <p class="text-green-700 text-sm">Acceso O(1) usando hash como índice</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-5">
        <div class="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center mb-4">
          <i class="fas fa-lock text-xl"></i>
        </div>
        <h3 class="text-lg font-bold text-red-800 mb-2">Inmutabilidad</h3>
        <p class="text-red-700 text-sm">Solo objetos inmutables son hashables</p>
      </div>
    </div>

    <!-- Explicación visual del proceso hash -->
    <div class="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 text-center">Proceso de Hashing</h3>
      <div class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
        <div class="text-center">
          <div class="mb-2 font-medium text-blue-600">Clave</div>
          <div class="w-24 h-24 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="font-bold text-lg">"nombre"</div>
              <div class="text-sm text-blue-600">string</div>
            </div>
          </div>
        </div>

        <div class="text-gray-400">
          <i class="fas fa-arrow-right text-2xl"></i>
        </div>

        <div class="text-center">
          <div class="mb-2 font-medium text-green-600">Función hash()</div>
          <div class="w-24 h-24 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="font-bold text-lg">hash()</div>
              <div class="text-sm text-green-600">función</div>
            </div>
          </div>
        </div>

        <div class="text-gray-400">
          <i class="fas fa-arrow-right text-2xl"></i>
        </div>

        <div class="text-center">
          <div class="mb-2 font-medium text-purple-600">Valor Hash</div>
          <div class="w-24 h-24 bg-purple-100 border-2 border-purple-300 rounded-lg flex items-center justify-center">
            <div class="text-center">
              <div class="font-bold text-lg">-841182801</div>
              <div class="text-sm text-purple-600">entero único</div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-gray-600 mt-6">El hash se usa como índice interno para acceso rápido</p>
    </div>

    <!-- Tabla de tipos hashables vs no hashables -->
    <div class="mb-8 p-6 bg-gray-50 rounded-xl">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Tipos hashables vs no hashables</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Tipo</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Hashable</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Razón</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Ejemplo de clave</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-green-50">
              <td class="py-3 px-4 border-b font-medium">String</td>
              <td class="py-3 px-4 border-b"><span
                  class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span></td>
              <td class="py-3 px-4 border-b">Inmutable</td>
              <td class="py-3 px-4 border-b font-mono">"nombre"</td>
            </tr>
            <tr class="hover:bg-green-50">
              <td class="py-3 px-4 border-b font-medium">Entero</td>
              <td class="py-3 px-4 border-b"><span
                  class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí</span></td>
              <td class="py-3 px-4 border-b">Inmutable</td>
              <td class="py-3 px-4 border-b font-mono">42</td>
            </tr>
            <tr class="hover:bg-green-50">
              <td class="py-3 px-4 border-b font-medium">Tupla</td>
              <td class="py-3 px-4 border-b"><span
                  class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Sí*</span></td>
              <td class="py-3 px-4 border-b">Inmutable si todos sus elementos son hashables</td>
              <td class="py-3 px-4 border-b font-mono">(1, "a", True)</td>
            </tr>
            <tr class="hover:bg-red-50">
              <td class="py-3 px-4 border-b font-medium">Lista</td>
              <td class="py-3 px-4 border-b"><span
                  class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span></td>
              <td class="py-3 px-4 border-b">Mutable (puede cambiar)</td>
              <td class="py-3 px-4 border-b font-mono text-red-600">[1, 2, 3] ✗</td>
            </tr>
            <tr class="hover:bg-red-50">
              <td class="py-3 px-4 font-medium">Diccionario</td>
              <td class="py-3 px-4"><span class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">No</span></td>
              <td class="py-3 px-4">Mutable</td>
              <td class="py-3 px-4 font-mono text-red-600">{"a": 1} ✗</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-gray-500 mt-2">*Las tuplas son hashables solo si todos sus elementos son hashables</p>
    </div>

    <!-- Ejemplo 1: Funcion hash() básica -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Uso básico de hash()</h3>
      <PythonRunner :code="ejemplo1Code" title="hash_basico.py" :showLineNumbers="true" initialHeight="240px" />
    </div>

    <!-- Ejemplo 2: Tipos hashables vs no hashables -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Verificación de hashabilidad</h3>
      <PythonRunner :code="ejemplo2Code" title="hashabilidad.py" :showLineNumbers="true" initialHeight="260px" />
    </div>

    <!-- Ejemplo 3: Sistema de cache con hash -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de caché usando hash</h3>
      <p class="text-gray-700 mb-4">
        Los valores hash permiten crear sistemas de caché eficientes:
      </p>
      <PythonRunner :code="ejemplo3Code" title="cache_sistema.py" :showLineNumbers="true" initialHeight="280px" />
    </div>

    <!-- Ejercicio práctico -->
    <div class="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Validación de claves</h3>
      <p class="text-gray-700 mb-4">
        <strong>Situación:</strong> Crea un sistema que valide si diferentes tipos de datos pueden ser usados como
        claves en diccionarios.
      </p>

      <PythonRunner :code="ejercicioCode" title="validacion_claves.py" :showLineNumbers="true" initialHeight="250px"
        :showReset="true" :showSolution="true" :solutionCode="solucionCode" />
    </div>

    <!-- Colisiones de hash -->
    <div class="mb-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">⚠️ Colisiones de Hash</h3>
      <div class="space-y-4">
        <div class="flex items-start">
          <div class="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div>
            <h4 class="font-medium text-gray-800">¿Qué es una colisión?</h4>
            <p class="text-gray-700 text-sm">Ocurre cuando dos objetos diferentes generan el mismo valor hash. Python
              maneja esto internamente, pero reduce el rendimiento.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div
            class="w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <i class="fas fa-balance-scale"></i>
          </div>
          <div>
            <h4 class="font-medium text-gray-800">Igualdad vs Hash</h4>
            <p class="text-gray-700 text-sm">Si <code class="bg-gray-800 text-yellow-300 px-1 rounded">a == b</code>,
              entonces <code class="bg-gray-800 text-yellow-300 px-1 rounded">hash(a) == hash(b)</code>. Lo contrario no
              siempre es cierto (colisiones).</p>
          </div>
        </div>
        <div class="flex items-start">
          <div
            class="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div>
            <h4 class="font-medium text-gray-800">Inmutabilidad crítica</h4>
            <p class="text-gray-700 text-sm">Si un objeto cambia después de ser usado como clave, su hash cambiaría y
              sería imposible encontrarlo en el diccionario.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quiz funcional -->    
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de valores hash"></QuizQuestions>
  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

// Códigos de ejemplo (seguros, sin caracteres problemáticos)
const ejemplo1Code = `# Uso básico de la función hash()

print("=== VALORES HASH DE DIFERENTES OBJETOS ===")

# Strings
nombre = "Python"
print(f"hash('{nombre}'): {hash(nombre)}")

# Números
numero = 42
print(f"hash({numero}): {hash(numero)}")

# Tuplas (hashables si todos sus elementos son hashables)
tupla = (1, 2, 3)
print(f"hash({tupla}): {hash(tupla)}")

# Floats
decimal = 3.14159
print(f"hash({decimal}): {hash(decimal)}")

# Booleanos
print(f"hash(True): {hash(True)}")
print(f"hash(False): {hash(False)}")

print("\\n=== PROPIEDADES DEL HASH ===")

# Mismo valor = mismo hash
a = "hola"
b = "hola"
print(f"hash('{a}') == hash('{b}'): {hash(a) == hash(b)}")
print(f"'{a}' == '{b}': {a == b}")

# Hash constante para un objeto inmutable
texto = "constante"
hash1 = hash(texto)
hash2 = hash(texto)
print(f"\\nHash constante para string '{texto}':")
print(f"Primer hash: {hash1}")
print(f"Segundo hash: {hash2}")
print(f"Son iguales: {hash1 == hash2}")

# Hash en diferentes ejecuciones (puede variar)
print("\\n⚠️ NOTA: El hash puede cambiar entre ejecuciones de Python")
print("(Hash randomization por seguridad)")`

const ejemplo2Code = `# Verificación de hashabilidad

print("=== VERIFICANDO HASHABILIDAD ===")

def es_hashable(objeto):
    """Intenta calcular el hash de un objeto"""
    try:
        hash(objeto)
        return True
    except TypeError:
        return False

# Objetos HASHABLES (inmutables)
print("\\n✅ OBJETOS HASHABLES:")
objetos_hashables = [
    "texto",            # String
    123,                # Entero
    3.14,               # Float
    True,               # Booleano
    (1, 2, 3),          # Tupla con elementos hashables
    frozenset([1, 2, 3]) # Conjunto congelado (inmutable)
]

for obj in objetos_hashables:
    resultado = "✅" if es_hashable(obj) else "❌"
    print(f"{resultado} {type(obj).__name__}: {obj}")

# Objetos NO HASHABLES (mutables)
print("\\n❌ OBJETOS NO HASHABLES:")
objetos_no_hashables = [
    [1, 2, 3],          # Lista
    {"a": 1, "b": 2},   # Diccionario
    {1, 2, 3},          # Conjunto
    bytearray(b"abc")   # Bytearray mutable
]

for obj in objetos_no_hashables:
    resultado = "✅" if es_hashable(obj) else "❌"
    print(f"{resultado} {type(obj).__name__}: {obj}")

# Caso especial: tupla con elementos no hashables
print("\\n🔍 CASO ESPECIAL - Tupla con lista:")
tupla_con_lista = ([1, 2], 3)
try:
    h = hash(tupla_con_lista)
    print(f"✅ Tupla con lista: hash = {h}")
except TypeError as e:
    print(f"❌ Tupla con lista: {e}")

# Verificación para uso en diccionarios
print("\\n🔑 USO COMO CLAVES EN DICCIONARIOS:")
claves_validas = ["nombre", 101, (1, 2)]
claves_invalidas = [[1, 2], {"clave": "valor"}]

print("Claves válidas:")
for clave in claves_validas:
    if es_hashable(clave):
        print(f"  ✓ Puede usarse: {type(clave).__name__}")

print("\\nClaves inválidas:")
for clave in claves_invalidas:
    if not es_hashable(clave):
        print(f"  ✗ No puede usarse: {type(clave).__name__}")`

const ejemplo3Code = `# Sistema de caché usando hash

class Cache:
    """Sistema de caché simple usando hash para claves"""
    
    def __init__(self):
        self.cache = {}
        self.llamadas = 0
        self.aciertos = 0
    
    def calcular_hash_clave(self, *args, **kwargs):
        """Calcula un hash único para los argumentos de una función"""
        # Crear una tupla con todos los argumentos
        clave = (args, tuple(sorted(kwargs.items())))
        return hash(clave)
    
    def memoize(self, func):
        """Decorador para cachear resultados de funciones"""
        def wrapper(*args, **kwargs):
            self.llamadas += 1
            
            # Calcular hash de los argumentos
            clave_hash = self.calcular_hash_clave(*args, **kwargs)
            
            # Verificar si ya está en caché
            if clave_hash in self.cache:
                self.aciertos += 1
                print(f"✓ CACHE HIT (hash: {clave_hash})")
                return self.cache[clave_hash]
            
            # Calcular y almacenar en caché
            print(f"✗ CACHE MISS (hash: {clave_hash})")
            resultado = func(*args, **kwargs)
            self.cache[clave_hash] = resultado
            
            return resultado
        
        return wrapper
    
    def estadisticas(self):
        """Muestra estadísticas del caché"""
        total = self.llamadas
        tasa_acierto = (self.aciertos / total * 100) if total > 0 else 0
        
        print("\\n📊 ESTADÍSTICAS DEL CACHÉ:")
        print(f"Total llamadas: {total}")
        print(f"Aciertos en caché: {self.aciertos}")
        print(f"Tasa de acierto: {tasa_acierto:.1f}%")
        print(f"Elementos en caché: {len(self.cache)}")

# ========== USO DEL SISTEMA ==========
print("⚡ SISTEMA DE CACHÉ USANDO HASH")
print("=" * 40)

# Crear caché
cache_sistema = Cache()

# Función costosa para cachear
@cache_sistema.memoize
def calcular_fibonacci(n):
    """Calcula el n-ésimo número de Fibonacci (recursivo costoso)"""
    if n <= 1:
        return n
    return calcular_fibonacci(n - 1) + calcular_fibonacci(n - 2)

# Función con múltiples parámetros
@cache_sistema.memoize
def potencia(base, exponente):
    """Calcula base^exponente"""
    return base ** exponente

print("\\n🔢 CALCULANDO FIBONACCI (con caché):")
# Primera vez: cálculo real
print(f"Fibonacci(10) = {calcular_fibonacci(10)}")

# Segunda vez: desde caché
print(f"Fibonacci(10) = {calcular_fibonacci(10)}")

# Tercera vez: desde caché
print(f"Fibonacci(10) = {calcular_fibonacci(10)}")

print("\\n🔢 CALCULANDO POTENCIAS (con caché):")
print(f"2^10 = {potencia(2, 10)}")
print(f"2^10 = {potencia(2, 10)}")  # Desde caché
print(f"3^5 = {potencia(3, 5)}")
print(f"3^5 = {potencia(3, 5)}")    # Desde caché

# Mostrar estadísticas
cache_sistema.estadisticas()

# Mostrar hashes almacenados
print("\\n🔑 HASHES EN CACHÉ:")
for hash_clave in list(cache_sistema.cache.keys())[:3]:  # Mostrar solo 3
    print(f"  Hash: {hash_clave}")`

const ejercicioCode = `# EJERCICIO: Validación de claves para diccionarios

# Lista de objetos para probar como claves
objetos_a_probar = [
    "nombre",           # string
    42,                 # int
    [1, 2, 3],          # lista
    {"a": 1},           # diccionario
    (1, 2, 3),          # tupla
    {1, 2, 3},          # conjunto
    True,               # bool
    3.14,               # float
    (1, [2, 3]),        # tupla con lista
    frozenset([1, 2, 3]) # frozenset
]

# INSTRUCCIONES:
# 1. Crea una función que determine si un objeto puede ser clave
#    def puede_ser_clave(objeto):

# 2. Para cada objeto en la lista, intenta crear un diccionario
#    usando ese objeto como clave

# 3. Clasifica los objetos en válidos e inválidos

# 4. Explica por qué cada objeto es válido o inválido

print("Validación de Claves para Diccionarios")
print("=" * 50)

print("\\n📋 RESULTADOS DE VALIDACIÓN:")
# Mostrar resultados de validación

print("\\n✅ OBJETOS VÁLIDOS:")
# Mostrar objetos válidos

print("\\n❌ OBJETOS INVÁLIDOS:")
# Mostrar objetos inválidos

print("\\n📝 EXPLICACIÓN:")
# Mostrar explicaciones`

const solucionCode = `# SOLUCIÓN: Validación de claves para diccionarios

objetos_a_probar = [
    "nombre",           # string
    42,                 # int
    [1, 2, 3],          # lista
    {"a": 1},           # diccionario
    (1, 2, 3),          # tupla
    {1, 2, 3},          # conjunto
    True,               # bool
    3.14,               # float
    (1, [2, 3]),        # tupla con lista
    frozenset([1, 2, 3]) # frozenset
]

def puede_ser_clave(objeto):
    """Determina si un objeto puede ser usado como clave en diccionario"""
    try:
        # Intentar usar como clave
        d = {}
        d[objeto] = "valor_prueba"
        return True
    except TypeError:
        return False

def explicar_hashabilidad(objeto):
    """Explica por qué un objeto es o no hashable"""
    tipo = type(objeto).__name__
    
    if tipo == "str":
        return "Strings son inmutables, por lo tanto hashables"
    elif tipo == "int":
        return "Enteros son inmutables, por lo tanto hashables"
    elif tipo == "list":
        return "Listas son mutables, NO hashables"
    elif tipo == "dict":
        return "Diccionarios son mutables, NO hashables"
    elif tipo == "tuple":
        # Verificar si todos los elementos son hashables
        try:
            hash(objeto)
            return "Tupla con todos elementos hashables"
        except:
            return "Tupla con algún elemento no hashable"
    elif tipo == "set":
        return "Conjuntos son mutables, NO hashables (usar frozenset)"
    elif tipo == "bool":
        return "Booleanos son inmutables, hashables"
    elif tipo == "float":
        return "Floats son inmutables, hashables"
    elif tipo == "frozenset":
        return "Frozenset es conjunto inmutable, hashable"
    else:
        return f"Tipo {tipo}: verificar inmutabilidad"

# Clasificar objetos
validos = []
invalidos = []

for obj in objetos_a_probar:
    if puede_ser_clave(obj):
        validos.append(obj)
    else:
        invalidos.append(obj)

print("Validación de Claves para Diccionarios")
print("=" * 50)

print("\\n📋 RESULTADOS DE VALIDACIÓN:")
for obj in objetos_a_probar:
    resultado = "✅" if puede_ser_clave(obj) else "❌"
    print(f"{resultado} {type(obj).__name__}: {obj}")

print("\\n✅ OBJETOS VÁLIDOS:")
for obj in validos:
    print(f"  • {type(obj).__name__}: {obj}")

print("\\n❌ OBJETOS INVÁLIDOS:")
for obj in invalidos:
    print(f"  • {type(obj).__name__}: {obj}")

print("\\n📝 EXPLICACIÓN:")
for obj in objetos_a_probar:
    print(f"\\n{type(obj).__name__}: {explicar_hashabilidad(obj)}")

# Demostración práctica
print("\\n🔧 DEMOSTRACIÓN PRÁCTICA:")
print("Creando diccionario con claves válidas...")
diccionario_valido = {}
for obj in validos:
    diccionario_valido[obj] = f"valor_para_{type(obj).__name__}"
print(f"Diccionario creado con {len(diccionario_valido)} claves válidas")

# Intentar con inválidos
print("\\nIntentando con claves inválidas...")
for obj in invalidos:
    try:
        diccionario_valido[obj] = "esto_fallará"
        print(f"  ✅ Inesperadamente funcionó: {type(obj).__name__}")
    except TypeError as e:
        print(f"  ❌ Error esperado para {type(obj).__name__}: {e}")`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Por qué las claves de diccionarios deben ser objetos hashables?",
    opciones: [
      { texto: "Para que se puedan ordenar alfabéticamente", correcta: false },
      { texto: "Para garantizar que el hash no cambie, permitiendo búsquedas eficientes", correcta: true },
      { texto: "Para que ocupen menos memoria", correcta: false },
      { texto: "Porque Python no soporta otros tipos", correcta: false }
    ]
  },
  {
    texto: "¿Cuál de estos tipos NO puede usarse como clave en un diccionario?",
    opciones: [
      { texto: "String", correcta: false },
      { texto: "Tupla", correcta: false },
      { texto: "Lista", correcta: true },
      { texto: "Entero", correcta: false }
    ]
  },
  {
    texto: "¿Qué ocurre si usas un objeto mutable como clave y luego lo modificas?",
    opciones: [
      { texto: "El diccionario se actualiza automáticamente", correcta: false },
      { texto: "El hash cambia y no podrás encontrar la clave original", correcta: true },
      { texto: "Python lanza un error inmediatamente", correcta: false },
      { texto: "Nada, sigue funcionando igual", correcta: false }
    ]
  }
]

</script>