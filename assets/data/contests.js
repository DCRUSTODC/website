import c1 from "@/assets/data/ranks/ranks_1.json";
import c2 from "@/assets/data/ranks/ranks_2.json";
import c3 from "@/assets/data/ranks/ranks_3.json";
import c4 from "@/assets/data/ranks/ranks_4.json";
import c5 from "@/assets/data/ranks/ranks_5.json";
import c6 from "@/assets/data/ranks/ranks_6.json";

const contests = [
  {
    name: "Contest 1",
    ranks: c1,
  },
  {
    name: "Contest 2",
    ranks: c2,
  },
  {
    name: "Contest 3",
    ranks: c3,
  },
  {
    name: "Contest 4",
    ranks: c4,
  },
  {
    name: "Contest 5",
    ranks: c5,
  },
  {
    name: "Contest 6",
    ranks: c6,
  },
];

export default contests.reverse();
