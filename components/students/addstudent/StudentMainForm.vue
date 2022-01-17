<template>
  <div>
  <b-row style="margin-left: 2px">
    <b-col md="6" style="min-width: 500px">
      <b-row>
        <b-col md="4" style="width: 100px">
          <div style="text-align: center">
            <img :src="imageUrl" width="120" height="140"
                 style="background-color: darkgrey;margin-left: 5%;margin-right: 5%"/>
            <input
              type="file"
              ref="mainfile"
              v-if="!isAdded"
              style="margin-top: 10px;width: 120px;margin-left: 5%;margin-right: 5%"
              @change="mainimagechanged"
              accept="image/jpeg, image/png, image/gif"
            />
          </div>
        </b-col>
        <b-col md="8">
          <b-input :disabled="isAdded" class="inputClasss" style="margin-top:10px" v-model="addStudentModel.fatherName"
                   :state="validateFunctions('requiderValidator',addStudentModel.fatherName)"
                   type="text" placeholder="Atasynyň ady"></b-input>
          <b-input :disabled="isAdded" class="inputClasss" v-model="addStudentModel.name" type="text"
                   :state="validateFunctions('requiderValidator',addStudentModel.name)"
                   placeholder="Ady"></b-input>
          <b-input :disabled="isAdded" class="inputClasss" v-model="addStudentModel.surname" type="text"
                   :state="validateFunctions('requiderValidator',addStudentModel.surname)"
                   placeholder="Familiýasy"></b-input>
        </b-col>
      </b-row>
    </b-col>
    <!--
    a.niyazow 124A 31
    -->
    <b-col md="6" style="min-width: 500px">
      <b-row style="margin-top: 10px">
        <b-col md="4">
          <h6 style="margin-top: 5px">Talyp belgi:</h6>
        </b-col>
        <b-col md="8">
          <b-input v-model="addStudentModel.studentID"
                   type="number"
                   :disabled="isAdded"
                   :state="validateFunctions('studentNumberValidator',addStudentModel.studentID)"
                   placeholder="Talyp belgisi"></b-input>
        </b-col>
      </b-row>
      <b-row style="margin-top: 10px">
        <b-col md="4">
          <h6 style="margin-top: 5px">Topar nomeri:</h6>
        </b-col>
        <b-col md="8">
          <b-input v-model="addStudentModel.klass"
                   type="number"
                   :disabled="isAdded"
                   :state="validateFunctions('klassValidator',addStudentModel.klass)"
                   placeholder="Topar nomeri"></b-input>
        </b-col>
      </b-row>
      <b-row style="margin-top: 10px">
        <b-col md="4">
          <h6 style="margin-top: 5px">Kursuny saylaň:</h6>
        </b-col>
        <b-col md="8">
          <b-dropdown :disabled="isAdded" id="dropdown-left"  :text="selectedText('course')" variant="outline-primary" style="width:100%">
            <b-dropdown-item v-for="course in couses"
                             :key="course.id"
                             :selected="addStudentModel.courseID===course.id"
                             @click="selectCourse(course.id)">
              {{ course.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
      <b-row style="margin-top: 10px">
        <b-col md="4">
          <h6 style="margin-top: 5px">Fakultet saýlaň:</h6>
        </b-col>
        <b-col md="8">
          <b-dropdown :disabled="isAdded"   id="dropdown-left" :text="selectedText('facultet')" variant="outline-primary" style="width:100%">
            <b-dropdown-item v-for="facultet in facultetler" :key="facultet.id"
                             @click="selectFaculty(facultet.id)"
                             :selected="addStudentModel.facultyID===facultet.id"
                             :value="facultet.id" >{{
                facultet.name
              }}
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
    <div style="text-align: center;margin-top: 10px">
      <b-button variant="primary" v-if="!isAdded && !updateState" @click="createStudent" >Ýatda sakla</b-button>
      <b-button variant="primary" v-if="updateState" @click="createStudent" >Üýtget</b-button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      addStudentModel: {
        studentID: 0,
        fatherName: "",
        name: "",
        surname: "",
        courseID: 0,
        facultyID: 0,
        klass: ""
      },
      image: null,
      imageUrl: null,
      isAdded:false,
      updateState:false,
      imageChanged:false
    }
  },
  methods: {
    ...mapActions({
      loadFaculties: 'facultetler/loadFacultetler',
      addStudentAction: 'students/addStudent',
      loadCourses: 'courses/loadCourses',
      addDetailToStudent: 'students/addStudentDetail',
      addStudentImageAction: 'students/addStudentImage',
      getStudentById:'students/getStudentById',
      updateStudent:'students/updateStudentById'
    }),
    initComponent(){
      this.addStudentModel= {
        studentID: 0,
          fatherName: "",
          name: "",
          surname: "",
          courseID: 0,
          facultyID: 0,
          klass: ""
      };
      this.image=null;
      this.imageUrl=null;
      this.isAdded=false;
    },
    prepeaToUpdate(){
      this.isAdded=false;
      this.updateState=true;
      this.imageChanged=false;
    },
    mainimagechanged() {
      this.image = this.$refs.mainfile.files[0];
      this.imageUrl = URL.createObjectURL(this.image);
      this.imageChanged=true;
    },
    async createStudent() {
      console.log(this.addStudentModel);
      if (
        this.addStudentModel.course === "" ||
        this.addStudentModel.klass === "" ||
        this.addStudentModel.name === "" ||
        this.addStudentModel.surname === ""
      ) {
        alert("Maglumatlary doly doldurylmadyk");
        return;
      }
      if (!this.image && !this.updateState) {
        alert("Surat saylan");
        return;
      }
      if(!this.addStudentModel.facultyID){
        alert("Fakulteti saylan");
        return;
      }
      if(!this.addStudentModel.courseID){
        alert("Kurs saylan");
        return;
      }
      this.$emit('changeIsLoading',true);
      let success=false;
      console.log('emittes')
      if(this.updateState){
        let updateData={
          currentId:this.currentID,
          inf:this.addStudentModel
        }
        success=await this.updateStudent(updateData);
        if(this.updateState && this.imageChanged){
          let form = new FormData();
          form.append('file', this.image);
          success = await this.addStudentImageAction({
            studentID: this.currentID,
            form: form
          });
        }
      } else {
        success = await this.addStudentAction(this.addStudentModel);
        let form = new FormData();
        form.append('file', this.image);
        success = await this.addStudentImageAction({
          studentID: this.currentID,
          form: form
        });
      }
      if (!success) {
        alert("Something is wrong!");

      } else {
        this.isAdded=true;
        this.updateState=false;
        this.imageChanged=false;
        this.$emit('changeIsLoading',false);
        this.$emit('changeStep','step2');
      }
    },

    selectFaculty(index) {
      console.log(index);
      this.addStudentModel.facultyID = index;
    },
    selectCourse(index) {
      console.log(index);
      this.addStudentModel.courseID = index;
    },
    validateFunctions(name,value) {
      const validators=this.$customValidators;
      return  validators[name](value);
    },
    selectedText(type){
      if(type==='course'){
        if(this.addStudentModel.courseID){
          return this.couses.find(x=>x.id===this.addStudentModel.courseID)['name']
        } else return 'Kursuny saýlaň'
      } else {
        if(this.addStudentModel.facultyID){
          return this.facultetler.find(x=>x.id===this.addStudentModel.facultyID)['name']
        } else {
          return "Fakultetini saýlaň"
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      facultetler: 'facultetler/getFacultetler',
      couses: 'courses/getCourses',
      currentID:'students/getCurrentId'
    }),
  },
  async mounted() {
    if (this.facultetler.length === 0) {
      await this.loadFaculties();
    }
    if (this.couses.length===0){
      await this.loadCourses();
    }
    if(localStorage['id']){
      console.log(localStorage['id'])
      let result=await this.getStudentById(localStorage['id']);
      if(!result){
        localStorage.removeItem('id');
      } else {
        this.addStudentModel=result;
        this.imageUrl=this.$axios.defaults.baseURL +result.image;

        this.isAdded=true;
        this.$emit('changeStep','step2');
        this.$store.commit('students/setCurrentId',localStorage['id']);
      }
    }
  }

}
</script>
<style scoped>

table {
  width: 100%;
  padding: 10px;

}

th {
  padding: 10px;
  text-align: center;
  background-color: rgba(2, 2, 2, 0.04);
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

}

td {
  padding: 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
}
</style>
