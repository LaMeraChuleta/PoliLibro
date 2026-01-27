<template>
  <div class="container mx-auto px-4 py-6">
    <HeaderTitle numero="1.3" titulo="1.3.2 Operaciones sobre conjuntos">
      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los conjuntos en Python soportan operaciones matemáticas que los hacen especialmente útiles
          para comparar y combinar colecciones de elementos únicos.
        </p>
        <p class="text-gray-700">
          Estas operaciones permiten realizar análisis de datos, filtrado y combinaciones
          de manera eficiente y elegante.
        </p>
      </div>
    </HeaderTitle>

    <!-- Operaciones principales -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-3">
          <i class="fas fa-plus"></i>
        </div>
        <h3 class="font-bold text-blue-800 mb-2">Unión (|)</h3>
        <p class="text-blue-700 text-sm">Elementos en A o B</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mb-3">
          <i class="fas fa-times"></i>
        </div>
        <h3 class="font-bold text-green-800 mb-2">Intersección (&)</h3>
        <p class="text-green-700 text-sm">Elementos en A y B</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center mb-3">
          <i class="fas fa-minus"></i>
        </div>
        <h3 class="font-bold text-red-800 mb-2">Diferencia (-)</h3>
        <p class="text-red-700 text-sm">Elementos en A pero no en B</p>
      </div>
      <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-3">
          <i class="fas fa-code-branch"></i>
        </div>
        <h3 class="font-bold text-purple-800 mb-2">Diferencia Simétrica (^)</h3>
        <p class="text-purple-700 text-sm">Elementos en A o B pero no en ambos</p>
      </div>
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center mb-3">
          <i class="fas fa-equals"></i>
        </div>
        <h3 class="font-bold text-yellow-800 mb-2">Subconjunto (<=)</h3>
            <p class="text-yellow-700 text-sm">Todos los elementos de A están en B</p>
      </div>
    </div>

    <!-- Diagrama visual de operaciones -->
    <div class="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 text-center">Visualización de operaciones</h3>
      <div class="flex flex-col items-center">
        <div class="flex justify-center space-x-8 mb-6">
          <div class="text-center">
            <div class="mb-2 font-medium text-blue-600">Conjunto A</div>
            <div class="w-32 h-32 bg-blue-100 border-2 border-blue-300 rounded-full flex items-center justify-center">
              <div class="text-center">
                <div class="font-bold">1, 2, 3</div>
                <div class="text-sm text-blue-600">A = {1, 2, 3}</div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div class="mb-2 font-medium text-green-600">Conjunto B</div>
            <div class="w-32 h-32 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center">
              <div class="text-center">
                <div class="font-bold">3, 4, 5</div>
                <div class="text-sm text-green-600">B = {3, 4, 5}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="text-sm font-medium text-blue-700 mb-1">A | B</div>
            <div class="px-3 py-2 bg-white border border-blue-200 rounded-lg">
              {1, 2, 3, 4, 5}
            </div>
          </div>
          <div class="text-center">
            <div class="text-sm font-medium text-green-700 mb-1">A & B</div>
            <div class="px-3 py-2 bg-white border border-green-200 rounded-lg">
              {3}
            </div>
          </div>
          <div class="text-center">
            <div class="text-sm font-medium text-red-700 mb-1">A - B</div>
            <div class="px-3 py-2 bg-white border border-red-200 rounded-lg">
              {1, 2}
            </div>
          </div>
          <div class="text-center">
            <div class="text-sm font-medium text-purple-700 mb-1">A ^ B</div>
            <div class="px-3 py-2 bg-white border border-purple-200 rounded-lg">
              {1, 2, 4, 5}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ejemplo 1: Operaciones básicas -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Operaciones básicas</h3>
      <PythonRunner :code="ejemplo1Code" title="operaciones_basicas.py" :showLineNumbers="true" initialHeight="300px" />
    </div>

    <!-- Ejemplo 2: Creación y métodos -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Creación y métodos de conjuntos</h3>
      <PythonRunner :code="ejemplo2Code" title="creacion_metodos.py" :showLineNumbers="true" initialHeight="280px" />
    </div>

    <!-- Ejemplo 3: Sistema de recomendación -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de recomendación de películas</h3>
      <p class="text-gray-700 mb-4">
        Usando operaciones de conjuntos para recomendar películas basadas en gustos comunes:
      </p>
      <PythonRunner :code="ejemplo3Code" title="recomendacion_peliculas.py" :showLineNumbers="true"
        initialHeight="320px" />
    </div>

    <!-- Ejercicio práctico -->
    <!-- <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Análisis de habilidades</h3>
      <p class="text-gray-700 mb-4">
        <strong>Situación:</strong> Analiza las habilidades de dos equipos de desarrollo para planificar capacitaciones.
      </p>

      <PythonRunner :code="ejercicioCode" title="analisis_habilidades.py" :showLineNumbers="true" initialHeight="280px"
        :showReset="true" :showSolution="true" :solutionCode="solucionCode" />
    </div> -->

    <!-- Tabla de métodos -->
    <div class="mb-8 p-6 bg-gray-50 rounded-xl">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Métodos de conjuntos</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Método</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Descripción</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-blue-50">
              <td class="py-3 px-4 border-b font-mono">add(x)</td>
              <td class="py-3 px-4 border-b">Agrega elemento x</td>
              <td class="py-3 px-4 border-b font-mono">s.add(5)</td>
            </tr>
            <tr class="hover:bg-red-50">
              <td class="py-3 px-4 border-b font-mono">remove(x)</td>
              <td class="py-3 px-4 border-b">Elimina x (error si no existe)</td>
              <td class="py-3 px-4 border-b font-mono">s.remove(5)</td>
            </tr>
            <tr class="hover:bg-green-50">
              <td class="py-3 px-4 border-b font-mono">discard(x)</td>
              <td class="py-3 px-4 border-b">Elimina x (sin error si no existe)</td>
              <td class="py-3 px-4 border-b font-mono">s.discard(5)</td>
            </tr>
            <tr class="hover:bg-purple-50">
              <td class="py-3 px-4 border-b font-mono">update(t)</td>
              <td class="py-3 px-4 border-b">Agrega elementos del iterable t</td>
              <td class="py-3 px-4 border-b font-mono">s.update([4,5,6])</td>
            </tr>
            <tr class="hover:bg-yellow-50">
              <td class="py-3 px-4 font-mono">clear()</td>
              <td class="py-3 px-4">Elimina todos los elementos</td>
              <td class="py-3 px-4 font-mono">s.clear()</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Quiz funcional -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de operaciones con conjuntos"></QuizQuestions>

    <!-- Navegación -->
    <NavigationUnidad anterior="/Unidad/1.3.1" siguiente="/Unidad/1.3.3" textoAnterior="Anterior"
      textoSiguiente="Siguiente" tituloActual="Unidad I • Contenedores" mostrarAnterior="true"
      mostrarSiguiente="true" />

  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
import NavigationUnidad from "@/components/NavigationUnidad.vue"

// Códigos de ejemplo
const ejemplo1Code = `# Operaciones básicas con conjuntos

# Definir dos conjuntos
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print("Conjunto A:", A)
print("Conjunto B:", B)

# UNIÓN: elementos en A o B
union = A | B  # También: A.union(B)
print("\\nUnión (A | B):", union)
print("Método union():", A.union(B))

# INTERSECCIÓN: elementos en A y B
interseccion = A & B  # También: A.intersection(B)
print("\\nIntersección (A & B):", interseccion)
print("Método intersection():", A.intersection(B))

# DIFERENCIA: elementos en A pero no en B
diferencia = A - B  # También: A.difference(B)
print("\\nDiferencia (A - B):", diferencia)
print("Diferencia (B - A):", B - A)

# DIFERENCIA SIMÉTRICA: elementos en A o B pero no en ambos
diferencia_simetrica = A ^ B  # También: A.symmetric_difference(B)
print("\\nDiferencia simétrica (A ^ B):", diferencia_simetrica)

# SUBCONJUNTO
C = {2, 3}
print("\\nConjunto C:", C)
print("¿C es subconjunto de A?:", C <= A)  # C ⊆ A
print("¿A es superconjunto de C?:", A >= C)  # A ⊇ C

# DISJUNTOS (sin elementos en común)
D = {9, 10}
print("\\nConjunto D:", D)
print("¿A y D son disjuntos?:", A.isdisjoint(D))
print("¿A y B son disjuntos?:", A.isdisjoint(B))`

const ejemplo2Code = `# Creación y métodos de conjuntos

# Diferentes formas de crear conjuntos
print("=== CREACIÓN DE CONJUNTOS ===")

# 1. Usando llaves
conjunto1 = {1, 2, 3, 4, 5}
print("1. Con llaves:", conjunto1)

# 2. Usando set() con lista
conjunto2 = set([5, 6, 7, 8, 9])
print("2. Con set([...]):", conjunto2)

# 3. Conjunto por comprensión
conjunto3 = {x for x in range(10) if x % 2 == 0}
print("3. Por comprensión (pares):", conjunto3)

# 4. Conjunto vacío (¡importante!)
conjunto_vacio = set()  # NO usar {} que crea diccionario
print("4. Conjunto vacío:", conjunto_vacio)

print("\\n=== MÉTODOS DE MODIFICACIÓN ===")

# Crear un conjunto para modificar
mi_set = {1, 2, 3}
print("Conjunto inicial:", mi_set)

# add() - agregar un elemento
mi_set.add(4)
print("Después de add(4):", mi_set)

# add() con elemento existente (no hace nada)
mi_set.add(2)
print("Después de add(2) (ya existe):", mi_set)

# update() - agregar múltiples elementos
mi_set.update([5, 6, 7])
print("Después de update([5,6,7]):", mi_set)

# remove() - eliminar elemento (error si no existe)
mi_set.remove(3)
print("Después de remove(3):", mi_set)

# discard() - eliminar elemento (sin error si no existe)
mi_set.discard(10)  # No existe, pero no da error
print("Después de discard(10) (no existe):", mi_set)

# pop() - eliminar y retornar elemento aleatorio
elemento = mi_set.pop()
print(f"Elemento pop(): {elemento}")
print("Después de pop():", mi_set)

# clear() - vaciar conjunto
mi_set.clear()
print("Después de clear():", mi_set)`

const ejemplo3Code = `# Sistema de recomendación de películas

class SistemaRecomendacion:
    def __init__(self):
        self.gustos_usuarios = {}
    
    def registrar_gustos(self, usuario, *peliculas):
        """Registra las películas que le gustan a un usuario"""
        if usuario not in self.gustos_usuarios:
            self.gustos_usuarios[usuario] = set()
        self.gustos_usuarios[usuario].update(peliculas)
        print(f"✓ {usuario}: {len(peliculas)} películas registradas")
    
    def peliculas_comunes(self, usuario1, usuario2):
        """Encuentra películas que gustan a ambos usuarios"""
        if usuario1 in self.gustos_usuarios and usuario2 in self.gustos_usuarios:
            comunes = self.gustos_usuarios[usuario1] & self.gustos_usuarios[usuario2]
            return comunes
        return set()
    
    def recomendar_peliculas(self, usuario):
        """Recomienda películas basadas en gustos similares"""
        if usuario not in self.gustos_usuarios:
            return set()
        
        recomendaciones = set()
        mi_set = self.gustos_usuarios[usuario]
        
        for otro_usuario, gustos in self.gustos_usuarios.items():
            if otro_usuario != usuario:
                # Películas que le gustan al otro usuario pero no al actual
                nuevas = gustos - mi_set
                recomendaciones.update(nuevas)
        
        return recomendaciones
    
    def analizar_comunidad(self):
        """Analiza los gustos de toda la comunidad"""
        if not self.gustos_usuarios:
            return {}
        
        # Todas las películas vistas por alguien
        todas_peliculas = set()
        for gustos in self.gustos_usuarios.values():
            todas_peliculas.update(gustos)
        
        # Películas populares (vistas por al menos 2 usuarios)
        peliculas_populares = set()
        for pelicula in todas_peliculas:
            contador = 0
            for gustos in self.gustos_usuarios.values():
                if pelicula in gustos:
                    contador += 1
            if contador >= 2:
                peliculas_populares.add(pelicula)
        
        return {
            "total_usuarios": len(self.gustos_usuarios),
            "total_peliculas": len(todas_peliculas),
            "peliculas_populares": peliculas_populares
        }

# ========== USO DEL SISTEMA ==========
print("🎬 SISTEMA DE RECOMENDACIÓN DE PELÍCULAS")
print("=" * 50)

sistema = SistemaRecomendacion()

# Registrar gustos de usuarios
sistema.registrar_gustos("Ana", "Inception", "Interstellar", "The Matrix", "Avatar")
sistema.registrar_gustos("Luis", "Inception", "Avatar", "Titanic", "Forrest Gump")
sistema.registrar_gustos("Carlos", "The Matrix", "Interstellar", "Gladiator", "Braveheart")
sistema.registrar_gustos("María", "Titanic", "Forrest Gump", "The Notebook", "Avatar")

print("\\n🔍 PELÍCULAS COMUNES:")
print("Ana y Luis:", sistema.peliculas_comunes("Ana", "Luis"))
print("Ana y Carlos:", sistema.peliculas_comunes("Ana", "Carlos"))

print("\\n💡 RECOMENDACIONES:")
print("Para Ana:", sistema.recomendar_peliculas("Ana"))
print("Para Luis:", sistema.recomendar_peliculas("Luis"))

print("\\n📊 ANÁLISIS DE LA COMUNIDAD:")
analisis = sistema.analizar_comunidad()
print(f"Total usuarios: {analisis['total_usuarios']}")
print(f"Total películas únicas: {analisis['total_peliculas']}")
print(f"Películas populares (>1 usuario): {analisis['peliculas_populares']}")`

const ejercicioCode = `# EJERCICIO: Análisis de habilidades de equipos

# Habilidades de dos equipos de desarrollo
equipo_frontend = {"HTML", "CSS", "JavaScript", "React", "Vue", "TypeScript"}
equipo_backend = {"Python", "Django", "JavaScript", "SQL", "Docker", "TypeScript"}

# INSTRUCCIONES:
# 1. Encuentra habilidades comunes a ambos equipos
# habilidades_comunes = ...

# 2. Encuentra habilidades únicas del equipo frontend
# solo_frontend = ...

# 3. Encuentra habilidades únicas del equipo backend
# solo_backend = ...

# 4. Encuentra todas las habilidades disponibles en la empresa
# todas_habilidades = ...

# 5. Verifica si "Python" es una habilidad exclusiva del backend
# python_exclusivo = ...

# 6. Verifica si el equipo frontend tiene todas las habilidades básicas
# habilidades_basicas = {"HTML", "CSS", "JavaScript"}
# tiene_basicas = ...

print("Análisis de Habilidades - Equipos de Desarrollo")
print("=" * 50)

print("\\nEquipo Frontend:", sorted(equipo_frontend))
print("Equipo Backend:", sorted(equipo_backend))

print("\\n📊 RESULTADOS DEL ANÁLISIS:")
print("Habilidades comunes:", habilidades_comunes)
print("Solo Frontend:", solo_frontend)
print("Solo Backend:", solo_backend)
print("Todas las habilidades:", todas_habilidades)
print("¿Python exclusivo del backend?:", python_exclusivo)
print("¿Frontend tiene habilidades básicas?:", tiene_basicas)`

const solucionCode = `# SOLUCIÓN: Análisis de habilidades de equipos

# Habilidades de dos equipos de desarrollo
equipo_frontend = {"HTML", "CSS", "JavaScript", "React", "Vue", "TypeScript"}
equipo_backend = {"Python", "Django", "JavaScript", "SQL", "Docker", "TypeScript"}

# 1. Habilidades comunes a ambos equipos
habilidades_comunes = equipo_frontend & equipo_backend

# 2. Habilidades únicas del equipo frontend
solo_frontend = equipo_frontend - equipo_backend

# 3. Habilidades únicas del equipo backend
solo_backend = equipo_backend - equipo_frontend

# 4. Todas las habilidades disponibles en la empresa
todas_habilidades = equipo_frontend | equipo_backend

# 5. Verificar si "Python" es exclusivo del backend
python_exclusivo = "Python" in solo_backend

# 6. Verificar si frontend tiene habilidades básicas
habilidades_basicas = {"HTML", "CSS", "JavaScript"}
tiene_basicas = habilidades_basicas <= equipo_frontend  # subconjunto

print("Análisis de Habilidades - Equipos de Desarrollo")
print("=" * 50)

print("\\nEquipo Frontend:", sorted(equipo_frontend))
print("Equipo Backend:", sorted(equipo_backend))

print("\\n📊 RESULTADOS DEL ANÁLISIS:")
print("Habilidades comunes:", sorted(habilidades_comunes))
print("Solo Frontend:", sorted(solo_frontend))
print("Solo Backend:", sorted(solo_backend))
print("Todas las habilidades:", sorted(todas_habilidades))
print("¿Python exclusivo del backend?:", python_exclusivo)
print("¿Frontend tiene habilidades básicas?:", tiene_basicas)

# Información adicional
print("\\n📈 ESTADÍSTICAS ADICIONALES:")
print(f"Total habilidades únicas en la empresa: {len(todas_habilidades)}")
print(f"Habilidades compartidas: {len(habilidades_comunes)}")
print(f"Habilidades exclusivas frontend: {len(solo_frontend)}")
print(f"Habilidades exclusivas backend: {len(solo_backend)}")

# Recomendaciones basadas en el análisis
print("\\n💡 RECOMENDACIONES:")
if len(habilidades_comunes) > 0:
    print("1. Promover colaboración en:", ", ".join(sorted(habilidades_comunes)))
if len(solo_frontend) > 0:
    print("2. El backend podría aprender:", ", ".join(sorted(solo_frontend))[:3])
if len(solo_backend) > 0:
    print("3. El frontend podría aprender:", ", ".join(sorted(solo_backend))[:3])`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Qué operación devuelve elementos que están en el primer conjunto pero no en el segundo?",
    opciones: [
      { texto: "Unión (|)", correcta: false },
      { texto: "Intersección (&)", correcta: false },
      { texto: "Diferencia (-)", correcta: true },
      { texto: "Diferencia simétrica (^)", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es la diferencia entre remove() y discard() en conjuntos?",
    opciones: [
      { texto: "remove() elimina todos los elementos, discard() solo uno", correcta: false },
      { texto: "remove() da error si el elemento no existe, discard() no", correcta: true },
      { texto: "discard() es más rápido que remove()", correcta: false },
      { texto: "No hay diferencia, son lo mismo", correcta: false }
    ]
  },
  {
    texto: "Si A = {1,2,3} y B = {3,4,5}, ¿qué devuelve A ^ B?",
    opciones: [
      { texto: "{1, 2, 3, 4, 5}", correcta: false },
      { texto: "{3}", correcta: false },
      { texto: "{1, 2, 4, 5}", correcta: true },
      { texto: "{1, 2}", correcta: false }
    ]
  }
]
</script>