const MealApi = {
  meals: [
    {
        number: 1,
        name: "Seared Barramundi & Sushi Rice",
        time: 30,
        ingredients: [
            {
                name: "Skin -on Barramundi Fillets",
                quantity: "2",
            },
            {
                name: "Sushi Rice",
                quantity: "2 cups",
            },
            {
                name: "Garlic",
                quantity: "2 Cloves",
            },
            {
                name: "Scallions",
                quantity: "2",
            },
            {
                name: "Avocado",
                quantity: "1",
            },
            {
                name: "Lime",
                quantity: "1",
            },
            {
                name: "Broccoli",
                quantity: "1/2 lb",
            },
        ],
        recipie: [
            "",
        ],
        photo: ""
    },
  ],
  all: function() { return this.meals},
  get: function(id) {
    const isMeal = p => p.number === id
    return this.meals.find(isMeal)
  }
}

export default MealApi;
