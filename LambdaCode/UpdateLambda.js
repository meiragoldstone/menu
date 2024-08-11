const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);
    console.log(requestBody);

    // Validate input
    const menuId = event.queryStringParameters.menuId;
    const position = parseInt(requestBody.attributeName); // Ensure it's a number
    const newValue = requestBody.newValue;

    if (isNaN(position)) {
        return {
            statusCode: 400,
            body: JSON.stringify('Invalid position'),
        };
    }

    const params = {
        TableName: 'menus',
        Key: {
            'pk': menuId
        },
        UpdateExpression: `set menuItems[${position}] = :value`,
        ExpressionAttributeValues: {
            ':value': newValue
        },
        ReturnValues: 'UPDATED_NEW'
    };
    
    try {
        const data = await dynamodb.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(data.Attributes),
        };
    } catch (err) {
        console.error('Error updating item in DynamoDB', err);
        return {
            statusCode: 500,
            body: JSON.stringify('Error updating item in DynamoDB'),
        };
    }
};
