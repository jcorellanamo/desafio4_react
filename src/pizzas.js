const pizzas = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
      id: 2,
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    },
    {
      id: 4,
      name: "Margherita",
      price: 5500,
      ingredients: ["mozzarella", "tomates frescos", "albahaca", "aceite de oliva"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-margherita.jpg?alt=media&token=7b3b2a5e-d88a-4a94-bdf4-904aed87c71c"
    },
    {
      id: 5,
      name: "Cuatro Quesos",
      price: 7500,
      ingredients: ["mozzarella", "queso azul", "parmesano", "gorgonzola"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-cuatro-quesos.jpg?alt=media&token=3b4c5b56-3c5c-4e67-b8df-9b7314a7f71b"
    },
    {
      id: 6,
      name: "Hawaiana",
      price: 6200,
      ingredients: ["mozzarella", "piña", "jamón", "orégano"],
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-hawaiana.jpg?alt=media&token=f3a6b5da-0d6b-4edc-91ba-e8a0a6f5a3a4"
    }
  ];
  
  // Array de pizzas en el carrito de compras
  const pizzaCart = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      quantity: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 6950,
      quantity: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    }
  ];
  
  export { pizzas, pizzaCart };
  