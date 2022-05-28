import Treeselect from "./treeselect.js";

const DOMelement = document.querySelector('.treeselect')
const options = [
{
  value: 1,
  name: '1',
  children: [
    {
      value: 2,
      name: '2',
      children: []
    }
  ]
},
{
  value: 3,
  name: '3',
  children: [
    {
      value: 4,
      name: '4',
      children: [
        {
          name: '5',
          value: 5,
          children: [
            {
              name: '6',
              value: 6,
              children: []
            },
            {
              name: '7',
              value: 7,
              children: []
            }
          ]
        }
      ]
    }
  ]
},
{
  value: 8,
  name: '8',
  children: [
    {
      value: 9,
      name: '9',
      children: [{
        value: 10,
        name: '10'
      }]
    },
    {
      value: 11,
      name: '11',
      children: [{
        value: 12,
        name: '12'
      }]
    }
  ]
},
]
new Treeselect({
  DOMelement,
  options,
  value: ['7', '9'],
  isGroupSelectable: false,
  openLevel: 5,
  emitOnInit: true
})
