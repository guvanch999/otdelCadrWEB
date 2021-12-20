<template>
  <div>
   <div class="headerTypeClass">
     <h2>Header</h2>
   </div>
    <b-row>
        <Sidebar/>
        <div style="width: 94%;margin-left: 100px">
          <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
            <b-row>
              <b-col md="2">
                <b-button class="singinbuttonstyle" >
                  <BIconArrowLeft /> Yza
                </b-button>
              </b-col>
              <b-col md="6">
              </b-col>
              <b-col md="4">
                <b-row>
                 <BIconPersonCircle variant="default" style="height: 45px;width: 45px;opacity: 0.8"/>
                  <div style="margin-left: 10px">
                    <h5>Surname Name</h5>
                    <h6>Job position</h6>
                  </div>
                </b-row>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col md="6">
                <b-row>
                  <b-col md="4">
                      <img src="#"  width="90%" height="140" style="background-color: darkgrey;margin-left: 5%;margin-right: 5%"/>
<!--                    <b-button  class="singinbuttonstyle"  > Add photo</b-button>-->
                    <b-form-file class="singinbuttonstyle" browse-text="Choose Photo" placeholder="Choose photo..."
                                 accept="image/jpeg, image/png, image/gif"/>
                  </b-col>
                  <b-col md="8">
                    <b-input class="inputClasss" style="margin-top:10px" v-model="this.addStudentModel.fatherName" type="text" placeholder="Atasynyň ady"></b-input>
                    <b-input class="inputClasss" v-model="this.addStudentModel.name" type="text" placeholder="Ady"></b-input>
                    <b-input class="inputClasss" v-model="this.addStudentModel.surname" type="text" placeholder="Familiýasy"></b-input>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6">
                  <b-row style="margin-top: 10px">
                    <b-col md="4">
                      <h6 style="margin-top: 5px">Talyp belgi:</h6>
                    </b-col>
                    <b-col md="8">
                      <b-input v-model="this.addStudentModel.studentID" type="number" placeholder="Talyp belgisi"></b-input>
                    </b-col>
                  </b-row>
                <b-row style="margin-top: 10px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Topar nomeri:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-input v-model="this.addStudentModel.klass" type="text" placeholder="Topar nomeri"></b-input>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 10px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Kursuny saylan:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-dropdown id="dropdown-left" text="Kursuny saýlaň" variant="outline-primary" style="width:100%">
                      <b-dropdown-item v-for="course in couses" :key="course.id">{{ course.name }}</b-dropdown-item>
                    </b-dropdown>
                  </b-col>
                </b-row>
                <b-row style="margin-top: 10px">
                  <b-col md="4">
                    <h6 style="margin-top: 5px">Facultet Saylan:</h6>
                  </b-col>
                  <b-col md="8">
                    <b-dropdown id="dropdown-left" text="Fakultetini saýlaň" variant="outline-primary" style="width:100%">
                      <b-dropdown-item v-for="facultet in facultetler" :key="facultet.id">{{
                          facultet.nameTM
                        }}
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-col>
                </b-row>

              </b-col>
            </b-row>
            <hr>



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
.headerTypeClass{
  margin-left: 330px;
  padding-top: 20px;
}
.singinbuttonstyle{
  background-color:#0762C8;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.singinbuttonstyle:hover{
  background-color: #0e88fd;
}
.inputClasss{

  border: 1px solid #0762C8;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 15px;
}
</style>
