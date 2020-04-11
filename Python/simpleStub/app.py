## Import Module
## python -m pip install flask
from flask import Flask
app = Flask(__name__, 
            static_url_path='/htmlPages')
@app.route("/",methods=['GET'])
def simpleResponse():
    f = open("responses\simple.json", "r")
    z = f.read()
    return z, 200, {'Content-Type': 'application/json; charset=utf-8'}

@app.route("/index.html",methods=['GET'])
def simpleHtmlResponse():
    return app.send_file('index.html')
if __name__ == "__main__":
    app.run(host='0.0.0.0', port='3000')