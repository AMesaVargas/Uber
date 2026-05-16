const Payment_methods = {
  card: { name: 'Credit/Debit Card', icon: 'credit-card' },
  mercadopago: { name: 'Mercado Pago', icon: 'phone' },
};

export const validatePaymentForm = (formData) => {

  const { paymentMethod, cardNumber } = formData;

  if (!paymentMethod || paymentMethod.trim() === '') {
    return { isValid: false, error: 'Payment method is required' };
  }
  if (!Payment_methods[paymentMethod]) {
    return { isValid: false, error: 'Payment method is not valid' };
  }

  if (paymentMethod === 'card') {
    if (!cardNumber || cardNumber.trim() === '') {
      return { isValid: false, error: 'Card number is required' };
    }
    if (isNaN(cardNumber)) {
      return { isValid: false, error: 'Card number must contain only numbers' };
    }
    if (cardNumber.length < 16) {
      return { isValid: false, error: 'Card number must be 16 digits' };
    }
  }

  return { isValid: true, error: null };

};

export const processPayment = (paymentMethod, amount) => {

  if (!amount || amount <= 0) {
    return { success: false, error: 'Amount is not valid' };
  }

  console.log(`Processing payment of ${amount} with ${paymentMethod}`);

  return {
    success: true,
    message: 'Payment processed successfully',
    amount,
    paymentMethod,
  };

};

export const getPaymentMethods = () => {
  return Payment_methods;
};