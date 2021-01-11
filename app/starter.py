from flask import Flask

# Cross Origin Ressource Sharing
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cross Origin Ressource Sharing Allowing
app.config.from_object('config')
