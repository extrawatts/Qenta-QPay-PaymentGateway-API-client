import { default as QENTA, ENUMS } from './qenta';


const qenta = new QENTA({
    baseUrl: 'https://api.qenta.com/page/init-server.php/init',
    customerId: 'D200001',
    language: 'en',
    secret: 'B8AKTPWBRMNBV455FG6M2DANE99WU2',
    shopId: "",
})


const orderID = 'Order ID'
const amount = 1234

const entryRes = async () => {
    await qenta.entryTransaction({
        pluginVersion: "TWFnZW50bzsxLjkuMy40O1FlbnRhQ0VFX1FQYXkgMy40LjA7UWVudGEvQ2hlY2tvdXRQYWdlOzQuMi43",
        confirmUrl: "https://www.example.com/confirm",
        orderReference: orderID,
        amount: amount,
        currency: "USD",
        paymentType: ENUMS.PaymentType.CCARD,
        orderDescription: "melihyuxel@gmail.com Mel Yuk",
        successUrl: "https://www.example.com/return",
        pendingUrl: "https://www.example.com/pending",
        cancelUrl: "https://www.example.com/return",
        failureUrl: "https://www.example.com/return",
        serviceUrl: "https://www.example.com/service",
        consumerMerchantCrmId: "02362d0e04af832159f01588c8337107",
        consumerIpAddress: "127.0.0.1",
        consumerUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:98.0) Gecko/20100101 Firefox/98.0",
        customerStatement: " Id:4h7v8D6Q9q"
    });
}
console.log(entryRes);
qenta.entryTransaction({
    pluginVersion: "TWFnZW50bzsxLjkuMy40O1FlbnRhQ0VFX1FQYXkgMy40LjA7UWVudGEvQ2hlY2tvdXRQYWdlOzQuMi43",
    confirmUrl: "https://www.example.com/confirm",
    orderReference: orderID,
    amount: amount,
    currency: "USD",
    paymentType: ENUMS.PaymentType.CCARD,
    orderDescription: "melihyuxel@gmail.com Mel Yuk",
    successUrl: "https://www.example.com/success",
    pendingUrl: "https://www.example.com/pending",
    cancelUrl: "https://www.example.com/cancel",
    failureUrl: "https://www.example.com/failure",
    serviceUrl: "https://www.example.com/service",
    consumerMerchantCrmId: "02362d0e04af832159f01588c8337107",
    consumerIpAddress: "127.0.0.1",
    consumerUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:98.0) Gecko/20100101 Firefox/98.0",
    customerStatement: " Id:4h7v8D6Q9q"
}).then((fingerPrint) => {
    console.log(fingerPrint);
    qenta.execTransaction(fingerPrint).then((execRes) => {
        console.log(execRes)
    })
})