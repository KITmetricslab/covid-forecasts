export interface Contributor {
  name: string;
  method: string;
  link: string;
  model_name: string;
  paper_text: string;
  paper_url: string;
}

export const contributors: Contributor[] = [
  {
    name: 'Centre for Modelling of Biological and Social Processes', method: 'Simplified version of our SeirFilter model', link: 'https://www.medrxiv.org/content/10.1101/2021.02.16.21251834v1',
    model_name: 'bisop-seirfilterlite', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2021.02.16.21251834v1'
  },
  { name: 'Covid Analytics, MIT Operations Research Center', method: 'Modified SEIR compartmental model', link: 'https://www.covidanalytics.io/',
    model_name: 'MIT_CovidAnalytics-DELPHI', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2020.06.23.20138693v1'},
  { name: 'Epiforecasts / London School of Hygiene and Tropical Medicine', method: '', link: 'https://epiforecasts.io/',
    model_name: 'epiforecasts-EpiExpert & epiforecasts-EpiNow2', paper_text: '', paper_url: ''},
  { name: 'Faculty of Mathematics, Informatics and Mechanics, University of Warsaw', method: '', link: 'https://www.mimuw.edu.pl/en/faculty',
    model_name: 'MIMUW-StochSEIR', paper_text: '', paper_url: ''},
  { name: 'Frankfurt Institute for Advanced Studies & Forschungszentrum Jülich', method: 'Extended SEIR compartmental model', link: 'https://www.medrxiv.org/content/10.1101/2020.04.18.20069955v1',
    model_name: 'FIAS_FZJ-Epi1Ger', paper_text: '(Paper)', paper_url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0238559'},
  { name: 'Fraunhofer Institute for Industrial Mathematics ITWM', method: 'Extended SEIR model with time delay effects', link: 'https://www.itwm.fraunhofer.de/en.html',
    model_name: 'itwm-dSEIR', paper_text: '', paper_url: ''},
  { name: 'Helmholtz Zentrum fuer Infektionsforschung', method: 'Deterministic SEIR type model', link: 'https://www.helmholtz-hzi.de/en/nc/research/research-topics/bacterial-and-viral-pathogens/epidemiology/team/',
    model_name: 'HZI-AgeExtendedSEIR', paper_text: '', paper_url: ''},
  { name: 'IEM Health', method: 'SEIR model projections for daily incident confirmed COVID cases and deaths by using AI to fit actual cases observed.', link: 'https://iem-modeling.com/',
    model_name: 'IEM_Health-CovidProject', paper_text: '', paper_url: ''},
  { name: 'ILM', method: 'Extended Kalman filter based on reproduction equation', link: 'https://github.com/Stochastik-TU-Ilmenau',
    model_name: 'ILM-EKF', paper_text: '', paper_url: ''},
  { name: 'IMISE/GenStat, University of Leipzig', method: 'SECIR compartmental model', link: 'https://www.imise.uni-leipzig.de/en/homepage',
    model_name: 'LeipzigIMISE-SECIR', paper_text: '', paper_url: ''},
  { name: 'Institute of Global Health, University of Geneva / Swiss Data Science Center', method: 'Robust seasonal trend decomposition and extrapolation', link: 'https://renkulab.shinyapps.io/COVID-19-Epidemic-Forecasting/',
    model_name: 'SDSC-ISG_TrendModel', paper_text: '', paper_url: ''},
  { name: 'Institute of Health Metrics and Evaluation (IHME), University of Washington', method: 'Hybrid of statistical and disease transmission model', link: 'https://covid19.healthdata.org/',
    model_name: 'IHME-CurveFit', paper_text: '', paper_url: ''},
  { name: 'Interdisciplinary Centre for Mathematical and Computational Modelling (ICM), University of Warsaw', method: 'Agent-based microsimulation model', link: 'https://icm.edu.pl/en/',
    model_name: 'ICM-agentModel', paper_text: '', paper_url: ''},
  { name: 'ITTW (Universities of Ilmenau, Trier, Wroclaw, Warsaw)', method: 'Simulation approach based on regional estimates of the reproductive number', link: 'https://www.tu-ilmenau.de/stochastik/',
    model_name: 'ITWW-county_repro', paper_text: '', paper_url: ''},
  { name: 'Johannes Gutenberg University Mainz / University of Hamburg', method: 'Statistical dynamical growth model accounting for population susceptibility', link: 'https://github.com/QEDHamburg/covid19',
    model_name: 'JGU_UHH-SMM', paper_text: '', paper_url: ''},
  { name: 'Karlen working group', method: 'Discrete-time difference equations with long periods of constant transmission rate', link: 'https://pypm.github.io/home/',
    model_name: 'Karlen-pypm', paper_text: '(Paper)', paper_url: 'https://arxiv.org/abs/2007.07156'},
  { name: 'Los Alamos National Laboratory (LANL)', method: 'Dynamic growth rate approach', link: 'https://covid-19.bsvgateway.org/',
    model_name: 'LANL-GrowthRate', paper_text: '', paper_url: ''},
  { name: 'MOCOS Group, University of Wrozlaw', method: 'Agent-based microsimulation model', link: 'https://mocos.pl/',
    model_name: 'MOCOS-agent1', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2020.03.25.20043109v2'},
  { name: 'MRC Centre for Global Infectious Disease Analysis, Imperial College London', method: 'Ensemble of four statistical / disease transmission models', link: 'https://mrc-ide.github.io/covid19-short-term-forecasts/',
    model_name: 'Imperial-ensemble1 & Imperial-ensemble2', paper_text: '', paper_url: ''},
  {
    name: 'Priesemann Group, MPI-DS', method: 'Bayesian inference of SIR-dynamics', link: 'https://github.com/Priesemann-Group/covid19_inference_forecast',
    model_name: 'Priesemann-bayes', paper_text: '(Paper)', paper_url: 'https://science.sciencemag.org/content/369/6500/eabb9789'
  },
  {
    name: 'Robert Walraven', method: 'Multiple skewed gaussian distribution peaks fit to raw data', link: 'http://rwalraven.com/COVID19',
    model_name: 'RobertWalraven-ESG', paper_text: '', paper_url: ''
  },
  {
    name: 'UCLA Statistical Machine Learning Lab', method: 'SuEIR compartmental model', link: 'https://covid19.uclaml.org/',
    model_name: 'UCLA-SuEIR', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2020.05.24.20111989v1'
  },
  {
    name: 'UMass-Amherst', method: 'Bayesian semi-compartmental model with observations on incident case counts and incident deaths. Model is fit independently to each state. Model includes observation noise and a case detection rate.', link: 'https://github.com/dsheldon/covid',
    model_name: 'UMass-SemiMech', paper_text: '', paper_url: ''
  },
  {
    name: 'UMass-Amherst', method: 'Bayesian compartmental model with observations on cumulative case counts and cumulative deaths. Model is fit independently to each state. Model includes observation noise and a case detection rate.', link: 'https://github.com/dsheldon/covid',
    model_name: 'UMass-MechBayes', paper_text: '', paper_url: ''
  },
  {
    name: 'UNIPV Periscope Working Group', method: 'Bayesian estimation of time-dependent models with time-varying coefficients to predict COVID-19 positive counts.', link: 'https://periscopeproject.eu/home',
    model_name: 'UNIPV-BayesINGARCHX', paper_text: '', paper_url: ''
  },
  {
    name: 'University of Geneva / Swiss Data Science Center', method: 'We model the number of cases and deaths using an ensemble model which compared a set of candidate models each day. The best model is picked using a cross validation procedure.', link: 'https://renkulab.shinyapps.io/COVID-19-Epidemic-Forecasting/',
    model_name: 'SDSC_ISG-TrendModel', paper_text: '', paper_url: ''
  },
  { name: 'University of Southern California Data Science Lab', method: 'SI-kJ alpha disease transmission model', link: 'https://scc-usc.github.io/ReCOVER-COVID-19/',
    model_name: 'USC-SIkJalpha', paper_text: '(Paper)', paper_url: 'https://arxiv.org/abs/2007.05180'
  },
  {
    name: 'University of Sydney Forecast Lab', method: 'A single autoregressive model fit jointly to all European time series, adding time series from the top regions across the world. A high-dimensional manifold embedding is used capture the process.', link: 'https://github.com/pmontman/covid19forec',
    model_name: 'USyd-OneModelMan', paper_text: '(Paper)', paper_url: 'https://arxiv.org/abs/2008.00444'
  },
  {
    name: 'University of Virginia, Biocomplexity COVID-19 Response Team', method: 'An ensemble of multiple methods such as auto-regressive (AR)models with exogenous variables, long short-term memory (LSTM) models, Kalman filter and PatchSim (an SEIR model).', link: 'https://biocomplexity.virginia.edu/',
    model_name: 'UVA-Ensemble', paper_text: '', paper_url: ''
  },
  { name: 'Youyang Gu', method: 'SEIR disease transmission model with machine learning layer', link: 'https://covid19-projections.com/',
    model_name: 'YYG-ParamSearch', paper_text: '', paper_url: ''},
]

export const contributorsByModelName: Map<string, Contributor> = new Map<string, Contributor>(contributors.map(x => [x.model_name, x]));
