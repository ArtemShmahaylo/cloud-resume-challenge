import json
import os
import boto3
from decimal import Decimal
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
table_name = os.environ['TABLE_NAME']
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    
    http_method = event['httpMethod']
    counter_id = 'main_counter'
    
    try:
        if http_method == 'GET':
            response = table.get_item(Key={'id': counter_id})
            count = int(response.get('Item', {}).get('count', 0))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'count': count
                })
            }
        
        elif http_method == 'POST':
            response = table.update_item(
                Key={'id': counter_id},
                UpdateExpression='SET #count = if_not_exists(#count, :start) + :inc',
                ExpressionAttributeNames={
                    '#count': 'count'
                },
                ExpressionAttributeValues={
                    ':inc': 1,
                    ':start': 0
                },
                ReturnValues='UPDATED_NEW'
            )
            
            count = int(response['Attributes']['count'])
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'count': count,
                    'message': 'Counter increased'
                })
            }
        
        elif http_method == 'DELETE':
            table.put_item(
                Item={
                    'id': counter_id,
                    'count': 0
                }
            )
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'count': 0,
                    'message': 'Counter reset'
                })
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Method is not supported'
                })
            }
            
    except Exception as e:
        print(f"Ошибка: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Internal Server Error',
                'details': str(e)
            })
        }