interface Board {
  id: Id;
  name: string;
  newColumn: Column;
}

interface Column {
  id: Id;
  name: string;
  boardId: Id;
}

interface Card {
  id: Id;
  title: string;
  content: string;
  boardId: Id;
  columnId: Id;
  position: number;
}
