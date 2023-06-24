import { sendUpdateCard } from "@/api/cards";

export function commitColumnCardChanges(column: Column, cards: Card[]): void {
  if (!cards?.length) return;

  cards.map((card, idx) => {
    let changed = false;

    if (card.position != idx) {
      card.position = idx;
      changed = true;
    }

    if (card.columnId != column.id) {
      card.columnId = column.id;
      changed = true;
    }

    if (changed) sendUpdateCard(card);
  });
}
