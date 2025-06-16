import { create } from "zustand";

type Store = {
  imgUrl: string;
  isModal: boolean;
  width:number,
  setImgUrl: (url: string) => void;
  setIsModal: (value: boolean) => void;
  closeModal: () => void;
  setWidth:(value:number) => void;
};

export const GlobalStore = create<Store>()((set) => ({
  imgUrl: "",
  isModal: false,
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  setImgUrl: (url) => set(() => ({ imgUrl: url })),
  setIsModal: () => set((state) => ({ isModal:!state.isModal })),
  closeModal: () => set(() => ({isModal:false})),
  setWidth: (width) => set({ width }),
}));
