import c1 from "@/assets/data/ranks/ranks_1.json";
import c2 from "@/assets/data/ranks/ranks_2.json";
import c3 from "@/assets/data/ranks/ranks_3.json";
import c4 from "@/assets/data/ranks/ranks_4.json";
import c5 from "@/assets/data/ranks/ranks_5.json";

const contest = [
  {
    contest: "Contest 1",
    ranks: c1,
  },
  {
    contest: "Contest 2",
    ranks: c2,
  },
  {
    contest: "Contest 3",
    ranks: c3,
  },
  {
    contest: "Contest 4",
    ranks: c4,
  },
  {
    contest: "Contest 5",
    ranks: c5,
  },
];

export default contest.reverse();
