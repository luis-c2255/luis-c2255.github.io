---
layout: project
title: "Capstone Project IBM - Data Science"
description: "Predicting SpaceX Launch Prices & First Stage Reuse"
date: 2025-12-26
category: "data-analysis"
image: "/assets/images/projects/SpaceX.svg"
technologies:
  - Python
  - Folium
  - SQL
  - Machine Learning
github: "https://github.com/luis-c2255/Project_Capstone_IBM_SpaceX"
demo: "https://lmode2255.pythonanywhere.com/"
stats:
  - value: "50%"
    label: "Faster Reporting"
  - value: "15+"
    label: "Key Metrics Tracked"
  - value: "100K+"
    label: "Data Points Analyzed"
---

## Project Overview

This capstone project course will give you a taste of what data scientists go through in real life when working with real datasets. You will assume the role of a Data Scientist working for a startup intending to compete with SpaceX, and in the process follow the Data Science methodology involving data collection, data wrangling, exploratory data analysis, data visualization, model development, model evaluation, and reporting your results to stakeholders.

## The Problem

SpaceY plans to enter the commercial launch market and compete with SpaceX’s Falcon 9. Understanding SpaceX’s pricing and reuse patterns is essential to designing a viable business model.

**Research questions**:
1. What factors influence the price of a SpaceX launchm and how can we estimate that price?
2. Can we predict whether the first stage will land successfully and be reusable using public data?

**Scope of work**
- Data collection from APIs and web scrapping
- Data wrangling & normalization
- SQL-based analysis
- EDA & interactive visual analytics
- Machine Learning models for landing success prediction

## Data Collection
### SpaceX API
<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/SpaceX_API.svg?raw=true" alt="Chart" width="65%" height="65%">

### Web Scrapping
<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/web_scrapping.svg?raw=true" alt="Chart" width="65%" height="65%">

## Data Wrangling
<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/data_wrangling.svg?raw=true" alt="Chart" width="65%" height="65%">

## Exploratory Data Analysis Approach
To understand patterns in launch behavior, performance, and mission characteristics, performed a Structured EDA workflow:
<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/eda_approach.svg?raw=true" alt="Chart" width="65%" height="65%">

**Purpose**
Identify relationships, anomalies, and operational patterns that inform both SQL analysis and predictive modeling

<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/graph.svg?raw=true" alt="Chart" width="65%" height="65%">

## SQL
<img src="https://github.com/luis-c2255/luis-c2255.github.io/blob/changes/assets/images/projects/sql.svg?raw=true" alt="Chart" width="65%" height="65%">

**Output**
A set of validated metrics used to get payload totals, mission outcomes and booster performance.

- **Total Payload Mass for NASA**

`SELECT SUM("PAYLOAD_MASS_KG_") AS Total_Payload_Mass FROM SPACEXTBL WHERE Customer = "NASA (CBS)"`

**45,596 kg**

NASA is a major contributor to SpaceX's early manifest, especially ISS resupply missions.

- **Average Payload Mass for F9v1.1**

`SELECT AVG("PAYLOAD_MASS_KG_") AS Average_Payload_Mass FROM SPACEXTBL WHERE "Booster_Version" = "F9 v1.1"`

**2,928.4 kg**

Early Falcon 9 versions carried significantly lighter payloads compared to Block 5.

## Interactive Visualizations

<iframe src="../assets/images/projects/all_stations.html" height="500" width="500"></iframe>


## Results & Impact



## Key Learnings



## Future Enhancements



## Screenshots



---



**Want to learn more about this project?** Feel free to [reach out](/contact) or check out the [code on GitHub](https://github.com/luis-c2255/Project_Capstone_IBM_SpaceX).
