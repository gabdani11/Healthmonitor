from flask import Flask, jsonify
import serial

app = Flask(__name__)


SERIAL_PORT = "COM3"  


try:
    arduino = serial.Serial(SERIAL_PORT, 9600, timeout=1)
except Exception as e:
    print(f"Warning: No Arduino connected ({e})")
    arduino = None  

@app.route('/heartbeat', methods=['GET'])
def get_heartbeat():
    if arduino and arduino.is_open:
        arduino.flush()
        bpm = arduino.readline().decode().strip()
        if bpm.isdigit():
            return jsonify({"heartRate": int(bpm)})
    
    return jsonify({"heartRate": 0})  

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
