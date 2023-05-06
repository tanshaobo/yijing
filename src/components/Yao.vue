<!--
 * @Author: tanshaobo
 * @Date: 2023-05-06 09:19:27
 * @LastEditors: tanshaobo
 * @LastEditTime: 2023-05-06 15:50:11
 * @Description: file content
 * @FilePath: \yijing\src\components\Yao.vue
-->
<template>
  <div class="Yao" ref="yao" :style="styleObject" :class="Type == 1 ? 'Yang' : 'Yin'"></div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue'

const props = defineProps({
  Width: {
    type: String,
    required: false,
    default: '100px'
  },
  Type: {
    type: Number,
    required: true
  }
})

const state = reactive({
  styleObject: {
    // width: '100px',
    // height: '12.5px',
    // borderLeftWidth: '40px',
    // borderRightWidth: '40px'
  },
  selfWidth: 0
})

const yao = ref(null)

const Calc = () => {
  if (props.Width.indexOf('%') > 0) {
    state.selfWidth = yao.value.offsetParent.offsetWidth
  } else {
    state.selfWidth = parseInt(props.Width, 10)
  }
  state.selfWidth = Number.isNaN(state.selfWidth) || state.selfWidth < 20 ? 20 : state.selfWidth
  state.styleObject = {
    width: `${state.selfWidth}px`,
    height: `${state.selfWidth / 8}px`,
    borderLeftWidth: `${state.selfWidth * 0.4}px`,
    borderRightWidth: `${state.selfWidth * 0.4}px`
  }
}
onMounted(() => {
  Calc()
})
const { styleObject } = toRefs(state)
</script>

<style lang="css" scoped>
.Yao {
  border-style: solid;
  border-color: #000;
  border-width: 0;
  box-sizing: border-box;
  display: inline-block;
}
.Yang {
  background: #000;
}
.Yin {
  background: #fff;
}
</style>
