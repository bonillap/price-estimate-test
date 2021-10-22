const data = [
    {
      icon: 'assets/icons/clean.png', 
      name: 'Bathroom', 
      title: 'Bathroom Renovation ',
      category_name: 'Quality',
      unique: false,
      measure: {name : 'Meters', short_name: 'm²'}, 
      items: [
        {
          description: 'Toilet, bath, faucets, furnishings and mirrors, and electric odor extractor', 
          category: {
            medium: {
              label: 'Medium',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 1000, step: 6},
                {from_quantity:6, price: 100, step: 1}
              ]
            }, 
            high: {
              label: 'High',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 2000, step: 6},
                {from_quantity:6, price: 200, step: 1}
              ]
            }
          },
          selected: 'medium'
        },
        {
          description: 'Instalation, plumbing, electrical wiring and veneer', 
          category: {
            medium: {
              label: 'Medium',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 500, step: 6},
                {from_quantity:6, price: 50, step: 1}
              ]
            }, 
            high: {
              label: 'High',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 1000, step: 6},
                {from_quantity:6, price: 100, step: 1}
              ]
            }
          },
          selected: 'medium'
        }
      ]
    },
    {
      icon: 'assets/icons/kitchen.png', 
      name: 'Kitchen', 
      title: 'Kitchen Design',
      category_name: 'Quality',
      unique: false,
      measure: {name : 'Meters', short_name: 'm²'}, 
      items: [
        {
          description: 'Furniture from bottom to top', 
          category: {
            medium: {
              label: 'Medium',
              price_ranges: [
                { price: 120, step: 1}
              ]
            }, 
            high: {
              label: 'High',
              price_ranges: [
                { price: 210, step: 1}
              ]
            }
          },
          selected: 'medium'
        },
        {
          description: 'Installations, plumbing and complete electrical wiring', 
          category: {
            medium: {
              label: 'Medium',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 1230, step: 6},
                {from_quantity:6, price: 200, step: 1}
              ]
            }, 
            high: {
              label: 'High',
              price_ranges: [
                {from_quantity:0, to_quantity: 6, price: 1230, step: 6},
                {from_quantity:6, price: 200, step: 1}
              ]
            }
          },
          selected: 'medium'
        }
      ]
    },
    {
      icon: 'assets/icons/heater.png', 
      name: 'Heater', 
      title: 'Heater',
      category_name: 'Rank',
      unique: true,
      measure: {name : 'Unidad', short_name: 'und'},
      items: [
        {
          description: 'Heating circuit, radiators and boiler', 
          category: {
            one_room: {
              label: 'One room',
              price_ranges: [
                {price: 1230}
              ]
            }, 
            full_house: {
              label: 'Full house',
              price_ranges: [
                {price: 1890}
              ]
            }
          },
          selected: 'full_house'
        }
      ]
    },
  ];

 

  export { data }