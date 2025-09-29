from flask import Blueprint, jsonify, request
import os
from models.contact import Contact

# Create blueprint
portfolio_bp = Blueprint('portfolio', __name__)

# Portfolio data (in a real application, this would come from a database)
portfolio_data = {
    "hero": {
        "name": "Abhay Singh",
        "title": "Data Scientist & Full-Stack Developer",
        "tagline": "Building intelligent solutions with data and code"
    },
    
    "about": {
        "education": {
            "institution": "IIT Madras",
            "degree": "BSc Data Science",
            "period": "2021–2025"
        },
        "bio": "I'm a passionate Data Scientist and Full-Stack Developer with expertise in machine learning, web development, and data analysis. Currently pursuing my BSc in Data Science at IIT Madras, I'm focused on creating innovative solutions that leverage the power of data."
    },

    "skills": {
        "languages": ["Python", "JavaScript", "SQL", "Java", "C++"],
        "frameworks": ["React", "Vue.js", "Flask", "Node.js", "FastAPI"],
        "frontend": ["HTML/CSS", "Tailwind CSS", "Bootstrap", "shadcn/ui"],
        "backend": ["Flask", "Node.js", "Express.js"],
        "databases": ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        "tools": ["Git", "Docker", "AWS", "Jupyter Notebook", "VS Code"],
        "other": ["Machine Learning", "Deep Learning", "Data Visualization", "LangChain"]
    },

    "experience": [
        {
            "role": "Machine Learning Instructor",
            "company": "",
            "period": "2022–Present",
            "description": "Teaching machine learning concepts and practical applications to students."
        },
        {
            "role": "Mathematics Teacher",
            "company": "Vedantu",
            "period": "2020–2022",
            "description": "Teaching mathematics to students and helping them prepare for competitive exams."
        }
    ],

    "projects": [
        {
            "name": "Household Services App",
            "year": "2023",
            "technologies": "Vue.js + Flask",
            "description": "A platform connecting household service providers with customers, featuring booking, scheduling, and payment functionalities."
        },
        {
            "name": "Library Management System",
            "year": "2024",
            "technologies": "Flask + Bootstrap",
            "description": "A comprehensive library management system with book cataloging, member management, and borrowing functionalities."
        },
        {
            "name": "GenAI Academic Assistant",
            "year": "2025",
            "technologies": "Flask + LangChain",
            "description": "An AI-powered academic assistant that helps students with research, writing, and study planning using generative AI technologies."
        },
        {
            "name": "Sales Dashboard",
            "year": "2022",
            "technologies": "Flask + data visualization",
            "description": "Interactive dashboard for sales analytics with real-time data visualization and reporting capabilities."
        },
        {
            "name": "Personal Portfolio Website",
            "year": "2025",
            "technologies": "React + Flask",
            "description": "A full-stack portfolio website showcasing my skills, projects, and experience as a Data Scientist and Full-Stack Developer.",
            "github": "https://github.com/abhay121-pixel/abhay-singh-portfolio.git"
        }
    ],

    "contact": {
        "email": "21f1002151@ds.study.iitm.ac.in",
        "phone": "+91 7052640185",
        "linkedin": "linkedin.com/in/abhay-singh-iitm",
        "resume": "#"
    }
}

# Routes
@portfolio_bp.route('/portfolio', methods=['GET'])
def get_portfolio():
    """Get all portfolio data"""
    return jsonify(portfolio_data)

@portfolio_bp.route('/projects', methods=['GET'])
def get_projects():
    """Get projects data"""
    return jsonify(portfolio_data['projects'])

@portfolio_bp.route('/skills', methods=['GET'])
def get_skills():
    """Get skills data"""
    return jsonify(portfolio_data['skills'])

@portfolio_bp.route('/experience', methods=['GET'])
def get_experience():
    """Get experience data"""
    return jsonify(portfolio_data['experience'])

@portfolio_bp.route('/contact', methods=['POST'])
def submit_contact():
    """Submit contact form"""
    data = request.get_json()
    
    # Validate required fields
    if not data or not all(k in data for k in ('name', 'email', 'message')):
        return jsonify({
            "message": "Missing required fields: name, email, message",
            "status": "error"
        }), 400
    
    # Create contact object
    contact = Contact.from_dict(data)
    
    # In a real application, you would save this to a database
    # For now, we'll just log it
    print(f"Contact form submission: {contact.to_dict()}")
    
    # Return success response
    return jsonify({
        "message": "Message received successfully!",
        "status": "success"
    }), 201

@portfolio_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "message": "Portfolio API is running"
    })