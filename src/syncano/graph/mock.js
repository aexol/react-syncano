export const conf = {
  endpoints: [
    {
      id: 1,
      name: 'google-places',
      x: 10,
      y: 100,
      inputs: ['origin', 'destination', 'mode'],
      outputs: ['geocodings', 'text', 'value']
    },
    {
      id: 2,
      name: 'google-maps',
      x: 310,
      y: 90,
      inputs: ['origin', 'destination', 'mode'],
      outputs: ['geocodings', 'text', 'value']
    }
  ],
  connections: [
    {
      from: {
        endpoint: 1,
        output: 'text'
      },
      to: {
        endpoint: 2,
        input: 'origin'
      }
    }
  ]
}
