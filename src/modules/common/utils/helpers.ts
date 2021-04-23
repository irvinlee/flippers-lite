export function keyBy(arr: Array<any>, key: string): Object {
  return arr.reduce((accumulator, current) => ({...accumulator, [current[key]]: current}), {});
}

export function getApiUrl(version: string): string {
  const corsAnywhereUrl = 'https://secret-ocean-49799.herokuapp.com/'; //added to fix CORS issue

  return `${corsAnywhereUrl}${process.env.REACT_APP_API_URL}/${version}`;
}
