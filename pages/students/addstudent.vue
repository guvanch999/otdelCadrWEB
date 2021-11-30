<template>
  <div>
    <b-container class="mt-3 blockClass">
      <h2 class="mb-3 mt-3" style="width: 100%;text-align: center;">Add student</h2>
      <b-input v-model="this.addStudentModel.studentID" type="number" placeholder="Talyp belgisi"></b-input>
      <br>
      <b-input v-model="this.addStudentModel.fatherName" type="text" placeholder="Atasynyň ady"></b-input>
      <br>
      <b-input v-model="this.addStudentModel.name" type="text" placeholder="Ady"></b-input>
      <br>
      <b-input v-model="this.addStudentModel.surname" type="text" placeholder="Familiýasy"></b-input>
      <br>
      <b-input v-model="this.addStudentModel.klass" type="text" placeholder="Topar nomeri"></b-input>
      <br>
      <b-row>
        <b-col md="6">
          <b-dropdown id="dropdown-left" text="Kursuny saýlaň" variant="primary" class="m-2" style="width:100%">
            <b-dropdown-item v-for="course in couses" :key="course.id">{{ course.name }}</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col md="6">
          <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="primary" class="m-2" style="width:100%">
            <b-dropdown-item v-for="facultet in facultetler" :key="facultet.id">{{ facultet.nameTM }}</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-form-file browse-text="Choose Photo" placeholder="Choose photo..." accept="image/jpeg, image/png, image/gif"/>
      <br>
    </b-container>
    <b-container class="mt-3 mb-3 blockClass">
      <h2 class="mb-3 mt-3" style="width: 100%; text-align: center">Third part details!</h2>
      <b-input type="text" placeholder="Yasayan yeri:"></b-input>
      <br>
      <h6>Doglan senesi:</h6>
      <b-calendar block locale="en-EN"></b-calendar>
      <br>
      <b-input type="text" placeholder="Doglan yeri:"></b-input>
      <br>
      <b-input type="text" placeholder="Milleti:"></b-input>
      <br>
      <b-input type="text" placeholder="Tamamlan mekdebi:"></b-input>
      <br>
      <b-input type="text" placeholder="Yasayan yeri:"></b-input>
      <br>
    </b-container>
    <b-container class="mt-3 mb-3 blockClass">
     <h6 v-for="welayat in welayatlar" :key="welayat.id">{{welayat.name}}</h6>
      <br>
    </b-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data(){
    return {
      addStudentModel:{
        studentID:0,
        fatherName:"",
        name:"",
        surname:"",
        course:"",
        facultyID:0,
        klass:""
      }

    }
  },
  methods: {
    ...mapActions({
      loadWelayatlar: 'weleyatlarstore/loadWelayatlar',
      loadFaculties:'facultetler/loadFacultetler',
      addStudentAction:'students/addStudent',
      loadCourses:'courses/loadCourses'
    }),
    async createStudent(){
      if(
        this.addStudentModel.course==="" ||
        this.addStudentModel.klass===""||
        this.addStudentModel.name===""||
        this.addStudentModel.surname===""
      ){
        alert("Maglumatlary doly doldurylmadyk");
        return;
      }
      await this.addStudentAction(this.addStudentModel).then(success=>{
        if(success){
          this.addStudentModel.course="";
          this.addStudentModel.klass="";
          this.addStudentModel.name="";
          this.addStudentModel.surname="";
        }
      }).catch(err=>console.log(err));
    }
  },
  computed: {
    ...mapGetters({
      welayatlar: 'weleyatlarstore/getWelayatlar',
      facultetler:'facultetler/getFacultetler',
      couses:'courses/getCourses'
    })
  },
  async mounted() {
    if(this.welayatlar.length===0){
      await this.loadWelayatlar();
     // console.log('here');
    }
  }
}
</script>

<style>
.blockClass {
  background-color: hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  padding: 10px;
}
</style>
