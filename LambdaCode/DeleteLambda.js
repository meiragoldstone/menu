const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log("You are in the delete menu function!!")
      const params = {
        TableName: 'menus',
        Key: {
            'pk': event.queryStringParameters.menuId
        }
    };
    
    try {
        const data = await dynamodb.delete(params).promise();
        return {
            
            statusCode: 200, 
            headers: {
            "Access-Control-Allow-Origin": "*", // Allow from any origin
            "Access-Control-Allow-Headers": "Content-Type"
        },
            body: JSON.stringify('Menu deleted successfully')
        };
    } catch (err) {
        console.error('Error deleting item from DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error deleting item from DynamoDB'),
        };
    }
};