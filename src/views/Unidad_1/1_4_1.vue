<template>
  <div class="container mx-auto px-4 py-6">
    <section class="bg-white rounded-lg p-6 mb-6">
      <div class="flex items-center mb-6">
        <span class="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          1.4.1
        </span>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">1.4.1 Conceptos y características de diccionarios</h2>
          <p class="text-gray-600">Estructuras clave-valor en Python</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Creación y acceso básico</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="diccionario_basico.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Métodos comunes</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="metodos_diccionario.py"
          :showLineNumbers="true"
          initialHeight="300px"
        />
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de inventario simplificado</h3>
        <PythonRunner 
          :code="ejemplo3Code"
          title="inventario.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <div class="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-green-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio: Gestión de estudiantes</h3>
        <PythonRunner 
          :code="ejercicioCode"
          title="gestion_estudiantes.py"
          :showLineNumbers="true"
          initialHeight="250px"
          :showReset="true"
          :showSolution="true"
          :solutionCode="solucionCode"
        />
      </div>

      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de diccionarios</h3>
        
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. ¿Qué característica principal diferencia a los diccionarios de las listas?</p>
          <div class="space-y-2">
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta1" value="0" class="mr-3">
              <span>Los diccionarios son inmutables</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta1" value="1" class="mr-3">
              <span>Los diccionarios usan claves personalizadas en lugar de índices numéricos</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta1" value="2" class="mr-3">
              <span>Los diccionarios no permiten valores repetidos</span>
            </label>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. ¿Cuál método es más seguro para acceder a un valor en un diccionario?</p>
          <div class="space-y-2">
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta2" value="0" class="mr-3">
              <span>diccionario[clave] - Acceso directo</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta2" value="1" class="mr-3">
              <span>diccionario.get(clave) - Devuelve None si no existe</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-yellow-300">
              <input type="radio" name="pregunta2" value="2" class="mr-3">
              <span>diccionario.find(clave) - Método de búsqueda</span>
            </label>
          </div>
        </div>

        <button @click="verificarQuiz" 
                class="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium">
          Verificar respuestas
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Códigos CORREGIDOS (sin caracteres problemáticos)
const ejemplo1Code = `# Creación y acceso básico a diccionarios

# 1. Crear un diccionario
estudiante = {
    "nombre": "Ana García",
    "edad": 22,
    "carrera": "Ingeniería Informática",
    "promedio": 8.5,
    "activo": True
}

print("Diccionario completo:")
print(estudiante)

# 2. Acceder a valores por clave
print("Acceso a valores:")
print("Nombre:", estudiante["nombre"])
print("Edad:", estudiante["edad"])
print("Carrera:", estudiante.get("carrera"))

# 3. Acceso seguro con get()
print("Acceso seguro:")
print("Teléfono:", estudiante.get("telefono"))
print("Teléfono con default:", estudiante.get("telefono", "No disponible"))

# 4. Modificar valores
print("Modificando valores...")
estudiante["edad"] = 23
estudiante["semestre"] = 6
print("Después de modificar:", estudiante)

# 5. Verificar existencia de clave
print("Verificación de claves:")
print("¿Tiene clave 'nombre'?:", "nombre" in estudiante)
print("¿Tiene clave 'direccion'?:", "direccion" in estudiante)

# 6. Tamaño del diccionario
print("Tamaño del diccionario:", len(estudiante))`

const ejemplo2Code = `# Métodos comunes de diccionarios

producto = {
    "id": "P001",
    "nombre": "Laptop Gaming",
    "precio": 1200.99,
    "stock": 15,
    "categoria": "Electrónica",
    "disponible": True
}

print("Producto original:")
print(producto)

# 1. keys() - obtener todas las claves
print("1. Claves del diccionario:")
claves = producto.keys()
print("Claves:", list(claves))

# 2. values() - obtener todos los valores
print("2. Valores del diccionario:")
valores = producto.values()
print("Valores:", list(valores))

# 3. items() - obtener pares clave-valor
print("3. Items (pares clave-valor):")
for clave, valor in producto.items():
    print(f"  {clave}: {valor}")

# 4. get() - acceso seguro con valor por defecto
print("4. Uso de get():")
print("Precio:", producto.get("precio"))
print("Descuento:", producto.get("descuento", 0))

# 5. update() - actualizar con otro diccionario
print("5. Actualizando diccionario...")
actualizaciones = {
    "precio": 1150.50,
    "stock": 12,
    "marca": "GamerTech"
}
producto.update(actualizaciones)
print("Después de update:", producto)

# 6. copy() - crear copia superficial
print("6. Copiando diccionario...")
copia_producto = producto.copy()
copia_producto["precio"] = 1000.00
print("Original (precio):", producto["precio"])
print("Copia (precio):", copia_producto["precio"])`

const ejemplo3Code = `# Sistema de inventario simplificado

class Inventario:
    def __init__(self):
        self.productos = {}
    
    def agregar_producto(self, id_producto, nombre, precio, stock):
        if id_producto not in self.productos:
            self.productos[id_producto] = {
                "nombre": nombre,
                "precio": precio,
                "stock": stock
            }
            print(f"Producto {nombre} agregado")
    
    def buscar_producto(self, id_producto):
        return self.productos.get(id_producto)
    
    def mostrar_inventario(self):
        if not self.productos:
            print("El inventario está vacío")
            return
        
        print("INVENTARIO DE PRODUCTOS")
        print("=" * 40)
        
        for id_producto, info in self.productos.items():
            print(f"{id_producto}: {info['nombre']} - Precio: {info['precio']} - Stock: {info['stock']}")
        
        print("=" * 40)
        print(f"Total productos: {len(self.productos)}")

# Uso del sistema
print("SISTEMA DE INVENTARIO")
inventario = Inventario()

# Agregar productos
inventario.agregar_producto("P001", "Laptop Gaming", 1200.00, 10)
inventario.agregar_producto("P002", "Mouse RGB", 45.99, 50)
inventario.agregar_producto("P003", "Teclado Mecánico", 89.50, 30)

# Mostrar inventario
inventario.mostrar_inventario()

# Buscar producto
print("\\nBUSCANDO PRODUCTO P002:")
producto = inventario.buscar_producto("P002")
if producto:
    print(f"Encontrado: {producto['nombre']} - Stock: {producto['stock']}")`

const ejercicioCode = `# EJERCICIO: Gestión de estudiantes

estudiantes = {
    "A001": {
        "nombre": "Ana López",
        "edad": 22,
        "carrera": "Ingeniería",
        "promedio": 8.5
    },
    "A002": {
        "nombre": "Carlos Ruiz",
        "edad": 23,
        "carrera": "Medicina",
        "promedio": 9.1
    }
}

# INSTRUCCIONES:
# 1. Agrega un nuevo estudiante:
#    ID: "A003", nombre: "María García", edad: 21, carrera: "Derecho", promedio: 8.8

# 2. Actualiza el promedio de "Ana López" a 8.7

# 3. Encuentra al estudiante con el promedio más alto

# 4. Calcula el promedio general

print("Sistema de Gestión de Estudiantes")
print("=" * 40)

# Mostrar todos los estudiantes
print("\\nEstudiantes registrados:")
for id_est, info in estudiantes.items():
    print(f"{id_est}: {info['nombre']} - Promedio: {info['promedio']}")

# Mostrar mejor estudiante
print("\\nMejor estudiante:")
print(f"{mejor_estudiante} con promedio {mejor_promedio}")

print("\\nPromedio general:")
print(f"{promedio_general:.2f}")`

const solucionCode = `# SOLUCIÓN: Gestión de estudiantes

estudiantes = {
    "A001": {
        "nombre": "Ana López",
        "edad": 22,
        "carrera": "Ingeniería",
        "promedio": 8.5
    },
    "A002": {
        "nombre": "Carlos Ruiz",
        "edad": 23,
        "carrera": "Medicina",
        "promedio": 9.1
    }
}

# 1. Agregar nuevo estudiante
estudiantes["A003"] = {
    "nombre": "María García",
    "edad": 21,
    "carrera": "Derecho",
    "promedio": 8.8
}

# 2. Actualizar promedio de Ana López
estudiantes["A001"]["promedio"] = 8.7

# 3. Encontrar estudiante con promedio más alto
mejor_estudiante = None
mejor_promedio = 0

for id_est, info in estudiantes.items():
    if info["promedio"] > mejor_promedio:
        mejor_promedio = info["promedio"]
        mejor_estudiante = info["nombre"]

# 4. Calcular promedio general
suma_promedios = 0
for info in estudiantes.values():
    suma_promedios += info["promedio"]
promedio_general = suma_promedios / len(estudiantes)

print("Sistema de Gestión de Estudiantes")
print("=" * 40)

print("\\nEstudiantes registrados:")
for id_est, info in estudiantes.items():
    print(f"{id_est}: {info['nombre']} - Promedio: {info['promedio']}")

print("\\nMejor estudiante:")
print(f"{mejor_estudiante} con promedio {mejor_promedio}")

print("\\nPromedio general:")
print(f"{promedio_general:.2f}")

# Información adicional
print("\\nEstadísticas adicionales:")
print(f"Total estudiantes: {len(estudiantes)}")
print(f"Edad promedio: {sum(info['edad'] for info in estudiantes.values()) / len(estudiantes):.1f} años")

# Carreras únicas
carreras = set(info["carrera"] for info in estudiantes.values())
print(f"Carreras: {', '.join(carreras)}")`

// Quiz simplificado
const verificarQuiz = () => {
  const respuesta1 = document.querySelector('input[name="pregunta1"]:checked')
  const respuesta2 = document.querySelector('input[name="pregunta2"]:checked')
  
  if (!respuesta1 || !respuesta2) {
    alert('Por favor responde todas las preguntas')
    return
  }
  
  let correctas = 0
  if (respuesta1.value === '1') correctas++
  if (respuesta2.value === '1') correctas++
  
  alert(`Respuestas correctas: ${correctas}/2\\n\\nRespuestas correctas:\\n1. Los diccionarios usan claves personalizadas...\\n2. diccionario.get(clave) - Devuelve None si no existe`)
}
</script>