exports.handler = function (event, context, callback) {
  const secretContent = `
    <h3> cxereglegchiin tusgai xuudsand tawtai moril</h3>
    <p> zowxon bvrtgelttei xereglegchid <strong>zoriulaw</strong></p>
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
