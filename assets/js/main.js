const postform = document.getElementById('postform')
const nameinput = document.getElementById('nameinput')
const priceinput = document.getElementById('priceinput')
const imageinput= document.getElementById('imageinput')
const descriptioninput=document.getElementById('descriptioninput')
const titleinput=document.getElementById('titleinput')
  // const proList= document.getElementById('proList')

function postProduct(e) {
    e.preventDefault();
    axios
      .post(`https://65c6142be5b94dfca2e0e8ad.mockapi.io/blog2`, {
        image:imageinput.value,
        name: nameinput.value,
        description:descriptioninput.value,
        title:titleinput.value,
      })
      .then((res) => {
        getproducts();
        postform.reset();
      });
  }
  
  postform.addEventListener("submit", postProduct);

// page=1
// limit=4
// function getproducts(){
//     axios.get(`https://65680f1?page=${page}&limit=${limit}`)
//     .then(res=>{
//         products = res.data
//         products.map(item=>{
//             const box = document.createElement('div')
//             box.className = "box col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
//             box.innerHTML = `
//             <div class="div">
//             <img src="${item.image}" alt="">
//             <p>${item.name}</p>
//             <p>${item.price} Manat</p>
           
//             <button class="onebtn" onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
//             <button class="twobtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button> 
//               </div>
//             `
//             proList.appendChild(box)
//         })
//     })
// }
// getproducts()

// const product=document.getElementById('product')

// page=1
// limit=4
// function getdata(){
//     axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products?page=${page}&limit=${limit}`)
//     .then(res=>{
//         products = res.data
//         products.map(item=>{
//             const box = document.createElement('div')
//             box.className = "box col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
//             box.innerHTML = `
//             <div class="div">
//             <img src="${item.image}" alt="">
//             <p>${item.name}</p>
//             <p>${item.price} Manat</p>
           
//             <button class="onebtn" onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
//             <button class="twobtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button> 
//               </div>
//             `
//             product.appendChild(box)
//         })
//     })
// }
// getdata()
  