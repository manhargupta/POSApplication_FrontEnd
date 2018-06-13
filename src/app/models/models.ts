export interface IProducts{
  id:number,
  name:string,
  pcode:string,
  price:number,
  stock:number,
  description:string
}

export interface IEmployee{
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  mobile:number,
  cashDrawerId:number,
  token:string
}


export interface ICustomer{
  id:number,
  firstName:string,
  lastName:string,
  email:string,
  mobile:number,
}




export interface ICartItems{
  id:number,
  product:IProducts,
  quantity:number,
}

export interface ICart{
  id:number,
  cartItems:ICartItems[]
}
export interface ICartDto{
  response:ICart,
  status:boolean
}




export interface IOrder{
  orderId:string,
  orderDate:Date,
  orderStatus:string,
  paymenttype:string,
}

export interface IOrder{
  totalAmount:number
  order:IOrder
}


export interface ICashDrawer{
  id:number
  date:Date,
  startBal:number
  endBal:number
}








