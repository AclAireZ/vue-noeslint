<template>
  <v-container>
    <v-row>
      <v-col
        cols="3"
        v-for="(item, index) in apidata"
        :key="index"
        class="mb-4"
      >
        <!-- Added class 'mb-4' -->
        <v-card width="250" height="250" tile class="rounded-lg">
          <v-img
            height="100%"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=375,341g"
          >
            <v-row align="end" justify="center" class="fill-height">
              <v-col class="py-0">
                <v-col class="py-0">
                  <v-btn
                    rounded
                    color="pink"
                    style="color: white; font-family: cursive"
                    @click="openDialog(item)"
                  >
                    {{ item.product_name }}
                  </v-btn>
                </v-col>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogedit" width="300">
      <v-card width="300" color="#ff55a3" class="rounded-lg">
        <v-card-title>
          <img
            class="card-image"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=375,341"
          />
        </v-card-title>
        <v-card-text>
          <h3 class="grey lighten-2 rounded-lg" style="text-align: center">
            {{ selectedItem.product_name }}
          </h3>
          <v-row no-gutters class="mt-4">
            <h4>Price: {{ selectedItem.price }}</h4>
          </v-row>

          <v-row no-gutters class="mt-4">
            <h4>Amount: {{ selectedItem.amount }}</h4>
            <v-text-field
              label="Amount"
              filled
              rounded
              dense
              v-model="toCart.amount"
            ></v-text-field>
          </v-row>
          <v-card-actions>
            <v-row justify="center">
              <v-col class="pr-2">
                <v-btn
                  block
                  rounded
                  depressed
                  color="success"
                  @click="addToList()"
                  >add</v-btn
                >
              </v-col>
              <v-col class="pr-2">
                <v-btn
                  block
                  rounded
                  depressed
                  color="error"
                  @click="dialogedit = false"
                  >cancel</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orderlist: [],
      apidata: [],
      dialogedit: false,
      selectedItem: {
        _id: "",
        product_name: "",
        price: "",
        amount: "", // Default image
      },
      toCart: {
        amount: "", // Default image
      },
      postdefault: {
        amount: "",
      },
    };
  },
  mounted() {
    console.log("llllosdadasd");
    console.log(this.$store.state.carts.length);
  },
  computed: {
    getmycarts() {
      return this.$store.state.carts;
    },
  },
  created() {
    this.getData();
  },
  closeData() {
    this.dialogedit = false;
    // this.toCart = { ...this.postdefault };
    // this.toCart = "";
  },
  methods: {
    openDialog(item) {
      this.selectedItem = { ...item };
      this.dialogedit = true;
    },
    addToList() {
      const pro = {
        _id: this.selectedItem._id,
        product_name: this.selectedItem.product_name,
        amount: this.toCart.amount,
      };

      // Dispatch action to add item to the cart
      this.$store.dispatch("addCarts", pro);

      // Close the dialog
      this.dialogedit = false;

      // Show success dialog
      alert("เพิ่มออร์เดอร์สำเร็จ!");
    },

    getData() {
      this.axios
        .get("http://127.0.0.1:3000/products/")
        .then((response) => {
          this.apidata = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching product data: ", error);
        });
    },
    async savePostdata() {
      try {
        const { data } = await this.axios.post(
          "http://127.0.0.1:3000/products/663c8921c070c76dd2f4fff1/orders",
          this.selectedItem
        );
        alert("Post successful!");
        this.getData();
        this.closeData();
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },
  },
};
</script>

<style>
h1 {
  color: white;
  font-family: cursive;
  font-size: 50px;
}
h2 {
  color: white;
  font-family: cursive;
  font-size: 15px;
}
h3 {
  color: black;
  font-family: cursive;
  font-size: 15px;
}
h4 {
  color: white;
  font-family: cursive;
  font-size: 15px;
}
.card-image {
  height: 200px;
  width: 500px;
  object-fit: cover;
  border-radius: 10px;
}
.card-text {
  margin-top: 10px;
  font-size: 12px;
  line-height: 16px;
}
</style>
