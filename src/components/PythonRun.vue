<template>
  <div class="bg-gray-900 border border-gray-700 rounded-xl p-4 space-y-3">

    <h3 class="text-green-400 font-semibold text-sm">
      Ejemplo en Python
    </h3>

    <!-- Código -->
    <pre class="bg-gray-800 rounded-lg p-3 text-sm text-gray-100 overflow-x-auto">
<code>{{ code }}</code>
    </pre>

    <!-- Botón -->
    <button
      @click="runPython"
      :disabled="loading"
      class="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
    >
      {{ loading ? "Cargando Python..." : "Ejecutar" }}
    </button>

    <!-- Output -->
    <div class="bg-black rounded-lg p-3 text-sm text-green-300 font-mono min-h-[3rem]">
      <pre>{{ output }}</pre>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const output = ref("")
const loading = ref(true)
let pyodide = null

onMounted(async () => {
  pyodide = await loadPyodide()
  loading.value = false
})

const runPython = async () => {
  try {
    output.value = ""

    await pyodide.runPythonAsync(`
import sys
from io import StringIO

_buffer = StringIO()
sys.stdout = _buffer
`)

    await pyodide.runPythonAsync(props.code)

    output.value = pyodide.runPython(`
_buffer.getvalue()
`)

  } catch (err) {
    output.value = err.toString()
  }
}
</script>
