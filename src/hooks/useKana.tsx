import { createContext, useContext, type ReactNode } from "react";
import * as kanaUtils from "../utils/kana";

export type Kana = {
  id: number;
  hiragana: string;
  katakana: string;
  romaji: string;
}[];

export const KanaContext = createContext<Kana | undefined>(undefined);

export const useKana = () => {
  const kanaContext = useContext(KanaContext);

  if (!kanaContext) {
    throw new Error("useKana must be use inside a KanaProvider");
  }
  return kanaContext;
};

interface KanaProviderProps {
  children: ReactNode;
}

export function KanaProvider({ children }: KanaProviderProps) {
  const kana = kanaUtils.KANA;

  return <KanaContext.Provider value={kana}>{children}</KanaContext.Provider>;
}
