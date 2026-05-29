from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def home():
    return 'API funcionando!'

usuarios = [
    {
        "nome": "miguel1 angelo",
        "email": "miguel1angelo@gmail.com",
        "telefone": "(14) 99999-9999"
    },
    {
        "nome": "anavi bobona",
        "email": "anabobona@gmail.com",
        "telefone": "(14) 88888-8888"
    },
    {
        "nome": "miguel2 tavi",
        "email": "migueltavi@gmail.com",
        "telefone": "(14) 7777-7777"
    }
]

@app.route('/usuarios')
def listar_usuarios():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)