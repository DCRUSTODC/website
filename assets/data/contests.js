import c1 from "@/assets/data/ranks/ranks_1.json";
import c2 from "@/assets/data/ranks/ranks_2.json";
import c3 from "@/assets/data/ranks/ranks_3.json";
import c4 from "@/assets/data/ranks/ranks_4.json";

const contest = [
  {
    contest: "Weekly Contest 1",
    ranks: c1,
  },
  {
    contest: "Weekly Contest 2",
    ranks: c2,
  },
  {
    contest: "Weekly Contest 3",
    ranks: c3,
  },
  {
    contest: "Weekly Contest 4",
    ranks: c4,
  },
];

export default contest.reverse();
