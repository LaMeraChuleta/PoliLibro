<template>
  <div class="container mx-auto px-4 py-6">
   <HeaderTitle numero="1.2" titulo="1.2.2 Operaciones sobre listas">
      <!-- Contenido teórico -->
        <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Las listas en Python soportan una variedad de operaciones que permiten manipular sus elementos. 
          Dominar estas operaciones es esencial para trabajar eficientemente con datos en Python.
        </p>
        <p class="text-gray-700">
          Las principales operaciones CRUD (Create, Read, Update, Delete) están disponibles a través 
          de métodos intuitivos que mantienen la flexibilidad y eficiencia de las listas.
        </p>
      </div>
    </HeaderTitle>


      <!-- Operaciones principales en tarjetas -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div class="bg-green-50 border border-green-200 rounded-xl p-4">
          <div class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mb-3">
            <i class="fas fa-plus"></i>
          </div>
          <h3 class="font-bold text-green-800 mb-2">Inserción</h3>
          <p class="text-green-700 text-sm">append(), insert(), extend()</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-xl p-4">
          <div class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center mb-3">
            <i class="fas fa-minus"></i>
          </div>
          <h3 class="font-bold text-red-800 mb-2">Eliminación</h3>
          <p class="text-red-700 text-sm">remove(), pop(), del, clear()</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-3">
            <i class="fas fa-search"></i>
          </div>
          <h3 class="font-bold text-blue-800 mb-2">Búsqueda</h3>
          <p class="text-blue-700 text-sm">index(), count(), in operador</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div class="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center mb-3">
            <i class="fas fa-edit"></i>
          </div>
          <h3 class="font-bold text-yellow-800 mb-2">Actualización</h3>
          <p class="text-yellow-700 text-sm">Asignación directa por índice</p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div class="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-3">
            <i class="fas fa-link"></i>
          </div>
          <h3 class="font-bold text-purple-800 mb-2">Concatenación</h3>
          <p class="text-purple-700 text-sm">+ operador, extend()</p>
        </div>
      </div>

      <!-- Ejemplo 1: Inserción y eliminación -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Inserción y eliminación</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="insercion_eliminacion.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <!-- Ejemplo 2: Búsqueda y actualización -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Búsqueda y actualización</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="busqueda_actualizacion.py"
          :showLineNumbers="true"
          initialHeight="260px"
        />
      </div>

      <!-- Ejemplo 3: Sistema de gestión de tareas -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de gestión de tareas</h3>
        <p class="text-gray-700 mb-4">
          Aplicación práctica: sistema completo de gestión de tareas con todas las operaciones:
        </p>
        <PythonRunner 
          :code="ejemplo3Code"
          title="gestion_tareas.py"
          :showLineNumbers="true"
          initialHeight="320px"
        />
      </div>

      <!-- Ejercicio práctico -->
      <div class="mb-8 p-6 bg-blue-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Gestión de inventario</h3>
        <p class="text-gray-700 mb-4">
          <strong>Situación:</strong> Implementa un sistema de inventario para una tienda usando todas las operaciones de listas.
        </p>
        
        <PythonRunner 
          :code="ejercicioCode"
          title="inventario_tienda.py"
          :showLineNumbers="true"
          initialHeight="280px"
          :showReset="true"
          :showSolution="true"
          :solutionCode="solucionCode"
        />
      </div>

      <!-- Comparación de métodos -->
      <div class="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Comparación de métodos comunes</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Operación</th>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Método</th>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Descripción</th>
                <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Complejidad</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-green-50">
                <td class="py-3 px-4 border-b font-medium">Inserción al final</td>
                <td class="py-3 px-4 border-b font-mono">append(x)</td>
                <td class="py-3 px-4 border-b">Agrega elemento al final</td>
                <td class="py-3 px-4 border-b text-green-600">O(1)</td>
              </tr>
              <tr class="hover:bg-green-50">
                <td class="py-3 px-4 border-b font-medium">Inserción en posición</td>
                <td class="py-3 px-4 border-b font-mono">insert(i, x)</td>
                <td class="py-3 px-4 border-b">Inserta en índice específico</td>
                <td class="py-3 px-4 border-b text-yellow-600">O(n)</td>
              </tr>
              <tr class="hover:bg-red-50">
                <td class="py-3 px-4 border-b font-medium">Eliminación por valor</td>
                <td class="py-3 px-4 border-b font-mono">remove(x)</td>
                <td class="py-3 px-4 border-b">Elimina primera aparición de x</td>
                <td class="py-3 px-4 border-b text-yellow-600">O(n)</td>
              </tr>
              <tr class="hover:bg-red-50">
                <td class="py-3 px-4 border-b font-medium">Eliminación por índice</td>
                <td class="py-3 px-4 border-b font-mono">pop(i)</td>
                <td class="py-3 px-4 border-b">Elimina y retorna elemento en i</td>
                <td class="py-3 px-4 border-b text-yellow-600">O(n)</td>
              </tr>
              <tr class="hover:bg-blue-50">
                <td class="py-3 px-4 font-medium">Búsqueda</td>
                <td class="py-3 px-4 font-mono">index(x)</td>
                <td class="py-3 px-4">Retorna índice de primera aparición</td>
                <td class="py-3 px-4 text-yellow-600">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Quiz funcional -->
      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de operaciones con listas</h3>
        
        <!-- Pregunta 1 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. {{ preguntas[0].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[0].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[0] === index }">
              <input 
                type="radio" 
                :name="'pregunta1'"
                :value="index"
                @change="respuestasSeleccionadas[0] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Pregunta 2 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. {{ preguntas[1].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[1].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[1] === index }">
              <input 
                type="radio" 
                :name="'pregunta2'"
                :value="index"
                @change="respuestasSeleccionadas[1] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Pregunta 3 -->
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">3. {{ preguntas[2].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[2].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
              :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[2] === index }">
              <input 
                type="radio" 
                :name="'pregunta3'"
                :value="index"
                @change="respuestasSeleccionadas[2] = index"
                class="mr-3"
              >
              <span>{{ opcion.texto }}</span>
            </label>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex items-center justify-between">
          <button @click="verificarQuiz" 
                  class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium">
            Verificar respuestas
          </button>
          
          <button @click="reiniciarQuiz" 
                  class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
            Reiniciar quiz
          </button>
        </div>

        <!-- Resultados -->
        <div v-if="mostrarResultados" class="mt-6 p-4 rounded-lg" 
             :class="resultadoClass">
          <p class="font-medium">{{ resultadoMensaje }}</p>
          <p class="text-sm mt-2">Correctas: {{ respuestasCorrectas }}/3</p>
        </div>
      </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"

// Códigos de ejemplo
const ejemplo1Code = `# Inserción y eliminación en listas

# Crear una lista inicial
productos = ["Laptop", "Mouse", "Teclado"]
print("Lista inicial:", productos)

# ========== INSERCIÓN ==========
print("\\n=== INSERCIÓN ===")

# 1. append() - agregar al final
productos.append("Monitor")
print("Después de append('Monitor'):", productos)

# 2. insert() - insertar en posición específica
productos.insert(1, "Tablet")  # Inserta en índice 1
print("Después de insert(1, 'Tablet'):", productos)

# 3. extend() - agregar múltiples elementos
nuevos_productos = ["Impresora", "Router"]
productos.extend(nuevos_productos)
print("Después de extend(['Impresora', 'Router']):", productos)

# ========== ELIMINACIÓN ==========
print("\\n=== ELIMINACIÓN ===")

# 1. remove() - eliminar por valor
productos.remove("Mouse")
print("Después de remove('Mouse'):", productos)

# 2. pop() - eliminar por índice (retorna elemento)
eliminado = productos.pop(2)  # Elimina elemento en índice 2
print(f"Después de pop(2): {productos} (eliminado: {eliminado})")

# 3. del - eliminar por índice o slicing
del productos[0]  # Elimina primer elemento
print("Después de del productos[0]:", productos)

# 4. clear() - vaciar toda la lista
# productos.clear()
# print("Después de clear():", productos)  # Lista vacía`

const ejemplo2Code = `# Búsqueda, actualización y concatenación

estudiantes = ["Ana", "Luis", "Carlos", "Ana", "María", "Pedro"]
print("Lista de estudiantes:", estudiantes)

# ========== BÚSQUEDA ==========
print("\\n=== BÚSQUEDA ===")

# 1. Operador 'in' - verificar existencia
nombre = "Ana"
if nombre in estudiantes:
    print(f"'{nombre}' está en la lista")
else:
    print(f"'{nombre}' NO está en la lista")

# 2. index() - encontrar posición
try:
    posicion = estudiantes.index("Carlos")
    print(f"'Carlos' está en la posición: {posicion}")
except ValueError:
    print("'Carlos' no encontrado")

# 3. count() - contar apariciones
conteo_ana = estudiantes.count("Ana")
print(f"'Ana' aparece {conteo_ana} veces")

# ========== ACTUALIZACIÓN ==========
print("\\n=== ACTUALIZACIÓN ===")

# Actualización directa por índice
estudiantes[1] = "Luis Alberto"  # Actualiza elemento en índice 1
print("Después de estudiantes[1] = 'Luis Alberto':", estudiantes)

# Actualización con slicing
estudiantes[2:4] = ["Carlos Miguel", "Ana Sofía"]
print("Después de estudiantes[2:4] = ['Carlos Miguel', 'Ana Sofía']:", estudiantes)

# ========== CONCATENACIÓN ==========
print("\\n=== CONCATENACIÓN ===")

# 1. Operador +
curso_a = ["Estudiante1", "Estudiante2"]
curso_b = ["Estudiante3", "Estudiante4"]
curso_completo = curso_a + curso_b
print("Concatenación con +:", curso_completo)

# 2. extend() - modifica lista original
curso_a.extend(curso_b)
print("Después de extend():", curso_a)`

const ejemplo3Code = `# Sistema completo de gestión de tareas

# Lista inicial de tareas
tareas = ["Estudiar Python", "Hacer ejercicio", "Comprar víveres"]
print("📋 Sistema de Gestión de Tareas")
print("Tareas iniciales:", tareas)

# ========== FUNCIONES DEL SISTEMA ==========

def mostrar_menu():
    print("\\n=== MENÚ ===")
    print("1. Agregar tarea")
    print("2. Eliminar tarea")
    print("3. Buscar tarea")
    print("4. Actualizar tarea")
    print("5. Mostrar todas las tareas")
    print("6. Salir")

def agregar_tarea():
    nueva = input("Nueva tarea: ")
    tareas.append(nueva)
    print(f"✓ Tarea '{nueva}' agregada")

def eliminar_tarea():
    print("Tareas actuales:", tareas)
    try:
        indice = int(input("Índice a eliminar: "))
        if 0 <= indice < len(tareas):
            eliminada = tareas.pop(indice)
            print(f"✓ Tarea '{eliminada}' eliminada")
        else:
            print("✗ Índice inválido")
    except:
        print("✗ Entrada inválida")

def buscar_tarea():
    buscar = input("Tarea a buscar: ")
    if buscar in tareas:
        posiciones = [i for i, tarea in enumerate(tareas) if tarea == buscar]
        print(f"✓ '{buscar}' encontrada en posiciones: {posiciones}")
    else:
        print(f"✗ '{buscar}' no encontrada")

def actualizar_tarea():
    print("Tareas actuales:", tareas)
    try:
        indice = int(input("Índice a actualizar: "))
        if 0 <= indice < len(tareas):
            nueva = input("Nuevo texto: ")
            tareas[indice] = nueva
            print(f"✓ Tarea actualizada: '{nueva}'")
        else:
            print("✗ Índice inválido")
    except:
        print("✗ Entrada inválida")

# ========== DEMOSTRACIÓN ==========
print("\\n=== DEMOSTRACIÓN AUTOMÁTICA ===")

# Agregar tareas
tareas.append("Llamar al médico")
tareas.insert(1, "Revisar correo")
print("\\nDespués de agregar tareas:", tareas)

# Eliminar tarea
tarea_eliminada = tareas.pop(2)
print(f"\\nTarea eliminada: '{tarea_eliminada}'")
print("Tareas después de eliminar:", tareas)

# Buscar tarea
print("\\nBúsqueda de 'Estudiar Python':")
if "Estudiar Python" in tareas:
    indice = tareas.index("Estudiar Python")
    print(f"✓ Encontrada en posición {indice}")

# Actualizar tarea
tareas[0] = "ESTUDIAR PYTHON (URGENTE)"
print("\\nDespués de actualizar primera tarea:", tareas)

# Concatenar listas
tareas_pendientes = ["Pagar cuentas", "Lavar el auto"]
tareas.extend(tareas_pendientes)
print("\\nDespués de concatenar tareas pendientes:", tareas)

print(f"\\n📊 Resumen: {len(tareas)} tareas en total")`

const ejercicioCode = `# EJERCICIO: Sistema de inventario de tienda

# Lista inicial de productos
productos = ["Laptop", "Mouse", "Teclado", "Monitor"]

print("🛒 Sistema de Inventario")
print("Productos iniciales:", productos)

# INSTRUCCIONES:
# 1. Agrega "Impresora" al final de la lista
# productos.??? 

# 2. Inserta "Tablet" en la segunda posición (índice 1)
# productos.???(1, "Tablet")

# 3. Elimina "Mouse" de la lista
# productos.???("Mouse")

# 4. Actualiza "Teclado" por "Teclado Mecánico"
# Encuentra el índice de "Teclado" y actualízalo

# 5. Verifica si "Monitor" está en la lista
# usa el operador 'in'

# 6. Cuenta cuántos productos hay en total
# usa len()

# 7. Concatena esta lista con nuevos productos
nuevos = ["Router", "Webcam"]
# productos = productos ??? nuevos  # usa + o extend()

print("\\nProductos finales:", productos)
print("Total de productos:", total)
print("¿'Monitor' disponible?:", disponible)
print("Índice de 'Teclado Mecánico':", indice_teclado)`

const solucionCode = `# SOLUCIÓN: Sistema de inventario de tienda

# Lista inicial de productos
productos = ["Laptop", "Mouse", "Teclado", "Monitor"]

print("🛒 Sistema de Inventario")
print("Productos iniciales:", productos)

# 1. Agrega "Impresora" al final de la lista
productos.append("Impresora")

# 2. Inserta "Tablet" en la segunda posición (índice 1)
productos.insert(1, "Tablet")

# 3. Elimina "Mouse" de la lista
productos.remove("Mouse")

# 4. Actualiza "Teclado" por "Teclado Mecánico"
indice_teclado = productos.index("Teclado")
productos[indice_teclado] = "Teclado Mecánico"

# 5. Verifica si "Monitor" está en la lista
disponible = "Monitor" in productos

# 6. Cuenta cuántos productos hay en total
total = len(productos)

# 7. Concatena esta lista con nuevos productos
nuevos = ["Router", "Webcam"]
productos = productos + nuevos  # También se puede usar productos.extend(nuevos)

print("\\nProductos finales:", productos)
print("Total de productos:", total)
print("¿'Monitor' disponible?:", disponible)
print("Índice de 'Teclado Mecánico':", indice_teclado)

# Operaciones adicionales demostradas
print("\\n📊 Información adicional:")
print("Primer producto:", productos[0])
print("Último producto:", productos[-1])
print("Productos del 2 al 4:", productos[1:4])`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Cuál método es más eficiente para agregar un elemento al final de una lista?",
    opciones: [
      { texto: "insert(len(lista), elemento)", correcta: false },
      { texto: "append(elemento)", correcta: true },
      { texto: "extend([elemento])", correcta: false },
      { texto: "lista + [elemento]", correcta: false }
    ]
  },
  {
    texto: "¿Qué hace 'lista.pop(2)'?",
    opciones: [
      { texto: "Elimina todos los elementos iguales a 2", correcta: false },
      { texto: "Elimina el elemento en la posición 2 y lo retorna", correcta: true },
      { texto: "Elimina los primeros 2 elementos", correcta: false },
      { texto: "Agrega el número 2 al final", correcta: false }
    ]
  },
  {
    texto: "¿Cómo verificas si un elemento existe en una lista?",
    opciones: [
      { texto: "lista.find(elemento)", correcta: false },
      { texto: "elemento in lista", correcta: true },
      { texto: "lista.exists(elemento)", correcta: false },
      { texto: "lista.contains(elemento)", correcta: false }
    ]
  }
]

// Estado del quiz
const respuestasSeleccionadas = ref([null, null, null])
const mostrarResultados = ref(false)
const respuestasCorrectas = ref(0)
const resultadoMensaje = ref('')
const resultadoClass = ref('')

// Funciones del quiz
const verificarQuiz = () => {
  // Verificar que todas estén respondidas
  if (respuestasSeleccionadas.value.includes(null)) {
    alert('Por favor responde todas las preguntas')
    return
  }

  // Calcular respuestas correctas
  let correctas = 0
  preguntas.forEach((pregunta, index) => {
    const respuestaIndex = respuestasSeleccionadas.value[index]
    if (respuestaIndex !== null && pregunta.opciones[respuestaIndex].correcta) {
      correctas++
    }
  })

  // Actualizar estado
  respuestasCorrectas.value = correctas
  mostrarResultados.value = true
  
  // Determinar mensaje y color
  if (correctas === preguntas.length) {
    resultadoMensaje.value = '¡Excelente! Dominas las operaciones con listas 🎉'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= 2) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa los métodos de listas 💪'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando, revisa los ejemplos de operaciones ✨'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}
</script>