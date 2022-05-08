import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

export interface ICommonProps {
  something?: string;
}

const commonState = atom<ICommonProps>({
  key: "commonState",
  default: {
    something: undefined,
  },
  effects_UNSTABLE: [],
});

export default commonState;
