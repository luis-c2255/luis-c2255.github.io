---
layout: project
title: "E-Commerce Customer Intelligence & Predictive Dashboard"
description: "A comprehensive Business Intelligence and Predictive Analytics solution designed to drive data-driven decision-making for e-commerce platforms."
date: 2026-01-31
category: "data-analysis"
image: "/assets/images/projects/E_Commerce/istockphoto-2061836383-612x612.svg"
technologies:
  - Python
  - Pandas
  - Streamlit
  - HuggingFace 
  - Plotly
github: "https://github.com/luis-c2255/E_Commerce_Retail/tree/main"
demo: "https://huggingface.co/spaces/Luismodesto86/E_Commerce_Dashboard"
---

## 🎯 Project Overview

This project features a comprehensive Business Intelligence and Predictive Analytics solution designed to drive data-driven decision-making for e-commerce platforms. By processing over £8.9M in historical transactional data, the dashboard transforms raw information into actionable insights to improve customer retention, optimize marketing spend, and maximize long-term revenue.

## ✨ Key Features

- **Predictive Modeling**: Integrated Customer Lifetime Value (CLV) and Churn probability forecasting to anticipate future revenue and attrition.
- **Behavioral Segmentation**: Advanced customer classification using the **RFM (Recency, Frequency, Monetary)** framework to identify high-value users.
- **Market Basket Analysis**: Data-mining of product associations to uncover cross-selling and bundling opportunities.
- **Time-Series Analysis**: Granular sales forecasting and heatmaps for identifying peak-hour performance trends.


## 🎨​ Dashboard Sections

- **Executive Overview**: A high-level view of global KPIs, including total revenue (£8.9M), order volume, and average transaction value across multiple regions.
- **Customer Intelligence (RFM)**: Detailed breakdown of customer segments (e.g., "Champions," "Loyal," "At Risk") to tailor personalized marketing efforts.
- **CLV & Churn Prediction**: Projections of future customer worth and early warning signs for users likely to churn.
- **Retention Cohorts**: A heatmap analysis showing retention rates over time, pinpointing the critical drop-off periods in the customer journey.
- **Sales Forecasting**: A 12-month predictive model to assist in budget planning and inventory management.

   
## 📁 Project Structure

```
retail_dashboard/
├── Pages.py
├── README.md
├── data
│   ├── country_metrics.csv
│   ├── monthly_metrics.csv
│   ├── product_metrics.csv
│   ├── retail_data_cleaned.csv
│   └── rfm_analysis.csv
├── pages
│   ├── 1_📊_Overview.py
│   ├── 2_👥_Customer_Analysis.py
│   ├── 3_🛒_Basket_Analysis.py
│   ├── 4_📈_Cohort_Analysis.py
│   ├── 5_🔮_Predictive_Analytics.py
│   └── 6_💰_CLV_and_Churn.py
├── prepare_data.py
├── requirements.txt
├── style.css
└── utils
    ├── __init__.py
    ├── __pycache__
    │   ├── __init__.cpython-313.pyc
    │   ├── data_processor.cpython-313.pyc
    │   ├── ml_models.cpython-313.pyc
    │   └── theme.cpython-313.pyc
    ├── data_processor.py
    ├── ml_models.py
    └── theme.py
```

## 🛠️ Technical Implementation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Step 1: Clone or Download
```bash
# Create project directory
mkdir ecommerce-dashboard
cd ecommerce-dashboard
```

### Step 2: Install Dependencies
```bash
pip install streamlit pandas numpy plotly seaborn matplotlib
```

Or use requirements.txt:
```bash
pip install -r requirements.txt
```

**requirements.txt:**
```
streamlit==1.30.0
pandas==2.1.4
numpy==1.26.3
plotly==5.18.0
matplotlib==3.8.2
```
## 💻​ Technologies Used

- **Streamlit**: Interactive web application framework
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Plotly**: Interactive visualizations
- **Matplotlib**: Additional plotting capabilities

## 💡 Results & Impact

- **Marketing Efficiency**: Enabled hyper-targeted campaigns by isolating "Champions" and creating re-engagement workflows for "At Risk" segments, significantly reducing wasted ad spend.
- **Strategic Planning**: The 12-month forecast allows for proactive inventory adjustments, specifically addressing the high-demand spikes observed in November and December.
- **Revenue Growth**: Identified top-performing product pairs through Market Basket Analysis, providing a data-backed foundation for automated recommendation engines.

## ✨ Key Learnings

- **Temporal Insights**: Discovered that peak activity occurs specifically on **Thursdays at 12:00 PM**, allowing for more effective scheduling of email marketing and promotions.
- **Data Integrity**: Reinforced the importance of rigorous data cleaning and feature engineering in transactional datasets to ensure the reliability of predictive models.
- **Business Alignment**: Learned to bridge the gap between complex data science models and executive decision-making by focusing on "Actionable Insights" over static metric

## 📸 Screenshots

### Dashboard Overview & Landing Page

![Dashboard Overview](/assets/images/projects/E_Commerce/Landing_Page-removebg-preview.png)

### Customer & Basket Analysis

![Customer Analysis](/assets/images/projects/E_Commerce/cust_mark-removebg-preview.png)

### Cohort Analysis & Predictive Analytics

![Cohort Analysis](/assets/images/projects/E_Commerce/coh_predic-removebg-preview.png)

### CLV & Churn 

![CLV Analysis](/assets/images/projects/E_Commerce/clv-removebg-preview.png)

---

**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/E_Commerce_Retail/tree/main).
