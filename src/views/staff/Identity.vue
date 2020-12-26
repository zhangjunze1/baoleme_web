<template>
  <div>
    <!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right" style="padding-left: 10px;padding-bottom: 10px;font-size: 12px">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>监控中心</el-breadcrumb-item>
      <el-breadcrumb-item>商家身份管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--商家列表卡片-->
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="城市">
        <el-select v-model="formInline.city" placeholder="请选择">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
        </el-form-item>
        <el-form-item label="店铺名字" style="margin-left: 10px">
          <el-input clearable v-model="formInline.name" placeholder="请输入商家名字"></el-input>
        </el-form-item>
        <el-form-item label="商家号码" style="margin-left: 10px">
          <el-input clearable v-model="formInline.phone" placeholder="请输入商家电话号码"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 10px">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
          <el-button type="success" icon="el-icon-plus">添加</el-button>
          <el-button type="warning" icon="el-icon-download">导出</el-button>
        </el-form-item>
      </el-form>
      <!--表格内容显示区域-->
      <el-table
        :data="shopList"
        border
        style="width: 100%;height: 600px">
        <el-table-column
          prop="shopId"
          label="编号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="shopPicture"
          label="头像"
          width="150">
        </el-table-column>
        <el-table-column
          prop="shopName"
          label="店铺名字"
          width="150">
        </el-table-column>
        <el-table-column
          sortable
          prop="shopStar"
          label="星级"
          width="100">
        </el-table-column>
        <el-table-column
          sortable
          prop="shopTotal"
          label="总销量"
          width="100">
        </el-table-column>
        <el-table-column
          prop="shopCity"
          label="城市"
          width="100">
        </el-table-column>
        <el-table-column
          prop="shopPhone"
          label="商家号码"
          width="150">
        </el-table-column>
        <el-table-column
          prop="shopAddress"
          label="地址">
        </el-table-column>
        <el-table-column
          label="操作"
          width="230">
          <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
          <el-button type="warning" size="mini" icon="el-icon-s-tools"></el-button>
        </el-table-column>
      </el-table>
      <!--分页功能-->
      <el-pagination
        style="padding-top: 20px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="current"
        :page-sizes="[10,20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { findShopList } from '../../api/shop'

export default {
  name: 'Identity',
  data () {
    return {
      formInline: {
        name: '',
        phone: '',
        city: ''
      },
      // 商家集合
      shopList: [],
      // 城市集合
      cityList: [],
      // 每页显示的条数
      pageSize: 10,
      // 总条数
      total: 200,
      // 当前页
      current: 1,
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }, {
        value: 'Hangzhou',
        label: '杭州'
      }]
    }
  },
  created () {
    // 创建组件的时候调用查询所有商家的方法
    this.getShopList()
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    // 当每一页条数改变的时候，
    handleSizeChange (val) {
      // eslint-disable-next-line no-template-curly-in-string
      console.log(`每页 ${val} 条`)
      // 将val赋值给size
      this.size = val
      // 重新去后台查询数据
      this.getShopList()
    },
    // 当页码改变的时候
    handleCurrentChange (val) {
      // eslint-disable-next-line no-template-curly-in-string
      console.log(`当前页: ${val}`)
      this.current = val
      this.getShopList()
    },
    async getShopList () {
      const { data } = await findShopList(this.current, this.size)
      this.shopList = data.data.records
      this.total = data.data.total
      console.log(data)
      console.log('current:' + data.data.current)
      console.log('size:' + data.data.size)
      console.log('total:' + data.data.total)
    }
  }
}
</script>

<style scoped>

</style>
