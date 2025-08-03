# Fraud Detection Project: Model Training and Explainability

## Project Overview

This project focuses on building and evaluating robust fraud detection models using two distinct datasets:
1.  **E-commerce Fraud Data (Fraud_Data.csv):** Simulates user behavior and transactions to identify fraudulent sign-ups or purchases.
2.  **Credit Card Fraud Data (creditcard.csv):** Contains highly imbalanced transactional data to detect fraudulent credit card transactions.

The primary goals of this project are:
* **Data Preprocessing:** Handle data cleaning, feature engineering, and appropriate scaling/encoding for different data types.
* **Model Training:** Train LightGBM classifiers, which are highly effective for tabular data, on both datasets.
* **Model Evaluation:** Assess model performance using relevant metrics for imbalanced datasets (e.g., Precision, Recall, F1-Score, ROC-AUC).
* **Model Explainability (SHAP):** Utilize SHAP (SHapley Additive exPlanations) to interpret model predictions, understand feature importance, and diagnose model behavior.

## Project Structure

The project is organized into three main tasks, each addressing a critical phase of the machine learning pipeline:

* **Task 1: Data Preprocessing and Feature Engineering**
    * Loading and initial exploration of `Fraud_Data.csv` and `creditcard.csv`.
    * Handling categorical and numerical features using `ColumnTransformer`.
    * Addressing class imbalance with `SMOTENC` for `Fraud_Data` and `SMOTE` for `creditcard.csv`.
    * Splitting data into training and testing sets.

* **Task 2: Model Training and Evaluation**
    * Training `LightGBM` (LGBMClassifier) models for both datasets.
    * Evaluating model performance using:
        * Classification Reports (Precision, Recall, F1-Score)
        * Confusion Matrices
        * ROC AUC Curves

* **Task 3: Model Explainability with SHAP**
    * Generating SHAP values using `shap.TreeExplainer` for both trained `LightGBM` models.
    * Visualizing global feature importance using SHAP Summary Plots (beeswarm and bar plots).
    * Interpreting individual predictions using SHAP Force Plots for fraudulent transactions.

## Setup and Installation

To run this project, you'll need Python and the following libraries. It's highly recommended to use a virtual environment.

1.  **Clone the repository (if applicable) or download the project files.**
2.  **Create a virtual environment:**
    ```bash
    python -m venv fraud_env
    ```
3.  **Activate the virtual environment:**
    * **Windows:** `.\fraud_env\Scripts\activate`
    * **macOS/Linux:** `source fraud_env/bin/activate`
4.  **Install the required packages:**
    ```bash
    pip install pandas numpy scikit-learn lightgbm imbalanced-learn shap matplotlib jupyter ipykernel
    ```
5.  **Install the virtual environment kernel into Jupyter:**
    ```bash
    python -m ipykernel install --user --name=fraud_env --display-name "Python (Fraud Detection Env)"
    ```
6.  **Download the datasets:**
    * `Fraud_Data.csv`: (Specify source if publicly available, e.g., Kaggle link, or state it should be placed in a `data/` folder if included in the repo.)
    * `creditcard.csv`: (Specify source if publicly available, e.g., Kaggle link, or state it should be placed in a `data/` folder if included in the repo.)
    * **Place these CSV files in a `data/` directory within your project root.**

## How to Run

1.  **Launch Jupyter Notebook or Jupyter Lab:**
    ```bash
    jupyter notebook
    # or jupyter lab
    ```
2.  **Open the main project notebook (e.g., `Fraud_Detection_Project.ipynb`).**
3.  **Ensure you select the `Python (Fraud Detection Env)` kernel** from the "Kernel" menu -> "Change kernel".
4.  **Run all cells sequentially.** The notebook is structured to guide you through each task from data loading to model explainability.

## Key Findings and Interpretations

### Model Performance

* **E-commerce Fraud Data:** The LightGBM model performs effectively on the e-commerce data, demonstrating strong capabilities in identifying fraudulent users/transactions after handling class imbalance. Metrics such as [mention specific metrics, e.g., high recall for fraud, good F1-score].
* **Credit Card Fraud Data:** Despite the extreme imbalance, the LightGBM model achieved [mention specific metrics, e.g., excellent recall for the minority class, a high AUC score], highlighting its ability to detect rare fraudulent transactions.

### SHAP Explanations

SHAP analysis provided crucial insights into model decision-making:

* **Global Feature Importance:**
    * For **E-commerce Fraud**, features like [mention 2-3 most important features based on SHAP plots, e.g., `device_id_count`, `ip_address_risk`, `purchase_to_signup_ratio`] were consistently identified as having the largest impact on fraud prediction. This suggests that behavioral patterns and device/IP anomalies are key indicators.
    * For **Credit Card Fraud**, features such as [mention 2-3 most important V-features, e.g., `V17`, `V14`, `V10`] were paramount. This aligns with common knowledge that these principal components often capture suspicious transaction patterns.

* **Individual Prediction Insights (Force Plots):**
    * Force plots for specific fraudulent transactions clearly illustrate how a combination of these high-impact features pushed the prediction towards fraud. For example, a transaction with a [high 'Amount'] and unusual [V-feature value] would contribute significantly to a fraudulent score.
    * This granular explainability is invaluable for fraud analysts to understand why a particular transaction was flagged and can help in refining fraud rules or investigations.
## Dependencies
* Python 3.13
* pandas
* numpy
* scikit-learn
* lightgbm
* imbalanced-learn
* shap
* matplotlib
* jupyter
* ipykernel
## Future Work
* **Hyperparameter Tuning:** Implement more extensive hyperparameter tuning for LightGBM using GridSearchCV or RandomizedSearchCV.
* **Ensemble Methods:** Explore other ensemble models like XGBoost or CatBoost for comparison.
* **Deep Learning Models:** Investigate neural networks for fraud detection, especially for complex sequential data.
* **Real-time Fraud Detection:** Consider how these models could be deployed in a real-time system.
* **Adversarial Attacks & Robustness:** Explore the robustness of the models against sophisticated fraud attempts.
* **Experiment Tracking:** Integrate tools like MLflow or Weights & Biases for better experiment tracking.
