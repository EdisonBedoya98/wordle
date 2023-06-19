export interface WordsData {
  words: string[];
}
export interface BoxProps {
  word: string;
  color?: ColorBox;
  textColor?: "white" | "black";
  onClick?: (word: string) => void;
}
export interface LetterBox {
  letter: string;
  color?: ColorBox;
}
export interface WordsState {
  dictionary: string[];
  currentRandomWordFromDictionary: string | null;
  lettersDashboard: LetterBox[];
  currentWordAddingToDashboard: string;
  isGameOver: boolean;
  numberOfVictories: number;
  numberOfMatches: number;
  currentIndexDashboard: number;
  loading: boolean;
  error: null | unknown;
  showHowToPlayModal: boolean;
  showStatisticsModal: boolean;
  showRandomWordToPlayer: boolean;
  timeOfLastUpdate: string;
  alreadyAskedWords: string[];
}
export type ColorBox = "green" | "yellow" | "gray" | "default";
