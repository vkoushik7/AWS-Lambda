export const handler = async (event, context) => {
  let body;
  if (event.body) {
      body = JSON.parse(event.body);
  }
  else {
      if (!event.id) {
          return {
              statusCode: 400,
              body: JSON.stringify({error: "Missing data in given body"})
          }
      }
      body = event;
  }
  return {"id": body.id, "text": body.text};
};
