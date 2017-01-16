export const CHOOSE_FARO = 'CHOOSE_FARO'
export const CHOOSE_VANTAGE = 'CHOOSE_VANTAGE';
export const PLAIN_MEASURMENT = 'PLAIN_MEASURMENT';
export const CIRCULARITY_HELP = 'CIRCULARITY_HELP'

export function chooseFaro(){
      console.log ('ich bin hier bei choosefaro')
  return {
    type: CHOOSE_FARO,
  };
}
export function chooseVantage() {
  console.log('hier bin ich beim choosevantage')
  return {
    type: CHOOSE_VANTAGE,
  };
}
export function plainMeasurment() {
  console.log('hier bin ich beim plainmeasurment')
  return {
    type: PLAIN_MEASURMENT,
  };
}
export function CircularityHelp() {
  console.log('hier bin ich beim plainmeasurment')
  return {
    type: CIRCULARITY_HELP,
  };
}
