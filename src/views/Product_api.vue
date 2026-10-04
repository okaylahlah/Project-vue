<template>
  <!-- Container หลักสำหรับจัดหน้าเว็บ -->
  <div class="container my-5">
    <h2 class="mb-4 text-center">รายการสินค้าจาก API</h2>
    
    <div class="row">
      <!-- วนลูปสินค้าแต่ละชิ้นด้วย v-for โดยใช้ id เป็น :key -->
      <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100 shadow-sm">
          
          <!-- แสดงรูปภาพสินค้า (ดึงจากฟิลด์ thumbnail หรือ images ใน DummyJSON) -->
          <img 
            :src="product.thumbnail" 
            class="card-img-top" 
            alt="Product Image" 
            style="object-fit: contain; width: 100%; height: 200px;" 
          />
          
          <div class="card-body d-flex flex-column">
            <!-- แสดงชื่อสินค้า (ตรงกับฟิลด์ title ใน DummyJSON) -->
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text text-muted small flex-grow-1">{{ product.description }}</p>
          </div>
          
          <div class="card-footer bg-white d-flex justify-content-between align-items-center">
            <!-- แสดงราคาสินค้า (ตรงกับฟิลด์ price ใน DummyJSON) -->
            <span class="text-success fw-bold">Price: ${{ product.price }}</span>
            
            <!-- ปุ่มสำหรับเพิ่มสินค้า -->
            <button type="button" class="btn btn-outline-primary btn-sm">Add</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ProductApiView",
  setup() {
    // สร้างตัวแปร reactive สำหรับเก็บข้อมูลสินค้า
    const products = ref([]);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก API ของ DummyJSON
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        
        // กำหนดข้อมูล array สินค้าเข้าไปในตัวแปร products
        products.value = data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // สั่งให้ดึงข้อมูลทันทีเมื่อคอมโพเนนต์ถูกโหลดขึ้นมาแสดงผล
    onMounted(fetchProducts);

    return {
      products, // ส่งออกตัวแปรเพื่อให้ Template ด้านบนนำไปใช้งานวนลูปแสดงผล
    };
  },
};
</script>

<style scoped>
/* สามารถใส่ CSS เพิ่มเติมเฉพาะคอมโพเนนต์นี้ได้ถ้าต้องการ */
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>