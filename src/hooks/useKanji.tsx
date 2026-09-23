import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type KanjiDetails = {
  id: number;
  kanji_character: string;
  stroke_count: number;
  unicode: string;
  grade: string;
};

type KanjiContext = {
  kanjiArray: KanjiDetails[];
  setKanjiArray: React.Dispatch<React.SetStateAction<KanjiDetails[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const KanjiContext = createContext<KanjiContext | undefined>(undefined);

export const useKanji = () => {
  const kanjiContext = useContext(KanjiContext);

  if (!kanjiContext) {
    throw new Error("useKanji must be use inside a KanjiProvider");
  }
  return kanjiContext;
};

interface KanjiProviderProps {
  children: ReactNode;
}

export function KanjiProvider({ children }: KanjiProviderProps) {
  const [kanjiArray, setKanjiArray] = useState<KanjiDetails[]>([]);
  const [loading, setLoading] = useState(true);

  const kanjiCtx = {
    kanjiArray,
    setKanjiArray,
    loading,
    setLoading,
  };

  return (
    <KanjiContext.Provider value={kanjiCtx}>{children}</KanjiContext.Provider>
  );
}
