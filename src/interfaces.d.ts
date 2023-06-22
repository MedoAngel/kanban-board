interface Board {
  name: string;
  columns: Column[];
}

interface Column {
  name: string;
  cards: Card[];
}

interface Card {
  id: string | number;
  title: string;
  content: string;
  status: string;
}
