<template>
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
              style="margin-top: 10px;width: 120px;margin-left: 5%;margin-right: 5%"
              @change="mainimagechanged"
              accept="image/jpeg, image/png, image/gif"
            />
          </div>
        </b-col>
        <b-col md="8">
          <b-input class="inputClasss" style="margin-top:10px" v-model="addStudentModel.fatherName"
                   :state="validateFunctions('requiderValidator',addStudentModel.fatherName)"
                   type="text" placeholder="Atasynyň ady"></b-input>
          <b-input class="inputClasss" v-model="addStudentModel.name" type="text"
                   :state="validateFunctions('requiderValidator',addStudentModel.name)"
                   placeholder="Ady"></b-input>
          <b-input class="inputClasss" v-model="addStudentModel.surname" type="text"
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
                   :state="validateFunctions('klassValidator',addStudentModel.klass)"
                   placeholder="Topar nomeri"></b-input>
        </b-col>
      </b-row>
      <b-row style="margin-top: 10px">
        <b-col md="4">
          <h6 style="margin-top: 5px">Kursuny saylaň:</h6>
        </b-col>
        <b-col md="8">
          <b-dropdown id="dropdown-left"  text="Kursuny saýlaň" variant="outline-primary" style="width:100%">
            <b-dropdown-item v-for="course in couses" :key="course.id" @click="selectCourse(course.id)">
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
          <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="outline-primary" style="width:100%">
            <b-dropdown-item v-for="facultet in facultetler" :key="facultet.id"
                             @click="selectFaculty(facultet.id)">{{
                facultet.nameTM
              }}
            </b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
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
    }
  },
  methods: {
    ...mapActions({
      loadWelayatlar: 'weleyatlarstore/loadWelayatlar',
      loadFaculties: 'facultetler/loadFacultetler',
      addStudentAction: 'students/addStudent',
      loadCourses: 'courses/loadCourses',
      addDetailToStudent: 'students/addStudentDetail',
      addStudentImageAction: 'students/addStudentImage'
    }),
    mainimagechanged() {
      this.image = this.$refs.mainfile.files[0];
      this.imageUrl = URL.createObjectURL(this.image);
    },

    async createStudent() {
      if (
        this.addStudentModel.course === "" ||
        this.addStudentModel.klass === "" ||
        this.addStudentModel.name === "" ||
        this.addStudentModel.surname === ""
      ) {
        alert("Maglumatlary doly doldurylmadyk");
        return;
      }
      if (!this.image) {
        alert("Surat saylan");
        return;
      }

      let success = await this.addStudentAction(this.addStudentModel);//.then(success => {
      console.log(success);
      // if (success) {
      //   this.addStudentModel = {
      //     studentID: this.addStudentModel.studentID,
      //     fatherName: "",
      //     name: "",
      //     surname: "",
      //     courseID: 0,
      //     facultyID: 0,
      //     klass: ""
      //   }
      // }
      this.studentDetailModel.studentID = this.addStudentModel.studentID;
      let form = new FormData();
      form.append('file', this.image);
      success = await this.addStudentImageAction({
        studentID: this.addStudentModel.studentID,
        form: form
      });
      if (!success) {
        alert("Something is wrong!");
        return;
      }
      success = await this.addDetailToStudent(this.studentDetailModel);
      this.isStudentAdded = true;
      if (success) {
        this.studentDetailModel = {
          yashayanYeri: "",
          okuwaGirenYID: 0,
          okuwaGirenYeri: 0,
          studentID: 0,
          doglanSenesi: "",
          doglanYeri: "",
          milleti: "Turkmen",
          tamamlanMek: "",
          bilyanDilleri: "",
          hunar: "",
          alymlykDereje: "Ýok",
          bilimi: "",
          partiyaAgzasy: "Ýok",
          dasYurtBolm: "Ýok",
          mejlisAgzasy: "Ýok"
        };
        this.addStudentModel.studentID = 0
      }
    },

    selectFaculty(index) {
      this.addStudentModel.facultyID = index;
    },
    selectCourse(index) {
      this.addStudentModel.course = index;
    },
    selectGirenYeri(index) {
      this.studentDetailModel.okuwaGirenYID = index;
    },
    validateFunctions(name,value) {
      const validators=this.$customValidators;

      return  validators[name](value);
    },
  },
  computed: {
    ...mapGetters({
      welayatlar: 'weleyatlarstore/getWelayatlar',
      facultetler: 'facultetler/getFacultetler',
      couses: 'courses/getCourses'
    })
  },

  async mounted() {
    if (this.welayatlar.length === 0) {
      await this.loadWelayatlar();
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
