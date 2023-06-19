import { createReducer } from "@reduxjs/toolkit";

import { fetchWordsData, setAWordRandomly } from "./words.actions";

interface WordsState {
  words: string[];
  currentWord: string | null;
  /*  selectedMonster: Monster | null;
  selectedMachineMonster: Monster | null;
  winner: MonsterWinner | null; */
}

const initialState: WordsState = {
  words: [],
  currentWord: null,
  /* selectedMonster: null,
  selectedMachineMonster: null,
  winner: null, */
};

export const wordsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchWordsData.pending, (state) => {
    console.log("Pending....");

    return {
      ...state,
      monsters: [],
    };
  });

  builder.addCase(fetchWordsData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchWordsData.fulfilled, (state, action) => {
    console.log("Fulfilled....");

    return {
      ...state,
      monsters: action.payload,
    };
  });

  builder.addCase(setAWordRandomly, (state) => {
    /*  if (state.selectedMonster === null)
      return { ...state, selectedMachineMonster: null };

    const avaibleMonsters = state.monsters.filter(
      (monters) => monters.id !== state.selectedMonster?.id
    );

    const randomIndex = Math.floor(Math.random() * avaibleMonsters.length);

    const randomMonster = avaibleMonsters[randomIndex];

    return {
      ...state,
      selectedMachineMonster: randomMonster,
    }; */
  });
});
