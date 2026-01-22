<template>
  <!-- NAVBAR -->
  <header class="fixed top-0 left-0 right-0 h-14 z-40 bg-[#611232] border-b">
    <div class="flex items-center px-4 h-14 gap-4">
      <!-- Hamburguesa (izquierda) -->
      <button @click="toggleSidebar"
        class="text-white hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
        :aria-label="sidebarOpen ? 'Cerrar menú' : 'Abrir menú'">
        <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': sidebarOpen }" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path v-if="sidebarOpen" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Título -->
      <router-link to="/" class="no-underline">
        <h1 class="text-lg font-semibold text-white cursor-pointer hover:opacity-80">
          PoliLibro
        </h1>
      </router-link>
      <!-- Spacer -->
      <div class="flex-1"></div>
    </div>
  </header>

  <!-- Overlay para móviles -->
  <div v-if="sidebarOpen && isMobile" @click="closeSidebar" class="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"></div>
  <!-- CONTENEDOR PRINCIPAL -->
  <div class="flex pt-14 bg-gray-100">
    <!-- SIDEBAR -->
    <aside ref="sidebarRef" class="bg-[#611232] w-64
         border-r border-gray-200 shadow-lg
         fixed top-14 left-0 h-[calc(100vh-3.5rem)]
         z-30 transition-all duration-300
         overflow-y-auto
         flex flex-col" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">

      <div class="p-4 border-b border-gray-200 bg-[#611232] ">
        <h2 class="text-xl font-bold text-white">Temario</h2>
        <p class="text-sm text-white mt-1">Selecciona una unidad</p>
      </div>

      <nav class="p-4">
        <!-- Sección de Unidades -->
       <div class="mb-6">
  <h3 class="text-lg font-semibold text-white uppercase tracking-wider mb-3">Unidades</h3>
  <ul class="space-y-2">
    <li v-for="(item, index) in unidades" :key="index">
      <button @click="navegarAUnidad(item.route)" 
              class="w-full text-left px-2 py-3 rounded-lg border border-transparent transition-all duration-200 flex items-start gap-3 group justify-between"
              :class="{
                'bg-[#8b2c46] text-white border-[#a03a55]': rutaActual === item.route,
                'text-white hover:bg-[#74263c]': rutaActual !== item.route
              }">
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" 
               :class="rutaActual === item.route ? 'bg-blue-100 text-gray-600' : 'bg-white text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'">
            {{ index + 1 }}
          </div>
          <span class="font-medium">{{ item.titulo }}</span>
        </div>
        <svg v-if="rutaActual === item.route" class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </li>
  </ul>
</div>
      </nav>

      <!-- Footer de la Sidebar -->
      <div class="p-4 border-t border-gray-200 mt-auto">
        <div class="text-center">
          <p class="text-sm text-white">© 2025 PoliLibro</p>
          <p class="text-xs text-white mt-1">v1.0.1</p>
        </div>
      </div>
    </aside>
  </div>

  <!-- CONTENIDO PRINCIPAL -->
  <main class="flex-1 overflow-y-auto p-4 transition-all duration-300" :class="{
    'ml-64': sidebarOpen && !isMobile,
    'ml-0': isMobile
  }">
    <RouterView />
  </main>


</template>

<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router' // Añade useRouter
import { ref, computed, onMounted, onUnmounted } from 'vue'

// PRIMERO inicializa router y route
const router = useRouter()
const route = useRoute()

// Estado reactivo
const sidebarOpen = ref(false)
const userMenuOpen = ref(false)
const activeTema = ref(null)
const isMobile = ref(false)
const sidebarRef = ref(null)

// Datos del temario
const unidades = ref([
  { titulo: "Unidad I-Contenedores", route: "/Unidad1" },
  { titulo: "Unidad II-Pilas y Colas", route: "/Unidad2" },
  { titulo: "Unidad III-Recursividad y Grafos", route: "/Unidad3" },
  { titulo: "Unidad IV-Árboles", route: "/Unidad4" },
  { titulo: "Unidad V-Programación concurrente", route: "/Unidad5" },
])


// Computed para saber qué unidad está activa - CORREGIDO
const rutaActual = computed(() => {
  return route?.path || '/' // Usa route que ya está inicializado
})

// Función de navegación
const navegarAUnidad = (ruta) => {
  // Navega a la ruta correspondiente
  router.push(ruta)
  
  // Cierra sidebar en móvil
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}


// Métodos
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}



const closeUserMenu = () => {
  userMenuOpen.value = false
}

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
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