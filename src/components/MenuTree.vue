<template>
  <div>
    <template>
      <el-submenu index="/systemManage">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/welcome" >
          <i class="el-icon-star-off"></i>
          <span slot="title">控制面板</span>
        </el-menu-item>
        <el-menu-item index="/shopinfo" >
          <i class="el-icon-s-home"></i>
          <span slot="title">商铺信息</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/businessManage">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>业务管理</span>
        </template>
        <el-menu-item index="/sort">
          <i class="el-icon-s-data"></i>
          <span slot="title">商品分类</span>
        </el-menu-item>
        <el-menu-item index="/goods">
          <i class="el-icon-tableware"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/order">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="/coupon">
          <i class="el-icon-s-ticket"></i>
          <span slot="title">优惠卷管理</span>
        </el-menu-item>
        <el-menu-item index="/reduction">
          <i class="el-icon-minus"></i>
          <span slot="title">满减优惠管理</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/monitor" >
        <template slot="title">
          <i class="el-icon-camera-solid"></i>
          <span>监控中心</span>
        </template>
        <el-menu-item index="/loginlog">
          <i class="el-icon-date"></i>
          <span slot="title">登录日志</span>
        </el-menu-item>
        <el-menu-item index="/identity">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">商家身份管理</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuTree'
}
</script>

<style scoped>
/*实现了溢出处理*/
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
