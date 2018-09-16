export class ProductsService {

  public things = [{
    id: 0,
    name: 'Costume',
    sex: 'children',
    size: '62',
    color: ['white', 'black', 'blue'],
    url: 'src/img/c1.png',
    price: 50
  },
    {
      id: 1,
      name: 'Costume',
      sex: 'children',
      size: '62',
      color: ['blue'],
      url: 'src/img/c2.png',
      price: 10
    },
    {
      id: 2,
      name: 'Costume',
      sex: 'children',
      size: 62,
      color: ['pink'],
      url: 'src/img/c3.png',
      price: 50
    }, {
      id: 3,
      name: 'Cap',
      sex: 'children',
      size: '52',
      color: ['blue'],
      url: 'src/img/c4.png',
      price: 5
    }, {
      id: 4,
      name: 'Costume',
      sex: 'children',
      size: '52',
      color: ['white'],
      url: 'src/img/c5.png',
      price: 10
    }, {
      id: 5,
      name: 'Shoes',
      sex: 'men',
      size: '42',
      color: ['brown'],
      url: 'src/img/m1.png',
      price: 100
    }, {
      id: 6,
      name: 'T-shirt',
      sex: 'men',
      size: 'L',
      color: ['white'],
      url: 'src/img/m2.png',
      price: 10
    }, {
      id: 7,
      name: 'T-shirt',
      sex: 'men',
      size: 'L',
      color: ['white'],
      url: 'src/img/m3.png',
      price: 12
    }, {
      id: 8,
      name: 'Shoes',
      sex: 'men',
      size: '44',
      color: ['white', 'green'],
      url: 'src/img/m4.png',
      price: 70
    }, {
      id: 9,
      name: 'Shoes',
      sex: 'men',
      size: '48',
      color: ['white', 'blue'],
      url: 'src/img/m5.png',
      price: 70
    }, {
      id: 10,
      name: 'Jacket',
      sex: 'woman',
      size: '42',
      color: ['black'],
      url: 'src/img/w1.png',
      price: 70
    }, {
      id: 11,
      name: 'T-shirt',
      sex: 'woman',
      size: '42',
      color: ['pink'],
      url: 'src/img/w2.png',
      price: 20
    }, {
      id: 12,
      name: 'T-shirt',
      sex: 'woman',
      size: '44',
      color: ['pink'],
      url: 'src/img/w3.png',
      price: 15
    }, {
      id: 13,
      name: 'Shoes',
      sex: 'woman',
      size: '37',
      color: ['blue'],
      url: 'src/img/w4.png',
      price: 50
    }, {
      id: 14,
      name: 'T-shirt',
      sex: 'woman',
      size: '42',
      color: ['pink'],
      url: 'src/img/w5.png',
      price: 20
    },
  ];

  public products = [];

  constructor() {
    this.products = this.things.slice(0);
  }

  public get manProducts() {
    return this.products.filter(({sex}) => sex === 'men');
  }

  public get womanProducts() {
    return this.products.filter(({sex}) => sex === 'woman');
  }

  public get childrenProducts() {
    return this.products.filter(({sex}) => sex === 'children');
  }

  public selectedGroups = {
    woman: true,
    men: true,
    children: false
  };

}
