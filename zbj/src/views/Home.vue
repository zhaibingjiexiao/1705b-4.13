<template>
	<div class="home">
		<el-dialog title="新增课程" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="星期几" :label-width="formLabelWidth">
					<el-select v-model="form.name" placeholder="星期几">
						<el-option label="星期一" value="星期一"></el-option>
						<el-option label="星期二" value="星期二"></el-option>
						<el-option label="星期三" value="星期三"></el-option>
						<el-option label="星期四" value="星期四"></el-option>
						<el-option label="星期五" value="星期五"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="第几节" :label-width="formLabelWidth">
					<el-select v-model="form.sex" placeholder="第几节">
						<el-option label="第一节" value="第一节"></el-option>
						<el-option label="第二节" value="第二节"></el-option>
						<el-option label="第三节" value="第三节"></el-option>
						<el-option label="第四节" value="第四节"></el-option>
						<el-option label="第五节" value="第五节"></el-option>
						<el-option label="第六节" value="第六节"></el-option>
						<el-option label="第七节" value="第七节"></el-option>
						<el-option label="第八节" value="第八节"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="什么课" :label-width="formLabelWidth">
					<el-input v-model="form.aaa" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="submit">确 定</el-button>
			</div>
		</el-dialog>
		<el-button	type="success" v-if="1==1" @click="dialogFormVisible = true">修改课程</el-button>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	data(){
		return{
			tableData:[],
			dialogFormVisible:false,
			form:{},
			formLabelWidth:'120px'
		}
	},
	methods:{
		submit(){
			this.dialogFormVisible = false,
			this.$http.post("http://localhost:3000/add",this.form,{emulateJSON:true}).then(

				)
		},
		liu(e){
			console.log(e)
			this.$http.post('http://localhost:3000/date',{id:e.id,state:1},{emulateJSON:true}).then(function(){
				this.ZBJ()
				this.$message({
					message: '恭喜你,成功留下',
					type: 'success'
				});
			})
		},
		ZBJ(){
			this.$http.post('http://localhost:3000/biao',{state:this.$route.params.state},{emulateJSON:true}).then(e=>this.tableData=e.body)
		}
	},
	watch:{
		'$route':function(){
			this.ZBJ()
		}
	},
	created(){
		this.ZBJ()
	}
}
</script>
<style>
	.el-button--success{
		width: 100px;
	}
	.el-form-item__content {
		/*float: left;*/
		width: 250px;
		font-size: 14px;
		line-height: 40px;
		margin-left: 20px;
		position: relative;
	}
	.el-dialog{
		width: 500px;
	}
</style>