<template>
  <div class="container mx-auto px-4 py-6">

    <HeaderTitle numero="1.2" titulo="1.2.3 Aplicaciones de listas">
      <!-- Contenido teórico -->
      <div class="mb-8">
        <p class="text-gray-600">Casos de uso prácticos en programación</p>
      </div>
    </HeaderTitle>


    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Sistema de inventario</h3>
      <PythonRunner :code="ejemplo1Code" title="inventario.py" :showLineNumbers="true" initialHeight="280px" />
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Análisis de ventas</h3>
      <PythonRunner :code="ejemplo2Code" title="analisis_ventas.py" :showLineNumbers="true" initialHeight="300px" />
    </div>

    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Pila usando listas</h3>
      <PythonRunner :code="ejemplo3Code" title="pila_stack.py" :showLineNumbers="true" initialHeight="250px" />
    </div>

    <div class="mb-8 p-6 bg-blue-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio: Gestión académica</h3>
      <PythonRunner :code="ejercicioCode" title="gestion_academica.py" :showLineNumbers="true" initialHeight="280px"
        :showReset="true" :showSolution="true" :solutionCode="solucionCode" />
    </div>

    <!-- Quiz funcional -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de aplicaciones de lista"></QuizQuestions>
  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'

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

const preguntas= [
  {
    texto: "¿Para qué se usan comúnmente las listas en Python?",
    opciones: [
      { texto: "Almacenar datos ordenados", correcta: true },
      { texto: "Guardar pares clave-valor", correcta: false },
      { texto: "Ejecutar ciclos", correcta: false },
      { texto: "Definir funciones", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es una aplicación típica de las listas?",
    opciones: [
      { texto: "Registrar calificaciones de alumnos", correcta: true },
      { texto: "Almacenar configuraciones del sistema", correcta: false },
      { texto: "Definir estructuras inmutables", correcta: false },
      { texto: "Reemplazar diccionarios", correcta: false }
    ]
  },
  {
    texto: "¿Qué ventaja ofrecen las listas frente a otros tipos de datos?",
    opciones: [
      { texto: "Permiten modificar, agregar y eliminar elementos", correcta: true },
      { texto: "Son más rápidas que cualquier estructura", correcta: false },
      { texto: "No permiten duplicados", correcta: false },
      { texto: "Solo almacenan un tipo de dato", correcta: false }
    ]
  }
]

</script>