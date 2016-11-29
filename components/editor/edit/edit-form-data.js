export const edit = () => ({
  title: {
    content: '',
    isValid: false,
    validationType: ['empty'],
    errorMsg: ''
  },
  fallBackLocation: {
    content: '',
    isValid: false,
    validationType: ['empty'],
    errorMsg: ''
  },
  unit: {
    content: 'metric',
    isValid: true,
    validationType: [],
    errorMsg: ''
  },
  wind: {
    content: true,
    isValid: true,
    validationType: [],
    errorMsg: ''
  }
});
