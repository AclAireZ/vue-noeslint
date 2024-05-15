<template>
  <div>
    <v-container>
      <v-row no-gutters class="custom-background rounded-lg">
        <div class="text-container">
          <h1>Orders</h1>
          <v-btn
            color="pink"
            style="color: white; font-family: cursive"
            @click="newItem()"
          >
            Checkout</v-btn
          >
        </div>
      </v-row>
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="3"
            v-for="(item, index) in getmycarts"
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
                <h4>Amount: {{ item.amount }}</h4>
                <v-card-actions>
                  <v-row justify="center">
                    <v-col class="pr-2">
                      <v-btn block rounded depressed color="success"
                        >edit</v-btn
                      >
                    </v-col>
                    <v-col class="pr-2">
                      <v-btn
                        block
                        rounded
                        depressed
                        color="error"
                        @click="deleteItem(index)"
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
            <!-- <v-row no-gutters>
              <v-text-field
                v-model="postdata.product_name"
                label="Name"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row> -->
            <v-row no-gutters>
              <h2>Price:</h2>
            </v-row>
            <!-- <v-row no-gutters>
              <v-text-field
                v-model="postdata.price"
                label="Price"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row> -->
            <v-row no-gutters>
              <h2>Amount:</h2>
            </v-row>
            <!-- <v-row no-gutters>
              <v-text-field
                v-model="postdata.amount"
                label="Amount"
                filled
                rounded
                dense
              ></v-text-field>
            </v-row> -->
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success"> Save </v-btn>
            <v-btn color="error"> Cancel </v-btn>
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
      dialogedit: false, // ตัวแปรสำหรับเปิด/ปิด dialog สำหรับแก้ไขรายการ
      selectedItemIndex: null, // ตัวแปรสำหรับเก็บ index ของรายการที่เลือก
    };
  },
  computed: {
    getmycarts() {
      return this.$store.state.carts;
    },
  },
  methods: {
    deleteItem(index) {
      this.selectedItemIndex = index;
      this.$store.dispatch("removeCartItem", this.selectedItemIndex);
      this.selectedItemIndex = null;
    },
    async savePostdata(item) {
      try {
        // ดึงข้อมูลสินค้าจาก store โดยใช้ ID
        const order = this.$store.state.carts.find((cart) => cart._id === item);
        if (!order) {
          console.log(`Product with ID ${item} not found in the cart.`);
          return;
        }

        // สร้าง body ของคำขอ POST โดยรวม product_name และ amount
        const body = {
          name: order.product_name,
          amount: order.amount,
        };

        // ส่งคำขอ POST พร้อมกับ body ไปยังเซิร์ฟเวอร์
        const { data } = await this.axios.post(
          `http://127.0.0.1:3000/products/${item}/orders`,
          body
        );
      } catch (error) {
        console.log(error);
        alert("error");
      }
    },

    newItem() {
      // รับข้อมูลรถเข็น
      const carts = this.$store.state.carts;

      // ส่งคำขอ POST โดยใช้ข้อมูลสินค้าและจำนวนสินค้าในรถเข็น
      carts.forEach((cart) => {
        // ส่ง ID ตรงไปยังฟังก์ชัน savePostdata()
        this.savePostdata(cart._id);
      });
      carts.forEach((cart) => {
        this.deleteItem(cart._id);
      });
      alert("Post successful!");
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
