class Contact:
    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message
    
    def to_dict(self):
        return {
            'name': self.name,
            'email': self.email,
            'message': self.message
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            name=data.get('name'),
            email=data.get('email'),
            message=data.get('message')
        )