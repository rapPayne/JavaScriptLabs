const getBrowserInfo = (cssClass="") => {
  let html = `<ul class="${cssClass}">`;
  for (let prop in navigator) {
    try {
      html += `<li>${prop}=${navigator[prop]}</li>`;
    }
    catch (e) {
      console.error(e);
    }
  }
  html += `</ul>`;
  return html;
};
export default getBrowserInfo;