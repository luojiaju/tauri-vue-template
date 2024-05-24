<script setup lang="ts">
import {getTest} from "@/api/test/index.ts"
const log = ref("hello")
function test() {
    getTest()
    
}

</script>

<template>
     <!-- 居中 -->
  <div class="flex justify-center items-center h-screen">
    <div class="text-center">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button @click="test">{{log}}</button>
      <iframe name="myIFrame" src="https://example.com" height="400" width="600" referrerpolicy="origin-when-cross-origin"></iframe>
    </div>
  </div>
</template>

<style scoped>

</style>
