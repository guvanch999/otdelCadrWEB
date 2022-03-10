<template>
  <div>
    <div class="headerTypeClass">
      <h2>Header</h2>
    </div>
    <b-row >
      <Sidebar/>
      <div style="width: 94%;margin-left: 100px">
        <div class="mt-3 pl-3 pr-5 pb-3 pt-3 blockClass ">
          <b-row>
            <b-col md="2" style="min-width: 150px">
              <b-button class="singinbuttonstyle" :href="localePath('/students/dashboard')">
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
            <StudentMainForm ref="mainRef"
                             @changeIsLoading="isAddingAction"
                             @changeLabel="changeLabel"
                             @changeStep="goToNextStep" />
          <hr>
          <div  v-if="addLabel==='label1'">
            <FullDetailForm ref="fullDetailRef"

                            @changeIsLoading="isAddingAction"
                            @changeStep="goToNextStep"/>
          </div>
          <div v-if="addLabel==='label2'">
            <hr>
            <IshlanYerleriForm ref="islanYerleriRef"
                               @changeIsLoading="isAddingAction"
                               @changeStep="goToNextStep"/>
            <hr>
          </div>
          <div v-if="addLabel==='label3'">
            <hr>
            <AddParentsForm ref="addParentRef"
                            @changeIsLoading="isAddingAction"
                            @changeStep="goToNextStep"/>
            <hr>
          </div>
          <div   v-if="addLabel==='label4'">
            <hr>
            <OptionalDetails ref="optionalDetailRef"
                             @changeIsLoading="isAddingAction"
                             @changeStep="goToNextStep"/>
            <hr>
          </div>
        </div>
      </div>
    </b-row>
    <LoadingComponent v-if="isAdding" />
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
import LoadingComponent from "~/components/LoadingComponent";
import IshlanYerleriForm from "~/components/students/addstudent/IshlanYerleriForm";

export default {
  middleware:['auth'],
  components: {
    Sidebar,
    Header,
    PreviewPopup,
    StudentMainForm,
    FullDetailForm,
    AddParentsForm,
    OptionalDetails,
    IshlanYerleriForm
  },
  data() {
    return {
      isStudentAdded: false,
      isAdding:false,
      addLabel:''
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
    changeLabel(label){
      this.addLabel=label;
    },

    isAddingAction(st){
      this.isAdding=st;
    },
    goToNextStep(step,data){

      switch (step){
        case 'step1':{
          if(data && data.update){
            this.$refs.mainRef.prepeaToUpdate();
          } else {
            this.$refs.mainRef.initComponent();
          }
          this.changeLabel('');
          break;
        }
        case 'step2':this.changeLabel('label1');
        break;
        case 'step3':this.changeLabel('label2');
        break;
        case 'step4':this.changeLabel('label3');
          break;
        case 'step5':this.changeLabel('label4');
          break;

      }
    }
  },
  computed: {

  },

  async mounted() {
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
