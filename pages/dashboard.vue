<template>
  <div>
    <div class="headerTypeClass">
      <h2 style="color: #0e88fd">
        Talyplar
      </h2>
    </div>
    <b-row>
      <Sidebar />
      <div style="width: 94%;margin-left: 100px;">
        <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
          <div class="gmargin">
            <b-row>
              <b-col md="2">
                <b-button class="singinbuttonstyle">
                  Hemme talyplar
                </b-button>
              </b-col>
              <b-col md="6" />
              <b-col md="2" style="float: right;margin-right: 10px;">
                <div style="display: flex">
                  <b-button class="addStudentbuttonstyle">
                    <BIconPlusCircle />  Talyp gosmak
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </div>
          <!--         border container grey-->
          <!--          fakultetlar boyunca boyunca -->
          <div class="greyborder">
            <!--          /* items first 3 row * /-->
            <div>
              <b-row>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;color: red" >
                    <b-row>
                      <b-col md="2">
                          <div style="margin: 10px;background-color: chartreuse;height: 80px;"/>
                      </b-col>
                      <b-col md="4">
                        <div>

                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
              </b-row>
            </div>
          </div>

          <!--          kurslar boyunca -->
          <div class="greyborder">
            <!--          /* items first 3 row * /-->
            <div>
              <b-row>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
                <b-col md="4">
                  <div class="greyborder" style="height: 100px;min-width: 400px;" />
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
      <vue-ellipse-progress :progress="40" />
    </b-row>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PreviewPopup from '~/components/students/PreviewPopup'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Sidebar,
    Header,
    PreviewPopup
     },
  data () {
    return {
      addStudentModel: {
        studentID: 0,
        fatherName: '',
        name: '',
        surname: '',
        course: '',
        facultyID: 0,
        klass: ''
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
    async createStudent () {
      if (
        this.addStudentModel.course === '' ||
        this.addStudentModel.klass === '' ||
        this.addStudentModel.name === '' ||
        this.addStudentModel.surname === ''
      ) {
        alert('Maglumatlary doly doldurylmadyk')
        return
      }
      await this.addStudentAction(this.addStudentModel).then((success) => {
        if (success) {
          this.addStudentModel.course = ''
          this.addStudentModel.klass = ''
          this.addStudentModel.name = ''
          this.addStudentModel.surname = ''
        }
      }).catch(err => console.log(err))
    }
  },
  computed: {
    ...mapGetters({
      welayatlar: 'weleyatlarstore/getWelayatlar',
      facultetler: 'facultetler/getFacultetler',
      couses: 'courses/getCourses'
    })
  },
  async mounted () {
    if (this.welayatlar.length === 0) {
      await this.loadWelayatlar()
      // console.log('here');
    }
  }
}
</script>

<style>
.blockClass {
  background-color: #fff;
  margin-left: 230px;
  margin-right: 20px;
  border: 1px solid rgba(234, 44, 71, 0.2);
  box-sizing: border-box;
  border-radius: 8px;
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
.addStudentbuttonstyle{
  background: #008A63;
  border-radius: 4px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  alignment: right;
  align-self: flex-end;
}
.singinbuttonstyle:hover{
  background-color: #0e88fd;
}
.greyborder{
  border: 1px solid #CED4DA;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 1%;
  /*margin-left: 1%;*/
  /*margin-right: 1%;*/
  /*margin-top: 0.5%;*/
  /*margin-bottom: 0.5%;*/
}
.gmargin{
  /*margin-left: 1%;*/
  /*margin-right: 1%;*/
  /*margin-top: 0.5%;*/
  /*margin-bottom: 0.5%;*/
  margin: 1%;
}
.inputClasss{

  border: 1px solid #0762C8;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 15px;
}
</style>
