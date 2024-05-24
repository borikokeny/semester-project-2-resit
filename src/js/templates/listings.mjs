export function listingTemplate(postData) {
  
  const listing = document.createElement("a");
  listing.classList.add('listings', 'col', 'shadow-sm', 'mb-5');
  listing.href = `../listing/?id=${postData.id}`;
  listing.style.textDecoration = 'none';


  const listingCard = document.createElement('div');
  listingCard.classList.add('card');
  listing.append(listingCard)

  const img = document.createElement('img');
  img.classList.add('img', 'bd-placeholder-img', 'card-img-top', 'mb-4');
  img.style.width = '100%';
  img.style.height = '15rem';
  img.style.objectFit = 'cover';
  img.src = postData.media[0] ?? `/images/img-placeholder.png`;
  img.alt = postData.title; 

  const listingBody = document.createElement('div');
  listingBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-text');
  title.innerText = postData.title;
  
  const bid = document.createElement('p');
  bid.innerText = postData._count.bids;
  bid.textContent = `Current BID: ${bid.innerText}`;

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', 'mb-3');
  button.innerText = 'BID';

  listingCard.append(img, listingBody);
  listingBody.append(title, bid, button);

  return listing;
}


export function renderListingTemplates(postDataList, parent) {
  parent.append(...postDataList.map(listingTemplate))

  //ez a kod rakja ki a listings/index.html oldalra a listingeket
}
