<template>
  <div>
    <b-row style="margin-left: 2px">
      <b-col md="6" style="min-width: 500px">
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Okaýan ýyly we </h6>
            <h6>taýýarlygynyň ugry:</h6>
          </b-col>
          <b-col md="8">
            <b-form-textarea type="text" v-model="optionalDetailModel.tayyatlyk_ugry"
                             :state="validateFunctions('requiderValidator',optionalDetailModel.tayyatlyk_ugry)"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">UÝJ-da galýarmy:</h6>
          </b-col>
          <b-col md="8">
            <b-dropdown block  :text="optionalDetailModel.UYJ_galyarmy?'Howa':'Ýok'">
              <b-dropdown-item @click="changeValues('UYJ_galyarmy',1)">Howa</b-dropdown-item>
              <b-dropdown-item @click="changeValues('UYJ_galyarmy',0)">Ýok</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Pasport belgisi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" :state="validateFunctions('requiderValidator',optionalDetailModel.passport_belgi)" v-model="optionalDetailModel.passport_belgi"/>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Pasport kim </h6>
            <h6>tarapyndan berildi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="optionalDetailModel.passport_kim_tar_berl"
                     :state="validateFunctions('requiderValidator',optionalDetailModel.passport_kim_tar_berl)"
            ></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Öňki familiýasy:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="optionalDetailModel.onki_familiyasy"
                     :state="validateFunctions('requiderValidator',optionalDetailModel.onki_familiyasy)"
            ></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Bellik:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
            v-model="optionalDetailModel.bellik"
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
                             v-model="optionalDetailModel.salgydaky_yeri"
                             :state="validateFunctions('requiderValidator',optionalDetailModel.salgydaky_yeri)"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Harby gullugy tamamlan:</h6>
          </b-col>
          <b-col md="8">
            <b-dropdown :text="optionalDetailModel.harby_gulluk?'Howa':'Ýok'" style="width: 100%;">
              <b-dropdown-item @click="changeValues('harby_gulluk',0)" >Ýok</b-dropdown-item>
              <b-dropdown-item @click="changeValues('harby_gulluk',1)">Howa</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">UÝJ-da otag belgisi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text"
                     v-model="optionalDetailModel.UYJ_otag_belgi"
            ></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Passportyň berlen senesi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="date"
                     v-model="optionalDetailModel.passport_berlen_senesi"
                     :state="validateFunctions('requiderValidator',optionalDetailModel.passport_berlen_senesi)"
            ></b-input>
          </b-col>
        </b-row>


        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Maşgala ýagdaýy:</h6>
          </b-col>
          <b-col md="8">
            <b-dropdown :text="optionalDetailModel.masgala_yagdayy?'Maşgalaly':'Sallah'" style="width: 100%;">
              <b-dropdown-item @click="changeValues('masgala_yagdayy',1)">Maşgalaly</b-dropdown-item>
              <b-dropdown-item @click="changeValues('masgala_yagdayy',0)">Sallah</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Welaýatly bolup UÝJ-dan çykanlar:</h6>
          </b-col>
          <b-col md="8">
            <b-dropdown :text="optionalDetailModel.wel_bol_UYJ_cykanlar?'Howa':'Ýok'" style="width: 100%;">
              <b-dropdown-item  @click="changeValues('wel_bol_UYJ_cykanlar',0)">Ýok</b-dropdown-item>
              <b-dropdown-item  @click="changeValues('wel_bol_UYJ_cykanlar',1)">Howa</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col md="4">
            <h6 style="margin-top: 5px">Temmi:</h6>
          </b-col>
          <b-col md="8">
            <b-input type="text" v-model="optionalDetailModel.temmi"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col md="2">
        <b-button variant="primary" @click="$emit('changeStep','step4')">Yza gaýtmak</b-button>
      </b-col>
      <b-col md="8">
        <b-button variant="primary" @click="addDetails">Ýatda sakla</b-button>
      </b-col>
      <b-col md="2">
        <b-button variant="primary" v-if="isAdded" @click="finishSetup">Tamamla</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      optionalDetailModel: {
        salgydaky_yeri: "",
        jynsy: 0,
        harby_gulluk: 0,
        UYJ_galyarmy: 0,
        UYJ_otag_belgi: "",
        passport_belgi: "",
        passport_berlen_senesi: "",
        passport_kim_tar_berl: "",
        masgala_yagdayy: 0,
        onki_familiyasy: "",
        wel_bol_UYJ_cykanlar: 0,
        tayyatlyk_ugry: "",
        bellik: "",
        temmi: "",
        studentID: 0
      },
      isAdded:false
    }
  },
  methods: {
    ...mapActions({
      addToServer:'students/addOptionalDetails'
    }),
    changeValues(param,value){
      this.optionalDetailModel[param]=value;
    },
    validateFunctions(name, value) {
      const validators = this.$customValidators;
      return validators[name](value);
    },
    async addDetails(){
      this.optionalDetailModel.studentID = this.currentId;
      this.$emit('changeIsLoading',true);
      let success=await this.addToServer(this.optionalDetailModel);
      if(success){
          this.isAdded=true;
      } else{
        alert("Bir zat nadogry");
      }
      this.$emit('changeIsLoading',false);
    },
    async finishSetup(){
      localStorage.removeItem("id");
      localStorage.removeItem('detailId');
      localStorage.removeItem('optionalDetailId')
      this.$emit('changeStep','step1');
    }
  },
  computed:{
      ...mapGetters({
        currentId:'students/getCurrentId'
      })
  },
  async mounted() {
        if(localStorage['id']){
          let result=await this.$store.dispatch('students/getOptionalDetail',localStorage['id']);
          if(result){
            //this.optionalDetailModel=result;
            Object.keys(this.optionalDetailModel).forEach(el=>{
              if(result[el]){
                this.optionalDetailModel[el]=result[el];
              }
            })
            this.isAdded=true;
          } else {
            this.isAdded=false;
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
