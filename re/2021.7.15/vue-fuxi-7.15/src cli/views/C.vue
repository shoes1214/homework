<template>
   <div>
     ...全局事件总件
    <button @click="$bus.$emit('setbro',3)">+</button>
   </div>
</template>

<script>
export default {

name:"C"
}
</script>

<style>

</style>