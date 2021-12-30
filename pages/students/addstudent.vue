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
                           type="text" placeholder="Atasynyň ady"></b-input>
                  <b-input class="inputClasss" v-model="addStudentModel.name" type="text"
                           placeholder="Ady"></b-input>
                  <b-input class="inputClasss" v-model="addStudentModel.surname" type="text"
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
                  <b-input v-model="addStudentModel.studentID" type="number" placeholder="Talyp belgisi"></b-input>
                </b-col>
              </b-row>
              <b-row style="margin-top: 10px">
                <b-col md="4">
                  <h6 style="margin-top: 5px">Topar nomeri:</h6>
                </b-col>
                <b-col md="8">
                  <b-input v-model="addStudentModel.klass" type="text" placeholder="Topar nomeri"></b-input>
                </b-col>
              </b-row>
              <b-row style="margin-top: 10px">
                <b-col md="4">
                  <h6 style="margin-top: 5px">Kursuny saylan:</h6>
                </b-col>
                <b-col md="8">
                  <b-dropdown id="dropdown-left" text="Kursuny saýlaň" variant="outline-primary" style="width:100%">
                    <b-dropdown-item v-for="course in couses" :key="course.id" @click="selectCourse(course.id)">
                      {{ course.name }}
                    </b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <b-row style="margin-top: 10px">
                <b-col md="4">
                  <h6 style="margin-top: 5px">Facultet Saylan:</h6>
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
          <hr>
          <div v-if="!isStudentAdded">
            <b-row style="margin-left: 2px">
              <b-col md="6" style="min-width: 500px">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Yashayan yeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.yashayanYeri" placeholder="Ýaşaýan ýeri"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Milleti:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.milleti" placeholder="Milleti:"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Okuwa giren ýeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-dropdown text="Okuwa giren ýeri" style="width:100%" variant="primary"
                                offset="0 5">
                      <b-dropdown-item v-for="welayat in welayatlar" :key="welayat.id"
                                       @click="selectGirenYeri(welayat.id)">{{ welayat.name }}
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Doglan senesi:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="date" v-model="studentDetailModel.doglanSenesi"
                             placeholder="Doglan senesi:"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Bilimi boýunça hünäri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.hunar"
                             placeholder="Bilimi boýunça hünäri"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Alymlyk dereesi:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.alymlykDereje"
                             placeholder="Alymlyk dereesi"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Daşary ýurtda bolmagy:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.dasYurtBolm"
                             placeholder="Daşary ýurtda bolmagy"></b-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" style="min-width: 500px">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Häzirki ýaşaýan ýeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-form-textarea type="text" v-model="studentDetailModel.hYashayanYeri" placeholder="Häzirki ýaşaýan ýeri" ></b-form-textarea>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Tamamlan mekdebi:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-form-textarea type="text" v-model="studentDetailModel.tamamlanMek"
                             placeholder="Tamamlan mekdebi:"></b-form-textarea>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Doglan yeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.doglanYeri" placeholder="Doglan yeri:"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Bilýän dilleri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.bilyanDilleri"
                             placeholder="Bilýän dilleri:"></b-input>
                  </b-col>
                </b-row>


                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Partiýa agazasy:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.partiyaAgzasy"
                             placeholder="Partiýa agazasy:"></b-input>
                  </b-col>
                </b-row>

                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Melisiň agzasymy:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" v-model="studentDetailModel.mejlisAgzasy"
                             placeholder="Melisiň agzasymy:"></b-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <b-row style="margin-left: 2px">
              <b-col md="6" style="min-width: 500px;">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Öý telfony:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="Öý telfony"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">El tlfony:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="El tlfony"></b-input>
                  </b-col>
                </b-row>


              </b-col>
              <b-col md="6" style="min-width: 500px">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Kakasynyň telfon belgisi:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="Kakasynyň telfon belgisi"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Ejesiniň telfon belgisi:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="Ejesiniň telfon belgisi"></b-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <b-row style="margin-left: 2px">
              <b-col md="6" style="min-width: 500px">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Islan yeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="Islan yeri"></b-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6" style="min-width: 500px">
                <b-row style="margin-top: 15px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Islan wagty:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input type="text" placeholder="Islan wagty"></b-input>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <table>
              <thead>
              <th>
                Ishlan yeri
              </th>
              <th>
                Islan wagty
              </th>
              <th width="160">
                Funksiyalar
              </th>
              </thead>
              <tbody>
              <tr>
                <td>
                  <b-input type="text" class="inputClasss" placeholder="Gozleg"/>
                </td>
                <td>
                  <b-input type="text" class="inputClasss" placeholder="Gozleg"/>
                </td>
                <td>#</td>
              </tr>
              <tr>
                <td>
                  <b-textarea type="text" class="inputClasss" placeholder="Islan yeri"/>
                </td>
                <td>
                  <b-input type="text" class="inputClasss" placeholder="Ishlan wagty"/>
                </td>
                <td>
                  <div style="text-align: center">
                    <b-button variant="success" style="margin-right: 10px">Save</b-button>
                    <b-button variant="outline-danger">
                      <BIconX/>
                    </b-button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <hr>
            <table>
              <thead>
              <th width="200">
                Garyndaşlyk derejesi
              </th>
              <th>
                Ady Familiýasy
              </th>
              <th width="200">
                Doglan güni
              </th>
              <th width="160">
                Kaziýete çekilenmi?
              </th>
              </thead>
              <tbody>
              <tr>
                <td>
                  <b-dropdown class="inputClasss" text="Garyndaşlyk derejesini saýlaň" variant="light">
                    <b-dropdown-item>Ejesi</b-dropdown-item>
                  </b-dropdown>
                </td>
                <td>
                  <b-input type="text" class="inputClasss"/>
                </td>
                <td>
                  <b-input type="date" class="inputClasss"/>
                </td>
                <td>
                  <b-dropdown class="inputClasss" style="width: 90%" text="Yok" variant="light">
                    <b-dropdown-item>Ýok</b-dropdown-item>
                  </b-dropdown>
                </td>
              </tr>

              </tbody>
            </table>
            <hr>
            <table>
              <thead>
              <th>
                Doglan ýeri
              </th>
              <th>
                Işleýän ýeri
              </th>
              <th>
                Ýaşaýan ýeri
              </th>
              </thead>
              <tbody>
              <tr>
                <td>
                  <b-form-textarea type="text"/>
                </td>
                <td>
                  <b-form-textarea type="text"/>
                </td>
                <td>
                  <b-form-textarea type="text"/>
                </td>
              </tr>
              </tbody>
            </table>
            <hr>
          </div>
          <div style="text-align: center;margin-top: 10px">
            <b-button variant="primary" @click="createStudent">Yatda sakla</b-button>
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

export default {
  components: {
    Sidebar,
    Header,
    PreviewPopup
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
        alymlykDereje: "Yok",
        bilimi: "",
        partiyaAgzasy: "Yok",
        dasYurtBolm: "Yok",
        mejlisAgzasy: "Yok",
        hYashayanYeri:''
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
      console.log(this.image);
      this.imageUrl = URL.createObjectURL(this.image);
      // console.log(this.image);
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
          alymlykDereje: "Yok",
          bilimi: "",
          partiyaAgzasy: "Yok",
          dasYurtBolm: "Yok",
          mejlisAgzasy: "Yok"
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
    }
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
