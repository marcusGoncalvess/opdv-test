class FormatDataOfAPI {
  execute(responseAPI) {
    const categories = this.getCategories(responseAPI);

    return categories;
  }

  getCategories(responseAPI) {
    const categories = [];
    responseAPI.data.menu.forEach(menu => {
      const products = this.getProducts(menu.itens);

      const temporaryObject = {
        id: menu.code,
        name: menu.name,
        parentCategoryId: '4183',
        image: null,
        products,
      };

      categories.push(temporaryObject);
    });

    return categories;
  }

  getProducts(itens) {
    const products = [];
    itens.forEach(item => {
      const variations = this.getVariations(item.choices);

      const temporaryProducts = {
        sku: item.code,
        name: item.description,
        description: item.details,
        price: item.unitPrice,
        priceDelivery: item.unitPrice,
        image: null,
        variations,
      };

      products.push(temporaryProducts);
    });

    return products;
  }

  getVariations(choices) {
    const variations = [];

    choices.forEach(choice => {
      const options = this.getOptions(choice.garnishItens);

      const temporaryVariations = {
        id: choice.code,
        name: choice.name,
        min: choice.min,
        max: choice.max,
        options,
      };

      variations.push(temporaryVariations);
    });

    return variations;
  }

  getOptions(garnishItens) {
    const options = [];

    garnishItens.forEach(garnishItem => {
      const temporaryOption = {
        image: null,
        name: garnishItem.description,
        sku: garnishItem.code,
        description: garnishItem.details,
        price: garnishItem.unitPrice,
        priceDelivery: garnishItem.unitPrice,
      };

      options.push(temporaryOption);
    });

    return options;
  }
}

export default FormatDataOfAPI;
