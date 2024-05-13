<template>
  <div>
    <v-row no-gutters>
      <v-img max-width="100%" height="300" src="../assets/ygg.png">
        <span
          style="
            color: white;
            font-size: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          "
          class="font-italic font-weight-light"
          >saharat shoedsuk</span
        >
      </v-img></v-row
    >

    <v-row>
      <v-card class="card-dec" max-width="350" height="600" color="#bedbed">
        <v-img height="400px" src="../assets/myimg.jpg" cover></v-img>

        <v-card-title class="font-dec"> Saharat Shoedsuk </v-card-title>

        <v-card-text>
          <div class="font-dec2">Software Engineer</div>
        </v-card-text>

        <v-row justify="center">
          <a href="https://www.facebook.com/saharat.shoedsuk" target="_blank">
            <v-btn depressed class="blue white--text">
              <v-icon left large color="white darken-2"> mdi-facebook </v-icon
              ><span>Saharat Shodsuk</span>
            </v-btn></a
          ></v-row
        >

        <v-row justify="center "
          ><v-btn depressed class="green white--text"
            ><v-icon left large color="white darken-2"> mdi-phone </v-icon>
            <span>0650370797</span></v-btn
          ></v-row
        >

        <v-row justify="center "
          ><a href="https://www.instagram.com/vo_sse/" target="_blank">
            <v-btn depressed class="red white--text"
              ><v-icon left large color="white darken-2">
                mdi-instagram
              </v-icon>
              <span>vo.sse</span></v-btn
            ></a
          ></v-row
        >
      </v-card>

      <v-col cols="3">
        <v-card class="card-dec2" max-width="400" height="250" color="#bedbed">
          <v-card-title class="font-dec3"> Graduate </v-card-title>
          <v-row justify="center">
            <v-img max-width="70" src="../assets/psuuu.png" cover></v-img
          ></v-row>
          <v-card-subtitle class="font-dec2">
            Computer Engineering</v-card-subtitle
          >
        </v-card></v-col
      >
      <v-col cols="3">
        <v-card class="card-dec2" max-width="400" height="250" color="#bedbed">
          <v-card-title class="font-dec3"> Hard Skill </v-card-title>

          <v-card-title
            class="font-dec3"
            style="color: orangered; font-size: 20px"
          >
            JavaScript
          </v-card-title>

          <v-col>
            <v-progress-linear
              value="30"
              height="10"
              striped
              color="deep-orange"
            ></v-progress-linear>
          </v-col>
          <v-card-title class="font-dec3" style="color: blue; font-size: 20px">
            Flutter
          </v-card-title>
          <v-col>
            <v-progress-linear
              value="30"
              height="10"
              striped
              color="blue"
            ></v-progress-linear>
          </v-col> </v-card
      ></v-col>
      <v-col cols="3">
        <v-card class="card-dec2" max-width="400" height="250" color="#bedbed">
          <v-card-title class="font-dec3"> Favorite Brand </v-card-title>
          <v-row justify="center">
            <v-col cols="2">
              <v-img src="../assets/apple.png" cover></v-img>
            </v-col>
            <v-col cols="2">
              <v-img src="../assets/logitech.png" cover></v-img>
            </v-col>
            <v-col cols="2">
              <v-img src="../assets/adidas.png" cover></v-img>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="2">
              <v-img src="../assets/razer.png" cover></v-img>
            </v-col>
            <v-col cols="2">
              <v-img src="../assets/Asus-Logo.png" cover></v-img>
            </v-col>
          </v-row> </v-card
      ></v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card class="card-dec3" max-width="434" height="330" tile>
          <v-img
            height="100%"
            src="https://static.qobuz.com/images/covers/sa/b6/pke8b9pznb6sa_600.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://amplify.sydney/wp-content/uploads/2023/10/380716023_334782012444495_6969715911283066004_n.jpg"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      Daylight
                    </v-list-item-title>
                    <v-list-item-subtitle>David Kushner</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-col class="py-0">
                  <a
                    href="https://music.youtube.com/search?q=daylight+david+kushner"
                    target="_blank"
                  >
                    <v-btn
                      depressed
                      class="white black--text"
                      outlined
                      rounded
                      small
                    >
                      START RADIO
                    </v-btn></a
                  ></v-col
                >
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="3">
        <v-card class="card-dec3" max-width="434" height="330" tile>
          <v-img
            height="100%"
            src="https://upload.wikimedia.org/wikipedia/en/7/75/DogDaysAreOver_F%26M.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://scontent.fhdy3-1.fna.fbcdn.net/v/t39.30808-1/275612352_523583715793795_8792892777002818330_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=93HWN8Kya0oQ7kNvgF10AwS&_nc_ht=scontent.fhdy3-1.fna&cb_e2o_trans=t&oh=00_AYDQhYBOpaLW8xdTmxawnWgSpoFHMY99G_40vFI644fkJw&oe=6646CF8F"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      Dog Days Are Over
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Florence + The Machiner</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-col class="py-0">
                  <a
                    href="https://music.youtube.com/watch?v=DDpl79l0JHA&list=OLAK5uy_kq9OF9fytxPuZDCIi5K36yFQQGjpvGE9Y"
                    target="_blank"
                  >
                    <v-btn
                      depressed
                      class="white black--text"
                      outlined
                      rounded
                      small
                    >
                      START RADIO
                    </v-btn></a
                  ></v-col
                >
              </v-col>
            </v-row>
          </v-img>
        </v-card></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>

<style>
.card-dec {
  position: absolute;
  top: 350px;
  left: 50px;
}

.card-dec2 {
  font-size: 20px;
  top: 50px;
  left: 500px;
}
.card-dec3 {
  top: 50px;
  left: 700px;
}

.font-dec {
  font-size: 35px;
  justify-content: center;
  align-items: center;
}
.font-dec2 {
  font-size: 25px;
  text-align: center;
}
.font-dec3 {
  font-size: 30px;
}
</style>
