// auth.js
import { defineStore, acceptHMRUpdate } from 'pinia'
import { computed, ref } from 'vue'

export const useAuth = defineStore('auth', ()=>{
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})



// 确保传递正确的 store 声明，本例中为 `useAuth`
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}