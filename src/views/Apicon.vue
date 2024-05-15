<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>API CONNECT</h1>
        <!-- <h2>{{ apidata }}</h2> -->
        <v-btn color="success" @click="newItem()">NewItem</v-btn>
      </v-col>
      <v-col cols="3" v-for="(item, index) in apidata" :key="index">
        <v-card width="250">
          <v-img
            src="https://i.pinimg.com/236x/ec/88/23/ec88237079284a706a2bd5a3e20b6d0c.jpg"
          ></v-img>
          <v-card-title primary-title>
            <span>name: {{ item.product_name }}</span>
            <span>amount: {{ item.amount }}</span>
            <span>price: {{ item.price }}</span>
          </v-card-title>
          <v-btn color="info" @click="editItem(item)">edit</v-btn>
          <v-btn color="red" @click="saveDelete(item._id)">delete</v-btn>
        </v-card>
      </v-col></v-row
    >
    <v-dialog v-model="dialogedit" max-width="500px">
      <v-card-title>{{ savemode }}</v-card-title>
      <v-card-text
        ><v-row>
          <v-col cols="6">
            <v-text-field
              v-model="postdata.product_name"
              label="name"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="postdata.amount"
              label="amount"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="postdata.price" label="price"></v-text-field>
          </v-col> </v-row
      ></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="closeData()"> Cancel </v-btn>
        <v-btn color="primary" text @click="saveSelect()">Save</v-btn>
      </v-card-actions>
    </v-dialog>
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

<style></style>
