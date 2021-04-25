export function keyBy(arr: Array<any>, key: string): Object {
  return arr.reduce((accumulator, current) => ({...accumulator, [current[key]]: current}), {});
}

export function getApiUrl(version: string): string {
  const corsAnywhereUrl = 'https://secret-ocean-49799.herokuapp.com/'; //added to fix CORS issue

  return `${corsAnywhereUrl}${process.env.REACT_APP_API_URL}/${version}`;
}

export function parseMultipleUrlParamSelections(selections: Array<string>): string {
  return selections.map((niche: string) => niche).join('||')
}

export function getNicheImageUrl(nicheImage: string): string {
  return `${process.env.REACT_APP_NICHE_IMAGE_BASE_URL}/${nicheImage}`;
}

export function formatCurrency(value: number, currency: string='USD', format: string = 'en-US'): string {
  return new Intl.NumberFormat(format, {style: 'currency', currency }).format(value);
}

export function isArrayEqualToSet(array: Array<any>, set: Set<any>): boolean {
  if(array.length !== set.size) {
    return false;
  }
  
  for(let i = 0; i < array.length; i++) {
    if(!set.has(array[i])) {
      return false;
    }
  }

  return true;
}
