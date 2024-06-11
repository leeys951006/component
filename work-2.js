function formatHTML() {
  let htmlData = {
    title: '이연승',
    h1: '내이름은',
    p: '이연승입니다',
  };
  let html = `
  <html>
  <head>
  <title>${htmlData.title}</title>
  </head>
  <body>
  <h1>${htmlData.h1}</h1>
  <p>${htmlData.p}</p>
  </body>
  </html>
  `;

  return html;
}

console.log(formatHTML());
