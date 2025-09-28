import requests
import json

# Test data
data = {
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
}

# Send POST request
response = requests.post(
    "http://localhost:5000/api/contact",
    headers={"Content-Type": "application/json"},
    data=json.dumps(data)
)

# Print response
print(f"Status Code: {response.status_code}")
print(f"Response: {response.json()}")