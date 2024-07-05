import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "lambda_shared_db";

export const handler = async (event, context) => {
  const id = event.id;
  const text = event.text;
  await dynamo.send(
    new PutCommand({
      TableName: tableName,
      Item: {
        id: id,
        text: text,
      },
    })
  );
  return "success";
};
