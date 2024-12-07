import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private list: any = [
    {
      id: 1,
      name: 'Fresh Produce',
      image: 'assets/images/freshproduce.png',
      subcategories: [
        {
          id: 1,
          name: 'Fruits',
          image: 'assets/images/fruits.png',
          products: [
            {
              id: 1,
              name: 'PrimeMart Fuji Apple Big | 10pcs ',
              image: 'assets/images/fujiapple.png',
              price: '182.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Dizon Cavendish Banana | 1100g-1300g',
              image: 'assets/images/cavendishbanana.png',
              price: '128.70',
              quantity: 1,
            },
            {
              id: 3,
              name: 'Choice Harvest Orange | 10 pcs',
              image: 'assets/images/orange.png',
              price: '295.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Vegetable',
          image: 'assets/images/vegetables.png',
          products: [
            {
              id: 1,
              name: 'PrimeMart Carrots | 450g-500g',
              image: 'assets/images/carrots.png',
              price: '68.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Global Eggplant | 500g-600g',
              image: 'assets/images/eggplant.png',
              price: '153.00',
              quantity: 1,
            },
            {
              id: 3,
              name: 'PrimeMart Cabbage | 600g-700g',
              image: 'assets/images/cabbage.png',
              price: '64.40',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Dairy',
      image: 'assets/images/dairy.png',
      subcategories: [
        {
          id: 1,
          name: 'Milk',
          image: 'assets/images/milk.png',
          products: [
            {
              id: 1,
              name: 'Bear Brand with Iron | 2.4kg',
              image: 'assets/images/bearbrandwithiron.png',
              price: '829.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Arla Low Fat Milk | 1L',
              image: 'assets/images/arlalowfatmilk.png',
              price: '107.50',
              quantity: 1,
            },
            {
              id: 3,
              name: 'Anchor Family Milk | 655g ',
              image: 'assets/images/anchorfamilymilk.png',
              price: '269.50',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Cheese',
          image: 'assets/images/cheese.png',
          products: [
            {
              id: 1,
              name: 'Eden Filled Cheese | 160g',
              image: 'assets/images/edenfilledcheese.png',
              price: '56.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Magnolia Cheezee | 900g',
              image: 'assets/images/magnoliacheezee.png',
              price: '296.00',
              quantity: 1,
            },
            {
              id: 3,
              name: 'Magnolia Quickmelt | 1900g',
              image: 'assets/images/magnoliaquickmelt.png',
              price: '725.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Butter',
          image: 'assets/images/butter.png',
          products: [
            {
              id: 1,
              name: 'Dari Creme Buttermilk Salted | 200g',
              image: 'assets/images/daricremebuttermilksalted.png',
              price: '93.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Magnolia Buttercup | 200g',
              image: 'assets/images/magnoliabuttercup.png',
              price: '20',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Baked Goods',
      image: 'assets/images/bakedgoods.png',
      subcategories: [
        {
          id: 1,
          name: 'Loaf Bread',
          image: 'assets/images/loafbread.png',
          products: [
            {
              id: 1,
              name: 'Gardenia Classic White Bread Regular Slice | 600g',
              image: 'assets/images/gardeniaclassicwhitebreadregularslice.png',
              price: '80.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Gardenia Neubake White Bread | 450g',
              image: 'assets/images/gardenianeubakewhitebread.png',
              price: '54.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Biscuit',
          image: 'assets/images/biscuit.png',
          products: [
            {
              id: 1,
              name: 'Nissin Butter Coconut | 28g 10pcs',
              image: 'assets/images/nissinbuttercoconut.png',
              price: '66.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Nissin Bread Stix | 130g',
              image: 'assets/images/nissinbreadstix.png',
              price: '37.95',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Meat',
      image: 'assets/images/meat.png',
      subcategories: [
        {
          id: 1,
          name: 'Chicken',
          image: 'assets/images/chicken.png',
          products: [
            {
              id: 1,
              name: 'PrimeMart Chicken Drumstick | 500g-550g',
              image: 'assets/images/chickendrumstick.png',
              price: '124.30',
              quantity: 1,
            },
            {
              id: 2,
              name: 'PrimeMart Chicken Thighs | 500g-550g',
              image: 'assets/images/chickenthighs.png',
              price: '114.95',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Pork',
          image: 'assets/images/pork.png',
          products: [
            {
              id: 1,
              name: 'PrimeMart Pork Chop | 500g-550g',
              image: 'assets/images/porkchop.png',
              price: '174.90',
              quantity: 1,
            },
            {
              id: 2,
              name: 'PrimeMart Menudo Cut | 500g-550g',
              image: 'assets/images/menudocut.png',
              price: '178.75',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Beef',
          image: 'assets/images/beef.png',
          products: [
            {
              id: 1,
              name: 'Farm Fresh Ground Beef | 500g-550g',
              image: 'assets/images/groundbeef.png',
              price: '186.45',
              quantity: 1,
            },
            {
              id: 2,
              name: 'PrimeMart Beef Shank Whole | 1000g-5000g',
              image: 'assets/images/beefshankwhole.png',
              price: '1835.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Processed Meat',
          image: 'assets/images/processedmeat.png',
          products: [
            {
              id: 1,
              name: 'PureFoods Honeycured Bacon Roll | 500g',
              image: 'assets/images/honeycuredbaconroll.png',
              price: '393.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Sunpride Honeycured Bacon | 400g',
              image: 'assets/images/sunpridehoneycuredbacon.png',
              price: '303.00',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Fish & Seafood',
      image: 'assets/images/fishandseafood.png',
      subcategories: [
        {
          id: 1,
          name: 'Fish',
          image: 'assets/images/fish.png',
          products: [
            {
              id: 1,
              name: 'Seaking Unseasoned Pangasius Fish Fillet | 500g',
              image: 'assets/images/pangasiusfishfillet.png',
              price: '274.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Hamachi Yellow Tail Fish Whole | 500g',
              image: 'assets/images/yellowtailfishwhole.png',
              price: '99.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Shrimp',
          image: 'assets/images/shrimp.png',
          products: [
            {
              id: 1,
              name: 'CB Shrimp | 450g-500g',
              image: 'assets/images/shrimpproduct.png',
              price: '249.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'DSR Shrimp Medium | 500g-550g',
              image: 'assets/images/shrimpproduct.png',
              price: '274.45',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Mussels',
          image: 'assets/images/mussels.png',
          products: [
            {
              id: 1,
              name: 'Pacific Bay Mussels | 500g',
              image: 'assets/images/pacificbaymussels.png',
              price: '199.00',
              quantity: 1,
            },
            {
              id: 2,
              name: "Ocean's Harvest Mussels Half Shell | 500g",
              price: '158.00',
              image: 'assets/images/musselshalfshell.png',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: 'Canned Goods',
      image: 'assets/images/cannedgoods.png',
      subcategories: [
        {
          id: 1,
          name: 'Fish',
          image: 'assets/images/cannedfish.png',
          products: [
            {
              id: 1,
              name: 'Ligo Sardines in Tomato Sauce | 155g',
              image: 'assets/images/ligosardinesintomatosauce.png',
              price: '23.75',
              quantity: 1,
            },
            {
              id: 2,
              name: "Young's Town Sardines in Tomato Sauce | 155g",
              image: 'assets/images/youngstownsardinesintomatosauce.png',
              price: '23.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Soup',
          image: 'assets/images/cannedsoup.png',
          products: [
            {
              id: 1,
              name: 'Campbells Cream of Mushroom | 298g',
              image: 'assets/images/campbellscreamofmushroom.png',
              price: '94.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Campbells Chicken Noodle Soup | 305g',
              image: 'assets/images/campbellschickennoodlesoup.png',
              price: '94.50',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Vegetable',
          image: 'assets/images/cannedvegetable.png',
          products: [
            {
              id: 1,
              name: 'Jolly Mushroom Pieces and Stems | 400g',
              image: 'assets/images/jollymushroompiecesandstems.png',
              price: '59.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Jolly Whole Corn Kernels | 425g',
              image: 'assets/images/jollywholecornkernels.png',
              price: '42.50',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'Condiments & Spices',
      image: 'assets/images/condimentsandspices.png',
      subcategories: [
        {
          id: 1,
          name: 'Condiments',
          image: 'assets/images/condiments.png',
          products: [
            {
              id: 1,
              name: 'DATU PUTI SOY SAUCE | 385ML ',
              image: 'assets/images/datuputisoysauce.png',
              price: '22.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'DATU PUTI PATIS | 1L',
              image: 'assets/images/datuputipatis.png',
              price: '78.50',
              quantity: 1,
            },
            {
              id: 3,
              name: 'UFC BANANA CATSUP | 550G',
              image: 'assets/images/ufcbananacatsup.png',
              price: '45.50',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Spices',
          image: 'assets/images/spices.png',
          products: [
            {
              id: 1,
              name: 'McCormick Turmeric Ground | 30g',
              image: 'assets/images/mccormickturmericground.png',
              price: '73.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'McCormick Ground Black Pepper | 35g',
              image: 'assets/images/mccormickgroundblackpepper.png',
              price: '88.50',
              quantity: 1,
            },
            {
              id: 3,
              name: 'McCormick Garlic Powder | 35g',
              image: 'assets/images/mccormickgarlicpowder.png',
              price: '79.50',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: 'Snacks',
      image: 'assets/images/snacks.png',
      subcategories: [
        {
          id: 1,
          name: 'Potato Chips',
          image: 'assets/images/potatochips.png',
        },
        { id: 2, name: 'Candies', image: 'assets/images/candies.png' },
        {
          id: 3,
          name: 'Chocolate',
          image: 'assets/images/chocolate.png',
        },
      ],
    },
    {
      id: 9,
      name: 'Beverages',
      image: 'assets/images/beverages.png',
      subcategories: [
        {
          id: 1,
          name: 'Juice',
          image: 'assets/images/juice.png',
          products: [
            {
              id: 1,
              name: 'Minute Maid Juice Drink Fresh Orange | 1L',
              price: '53.77',
              quantity: 1,
            },
            {
              id: 2,
              name: 'C2 Green Tea Apple | 1L',
              price: '56.50',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Softdrinks',
          image: 'assets/images/foftdrinks.png',
          products: [
            {
              id: 1,
              name: 'Coca-Cola Coke | 1.5L PET',
              price: '61.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Coca-Cola Coke Zero | 1.5L',
              price: '61.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Alcohol',
          image: 'assets/images/alcohol.png',
          products: [
            {
              id: 1,
              name: 'Good Day Korean Apple Soju | 360mL ',
              price: '109.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'So Nice Green Grape Soju | 360mL',
              price: '70.00',
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: 'Pasta, Rice & Cereal',
      image: 'assets/images/pastariceandcereal.png',
      subcategories: [
        {
          id: 1,
          name: 'Pasta',
          image: 'assets/images/pasta.png',
          products: [
            {
              id: 1,
              name: 'Del Monte Spaghetti | 900g',
              price: '113.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Royal Spaghetti | 900g',
              price: '105.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 2,
          name: 'Rice',
          image: 'assets/images/rice.png',
          products: [
            {
              id: 1,
              name: 'Farmboy Rice Sinandomeng | 5kg',
              price: '368.00',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Farmboy Rice Thai Jasmine | 10kg',
              price: '795.00',
              quantity: 1,
            },
          ],
        },
        {
          id: 3,
          name: 'Cereal',
          image: 'cereal.png',
          products: [
            {
              id: 1,
              name: "Koko Krunch Kid's Cereal | 500g",
              price: '239.50',
              quantity: 1,
            },
            {
              id: 2,
              name: 'Nestle Corn Flakes Cereal | 500g',
              price: '206.50',
              quantity: 1,
            },
          ],
        },
      ],
    },
    { id: 11, name: 'Baking', image: 'assets/images/baking.png' },
    {
      id: 12,
      name: 'Frozen',
      image: 'assets/images/frozen.png',
      subcategories: [
        {
          id: 1,
          name: 'Ice Cream',
          image: 'assets/images/icecream.png',
        },
        {
          id: 2,
          name: 'Vegetable',
          image: 'assets/images/frozenvegetable.png',
        },
        { id: 3, name: 'Meat', image: 'assets/images/frozenmeat.png' },
      ],
    },
    {
      id: 13,
      name: 'Personal Care',
      image: 'assets/images/personalcare.png',
      subcategories: [
        { id: 1, name: 'Shampoo', image: 'assets/images/shampoo.png' },
        {
          id: 2,
          name: 'Body Wash',
          image: 'assets/images/bodywash.png',
        },
        {
          id: 3,
          name: 'Skin Care',
          image: 'assets/images/skincare.png',
        },
      ],
    },
    { id: 14, name: 'Health Care', image: 'assets/images/healthcare.png' },
    {
      id: 15,
      name: 'Household & Cleaning Supplies',
      image: 'assets/images/householdandcleaningsupplies.png',
      subcategories: [
        {
          id: 1,
          name: 'Laundry Detergent',
          image: 'assets/images/laundrydetergent.png',
        },
        {
          id: 2,
          name: 'Dishwashing Liquid',
          image: 'assets/images/dishwashingliquid.png',
        },
        {
          id: 3,
          name: 'Paper Towels',
          image: 'assets/images/papertowels.png',
        },
      ],
    },
    {
      id: 16,
      name: 'Baby Items',
      image: 'assets/images/babyitems.png',
      subcategories: [
        {
          id: 1,
          name: 'Baby Food',
          image: 'assets/images/babyfood.png',
        },
        { id: 2, name: 'Diaper', image: 'assets/images/diaper.png' },
        { id: 3, name: 'Lotion', image: 'assets/images/lotion.png' },
      ],
    },
    {
      id: 17,
      name: 'Pet Care',
      image: 'assets/images/petcare.png',
      subcategories: [
        { id: 1, name: 'Food', image: 'petfood.png' },
        { id: 2, name: 'Treat', image: 'pettreat.png' },
        {
          id: 3,
          name: 'Chew Toys',
          image: 'chewtoys.png',
        },
      ],
    },
  ];

  public get getList() {
    return this.list;
  }

  constructor() {}
}
