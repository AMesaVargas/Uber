import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ 
  accessToken: 'APP_USR-8590627879790571-051914-855a339fc904ac8b649efa0139e600fa-3412374161'
});

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

export const processPayment = async (paymentMethod, amount, tripDetails = {}) => {
  if (!amount || amount <= 0) {
    return { success: false, error: 'Amount is not valid' };
  }

  console.log(`Processing payment of ${amount} with ${paymentMethod}`);

  if (paymentMethod === 'mercadopago') {
    try {
      const preference = new Preference(client);
      
      const body = {
        items: [
          {
            id: tripDetails.id || 'viaje-default',
            title: `Viaje UberClone - ${tripDetails.origin || 'Origen'} a ${tripDetails.destination || 'Destino'}`,
            quantity: 1,
            unit_price: Number(amount),
            currency_id: 'COP'
          }
        ],
        back_urls: {
          success: 'uberclone://payment-success',
          failure: 'uberclone://payment-failure',
          pending: 'uberclone://payment-pending'
        },
        auto_return: 'approved',
      };

      const response = await preference.create({ body });

      return {
        success: true,
        message: 'Link de Mercado Pago de prueba generado con éxito',
        amount,
        paymentMethod,
        urlPago: response.init_point
      };

    } catch (error) {
      console.error('Error directo en Mercado Pago:', error);
      return { success: false, error: 'Error al conectar con la pasarela de Mercado Pago' };
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