<template>
<div class="search">
	<div class="search-area">  
		<div>	
			<img class="search-icon" src="./../../public/images/home/logo.png" alt srcset />
			<input type="text" v-model="searchValue" placeholder="购表享12期分期免息优惠" @focus="showSearchModal = true" />
		</div>
		<router-link to="/">
			<img class="logo" src="./../../public/images/search/001.png" alt="">
		</router-link>
	</div>
	<div class="search-model" v-show="showSearchModal&&searchValue!==''" @click="showSearchModal = false">
	  <div class="search-list" @click="()=>{return false}">
	    <template v-if="resultList.length">
			<div class="cell" v-for="(it,index) in resultList" :key="index" @click="searchValue = it.name">
			{{it.name}}
			</div>
		</template>
	    <template v-else>
	      <div class="cell">暂时没有你指定的产品..</div>
	    </template>
	  </div>
	</div>
	
	
	
	<div class="content">
		<div class="rm">热门搜索</div>
		<div class="grid4">
			<div class="flex">
				<div class="flex-item sp1" v-for="(item, index) in hl1" :key="index">
					<div class="item-name ">{{item.name}}</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item" v-for="(item, index) in hl2" :key="index">
					<div class="item-name">{{item.name}}</div>
				</div>
			</div>
			<div class="flex">
				<div class="flex-item" v-for="(item, index) in hl3" :key="index">
					<div class="item-name">{{item.name}}</div>
				</div>
			</div>
		</div>
		
	</div>
	<footer></footer>
</div>
</template>

<script>
import { 
hl1,
hl2,
hl3,
searchList,
} from './../hot_list.js';
export default{
	name:'search',
	data(){
		return{
			searchValue: "",
			showSearchModal: false,
			searchList,
				hl1,
				hl2,
				hl3,
		};
	},
	created:function () {
		this.$emit('app', false);
	},
	computed: {
	  resultList() {
	    return this.searchList.filter(it => it.name.indexOf(this.searchValue)!==-1);
	  }
	},
}
</script>

<style scoped>
.logo{
height: 0.3rem;
margin-top: 0.35rem;
margin-left: 0.2rem;
vertical-align: top;
}
.search-area {
position: fixed;
width: 100%;
left: 0;
top: 0;
height: 1rem;
z-index: 2;
text-align: center;
background-color: white;
box-shadow: 0 1px 15px 15px rgba(0, 0, 0, 0.1);
}
.search-area > div {
background-color: #efeff4;
width: calc(100% - 1.5rem);
display: inline-block;
height: 0.6rem;
line-height: 0.6rem;
margin-top: 0.2rem;
border-radius: 0.3rem;
text-align: left;
font-size: 0.25rem;
color: #777777;
}
.search-area input {
width: calc(100% - 1.5rem);
height: 0.4rem;
font-size: 0.25rem;
background-color: rgba(0, 0, 0, 0);
outline: none;
border: none;
}
.search-icon {
width: 0.4rem;
height: 0.4rem;
margin-right: 0.2rem;
margin-left: 0.2rem;
vertical-align: middle;
}
.search-model {
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 1rem;
background-color: rgba(0, 0, 0, 0.5);
z-index: 10;
}
.search-list {
position: relative;
background-color: white;
max-height: 20rem;
overflow: auto;
border-top: 1px solid #eeeeee;
}
.search-list .cell {
position: relative;
border-bottom: 1px solid #eeeeee;
padding: 0.2rem 0.7rem;
line-height: 0.5rem;
font-size:0.21rem;
text-align : justify
}

.content {
padding-top: 1.1rem;
padding-bottom: 2rem;
}
.rm{
	margin-left:0.1rem;
	margin-top: 0.1rem;
}
.grid4 {
  padding-left:0.1rem;
  padding-top:0.2rem;
}
.flex {
  display: flex;
  align-items: flex-start;
  padding-top:0.2rem;
}
.flex-item {
	margin-right:0.2rem;
	padding-left:0.1rem;
	padding-right:0.1rem;
	height:0.5rem;
	line-height:0.5rem;
	min-width:1rem;
	max-width:1.5rem;
	text-align: center;
	border:1px solid #222222;
	border-radius:20%;
}
.sp1{
	border:1px solid red;
}
footer{
    width: 100%;
    height: 1rem;
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index:10;
    background-color: white;
  }
</style>
