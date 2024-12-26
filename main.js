function rolldice() {
  const numofDice = document.getElementById(`numofDice`).value;
  const diceResult = document.getElementById(`diceResult`);
  const diceImages = document.getElementById(`diceImages`);
  const values = [];
  const images = [];
  const diceImageUrls = [
    `<img src="https://i.pinimg.com/736x/18/f2/ba/18f2ba6f5bcfd28a952d00c2b29fc6a8.jpg" >`, // dice 1
    `<img src="https://i.pinimg.com/736x/7c/63/88/7c63881c6b057dfa4094bba1d8f03366.jpg"> `, // dice 2
    `<img src="https://i.pinimg.com/736x/f6/7d/8f/f67d8f06857e842127488923c289b318.jpg"> `, // dice 4
    `<img src="https://i.pinimg.com/736x/61/de/5b/61de5b2ae959aacaeb127ec0c69de52b.jpg"> `, // dice 3
    `<img src="https://i.pinimg.com/736x/7e/f8/ae/7ef8ae1e5d54422f12f38e382d5dc8ca.jpg"> `, // dice 5
    `<img src="https://i.pinimg.com/736x/ca/eb/78/caeb78662afa375983dc65078f0f3083.jpg"> `, // dice 6
  ];

  for (let i = 0; i < numofDice; i++) {
    const value = Math.round(Math.random() * 6) + 1;
    values.push(value);
    console.log(values);
    images.push(diceImageUrls[value - 1]);
  }
  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join(``);
}
