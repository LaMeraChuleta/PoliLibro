<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Sección 1.3.3 -->
    <section class="bg-white rounded-lg p-6 mb-6">
      <!-- Título -->
      <div class="flex items-center mb-6">
        <span class="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
          3.3
        </span>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">1.3.3 Aplicaciones de conjuntos</h2>
          <p class="text-gray-600">Casos de uso prácticos en programación real</p>
        </div>
      </div>

      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los conjuntos son una herramienta poderosa en Python con aplicaciones prácticas 
          en diversos dominios. Su capacidad para manejar elementos únicos y realizar 
          operaciones eficientes los hace ideales para problemas específicos.
        </p>
        <p class="text-gray-700">
          Desde sistemas de recomendación hasta limpieza de datos, los conjuntos ofrecen 
          soluciones elegantes y eficientes para problemas comunes de programación.
        </p>
      </div>

      <!-- Aplicaciones comunes -->
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-filter text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-blue-800 mb-2">Limpieza de Datos</h3>
          <ul class="text-blue-700 text-sm space-y-1">
            <li>• Eliminar duplicados</li>
            <li>• Encontrar valores únicos</li>
            <li>• Validar integridad</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-sitemap text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-green-800 mb-2">Análisis Relacional</h3>
          <ul class="text-green-700 text-sm space-y-1">
            <li>• Comparar grupos</li>
            <li>• Encontrar relaciones</li>
            <li>• Identificar diferencias</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5">
          <div class="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-user-friends text-xl"></i>
          </div>
          <h3 class="text-lg font-bold text-purple-800 mb-2">Sistemas Sociales</h3>
          <ul class="text-purple-700 text-sm space-y-1">
            <li>• Amigos en común</li>
            <li>• Grupos de interés</li>
            <li>• Recomendaciones</li>
          </ul>
        </div>
      </div>

      <!-- Ejemplo 1: Sistema de amigos en redes sociales -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 1: Sistema de amigos en redes sociales</h3>
        <PythonRunner 
          :code="ejemplo1Code"
          title="red_social.py"
          :showLineNumbers="true"
          initialHeight="320px"
        />
      </div>

      <!-- Ejemplo 2: Análisis de datos de ventas -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 2: Análisis de datos de clientes</h3>
        <PythonRunner 
          :code="ejemplo2Code"
          title="analisis_clientes.py"
          :showLineNumbers="true"
          initialHeight="300px"
        />
      </div>

      <!-- Ejemplo 3: Sistema de inventario con conjuntos -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejemplo 3: Sistema de categorías de productos</h3>
        <PythonRunner 
          :code="ejemplo3Code"
          title="categorias_productos.py"
          :showLineNumbers="true"
          initialHeight="280px"
        />
      </div>

      <!-- Ejercicio práctico -->
      <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Sistema de recomendación de cursos</h3>
        <p class="text-gray-700 mb-4">
          <strong>Situación:</strong> Crea un sistema que recomienda cursos basados en intereses comunes de estudiantes.
        </p>
        
        <PythonRunner 
          :code="ejercicioCode"
          title="recomendacion_cursos.py"
          :showLineNumbers="true"
          initialHeight="300px"
          :showReset="true"
          :showSolution="true"
          :solutionCode="solucionCode"
        />
      </div>

      <!-- Casos de uso reales -->
      <div class="mb-8 p-6 bg-gray-50 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Casos de uso en la industria</h3>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-2">E-commerce</h4>
              <p class="text-gray-700">Identificar productos únicos en carritos de compra, encontrar clientes que compran categorías similares, eliminar productos duplicados en inventario.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i class="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-2">Análisis de Datos</h4>
              <p class="text-gray-700">Encontrar valores únicos en datasets grandes, comparar grupos de usuarios, identificar outliers usando operaciones de conjuntos.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-2">Seguridad</h4>
              <p class="text-gray-700">Manejar listas de IPs bloqueadas, verificar permisos de usuarios, detectar accesos sospechosos comparando patrones de comportamiento.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Consejos de optimización -->
      <div class="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">💡 Consejos de optimización</h3>
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-bolt"></i>
            </div>
            <div>
              <h4 class="font-medium text-gray-800">Eficiencia en búsquedas</h4>
              <p class="text-gray-700 text-sm">Usa conjuntos cuando necesites verificar membresía frecuentemente. <code class="bg-gray-800 text-yellow-300 px-1 rounded">elemento in conjunto</code> es O(1) en promedio.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-magic"></i>
            </div>
            <div>
              <h4 class="font-medium text-gray-800">Eliminar duplicados rápidamente</h4>
              <p class="text-gray-700 text-sm">Convierte una lista a conjunto y de vuelta a lista: <code class="bg-gray-800 text-green-300 px-1 rounded">lista_unica = list(set(lista_con_duplicados))</code></p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <i class="fas fa-exchange-alt"></i>
            </div>
            <div>
              <h4 class="font-medium text-gray-800">Operaciones por lotes</h4>
              <p class="text-gray-700 text-sm">Usa <code class="bg-gray-800 text-blue-300 px-1 rounded">update()</code> en lugar de múltiples <code class="bg-gray-800 text-blue-300 px-1 rounded">add()</code> para agregar muchos elementos.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quiz funcional -->
      <div class="p-6 bg-gray-50 rounded-lg">
        <h3 class="text-xl font-semibold mb-6 text-gray-800">Quiz de aplicaciones de conjuntos</h3>
        
        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">1. {{ preguntas[0].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[0].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[0] === index }">
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

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">2. {{ preguntas[1].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[1].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[1] === index }">
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

        <div class="mb-6">
          <p class="text-gray-700 mb-3 font-medium">3. {{ preguntas[2].texto }}</p>
          <div class="space-y-2">
            <label v-for="(opcion, index) in preguntas[2].opciones" :key="index"
              class="flex items-center p-3 bg-white rounded-lg border cursor-pointer hover:border-purple-300"
              :class="{ 'border-purple-500 border-2': respuestasSeleccionadas[2] === index }">
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

        <div v-if="mostrarResultados" class="mt-6 p-4 rounded-lg" 
             :class="resultadoClass">
          <p class="font-medium">{{ resultadoMensaje }}</p>
          <p class="text-sm mt-2">Correctas: {{ respuestasCorrectas }}/3</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PythonRunner from '@/components/PythonRun.vue'

// Códigos de ejemplo
const ejemplo1Code = `# Sistema de amigos en redes sociales

class RedSocial:
    def __init__(self):
        self.usuarios = {}  # usuario: conjunto de amigos
    
    def registrar_usuario(self, usuario):
        """Registra un nuevo usuario en la red social"""
        if usuario not in self.usuarios:
            self.usuarios[usuario] = set()
            print(f"✓ Usuario '{usuario}' registrado")
    
    def agregar_amistad(self, usuario1, usuario2):
        """Establece una amistad bidireccional"""
        if usuario1 in self.usuarios and usuario2 in self.usuarios:
            self.usuarios[usuario1].add(usuario2)
            self.usuarios[usuario2].add(usuario1)
            print(f"✓ Amistad establecida: {usuario1} ↔ {usuario2}")
    
    def amigos_en_comun(self, usuario1, usuario2):
        """Encuentra amigos comunes entre dos usuarios"""
        if usuario1 in self.usuarios and usuario2 in self.usuarios:
            return self.usuarios[usuario1] & self.usuarios[usuario2]
        return set()
    
    def sugerir_amigos(self, usuario):
        """Sugiere amigos basados en amigos en común"""
        if usuario not in self.usuarios:
            return set()
        
        sugerencias = set()
        mis_amigos = self.usuarios[usuario]
        
        for amigo in mis_amigos:
            # Amigos de mis amigos que no son mis amigos
            amigos_de_amigo = self.usuarios[amigo] - mis_amigos - {usuario}
            sugerencias.update(amigos_de_amigo)
        
        return sugerencias
    
    def analizar_red(self):
        """Analiza estadísticas de la red social"""
        if not self.usuarios:
            return {}
        
        total_usuarios = len(self.usuarios)
        total_conexiones = sum(len(amigos) for amigos in self.usuarios.values()) // 2
        usuario_popular = max(self.usuarios.items(), key=lambda x: len(x[1]))
        
        return {
            "total_usuarios": total_usuarios,
            "total_conexiones": total_conexiones,
            "usuario_mas_popular": usuario_popular[0],
            "amigos_del_popular": len(usuario_popular[1])
        }

# ========== USO DEL SISTEMA ==========
print("🌐 SISTEMA DE RED SOCIAL")
print("=" * 40)

red = RedSocial()

# Registrar usuarios
usuarios = ["Ana", "Luis", "Carlos", "María", "Pedro", "Sofía"]
for usuario in usuarios:
    red.registrar_usuario(usuario)

# Establecer amistades
amistades = [
    ("Ana", "Luis"), ("Ana", "Carlos"), ("Ana", "María"),
    ("Luis", "Carlos"), ("Luis", "Pedro"),
    ("Carlos", "María"), ("Carlos", "Pedro"),
    ("María", "Sofía"), ("Pedro", "Sofía")
]

for amigo1, amigo2 in amistades:
    red.agregar_amistad(amigo1, amigo2)

print("\\n🔍 AMIGOS EN COMÚN:")
print("Ana y Luis:", red.amigos_en_comun("Ana", "Luis"))
print("Carlos y Pedro:", red.amigos_en_comun("Carlos", "Pedro"))

print("\\n💡 SUGERENCIAS DE AMIGOS:")
print("Para Ana:", red.sugerir_amigos("Ana"))
print("Para Pedro:", red.sugerir_amigos("Pedro"))

print("\\n📊 ANÁLISIS DE LA RED:")
estadisticas = red.analizar_red()
print(f"Total usuarios: {estadisticas['total_usuarios']}")
print(f"Total conexiones: {estadisticas['total_conexiones']}")
print(f"Usuario más popular: {estadisticas['usuario_mas_popular']}")
print(f"Amigos del popular: {estadisticas['amigos_del_popular']}")`

const ejemplo2Code = `# Análisis de datos de clientes usando conjuntos

class AnalizadorClientes:
    def __init__(self):
        self.clientes_por_region = {}
        self.productos_por_cliente = {}
    
    def agregar_cliente(self, cliente, region, productos):
        """Agrega un cliente con su región y productos comprados"""
        if region not in self.clientes_por_region:
            self.clientes_por_region[region] = set()
        self.clientes_por_region[region].add(cliente)
        
        self.productos_por_cliente[cliente] = set(productos)
    
    def clientes_comunes_regiones(self, region1, region2):
        """Encuentra clientes que compran en ambas regiones"""
        if region1 in self.clientes_por_region and region2 in self.clientes_por_region:
            return self.clientes_por_region[region1] & self.clientes_por_region[region2]
        return set()
    
    def productos_populares(self, min_clientes=2):
        """Encuentra productos comprados por al menos min_clientes"""
        conteo_productos = {}
        for productos in self.productos_por_cliente.values():
            for producto in productos:
                conteo_productos[producto] = conteo_productos.get(producto, 0) + 1
        
        populares = {producto for producto, count in conteo_productos.items() 
                    if count >= min_clientes}
        return populares
    
    def recomendar_productos(self, cliente):
        """Recomienda productos basados en compras similares"""
        if cliente not in self.productos_por_cliente:
            return set()
        
        mis_productos = self.productos_por_cliente[cliente]
        recomendaciones = set()
        
        for otro_cliente, productos in self.productos_por_cliente.items():
            if otro_cliente != cliente:
                # Productos que compró el otro cliente pero yo no
                nuevos_productos = productos - mis_productos
                if len(nuevos_productos) > 0:
                    # Si tenemos al menos 2 productos en común
                    productos_comunes = mis_productos & productos
                    if len(productos_comunes) >= 2:
                        recomendaciones.update(nuevos_productos)
        
        return recomendaciones
    
    def analizar_segmentos(self):
        """Analiza segmentos de mercado"""
        regiones = set(self.clientes_por_region.keys())
        todos_clientes = set()
        for clientes in self.clientes_por_region.values():
            todos_clientes.update(clientes)
        
        return {
            "total_regiones": len(regiones),
            "total_clientes": len(todos_clientes),
            "clientes_unicos_por_region": {region: len(clientes) 
                                         for region, clientes in self.clientes_por_region.items()}
        }

# ========== USO DEL SISTEMA ==========
print("🏪 ANÁLISIS DE CLIENTES")
print("=" * 40)

analizador = AnalizadorClientes()

# Agregar datos de clientes
datos_clientes = [
    ("Cliente1", "Norte", ["Laptop", "Mouse", "Teclado"]),
    ("Cliente2", "Norte", ["Laptop", "Monitor", "Impresora"]),
    ("Cliente3", "Sur", ["Tablet", "Mouse", "Audífonos"]),
    ("Cliente4", "Norte", ["Laptop", "Tablet", "Monitor"]),
    ("Cliente5", "Sur", ["Teclado", "Mouse", "Audífonos"]),
    ("Cliente6", "Centro", ["Laptop", "Monitor", "Impresora"]),
]

for cliente, region, productos in datos_clientes:
    analizador.agregar_cliente(cliente, region, productos)

print("\\n📍 CLIENTES POR REGIÓN:")
for region, clientes in analizador.clientes_por_region.items():
    print(f"{region}: {len(clientes)} clientes")

print("\\n🛒 PRODUCTOS POPULARES (comprados por 2+ clientes):")
print(analizador.productos_populares(2))

print("\\n💡 RECOMENDACIONES PARA Cliente1:")
print(analizador.recomendar_productos("Cliente1"))

print("\\n📊 ANÁLISIS DE SEGMENTOS:")
segmentos = analizador.analizar_segmentos()
print(f"Total regiones: {segmentos['total_regiones']}")
print(f"Total clientes: {segmentos['total_clientes']}")
print("Clientes por región:", segmentos["clientes_unicos_por_region"])`

const ejemplo3Code = `# Sistema de categorías de productos

class SistemaCategorias:
    def __init__(self):
        self.categorias = {}  # categoria: conjunto de productos
        self.productos = {}   # producto: conjunto de categorías
    
    def agregar_producto(self, producto, *categorias_producto):
        """Agrega un producto con sus categorías"""
        if producto not in self.productos:
            self.productos[producto] = set()
        
        for categoria in categorias_producto:
            # Agregar categoría al producto
            self.productos[producto].add(categoria)
            
            # Agregar producto a la categoría
            if categoria not in self.categorias:
                self.categorias[categoria] = set()
            self.categorias[categoria].add(producto)
        
        print(f"✓ Producto '{producto}' agregado a {len(categorias_producto)} categorías")
    
    def productos_relacionados(self, producto):
        """Encuentra productos relacionados por categorías comunes"""
        if producto not in self.productos:
            return set()
        
        mis_categorias = self.productos[producto]
        relacionados = set()
        
        for otro_producto, categorias in self.productos.items():
            if otro_producto != producto:
                categorias_comunes = mis_categorias & categorias
                if len(categorias_comunes) > 0:
                    relacionados.add(otro_producto)
        
        return relacionados
    
    def categorias_comunes(self, producto1, producto2):
        """Encuentra categorías comunes entre dos productos"""
        if producto1 in self.productos and producto2 in self.productos:
            return self.productos[producto1] & self.productos[producto2]
        return set()
    
    def productos_por_categoria(self, categoria):
        """Obtiene todos los productos de una categoría"""
        return self.categorias.get(categoria, set())
    
    def analizar_sistema(self):
        """Analiza estadísticas del sistema"""
        total_productos = len(self.productos)
        total_categorias = len(self.categorias)
        
        # Producto con más categorías
        if self.productos:
            producto_mas_categorias = max(self.productos.items(), key=lambda x: len(x[1]))
        
        # Categoría con más productos
        if self.categorias:
            categoria_mas_productos = max(self.categorias.items(), key=lambda x: len(x[1]))
        
        return {
            "total_productos": total_productos,
            "total_categorias": total_categorias,
            "producto_mas_categorias": producto_mas_categorias[0] if self.productos else None,
            "categorias_del_producto": len(producto_mas_categorias[1]) if self.productos else 0,
            "categoria_mas_productos": categoria_mas_productos[0] if self.categorias else None,
            "productos_en_categoria": len(categoria_mas_productos[1]) if self.categorias else 0
        }

# ========== USO DEL SISTEMA ==========
print("🏷️ SISTEMA DE CATEGORÍAS DE PRODUCTOS")
print("=" * 50)

sistema = SistemaCategorias()

# Agregar productos con categorías
sistema.agregar_producto("Laptop Gamer", "Electrónica", "Computación", "Gaming")
sistema.agregar_producto("Mouse RGB", "Computación", "Gaming", "Accesorios")
sistema.agregar_producto("Teclado Mecánico", "Computación", "Gaming", "Accesorios")
sistema.agregar_producto("Monitor 4K", "Electrónica", "Computación")
sistema.agregar_producto("Auriculares", "Audio", "Gaming", "Accesorios")

print("\\n🔗 PRODUCTOS RELACIONADOS:")
print("Para 'Laptop Gamer':", sistema.productos_relacionados("Laptop Gamer"))
print("Para 'Mouse RGB':", sistema.productos_relacionados("Mouse RGB"))

print("\\n🏷️ CATEGORÍAS COMUNES:")
print("Laptop Gamer y Monitor 4K:", sistema.categorias_comunes("Laptop Gamer", "Monitor 4K"))

print("\\n📦 PRODUCTOS POR CATEGORÍA:")
print("En 'Gaming':", sistema.productos_por_categoria("Gaming"))
print("En 'Computación':", sistema.productos_por_categoria("Computación"))

print("\\n📊 ANÁLISIS DEL SISTEMA:")
estadisticas = sistema.analizar_sistema()
print(f"Total productos: {estadisticas['total_productos']}")
print(f"Total categorías: {estadisticas['total_categorias']}")
print(f"Producto con más categorías: {estadisticas['producto_mas_categorias']}")
print(f"Categorías de ese producto: {estadisticas['categorias_del_producto']}")
print(f"Categoría con más productos: {estadisticas['categoria_mas_productos']}")
print(f"Productos en esa categoría: {estadisticas['productos_en_categoria']}")`

const ejercicioCode = `# EJERCICIO: Sistema de recomendación de cursos

# Intereses de estudiantes (conjuntos de temas que les interesan)
intereses_estudiantes = {
    "Ana": {"Python", "Machine Learning", "Análisis de Datos", "Estadística"},
    "Luis": {"Python", "Web Development", "JavaScript", "Bases de Datos"},
    "María": {"Machine Learning", "Estadística", "Matemáticas", "Python"},
    "Carlos": {"Web Development", "JavaScript", "React", "CSS"},
    "Sofía": {"Análisis de Datos", "Python", "Bases de Datos", "Estadística"}
}

# Cursos disponibles con sus temas
cursos_disponibles = {
    "DS101": {"Python", "Estadística", "Análisis de Datos"},
    "ML201": {"Python", "Machine Learning", "Matemáticas"},
    "WD301": {"JavaScript", "Web Development", "React", "CSS"},
    "DB401": {"Bases de Datos", "SQL", "Python"},
    "PY101": {"Python", "Programación", "Algoritmos"}
}

# INSTRUCCIONES:
# 1. Para cada estudiante, encuentra los cursos que coinciden con al menos 2 de sus intereses
#    recomendaciones = {estudiante: [cursos recomendados]}

# 2. Encuentra el curso más popular (interesa a más estudiantes)
#    curso_popular = ...

# 3. Encuentra estudiantes con intereses similares a "Ana"
#    (al menos 3 intereses en común)
#    similares_ana = ...

# 4. Encuentra temas que interesan a todos los estudiantes
#    temas_comunes = ...

# 5. Sugiere un nuevo curso basado en intereses no cubiertos
#    (temas que interesan a 2+ estudiantes pero no están en cursos actuales)
#    nuevo_curso = ...

print("Sistema de Recomendación de Cursos")
print("=" * 50)

print("\\n📚 CURSOS RECOMENDADOS POR ESTUDIANTE:")
# Mostrar recomendaciones

print("\\n🏆 CURSO MÁS POPULAR:")
# Mostrar curso popular

print("\\n👥 ESTUDIANTES SIMILARES A ANA:")
# Mostrar estudiantes similares

print("\\n🎯 TEMAS COMUNES A TODOS:")
# Mostrar temas comunes

print("\\n💡 SUGERENCIA DE NUEVO CURSO:")
# Mostrar nuevo curso sugerido`

const solucionCode = `# SOLUCIÓN: Sistema de recomendación de cursos

intereses_estudiantes = {
    "Ana": {"Python", "Machine Learning", "Análisis de Datos", "Estadística"},
    "Luis": {"Python", "Web Development", "JavaScript", "Bases de Datos"},
    "María": {"Machine Learning", "Estadística", "Matemáticas", "Python"},
    "Carlos": {"Web Development", "JavaScript", "React", "CSS"},
    "Sofía": {"Análisis de Datos", "Python", "Bases de Datos", "Estadística"}
}

cursos_disponibles = {
    "DS101": {"Python", "Estadística", "Análisis de Datos"},
    "ML201": {"Python", "Machine Learning", "Matemáticas"},
    "WD301": {"JavaScript", "Web Development", "React", "CSS"},
    "DB401": {"Bases de Datos", "SQL", "Python"},
    "PY101": {"Python", "Programación", "Algoritmos"}
}

# 1. Recomendaciones por estudiante (al menos 2 intereses en común)
recomendaciones = {}
for estudiante, intereses in intereses_estudiantes.items():
    cursos_recomendados = []
    for curso_id, temas_curso in cursos_disponibles.items():
        intereses_comunes = intereses & temas_curso
        if len(intereses_comunes) >= 2:
            cursos_recomendados.append(curso_id)
    recomendaciones[estudiante] = cursos_recomendados

# 2. Curso más popular
conteo_cursos = {}
for estudiante, intereses in intereses_estudiantes.items():
    for curso_id, temas_curso in cursos_disponibles.items():
        if len(intereses & temas_curso) > 0:
            conteo_cursos[curso_id] = conteo_cursos.get(curso_id, 0) + 1

curso_popular = max(conteo_cursos.items(), key=lambda x: x[1])[0] if conteo_cursos else None

# 3. Estudiantes similares a Ana (al menos 3 intereses en común)
intereses_ana = intereses_estudiantes["Ana"]
similares_ana = []
for estudiante, intereses in intereses_estudiantes.items():
    if estudiante != "Ana":
        intereses_comunes = intereses_ana & intereses
        if len(intereses_comunes) >= 3:
            similares_ana.append(estudiante)

# 4. Temas comunes a todos los estudiantes
temas_comunes = set.intersection(*intereses_estudiantes.values())

# 5. Sugerir nuevo curso (temas que interesan a 2+ estudiantes pero no están en cursos)
todos_temas_cursos = set()
for temas in cursos_disponibles.values():
    todos_temas_cursos.update(temas)

conteo_temas = {}
for intereses in intereses_estudiantes.values():
    for tema in intereses:
        conteo_temas[tema] = conteo_temas.get(tema, 0) + 1

temas_no_cubiertos = {tema for tema, count in conteo_temas.items() 
                     if count >= 2 and tema not in todos_temas_cursos}

nuevo_curso = sorted(temas_no_cubiertos)[:3] if temas_no_cubiertos else []

print("Sistema de Recomendación de Cursos")
print("=" * 50)

print("\\n📚 CURSOS RECOMENDADOS POR ESTUDIANTE:")
for estudiante, cursos in recomendaciones.items():
    print(f"{estudiante}: {cursos}")

print("\\n🏆 CURSO MÁS POPULAR:")
print(f"{curso_popular} (interesa a {conteo_cursos[curso_popular]} estudiantes)")

print("\\n👥 ESTUDIANTES SIMILARES A ANA:")
print(similares_ana if similares_ana else "Ningún estudiante tiene 3+ intereses en común con Ana")

print("\\n🎯 TEMAS COMUNES A TODOS:")
print(temas_comunes if temas_comunes else "No hay temas comunes a todos")

print("\\n💡 SUGERENCIA DE NUEVO CURSO:")
if nuevo_curso:
    print(f"Curso sugerido con temas: {nuevo_curso}")
else:
    print("Todos los temas populares ya están cubiertos")

# Información adicional
print("\\n📊 ESTADÍSTICAS ADICIONALES:")
print(f"Total estudiantes: {len(intereses_estudiantes)}")
print(f"Total cursos disponibles: {len(cursos_disponibles)}")
print(f"Temas únicos en intereses: {len(set.union(*intereses_estudiantes.values()))}")
print(f"Temas únicos en cursos: {len(todos_temas_cursos)}")
print(f"Temas no cubiertos pero populares: {len(temas_no_cubiertos)}")`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Por qué son útiles los conjuntos para sistemas de recomendación?",
    opciones: [
      { texto: "Porque mantienen el orden de los elementos", correcta: false },
      { texto: "Porque permiten encontrar intersecciones y diferencias eficientemente", correcta: true },
      { texto: "Porque pueden almacenar elementos duplicados", correcta: false },
      { texto: "Porque son más fáciles de leer que las listas", correcta: false }
    ]
  },
  {
    texto: "¿Cómo eliminarías eficientemente duplicados de una lista en Python?",
    opciones: [
      { texto: "lista_unica = []\nfor item in lista:\n    if item not in lista_unica:\n        lista_unica.append(item)", correcta: false },
      { texto: "lista_unica = list(set(lista))", correcta: true },
      { texto: "Usar un bucle anidado para comparar todos los elementos", correcta: false },
      { texto: "lista.sort() y luego eliminar duplicados manualmente", correcta: false }
    ]
  },
  {
    texto: "En un sistema de red social, ¿qué operación de conjuntos usarías para encontrar amigos en común?",
    opciones: [
      { texto: "Unión (|)", correcta: false },
      { texto: "Intersección (&)", correcta: true },
      { texto: "Diferencia (-)", correcta: false },
      { texto: "Diferencia simétrica (^)", correcta: false }
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
    resultadoMensaje.value = '¡Excelente! Comprendes las aplicaciones prácticas de conjuntos'
    resultadoClass.value = 'bg-green-100 text-green-800 border border-green-300'
  } else if (correctas >= 2) {
    resultadoMensaje.value = '¡Buen trabajo! Revisa los casos de uso avanzados'
    resultadoClass.value = 'bg-yellow-100 text-yellow-800 border border-yellow-300'
  } else {
    resultadoMensaje.value = 'Sigue practicando con los ejemplos de aplicaciones'
    resultadoClass.value = 'bg-red-100 text-red-800 border border-red-300'
  }
}

const reiniciarQuiz = () => {
  respuestasSeleccionadas.value = [null, null, null]
  mostrarResultados.value = false
  respuestasCorrectas.value = 0
}
</script>