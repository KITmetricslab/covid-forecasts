export interface KITModel {
  method: string;
  model_name: string
}

export const kitmodels: KITModel[] = [
  { model_name: 'EuroCOVIDhub-ensemble', method: 'An ensemble, or model average, of submitted forecasts to the European COVID-19 Forecast Hub'},
  { model_name: 'KITCOVIDhub-median_ensemble', method: 'An average of forecasts submitted by different models, computed as the median (per quantile)' },
  { model_name: 'KITCOVIDhub-mean_ensemble', method: 'An average of forecasts submitted by different models, computed as the mean (per quantile)' },
  { model_name: 'KITCOVIDhub-inverse_wis_ensemble', method: 'A weighted average of forecasts submitted by different models, with weights computed from the average performance over the last three weeks' },

  { model_name: 'KIT-baseline', method: 'A naive model that always predicts that the number of new cases/deaths will be the same as last week (in expectation)' },
  { model_name: 'KIT-time_series_baseline', method: 'A statistical time series model (exponential smoothing with multiplicative error terms)' },
  { model_name: 'KIT-extrapolation_baseline', method: 'A multiplicative extrapolation based on the last two observations with fanning uncertainty bands estimated from the last five observations' }
]

export const kitModelsByModelName: Map<string, KITModel> = new Map<string, KITModel>(kitmodels.map(x => [x.model_name, x]));
