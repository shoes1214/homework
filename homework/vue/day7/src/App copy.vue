<template>
  <div>
   {{ $store.state.count }}
   {{$store.getters.oddOrEven}}
    <button @click="$store.commit('ADD',1)">+</button>
    <button @click="$store.commit('MIN',1)">-</button>
    <button @click="$store.dispatch('addasync',1)">odd+</button>
    <button @click="$store.dispatch('addodd',1)">async+</button>
  </div>
</template>

<script>
export default {
name:"App"
}
</script>

<style>

</style>