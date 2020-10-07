import irrf from '../data/irrf';
import helpers from './helpers';

export default function irrfCalculater(value) {

  const { percentOf } = helpers;

  const f1 = irrf[0];
  const f2 = irrf[1];
  const f3 = irrf[2];
  const f4 = irrf[3];
  const f5 = irrf[4];
  let irrfDesc = 0;

  irrfDesc = value <= f1.max ? 0 :
    value <= f2.max ? percentOf(value, f2.percent) - f2.deduction :
      value <= f3.max ? percentOf(value, f3.percent) - f3.deduction :
        value <= f4.max ? percentOf(value, f4.percent) - f4.deduction :
          percentOf(value, f5.percent) - f5.deduction;

  return irrfDesc;
};
