let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
const constructOptions = (kButtonColors) => {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', () => {
      chrome.storage.sync.set({color: item}, () => {
        // eslint-disable-next-line no-console
        console.log('color is ' + item);
      });
    });
    page.appendChild(button);
  }
};
constructOptions(kButtonColors);
