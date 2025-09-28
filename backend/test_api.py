import requests
import json

# Base URL
BASE_URL = "http://localhost:5000/api"

def test_endpoint(endpoint, method="GET", data=None):
    """Test an API endpoint"""
    url = f"{BASE_URL}/{endpoint}"
    
    try:
        if method == "GET":
            response = requests.get(url)
        elif method == "POST":
            response = requests.post(url, json=data)
        
        print(f"Endpoint: {endpoint}")
        print(f"Method: {method}")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        print("-" * 50)
        
        return response
    except Exception as e:
        print(f"Error testing {endpoint}: {e}")
        print("-" * 50)

def main():
    print("Testing Portfolio API Endpoints\n")
    
    # Test health check
    test_endpoint("health")
    
    # Test portfolio data
    test_endpoint("portfolio")
    
    # Test projects
    test_endpoint("projects")
    
    # Test skills
    test_endpoint("skills")
    
    # Test experience
    test_endpoint("experience")
    
    # Test contact form submission
    contact_data = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a test message from the API test script"
    }
    test_endpoint("contact", method="POST", data=contact_data)

if __name__ == "__main__":
    main()