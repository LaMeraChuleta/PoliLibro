<template>
  <div class="container mx-auto px-4 py-6">
    <HeaderTitle numero="1.4" titulo="1.4.4 Aplicaciones de Diccionarios">
      <!-- Explicación teórica -->
      <div class="mb-8">
        <p class="text-gray-700 mb-4">
          Los diccionarios no son solo estructuras teóricas, son herramientas poderosas que se utilizan en
          <strong class="text-purple-600">aplicaciones del mundo real</strong>. En este capítulo exploraremos
          casos prácticos donde los diccionarios resuelven problemas comunes de programación.
        </p>
        <p class="text-gray-700">
          Desde contar palabras hasta gestionar configuraciones complejas, los diccionarios ofrecen
          soluciones eficientes y elegantes para problemas cotidianos en desarrollo de software.
        </p>
      </div>
    </HeaderTitle>

    <!-- Aplicaciones principales -->
    <div class="grid md:grid-cols-4 gap-4 mb-8">
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">C</span>
        </div>
        <h3 class="font-bold text-blue-800 mb-1">Contadores</h3>
        <p class="text-blue-700 text-sm">Contar frecuencia de elementos</p>
      </div>
      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">M</span>
        </div>
        <h3 class="font-bold text-green-800 mb-1">Mapeo</h3>
        <p class="text-green-700 text-sm">Relacionar datos equivalentes</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">G</span>
        </div>
        <h3 class="font-bold text-red-800 mb-1">Agrupación</h3>
        <p class="text-red-700 text-sm">Agrupar elementos por categoría</p>
      </div>
      <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div class="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center mb-3">
          <span class="text-lg font-bold">S</span>
        </div>
        <h3 class="font-bold text-yellow-800 mb-1">Configuración</h3>
        <p class="text-yellow-700 text-sm">Almacenar configuraciones</p>
      </div>
    </div>

    <!-- Ejemplo 1: Contador de palabras -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Aplicación 1: Contador de Palabras</h3>
      <PythonRunner :code="ejemplo1Code" title="contador_palabras.py" :show-line-numbers="true" :initial-height="280" />
    </div>

    <!-- Ejemplo 2: Sistema de configuración -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Aplicación 2: Sistema de Configuración</h3>
      <PythonRunner :code="ejemplo2Code" title="sistema_configuracion.py" :show-line-numbers="true"
        :initial-height="320" />
    </div>

    <!-- Ejemplo 3: Agrupación de datos -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Aplicación 3: Agrupación de Estudiantes</h3>
      <p class="text-gray-700 mb-4">
        Los diccionarios son ideales para agrupar datos por categorías comunes:
      </p>
      <PythonRunner :code="ejemplo3Code" title="agrupacion_estudiantes.py" :show-line-numbers="true"
        :initial-height="300" />
    </div>

    <!-- Ejercicio práctico -->
    <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Ejercicio práctico: Sistema de Votación</h3>
      <p class="text-gray-700 mb-4">
        <strong>Situación:</strong> Crea un sistema para contar votos en una elección estudiantil.
      </p>

      <PythonRunner :code="ejercicioCode" title="sistema_votacion.py" :show-line-numbers="true" :initial-height="260"
        :show-reset="true" :show-solution="true" :solution-code="solucionCode" />
    </div>

    <!-- Quiz funcional -->
    <QuizQuestions :preguntas="preguntas" titulo="Quiz de Aplicaciones de Diccionarios"></QuizQuestions>

  </div>
</template>

<script setup>

import PythonRunner from '@/components/PythonRun.vue'
import HeaderTitle from "@/components/HeaderTitle.vue"
import QuizQuestions from '@/components/QuizQuestions.vue'
// Ejemplo 1: Contador de palabras
const ejemplo1Code = `# Aplicacion: Contador de Palabras en un Texto

def contar_palabras(texto):
    """
    Cuenta la frecuencia de cada palabra en un texto.
    Retorna un diccionario con palabra: frecuencia
    """
    # Convertir a minusculas y dividir en palabras
    palabras = texto.lower().split()
    
    # Diccionario para contar frecuencia
    contador = {}
    
    for palabra in palabras:
        # Limpiar signos de puntuacion
        palabra_limpia = palabra.strip('.,;:!?()[]{}"\'')
        
        if palabra_limpia:  # Solo si no esta vacia
            if palabra_limpia in contador:
                contador[palabra_limpia] += 1
            else:
                contador[palabra_limpia] = 1
    
    return contador

def mostrar_top_palabras(contador, n=5):
    """
    Muestra las n palabras mas frecuentes
    """
    # Ordenar por frecuencia descendente
    palabras_ordenadas = sorted(
        contador.items(),
        key=lambda item: item[1],
        reverse=True
    )
    
    print(f"Top {n} palabras mas frecuentes:")
    print("-" * 30)
    
    for i, (palabra, frecuencia) in enumerate(palabras_ordenadas[:n], 1):
        print(f"{i:2}. {palabra:15} : {frecuencia:3} veces")

# Texto de ejemplo
texto_ejemplo = """
Python es un lenguaje de programacion interpretado, de alto nivel y 
de proposito general. Python es conocido por su sintaxis clara y 
legible. Python es ampliamente utilizado en ciencia de datos, 
inteligencia artificial, desarrollo web y automatizacion.
"""

print("CONTADOR DE PALABRAS")
print("=" * 50)

# Contar palabras
resultados = contar_palabras(texto_ejemplo)

print(f"Total de palabras unicas: {len(resultados)}")
print(f"Total de palabras: {sum(resultados.values())}")

# Mostrar todas las palabras con su frecuencia
print("\\nFrecuencia de todas las palabras:")
print("-" * 40)
for palabra, frecuencia in sorted(resultados.items()):
    print(f"{palabra:20} : {frecuencia:2}")

# Mostrar top palabras
mostrar_top_palabras(resultados, 5)

# Analisis adicional
print("\\nANALISIS ADICIONAL:")
print("-" * 30)

# Palabras que aparecen mas de una vez
palabras_repetidas = {p: f for p, f in resultados.items() if f > 1}
print(f"Palabras repetidas: {len(palabras_repetidas)}")

# Palabra mas frecuente
palabra_mas_frecuente = max(resultados, key=resultados.get)
print(f"Palabra mas frecuente: '{palabra_mas_frecuente}' ({resultados[palabra_mas_frecuente]} veces)")

# Palabras con una sola ocurrencia
palabras_unicas = [p for p, f in resultados.items() if f == 1]
print(f"Palabras unicas (solo una vez): {len(palabras_unicas)}")

# Ejemplo de busqueda especifica
print("\\nBUSQUEDA ESPECIFICA:")
palabras_buscar = ["python", "programacion", "desarrollo", "no_existe"]
for palabra in palabras_buscar:
    frecuencia = resultados.get(palabra.lower(), 0)
    print(f"'{palabra}': {frecuencia} veces")`

// Ejemplo 2: Sistema de configuración
const ejemplo2Code = `# Aplicacion: Sistema de Configuracion

class SistemaConfiguracion:
    """
    Sistema para gestionar configuraciones usando diccionarios anidados
    """
    
    def __init__(self):
        # Configuracion por defecto
        self.config = {
            "general": {
                "nombre_aplicacion": "MiApp",
                "version": "1.0.0",
                "modo_depuracion": False,
                "idioma": "es"
            },
            "base_datos": {
                "host": "localhost",
                "puerto": 5432,
                "usuario": "admin",
                "contrasena": "",
                "nombre_bd": "mi_base_datos"
            },
            "servidor": {
                "puerto": 8000,
                "timeout": 30,
                "max_conexiones": 100,
                "ssl_habilitado": True
            },
            "logging": {
                "nivel": "INFO",
                "archivo_salida": "app.log",
                "formato": "%(asctime)s - %(levelname)s - %(message)s"
            }
        }
    
    def obtener_configuracion(self, seccion, clave=None):
        """
        Obtiene una configuracion especifica
        """
        if seccion not in self.config:
            raise ValueError(f"Seccion '{seccion}' no existe")
        
        if clave is None:
            return self.config[seccion]
        
        if clave not in self.config[seccion]:
            raise ValueError(f"Clave '{clave}' no existe en seccion '{seccion}'")
        
        return self.config[seccion][clave]
    
    def actualizar_configuracion(self, seccion, clave, valor):
        """
        Actualiza una configuracion especifica
        """
        if seccion not in self.config:
            raise ValueError(f"Seccion '{seccion}' no existe")
        
        if clave not in self.config[seccion]:
            raise ValueError(f"Clave '{clave}' no existe en seccion '{seccion}'")
        
        self.config[seccion][clave] = valor
        return True
    
    def agregar_seccion(self, nombre_seccion, configuraciones):
        """
        Agrega una nueva seccion de configuracion
        """
        if nombre_seccion in self.config:
            raise ValueError(f"Seccion '{nombre_seccion}' ya existe")
        
        self.config[nombre_seccion] = configuraciones
        return True
    
    def mostrar_configuracion(self, seccion=None):
        """
        Muestra la configuracion completa o de una seccion
        """
        if seccion:
            if seccion not in self.config:
                print(f"Seccion '{seccion}' no encontrada")
                return
            
            print(f"CONFIGURACION - {seccion.upper()}:")
            print("-" * 40)
            for clave, valor in self.config[seccion].items():
                print(f"  {clave:20} : {valor}")
        else:
            print("CONFIGURACION COMPLETA DEL SISTEMA")
            print("=" * 50)
            for seccion, valores in self.config.items():
                print(f"\\n[{seccion.upper()}]")
                for clave, valor in valores.items():
                    print(f"  {clave:20} : {valor}")
    
    def exportar_config_json(self):
        """
        Exporta la configuracion a formato JSON-like
        """
        import json
        return json.dumps(self.config, indent=2, ensure_ascii=False)
    
    def cargar_config_desde_dict(self, nuevo_config):
        """
        Carga configuracion desde un diccionario externo
        """
        # Validar estructura
        if not isinstance(nuevo_config, dict):
            raise ValueError("La configuracion debe ser un diccionario")
        
        # Actualizar configuracion existente
        for seccion, valores in nuevo_config.items():
            if seccion in self.config:
                self.config[seccion].update(valores)
            else:
                self.config[seccion] = valores
        
        return True

# Uso del sistema de configuracion
print("SISTEMA DE CONFIGURACION")
print("=" * 50)

# Crear instancia
sistema = SistemaConfiguracion()

# Mostrar configuracion completa
sistema.mostrar_configuracion()

# Obtener configuracion especifica
print("\\nCONFIGURACION ESPECIFICA:")
print("-" * 30)
try:
    host_db = sistema.obtener_configuracion("base_datos", "host")
    puerto_servidor = sistema.obtener_configuracion("servidor", "puerto")
    print(f"Host base de datos: {host_db}")
    print(f"Puerto servidor: {puerto_servidor}")
except ValueError as e:
    print(f"Error: {e}")

# Actualizar configuracion
print("\\nACTUALIZANDO CONFIGURACION...")
sistema.actualizar_configuracion("servidor", "puerto", 8080)
sistema.actualizar_configuracion("general", "modo_depuracion", True)

# Agregar nueva seccion
print("\\nAGREGANDO NUEVA SECCION...")
nueva_seccion = {
    "api_key": "abc123xyz789",
    "endpoint": "https://api.ejemplo.com",
    "timeout": 10
}
sistema.agregar_seccion("api", nueva_seccion)

# Mostrar seccion especifica
print("\\nCONFIGURACION ACTUALIZADA - SERVIDOR:")
sistema.mostrar_configuracion("servidor")

# Exportar configuracion
print("\\nEXPORTANDO CONFIGURACION:")
config_json = sistema.exportar_config_json()
print(config_json[:200] + "...")

# Cargar configuracion externa
print("\\nCARGANDO CONFIGURACION EXTERNA...")
config_externa = {
    "general": {
        "idioma": "en",
        "zona_horaria": "UTC-5"
    },
    "api": {
        "version": "v2",
        "cache_habilitado": True
    }
}

sistema.cargar_config_desde_dict(config_externa)

print("\\nCONFIGURACION FINAL:")
sistema.mostrar_configuracion("general")
sistema.mostrar_configuracion("api")`

// Ejemplo 3: Agrupación de estudiantes
const ejemplo3Code = `# Aplicacion: Agrupacion de Estudiantes por Carrera

def agrupar_estudiantes_por_carrera(estudiantes):
    """
    Agrupa estudiantes por carrera usando diccionarios anidados
    """
    agrupacion = {}
    
    for estudiante in estudiantes:
        carrera = estudiante["carrera"]
        
        # Si la carrera no existe en el diccionario, crearla
        if carrera not in agrupacion:
            agrupacion[carrera] = {
                "estudiantes": [],
                "total_estudiantes": 0,
                "promedio_general": 0,
                "edad_promedio": 0
            }
        
        # Agregar estudiante a la carrera
        agrupacion[carrera]["estudiantes"].append(estudiante)
        agrupacion[carrera]["total_estudiantes"] += 1
    
    # Calcular estadisticas para cada carrera
    for carrera, datos in agrupacion.items():
        if datos["total_estudiantes"] > 0:
            # Calcular promedio general
            total_promedio = sum(e["promedio"] for e in datos["estudiantes"])
            agrupacion[carrera]["promedio_general"] = total_promedio / datos["total_estudiantes"]
            
            # Calcular edad promedio
            total_edad = sum(e["edad"] for e in datos["estudiantes"])
            agrupacion[carrera]["edad_promedio"] = total_edad / datos["total_estudiantes"]
    
    return agrupacion

def encontrar_mejor_estudiante_por_carrera(agrupacion):
    """
    Encuentra el mejor estudiante de cada carrera
    """
    mejores = {}
    
    for carrera, datos in agrupacion.items():
        if datos["estudiantes"]:
            mejor_estudiante = max(
                datos["estudiantes"],
                key=lambda e: e["promedio"]
            )
            mejores[carrera] = {
                "nombre": mejor_estudiante["nombre"],
                "promedio": mejor_estudiante["promedio"],
                "matricula": mejor_estudiante["matricula"]
            }
    
    return mejores

def generar_reporte_estadistico(agrupacion):
    """
    Genera un reporte estadistico completo
    """
    print("REPORTE ESTADISTICO DE ESTUDIANTES POR CARRERA")
    print("=" * 60)
    
    total_estudiantes = sum(d["total_estudiantes"] for d in agrupacion.values())
    print(f"Total de estudiantes: {total_estudiantes}")
    print(f"Total de carreras: {len(agrupacion)}")
    print()
    
    # Mostrar datos por carrera
    for carrera, datos in sorted(agrupacion.items()):
        print(f"CARRERA: {carrera.upper()}")
        print("-" * 40)
        print(f"  Estudiantes: {datos['total_estudiantes']}")
        print(f"  Promedio general: {datos['promedio_general']:.2f}")
        print(f"  Edad promedio: {datos['edad_promedio']:.1f} años")
        
        # Mostrar estudiantes de esta carrera
        print(f"  Estudiantes:")
        for estudiante in datos["estudiantes"]:
            print(f"    - {estudiante['nombre']} (Matricula: {estudiante['matricula']})")
        print()

# Datos de estudiantes
estudiantes = [
    {"nombre": "Ana Garcia", "edad": 22, "carrera": "Ingenieria", "promedio": 8.5, "matricula": "A001"},
    {"nombre": "Carlos Ruiz", "edad": 23, "carrera": "Medicina", "promedio": 9.2, "matricula": "A002"},
    {"nombre": "Maria Lopez", "edad": 21, "carrera": "Ingenieria", "promedio": 7.8, "matricula": "A003"},
    {"nombre": "Pedro Martinez", "edad": 24, "carrera": "Derecho", "promedio": 8.9, "matricula": "A004"},
    {"nombre": "Laura Fernandez", "edad": 22, "carrera": "Medicina", "promedio": 9.5, "matricula": "A005"},
    {"nombre": "Javier Torres", "edad": 23, "carrera": "Ingenieria", "promedio": 8.2, "matricula": "A006"},
    {"nombre": "Sofia Ramirez", "edad": 21, "carrera": "Derecho", "promedio": 8.7, "matricula": "A007"},
    {"nombre": "Diego Castro", "edad": 22, "carrera": "Arquitectura", "promedio": 7.5, "matricula": "A008"},
    {"nombre": "Elena Morales", "edad": 23, "carrera": "Medicina", "promedio": 9.0, "matricula": "A009"},
    {"nombre": "Ricardo Vargas", "edad": 24, "carrera": "Arquitectura", "promedio": 8.0, "matricula": "A010"}
]

print("APLICACION: AGRUPACION DE ESTUDIANTES")
print("=" * 50)

# Agrupar estudiantes
agrupacion = agrupar_estudiantes_por_carrera(estudiantes)

# Generar reporte
generar_reporte_estadistico(agrupacion)

# Encontrar mejores estudiantes
print("MEJORES ESTUDIANTES POR CARRERA")
print("=" * 40)
mejores = encontrar_mejor_estudiante_por_carrera(agrupacion)

for carrera, datos_mejor in mejores.items():
    print(f"{carrera}:")
    print(f"  Nombre: {datos_mejor['nombre']}")
    print(f"  Promedio: {datos_mejor['promedio']:.2f}")
    print(f"  Matricula: {datos_mejor['matricula']}")
    print()

# Estadisticas adicionales
print("ESTADISTICAS ADICIONALES")
print("-" * 30)

# Carrera con mas estudiantes
carrera_mas_estudiantes = max(
    agrupacion.items(),
    key=lambda item: item[1]["total_estudiantes"]
)
print(f"Carrera con mas estudiantes: {carrera_mas_estudiantes[0]} ({carrera_mas_estudiantes[1]['total_estudiantes']})")

# Carrera con mejor promedio
carrera_mejor_promedio = max(
    agrupacion.items(),
    key=lambda item: item[1]["promedio_general"]
)
print(f"Carrera con mejor promedio: {carrera_mejor_promedio[0]} ({carrera_mejor_promedio[1]['promedio_general']:.2f})")

# Estudiantes por rango de edad
print("\\nESTUDIANTES POR EDAD:")
edades = {}
for estudiante in estudiantes:
    edad = estudiante["edad"]
    if edad not in edades:
        edades[edad] = 0
    edades[edad] += 1

for edad, cantidad in sorted(edades.items()):
    print(f"  {edad} años: {cantidad} estudiantes")

# Buscar estudiantes por criterios
print("\\nBUSQUEDA POR CRITERIOS:")
print("-" * 30)

# Estudiantes con promedio > 9.0
estudiantes_excelentes = [
    e for e in estudiantes if e["promedio"] > 9.0
]
print(f"Estudiantes con promedio > 9.0: {len(estudiantes_excelentes)}")

# Estudiantes de Ingenieria mayores de 21
estudiantes_ingenieria = [
    e for e in estudiantes 
    if e["carrera"] == "Ingenieria" and e["edad"] > 21
]
print(f"Estudiantes de Ingenieria mayores de 21: {len(estudiantes_ingenieria)}")`

// Ejercicio práctico
const ejercicioCode = `# EJERCICIO: Sistema de Votacion
# Implementa un sistema para contar votos en una eleccion

print("SISTEMA DE VOTACION ESTUDIANTIL")
print("=" * 50)

# Base de datos de candidatos
candidatos = {
    "A001": {
        "nombre": "Ana Garcia",
        "partido": "Tecnologia",
        "votos": 0
    },
    "B002": {
        "nombre": "Carlos Ruiz",
        "partido": "Deportes",
        "votos": 0
    },
    "C003": {
        "nombre": "Maria Lopez",
        "partido": "Cultura",
        "votos": 0
    }
}

# Votos registrados (estudiante: candidato_votado)
votos_registrados = {}

# INSTRUCCIONES:
# 1. Implementa la funcion registrar_voto(estudiante_id, candidato_id)
#    que registre un voto para un candidato

# 2. Implementa la funcion mostrar_resultados()
#    que muestre los resultados ordenados por votos

# 3. Implementa la funcion buscar_ganador()
#    que retorne el candidato con mas votos

# 4. Implementa la funcion estadisticas_por_partido()
#    que agrupe votos por partido politico

# 5. Simula una eleccion con al menos 10 votos

print("\\nEstado inicial de candidatos:")
for id_candidato, datos in candidatos.items():
    print(f"  {id_candidato}: {datos['nombre']} ({datos['partido']}) - Votos: {datos['votos']}")

# Tu codigo aqui...

# Mostrar resultados finales`

const solucionCode = `# SOLUCION: Sistema de Votacion

print("SISTEMA DE VOTACION ESTUDIANTIL")
print("=" * 50)

# Base de datos de candidatos
candidatos = {
    "A001": {
        "nombre": "Ana Garcia",
        "partido": "Tecnologia",
        "votos": 0
    },
    "B002": {
        "nombre": "Carlos Ruiz",
        "partido": "Deportes",
        "votos": 0
    },
    "C003": {
        "nombre": "Maria Lopez",
        "partido": "Cultura",
        "votos": 0
    }
}

# Votos registrados (estudiante: candidato_votado)
votos_registrados = {}

def registrar_voto(estudiante_id, candidato_id):
    """
    Registra un voto para un candidato
    """
    # Verificar que el candidato existe
    if candidato_id not in candidatos:
        print(f"Error: Candidato {candidato_id} no existe")
        return False
    
    # Verificar que el estudiante no haya votado
    if estudiante_id in votos_registrados:
        print(f"Error: Estudiante {estudiante_id} ya voto")
        return False
    
    # Registrar voto
    votos_registrados[estudiante_id] = candidato_id
    candidatos[candidato_id]["votos"] += 1
    
    print(f"Voto registrado: Estudiante {estudiante_id} voto por {candidatos[candidato_id]['nombre']}")
    return True

def mostrar_resultados():
    """
    Muestra los resultados ordenados por votos
    """
    print("\\nRESULTADOS DE LA ELECCION")
    print("-" * 40)
    
    # Ordenar candidatos por votos (descendente)
    candidatos_ordenados = sorted(
        candidatos.items(),
        key=lambda item: item[1]["votos"],
        reverse=True
    )
    
    for i, (id_candidato, datos) in enumerate(candidatos_ordenados, 1):
        porcentaje = (datos["votos"] / len(votos_registrados) * 100) if votos_registrados else 0
        print(f"{i}. {datos['nombre']} ({datos['partido']}): {datos['votos']} votos ({porcentaje:.1f}%)")
    
    print(f"\\nTotal de votos: {len(votos_registrados)}")

def buscar_ganador():
    """
    Retorna el candidato con mas votos
    """
    if not votos_registrados:
        return None
    
    ganador = max(candidatos.items(), key=lambda item: item[1]["votos"])
    return ganador

def estadisticas_por_partido():
    """
    Agrupa votos por partido politico
    """
    votos_partido = {}
    
    for datos in candidatos.values():
        partido = datos["partido"]
        if partido not in votos_partido:
            votos_partido[partido] = 0
        votos_partido[partido] += datos["votos"]
    
    return votos_partido

print("\\nEstado inicial de candidatos:")
for id_candidato, datos in candidatos.items():
    print(f"  {id_candidato}: {datos['nombre']} ({datos['partido']}) - Votos: {datos['votos']}")

# Simulacion de eleccion
print("\\nINICIANDO VOTACION...")
print("-" * 30)

# Registro de votos
votos_simulados = [
    ("E001", "A001"), ("E002", "B002"), ("E003", "C003"),
    ("E004", "A001"), ("E005", "A001"), ("E006", "B002"),
    ("E007", "C003"), ("E008", "A001"), ("E009", "B002"),
    ("E010", "A001"), ("E011", "C003"), ("E012", "B002"),
    ("E013", "A001"), ("E014", "A001"), ("E015", "C003")
]

for estudiante, candidato in votos_simulados:
    registrar_voto(estudiante, candidato)

# Mostrar resultados
mostrar_resultados()

# Buscar ganador
print("\\nBUSCANDO GANADOR...")
ganador = buscar_ganador()
if ganador:
    id_ganador, datos_ganador = ganador
    print(f"GANADOR: {datos_ganador['nombre']} ({datos_ganador['partido']})")
    print(f"Votos obtenidos: {datos_ganador['votos']}")

# Estadisticas por partido
print("\\nESTADISTICAS POR PARTIDO:")
print("-" * 30)
votos_por_partido = estadisticas_por_partido()

for partido, votos in votos_por_partido.items():
    porcentaje = (votos / len(votos_registrados) * 100)
    print(f"{partido}: {votos} votos ({porcentaje:.1f}%)")

# Informacion adicional
print("\\nINFORMACION ADICIONAL:")
print("-" * 30)
print(f"Total de votantes unicos: {len(votos_registrados)}")
print(f"Participacion: {(len(votos_registrados) / 15 * 100):.1f}% (de 15 estudiantes)")

# Votos por candidato en detalle
print("\\nDETALLE DE VOTOS POR CANDIDATO:")
for id_candidato, datos in candidatos.items():
    estudiantes_votaron = [
        estudiante for estudiante, candidato in votos_registrados.items()
        if candidato == id_candidato
    ]
    print(f"\\n{datos['nombre']}:")
    print(f"  Votos: {len(estudiantes_votaron)}")
    if estudiantes_votaron:
        print(f"  Votantes: {', '.join(estudiantes_votaron[:3])}" + 
              ("..." if len(estudiantes_votaron) > 3 else ""))`

// QUIZ FUNCIONAL
const preguntas = [
  {
    texto: "¿Cuál es una aplicación común de diccionarios para contar elementos?",
    opciones: [
      { texto: "Ordenar listas de forma ascendente", correcta: false },
      { texto: "Contar frecuencia de palabras en un texto", correcta: true },
      { texto: "Realizar operaciones matemáticas complejas", correcta: false },
      { texto: "Crear interfaces gráficas de usuario", correcta: false }
    ]
  },
  {
    texto: "¿Por qué son útiles los diccionarios para sistemas de configuración?",
    opciones: [
      { texto: "Porque pueden almacenar pares clave-valor anidados jerárquicamente", correcta: true },
      { texto: "Porque son más rápidos que las listas para búsquedas", correcta: false },
      { texto: "Porque no necesitan ser importados desde módulos", correcta: false },
      { texto: "Porque pueden almacenar funciones directamente", correcta: false }
    ]
  },
  {
    texto: "En un sistema de votación, ¿cómo usarías diccionarios para agrupar votos por candidato?",
    opciones: [
      { texto: "Usando listas separadas para cada candidato", correcta: false },
      { texto: "Creando un diccionario donde cada candidato es clave y los votos son valor", correcta: true },
      { texto: "Almacenando todo en una sola cadena de texto", correcta: false },
      { texto: "Usando tuplas para cada voto individual", correcta: false }
    ]
  }
]

</script>