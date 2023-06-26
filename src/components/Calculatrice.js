import React, { useState } from 'react';

const Calculatrice = () => {
  const [Résultat, setRésultat] = useState(0);
  const [numéro1, setNuméro1] = useState('');
  const [numéro2, setNuméro2] = useState('');

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (index === 1) {
      setNuméro1(value);
    } 
    if (index === 2) {
      setNuméro2(value);
    }
  };

  const Calculatrice = (calculatrice) => {
    const num1 = parseFloat(numéro1);
    const num2 = parseFloat(numéro2);
    let Résultat;

    switch (calculatrice) {
      case '+':
        Résultat = num1 + num2;
        break;
      case '-':
        Résultat = num1 - num2;
        break;
      case '*':
        Résultat = num1 * num2;
        break;
      case '/':
        Résultat = num1 / num2;
        break;
    }

    setRésultat(Résultat);
  };

  return (
    <div>
      <input
        value={numéro1}
        onChange={(e) => handleChange(e, 1)}
      />
      <input
        value={numéro2}
        onChange={(e) => handleChange(e, 2)}
      />

      <div>
        <button onClick={() => Calculatrice('+')}>+</button>
        <button onClick={() => Calculatrice('-')}>-</button>
        <button onClick={() => Calculatrice('*')}>*</button>
        <button onClick={() => Calculatrice('/')}>/</button>
      </div>

      <p>{Résultat}</p>
    </div>
  );
};

export default Calculatrice;