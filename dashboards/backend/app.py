# dashboards/backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

# Initialize the Flask application
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing for the React frontend

# Define the base path for your data directory
DATA_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data'))
print(f"Data path set to: {DATA_PATH}")

# Hardcoded analysis results from Task 2 to serve via API
# In a production environment, this would be loaded from a file (e.g., JSON or a database)
CHANGE_POINT_RESULTS = {
    "date": "2008-08-21",
    "mu_before": 0.0003,
    "mu_after": -0.0001,
    "sigma_before": 0.023,
    "sigma_after": 0.029,
    "prob_sigma_increase": 100.00
}

# --- API Endpoints ---

@app.route('/api/historical_prices', methods=['GET'])
def get_historical_prices():
    """
    Serves the Brent oil historical price data.
    """
    try:
        file_path = os.path.join(DATA_PATH, 'BrentOilPrices.csv')
        df = pd.read_csv(file_path)
        # Convert to list of dictionaries for JSON serialization
        data = df.to_dict('records')
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Historical prices data not found."}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/key_events', methods=['GET'])
def get_key_events():
    """
    Serves the key events data.
    """
    try:
        file_path = os.path.join(DATA_PATH, 'key_events.csv')
        df = pd.read_csv(file_path)
        # Convert to list of dictionaries for JSON serialization
        data = df.to_dict('records')
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({"error": "Key events data not found."}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/change_point_results', methods=['GET'])
def get_change_point_results():
    """
    Serves the hardcoded results from the Bayesian Change Point analysis.
    """
    return jsonify(CHANGE_POINT_RESULTS)

if __name__ == '__main__':
    # You can run this file directly with `python app.py`
    app.run(debug=True, port=5000)
