function bidderTemplate(bids) {
  const table = document.createElement("div");
  table.classList.add("row", "border-bottom", "me-0");

  const name = document.createElement("h6");
  name.classList.add("col", "mt-3");
  name.innerText = bids.bidderName;

  const amount = document.createElement("p");
  amount.classList.add("col", "mt-3");
  amount.textContent = `${bids.amount} BIDS`;

  const created = document.createElement("p");
  created.classList.add("col", "mt-3");
  created.innerText = bids.created.slice(0, -14);

  table.append(name, amount, created);

  return table;
}

export function renderBidderTemplate(bids, parent) {
  parent.innerHTML = "";
  parent.append(...bids.map(bidderTemplate));
}