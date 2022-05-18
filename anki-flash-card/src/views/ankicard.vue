<template>
    <v-card
      class="card"
    >
      <v-card-text>
        <div>Card Deck 1</div>
        <p class="text-h4 text--primary">
          {{question}}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
          @click="reveal = true"
        >
          See answer
        </v-btn>
        <v-btn class="difficulty" id="easy" @click="difficulty = 'easy'" large>easy</v-btn>
        <v-btn class="difficulty" id="medium" @click="difficulty = 'medium'" large>medium</v-btn>
        <v-btn class="difficulty" id="hard" @click="difficulty = 'hard'" large>hard</v-btn>
        <v-btn class="difficulty" id="next"large >next</v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="v-card--reveal"
        >
          <v-card-text class="pb-0">
            <p class="text-h4 text--primary">
              Answer
            </p>
            <div>
              <h3>{{answer}}</h3>
            </div>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = false"
            >
              Close
            </v-btn>
            <v-btn class="difficulty" id="easy" @click="difficulty = 'easy'" large>easy</v-btn>
            <v-btn class="difficulty" id="medium" @click="difficulty = 'medium'" large>medium</v-btn>
            <v-btn class="difficulty" id="hard" @click="difficulty = 'hard'" large >hard</v-btn>
            <v-btn class="difficulty" id="next" large>next</v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "anki-card",
  data() {
    return {
      question:"What's Newton's first Law?",
      answer:"Newton's first law of motion is often stated as. An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. Newton's first law of motion is often stated as. An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. Newton's first law of motion is often stated as. An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
      difficulty: 'difficult',
      reveal: false,
    };
  },
});

</script>

<style scoped>
.card {
  width: 500px;
  margin: auto;
}

.v-card--reveal {
  top: 0;
  opacity: 1;
  position: absolute;
  width: 100%;
}

#easy:hover {
  background-color:lightgreen;
}

#medium:hover {
  background-color: lightyellow;
}

#hard:hover {
  background-color:lightpink;
}

#next:hover {
  background-color: lightcyan;
}

.difficulty {
  width: 10px;
  height: auto;
  display: inline-block;
  margin: auto;
}
</style>
