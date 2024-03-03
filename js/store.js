import products from "../store.json" assert {type: 'json'}

let arr = products.data

const btn = document.querySelector('.btn_all')
const select = document.querySelector('select')



const createItem = (product) => {
  const ulEl = document.querySelector('.json_ul')
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = product.img;

  li.append(img);
  ulEl.append(li)
}


const removeItems = () => {
  const items = document.querySelectorAll('.json_ul > li');
  items.forEach((item) => {
    item.remove()
  })
}


const importData = () => {
  removeItems(); 
  select.selectedIndex = 0; 

  arr.map((item) => { 
    createItem(item)
  })
}


const selectCategory = (event) => {

  const { selectedIndex: n } = event.target.options;  
  
  const { value } = event.target.options[n] 
  console.log(value)

  const filterd = arr.filter((product) => {
    console.log(product)
    return product.category === value;
  })
  removeItems();
  filterd.forEach(product => {
    createItem(product);
  });

}

window.addEventListener('load', importData)
select.addEventListener('change', selectCategory)
btn.addEventListener('click', importData)

$('.trigger').on('click',function(){
  $('.sub_menu').fadeIn();
})
$('.sub_close').on('click', function () {
  $('.sub_menu').fadeOut();
});