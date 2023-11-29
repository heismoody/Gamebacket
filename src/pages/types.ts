interface Icardcomponentprops {
  title: string;
  description: string;
  image: string;
  price: number;
}

interface IsectionHeader {
  name: String;
  title: String;
  description: String;
  reused?: boolean;
  url: string;
  cta?: boolean;
}

interface ItestimonyCard {
  title: string;
  description: string;
  name: string;
  occupation: string;
  imageurl: string;
}

interface IpreOrderCard {
  imageurl?: string;
  name?: string;
  actualprice?: number;
  promoprice?: number;
}

interface IcardDetails {
  name: string;
  title: string;
  description: string;
  btnName: string;
  gamenow?: boolean;
  preorder?: boolean;
  catalog?: boolean;
}

interface IcategoryCard {
  imageURL: string;
  categoryname: String;
}

interface Itrendcard {
  imageurl: string;
  name: string;
  promoprice?: number;
  actualprice: number;
}

interface Ilandcard {
  iconurl: string;
  title: string;
  description: string;
}

interface IteamMemberCard{
  image: string;
  name: string;
  role: string;
}

interface IquestionCard{
  question: string;
  description: string;
}

interface IaccessoryCard{
  image: string;
  name: string;
  tags: string;
}
