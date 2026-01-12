import React, { useState } from "react";

const SalaryCalculator = () => {
  const [annualSalary, setAnnualSalary] = useState(null);

  const [result, setResult] = useState([]);

  const calculateInHandSalary = (annualSalary) => {
    const taxSlabs = [
      { limit: 400000, rate: 0.0 }, // Up to 4,00,000 -> 0%  0
      { limit: 800000, rate: 0.05 }, // 4,00,001 - 8,00,000 -> 5%  20000
      { limit: 1200000, rate: 0.1 }, // 8,00,001 - 12,00,000 -> 10%  40000
      { limit: 1600000, rate: 0.15 }, // 12,00,001 - 16,00,000 -> 15%  60000
      { limit: 2000000, rate: 0.2 }, // 16,00,001 - 20,00,000 -> 20%   80000
      { limit: 2400000, rate: 0.25 }, // 20,00,001 - 24,00,000 -> 25%  56000
      { limit: Infinity, rate: 0.3 }, // Above 24,00,000 -> 30%
    ];

    let taxPayable = 0;
    let prevLimit = 0;

    for (let slab of taxSlabs) {
      if (annualSalary > prevLimit) {
        let taxableAmount = Math.min(annualSalary, slab.limit) - prevLimit;
        taxPayable += taxableAmount * slab.rate;
        prevLimit = slab.limit;
      } else {
        break;
      }
    }

    // 4% Cess on total tax
    // let cess = taxPayable * 0.04;
    let totalTax = taxPayable - 75000;

    // Net Salary Calculation
    let inHandAnnualSalary = annualSalary - totalTax;
    let inHandMonthlySalary = inHandAnnualSalary / 12;

    return {
      annualSalary: annualSalary.toFixed(0),
      totalTax: totalTax.toFixed(0),
      inHandAnnualSalary: inHandAnnualSalary.toFixed(0),
      inHandMonthlySalary: inHandMonthlySalary.toFixed(0),
    };
  };

  const handleCalculate = () => {
    if (!result.find((data) => data.annualSalary == annualSalary)) {
      const tempObj = calculateInHandSalary(annualSalary);
      const calculationResult = [...result, tempObj];
      setResult(calculationResult);
    }
  };

  return (
    <div>
      <h1>Salary Calculator</h1>
      <input
        type="number"
        value={annualSalary}
        onChange={(e) => setAnnualSalary(Number(e.target.value))}
        placeholder="Enter annual salary"
      />
      <button onClick={handleCalculate}>Calculate</button>

      {result && (
        <table border="1" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Annual Salary (₹)</th>
              <th>Total Tax Payable (₹)</th>
              <th>In-Hand Annual Salary (₹)</th>
              <th>In-Hand Monthly Salary (₹)</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data) => {
              return (
                <tr>
                  <td>{data.annualSalary}</td>
                  <td>{data.totalTax}</td>
                  <td>{data.inHandAnnualSalary}</td>
                  <td>{data.inHandMonthlySalary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalaryCalculator;
