
import React, { Component } from 'react';
import Calculus from './calculus';
import Title from './title';
import calculater from '../helpers/calculater'

export default class SalaryCalculator extends Component {
  constructor() {
    super();

    this.state = {
      salary: "",
      calculations: {
        inssBase: "",
        inssCalc: "",
        irrfBase: "",
        irrfCalc: "",
        liquidSalary: "",
      }
    }
  }
  componentDidUpdate(_previousProps, previousState) {
    const newSalary = this.state.salary;
    const oldSalary = previousState.salary;

    if (newSalary !== oldSalary) {
      const calculations = calculater(newSalary);
      this.setState({ calculations });
    }
  }
  handleSalaryChange = (event) => {
    const newSalary = Number(event.target.value);
    if (newSalary === 0) {
      this.setState({
        salary: "",
      });
    } else {
      this.setState({
        salary: newSalary,
      });
    }
  }

  render() {
    const { salary, calculations } = this.state;
    const { inssBase, inssCalc, irrfBase, irrfCalc, liquidSalary } = calculations;
    return (
      <div>
        <Title/>
      <div className="calculator">
        <div>
          <input type="number" min="0" value={salary} placeholder=" " onChange={this.handleSalaryChange} />
        </div>
        <div>
          <Calculus value={inssBase} label="INSS Base" />
          <Calculus value={inssCalc} label="Desconto INSS" />
          <Calculus value={irrfBase} label="IRRF Base" />
          <Calculus value={irrfCalc} label="Desconto IRRF" />
          <Calculus value={liquidSalary} label="Salario Liquido" />
        </div>
      </div>
    </div>
    )
  }
}
