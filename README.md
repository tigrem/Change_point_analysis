Project Title: Brent Oil Price Change Point Analysis
Project Description

This project provides a comprehensive analysis of historical Brent crude oil prices using a Bayesian change point detection model. The primary goal is to identify significant structural breaks in the time series data and correlate these shifts with major geopolitical and economic events. The project culminates in an interactive dashboard that allows stakeholders to explore these insights, providing a valuable tool for energy sector analysts, investors, and policymakers.
Business Objective

The main objective of this analysis is to provide actionable insights into how major global events impact Brent oil prices. By identifying and quantifying the effects of events like conflicts, economic sanctions, or political decisions, the project aims to equip Birhan Energies and other stakeholders with a deeper understanding of market dynamics, enabling more informed strategic decision-making.
Situational Overview

As a data scientist at Birhan Energies, this project was initiated to address a critical business need: to move beyond simple trend analysis and to provide a robust, evidence-based understanding of market volatility. The Bayesian change point model offers a sophisticated method for identifying the precise moments when market dynamics shifted, offering a powerful narrative to accompany the quantitative data.
Data

The analysis uses two primary datasets:

    BrentOilPrices.csv: A dataset containing daily Brent crude oil prices in USD per barrel, spanning from May 20, 1987, to September 30, 2022.

    key_events.csv: A structured dataset that compiles major geopolitical and economic events relevant to the energy market, including event dates and descriptions.

    brent_oil_log_returns.csv: A processed dataset containing the log returns of the Brent oil prices, used for the change point analysis.

Task Requirements (Roadmap)

All tasks have been successfully completed as part of this project.

    Task 1: Laying the Foundation for Analysis (Completed)

        Defining the Data Analysis Workflow.

        Researching and Compiling Event Data.

        Identifying Assumptions and Limitations (including correlation vs. causation).

        Determining Communication Channels.

        Analyzing Time Series Properties.

        Explaining Change Point Models.

        Describing Expected Outputs and Limitations.

    Task 2: Model Development and Impact Quantification (Completed)

        Building and implementing the Bayesian change point model (PyMC).

        Identifying probable change points.

        Quantifying the impact of events on price changes.

        Linking change points to researched events.

    Task 3: Interactive Dashboard Development (Completed)

        Developing a Flask backend and React frontend for an interactive dashboard.

        Displaying and allowing exploration of insights.

Installation Guidelines

This project has two main components: a Python backend and a React frontend. Both require separate installations.
Python Backend Dependencies

    Ensure you have Python installed.

    Navigate to the dashboards/backend/ directory.

    Install the required Python packages using pip:

    pip install Flask Flask-Cors pandas

React Frontend Dependencies

    Ensure you have Node.js and npm installed.

    Navigate to the dashboards/frontend/ directory.

    Install the required Node.js packages:

    npm install

Usage

To run the full project, you must start both the backend and frontend servers simultaneously in separate terminal windows.
Step 1: Start the Flask Backend

    Open a terminal and navigate to the dashboards/backend/ directory.

    Run the Flask application:

    python app.py

    Keep this terminal window open. The server will be running on http://127.0.0.1:5000.

Step 2: Start the React Frontend

    Open a new, separate terminal and navigate to the dashboards/frontend/ directory.

    Start the React development server:

    npm start

    This will automatically open your dashboard in a browser window, typically at http://localhost:3000 or http://localhost:3001 if port 3000 is in use.

Project Organization

The project's directory structure is organized as follows:

.
├── dashboards/
│   ├── backend/
│   │   └── app.py
│   ├── frontend/
│   │   ├── node_modules/
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── package-lock.json
├── data/
│   ├── processed/
│   │   └── brent_oil_log_returns.csv
│   ├── BrentOilPrices.csv
│   └── key_events.csv
├── models/
│   └── bayesian_changepoint.py
├── notebooks/
│   └── exploratory_analysis.ipynb
├── reports/
│   └── report.pdf
├── venv/
├── .gitignore
├── LICENSE
├── README.md
└── requirements.txt
