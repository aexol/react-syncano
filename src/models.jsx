// Define your syncano models here for admin purposes
// [{
//   name: 'text',
//   display: 'name',
//   fields: [
//     {
//       name: 'name',
//       type: 'text'
//     },
//     {
//       name: 'content',
//       type: 'textarea'
//     }
//   ]
// }]
const models = [
  {
    name: 'region',
    display: 'id',
    fields: [
      {
        name:'min_lat',
        type:'text'
      },
      {
        name:'min_lng',
        type:'text'
      },
      {
        name:'max_lat',
        type:'text'
      },
      {
        name:'max_lng',
        type:'text'
      }
    ]
  },
  {
    name: 'propertytype',
    display: 'name',
    fields: [
      {
        name:'name',
        type:'text'
      },
      {
        name:'icon',
        type:'file'
      },
    ]
  },
  {
    name:'services',
    display:'title',
    fields:[
      {
        name:'title',
        type:'text'
      },
      {
        name:'www',
        type:'text'
      },
      {
        name:'email',
        type:'text'
      },
      {
        name:'region',
        type:'reference',
        target:'region'
      },
      {
        name:'tel',
        type:'text'
      },
      {
        name:'property_types',
        type:'text'
      },
      {
        name:'status',
        type:'text'
      },
      {
        name:'location_search',
        type:'text'
      },
      {
        name:'property_relations',
        type:'relation',
        target:'propertytype'
      },
      {
        name:'slider_image',
        type:'file'
      },
      {
        name:'locations',
        type:'select'
      },
      {
        name:'post_tag',
        type:'select'
      },
      {
        name:'geo_location',
        type:'geo'
      },

    ]
  }
]
export default models
