
export function mostPopular(users,num){
  let allOrders = users.map(u => u.orders).flat().flat()
  let ordersCount = allOrders.map(o => {
    return {
      item: o,
        count: allOrders.reduce((a, b) => { return o.brand === b.brand && o.name === b.name ? a + b.qty : a + 0 }, 0)
    }
  })
  let ordersNoDup = ordersCount.filter((v,i,a)=>a.findIndex(t=>(t.item.brand === v.item.brand && t.item.name === v.item.name ))===i)
  let mostPopularProducts = [];

  num = num > ordersNoDup.length ? ordersNoDup.length : num

  while(mostPopularProducts.length < num){
    let max = ordersNoDup.reduce((a,b)=>{return Math.max(a, b.count)},0)
    for(let i=0;i<ordersNoDup.length;i++){
      if(mostPopularProducts.length >= num)
        break;
      if(ordersNoDup[i].count === max){
        mostPopularProducts.push(ordersNoDup[i])
        ordersNoDup.splice(i,1)
      }
    }
  }
  return mostPopularProducts
}