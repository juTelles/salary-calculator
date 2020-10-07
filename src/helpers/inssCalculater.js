import inss from '../data/inss';
import helpers from './helpers';

export default function inssCalculater(value) {
  
  const { percentOf } = helpers;
  
  const f1 = inss[0];
  const f2 = inss[1];
  const f3 = inss[2];
  const f4 = inss[3];

  if (value <= f1.max) {
    return percentOf(value, f1.percent);

  } else if (value <= f2.max) {
    value = value - f1.max;
    return percentOf(f1.max-f1.min, f1.percent) +
    percentOf(value, f2.percent);

  } else if (value <= f3.max) {
    value = value - f2.max;
    return percentOf(f1.max-f1.min, f1.percent) +
    percentOf(f2.max-f2.min, f2.percent) +
    percentOf(value, f3.percent);

  } else {
    let desc = percentOf(f1.max-f1.min, f1.percent) +
              percentOf(f2.max-f2.min, f2.percent) +
              percentOf(f3.max-f3.min, f3.percent);
    if (value < f4.max) { 
      value = value - f3.max;      
      return desc + percentOf(value, f4.percent);
    } else {
      return desc + percentOf(f4.max-f4.min, f4.percent);
    }
  }
};
