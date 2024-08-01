import { createSlice } from "@reduxjs/toolkit";

export interface portfolio {
  id: number;
  title: string;
  des: string;
  tags: string[];
  imgClass: string;
  action: boolean;
}
const initialState: { portfolio: portfolio[]; active: portfolio[] } = {
  portfolio: [
    {
      id: 1,
      title: "اول",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
    {
      id: 2,
      title: "2",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
    {
      id: 3,
      title: "3",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
    {
      id: 4,
      title: "4",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
  ],
  active: [
    {
      id: 1,
      title: "اول",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
    {
      id: 2,
      title: "2",
      des: "  یه چیزی ",
      tags: ["ye chi shi ", "dota chi"],
      imgClass: "hasdlfja",
      action: false,
    },
  ],
};
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    next1: () => {
      alert("hello");
    },
  },
});
export const { next1 } = portfolioSlice.actions;

export default portfolioSlice.reducer;
