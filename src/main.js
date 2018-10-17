let cleanText;
export default cleanText = function() {

  const emailReg = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', 'g');

  const phoneReg = new RegExp('/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/', 'g');

  function checkEmailExist(text) {
    return emailReg.test(text);
  }

  function checkPhoneExist(text) {
    return phoneReg.test(text);
  }

  function checkEmailOrPhoneExist(text) {
    return checkEmailExist(text) || checkPhoneExist(text);
  }
};

if (typeof window !== 'undefined') {
  window.cleanText = cleanText;
} else {
  logStr('CleanText is a frontend module!');
}
