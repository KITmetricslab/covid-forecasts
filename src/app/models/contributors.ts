export interface Contributor {
  name: string;
  method: string;
  link: string;
  model_name: string;
  paper_text: string;
  paper_url: string;
}

export const contributors: Contributor[] = [
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
  { name: ' Karlen working group', method: 'Discrete-time difference equations with long periods of constant transmission rate', link: 'https://pypm.github.io/home/',
    model_name: 'Karlen-pypm', paper_text: '(Paper)', paper_url: 'https://arxiv.org/abs/2007.07156'},
  { name: 'Los Alamos National Laboratory (LANL)', method: 'Dynamic growth rate approach', link: 'https://covid-19.bsvgateway.org/',
    model_name: 'LANL-GrowthRate', paper_text: '', paper_url: ''},
  { name: 'MOCOS Group, University of Wrozlaw', method: 'Agent-based microsimulation model', link: 'https://mocos.pl/',
    model_name: 'MOCOS-agent1', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2020.03.25.20043109v2'},
  { name: 'MRC Centre for Global Infectious Disease Analysis, Imperial College London', method: 'Ensemble of four statistical / disease transmission models', link: 'https://mrc-ide.github.io/covid19-short-term-forecasts/',
    model_name: 'Imperial-ensemble1 & Imperial-ensemble2', paper_text: '', paper_url: ''},
  { name: 'UCLA Statistical Machine Learning Lab', method: 'SuEIR compartmental model', link: 'https://covid19.uclaml.org/',
    model_name: 'UCLA-SuEIR', paper_text: '(Paper)', paper_url: 'https://www.medrxiv.org/content/10.1101/2020.05.24.20111989v1'},
  { name: 'University of Southern California Data Science Lab', method: 'SI-kJ alpha disease transmission model', link: 'https://scc-usc.github.io/ReCOVER-COVID-19/',
    model_name: 'USC-SIkJalpha', paper_text: '(Paper)', paper_url: 'https://arxiv.org/abs/2007.05180'},
  { name: 'Youyang Gu', method: 'SEIR disease transmission model with machine learning layer', link: 'https://covid19-projections.com/',
    model_name: 'YYG-ParamSearch', paper_text: '', paper_url: ''},
]

export const contributorsByModelName: Map<string, Contributor> = new Map<string, Contributor>(contributors.map(x => [x.model_name, x]));
