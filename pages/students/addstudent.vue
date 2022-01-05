<template>
  <div>
    <div class="headerTypeClass">
      <h2>Header</h2>
    </div>
    <b-row>
      <Sidebar/>
      <div style="width: 94%;margin-left: 100px">
        <div class="mt-3 pl-3 pr-5 pb-3 pt-3 blockClass ">
          <b-row>
            <b-col md="2" style="min-width: 150px">
              <b-button class="singinbuttonstyle">
                <BIconArrowLeft/>
                Yza
              </b-button>
            </b-col>
            <b-col md="8">
              <b-row style="float: right;margin-right: 10px;">
                <div style="display: flex;">
                  <BIconPersonCircle variant="default" style="height: 45px;width: 45px;opacity: 0.8"/>
                  <div style="margin-left: 10px">
                    <h5>Surname Name</h5>
                    <h6>Job position</h6>
                  </div>
                </div>
              </b-row>
            </b-col>
          </b-row>
          <hr>
            <StudentMainForm />
          <hr>
          <div >
              <FullDetailForm />
          </div>
          <div >
            <hr>
            <AddParentsForm />
            <hr>
          </div>
          <div >
            <hr>
            <OptionalDetails />
            <hr>
          </div>
          <div style="text-align: center;margin-top: 10px">
            <b-button variant="primary" @click="createStudent">Ýatda sakla</b-button>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PreviewPopup from "~/components/students/PreviewPopup";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import StudentMainForm from "~/components/students/addstudent/StudentMainForm";
import FullDetailForm from "~/components/students/addstudent/FullDetailForm";
import AddParentsForm from "~/components/students/addstudent/AddParentsForm";
import OptionalDetails from "~/components/students/addstudent/OptionalDetails";
export default {
  middleware:['auth'],
  components: {
    Sidebar,
    Header,
    PreviewPopup,
    StudentMainForm,
    FullDetailForm,
    AddParentsForm,
    OptionalDetails
  },
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

<style>
.blockClass {
  background-color: #fff;
  border-radius: 5px;
  margin-left: 230px;
  margin-right: 20px;
}

.headerTypeClass {
  margin-left: 330px;
  padding-top: 20px;
}

.singinbuttonstyle {
  background-color: #0762C8;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.singinbuttonstyle:hover {
  background-color: #0e88fd;
}

.inputClasss {

  border: 1px solid #0762C8;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 15px;
}
</style>

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
