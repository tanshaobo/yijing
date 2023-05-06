<!--
 * @Author: tanshaobo
 * @Date: 2023-05-06 09:19:27
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-05-06 17:25:25
 * @Description: file content
 * @FilePath: \yijing\src\components\Gua.vue
-->
<template>
  <div class="Gua">
    <Yao v-for="(i, j) in currenList" :key="j" :Width="width" :Type="i"> </Yao>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import xianTian from '@/config/xianTian'
import Yao from './Yao.vue'

const props = defineProps({
  Type: {
    type: Number,
    required: true
  }
})

const state = reactive({
  width: '100%',
  currenList: []
})

const init = () => {
  console.log(xianTian, props.Type)
  state.currenList = xianTian[props.Type].code
}

init()

const { width, currenList } = toRefs(state)
</script>

<style lang="css" scoped>
.Gua {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
}
</style>
