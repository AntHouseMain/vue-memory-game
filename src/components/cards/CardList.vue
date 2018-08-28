<template lang="html">
<div>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout>
        <v-flex xs6>
          Time: {{ this.seconds }}
        </v-flex>
        <v-flex xs6>
          Moves: {{ this.clickCount }}
        </v-flex>
      </v-layout>
      <v-card>
        <v-container grid-list-lg>
          <v-layout row wrap>
            <v-flex class="card-item" v-for="card in randomCards" :key="card.id">
              <card-item :card="card" :mainColor="mainColor" @clickItem="onChooseItem"></card-item>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  <v-dialog v-model="successfulDialog" max-width="700px">
    <v-card>
      <v-card-title>
        Сongratulations!
      </v-card-title>
      <v-card-text green--text>
        You won! Your time is {{ this.seconds}} seconds!
      </v-card-text>
      <v-card-actions>
        <v-btn color="green" dark @click.stop="successfulDialog = false">ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import Card from './Card';
export default {
  components: {
    'card-item': Card
  },
  data() {
    return {
      clickCount: 0,
      selectedItems: [],
      mainColor: '#009688',
      timer: null,
      seconds: 0,
      secondsTimer: null,
      cards: [
        {
          bc: '#EF5350',
          id: 1
        },
        {
          bc: '#EF5350',
          id: 2
        },
        {
          bc: '#EC407A',
          id: 3
        },
        {
          bc: '#EC407A',
          id: 4
        },
        {
          bc: '#AB47BC',
          id: 5
        },
        {
          bc: '#AB47BC',
          id: 6
        },
        {
          bc: '#7E57C2',
          id: 7
        },
        {
          bc: '#7E57C2',
          id: 8
        },
        {
          bc: '#5C6BC0',
          id: 9
        },
        {
          bc: '#5C6BC0',
          id: 10
        },
        {
          bc: '#42A5F5',
          id: 11
        },
        {
          bc: '#42A5F5',
          id: 12
        },
        {
          bc: '#66BB6A',
          id: 13
        },
        {
          bc: '#66BB6A',
          id: 14
        },
        {
          bc: '#FFCA28',
          id: 15
        },
        {
          bc: '#FFCA28',
          id: 16
        },
        {
          bc: '#FF7043',
          id: 17
        },
        {
          bc: '#FF7043',
          id: 18
        },
        {
          bc: '#8D6E63',
          id: 19
        },
        {
          bc: '#8D6E63',
          id: 20
        },
        {
          bc: '#78909C',
          id: 21
        },
        {
          bc: '#78909C',
          id: 22
        },
        {
          bc: '#212121',
          id: 23
        },
        {
          bc: '#212121',
          id: 24
        },
        {
          bc: '#DDDDDD',
          id: 25
        }
      ],
      cardsLeft: 25,
      successfulDialog: false
    };
  },
  methods: {
    onChooseItem(item) {
      this.selectedItems.push(item);
      this.clickCount++;
      if (this.clickCount == 1) {
        this.onStartTimer();
      }
      if (this.selectedItems.length == 2) {
        if (this.isItemsMatch()) {
          this.hideItems();
        } else {
          this.isItemsNotMatch(item);
        }
      } else if (this.selectedItems.length > 2) {
        this.nextStep(item);
      }
    },
    isItemsMatch() {
      const [first, second] = this.selectedItems;
      return (
        first.style.backgroundColor == second.style.backgroundColor &&
        first != second
      );
    },
    isItemsNotMatch() {
      this.timer = setTimeout(() => {
        this.selectedItems.forEach(item => {
          item.style.backgroundColor = this.mainColor;
          this.selectedItems = [];
        });
      }, 500);
    },
    nextStep(item) {
      this.selectedItems = this.selectedItems.filter(val => {
        if (val.style.backgroundColor != item.style.backgroundColor) {
          val.style.backgroundColor = this.mainColor;
          return false;
        } else {
          return true;
        }
      });
    },

    hideItems() {
      this.selectedItems.forEach(val => {
        val.style.display = 'none';
      });
      this.cardsLeft -= 2;
      if (this.cardsLeft == 1) {
        clearInterval(this.secondsTimer);
        this.successfulDialog = true;
      }
    },
    onStartTimer() {
      this.secondsTimer = setInterval(() => {
        this.seconds++;
      }, 1000);
    }
  },
  computed: {
    randomCards() {
      for (
        let j, x, i = this.cards.length;
        i;
        j = parseInt(Math.random() * i),
          x = this.cards[--i],
          this.cards[i] = this.cards[j],
          this.cards[j] = x
      );
      return this.cards;
    }
  }
};
</script>

<style lang="css">
.container.grid-list-lg .layout .card-item{
  flex: 1 1 19%;
  padding-top: 19%;
  position: relative;
}
</style>
