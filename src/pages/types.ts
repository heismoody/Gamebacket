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
}

interface ItestimonyCard {
  title: string;
  description: string;
  name: string;
  occupation: string;
  imageurl: string;
}

interface IpreOrderCard {
  imageurl: string;
  name: string;
  actualprice: string;
  promoprice?: string;
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
  promoprice?: string;
  actualprice: string;
}

interface Ilandcard {
  iconurl: string;
  title: string;
  description: string;
}
