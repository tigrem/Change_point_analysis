    Project Title: Brent Oil Price Change Point Analysis

    Project Description: A brief overview of the project's goal: analyzing Brent oil prices using Bayesian change point detection to identify and associate structural breaks with major geopolitical and economic events, providing actionable insights for energy sector stakeholders.

    Business Objective: Reiterate the main goal of studying how important events affect Brent oil prices and providing clear insights for investors, analysts, and policymakers.

    Situational Overview: Briefly explain the role of a data scientist at Birhan Energies and the business need for this analysis.

    Data: Describe the brent_oil_prices.csv dataset (daily prices from May 20, 1987, to September 30, 2022, in USD per barrel) and the key_events.csv file.

    Task Requirements (Roadmap):

        Task 1: Laying the Foundation for Analysis (Current Submission):

            Defining the Data Analysis Workflow.

            Researching and Compiling Event Data.

            Identifying Assumptions and Limitations (including correlation vs. causation).

            Determining Communication Channels.

            Analyzing Time Series Properties.

            Explaining Change Point Models.

            Describing Expected Outputs and Limitations.

        Task 2: Model Development and Impact Quantification:

            Building and implementing the Bayesian change point model (PyMC3).

            Identifying probable change points.

            Quantifying the impact of events on price changes.

            Linking change points to researched events.

        Task 3: Interactive Dashboard Development:

            Developing a Flask backend and React frontend for an interactive dashboard.

            Displaying and allowing exploration of insights.

    Installation Guidelines: Instructions on how to set up the project environment, including dependencies (e.g., Python, PyMC3, Pandas, Flask, Node.js for React) and steps to install them.

    Usage: How to run the notebooks, models, and the dashboard.

    Project Organization: A brief explanation of the directory structure.

    Metrics (for evaluation): Emphasize Project Organization and Reproducibility.

    Contributing: Guidelines for contributions (optional for an interim submission but good practice).

    License: (e.g., MIT License).

Directory Contents:

    data/: This directory will store all raw and processed data files.

        brent_oil_prices.csv: The historical Brent oil price data.

        key_events.csv: The structured dataset of major geopolitical and economic events.

    notebooks/: This directory will contain Jupyter notebooks for exploratory data analysis (EDA), initial model prototyping, and visualization.

        exploratory_analysis.ipynb: A notebook for initial data loading, cleaning, time series property analysis (trend, stationarity), and preliminary visualizations.

    models/: This directory will house the Python scripts for the Bayesian change point models.

        bayesian_changepoint.py: Python script(s) containing the implementation of the Bayesian change point model using PyMC3.

    dashboard/: This directory will contain the code for the interactive dashboard.

        backend/: Flask application code for serving data and model results to the frontend.

        frontend/: React application code for the user interface and data visualization.
    Reports/: This directory will contain the pdf report part of the project for all.
    