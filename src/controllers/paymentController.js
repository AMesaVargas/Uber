import { validatePaymentForm, processPayment, getPaymentMethods } from '../services/paymentService';
import { authMiddleware } from '../middlewares/authMiddleware';
import { useCallback, useState } from 'react';

export const usePaymentController = () => {

  const [currentPayment, setCurrentPayment] = useState(null);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const processPaymentController = useCallback((formData, amount) => {

    const middleware = authMiddleware(formData);
    if (!middleware.passed) {
      return { success: false, message: middleware.error };
    }

    const validation = validatePaymentForm(formData);
    if (!validation.isValid) {
      return { success: false, message: validation.error };
    }

    const result = processPayment(formData.paymentMethod, amount);

    if (!result.success) {
      return { success: false, message: result.error };
    }

    setCurrentPayment(result);
    setPaymentSuccess(true);
    console.log('Payment processed:', result);

    return { success: true, message: result.message, amount: result.amount };

  }, []);

  const getPaymentMethodsController = useCallback(() => {
    const methods = getPaymentMethods();
    console.log('Payment methods:', methods);
    return methods;
  }, []);

  const resetPaymentController = useCallback(() => {
    setCurrentPayment(null);
    setPaymentSuccess(false);
    console.log('Payment reset');
  }, []);

  return {
    currentPayment,
    paymentSuccess,
    processPaymentController,
    getPaymentMethodsController,
    resetPaymentController,
  };

};