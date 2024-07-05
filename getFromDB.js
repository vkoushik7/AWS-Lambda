import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "lambda_shared_db";

export const handler = async (event) => {
  const body = await dynamo.send(new ScanCommand({ TableName: tableName }));
  const items = body.Items;
  return {"items": items};
};
