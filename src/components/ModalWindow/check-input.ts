/* eslint-disable max-len */
export function checkName(name: HTMLInputElement, span: HTMLSpanElement) {
  if (name.value.length === 0) {
    span.innerHTML = 'Name is required';
    name.classList.add('personal-info__input_invalid');
    return false;
  }

  const regex = /^[a-zA-Z]([-']?[a-z.]+)*( [a-zA-Z]([-']?[a-z.]+)*)+$/;
  if (regex.test(name.value) !== true) {
    span.innerHTML = 'Write full name';
    name.classList.add('personal-info__input_invalid');
    return false;
  }

  span.innerHTML = `<i class="fas fa-check-circle"></i>`;
  name.classList.remove('personal-info__input_invalid');
  name.classList.add('personal-info__input_valid');
  return true;
}

export function checkPhone(phone: HTMLInputElement, span: HTMLSpanElement) {
  if (phone.classList.contains('personal-info__input_valid')) {
    phone.classList.remove('personal-info__input_valid');
  }

  if (phone.value.length === 0) {
    span.innerHTML = 'Phone no is required';
    phone.classList.add('personal-info__input_invalid');
    return false;
  }

  if (phone.value[0] !== '+') {
    span.innerHTML = 'Phone no should be start with +';
    phone.classList.add('personal-info__input_invalid');
    return false;
  }

  const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
  if (regex.test(phone.value) !== true) {
    span.innerHTML = 'Phone no should be only digits';
    phone.classList.add('personal-info__input_invalid');
    return false;
  }

  if (phone.value.length < 10) {
    span.innerHTML = 'Phone no should be more 9 digits';
    phone.classList.add('personal-info__input_invalid');
    return false;
  }

  span.innerHTML = `<i class="fas fa-check-circle"></i>`;
  phone.classList.remove('personal-info__input_invalid');
  phone.classList.add('personal-info__input_valid');
  return true;
}

export function checkAddress(address: HTMLInputElement, span: HTMLSpanElement) {
  if (address.classList.contains('personal-info__input_valid')) {
    address.classList.remove('personal-info__input_valid');
  }

  if (address.value.length === 0) {
    span.innerHTML = 'Address is required';
    address.classList.add('personal-info__input_invalid');
    return false;
  }

  const arr = address.value.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5 || arr.length < 3) {
      span.innerHTML = 'Write full address';
      address.classList.add('personal-info__input_invalid');
      return false;
    }
  }

  span.innerHTML = `<i class="fas fa-check-circle"></i>`;
  address.classList.remove('personal-info__input_invalid');
  address.classList.add('personal-info__input_valid');
  return true;
}

export function checkMail(mail: HTMLInputElement, span: HTMLSpanElement) {
  if (mail.classList.contains('personal-info__input_valid')) {
    mail.classList.remove('personal-info__input_valid');
  }

  if (mail.value.length === 0) {
    span.innerHTML = 'Email is required';
    mail.classList.add('personal-info__input_invalid');
    return false;
  }

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(mail.value) !== true) {
    span.innerHTML = 'Email invalid';
    return false;
  }

  span.innerHTML = `<i class="fas fa-check-circle"></i>`;
  mail.classList.remove('personal-info__input_invalid');
  mail.classList.add('personal-info__input_valid');
  return true;
}

export function checkDate(date: HTMLInputElement, span: HTMLSpanElement) {
  if (date.classList.contains('credit-card__input_valid')) {
    date.classList.remove('credit-card__input_valid');
  }

  let cardExpiration = date.value.replace(/[^\d]/g, '').substring(0, 4);
  cardExpiration = cardExpiration !== '' ? (cardExpiration.match(/.{1,2}/g) as RegExpMatchArray).join('/') : '';
  date.value = cardExpiration;

  if (+date.value.slice(0, 2) > 12 || +date.value.slice(-2) < 23) {
    span.innerHTML = 'Date is invalid';
    date.classList.add('credit-card__input_invalid');
    return false;
  }

  span.innerHTML = '';
  date.classList.remove('credit-card__input_invalid');
  date.classList.add('credit-card__input_valid');
  return true;
}

export function checkCVV(elem: HTMLInputElement, span: HTMLSpanElement) {
  if (elem.classList.contains('credit-card__input_valid')) {
    elem.classList.remove('credit-card__input_valid');
  }

  const regex = /^[0-9]{3,4}$/;

  if (elem.value.length === 3 && regex.test(elem.value) === true) {
    span.innerHTML = '';
    elem.classList.remove('credit-card__input_invalid');
    elem.classList.add('credit-card__input_valid');
    return true;
  } else {
    span.innerHTML = 'CVV is invalid';
    elem.classList.add('credit-card__input_invalid');
    return false;
  }
}

export function checkNumberCard(elem: HTMLInputElement, img: HTMLImageElement, span: HTMLSpanElement) {
  if (elem.classList.contains('credit-card__input_valid')) {
    elem.classList.remove('credit-card__input_valid');
  }

  if (+elem.value[0] === 5) {
    img.src = 'https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-Download-PNG.png';
  } else if (+elem.value[0] === 4) {
    img.src = 'https://www.pngall.com/wp-content/uploads/2016/07/Mastercard-High-Quality-PNG.png';
  } else if (+elem.value[0] === 6) {
    img.src = 'https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png';
  } else if (+elem.value[0] === 3) {
    img.src =
      'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2018/04/4-you-might-not-notice-amex-new-brand.jpg';
  } else {
    img.src = 'https://www.pngall.com/wp-content/uploads/2/Blue-Credit-Card-PNG.png';
  }

  let cardNum = elem.value.replace(/[^\d]/g, '').substring(0, 16);
  cardNum = cardNum !== '' ? (cardNum.match(/.{1,4}/g) as RegExpMatchArray).join(' ') : '';
  elem.value = cardNum;

  if (elem.value.length >= 19) {
    span.innerHTML = '';
    elem.classList.remove('credit-card__input_invalid');
    elem.classList.add('credit-card__input_valid');
    return true;
  } else {
    span.innerHTML = 'Number card is invalid';
    elem.classList.add('credit-card__input_invalid');
    return false;
  }
}
