
const webpush = require('web-push');




webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    'BKUc_OvdGM4KqyMIt9Cx6oFzkyz7U1pRV01Ykhrp0q25EQulA2d5vmjhCWk3f2twLJ8Q89awxUEobuS30cBh-7U',
    'SmQejCayuFIltL5_FIO_bWJ5eo1idQaoS9ieXnMVVrg'
)

var pushSubscriptionObject = {//insert the subscription object from the console log of the push client here}


webpush.sendNotification(pushSubscriptionObject, 'Your Push Payload Text');
