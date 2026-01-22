<template>
  <div class="container mx-auto px-4 py-6 space-y-8">
    <!-- Header -->
    <HeaderTitle numero="5" titulo="5.3.1 Bibliotecas especializadas del lenguaje Python">
      <p class="mt-3 text-gray-600 max-w-3xl">Exploración de las bibliotecas más importantes de Python para diferentes
        dominios de aplicación, desde ciencia de datos hasta desarrollo web.</p>
    </HeaderTitle>

    <!-- Explicación teórica -->
    <section class="mb-10 bg-white rounded-xl shadow-sm p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Introducción a las bibliotecas especializadas</h2>
      <p class="text-gray-700 mb-4">
        Python destaca por su extenso ecosistema de bibliotecas especializadas que
        permiten resolver problemas complejos en diversos campos. Estas bibliotecas
        proporcionan herramientas pre-construidas y optimizadas que aceleran el
        desarrollo y facilitan tareas específicas.
      </p>
      <p class="text-gray-700">
        La riqueza del ecosistema de Python radica en la especialización: cada biblioteca
        está diseñada para un dominio particular, ofreciendo API consistentes y
        documentación exhaustiva para cada caso de uso.
      </p>
    </section>

    <!-- Tarjetas de conceptos clave -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Categorías principales de bibliotecas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Tarjeta 1 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">+</div>
            <h3 class="font-bold text-gray-800">Ciencia de datos</h3>
          </div>
          <p class="text-gray-700">
            Bibliotecas para análisis, manipulación y visualización de datos.
            Incluyen pandas, NumPy, Matplotlib y scikit-learn.
          </p>
        </div>

        <!-- Tarjeta 2 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold">E
            </div>
            <h3 class="font-bold text-gray-800">Desarrollo web</h3>
          </div>
          <p class="text-gray-700">
            Frameworks y herramientas para construir aplicaciones web.
            Django, Flask, FastAPI y Requests son los más populares.
          </p>
        </div>

        <!-- Tarjeta 3 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center font-bold">X
            </div>
            <h3 class="font-bold text-gray-800">Computación científica</h3>
          </div>
          <p class="text-gray-700">
            Herramientas para matemáticas, estadística y computación numérica.
            SciPy, SymPy y TensorFlow son ejemplos representativos.
          </p>
        </div>

        <!-- Tarjeta 4 -->
        <div class="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold">?</div>
            <h3 class="font-bold text-gray-800">Automatización</h3>
          </div>
          <p class="text-gray-700">
            Bibliotecas para automatizar tareas del sistema y operaciones.
            OS, subprocess, argparse y schedule son esenciales.
          </p>
        </div>
      </div>
    </section>

    <!-- Ejemplos de código -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejemplos de uso de bibliotecas</h2>

      <!-- Ejemplo 1 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 1: Análisis de datos con pandas</h3>
          <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Ciencia de datos</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo1Code" />
        </div>
      </div>

      <!-- Ejemplo 2 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 2: API web con Flask</h3>
          <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Desarrollo web</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo2Code" />
        </div>
      </div>

      <!-- Ejemplo 3 -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-800">Ejemplo 3: Computación científica con NumPy y SciPy</h3>
          <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Computación</span>
        </div>
        <div class="bg-gray-800 rounded-lg overflow-hidden">
          <PythonRunner :code="ejemplo3Code" />
        </div>
      </div>
    </section>

    <!-- Ejercicio práctico -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Ejercicio práctico</h2>
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Problema: Análisis de ventas mensuales</h3>
          <p class="text-gray-700 mb-4">
            Una empresa necesita analizar sus ventas mensuales. Tienes datos de ventas
            para 6 meses y debes generar un reporte que incluya:
          </p>
          <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p class="text-blue-800 font-medium mb-2">Requisitos:</p>
            <ul class="list-disc list-inside text-blue-700 space-y-1">
              <li>Calcular el total de ventas por mes</li>
              <li>Encontrar el mes con mayores ventas</li>
              <li>Calcular el promedio de ventas</li>
              <li>Identificar meses con ventas superiores al promedio</li>
              <li>Usar pandas para el análisis</li>
            </ul>
          </div>
        </div>

        <div>
          <button @click="mostrarSolucion = !mostrarSolucion"
            class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <span v-if="!mostrarSolucion">Mostrar solución</span>
            <span v-else>Ocultar solución</span>
          </button>

          <div v-if="mostrarSolucion" class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div class="bg-gray-800 rounded-lg overflow-hidden">
              <PythonRunner :code="ejercicioCode" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabla de bibliotecas importantes -->
    <section class="mb-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Bibliotecas esenciales de Python</h2>
      <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biblioteca
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instalación
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">pandas</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Ciencia de
                    datos</span>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-700">Manipulación y análisis de datos estructurados</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded">pip install pandas</code>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">NumPy</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Ciencia de
                    datos</span>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-700">Computación numérica con arrays multidimensionales</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded">pip install numpy</code>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">Flask</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Desarrollo
                    web</span>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-700">Microframework para aplicaciones web</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded">pip install flask</code>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="font-medium text-gray-900">SciPy</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Computación
                    científica</span>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-700">Algoritmos matemáticos y herramientas científicas</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded">pip install scipy</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Quiz -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz bibliotecas especializadas del lenguaje Python"></QuizQuestions>


    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/5.2.2" textoAnterior="Anterior"
      tituloActual="Unidad II • Programación concurrente" mostrarAnterior="true" mostrarSiguiente="false" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Estado del ejercicio práctico
const mostrarSolucion = ref(false)

// Códigos de ejemplo
const ejemplo1Code = `# Ejemplo 1: Análisis básico de datos con pandas
import pandas as pd

# Crear un DataFrame de ejemplo con datos de ventas
datos_ventas = {
    'Mes': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    'Ventas': [15000, 18000, 22000, 19500, 21000, 24000],
    'Clientes': [120, 135, 155, 140, 160, 175],
    'Producto': ['A', 'B', 'A', 'C', 'B', 'A']
}

# Crear DataFrame
df_ventas = pd.DataFrame(datos_ventas)
print("=== DATAFRAME DE VENTAS ===")
print(df_ventas)
print()

# Análisis básico
print("=== ANÁLISIS ESTADÍSTICO ===")
print("Estadísticas descriptivas de ventas:")
print(df_ventas['Ventas'].describe())
print()

# Filtrar datos
print("=== FILTROS ===")
ventas_altas = df_ventas[df_ventas['Ventas'] > 20000]
print("Meses con ventas superiores a 20,000:")
print(ventas_altas[['Mes', 'Ventas']])
print()

# Agrupaciones
print("=== ANÁLISIS POR PRODUCTO ===")
ventas_por_producto = df_ventas.groupby('Producto')['Ventas'].agg(['sum', 'mean', 'count'])
print("Ventas agregadas por producto:")
print(ventas_por_producto)
print()

# Ordenar datos
print("=== MESES ORDENADOS POR VENTAS ===")
meses_ordenados = df_ventas.sort_values('Ventas', ascending=False)
print(meses_ordenados[['Mes', 'Ventas']])`

const ejemplo2Code = `# Ejemplo 2: API web básica con Flask
# Nota: Este código muestra la estructura, pero necesita Flask instalado para ejecutarse

# Importar Flask (requiere: pip install flask)
from flask import Flask, jsonify, request

# Crear aplicación Flask
app = Flask(__name__)

# Base de datos simulada
usuarios = [
    {"id": 1, "nombre": "Ana", "email": "ana@email.com"},
    {"id": 2, "nombre": "Luis", "email": "luis@email.com"},
    {"id": 3, "nombre": "Maria", "email": "maria@email.com"}
]

# Ruta principal
@app.route('/')
def inicio():
    return jsonify({
        "mensaje": "Bienvenido a la API de usuarios",
        "endpoints": {
            "usuarios": "/usuarios",
            "usuario_especifico": "/usuarios/<id>"
        }
    })

# Obtener todos los usuarios
@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    return jsonify({
        "usuarios": usuarios,
        "total": len(usuarios)
    })

# Obtener un usuario específico
@app.route('/usuarios/<int:usuario_id>', methods=['GET'])
def obtener_usuario(usuario_id):
    for usuario in usuarios:
        if usuario["id"] == usuario_id:
            return jsonify(usuario)
    return jsonify({"error": "Usuario no encontrado"}), 404

# Añadir nuevo usuario
@app.route('/usuarios', methods=['POST'])
def crear_usuario():
    datos = request.json
    
    # Validar datos
    if not datos or 'nombre' not in datos or 'email' not in datos:
        return jsonify({"error": "Datos incompletos"}), 400
    
    nuevo_usuario = {
        "id": len(usuarios) + 1,
        "nombre": datos['nombre'],
        "email": datos['email']
    }
    
    usuarios.append(nuevo_usuario)
    return jsonify({
        "mensaje": "Usuario creado exitosamente",
        "usuario": nuevo_usuario
    }), 201

# Ejecutar la aplicación
if __name__ == '__main__':
    print("=== API FLASK ===")
    print("Para ejecutar esta API, guarda el código en un archivo .py")
    print("y ejecuta: python nombre_archivo.py")
    print()
    print("Endpoints disponibles:")
    print("1. GET / - Página de inicio")
    print("2. GET /usuarios - Obtener todos los usuarios")
    print("3. GET /usuarios/<id> - Obtener usuario específico")
    print("4. POST /usuarios - Crear nuevo usuario")
    print()
    print("Ejemplo de solicitud POST:")
    print('curl -X POST -H "Content-Type: application/json"')
    print('     -d \'{"nombre": "Carlos", "email": "carlos@email.com"}\'')
    print('     http://localhost:5000/usuarios')`

const ejemplo3Code = `# Ejemplo 3: Computación científica con NumPy y SciPy
import numpy as np
from scipy import stats, optimize

print("=== COMPUTACIÓN CIENTÍFICA CON NUMPY Y SCIPY ===")

# 1. Operaciones con NumPy
print("\\n1. OPERACIONES CON NUMPY")
# Crear arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([6, 7, 8, 9, 10])

print(f"Array 1: {arr1}")
print(f"Array 2: {arr2}")
print(f"Suma: {arr1 + arr2}")
print(f"Producto punto: {np.dot(arr1, arr2)}")
print(f"Media de arr1: {np.mean(arr1)}")
print(f"Desviación estándar de arr1: {np.std(arr1)}")

# 2. Álgebra lineal
print("\\n2. ÁLGEBRA LINEAL")
matriz = np.array([[1, 2], [3, 4]])
print(f"Matriz 2x2:\\n{matriz}")
print(f"Determinante: {np.linalg.det(matriz)}")
print(f"Matriz inversa:\\n{np.linalg.inv(matriz)}")
print(f"Autovalores: {np.linalg.eigvals(matriz)}")

# 3. Estadísticas con SciPy
print("\\n3. ESTADÍSTICAS CON SCIPY")
datos = np.array([23, 25, 26, 28, 30, 32, 34, 35, 37, 40])
print(f"Datos: {datos}")

# Medidas estadísticas
moda = stats.mode(datos)
print(f"Moda: {moda.mode[0]} (frecuencia: {moda.count[0]})")
print(f"Media: {np.mean(datos):.2f}")
print(f"Mediana: {np.median(datos)}")
print(f"Desviación estándar: {np.std(datos):.2f}")

# Distribución normal
print("\\n4. DISTRIBUCIÓN NORMAL")
x = np.linspace(-3, 3, 100)
pdf = stats.norm.pdf(x)  # Función de densidad de probabilidad
cdf = stats.norm.cdf(x)  # Función de distribución acumulativa

print(f"PDF en x=0: {stats.norm.pdf(0):.4f}")
print(f"CDF en x=1: {stats.norm.cdf(1):.4f} (84.13% de los datos están por debajo de 1 desviación estándar)")

# 5. Optimización
print("\\n5. OPTIMIZACIÓN")
# Definir función para minimizar
def funcion(x):
    return (x - 3)**2 + 5

# Encontrar mínimo
resultado = optimize.minimize(funcion, x0=0)
print(f"Función: f(x) = (x-3)² + 5")
print(f"Mínimo encontrado en x = {resultado.x[0]:.4f}")
print(f"Valor mínimo: {resultado.fun:.4f}")

print("\\n=== RESUMEN ===")
print("NumPy proporciona arrays eficientes y operaciones vectorizadas")
print("SciPy añide algoritmos científicos y matemáticos avanzados")`

// Código del ejercicio práctico
const ejercicioCode = `# Solución: Análisis de ventas mensuales con pandas
import pandas as pd
import numpy as np

print("=== ANÁLISIS DE VENTAS MENSUALES ===")

# Datos de ventas mensuales
datos = {
    'Mes': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    'Ventas': [12500, 14300, 18900, 15600, 21000, 19800],
    'Clientes_Nuevos': [45, 52, 68, 55, 72, 65],
    'Costo_Publicidad': [1200, 1500, 1800, 1400, 2000, 1750]
}

# Crear DataFrame
df = pd.DataFrame(datos)
print("\\n1. DATAFRAME COMPLETO:")
print(df)
print()

# 1. Calcular el total de ventas por mes
print("2. TOTAL DE VENTAS POR MES:")
print(df[['Mes', 'Ventas']])
print(f"Ventas totales: {df['Ventas'].sum():,}")
print()

# 2. Encontrar el mes con mayores ventas
mes_max_ventas = df.loc[df['Ventas'].idxmax()]
print("3. MES CON MAYORES VENTAS:")
print(f"Mes: {mes_max_ventas['Mes']}")
print(f"Ventas: {mes_max_ventas['Ventas']:,}")
print()

# 3. Calcular el promedio de ventas
promedio_ventas = df['Ventas'].mean()
print("4. PROMEDIO DE VENTAS:")
print(f"Promedio mensual: {promedio_ventas:,.2f}")
print()

# 4. Identificar meses con ventas superiores al promedio
meses_sobre_promedio = df[df['Ventas'] > promedio_ventas]
print("5. MESES CON VENTAS SOBRE EL PROMEDIO:")
print(meses_sobre_promedio[['Mes', 'Ventas']])
print(f"Cantidad de meses: {len(meses_sobre_promedio)}")
print()

# 5. Análisis adicional: ROI de publicidad
df['ROI'] = (df['Ventas'] / df['Costo_Publicidad']).round(2)
print("6. ANÁLISIS DE ROI (Retorno sobre Inversión):")
print(df[['Mes', 'Ventas', 'Costo_Publicidad', 'ROI']])
print()

# 6. Ventas por cliente nuevo
df['Ventas_Por_Cliente_Nuevo'] = (df['Ventas'] / df['Clientes_Nuevos']).round(2)
print("7. VENTAS POR CLIENTE NUEVO:")
print(df[['Mes', 'Ventas', 'Clientes_Nuevos', 'Ventas_Por_Cliente_Nuevo']])
print()

# 7. Resumen estadístico completo
print("8. RESUMEN ESTADÍSTICO COMPLETO:")
resumen = {
    'Total Ventas': f"{df['Ventas'].sum():,}",
    'Promedio Ventas': f"{df['Ventas'].mean():,.2f}",
    'Máximo Ventas': f"{df['Ventas'].max():,}",
    'Mínimo Ventas': f"{df['Ventas'].min():,}",
    'Desviación Estándar': f"{df['Ventas'].std():,.2f}",
    'ROI Promedio': f"{df['ROI'].mean():.2f}"
}

for clave, valor in resumen.items():
    print(f"{clave}: {valor}")`

// Configuración del quiz
const preguntas = [
  {
    texto: "¿Qué biblioteca de Python se utiliza para manejar hilos?",
    opciones: [
      { texto: "threading", correcta: true },
      { texto: "numpy", correcta: false },
      { texto: "matplotlib", correcta: false },
      { texto: "pandas", correcta: false }
    ]
  },
  {
    texto: "¿Qué biblioteca permite trabajar con procesos en Python?",
    opciones: [
      { texto: "multiprocessing", correcta: true },
      { texto: "tkinter", correcta: false },
      { texto: "random", correcta: false },
      { texto: "sys", correcta: false }
    ]
  },
  {
    texto: "¿Para qué se utiliza la biblioteca asyncio?",
    opciones: [
      { texto: "Programación asíncrona basada en eventos", correcta: true },
      { texto: "Cálculos matemáticos", correcta: false },
      { texto: "Acceso a bases de datos", correcta: false },
      { texto: "Creación de interfaces gráficas", correcta: false }
    ]
  }
]

</script>