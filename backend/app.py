from flask import Flask
from flask_cors import CORS
import os

# Create Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Import and register blueprints
from routes.portfolio import portfolio_bp
app.register_blueprint(portfolio_bp, url_prefix='/api')

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Portfolio API is running"
    }

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))