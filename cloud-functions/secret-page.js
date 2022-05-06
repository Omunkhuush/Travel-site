exports.handler = function (event, context, callback) {
  const secretContent = `
    <h3> Хэрэглэгчийн тусгай хэсэг</h3>
    <p> Зөвхөн бүртгэлтэй хэрэглэчидэд <strong>зориулсан контент</strong></p>
    `;
  let body;
  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }
  if (body.password == "JavaScript") {
    callback(null, {
      statusCode: 200,
      body: secretContent,
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
