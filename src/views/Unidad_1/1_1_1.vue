<template>
  <PythonRunner
    :code="`
lista = [1, 2, 3, 4]
for n in lista:
    print(n)
`"
  />
</template>

<script setup>
import PythonRunner from "@/components/PythonRun.vue"
</script>