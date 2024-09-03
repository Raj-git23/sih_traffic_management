from flask import Flask

def create_app():
    app = Flask(__name__)
    
    from .routes import main
    app.register_blueprint(main)
    
    # You can also configure app here or register other blueprints
    
    return app
