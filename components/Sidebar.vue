<template>
  <div class="sidebar open" >
    <div class="logo-details">
      <div class="logo_name" style="margin-left:40px">Ishgarler bolumi</div>
    </div>
    <ul class="nav-list">
      <li v-for="(menu,index) in menus" :key="menu.id">
        <div class="a" @click="refactor(menu,index)"  :style="menu.selected ?{'background': 'rgba(255, 255, 255, 0.3)' }:{}">
          <b-icon :icon="menu.icon"   variant="light" style="margin: 10px;width: 25px;height: 25px"/>
          <span class="links_name">{{ menu.name }}</span>
        </div>
        <span class="tooltip">{{ menu.name }}</span>
      </li>
      <li >
        <div class="a" @click="logaut">
          <b-icon icon="power" variant="light" style="margin: 10px;width: 25px;height: 25px"/>
          <span class="links_name">Çykmak</span>
        </div>
        <span class="tooltip">Çykmak</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters ,mapActions} from 'vuex';
import {BIconPeopleFill } from 'bootstrap-vue';
import Cookie from "js-cookie";
export default {
  name: "Sidebar",
  components:{
    BIconPeopleFill

  },
  data() {
    return {
      isOpened:false,
      openclass:"bx-menu-alt-right",
      closeclass:"bx-menu",
    };
  },
  methods: {
    refactor(menu,index){
      console.log(menu);
      this.$store.commit('setSelected',index);
      this.$router.push(menu.locale);
    },
    logaut(){
      localStorage.removeItem("id");
      localStorage.removeItem('detailId');
      localStorage.removeItem('optionalDetailId');
      localStorage.removeItem('token');
      Cookie.remove('mainToken');
      this.$router.push('/login');
    }
  },
  created(){
  },
  computed: {
    ...mapGetters({
      menus:'getSidebarArray'
    })
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100px;
  background: #0762C8;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.open {
  width: 300px;
}
.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}
.sidebar .logo-details .icon {
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details .icon,
.sidebar.open .logo-details .logo_name {
  opacity: 1;
}
.sidebar .logo-details #btn {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}
.sidebar.open .logo-details #btn {
  text-align: right;
}
.sidebar i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.sidebar .nav-list {
  margin-top: 20px;
  height: 100%;
}
.sidebar li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}
.sidebar li .tooltip {
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
}
.sidebar li:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
  top: 50%;
  transform: translateY(-50%);
}
.sidebar.open li .tooltip {
  display: none;
}
.sidebar input {
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  height: 50px;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
}
.sidebar.open input {
  padding: 0 20px 0 50px;
  width: 100%;
}
.sidebar .bx-search {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 22px;
  background: #1d1b31;
  color: #fff;
}
.sidebar.open .bx-search:hover {
  background: #1d1b31;
  color: #fff;
}
.sidebar .bx-search:hover {
  background: #fff;
  color: #11101d;
}
.sidebar li .a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: transparent;
}
.sidebar li .a:hover {
  background: #fff;
}
.sidebar li .a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.sidebar.open li .a .links_name {
  opacity: 1;
  pointer-events: auto;
}
.sidebar li .a:hover .links_name,
.sidebar li .a:hover i {
  transition: all 0.5s ease;
  color: #11101d;
}
.sidebar li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}
.sidebar li.profile {
  position: fixed;
  height: 60px;
  width: 78px;
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: #1d1b31;
  transition: all 0.5s ease;
  overflow: hidden;
}
.sidebar.open li.profile {
  width: 250px;
}
.sidebar li .profile-details {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.sidebar li img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 10px;
}
.sidebar li.profile .name,
.sidebar li.profile .job {
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
}
.sidebar li.profile .job {
  font-size: 12px;
}
.sidebar .profile #log_out {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: #1d1b31;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-radius: 0px;
  transition: all 0.5s ease;
}
.sidebar.open .profile #log_out {
  width: 50px;
  background: none;
}
.buttonhover:hover{
  color: black;
}
</style>
