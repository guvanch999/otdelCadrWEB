<template>
   <div>
     <b-row style="margin-left: 2px">
       <b-col md="6" style="min-width: 500px">
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Okaýan ýyly we  </h6>
             <h6>taýýarlygynyň ugry:</h6>
           </b-col>
           <b-col md="8">
             <b-form-textarea type="text"
                              :state="validateFunctions('requiderValidator',studentDetailModel.yashayanYeri)"
                              ></b-form-textarea>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">UÝJ-da galýarmy:</h6>
           </b-col>
           <b-col md="8">
             <b-dropdown text="Ýok" style="width: 100%;" >
               <b-dropdown-item>Howa</b-dropdown-item>
               <b-dropdown-item >Ýok</b-dropdown-item>
             </b-dropdown>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Pasport belgisi:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"/>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Pasport kim  </h6>
             <h6>tarapyndan berildi:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"
                      :state="validateFunctions('requiderValidator',studentDetailModel.doglanSenesi)"
                      ></b-input>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Öňki familiýasy:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"
                      :state="validateFunctions('requiderValidator',studentDetailModel.hunar)"
                      ></b-input>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Bellik:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"
                      :state="validateFunctions('requiderValidator',studentDetailModel.alymlykDereje)"
                      ></b-input>
           </b-col>
         </b-row>
       </b-col>
       <b-col md="6" style="min-width: 500px">
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Häzirki ýazgyda duran welaýaty/şäheri:</h6>
           </b-col>
           <b-col md="8">
             <b-form-textarea type="text"
                              :state="validateFunctions('requiderValidator',studentDetailModel.hYashayanYeri)"
                              ></b-form-textarea>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Harby gullugy tamamlan:</h6>
           </b-col>
           <b-col md="8">
            <b-dropdown text="Ýok" style="width: 100%;">
              <b-dropdown-item>Ýok</b-dropdown-item>
              <b-dropdown-item>Howa</b-dropdown-item>
            </b-dropdown>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">UÝJ-da otag belgisi:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"
                      :state="validateFunctions('requiderValidator',studentDetailModel.doglanYeri)"
                      ></b-input>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Passportyň berlen senesi:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="date"
                      :state="validateFunctions('requiderValidator',studentDetailModel.bilyanDilleri)"
                      ></b-input>
           </b-col>
         </b-row>


         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Maşgala ýagdaýy:</h6>
           </b-col>
           <b-col md="8">
             <b-dropdown text="Maşgalaly:" style="width: 100%;">
               <b-dropdown-item>Maşgalaly</b-dropdown-item>
               <b-dropdown-item>Sallah</b-dropdown-item>
             </b-dropdown>
           </b-col>
         </b-row>

         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Welaýatly bolup UÝJ-dan çykanlar:</h6>
           </b-col>
           <b-col md="8">
             <b-dropdown text="Ýok" style="width: 100%;">
               <b-dropdown-item>Ýok</b-dropdown-item>
               <b-dropdown-item>Howa</b-dropdown-item>
             </b-dropdown>
           </b-col>
         </b-row>
         <b-row style="margin-top: 15px">
           <b-col md="4">
             <h6 style="margin-top: 5px">Temmi:</h6>
           </b-col>
           <b-col md="8">
             <b-input type="text"/>
           </b-col>
         </b-row>
       </b-col>
     </b-row>
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
      studentDetailModel: {
        yashayanYeri: "",
        okuwaGirenYeri: 0,
        okuwaGirenYID: 0,
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
        mejlisAgzasy: "Ýok",
        hYashayanYeri: ''
      },
      isStudentAdded: false,
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
      // console.log('here');
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
