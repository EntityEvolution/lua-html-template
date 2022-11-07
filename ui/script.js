window.addEventListener('load', () => {
  window.addEventListener('message', messageHandler);
});

const messageHandler = (e) => {
  const { data } = e;
  console.log(data.action);
  switch (data.action) {
    case 'show':
      console.log("Showing")
      break;
  }
};