const getPositionFromPlayer = (e) => {
  let symbolHTML = e.target.firstChild;
  return +symbolHTML.getAttribute("data-box");
  
}

const PositionOnDOMboard = (e, symbol) => {
  e.target.firstChild.innerHTML = symbol;
}

export { getPositionFromPlayer, PositionOnDOMboard};