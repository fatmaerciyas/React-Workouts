const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit": //para yatir
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw": //para cek
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan": //kredi cek
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan": //kredi ode
      return {
        ...state,
        loan: 0,
        loanPupose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: "account/payLoan" };
}

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(2000, "Buy a house"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());
