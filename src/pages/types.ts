interface Icardcomponentprops{
    title: string;
    description: string;
    image: string;
    price: number;
}

interface IsectionHeader{
    name: String;
    title: String;
    description: String
}

interface ItestimonyCard{
    title: string;
    description: string;
    name: string;
    occupation: string;
    imageurl: string;
}

interface IpreOrderCard{
    imageurl: string;
    name: string;
    price: string;
}

interface IcardDetails{
    name: string;
    title: string;
    description: string;
    btnName: string;
    reused?: boolean;
}