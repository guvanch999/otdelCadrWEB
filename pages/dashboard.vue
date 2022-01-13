<template>
  <div>
    <div class="headerTypeClass">
      <div style="color: #0762C8;font-weight: bolder;font-size: 24px;line-height: 28px;">
        Talyplar
      </div>
    </div>
    <b-row>
      <Sidebar />
      <div style="width: 93%;margin-left: 100px;">
        <div class="mt-3 pl-3 pr-3 pb-3 pt-3 blockClass">
          <div class="gmargin">
            <b-row align-h="between" align-v="center">
              <b-col cols="auto">
                <b-button class="singinbuttonstyle" style="height: 45px">
                  Hemme talyplar
                </b-button>
              </b-col>
              <b-col  cols="auto" >
                <b-container style="height: 45px;border-radius: 8px;background-color: #F2F3F5;">
                  <b-row align-v="center">
                    <b-col>
                      <b-dropdown
                        split
                        split-variant="outline-primary"
                        variant="primary"
                        text="2021-2022"
                        style="caret-color: green"
                        align="center">
                        <b-dropdown-item href="#">2019-2020</b-dropdown-item>
                        <b-dropdown-item href="#">2020-2021</b-dropdown-item>
                        <b-dropdown-item href="#">2021-2022</b-dropdown-item>
                      </b-dropdown>
                    </b-col>
                    <div style="background-color: #97A1B4;height: 35px;width: 1px;margin: 5px"/>
                    <span style="font-weight: normal;font-size: 15px;line-height: 19px;">
                      okuw yyly jemi
                    </span>
                    <span style="margin-left: 10px;margin-right: 10px;font-size: 18px;font-weight: bolder;color:#0762C8;">
                      2200
                    </span>
                    <span style="font-weight: normal;font-size: 15px;line-height: 19px;margin-right: 10px">
                      talyp
                    </span>
                  </b-row>
                </b-container>
              </b-col>
              <b-col cols="auto">
                  <b-button class="addStudentbuttonstyle" style="height: 45px">
                    <BIconPlusCircle />  Talyp gosmak
                  </b-button>
              </b-col>
            </b-row>
          </div>

          <!--fakultetlar boyunca boyunca -->
          <div class="greyborder" style="padding: 10px">
            <div>
              <b-row>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px; margin: 10px;">
                    <b-container align="left" style="padding-left: 20px;color: red">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                          <b-col align-self="center" style="font-size: 25px;">
                            LLD
                          </b-col>
                          <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                            1200
                          </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                          <b-col>
                            <b-progress value="70" height="7px" variant="danger"> </b-progress>
                          </b-col>
                      </b-row>
                    </b-container>

                  </div>
                </b-col>
<!--                1 kurs-->
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px">
                      <b-row align-v="baseline" style="height: 75px;" align-h="between">
                        <b-col align-self="center" style="font-size: 14px;font-weight: bolder;color: blue">
                          Kompyuter ylymlary we maglumat tehnologiyalary
                        </b-col>
                        <b-col align-self="center" cols="auto" style="font-size: 30px;color: blue;text-align: right;margin-right: 18px;margin-left: 10px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px">
                      <b-row align-v="baseline" style="height: 75px;color: green" align-h="between">
                        <b-col align-self="center" style="font-size: 14px;font-weight: bolder;">
                          Biotehnologiya
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="success"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px">
                      <b-row align-v="baseline" style="height: 75px;color: black" align-h="between">
                        <b-col align-self="center" style="font-size: 14px;font-weight: bolder;">
                          Himiki we nanotehnologiya
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="dark"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px">
                      <b-row align-v="baseline" style="height: 75px;color: yellow" align-h="between">
                        <b-col align-self="center" style="font-size: 14px;font-weight: bolder;">
                          Kiberfiziki ulgamlar
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="warning"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px">
                      <b-row align-v="baseline" style="height: 75px;color: darkgrey" align-h="between">
                        <b-col align-self="center" style="font-size: 14px;font-weight: bolder;">
                          Innowatika
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="secondary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>

          <br>
          <!--          kurslar boyunca -->
          <div class="greyborder" style="padding: 10px">
            <div>
              <b-row>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px; margin: 10px;">
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          LLD
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>

                  </div>
                </b-col>
                <!--                1 kurs-->
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          1-nji kurs
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          2-nji kurs
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          3-nji kurs
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          4-nji kurs
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
                <b-col md="4" style="min-width: 400px">
                  <div class="greyborder" style="height: 100px;margin: 10px;" >
                    <b-container align="left" style="padding-left: 20px;color: blue">
                      <b-row align-v="baseline" style="height: 70px;" align-h="between">
                        <b-col align-self="center" style="font-size: 25px;">
                          Magistratura
                        </b-col>
                        <b-col align-self="center" style="font-size: 30px;text-align: right;margin-right: 18px">
                          1200
                        </b-col>
                      </b-row>
                      <b-row align-v="stretch">
                        <b-col>
                          <b-progress value="70" height="7px" variant="primary"> </b-progress>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>

          <br>

          <!--          asaky student details-->
<!--          <div style="padding: 10px">-->
<!--            <b-container fluid style="border-radius: 8px;background-color: #F9F9FB;">-->
<!--              <b-row align-v="center" style="height: 50px;min-width: 750px">-->
<!--                <b-col style="color: #97A1B4;font-size: 18px;font-weight: bolder">-->
<!--                  Surat-->
<!--                </b-col>-->
<!--                <b-col style="color: #97A1B4;font-size: 18px;font-weight: bolder">-->
<!--                  Doly ady-->
<!--                </b-col>-->
<!--                <b-col style="color: #97A1B4;font-size: 18px;font-weight: bolder">-->
<!--                  Ulanyjy ady-->
<!--                </b-col>-->
<!--                <b-col style="color: #97A1B4;font-size: 18px;font-weight: bolder">-->
<!--                  Telefon-->
<!--                </b-col>-->
<!--                <b-col style="color: #97A1B4;font-size: 18px;font-weight: bolder">-->
<!--                  Funksiyalar-->
<!--                </b-col>-->
<!--              </b-row>-->
<!--            </b-container>-->
<!--          </div>-->

<!--          table-->
          <div style="padding: 10px;padding-right: 15px">
            <table>
              <thead>
              <th class="th1" style="border-top-left-radius: 8px;border-bottom-left-radius: 8px;">
                Surat
              </th>
              <th class="th1">
                Doly ady
              </th>
              <th class="th1">
                Fakulteti
              </th>
              <th class="th1">
                Hunari
              </th>
              <th class="th1" style="border-top-right-radius: 8px;border-bottom-right-radius: 8px">
                Funksiyalar
              </th>
              </thead>

              <tbody>
<!--              <tr>-->
<!--              <td class="th2">-->
<!--                #-->
<!--              </td>-->
<!--              <td class="th2">-->
<!--                <b-input class="inputSearch" placeholder="Gozleg"/>-->
<!--              </td>-->
<!--              <td class="th2">-->
<!--                <b-input class="inputSearch" placeholder="Gozleg"/>-->
<!--              </td>-->
<!--              <td class="th2">-->
<!--                <b-input class="inputSearch" placeholder="Gozleg"/>-->
<!--              </td>-->
<!--              <td class="th2">-->
<!--                #-->
<!--              </td>-->
<!--              </tr>-->
              <tr>
                <td align="center">
                  <img class="myImg" src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg">
                </td>
                <td>
                  <!--                  Ady Fam A.Ady-->
                  <div class="tdCell" style="font-size: 18px;font-weight: bolder">
                    Ezizhan Osmanow Amanowic
                  </div>
                  <hr>
                  <!--                 talyp belgisi -->
                  <div style="font-size: 17px;">
                    202020
                  </div>

                </td>
                <td>
                  <!--                  Fakulteti-->
                  <div class="tdCell" style="font-size: 18px;">
                    Kompyuter ylymlary we maglumat tehnologiyalary
                  </div>
                  <hr>
                  <!--                 kursy -->
                  <div style="font-size: 17px;">
                    4 yyl
                  </div>

                </td>
                <td>
                  <!--                  Hunari-->
                  <div class="tdCell" style="font-size: 18px;">
                    Mobile tor
                  </div>
                  <hr>
                  <!--                 topary -->
                  <div style="font-size: 17px;">
                    3131
                  </div>

                </td>
                <td>
                  <!--                  Funksiyalar-->
                  <div class="tdCell" style="font-size: 18px;horiz-align: center">

                      <b-button variant="primary" style="margin-right: 15px;">
                        <img src="../assets/icons/view.svg" style="height: 20px;width: 20px;">
                      </b-button>
                      <b-button variant="success" style="margin-right: 15px;">
                        <img src="../assets/icons/note.svg" style="height: 20px;width: 20px;">
                      </b-button>
                      <b-button variant="danger" style="margin-right: 15px;">
                        <img src="../assets/icons/delete.svg" style="height: 20px;width: 20px;">
                      </b-button>
                  </div>
                  <hr>
                  <!--                 Nomeri -->
                  <div style="font-size: 17px;">
                    +993 65 99 99 99
                  </div>

                </td>

              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </b-row>
  </div>

</template>



<script>


import { mapGetters, mapActions } from 'vuex'
import PreviewPopup from '~/components/students/PreviewPopup'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
// import RadialProgressBar from 'vue-radial-progress'



export default {

  components: { Sidebar, Header, PreviewPopup},
  loading: { continuous:true },
  data () {
    return {
      bars: [
        { variant: 'success', value: 75 },
        { variant: 'info', value: 75 },
        { variant: 'warning', value: 75 },
        { variant: 'danger', value: 75 },
        { variant: 'primary', value: 75 },
        { variant: 'secondary', value: 75 },
        { variant: 'dark', value: 75 }
      ],
      timer: null,
      addStudentModel: {
        studentID: 0,
        fatherName: '',
        name: '',
        surname: '',
        course: '',
        facultyID: 0,
        klass: ''
      }
      // completedSteps: 0,
      // totalSteps: 10
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
.wrapper {
  max-width: 300px;
  margin: 0 auto;
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

table {
  width: 100%;
  padding: 10px;
}
thead{
  height: 50px;
  border-radius: 10px;

}
.th1 {
   padding: 10px;
   text-align: center;
   background-color: rgba(2, 2, 2, 0.04);
   font-family: Rubik;
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 21px;
   /*border-radius: 10px;*/
 }
.th2 {
  padding: 10px;
  text-align: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /*border-radius: 10px;*/
}
.inputSearch{
  height: 35px;background: #F2F3F5;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
}
.myImg{
  height: 120px;
  /*width: 100px;*/
  align-self: center;
  margin: 15px;
  border-radius: 15px;
}
/*thead{*/
/*  border-radius: 8px;*/
/*  margin-left: 10px;*/
/*  margin-right: 10px;*/
/*  padding: 10px;*/
/*  background-color: lightblue;*/
/*}*/
td {
  padding: 10px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
  min-width: 200px;
}
.tdCell{
  display: flex;
  height: 50px;
  align-items: center;
  max-width: 300px
}
</style>
