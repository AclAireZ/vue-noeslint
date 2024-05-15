<template>
  <div>
    <v-container>
      <v-row no-gutters class="custom-background rounded-lg">
        <div class="text-container">
          <h1>Products</h1>
          <v-btn
            color="pink"
            style="color: white; font-family: cursive"
            @click="newItem()"
            >Add New Product</v-btn
          >
        </div>
      </v-row>
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="3"
            v-for="(item, index) in apidata"
            :key="index"
            class="mb-4"
          >
            <v-card width="250" color="#ff55a3" class="rounded-lg mt-4">
              <v-card-title>
                <img
                  class="card-image"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=375,341"
                />
              </v-card-title>
              <v-card-text>
                <h3
                  class="grey lighten-2 rounded-lg"
                  style="text-align: center"
                >
                  {{ item.product_name }}
                </h3>
                <h4>Price: {{ item.price }}</h4>
                <h4>Amount: {{ item.amount }}</h4>

                <v-card-actions>
                  <v-row justify="center">
                    <v-col class="pr-2">
                      <v-btn
                        block
                        rounded
                        depressed
                        color="success"
                        @click="editItem(item)"
                        >edit</v-btn
                      >
                    </v-col>
                    <v-col class="pr-2">
                      <v-btn
                        block
                        rounded
                        depressed
                        color="error"
                        @click="saveDelete(item._id)"
                        >delete</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row></v-container
      >
      <v-dialog v-model="dialogedit" width="500">
        <v-card class="rounded-lg" color="#ff55a3">
          <v-container>
            <!-- <v-row no-gutters>
                <h2>Image:</h2>
              </v-row>
              <v-row no-gutters>
                <v-text-field label="Image" filled rounded dense></v-text-field>
              </v-row> -->

            <v-row no-gutters>
              <h2>Name:</h2>
            </v-row>
            <v-row no-gutters>
              <v-text-field
                v-model="postdata.product_name"
                label="Name"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row>
            <v-row no-gutters>
              <h2>Price:</h2>
            </v-row>
            <v-row no-gutters>
              <v-text-field
                v-model="postdata.price"
                label="Price"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row>
            <v-row no-gutters>
              <h2>Amount:</h2>
            </v-row>
            <v-row no-gutters>
              <v-text-field
                v-model="postdata.amount"
                label="Amount"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="saveSelect()"> Save </v-btn>
            <v-btn color="error" @click="closeData()"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      apidata: [],
      dialogedit: false,
      postdata: {
        name: "",
        amount: "",
        price: "",
      },
      postdefault: {
        name: "",
        amount: "",
        price: "",
      },
    };
  },
  created() {
    this.getData();
  },
  computed: {
    savemode() {
      return this.id == "" ? "New Item" : "Edit Item";
    },
  },
  methods: {
    newItem() {
      this.dialogedit = true;
      this.postdata = this.postdefault;
      this.id = "";
    },
    editItem(item) {
      this.id = item._id;
      this.postdata = item;
      this.dialogedit = true;
    },
    closeData() {
      this.dialogedit = false;
      this.postdata = { ...this.postdefault };
      this.id = "";
    },
    saveSelect() {
      if (this.id != "") {
        this.savePushdata();
      } else this.savePostdata();
    },
    getData() {
      this.axios.get("http://127.0.0.1:3000/products/").then((response) => {
        console.log(response.data.data);
        this.apidata = response.data.data;
      });
    },
    async savePostdata() {
      try {
        const { data } = await this.axios.post(
          "http://127.0.0.1:3000/products",
          this.postdata
        );
        alert("Post successful!");
        this.getData();
        this.closeData();
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },
    async savePushdata() {
      try {
        const { data } = await this.axios.put(
          "http://127.0.0.1:3000/products/" + this.id,
          this.postdata
        );
        alert("Post successful!");
        this.getData();
        this.closeData();
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },
    async saveDelete(item) {
      try {
        if (confirm("delete it?")) {
          const { data } = await this.axios.delete(
            "http://127.0.0.1:3000/products/" + item
          );
          alert("delete successful!");
          this.getData();
          this.closeData();
        }
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },
  },
};
</script>

<style scope>
.custom-background {
  background-image: url("../../assets/ygg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  text-align: center;
}

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
