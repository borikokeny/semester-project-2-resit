function bidderTemplate(bids) {
  const table = document.createElement("div");
  table.classList.add("row", "border-bottom", "me-0");

  const name = document.createElement("h6");
  name.classList.add("col", "mt-3");
  name.innerText = bids.bidder?.name || "Unknown bidder";

  const amount = document.createElement("p");
  amount.classList.add("col", "mt-3");
  amount.textContent = `${bids.amount} BIDS`;

  const created = document.createElement("p");
  created.classList.add("col", "mt-3");
  created.innerText = bids.created
    ? new Date(bids.created).toLocaleDateString()
    : "";

  table.append(name, amount, created);

  return table;
}

export function renderBidderTemplate(bids, parent) {
  if (!parent) return;

  parent.innerHTML = "";

  if (bids?.length) {
    parent.append(...bids.map(bidderTemplate));
  }
}
