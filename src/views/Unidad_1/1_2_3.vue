<template>
  <div class="container mx-auto px-4 py-6">
    <section class="bg-white rounded-lg p-6 mb-6">
      <div class="flex items-center mb-6">
        <span class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          2.3
        </span>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">1.2.3 Aplicaciones de listas</h2>
          <p class="text-gray-600">Casos de uso prácticos en programación</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Sistema de inventario</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="inventario.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Análisis de ventas</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="analisis_ventas.py"
          :showLineNumbers="true"
          initialHeight="300px"
        />
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Pila usando listas</h3>
        <PythonRunner 
          :code="ejemplo3Code"
          title="pila_stack.py"
          :showLineNumbers="true"
          initialHeight="250px"
        />
      </div>

      <div class="mb-8 p-6 bg-blue-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio: Gestión académica</h3>
        <PythonRunner 
          :code="ejercicioCode"
          title="gestion_academica.py"
          :showLineNumbers="true"
          initialHeight="280px"
          :showReset="true"
          :showSolution="true"
          :solutionCode="solucionCode"
        />
      </div>

      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de aplicaciones</h3>
        
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. ¿Para qué se usan comúnmente las listas en aplicaciones reales?</p>
          <div class="space-y-2">
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta1" value="0" class="mr-3">
              <span>Solo para almacenar números</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta1" value="1" class="mr-3">
              <span>Gestión de inventarios, análisis de datos y estructuras como pilas</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta1" value="2" class="mr-3">
              <span>Solo para ordenar datos</span>
            </label>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. ¿Por qué son útiles las listas para implementar una pila?</p>
          <div class="space-y-2">
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta2" value="0" class="mr-3">
              <span>Porque tienen tamaño fijo</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta2" value="1" class="mr-3">
              <span>Porque append() y pop() son eficientes al final</span>
            </label>
            <label class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-blue-300">
              <input type="radio" name="pregunta2" value="2" class="mr-3">
              <span>Porque permiten acceso aleatorio rápido</span>
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

// Códigos SIMPLIFICADOS para evitar errores de sintaxis
const ejemplo1Code = `# Sistema de inventario simple

productos = ["Laptop", "Mouse", "Teclado", "Monitor"]
cantidades = [10, 50, 30, 15]
precios = [1200.00, 25.99, 45.50, 300.00]

print("Inventario de la tienda:")
print("=" * 40)

for i in range(len(productos)):
    print(f"{i+1}. {productos[i]:10} | Cant: {cantidades[i]:3} | Precio: {precios[i]:6.2f}")

# Calcular valor total
valor_total = 0
for i in range(len(productos)):
    valor_total += cantidades[i] * precios[i]

print(f"\\nValor total del inventario: {valor_total:.2f}")

# Buscar producto
producto_buscado = "Mouse"
if producto_buscado in productos:
    indice = productos.index(producto_buscado)
    print(f"\\n{producto_buscado} encontrado:")
    print(f"  Cantidad: {cantidades[indice]}")
    print(f"  Precio: {precios[indice]:.2f}")
else:
    print(f"\\n{producto_buscado} no encontrado")`

const ejemplo2Code = `# Análisis de ventas simple

ventas = [45.2, 38.7, 52.1, 47.8, 41.3, 39.6, 55.4]
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

print("Análisis de ventas semanales:")
print("=" * 40)

# Estadísticas básicas
total = sum(ventas)
promedio = total / len(ventas)
maxima = max(ventas)
minima = min(ventas)

print(f"Venta total: {total:.1f}")
print(f"Promedio diario: {promedio:.1f}")
print(f"Mejor día: {maxima:.1f}")
print(f"Peor día: {minima:.1f}")

# Días sobre el promedio
print("\\nDías sobre el promedio:")
for i in range(len(ventas)):
    if ventas[i] > promedio:
        print(f"  • {dias[i]}: {ventas[i]:.1f}")`

const ejemplo3Code = `# Pila simple usando listas

class Pila:
    def __init__(self):
        self.items = []
    
    def apilar(self, item):
        self.items.append(item)
    
    def desapilar(self):
        if not self.esta_vacia():
            return self.items.pop()
        return None
    
    def esta_vacia(self):
        return len(self.items) == 0
    
    def tamano(self):
        return len(self.items)

# Ejemplo de uso
print("Ejemplo de pila:")
pila = Pila()

pila.apilar("Primero")
pila.apilar("Segundo")
pila.apilar("Tercero")

print(f"Tamaño de la pila: {pila.tamano()}")

elemento = pila.desapilar()
print(f"Elemento desapilado: {elemento}")
print(f"Tamaño después de desapilar: {pila.tamano()}")`

const ejercicioCode = `# EJERCICIO: Gestión académica simple

estudiantes = ["Ana", "Carlos", "María", "Pedro"]
calificaciones = [85, 78, 92, 70]

# Calcular promedio
promedio_total = sum(calificaciones) / len(calificaciones)

# Encontrar mejor calificación
mejor_calificacion = max(calificaciones)
indice_mejor = calificaciones.index(mejor_calificacion)
mejor_estudiante = estudiantes[indice_mejor]

print("Sistema de Gestión Académica")
print("=" * 30)
print(f"\\nCalificaciones:")
for i in range(len(estudiantes)):
    print(f"  {estudiantes[i]}: {calificaciones[i]}")

print(f"\\nPromedio del grupo: {promedio_total:.1f}")
print(f"Mejor estudiante: {mejor_estudiante} ({mejor_calificacion})")`

const solucionCode = `# SOLUCIÓN: Gestión académica simple

estudiantes = ["Ana", "Carlos", "María", "Pedro"]
calificaciones = [85, 78, 92, 70]

# Calcular promedio
promedio_total = sum(calificaciones) / len(calificaciones)

# Encontrar mejor calificación
mejor_calificacion = max(calificaciones)
indice_mejor = calificaciones.index(mejor_calificacion)
mejor_estudiante = estudiantes[indice_mejor]

print("Sistema de Gestión Académica")
print("=" * 30)
print(f"\\nCalificaciones:")
for i in range(len(estudiantes)):
    print(f"  {estudiantes[i]}: {calificaciones[i]}")

print(f"\\nPromedio del grupo: {promedio_total:.1f}")
print(f"Mejor estudiante: {mejor_estudiante} ({mejor_calificacion})")

# Estudiantes con calificación mayor a 80
print(f"\\nEstudiantes con calificación > 80:")
for i in range(len(estudiantes)):
    if calificaciones[i] > 80:
        print(f"  • {estudiantes[i]}: {calificaciones[i]}")`

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
  
  alert(`Respuestas correctas: ${correctas}/2\\n\\nRespuestas correctas:\\n1. Gestión de inventarios, análisis de datos...\\n2. Porque append() y pop() son eficientes al final`)
}
</script>