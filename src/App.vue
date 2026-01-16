<template>
  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 right-0 h-14 z-40 bg-white border-b">
    <div class="flex items-center px-4 h-14 gap-4">

      <!-- Hamburguesa (izquierda) -->
      <button @click="toggleSidebar"
        class="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
        :aria-label="sidebarOpen ? 'Cerrar menú' : 'Abrir menú'">
        <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': sidebarOpen }" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path v-if="sidebarOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Título -->
      <h1 class="text-lg font-semibold text-gray-700">
        PoliLibro
      </h1>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Usuario -->
      <div class="flex items-center gap-3">
        <span class="hidden sm:block text-sm text-gray-600">
          Luis Torres
        </span>
        <div class="relative">
          <button @click="userMenuOpen = !userMenuOpen"
            class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium hover:opacity-90 transition-opacity">
            LT
          </button>

          <!-- Menú desplegable del usuario -->
          <div v-if="userMenuOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-40"
            v-click-outside="closeUserMenu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Perfil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a>
            <div class="border-t border-gray-100 my-1"></div>
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Overlay para móviles -->
  <div v-if="sidebarOpen && isMobile" @click="closeSidebar"
    class="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"></div>

  <!-- CONTENEDOR PRINCIPAL -->
<div class="flex pt-14 bg-gray-100">


    <!-- SIDEBAR -->
    <aside ref="sidebarRef" class="bg-white w-64 border-r border-gray-200 shadow-lg
         fixed top-14 left-0 h-[calc(100vh-3.5rem)]
         z-30 transition-all duration-300 overflow-y-auto"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 class="text-xl font-bold text-gray-800">Temario</h2>
        <p class="text-sm text-gray-600 mt-1">Selecciona una unidad</p>
      </div>

      <nav class="p-4">
        <!-- Sección de Unidades -->
        <div class="mb-6">
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Unidades</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in temario" :key="index">
              <button @click="selectTema(item, index)" class="w-full text-left px-4 py-3 rounded-lg
                       hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200
                       border border-transparent transition-all duration-200
                       flex items-center justify-between group" :class="{
                        'bg-blue-50 text-blue-700 border-blue-200': activeTema === index,
                        'text-gray-700': activeTema !== index
                      }">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" :class="activeTema === index
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'">
                    {{ index + 1 }}
                  </div>
                  <span class="font-medium">{{ item }}</span>
                </div>
                <svg v-if="activeTema === index" class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Footer de la Sidebar -->
      <div class="p-4 border-t  border-gray-200 mt-auto">
        <div class="text-center">
          <p class="text-sm text-gray-500">© 2024 PoliLibro</p>
          <p class="text-xs text-gray-400 mt-1">v2.1.0</p>
        </div>
      </div>
    </aside>
  </div>

  <!-- CONTENIDO PRINCIPAL -->
<main
  class="flex-1 overflow-y-auto p-4 transition-all duration-300"
  :class="{
    'ml-64': sidebarOpen && !isMobile,
    'ml-0': isMobile
  }"
>
    <RouterView />
  </main>


</template>

<script setup>

import { RouterView, } from 'vue-router'
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Estado reactivo
const sidebarOpen = ref(false)
const userMenuOpen = ref(false)
const activeTema = ref(null)
const isMobile = ref(false)
const sidebarRef = ref(null)

// Datos del temario
const temario = ref([
  "Unidad I-Contenedores",
  "Unidad II-Pilas y Colas",
  "Unidad III-Recursividad y Grafos",
  "Unidad IV-Árboles",
  "Unidad V-Programación concurrente",
])

// Computed properties
const progress = computed(() => {
  const total = temario.value.length
  const completed = temario.value.filter((_, index) => index <= (activeTema.value || 0)).length
  return Math.round((completed / total) * 100)
})

const completedItems = computed(() => {
  return temario.value.filter((_, index) => index <= (activeTema.value || 0)).length
})

// Métodos
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}

const selectTema = (item, index) => {
  activeTema.value = index
  // Cerrar sidebar en móvil al seleccionar un tema
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}

const navigateTema = (direction) => {
  if (activeTema.value === null) {
    activeTema.value = direction > 0 ? 0 : temario.value.length - 1
  } else {
    const newIndex = activeTema.value + direction
    if (newIndex >= 0 && newIndex < temario.value.length) {
      activeTema.value = newIndex
    }
  }
}

const closeUserMenu = () => {
  userMenuOpen.value = false
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
  // En desktop, mantener sidebar cerrada por defecto (si quieres)
  // sidebarOpen.value = !isMobile.value
}

// Lifecycle hooks
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)

  // Cerrar sidebar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sidebarOpen.value = false
      userMenuOpen.value = false
    }
  })

  // Click outside para cerrar sidebar (solo móviles)
  document.addEventListener('click', (e) => {
    if (isMobile.value && sidebarOpen.value && sidebarRef.value &&
      !sidebarRef.value.contains(e.target) &&
      !e.target.closest('button[aria-label*="menú"]')) {
      sidebarOpen.value = false
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

// Directiva para cerrar menús al hacer click fuera
const vClickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!el.contains(event.target)) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

</script>



<style scoped>
/* Estilos personalizados para scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Asegurar que la sidebar se oculte completamente */
.-translate-x-full {
  transform: translateX(-100%);
}

/* Mejorar legibilidad en móviles */
@media (max-width: 768px) {
  main {
    padding: 1rem;
  }

  .space-y-8>*+* {
    margin-top: 2rem;
  }
}
</style>