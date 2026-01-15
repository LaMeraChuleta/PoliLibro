<template>
  <div class="container mx-auto px-4 py-6">

    <HeaderTitle numero="1.4" titulo="1.4.3 Operaciones sobre Diccionarios">
      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los diccionarios son estructuras de datos dinámicas que nos permiten realizar
          diversas operaciones para manipular la información almacenada.
          <strong class="text-blue-600">Agregar, modificar, eliminar y verificar</strong>
          elementos son operaciones fundamentales para trabajar eficientemente con diccionarios.
        </p>
        <p class="text-gray-700">
          En este capítulo aprenderás estas operaciones mediante un ejemplo práctico de
          <strong>gestión de inventario de una librería</strong>.
        </p>
      </div>
    </HeaderTitle>

    <!-- Operaciones principales -->
    <div class="grid md:grid-cols-4 gap-4 mb-8">
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">+</span>
        </div>
        <h3 class="font-bold text-blue-800 mb-1">Agregar</h3>
        <p class="text-blue-700 text-sm">Añadir nuevos pares clave-valor</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">E</span>
        </div>
        <h3 class="font-bold text-green-800 mb-1">Modificar</h3>
        <p class="text-green-700 text-sm">Actualizar valores existentes</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">X</span>
        </div>
        <h3 class="font-bold text-red-800 mb-1">Eliminar</h3>
        <p class="text-red-700 text-sm">Remover elementos específicos</p>
      </div>
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">?</span>
        </div>
        <h3 class="font-bold text-purple-800 mb-1">Verificar</h3>
        <p class="text-purple-700 text-sm">Comprobar existencia de claves</p>
      </div>
    </div>

    <!-- Ejemplo 1: Operaciones básicas -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Operaciones Básicas</h3>
      <PythonRunner :code="ejemplo1Code" title="operaciones_basicas.py" :show-line-numbers="true"
        :initial-height="280" />
    </div>

    <!-- Ejemplo 2: Sistema de inventario -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Sistema de Inventario</h3>
      <PythonRunner :code="ejemplo2Code" title="inventario_libreria.py" :show-line-numbers="true"
        :initial-height="320" />
    </div>

    <!-- Ejemplo 3: Métodos útiles de diccionarios -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Métodos Útiles</h3>
      <p class="text-gray-700 mb-4">
        Python proporciona métodos incorporados para trabajar con diccionarios:
      </p>
      <PythonRunner :code="ejemplo3Code" title="metodos_diccionarios.py" :show-line-numbers="true"
        :initial-height="300" />
    </div>

    <!-- Ejercicio práctico -->
    <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Gestión de Estudiantes</h3>
      <p class="text-gray-700 mb-4">
        <strong>Situación:</strong> Crea un sistema para gestionar las calificaciones de estudiantes en diferentes
        materias.
      </p>

      <PythonRunner :code="ejercicioCode" title="gestion_estudiantes.py" :show-line-numbers="true" :initial-height="260"
        :show-reset="true" :show-solution="true" :solution-code="solucionCode" />
    </div>

    <!-- Quiz funcional -->
    <div class="p-6 bg-gray-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de Operaciones con Diccionarios</h3>

      <div class="mb-6">
        <p class="text-gray-700 mb-3 font-medium">1. {{ preguntas[0].texto }}</p>
        <div class="space-y-2">
          <label v-for="(opcion, index) in preguntas[0].opciones" :key="index"
            class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
            :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[0] === index }">
            <input type="radio" name="pregunta1" :value="index" v-model="respuestasSeleccionadas[0]" class="mr-3">
            <span>{{ opcion.texto }}</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <p class="text-gray-700 mb-3 font-medium">2. {{ preguntas[1].texto }}</p>
        <div class="space-y-2">
          <label v-for="(opcion, index) in preguntas[1].opciones" :key="index"
            class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
            :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[1] === index }">
            <input type="radio" name="pregunta2" :value="index" v-model="respuestasSeleccionadas[1]" class="mr-3">
            <span>{{ opcion.texto }}</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <p class="text-gray-700 mb-3 font-medium">3. {{ preguntas[2].texto }}</p>
        <div class="space-y-2">
          <label v-for="(opcion, index) in preguntas[2].opciones" :key="index"
            class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300"
            :class="{ 'border-blue-500 border-2': respuestasSeleccionadas[2] === index }">
            <input type="radio" name="pregunta3" :value="index" v-model="respuestasSeleccionadas[2]" class="mr-3">
            <span>{{ opcion.texto }}</span>
          </label>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button @click="verificarQuiz"
          class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium">
          Verificar respuestas
        </button>

        <button @click="reiniciarQuiz"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
          Reiniciar quiz
        </button>
      </div>

      <div v-if="mostrarResultados" class="mt-6 p-4 rounded-lg" :class="resultadoClass">
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
const ejemplo1Code = `# Operaciones Basicas en Diccionarios

# 1. Crear diccionario
estudiante = {
    "nombre": "Ana Garcia",
    "edad": 22,
    "carrera": "Ingenieria"
}

print("DICCIONARIO INICIAL:")
print(estudiante)

# 2. AGREGAR nuevos elementos
print("AGREGANDO ELEMENTOS...")
estudiante["promedio"] = 8.5
estudiante["ciudad"] = "Madrid"
print("Agregados: promedio y ciudad")
print(estudiante)

# 3. MODIFICAR valores existentes
print("MODIFICANDO VALORES...")
estudiante["edad"] = 23
estudiante["promedio"] = 8.7
print("Modificados: edad y promedio")
print(estudiante)

# 4. ELIMINAR elementos
print("ELIMINANDO ELEMENTOS...")
del estudiante["ciudad"]
print("Eliminada: ciudad")
print(estudiante)

# 5. VERIFICAR existencia
print("VERIFICANDO EXISTENCIA...")
claves_a_verificar = ["nombre", "direccion", "promedio", "telefono"]

for clave in claves_a_verificar:
    if clave in estudiante:
        print(f"La clave '{clave}' SI esta en el diccionario")
    else:
        print(f"La clave '{clave}' NO esta en el diccionario")

# 6. Metodo get() para acceso seguro
print("ACCESO SEGURO CON get():")
print(f"Nombre: {estudiante.get('nombre', 'No disponible')}")
print(f"Telefono: {estudiante.get('telefono', 'No disponible')}")
print(f"Edad: {estudiante.get('edad', 0)}")

# 7. Obtener todas las claves y valores
print("CLAVES Y VALORES:")
print(f"Claves: {list(estudiante.keys())}")
print(f"Valores: {list(estudiante.values())}")
print(f"Items: {list(estudiante.items())}")

print("DICCIONARIO FINAL:")
for clave, valor in estudiante.items():
    print(f"  {clave}: {valor}")`

const ejemplo2Code = `# Sistema de Inventario de Libreria

# Inventario inicial de libros
inventario = {
    "L001": {
        "titulo": "El Principito",
        "autor": "Antoine de Saint-Exupery",
        "stock": 15,
        "precio": 18.99
    },
    "L002": {
        "titulo": "Cien Anos de Soledad",
        "autor": "Gabriel Garcia Marquez",
        "stock": 8,
        "precio": 22.50
    },
    "L003": {
        "titulo": "1984",
        "autor": "George Orwell",
        "stock": 12,
        "precio": 16.75
    }
}

def mostrar_inventario(inventario):
    """Muestra el inventario actual"""
    print("INVENTARIO DE LIBRERIA")
    print("=" * 50)
    for codigo, libro in inventario.items():
        print(f"{codigo}: {libro['titulo']}")
        print(f"   Autor: {libro['autor']}")
        print(f"   Stock: {libro['stock']} | Precio: $ {libro['precio']}")
        print("-" * 30)

# Mostrar inventario inicial
mostrar_inventario(inventario)

# Operacion 1: AGREGAR nuevo libro
print("AGREGANDO NUEVO LIBRO...")
inventario["L004"] = {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "stock": 10,
    "precio": 25.00
}
print("Libro L004 agregado al inventario")

# Operacion 2: MODIFICAR stock y precio
print("ACTUALIZANDO STOCK Y PRECIO...")
if "L002" in inventario:
    inventario["L002"]["stock"] = 20
    inventario["L002"]["precio"] = 24.99
    print("Stock y precio de L002 actualizados")

# Operacion 3: ELIMINAR libro agotado
print("ELIMINANDO LIBRO AGOTADO...")
libro_a_eliminar = "L003"
if libro_a_eliminar in inventario:
    del inventario[libro_a_eliminar]
    print(f"Libro {libro_a_eliminar} eliminado del inventario")
else:
    print(f"Libro {libro_a_eliminar} no encontrado")

# Operacion 4: Buscar libro por titulo
print("BUSCANDO LIBRO POR TITULO...")
titulo_buscar = "El Principito"
encontrado = False

for codigo, libro in inventario.items():
    if libro["titulo"].lower() == titulo_buscar.lower():
        print(f"Encontrado: {titulo_buscar}")
        print(f"   Codigo: {codigo}")
        print(f"   Autor: {libro['autor']}")
        print(f"   Stock disponible: {libro['stock']}")
        encontrado = True
        break

if not encontrado:
    print(f"{titulo_buscar} no esta en inventario")

# Operacion 5: Vender libros
print("VENDIENDO LIBROS...")
ventas = [
    ("L001", 3),  # Vender 3 copias de L001
    ("L002", 5),  # Vender 5 copias de L002
    ("L999", 2)   # Libro inexistente
]

for codigo, cantidad in ventas:
    if codigo in inventario:
        stock_actual = inventario[codigo]["stock"]
        if stock_actual >= cantidad:
            inventario[codigo]["stock"] = stock_actual - cantidad
            print(f"Vendidas {cantidad} copias de {codigo}")
        else:
            print(f"Stock insuficiente para {codigo}")
    else:
        print(f"Libro {codigo} no encontrado")

# Mostrar inventario final
print("INVENTARIO FINAL:")
mostrar_inventario(inventario)

# Estadisticas finales
print("ESTADISTICAS:")
total_libros = len(inventario)
total_stock = sum(libro["stock"] for libro in inventario.values())
print(f"Total de libros diferentes: {total_libros}")
print(f"Total de ejemplares en stock: {total_stock}")`

const ejemplo3Code = `# Metodos Utiles de Diccionarios

print("METODOS DE DICCIONARIOS")
print("=" * 50)

# Diccionario de ejemplo
productos = {
    "P001": {"nombre": "Laptop", "precio": 899.99, "stock": 15},
    "P002": {"nombre": "Mouse", "precio": 24.99, "stock": 50},
    "P003": {"nombre": "Teclado", "precio": 49.99, "stock": 30}
}

# 1. keys() - Obtener todas las claves
print("METODO keys():")
claves = productos.keys()
print(f"Claves: {list(claves)}")

# 2. values() - Obtener todos los valores
print("METODO values():")
valores = productos.values()
print(f"Cantidad de valores: {len(list(valores))}")
for valor in valores:
    print(f"  Producto: {valor['nombre']}")

# 3. items() - Obtener pares clave-valor
print("METODO items():")
for codigo, producto in productos.items():
    print(f"{codigo}: {producto['nombre']} - $ {producto['precio']}")

# 4. get() - Acceso seguro
print("METODO get():")
print(f"P001: {productos.get('P001', 'No encontrado')}")
print(f"P999: {productos.get('P999', 'No encontrado')}")
print(f"P001 stock: {productos.get('P001', {}).get('stock', 'N/A')}")

# 5. setdefault() - Agregar con valor por defecto
print("METODO setdefault():")
# Si la clave existe, devuelve su valor
valor_existente = productos.setdefault("P002", {"nombre": "Nuevo", "precio": 0})
print(f"P002 (existente): {valor_existente['nombre']}")

# Si la clave no existe, la crea con valor por defecto
valor_nuevo = productos.setdefault("P004", {"nombre": "Monitor", "precio": 199.99, "stock": 10})
print(f"P004 (nuevo): {valor_nuevo['nombre']}")

# 6. update() - Actualizar multiples elementos
print("METODO update():")
actualizaciones = {
    "P001": {"stock": 10},  # Actualizar stock
    "P005": {"nombre": "Tablet", "precio": 299.99, "stock": 20}  # Agregar nuevo
}

productos.update(actualizaciones)
print("Diccionario actualizado")
print(f"Nuevas claves: {list(productos.keys())}")

# 7. pop() - Eliminar y obtener valor
print("METODO pop():")
producto_eliminado = productos.pop("P002", "No encontrado")
print(f"Producto eliminado: {producto_eliminado['nombre']}")
print(f"Claves restantes: {list(productos.keys())}")

# 8. popitem() - Eliminar ultimo elemento
print("METODO popitem():")
ultimo_clave, ultimo_valor = productos.popitem()
print(f"Ultimo eliminado: {ultimo_clave} = {ultimo_valor['nombre']}")

# 9. clear() - Limpiar todo el diccionario
print("METODO clear():")
copia_productos = productos.copy()  # Copia para no perder los datos
copia_productos.clear()
print(f"Diccionario copiado despues de clear(): {copia_productos}")
print(f"Diccionario original intacto: {len(productos)} elementos")

# 10. copy() - Copia superficial
print("METODO copy():")
copia = productos.copy()
copia["P001"]["stock"] = 999  # Esto afecta al original tambien
print(f"Original P001 stock: {productos['P001']['stock']}")
print(f"Copia P001 stock: {copia['P001']['stock']}")

print("ESTADO FINAL DEL DICCIONARIO:")
for codigo, producto in productos.items():
    print(f"{codigo}: {producto['nombre']} - Stock: {producto['stock']}")`

const ejercicioCode = `# EJERCICIO: Gestion de Calificaciones de Estudiantes

# Base de datos inicial de estudiantes
estudiantes = {
    "A001": {
        "nombre": "Ana Lopez",
        "calificaciones": {
            "Matematicas": 8.5,
            "Historia": 7.0,
            "Programacion": 9.0
        }
    },
    "A002": {
        "nombre": "Carlos Ruiz",
        "calificaciones": {
            "Matematicas": 6.5,
            "Historia": 8.0
        }
    }
}

# INSTRUCCIONES:
# 1. Agrega un nuevo estudiante "Beatriz Morales" con codigo "A003"
#    que tenga calificaciones en Matematicas (9.0) y Fisica (8.5)

# 2. Actualiza la calificacion de Historia de "Ana Lopez" a 7.5

# 3. Elimina la calificacion de Historia de "Carlos Ruiz"

# 4. Agrega una nueva materia "Ingles" a todos los estudiantes
#    con calificacion inicial 0.0

# 5. Calcula el promedio de calificaciones de cada estudiante

# 6. Encuentra al estudiante con el promedio mas alto

print("Sistema de Gestion de Calificaciones")
print("=" * 50)

# Tu codigo aqui...

# Mostrar resultados finales`

const solucionCode = `# SOLUCION: Gestion de Calificaciones de Estudiantes

estudiantes = {
    "A001": {
        "nombre": "Ana Lopez",
        "calificaciones": {
            "Matematicas": 8.5,
            "Historia": 7.0,
            "Programacion": 9.0
        }
    },
    "A002": {
        "nombre": "Carlos Ruiz",
        "calificaciones": {
            "Matematicas": 6.5,
            "Historia": 8.0
        }
    }
}

print("Sistema de Gestion de Calificaciones")
print("=" * 50)

# 1. Agregar nuevo estudiante
print("AGREGANDO NUEVO ESTUDIANTE...")
estudiantes["A003"] = {
    "nombre": "Beatriz Morales",
    "calificaciones": {
        "Matematicas": 9.0,
        "Fisica": 8.5
    }
}
print("Estudiante A003 agregado")

# 2. Actualizar calificacion
print("ACTUALIZANDO CALIFICACION...")
if "A001" in estudiantes and "Historia" in estudiantes["A001"]["calificaciones"]:
    estudiantes["A001"]["calificaciones"]["Historia"] = 7.5
    print("Calificacion de Historia de Ana Lopez actualizada a 7.5")

# 3. Eliminar calificacion
print("ELIMINANDO CALIFICACION...")
if "A002" in estudiantes and "Historia" in estudiantes["A002"]["calificaciones"]:
    del estudiantes["A002"]["calificaciones"]["Historia"]
    print("Calificacion de Historia de Carlos Ruiz eliminada")

# 4. Agregar nueva materia a todos
print("AGREGANDO NUEVA MATERIA A TODOS...")
for codigo, estudiante in estudiantes.items():
    estudiante["calificaciones"]["Ingles"] = 0.0
print("Materia 'Ingles' agregada a todos los estudiantes con calificacion 0.0")

# 5. Calcular promedios
print("CALCULANDO PROMEDIOS...")
for codigo, estudiante in estudiantes.items():
    calificaciones = estudiante["calificaciones"].values()
    if calificaciones:
        promedio = sum(calificaciones) / len(calificaciones)
        estudiante["promedio"] = round(promedio, 2)
    else:
        estudiante["promedio"] = 0.0
    print(f"{estudiante['nombre']}: {estudiante['promedio']}")

# 6. Encontrar estudiante con mejor promedio
print("ESTUDIANTE CON MEJOR PROMEDIO...")
mejor_estudiante = None
mejor_promedio = -1

for codigo, estudiante in estudiantes.items():
    if estudiante["promedio"] > mejor_promedio:
        mejor_promedio = estudiante["promedio"]
        mejor_estudiante = estudiante["nombre"]

print(f"Mejor promedio: {mejor_estudiante} ({mejor_promedio})")

# Mostrar informacion final
print("INFORMACION COMPLETA DE ESTUDIANTES:")
for codigo, estudiante in estudiantes.items():
    print(f"{codigo}: {estudiante['nombre']}")
    print("  Calificaciones:")
    for materia, nota in estudiante["calificaciones"].items():
        print(f"    {materia}: {nota}")
    print(f"  Promedio: {estudiante['promedio']}")

# Estadisticas
print("ESTADISTICAS FINALES:")
total_estudiantes = len(estudiantes)
total_materias = sum(len(e["calificaciones"]) for e in estudiantes.values())
promedio_general = sum(e["promedio"] for e in estudiantes.values()) / total_estudiantes

print(f"Total estudiantes: {total_estudiantes}")
print(f"Total materias evaluadas: {total_materias}")
print(f"Promedio general: {round(promedio_general, 2)}")`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Qué operación usarías para agregar un nuevo libro al inventario?",
    opciones: [
      { texto: "inventario.append('L004', datos_libro)", correcta: false },
      { texto: "inventario['L004'] = datos_libro", correcta: true },
      { texto: "inventario.add('L004', datos_libro)", correcta: false },
      { texto: "inventario.insert('L004', datos_libro)", correcta: false }
    ]
  },
  {
    texto: "¿Cómo verificarías si un libro existe antes de venderlo?",
    opciones: [
      { texto: "if 'L001' in inventario:", correcta: true },
      { texto: "if inventario.exists('L001'):", correcta: false },
      { texto: "if 'L001' == inventario:", correcta: false },
      { texto: "if inventario.has_key('L001'):", correcta: false }
    ]
  },
  {
    texto: "¿Qué ocurre si intentas eliminar una clave que no existe con del?",
    opciones: [
      { texto: "Python crea la clave automáticamente", correcta: false },
      { texto: "Se genera un KeyError", correcta: true },
      { texto: "El diccionario queda vacío", correcta: false },
      { texto: "Nada, simplemente se ignora", correcta: false }
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
  if (respuestasSeleccionadas.value.includes(null)) {
    alert('Por favor responde todas las preguntas')
    return
  }

  let correctas = 0
  preguntas.forEach((pregunta, index) => {
    const respuestaIndex = respuestasSeleccionadas.value[index]
    if (respuestaIndex !== null && pregunta.opciones[respuestaIndex].correcta) {
      correctas++
    }
  })

  respuestasCorrectas.value = correctas
  mostrarResultados.value = true

  if (correctas === preguntas.length) {
    resultadoMensaje.value = '¡Excelente! Dominas las operaciones con diccionarios'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= 2) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa los conceptos de eliminación'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando con los ejemplos de operaciones'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}
</script>