import { savePayment } from '../storage/FirestoreService';
import { MERCADOPAGO_ACCESS_TOKEN } from '@env';

const ACCESS_TOKEN = MERCADOPAGO_ACCESS_TOKEN;

const Payment_methods = {
  card: { name: 'Credit/Debit Card', icon: 'credit-card' },
  mercadopago: { name: 'Mercado Pago', icon: 'phone' },
};

export const validatePaymentForm = formData => {
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

export const processPayment = async (
  paymentMethod,
  amount,
  tripDetails = {},
) => {
  if (!amount || amount <= 0) {
    return { success: false, error: 'Amount is not valid' };
  }

  console.log(`Processing payment of ${amount} with ${paymentMethod}`);

  if (paymentMethod === 'mercadopago') {
    try {
      const body = {
        items: [
          {
            id: tripDetails.id || 'viaje-default',
            title: `Viaje UberClone - ${tripDetails.origin || 'Origen'} a ${tripDetails.destination || 'Destino'}`,
            quantity: 1,
            unit_price: Number(amount),
            currency_id: 'COP',
          },
        ],
        back_urls: {
          success: `uberclone://payment-success?amount=${amount}`,
          failure: 'uberclone://payment-failure',
          pending: 'uberclone://payment-pending',
        },
        auto_return: 'approved',
        payment_methods: {
          default_payment_method_id: 'master',
          installments: 1,
          default_installments: 1,
          max_allowed_amount: 100000,
        },
      };

      // Llamamos directamente a la API REST de Mercado Pago con fetch
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Mercado Pago error response:', data);
        return { success: false, error: 'Error al crear la preferencia de pago' };
      }

      return {
        success: true,
        message: 'Link de Mercado Pago generado con exito',
        amount,
        paymentMethod,
        urlPago: data.init_point,
      };
    } catch (error) {
      console.error('Error directo en Mercado Pago:', error);
      return {
        success: false,
        error: 'Error al conectar con la pasarela de Mercado Pago',
      };
    }
  }

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

// Guarda el pago confirmado en Firestore
export const confirmPayment = async (uid, paymentData) => {
  try {
    const result = await savePayment(uid, paymentData);
    return result;
  } catch (error) {
    return { success: false, error: error.message };
  }
};