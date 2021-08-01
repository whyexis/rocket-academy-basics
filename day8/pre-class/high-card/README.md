# High Card

## Shuffle Deck Code

```js
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];

    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);

    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];

    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;

    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};
```

## Shuffling Cards Function Explanation

Let's assume that the `randomIndex` generated will be 1 and we are working with a deck of 5 cards.

```js
var cardDeck = ["A♦", "2♦", "3♦", "4♦", "5♦"];
```

<table style="width: 100%">
<colgroup>
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tbody>
<thead>
<tr>
<td>Code</td>
<td style="text-align: center;">currentIndex</td>
<td style="text-align: center;">currentCard</td>
<td style="text-align: center;">randomIndex</td>
<td style="text-align: center;">randomCard</td>
<td style="text-align: center;">cardDeck</td>
</tr>
</thead>
<tr class="odd">
<td><code>var currentIndex = 0;</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">["A♦", "2♦", "3♦", "4♦", "5♦"]</td>
</tr>
<tr class="even">
<td><code>var currentCard = cardDeck[currentIndex];</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">"A♦"</td>
<td style="text-align: center;"></td>
<td style="text-align: center;"></td>
<td style="text-align: center;">["A♦", "2♦", "3♦", "4♦", "5♦"]</td>
</tr>
<tr class="odd">
<td><code>var randomIndex = getRandomIndex(cardDeck.length);</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">"A♦"</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;"></td>
<td style="text-align: center;">["A♦", "2♦", "3♦", "4♦", "5♦"]</td>
</tr>
<tr class="even">
<td><code>var randomCard = cardDeck[randomIndex];</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">"A♦"</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">"2♦"</td>
<td style="text-align: center;">["A♦", "2♦", "3♦", "4♦", "5♦"]</td>
</tr>
<tr class="odd">
<td><code>cardDeck[currentIndex] = randomCard;</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">"A♦"</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">"2♦"</td>
<td style="text-align: center;">["2♦", "2♦", "3♦", "4♦", "5♦"]</td>
</tr>
<tr class="even">
<td><code>cardDeck[randomIndex] = currentCard;</code></td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">"A♦"</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">"2♦"</td>
<td style="text-align: center;">["2♦", "A♦", "3♦", "A♦", "5♦"]</td>
</tr>
</tbody>
</table>

The variables `currentCard` and `randomCard` act as temporary holders for the cards in the deck, otherwise when you reassign the card in the deck, you will lose one of the cards.

## Food for Thought

1. At the next run of the loop, `currentIndex = 1`, what happens if `randomIndex = 0`?
1. What happens if `currentIndex` and `randomIndex` are the same value?
1. Instead of having two holders `currentCard` and `randomCard`, is it possible to have only one variable?
