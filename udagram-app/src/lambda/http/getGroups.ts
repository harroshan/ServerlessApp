import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as express from 'express'
import * as awsServerlessExpress from 'aws-serverless-express'
import { getAllGroups } from '../../businessLogic/groups'

// const app = express();

// app.get('/groups', async(req, res) => {
//   const groups = await getAllGroups()

//   res.json({
//     items: groups
//   })
// })

// const server = awsServerlessExpress.createServer(app)
// exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Processing event: ', event)

  const groups = await getAllGroups()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      items: groups
    })
  }
}


// import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
// import 'source-map-support/register'
// import * as AWS  from 'aws-sdk'

// const docClient = new AWS.DynamoDB.DocumentClient()

// const groupsTable = process.env.GROUPS_TABLE

// export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//   console.log('Processing event: ', event)

//   const result = await docClient.scan({
//     TableName: groupsTable
//   }).promise()

//   const items = result.Items

//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     },
//     body: JSON.stringify({
//       items
//     })
//   }
// }
