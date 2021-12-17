<template>
  <div>
    <Header/>
    <b-row>
        <Sidebar/>
        <div style="width: 94%;margin-left: 100px">
          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
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
                <b-dropdown id="dropdown-left" text="Kursuny saýlaň" variant="primary" class="m-2" style="width:80%">
                  <b-dropdown-item v-for="course in couses" :key="course.id">{{ course.name }}</b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col md="6">
                <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="primary" class="m-2"
                            style="width:80%">
                  <b-dropdown-item v-for="facultet in facultetler" :key="facultet.id">{{
                      facultet.nameTM
                    }}
                  </b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
            <b-form-file browse-text="Choose Photo" placeholder="Choose photo..."
                         accept="image/jpeg, image/png, image/gif"/>
            <br>
          </div>
          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
            <h2 class="mb-3 mt-3" style="width: 100%; text-align: center">Third part details!</h2>
            <b-input type="text" placeholder="Yasayan yeri:"></b-input>
            <br>
            <b-row>
              <b-col md="6">
                <b-dropdown text="Okuwa giren ýeri" style="width:100%" variant="primary" class="m-2" menu-class="w-100"
                            offset="0 5">
                  <b-dropdown-item>Aşgabat şäheri</b-dropdown-item>
                  <b-dropdown-item>Ahal welaýaty</b-dropdown-item>
                  <b-dropdown-item>Balkan welaýaty</b-dropdown-item>
                  <b-dropdown-item>Daşoguz welaýaty</b-dropdown-item>
                  <b-dropdown-item>Lebap welaýaty</b-dropdown-item>
                  <b-dropdown-item>Mary welaýaty</b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col md="6">
                <b-input type="date" class="m-2" placeholder="Doglan senesi:"></b-input>
              </b-col>
            </b-row>
            <br>
            <b-input type="text" placeholder="Doglan yeri:"></b-input>
            <br>
            <b-input type="text" placeholder="Milleti:"></b-input>
            <br>
            <b-input type="text" placeholder="Tamamlan mekdebi:"></b-input>
            <br>
            <b-input type="text" placeholder="Bilýän dilleri:"></b-input>
            <br>
            <b-input type="text" placeholder="Bilimi boýunça hünäri"></b-input>
            <br>
            <b-input type="text" placeholder="Alymlyk dereesi"></b-input>
            <br>
            <b-input type="text" placeholder="Bilimi"></b-input>
            <br>
            <b-input type="text" placeholder="Partiýa agazasy"></b-input>
            <br>
            <b-input type="text" placeholder="Daşary ýurtda bolmagy"></b-input>
            <br>
            <b-input type="text" placeholder="Melisiň agzasymy"></b-input>
            <br>
          </div>
          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
            <h2 class="mb-3 mt-3" style="width: 100%; text-align: center">Third details</h2>
            <br>
            <b-input type="text" placeholder="Öý salgysy"></b-input>
            <br>
            <b-input type="text" placeholder="Öý telfony"></b-input>
            <br>
            <b-input type="text" placeholder="El tlfony"></b-input>
            <br>
            <b-input type="text" placeholder="Kakasynyň telfon belgisi"></b-input>
            <br>
            <b-input type="text" placeholder="Eesiniň telfon belgisi"></b-input>
            <br>
          </div>
          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
            <h2 class="mb-3 mt-3" style="width: 100%; text-align: center">Parantes</h2>
            <b-input type="text" placeholder="Atasyny ady"></b-input>
            <br>
            <b-input type="text" placeholder="Ady"></b-input>
            <br>
            <b-input type="text" placeholder="Familýasy"></b-input>
            <br>
            <b-input type="text" placeholder="Dogulan ýeri"></b-input>
            <br>
            <b-input type="text" placeholder="Ýaşaýan ýeri"></b-input>
            <br>
            <b-input type="text" placeholder="Işleýän ýeri"></b-input>
            <br>
            <b-input type="text" placeholder="Kazyýet jogapkärçiligine çekilenmi"></b-input>
            <br>
          </div>


          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
            <h6 v-for="welayat in welayatlar" :key="welayat.id">{{ welayat.name }}</h6>

            <br>
          </div>

        </div>
    </b-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PreviewPopup from "~/components/students/PreviewPopup";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default {
  components: {Sidebar, Header, PreviewPopup},
  data() {
    return {
      addStudentModel: {
        studentID: 0,
        fatherName: "",
        name: "",
        surname: "",
        course: "",
        facultyID: 0,
        klass: ""
      }

    }
  },
  methods: {
    ...mapActions({
      loadWelayatlar: 'weleyatlarstore/loadWelayatlar',
      loadFaculties: 'facultetler/loadFacultetler',
      addStudentAction: 'students/addStudent',
      loadCourses: 'courses/loadCourses'
    }),
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
      await this.addStudentAction(this.addStudentModel).then(success => {
        if (success) {
          this.addStudentModel.course = "";
          this.addStudentModel.klass = "";
          this.addStudentModel.name = "";
          this.addStudentModel.surname = "";
        }
      }).catch(err => console.log(err));
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
</style>
