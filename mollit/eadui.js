// Assuming `pulse` is an instance of some data stream processing class

// Create a new fork of the pulse, starting with no initial data source
const out = pulse.fork(pulse.NO_SOURCE);

// Now `out` is an independent stream that can be manipulated separately
out.on('data', (data) => {
  console.log('Received data:', data);
});

// Continue processing...
