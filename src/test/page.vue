<template>
  <div class='page'>
      <!-- 头 -->
      <p>header</p>
      <!-- 内容 -->
      <div>
          <!-- 具备插槽(后备插槽) -->
        <slot name="content" :pn="pageName">后背内容</slot>
      </div>
      <!-- 尾 -->
      <p>
        <!-- 具名插槽 -->
          <slot name="footer">后背尾</slot>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '测试'
    }
  }
}
</script>

<style scoped lang='less'></style>
