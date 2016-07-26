export const ACCT_1 = 'ACCT_1';
export const ACCT_2 = 'ACCT_2';
export const ACCT_3 = 'ACCT_3';
export const ACCT_4 = 'ACCT_4';

export const displayAcct1 = (state) => ({
  type: ACCT_1,
  payload: !state
});

export const displayAcct2 = (state) => ({
  type: ACCT_2,
  payload: !state
});

export const displayAcct3 = (state) => ({
  type: ACCT_3,
  payload: !state
});

export const displayAcct4 = (state) => ({
  type: ACCT_4,
  payload: !state
});
