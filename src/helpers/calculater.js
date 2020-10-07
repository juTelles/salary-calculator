import inssCalculater from './inssCalculater';
import irrfCalculater from './irrfCalculater';
import helpers from './helpers';

export default function calculater(salary) {

  const { treatNum } = helpers;

  const inssBase =
    salary === 0 || salary === "" ? "" :
      treatNum(salary);

  const inssCalc =
    salary === 0 || salary === "" ? "" :
      treatNum(inssCalculater(salary));

  const irrfBase =
    salary === 0 || salary === "" ? "" :
      treatNum(salary - inssCalc);

  const irrfCalc =
    salary === 0 || salary === "" ? "" :
      irrfCalculater(irrfBase) === 0 ? 'Isento' :
        treatNum(irrfCalculater(irrfBase));

  const liquidSalary =
    salary === 0 || salary === "" ? "" :
      irrfCalc === 'Isento' ? irrfBase :
        treatNum(irrfBase - irrfCalc);

  return { inssBase, inssCalc, irrfBase, irrfCalc, liquidSalary };
}
