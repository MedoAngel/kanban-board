interface Board {
  id?: Id;
  name: string;
}

interface Column {
  id?: Id;
  name: string;
}

interface Card {
  id?: Id;
  title: string;
  content: string;
  status: string;
}
