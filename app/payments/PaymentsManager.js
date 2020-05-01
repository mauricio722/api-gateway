const PaymentsManager = module.exports;
const PaymentsMSResource = require('../resources/PaymentsMSResource');

const ProductsMSResource = require('../resources/productsMSresource');

PaymentsManager.create = async (body, logger) => {
  const { idusuario, idProduct, ...payment } = body;
  const sku = idusuario + idProduct;
  const pay = { sku, ...payment };

  return PaymentsMSResource.create(pay, logger);
};

PaymentsManager.success = async (body, logger) => {
  const {
    url, idDealer, costProduct, ...shopping
  } = body;
  const { success } = await PaymentsMSResource.success(url, logger).catch(() => undefined);

  const { idProduct } = shopping;

  if (success) {
    await ProductsMSResource.createShoppingProducts({ ...shopping });
    await ProductsMSResource.updateproduct(idProduct, { idstate: 3 });
    await ProductsMSResource.paymentsReceived({ idusuario: idDealer, idProduct, value: costProduct });
  }

  return { success };
};
PaymentsManager.payout = async (payout, logger) => {
  const senderBatchId = Math.random().toString(36) + Math.random().toString(36);
  const note = '<h1>has retirado dinero de un producto vendido</h1>';
  const emailSubject = 'has retirado';
  const {
    idPaymentsReceived,
    value,
    idProduct,
    senderItemId,
    ...otherData
  } = payout;
  console.log(payout);

  const { success } = await PaymentsMSResource.payout({
    value,
    senderItemId,
    senderBatchId,
    note,
    emailSubject,
    ...otherData,
  }, logger);
  if (success) {
    console.log('manito');

    console.log(idPaymentsReceived);

    await ProductsMSResource.deletePaymentsReceived(idPaymentsReceived);
    // await ProjectsMSResource.updateProjectById(idProject, { funding });
  }

  return { success };
};
