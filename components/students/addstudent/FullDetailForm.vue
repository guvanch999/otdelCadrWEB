<template>
  <div>
    <b-row style="margin-left: 2px">
      <b-col md="6" style="min-width: 500px">
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Ýaşaýan ýeri </h6>
            <h6>(Ýazgyda duran ýeri):</h6>
          </b-col>
          <b-col md="8">
            <b-form-textarea type="text" v-model="studentDetailModel.yashayanYeri"
                             :state="validateFunctions('requiderValidator',studentDetailModel.yashayanYeri)"
                             placeholder="Ýaşaýan ýeri"></b-form-textarea>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Milleti:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.milleti"
                     :state="validateFunctions('requiderValidator',studentDetailModel.milleti)"
                     placeholder="Milleti:">
            </b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Okuwa giren ýeri:</h6>
          </b-col>
          <b-col md="8">
            <b-dropdown :text="selectedText('welayat')" style="width:100%" variant="primary"
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
                     :state="validateFunctions('requiderValidator',studentDetailModel.doglanSenesi)"
                     placeholder="Doglan senesi:"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Bilimi boýunça hünäri:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.hunar"
                     :state="validateFunctions('requiderValidator',studentDetailModel.hunar)"
                     placeholder="Bilimi boýunça hünäri"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Alymlyk derejesi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.alymlykDereje"
                     :state="validateFunctions('requiderValidator',studentDetailModel.alymlykDereje)"
                     placeholder="Alymlyk derejesi"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Daşary ýurtda bolmagy:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.dasYurtBolm"
                     :state="validateFunctions('requiderValidator',studentDetailModel.dasYurtBolm)"
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
            <b-form-textarea type="text" v-model="studentDetailModel.salgydakyYeri"
                             :state="validateFunctions('requiderValidator',studentDetailModel.hYashayanYeri)"
                             placeholder="Häzirki ýaşaýan ýeri"></b-form-textarea>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Tamamlan mekdebi:</h6>
          </b-col>
          <b-col md="8">
            <b-form-textarea type="text" v-model="studentDetailModel.tamamlanMek"
                             :state="validateFunctions('requiderValidator',studentDetailModel.tamamlanMek)"
                             placeholder="Tamamlan mekdebi:"></b-form-textarea>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Doglan yeri:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.doglanYeri"
                     :state="validateFunctions('requiderValidator',studentDetailModel.doglanYeri)"
                     placeholder="Doglan yeri:"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Bilýän dilleri:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.bilyanDilleri"
                     :state="validateFunctions('requiderValidator',studentDetailModel.bilyanDilleri)"
                     placeholder="Bilýän dilleri:"></b-input>
          </b-col>
        </b-row>


        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Partiýa agazasy:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.partiyaAgzasy"
                     :state="validateFunctions('requiderValidator',studentDetailModel.partiyaAgzasy)"
                     placeholder="Partiýa agazasy:"></b-input>
          </b-col>
        </b-row>

        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Melisiň agzasymy:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="studentDetailModel.mejlisAgzasy"
                     :state="validateFunctions('requiderValidator',studentDetailModel.mejlisAgzasy)"
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
            <b-input type="text"
                     v-model="TPDetailModel.oy_telefony"
                     placeholder="Öý telfony"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">El tlfony:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="TPDetailModel.el_telefony"
                     placeholder="El tlfony"></b-input>
          </b-col>
        </b-row>


      </b-col>
      <b-col md="6" style="min-width: 500px">
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Kakasynyň telfon belgisi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="TPDetailModel.kakasynyn_tel"
                     placeholder="Kakasynyň telfon belgisi"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Ejesiniň telfon belgisi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="TPDetailModel.ejesinin_tel"
                     placeholder="Ejesiniň telfon belgisi"></b-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div style="text-align: center;margin-top: 10px">
      <b-button variant="primary" @click="$emit('changeStep','step1',{ update:true})">Yza</b-button>
      <b-button variant="primary" @click="createStudent">Ýatda sakla</b-button>
      <b-button variant="primary" @click="$emit('changeStep','step3',{ update:false})">Indiki</b-button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      studentDetailModel: {
        yashayanYeri: "",
        okuwaGirenYID: 0,
        studentID: 0,
        doglanSenesi: "",
        doglanYeri: "",
        milleti: "türkmen",
        tamamlanMek: "",
        bilyanDilleri: "",
        hunar: "",
        alymlykDereje: "Ýok",
        bilimi: "",
        partiyaAgzasy: "Ýok",
        dasYurtBolm: "Ýok",
        mejlisAgzasy: "Ýok",
        salgydakyYeri: ''
      },
      tpdId:0,
      TPDetailModel: {
        oy_salgysy: "",
        oy_telefony: "Ýok",
        el_telefony: "Ýok",
        kakasynyn_tel: "Ýok",
        ejesinin_tel: "Ýok",
        student_id: 0
      }
    }
  },
  methods: {
    ...mapActions({
      addDetailToStudent: 'students/addStudentDetail',
      loadWelayatlar: 'weleyatlarstore/loadWelayatlar',
      updateStudentDetail: 'students/updateStudentDetail',
      addTPDetail: 'students/addStudentTPDetail',
      updateTPDetail: 'students/updateStudentTPDetail'
    }),
    async createStudent() {
      this.studentDetailModel.studentID = this.currentId;
      this.$emit('changeIsLoading', true);
      let success = false;
      if (localStorage['detailId']) {
        let tempData = {
          detailId: localStorage['detailId'],
          inf: this.studentDetailModel
        }
        success = await this.updateStudentDetail(tempData);
        if(success){
            tempData={
              id:this.tpdId,
              inf:this.TPDetailModel
            }
            success=await this.updateTPDetail(tempData);
        }
      } else {
        success = await this.addDetailToStudent(this.studentDetailModel);
        if(success){
          this.TPDetailModel.student_id=this.currentId;
          success=await this.addTPDetail(this.TPDetailModel)
        }
      }
      this.$emit('changeIsLoading', false);
      if (success) {

      } else {
        alert("bir zat nadogry");
      }
    },
    selectGirenYeri(index) {
      this.studentDetailModel.okuwaGirenYID = index;
    },
    validateFunctions(name, value) {
      const validators = this.$customValidators;
      return validators[name](value);
    },
    selectedText(type) {
      if (type === 'welayat') {
        if (this.studentDetailModel.okuwaGirenYID) {
          let result = this.welayatlar.find(x => x.id === this.studentDetailModel.okuwaGirenYID)['name'];
          if (result) {
            return result;
          } else {
            return "Okuwa giren ýeri"
          }
        } else return "Okuwa giren ýeri"
      } else
        return 'Okuwa giren ýeri';
    }
  },
  computed: {
    ...mapGetters({
      welayatlar: 'weleyatlarstore/getWelayatlar',
      currentId: 'students/getCurrentId'

    }),

  },

  async mounted() {
    if (this.welayatlar.length === 0) {
      await this.loadWelayatlar();
    }
    if (localStorage['detailId']) {
      let result = await this.$store.dispatch('students/loadStudentDetail', localStorage['detailId']);
      if (result) {
        delete result['id'];
        this.studentDetailModel = result;
      }
      if(localStorage['thirdPartId']){
        let detail=await this.$store.dispatch('students/getTPDetail',localStorage['thirdPartId']);
        if(detail){
          this.tpdId=detail.id;
          delete  detail['id'];
          this.TPDetailModel=detail
        }
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
